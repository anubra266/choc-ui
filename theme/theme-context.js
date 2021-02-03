import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  return <ThemeContext.Provider {...props} />;
};
