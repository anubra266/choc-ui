import { useEffect, useReducer, useState } from "react";
import { createPortal } from "react-dom";
import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";
import { CacheProvider } from "@emotion/react";
import { chakra, useColorMode } from "@chakra-ui/react";
import type { ResizableProps } from "re-resizable";
import { Resizable } from "re-resizable";

import { AppWrapper } from "~/root";

export type PreviewFrameProps = {
  children: React.ReactNode;
  path: string;
  resizableProps: ResizableProps;
};

const memoizedCreateCacheWithContainer = weakMemoize(
  (container: HTMLElement) => {
    const newCache = createCache({
      container,
      key: "with-emotion",
    });
    return newCache;
  }
);

export const PreviewFrame = (props: PreviewFrameProps) => {
  const { children, resizableProps, ...rest } = props;
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
  const doc = contentRef?.contentWindow?.document;
  const mountNode = doc?.body;
  const insertionPoint = doc?.head;

  const [height, setHeight] = useState(0);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const updateFrame = () => {
    //*Reload Iframe on every rerender
    forceUpdate();
  };

  useEffect(() => {
    function resizeIframe(iframe: HTMLIFrameElement) {
      if (iframe.contentWindow?.document?.body?.scrollHeight)
        setHeight(iframe.contentWindow?.document?.body?.scrollHeight);

      window.requestAnimationFrame(() => resizeIframe(iframe));
    }

    //*Automatically resize Ifram height to fit content
    contentRef && resizeIframe(contentRef);
  }, [contentRef]);

  const { colorMode } = useColorMode();

  useEffect(() => {
    if (contentRef?.contentWindow) {
      contentRef.contentWindow.document.body.className = `chakra-ui-${colorMode}`;
    }
  }, [contentRef, colorMode]);

  return (
    <Resizable
      bounds="parent"
      minWidth={360}
      maxWidth="100%"
      minHeight={height}
      maxHeight={height}
      handleComponent={{ right: <FrameHandle /> }}
      {...resizableProps}
      as="div"
      id="frameWrapper"
    >
      <iframe
        srcDoc={`<!DOCTYPE html>`}
        ref={setContentRef}
        height={height}
        width="100%"
        onLoad={updateFrame}
        title={`Preview-${props.path}`}
        {...rest}
      >
        {insertionPoint &&
          mountNode &&
          createPortal(
            <CacheProvider
              value={memoizedCreateCacheWithContainer(insertionPoint)}
            >
              <AppWrapper>{children}</AppWrapper>
            </CacheProvider>,
            mountNode
          )}
      </iframe>
    </Resizable>
  );
};

const FrameHandle = () => {
  return (
    <chakra.div
      w="5px"
      bg="blackAlpha.300"
      bgImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`}
      h="full"
    ></chakra.div>
  );
};
