import { ChevronDown } from "lucide-react";

import Link from "next/link";
import { Button } from "./ui/button";

export function ScrollDownButton() {
  return (
    <Link href="#content">
      <Button
        size="icon"
        className="cursor-pointer"
        aria-label="Herunterscrollen"
      >
        <ChevronDown className="h-5 w-5" />
      </Button>
    </Link>
  );
}
