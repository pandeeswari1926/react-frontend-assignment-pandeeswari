import { createContext, useState, useEffect, type ReactNode } from "react";

export const themes = ["theme1", "theme2", "theme3"] as const;
export type ThemeType = (typeof themes)[number];

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "theme1",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>("theme1");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeType;
    if (storedTheme && themes.includes(storedTheme)) {
      setThemeState(storedTheme);
    }
  }, []);

  const setTheme = (theme: ThemeType) => {
    setThemeState(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} transition-all duration-300`}>{children}</div>
    </ThemeContext.Provider>
  );
};
