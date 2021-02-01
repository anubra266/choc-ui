import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";
import PageHead from "~/components/head/static";
import "../styles/globals.css";
import SiteSettings from "~/components/site-settings";

const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819",
  },
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
function MyApp({ Component, pageProps }) {
  const theme = extendTheme({ colors, config });

  return (
    <ChakraProvider theme={theme}>
      <NextNprogress
        color={colors.brand[500]}
        startPosition={0.3}
        stopDelayMs={200}
        height="2"
      />
      <PageHead />
      <Component {...pageProps} />
      <SiteSettings />
    </ChakraProvider>
  );
}

export default MyApp;
