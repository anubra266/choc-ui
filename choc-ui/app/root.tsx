import React, { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node"; // Depends on the runtime you choose

import { ClientStyleContext, ServerStyleContext } from "./context";
import { theme } from "~/theme";
import Fonts from "~/theme/fonts";

export const meta: MetaFunction = () => {
  const description =
    "Choc UI is a set of accessible and reusable components that are commonly used in web applications.";

  return {
    charset: "utf-8",
    title: "Choc UI",
    "og-title": "Choc UI",
    "twitter-title": "Choc UI",
    description,
    "og-description": description,
    "twitter-description": description,
    "og-image": "landing.png",
    "twitter-image": "landing.png",

    "application-name": "Choc UI",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Choc UI",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#666db3",
    "msapplication-tap-highlight": "no",
    "theme-color": "#666db3",

    "twitter:card": "summary_large_image",
    "twitter:creator": "@anubra266",
    "twitter:site": "@anubra266",

    "og:type": "website",
    "og:url": "https://choc-ui.com",
    "og:site_name": "Choc UI",

    viewport: "width=device-width,initial-scale=1",
  };
};

export let links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    { rel: "manifest", href: "/manifest.json" },
    { rel: "shortcut icon", href: "/favicon.ico" },

    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
  ];
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);
export function AppWrapper(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {props.children}
    </ChakraProvider>
  );
}

export default function App() {
  return (
    <Document>
      <AppWrapper>
        <Outlet />
      </AppWrapper>
    </Document>
  );
}
