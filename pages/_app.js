import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Choc UI</title>
        <meta name="theme-color" content="blue" />
        <meta name="title" content="Choc UI - Chackra UI Prebuilt Components" />
        <meta name="description" content="Chackra UI Prebuilt Components" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="choc-ui.tech" />
        <meta
          property="og:title"
          content="Choc UI - Chackra UI Prebuilt Components"
        />
        <meta
          property="og:description"
          content="Chackra UI Prebuilt Components"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@anubra266" />
        <meta property="twitter:creator" content="@anubra266" />
        <meta property="twitter:url" content="choc-ui.tech" />
        <meta
          property="twitter:title"
          content="Choc UI - Chackra UI Prebuilt Components"
        />
        <meta
          property="twitter:description"
          content="Chackra UI Prebuilt Components"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="twitter:image" content="/logo.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
