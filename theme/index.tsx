import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react";
import styles from "./styles";
import { presets } from "./colors";
import Fonts, { fonts } from "./fonts";
import layerStyles from "./foundations/layerStyles";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "theme/context";
import { useEffect, useMemo, useState } from "react";
import NextNprogress from "nextjs-progressbar";

export const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const Theme = (props: any) => {
  const [brand, setBrand] = useState("default");

  const overrides: ThemeOverride = {
    colors: { brand: presets(brand) },
    config,
    layerStyles,
    styles,
    fonts,
  };
  const theme = extendTheme(overrides);

  useEffect(() => {
    setBrand(window.localStorage.getItem("brand") || "default");
  }, []);
  useEffect(() => {
    window.localStorage.setItem("brand", brand);
  }, [brand]);

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
        <Fonts />
        <NextNprogress
          color={presets(brand)[500]}
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
        />
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Theme;
