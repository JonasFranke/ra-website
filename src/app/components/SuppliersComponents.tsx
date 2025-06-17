import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import AdoGoldkante from "#/suppliers/ado_goldkante_black.png";
import Fischbacher1819 from "#/suppliers/fischbacher1819_logotype_main_rgb_white.png";
import Geos from "#/suppliers/logo-textilverlag.png";
import Sonnhaus from "#/suppliers/sonnhaus.png";
import Teba from "#/suppliers/teba-lifestyle-am-fenster.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type Supplier = {
  src: StaticImageData;
  alt: string;
  url: string;
  id: number;
};

export default function SuppliersComponent() {
  const suppliers: Supplier[] = [
    {
      src: AdoGoldkante,
      alt: "Ado",
      url: "https://www.ado-goldkante.de/",
      id: 1,
    },
    {
      src: Fischbacher1819,
      alt: "Fischbacher",
      url: "https://fischbacher1819.com/de/",
      id: 2,
    },
    {
      src: Teba,
      alt: "Teba",
      url: "https://www.teba.de/",
      id: 3,
    },
    {
      src: Geos,
      alt: "GEOS",
      url: "https://geos-geilfuss.de/",
      id: 4,
    },
    {
      src: Sonnhaus,
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
      <div className="md:basis-1/2 p-5 md:p-0">
        <div className="md:grid md:grid-flow-row-dense gap-4 md:grid-cols-2 md:items-center flex flex-col justify-between pt-10 mx-4 md:mx-2">
          <Carousel>
            <CarouselContent>
              {suppliers.map((image) => (
                <CarouselItem key={image.id} className="dark:bg-slate-100 p-5">
                  <Link href={image.url} target="_blank">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      placeholder="blur"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
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
