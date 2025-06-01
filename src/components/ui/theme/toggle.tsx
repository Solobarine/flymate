"use client";

import { Monitor, MoonStar, Sun } from "lucide-react";
import { useTheme } from "./provider";
import { useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions = [
    {
      name: "light",
      icon: Sun,
    },
    {
      name: "dark",
      icon: MoonStar,
    },
    {
      name: "system",
      icon: Monitor,
    },
  ];

  const handleChange = (value: string) => {
    setTheme(value as "light" | "dark" | "system");
    setIsOpen(false);
    localStorage.setItem("theme", value);
  };

  return (
    <div>
      <button
        className="p-2 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {theme === "light" ? (
          <Sun />
        ) : theme === "dark" ? (
          <MoonStar />
        ) : (
          <Monitor />
        )}
      </button>
      <div
        className={`grid gap-2 rounded-md bg-foreground w-40 p-2 transition-all duration-200 fixed right-2 shadow-xl z-30 ${
          isOpen ? "top-auto" : "-top-96"
        }`}
      >
        {themeOptions.map((theme, index) => (
          <button
            key={index}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleChange(theme.name)}
          >
            <theme.icon />
            <p>
              {theme.name.charAt(0).toUpperCase() + theme.name.substring(1)}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
