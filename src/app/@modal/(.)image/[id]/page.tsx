"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { referenceImages } from "~/app/components/ReferenceComponent";
import { Button } from "~/app/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/app/components/ui/carousel";

export default function ModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const router = useRouter();
  const { id } = use(params);

  const closeModal = () => {
    setIsModalOpen(false);
    router.back();
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    api.scrollTo(+id - 2);
  }, [api, id]);

  return (
    <>
      {isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-gray-800/40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="p-4 mx-8" onClick={(e) => e.stopPropagation()}>
              <Carousel setApi={setApi}>
                <CarouselPrevious />
                <CarouselNext />
                <CarouselContent>
                  {referenceImages.map((image) => (
                    <CarouselItem className="basis-1/3" key={image.id}>
                      <Image
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        placeholder="blur"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="m-1">
                <Button type="button" onClick={closeModal}>
                  Zurück
                </Button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
