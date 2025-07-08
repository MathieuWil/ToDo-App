"use client";

import { useTheme } from "next-themes";
import { SunMoon } from "lucide-react";

export default function SunMoonButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Changer le thème"
      className="transition-colors hover:text-gray-500 dark:hover:text-gray-400"
    >
      <SunMoon className="w-6 h-6" />
    </button>
  );
}
