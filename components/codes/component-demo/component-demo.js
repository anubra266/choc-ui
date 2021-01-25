import React, { useState } from "react";
import { Box, Collapse, useDisclosure } from "@chakra-ui/react";

import CodeActions from "./actions";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { demoScope } from "./demo-scope";

import { cleanCode } from "./clean-code";

const ComponentDemo = (props) => {
  const preCode = require(`!!raw-loader!~/pages/preview/${props.path}`).default;
  const postCode = cleanCode(preCode, props.path);
  const codeEditor = useDisclosure();
  const [demoKey, setDemoKey] = useState("demo");
  const resetDemo = () => setDemoKey(Math.random());

  const editorProps = { codeEditor, code: preCode, resetDemo };
  // TODO add demo display slider
  return (
    <React.Fragment>
      <LiveProvider key={demoKey} scope={demoScope} code={postCode}>
        <Box
          pos="relative"
          minH={props.height || "500px"}
          py={3}
          overflow="auto"
        >
          <LivePreview />
        </Box>
        <CodeActions {...props} {...editorProps} />
        <Collapse in={codeEditor.isOpen} animateOpacity>
          <Box
            pos="relative"
            shadow="lg"
            bg="brand.900"
            rounded="lg"
            p={2}
            mt={6}
            h={300}
            overflow="auto"
            fontSize="sm"
            resize="vertical"
          >
            <LiveEditor />
          </Box>
        </Collapse>
        <Box
          _empty={{ display: "none" }}
          bg="red.600"
          borderBottomRadius="lg"
          py={2}
          px={5}
          fontSize="xs"
        >
          <LiveError />
        </Box>
      </LiveProvider>
    </React.Fragment>
  );
};

export default ComponentDemo;
