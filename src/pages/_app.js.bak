import "@/styles/globals.css";

import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = React.useState("light");
  useEffect(() => {
    // 1) check localStorage
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
      return;
    }

    // 2) if no stored preference, use system preference
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  // helper to toggle theme
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      // ignore (some browsers in private mode may throw)
      console.error("Could not save theme", e);
    }
  };

  return <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />;
}
