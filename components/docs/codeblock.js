import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { Box, Button, useClipboard } from "@chakra-ui/react";

export const CodeBlock = (props) => {
  const { hasCopied, onCopy } = useClipboard(props.children);
  const copyButton = (
    <Button onClick={onCopy} pos="absolute" right={4} top={2} size="sm">
      {hasCopied ? "Copied" : "Copy"}
    </Button>
  );
  return (
    <Box
      pos="relative"
      shadow="lg"
      bg="brand.900"
      rounded="lg"
      p={2}
      my={6}
    >
      <LiveProvider code={props.children}>
        <LiveEditor style={{resize:"vertical",overflow:'auto'}} language={props.lang} />
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
      {copyButton}
    </Box>
  );
};
