"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggleButtonComponent() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="fixed bottom-4 right-4 z-50 m-4 p-4 border-black rounded-lg bg-gray-400 cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? (
        <Moon color="black" />
      ) : (
        <Sun color="black" />
      )}
    </button>
  );
}
