import React from "react";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import GAScript from "analytics/ga-script";
import { ColorModeScript } from "@chakra-ui/react";
import { config } from "theme";
import Script from "next/script";

class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <ColorModeScript initialColorMode={config.initialColorMode} />
          <Main />
          <NextScript />
          <GAScript />
          <Script
            src="https://app.embed.im/snow.js"
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    );
  }
}

export default Document;
