import { useContext } from "react";
import { Sun, Moon } from "lucide-react"; 
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <button
    onClick={() => setIsDark((prev) => !prev)}
    className="p-2 rounded-full bg-overall_bg-light dark:bg-overall_bg-dark  transition"
  >
    {isDark ? (
      <Moon className="h-5 w-5 text-layout_text-dark" />
    ) : (
      <Sun className="h-5 w-5 text-layout_text-light" />
    )}
  </button>

  );
};

export default ThemeToggle;
