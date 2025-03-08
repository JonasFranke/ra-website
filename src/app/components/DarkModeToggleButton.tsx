"use client";
import { Sun } from "lucide-react";

export default function DarkModeToggleButtonComponent() {
  return (
    <button className="fixed bottom-4 right-4 z-50 m-4 p-4 border-black rounded-lg dark:bg-gray-50 bg-gray-400 cursor-pointer" onClick={() => handleClick()}>
      <Sun />
    </button >
  )
}

function handleClick() {
  switch (localStorage.getItem("theme")) {
    case "light": {
      localStorage.setItem("theme", "dark");
      break;
    }
    case "dark": {
      localStorage.setItem("theme", "light");
      break;
    }
    default: {
      localStorage.setItem("theme", "light");
    }
  }
}
