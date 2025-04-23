import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function SuppliersComponent() {
  const suppliers = [
    {
      src: "/ado_goldkante_black.png",
      alt: "Ado",
      url: "https://www.ado-goldkante.de/",
    },
    {
      src: "/fischbacher1819_logotype_main_rgb_white.jpg",
      alt: "Fischbacher",
      url: "https://fischbacher1819.com/de/",
    },
    {
      src: "/teba-lifestyle-am-fenster.jpg",
      alt: "Teba",
      url: "https://www.teba.de/",
    },
    {
      src: "/logo-textilverlag.jpg",
      alt: "GEOS",
      url: "https://geos-geilfuss.de/",
    },
    { src: "/image001.jpg", alt: "Sonnhaus", url: "https://www.sonnhaus.de/" },
  ];
  return (
    <section className="md:min-h-screen sm:h-min bg-white dark:bg-slate-800 dark:text-gray-200">
      <div className="md:flex md:flex-row py-20 p-10">
        <div className="md:basis-1/4" />
        <h1 className="uppercase text-gray-500 text-xl md:basis-1/4 dark:text-gray-400">
          Meine Partner
        </h1>
        <div className="md:basis-1/2">
          <div className="md:grid md:grid-flow-row-dense gap-4 md:grid-cols-2 md:items-center sm:flex sm:flex-col sm:justify-between pt-10">
            <Carousel>
              <CarouselContent>
                {suppliers.map((image, index) => (
                  <CarouselItem key={index} className="dark:bg-slate-100 p-5">
                    <a href={image.url} target="_blank">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={1}
                      />
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
