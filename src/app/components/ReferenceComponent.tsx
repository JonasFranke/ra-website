import Image from "next/image";
import { Masonry } from "./ui/masonry";

type Reference = {
  url: string;
  alt: string;
  id: number;
};

export default function ReferenceComponent() {
  const referenceImages: Reference[] = [
    {
      url: "/references/dekoschal.webp",
      alt: "Dekoschal",
      id: 1,
    },
    {
      url: "/references/grauer_store_wellenband.webp",
      alt: "Grauer Store mit Wellenband",
      id: 2,
    },
    {
      url: "/references/plissee_2_fenster.webp",
      alt: "Plissee am Fenster",
      id: 3,
    },
    {
      url: "/references/plissee_gelb.webp",
      alt: "Gelbes Plissee",
      id: 4,
    },
    {
      url: "/references/plissee_kindergarten.webp",
      alt: "Plissee",
      id: 5,
    },
    {
      url: "/references/plissee_modern.webp",
      alt: "Modernes Plissee",
      id: 6,
    },
    {
      url: "/references/plissee_sonderanfertigung.webp",
      alt: "Plissee Sonderanfertigung",
      id: 7,
    },
    {
      url: "/references/punkte_store.webp",
      alt: "Punkte Store",
      id: 8,
    },
    {
      url: "/references/raffrollo-gruen-1.webp",
      alt: "Raffrollo grün",
      id: 9,
    },
    {
      url: "/references/raffrollos.webp",
      alt: "Raffrollos",
      id: 10,
    },
  ];

  return (
    <div className="md:flex md:flex-row p-10 py-20">
      <div className="md:basis-1/4" />
      <h1 className="uppercase text-gray-500 text-xl md:basis-1/4 dark:text-gray-400">
        Meine Referenzen
      </h1>
      <div className="md:basis-1/2">
        <Masonry>
          {referenceImages.map((image) => (
            <Image
              src={image.url}
              alt={image.alt}
              key={image.id}
              width={200}
              height={150}
              className="mb-4 rounded-lg shadow-md"
              loading="lazy"
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}
