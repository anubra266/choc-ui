import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";
import "../styles/globals.css";

const colors = {
  brand: {
    50: "#d9dae5",
    100: "#c5c8d8",
    200: "#9fa3be",
    300: "#797ea4",
    400: "#52598a",
    500: "#394071",
    600: "#2c3258",
    700: "#20243f",
    800: "#131526",
    900: "#06070d",
  },
};
function MyApp({ Component, pageProps }) {
  const theme = extendTheme({ colors });

  return (
    <ChakraProvider theme={theme}>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="2"
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
