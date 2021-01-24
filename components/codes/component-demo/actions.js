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
import { AiOutlineCodeSandbox, AiOutlineCodepen } from "react-icons/ai";
import { IoIosCopy, IoMdCode } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

import { editOnlineCdp, editOnlineCds } from "./edit-online";

const ActionButton = (props) => {
  return (
    <Tooltip hasArrow placement="top" label={props.label}>
      <IconButton
        fontSize="xl"
        color={props.color}
        icon={props.icon}
        aria-label={props.value}
        variant="ghost"
        borderRadius="full"
        onClick={props.onClick}
        _focus={{ boxShadow: "none" }}
      />
    </Tooltip>
  );
};
export default function CodeActions(props) {
  const { hasCopied, onCopy } = useClipboard(props.code);
  return (
    <Flex
      justifyContent="end"
      w="full"
      bg={useColorModeValue("gray.200", "gray.700")}
      borderBottomRadius="lg"
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
      <Box color={hasCopied && "green.500"}>
        <ActionButton
          icon={hasCopied ? <IoCheckmarkDoneSharp /> : <IoIosCopy />}
          onClick={onCopy}
          label={hasCopied ? "Copied!" : "Copy Original Component Code"}
        />
      </Box>
      <Link isExternal href={`/preview/${props.path}`}>
        <ActionButton icon={<BiLinkExternal />} label="Open Demo in New Tab" />{" "}
      </Link>
      <ActionButton
        onClick={() => editOnlineCds(code, props.path)}
        icon={<AiOutlineCodeSandbox />}
        label="Open Code in Codesandbox"
      />
      <ActionButton
        onClick={() => editOnlineCdp(code, props.path)}
        icon={<AiOutlineCodepen />}
        label="Open code in codepen"
      />{" "}
      <ActionButton
        icon={<MdRefresh />}
        onClick={props.resetDemo}
        label="Reset Demo Code"
      />
    </Flex>
  );
}
