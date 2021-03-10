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

  const [iframeHead, setIframeHead] = useState(null);
  const [iframeBody, setIframeBody] = useState(null);

  const handleLoad = (e) => {
    if (!e.defaultPrevented) {
      setIframeHead(e.target.contentDocument?.head);
      setIframeBody(e.target.contentDocument?.body);
    }
  };
  return (
    <iframe
      srcDoc={`<!DOCTYPE html>`}
      width={`${props.size}%`}
      height={props.height || "500px"}
      title={`Preview-${props.path}`}
      onLoad={handleLoad}
    >
      {iframeBody &&
        iframeHead &&
        createPortal(
          <CacheProvider value={memoizedCreateCacheWithContainer(iframeHead)}>
            <ChakraProvider theme={theme}>
              <Fonts />
              {props.children}
            </ChakraProvider>
          </CacheProvider>,
          iframeBody
        )}
    </iframe>
  );
};

export default Frame;
