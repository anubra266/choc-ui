import React from "react";
import {
  IconButton,
  useColorMode,
  Icon,
  useColorModeValue,
  Link,
  useClipboard,
} from "@chakra-ui/react";
import { IoCopy, IoCheckmarkDoneSharp } from "react-icons/io5";
import { useRouter } from "next/router";

export const CopyCode = () => {
  const url = useRouter().pathname;
  const arr = url.split("/");
  const code = require(`!!raw-loader!~/pages/preview/${arr[2]}/${arr[3]}`)
    .default;
  console.log("code", code);
  const { hasCopied, onCopy } = useClipboard(code);
  return (
    <React.Fragment>
      <IconButton
        borderRightRadius={0}
        borderLeftRadius="full"
        size="md"
        fontSize="lg"
        aria-label={`Copy Code`}
        p={4}
        variant="solid"
        colorScheme={hasCopied ? "green" : "teal"}
        ml={{ base: "0", md: "3" }}
        onClick={onCopy}
        icon={
          <Icon as={hasCopied ? IoCheckmarkDoneSharp : IoCopy} boxSize={6} />
        }
      />
    </React.Fragment>
  );
};
