import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export default function SuppliersComponent() {
  const suppliers = [
    { src: "https://www.christianfischbacher.com/ch/en/skin/frontend/digitalhome/christianfischbacher_ch_en/images/LOGO_YD_desktop.svg", alt: "Fischbacher" },
    { src: "https://www.teba.de/images/teba_logo.svg", alt: "Teba" },
    { src: "https://www.heco-textilverlag.com/themes/Frontend/SaumViebahn/frontend/_public/src/img/logos/HECO_LOGO_dunkelgrau_bronze_dunkel.png", alt: "Heco" },
    { src: "https://www.ado-goldkante.de/typo3conf/ext/ado_goldkante/Resources/Public/Images/ado-logo.png", alt: "Ado" }
  ];
  return (
    <section className="md:min-h-screen sm:h-min bg-white dark:bg-slate-800 dark:text-gray-200">
      <div className="md:flex md:flex-row py-20 p-10">
        <div className="md:basis-1/2" />
        <div className="md:basis-1/3">
          <div className="md:grid md:grid-flow-row-dense gap-4 md:grid-cols-2 md:items-center sm:flex sm:flex-col sm:justify-between pt-10">
            <Carousel>
              <CarouselContent>
                {suppliers.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={5000}
                      height={5000}
                      className="aspect-auto"
                    />
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
