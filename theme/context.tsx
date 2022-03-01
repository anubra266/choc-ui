import { createContext } from "react";

export type ThemeContextProps = {
  brand?: Record<number, string | undefined>;
  setBrand?: (brand: Record<number, string | undefined>) => void;
  presets?: (brand?: string) => any;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const ThemeProvider = (props) => {
  return <ThemeContext.Provider {...props} />;
};
