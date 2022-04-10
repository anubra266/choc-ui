import React, { useContext, useEffect, useReducer, useState } from "react";
import { createPortal } from "react-dom";

import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";
import { CacheProvider } from "@emotion/react";
import Theme from "theme";
import { useColorMode } from "@chakra-ui/color-mode";
import { Resizable } from "re-resizable";
import { Box } from "@chakra-ui/layout";
import { ThemeContext } from "theme/context";
import { useCallback } from "react";

const memoizedCreateCacheWithContainer = weakMemoize(
  (container: HTMLElement) => {
    const newCache = createCache({
      container,
      key: "with-emotion",
    });
    return newCache;
  }
);

const Frame = (props: any) => {
  const [contentRef, setContentRef] = useState(null);
  const doc = contentRef?.contentWindow?.document;
  const mountNode = doc?.body;
  const insertionPoint = doc?.head;
  const [height, setHeight] = useState(300);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const updateFrame = () => {
    //*Reload Iframe on every rerender
    forceUpdate();
  };

  useEffect(() => {
    function resizeIframe(iframe: HTMLIFrameElement) {
      if (iframe.contentWindow?.document?.body?.scrollHeight)
        setHeight(iframe.contentWindow?.document?.body?.scrollHeight);
      // iframe.height =
      //   iframe.contentWindow?.document?.body?.scrollHeight + 0 + "px";
      window.requestAnimationFrame(() => resizeIframe(iframe));
    }

    //*Automatically resize Ifram height to fit content
    contentRef && resizeIframe(contentRef);
  }, [contentRef]);
  //*update Frame when colorMode or brand changes
  const { brand } = useContext(ThemeContext);

  const { colorMode } = useColorMode();

  useEffect(() => {
    contentRef?.contentWindow?.location.reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode, brand]);

  return (
    <Resizable
      bounds="parent"
      minWidth={360}
      maxWidth="100%"
      minHeight={height}
      maxHeight={height}
      handleComponent={{ right: <FrameHandle /> }}
    >
      <iframe
        srcDoc={`<!DOCTYPE html>`}
        width="100%"
        height={height}
        title={`Preview-${props.path}`}
        ref={setContentRef}
        loading="lazy"
        onLoad={updateFrame}
      >
        {insertionPoint &&
          mountNode &&
          createPortal(
            <CacheProvider
              value={memoizedCreateCacheWithContainer(insertionPoint)}
            >
              <Theme>{props.children}</Theme>
            </CacheProvider>,
            mountNode
          )}
      </iframe>
    </Resizable>
  );
};

export default Frame;

const FrameHandle = () => {
  return (
    <Box
      w="5px"
      bg="blackAlpha.300"
      bgImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`}
      h="full"
    ></Box>
  );
};
