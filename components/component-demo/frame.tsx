import React, { useEffect, useReducer, useState } from "react";
import { createPortal } from "react-dom";

import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";
import { CacheProvider } from "@emotion/react";
import Theme from "theme";
import { useColorMode } from "@chakra-ui/color-mode";

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
  const [contentRef, setContentRef] = useState(null);
  const doc = contentRef?.contentWindow?.document;
  const mountNode = doc?.body;
  const insertionPoint = doc?.head;

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const updateFrame = () => {
    //*Reload Iframe on every rerender
    forceUpdate();
  };

  function resizeIframe(iframe: HTMLIFrameElement) {
    iframe.height = iframe.contentWindow?.document?.body?.scrollHeight + "px";
    window.requestAnimationFrame(() => resizeIframe(iframe));
  }
  useEffect(() => {
    //*Automatically resize Ifram height to fit content
    contentRef && resizeIframe(contentRef);
  }, [contentRef]);
  //*update Frame when colorMode changes
  
  const { colorMode } = useColorMode();
  useEffect(() => {
    contentRef?.contentWindow?.location.reload();
  }, [colorMode]);

  return (
    <iframe
      srcDoc={`<!DOCTYPE html>`}
      width={`${props.size}%`}
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
  );
};

export default Frame;
