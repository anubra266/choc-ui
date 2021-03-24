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
        </body>
      </Html>
    );
  }
}

export default Document;
