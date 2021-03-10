import { ChakraProvider, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import { createPortal } from "react-dom";

import Fonts from "theme/fonts";
import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";
import { CacheProvider } from "@emotion/react";

const memoizedCreateCacheWithContainer = weakMemoize(
  (container: HTMLElement) => {
    const newCache = createCache({
      container,
      key: "with-emotion",
    });
    return newCache;
  }
);

const Frame = (props) => {
  const theme = useTheme();

  const [contentRef, setContentRef] = useState(null);
  const doc = contentRef?.contentWindow?.document;
  const mountNode = doc?.body;
  const insertionPoint = doc?.head;

  return (
    <iframe
      srcDoc={`<!DOCTYPE html>`}
      width={`${props.size}%`}
      height={props.height || "500px"}
      title={`Preview-${props.path}`}
      ref={setContentRef}
    >
      {insertionPoint &&
        mountNode &&
        createPortal(
          <CacheProvider
            value={memoizedCreateCacheWithContainer(insertionPoint)}
          >
            <ChakraProvider theme={theme}>
              <Fonts />
              {props.children}
            </ChakraProvider>
          </CacheProvider>,
          mountNode
        )}
    </iframe>
  );
};

export default Frame;
