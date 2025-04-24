import React, { createContext, useContext, useState } from "react";
import { themeMap } from "../theMap";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (newTheme) => {
    if (themeMap[newTheme]) {
      setTheme(newTheme);
    }
  };

  const currentStyles = themeMap[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, styles: currentStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
