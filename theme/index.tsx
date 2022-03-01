import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react";
import styles from "./styles";
import { presets } from "./colors";
import Fonts, { fonts } from "./fonts";
import layerStyles from "./foundations/layerStyles";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "theme/context";
import { useEffect, useMemo, useState } from "react";
import NextNprogress from "nextjs-progressbar";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";

const choc = {
  bg: "#1A202C",
  primary: "#2D3748",
  secondary: "#4A5567",
};

export const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const Theme = (props: any) => {
  const [brand, setBrand] = useState<Record<number, string>>(
    presets('default'),
  )

  const overrides: ThemeOverride = {
    colors: { brand, choc },
    config,
    layerStyles,
    styles,
    fonts,
  };
  const theme = extendTheme(overrides);

  useEffect(() => {
    setBrand(
      JSON.parse(window.localStorage.getItem("brand")) || presets("default")
    );
  }, []);
  useEffect(() => {
    window.localStorage.setItem("brand", JSON.stringify(brand));
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
      <ThemeEditorProvider>
        <ThemeProvider value={themeProps}>
          <Fonts />
          <NextNprogress
            color={brand[500]}
            startPosition={0.3}
            stopDelayMs={200}
            height={2}
          />
          {props.children}
        </ThemeProvider>
      </ThemeEditorProvider>
    </ChakraProvider>
  );
};

export default Theme;
