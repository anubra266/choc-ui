import {
  Flex,
  useColorModeValue,
  IconButton,
  Tooltip,
  Link,
  Box,
  useClipboard,
} from "@chakra-ui/react";
import { MdRefresh } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { IoIosCopy, IoMdCode } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

import { editOnlineCds } from "./edit-online";
import { VscWindow } from "react-icons/vsc";

const ActionButton = (props) => {
  return (
    <Tooltip hasArrow placement="top" label={props.label}>
      <IconButton
        fontSize="xl"
        color={props.color}
        icon={props.icon}
        aria-label={props.value}
        variant="ghost"
        rounded="full"
        onClick={props.onClick}
        _focus={{ boxShadow: "none" }}
      />
    </Tooltip>
  );
};
export default function CodeActions(props) {
  const { hasCopied, onCopy } = useClipboard(props.code);
  const { hasCopiedOriginal, onCopyOriginal } = useClipboard(props.preCode);
  return (
    <Flex
      justifyContent="end"
      w="full"
      bg={useColorModeValue("brand.100", "gray.700")}
      roundedBottom="lg"
      px={5}
      py={1}
    >
      <ActionButton
        icon={<IoMdCode />}
        label={`${
          props.codeEditor.isOpen ? "Hide" : "Show"
        } Editable Component Code`}
        onClick={() => props.codeEditor.onToggle()}
      />
      {props.isDirty && (
        <Box color={hasCopied && "green.500"}>
          <ActionButton
            icon={hasCopied ? <IoCheckmarkDoneSharp /> : <VscWindow />}
            onClick={onCopy}
            label={hasCopied ? "Copied!" : "Copy Editor Code"}
          />
        </Box>
      )}
      <Box color={hasCopiedOriginal && "green.500"}>
        <ActionButton
          icon={hasCopiedOriginal ? <IoCheckmarkDoneSharp /> : <IoIosCopy />}
          onClick={onCopyOriginal}
          label={hasCopiedOriginal ? "Copied!" : "Copy Original Code"}
        />
      </Box>
      <Link isExternal href={`/preview/${props.path}`}>
        <ActionButton icon={<BiLinkExternal />} label="Open Demo in New Tab" />{" "}
      </Link>
      <Link isExternal href={editOnlineCds(props.code, props.path)}>
        <ActionButton
          icon={<AiOutlineCodeSandbox />}
          label="Open Code in Codesandbox"
        />
      </Link>
      <ActionButton
        icon={<MdRefresh />}
        onClick={props.resetDemo}
        label="Reset Demo Code"
      />
    </Flex>
  );
}
