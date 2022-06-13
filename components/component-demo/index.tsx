import {
  ButtonGroup,
  Flex,
  Stack,
  Text,
  chakra,
  useClipboard,
  HTMLChakraProps,
} from "@chakra-ui/react";
import type { Dict } from "@chakra-ui/utils";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { BsCodeSlash, BsLaptop, BsTabletLandscape } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { BiReset } from "react-icons/bi";
import { IoCheckmarkDoneSharp, IoCopy, IoCopyOutline } from "react-icons/io5";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

import * as componentDemo from "./machine";
import { ActionButton } from "components/navbar/action-button";
import { useMachine, useSetup } from "@zag-js/react";
import { useId } from "react";
import { FaEye } from "react-icons/fa";
import { DeviceView } from "components/component-demo/machine/component-demo.types";
import { demoScope } from "components/component-demo/demo-scope";
import Link from "next/link";
import { PreviewFrame } from "components/component-demo/preview-frame";
import { editOnlineCds } from "components/component-demo/edit-online";
import { transformCode } from "components/component-demo/transform-code";

export type ComponentDemoProps = {
  comp: Dict;
  scope?: Dict;
  path?: string;
} & HTMLChakraProps<"div">;

export const ComponentDemo = (props: ComponentDemoProps) => {
  const { comp, scope, path: propsPath, ...rest } = props;
  const path = propsPath || comp?.preview;
  const { name, url, preview } = comp;
  const rawCode = require(`!!raw-loader!pages/preview/${path}`).default;
  const initialCode = transformCode(rawCode);

  const { hasCopied: hasCopiedOriginal, onCopy: onCopyOriginal } =
    useClipboard(initialCode);

  const [state, send] = useMachine(componentDemo.machine({ initialCode }));
  const ref = useSetup({ send, id: useId() });

  const api = componentDemo.connect(state, send);

  const { hasCopied, onCopy } = useClipboard(api.code);

  return (
    <LiveProvider
      scope={{ ...demoScope, ...(scope && scope) }}
      code={api.code}
      key={path}
    >
      <chakra.div
        border="solid 1px"
        rounded="lg"
        borderColor="gray.100"
        _dark={{
          borderColor: "blackAlpha.300",
          shadow: "md",
        }}
        id={name}
      >
        <Flex
          ref={ref}
          px="2"
          py="2"
          align="center"
          gap="4"
          borderBottom="solid 1px"
          borderColor="gray.100"
          _dark={{
            borderColor: "blackAlpha.300",
          }}
        >
          <Flex align="center" gap="4">
            <Text textTransform="capitalize" fontWeight="medium">
              <Link href={`#${preview}`}>{name}</Link>
            </Text>
            <ButtonGroup size="xs" spacing="1">
              <ActionButton
                aria-label="Open demo in new tab"
                icon={<HiOutlineExternalLink />}
                isLink
                href={`/preview/${preview}`}
              />
              <ActionButton
                aria-label="Open in Codesandbox"
                icon={<AiOutlineCodeSandbox />}
                isLink
                href={editOnlineCds(rawCode, path)}
              />
            </ButtonGroup>
          </Flex>

          <Flex align="center" ml="auto">
            <ButtonGroup size="xs" spacing="1" isAttached variant="outline">
              <ActionButton
                aria-label="Mobile view"
                icon={<FiSmartphone />}
                {...api.getDeviceToggleProps(DeviceView.MOBILE)}
              />
              <ActionButton
                aria-label="Tablet view"
                icon={<BsTabletLandscape />}
                {...api.getDeviceToggleProps(DeviceView.TABLET)}
              />
              <ActionButton
                aria-label="Desktop view"
                icon={<BsLaptop />}
                {...api.getDeviceToggleProps(DeviceView.DESKTOP)}
              />
            </ButtonGroup>
          </Flex>

          <Flex align="center" gap="1" w="24">
            <ActionButton
              aria-label={`Switch to ${api.isCodeMode ? "Preview" : "Code"}`}
              variant="solid"
              isRound
              size="xs"
              icon={api.isCodeMode ? <FaEye /> : <BsCodeSlash />}
              {...api.toggleButtonProps}
            />
            <Text fontSize="xs" fontWeight="semibold">
              {api.isCodeMode && "Code"}
              {api.isPreviewMode && "Preview"}
            </Text>
          </Flex>
        </Flex>

        <chakra.div hidden={!api.isPreviewMode} {...rest}>
          <PreviewFrame path={path} {...api.frameProps}>
            <LivePreview />
          </PreviewFrame>
        </chakra.div>
        <chakra.div
          hidden={!api.isCodeMode}
          pos="relative"
          _light={{ bg: "rgba(248, 249, 250, 0.65)" }}
          _dark={{ bg: "blackAlpha.700" }}
          roundedBottom="lg"
          p={2}
          w="full"
          h={300}
          overflow="auto"
          fontSize="sm"
          resize="vertical"
          sx={{
            "*:focus": {
              boxShadow: "none",
              outline: "none",
            },
          }}
        >
          <LiveEditor key={api.isDirty ? 1 : 0} {...api.editorProps} />
          <Stack pos="absolute" top="2" right="2">
            <ActionButton
              aria-label="Copy code"
              color={hasCopiedOriginal ? "green" : "inherit"}
              icon={
                hasCopiedOriginal ? <IoCheckmarkDoneSharp /> : <IoCopyOutline />
              }
              onClick={onCopyOriginal}
            />
            {api.isDirty && (
              <ActionButton
                aria-label="Copy code"
                color={hasCopied ? "green" : "inherit"}
                icon={hasCopied ? <IoCheckmarkDoneSharp /> : <IoCopy />}
                onClick={onCopy}
              />
            )}
            {api.isDirty && (
              <ActionButton
                aria-label="Reset code"
                icon={<BiReset />}
                onClick={api.resetCode}
              />
            )}
          </Stack>
        </chakra.div>

        <chakra.div
          _empty={{ display: "none" }}
          bg="red.600"
          roundedBottom="lg"
          py={2}
          px={5}
          fontSize="xs"
        >
          <LiveError />
        </chakra.div>
      </chakra.div>
    </LiveProvider>
  );
};
