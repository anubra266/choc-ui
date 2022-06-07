import React from "react";
import { Icon, IconButton, Tooltip, useClipboard } from "@chakra-ui/react";
import { IoCheckmarkDoneSharp, IoCopy } from "react-icons/io5";

export const CopyCode = ({ code }: { code: string }) => {
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
