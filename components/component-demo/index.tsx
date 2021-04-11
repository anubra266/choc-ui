import React, { useState } from "react";
import {
  Box,
  Collapse,
  useDisclosure,
  Flex,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";

import CodeActions from "./actions";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { demoScope } from "./demo-scope";

import { cleanCode } from "./clean-code";
import Frame from "./frame";

const ComponentDemo = (props: any) => {
  const path = props.path || props.comp?.preview;
  const preCode = require(`!!raw-loader!pages/preview/${path}`).default;
  const postCode = cleanCode(preCode, path);

  const codeEditor = useDisclosure();

  const [code, setCode] = useState(postCode);

  const resetDemo = () => setCode(postCode);

  const [isDirty, setIsDirty] = useState(false);

  const editorProps = { codeEditor, preCode, code, resetDemo, isDirty };
  const editorChange = (c: any) => {
    setCode(c);
    setIsDirty(c !== postCode);
  };
  return (
    <React.Fragment key={path}>
      <LiveProvider
        scope={{ ...demoScope, ...(props.scope && props.scope) }}
        code={code}
      >
        <Box
          pos="relative"
          overflow="clip"
          roundedTop="lg"
          roundedBottom={!codeEditor.isOpen && "lg"}
          borderStyle="solid"
          borderWidth="1px"
          borderColor={useColorModeValue("gray.100", "gray.900")} 
        >
          <Flex px={5} py={1} w="full" alignItems="center">
            <Box fontSize="xl" fontWeight="semibold" textTransform="capitalize">
              {props.comp?.name}
            </Box>
            <Spacer />
            <CodeActions {...props} {...editorProps} path={path} />
          </Flex>
          <Frame path={path}>
            <LivePreview />
          </Frame>
        </Box>
        <Collapse in={codeEditor.isOpen} animateOpacity>
          <Box
            pos="relative"
            shadow="lg"
            bg="brand.900"
            roundedBottom="lg"
            p={2}
            h={300}
            overflow="auto"
            fontSize="sm"
            resize="vertical"
          >
            <LiveEditor onChange={editorChange} />
          </Box>
        </Collapse>
        <Box
          _empty={{ display: "none" }}
          bg="red.600"
          roundedBottom="lg"
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
