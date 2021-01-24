import { Flex, useColorModeValue, IconButton, Tooltip } from "@chakra-ui/react";
import { MdRefresh } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineCodeSandbox, AiOutlineCodepen } from "react-icons/ai";
import { IoIosCopy, IoMdCode } from "react-icons/io";

const ActionButton = (props) => {
  return (
    <Tooltip hasArrow placement="top" label={props.label}>
      <IconButton
        fontSize="xl"
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
  return (
    <Flex
      justifyContent="end"
      w="full"
      bg={useColorModeValue("gray.200", "gray.700")}
      borderBottomRadius="lg"
      px={5}
      py={1}
    >
      <ActionButton icon={<IoMdCode />} label="Toggle Component Code" />
      <ActionButton icon={<IoIosCopy />} label="Copy Component Code" />
      <ActionButton icon={<BiLinkExternal />} label="Open Demo in New Tab" />
      <ActionButton
        icon={<AiOutlineCodeSandbox />}
        label="Open Code in Codesandbox"
      />
      <ActionButton icon={<AiOutlineCodepen />} label="Open code in codepen" />{" "}
      <ActionButton icon={<MdRefresh />} label="Reset Demo Code" />
    </Flex>
  );
}
