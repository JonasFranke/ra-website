import Image from "next/image";
import { use } from "react";
import BackButton from "~/app/components/BackButton";
import { referenceImages } from "~/app/components/ReferenceComponent";

export const runtime = "edge";

export default function ImagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const image = referenceImages.find((image) => image.id === +id);

  if (!image) {
    return (
      <section className="md:min-h-screen sm:h-min bg-white dark:bg-slate-800 dark:text-gray-200">
        <p>Image not found</p>
      </section>
    );
  }

  return (
    <section className="flex flex-row md:min-h-screen sm:h-min bg-white dark:bg-slate-800 dark:text-gray-200 p-5">
      <div className="pr-5">
        <BackButton />
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        placeholder="blur"
        className="h-[calc(100vh-theme(padding.10))] w-auto"
      />
    </section>
  );
}
