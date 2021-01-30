import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { Box, Button, useClipboard } from "@chakra-ui/react";

export const CodeBlock = (props) => {
  const { hasCopied, onCopy } = useClipboard(props.children);
  return (
    <Box
      pos="relative"
      role="group"
      shadow="lg"
      bg="brand.900"
      rounded="lg"
      p={2}
      my={6}
    >
      <LiveProvider code={props.children}>
        <LiveEditor
          style={{ resize: "vertical", overflow: "auto" }}
          language={props.lang}
        />
        <Box
          _empty={{ display: "none" }}
          bg="red.600"
          borderBottomRadius="lg"
          py={2}
          px={5}
          fontSize="xs"
        >
          {props.showError && <LiveError />}
        </Box>
      </LiveProvider>
      <Button
        opacity="0"
        _groupHover={{
          opacity: "1",
        }}
        transition="opacity .3s ease-in-out"
        onClick={onCopy}
        pos="absolute"
        right={4}
        top={2}
        size="sm"
      >
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </Box>
  );
};
