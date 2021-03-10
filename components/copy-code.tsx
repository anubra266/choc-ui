import React from "react";
import { IconButton, Icon, useClipboard, Tooltip } from "@chakra-ui/react";
import { IoCopy, IoCheckmarkDoneSharp } from "react-icons/io5";
import { useRouter } from "next/router";

export const CopyCode = () => {
  const url = useRouter().pathname;
  const arr = url.split("/");
  const code = require(`!!raw-loader!pages/preview/${arr[2]}/${arr[3]}`)
    .default;
  const { hasCopied, onCopy } = useClipboard(code);
  return (
    <Tooltip
      shouldWrapChildren
      hasArrow
      label={hasCopied ? "Copied!" : "Copy Code"}
      placement="left-start"
    >
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Copy Code`}
        variant="ghost"
        colorScheme={hasCopied ? "green" : "teal"}
        onClick={onCopy}
        icon={
          <Icon as={hasCopied ? IoCheckmarkDoneSharp : IoCopy} boxSize={6} />
        }
      />
    </Tooltip>
  );
};
