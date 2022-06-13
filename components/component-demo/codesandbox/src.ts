export const App = (code: string) => {
  // Handle components initiated as constants
  code = code.replace(
    /const\s\w+\s=\s\(\)\s=>\s/,
    "export default function App()"
  );
  //Handle The bottom Exports of the const components
  code = code.replace(/\s?export\sdefault\s\w+;/g, "");
  //Handle components initiated as default exports
  code = code.replace(
    /export\sdefault\sfunction\s\w+/,
    "export default function App"
  );
  return code;
};

export const index = `import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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
    900: "#080819"
  }
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({ colors, config });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  rootElement
);

`;
