import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const ToggleColor = () => {
    setTheme(theme === "dark" ? "ligh" : "dark");
  };
  const value = {
    theme,
    ToggleColor
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeProvider };
