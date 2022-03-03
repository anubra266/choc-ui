import { createContext } from "react";

export type ThemeContextProps = {
  brand?: Record<number, string>;
  setBrand?: (brand: Record<number, string>) => void;
  presets?: (brand?: string) => any;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const ThemeProvider = (props) => {
  return <ThemeContext.Provider {...props} />;
};
