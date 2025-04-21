"use client";
import { ChevronDown } from "lucide-react";

import { Button } from "./ui/button";

export function ScrollDownButton() {
  const scrollToContent = () => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button size="icon" className="cursor-pointer" onClick={scrollToContent}>
      <ChevronDown className="h-5 w-5" />
    </Button>
  );
}
