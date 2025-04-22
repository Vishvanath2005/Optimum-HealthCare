// ThemeToggle.jsx
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // or your own icons

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState("light")

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-overall_bg-light  dark:bg-overall_bg-dark transition"
    >
      {!isDark ? (
        <Sun className="h-5 w-5  text-layout_text-light" />
      ) : (
        <Moon className="h-5 w-5 text-layout_text-dark" />
      )}
    </button>
  );
};

export default ThemeToggle;
