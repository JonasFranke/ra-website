"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/app/components/ui/button";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/")}
      className="cursor-pointer"
      aria-labelledby="backtext"
    >
      <ArrowLeft />
      <span id="backtext">Zurück</span>
    </Button>
  );
}
