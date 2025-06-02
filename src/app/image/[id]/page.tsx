"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";
import { referenceImages } from "~/app/components/ReferenceComponent";
import { Button } from "~/app/components/ui/button";

export default function ImagePage({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  const image = referenceImages.find((image) => image.id === +id);

  if (!image) {
    return (
      <section className="md:min-h-screen sm:h-min bg-white dark:bg-slate-800 dark:text-gray-200">
        <p>Image not found</p>
      </section>
    );
  }

  return (
    <section className="md:min-h-screen sm:h-min bg-white dark:bg-slate-800 dark:text-gray-200 p-5">
      <div className="pb-5">
        <Button onClick={() => router.push("/")}>Zurück</Button>
      </div>
      <Image src={image.src} alt={image.alt} placeholder="blur" />
    </section>
  );
}
