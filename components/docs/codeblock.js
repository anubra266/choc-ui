import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
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
            boxShadow="lg"
            bg="brand.900"
            borderRadius="lg"
            p={2}
            mt={6}
        >
            <SyntaxHighlighter
                wrapLongLines
                {...props}
                style={coldarkDark}
                customStyle={{
                    background: "transparent",
                    fontSize: "0.9rem",
                }}
            />
            {copyButton}
        </Box>
    );
};
