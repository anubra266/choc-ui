import { useState, useMemo } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";
import PageHead from "~/components/head/static";
import "../styles/globals.css";
import SiteSettings from "~/components/site-settings";
import { presets } from "~/theme/colors";
import { ThemeProvider } from "~/theme/theme-context";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
function MyApp({ Component, pageProps }) {
  const [brand, setBrand] = useState("default");

  const theme = extendTheme({ colors: { brand: presets(brand) }, config });
  const themeProps = useMemo(
    () => ({
      brand,
      setBrand,
      presets,
    }),
    [brand]
  );
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider value={themeProps}>
        <NextNprogress
          color={presets(brand)[500]}
          startPosition={0.3}
          stopDelayMs={200}
          height="2"
        />
        <PageHead />
        <Component {...pageProps} />
        <SiteSettings />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
