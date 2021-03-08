import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

import {
  Box,
  Collapse,
  useDisclosure,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  ChakraProvider,
  useTheme,
} from "@chakra-ui/react";

import CodeActions from "./actions";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { demoScope } from "./demo-scope";

import { cleanCode } from "./clean-code";
import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";
import { CacheProvider } from "@emotion/react";
import Frame from "./frame";
const memoizedCreateCacheWithContainer = weakMemoize((container) => {
  const newCache = createCache({
    container,
    key: "with-emotion",
  });
  return newCache;
});
const ComponentDemo = (props) => {
  const preCode = require(`!!raw-loader!~/pages/preview/${props.path}`).default;
  const postCode = cleanCode(preCode, props.path);
  const codeEditor = useDisclosure();
  const [code, setCode] = useState(postCode);
  const resetDemo = () => setCode(postCode);
  const [isDirty, setIsDirty] = useState(false);
  useEffect(() => setIsDirty(postCode !== code), [code]);
  const editorProps = { codeEditor, preCode, code, resetDemo, isDirty };
  const preview = useRef(null);
  const doc = preview?.current?.contentWindow?.document;
  const mountNode = doc?.body;
  const insertionPoint = doc?.head;
  const [size, setSize] = useState(100);
  return (
    <React.Fragment>
      <LiveProvider
        scope={{ ...demoScope, ...(props.scope && props.scope) }}
        code={code}
      >
        <Box pos="relative" py={3} overflow="auto">
          <Slider
            aria-label="Responsive slider"
            colorScheme="brand"
            defaultValue={size}
            maxW="99%"
            step={0.01}
            min={23}
            onChange={(v) => setSize(v)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <iframe
            width={`${size}%`}
            height={props.height || "500px"}
            title="Preview"
            ref={preview}
            loading="lazy"
          >
            {mountNode &&
              insertionPoint &&
              createPortal(
                <CacheProvider
                  value={memoizedCreateCacheWithContainer(insertionPoint)}
                >
                  <Frame>
                    <LivePreview />
                  </Frame>
                </CacheProvider>,
                mountNode
              )}
          </iframe>
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
            <LiveEditor onChange={(c) => setCode(c)} />
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
