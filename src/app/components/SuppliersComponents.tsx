import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type Supplier = {
  src: string;
  alt: string;
  url: string;
  id: number;
};

export default function SuppliersComponent() {
  const suppliers: Supplier[] = [
    {
      src: "/ado_goldkante_black.png",
      alt: "Ado",
      url: "https://www.ado-goldkante.de/",
      id: 1,
    },
    {
      src: "/fischbacher1819_logotype_main_rgb_white.png",
      alt: "Fischbacher",
      url: "https://fischbacher1819.com/de/",
      id: 2,
    },
    {
      src: "/teba-lifestyle-am-fenster.png",
      alt: "Teba",
      url: "https://www.teba.de/",
      id: 3,
    },
    {
      src: "/logo-textilverlag.png",
      alt: "GEOS",
      url: "https://geos-geilfuss.de/",
      id: 4,
    },
    {
      src: "/image001.png",
      alt: "Sonnhaus",
      url: "https://www.sonnhaus.de/",
      id: 5,
    },
  ];

  return (
    <div className="md:flex md:flex-row py-20 p-10">
      <div className="md:basis-1/4" />
      <h1 className="uppercase text-gray-500 text-xl md:basis-1/4 dark:text-gray-400">
        Meine Partner
      </h1>
      <div className="md:basis-1/2">
        <div className="md:grid md:grid-flow-row-dense gap-4 md:grid-cols-2 md:items-center sm:flex sm:flex-col sm:justify-between pt-10 sm:mx-4 md:mx-2">
          <Carousel>
            <CarouselContent>
              {suppliers.map((image, index) => (
                <CarouselItem key={index} className="dark:bg-slate-100 p-5">
                  <Link href={image.url} target="_blank">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                    />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
