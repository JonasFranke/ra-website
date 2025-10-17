import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Dekoschal from "#/references/dekoschal.webp";
import GrauerStoreWellenband from "#/references/grauer_store_wellenband.webp";
import Plissee2Fenster from "#/references/plissee_2_fenster.webp";
import PlisseeGelb from "#/references/plissee_gelb.webp";
import PlisseeKindergarten from "#/references/plissee_kindergarten.webp";
import PlisseeModern from "#/references/plissee_modern.webp";
import PlisseeSonderanfertigung from "#/references/plissee_sonderanfertigung.webp";
import PunkteStore from "#/references/punkte_store.webp";
import RaffrolloGruen from "#/references/raffrollo-gruen-1.webp";
import Raffrollos from "#/references/raffrollos.webp";
import { Masonry } from "./ui/masonry";

type Reference = {
  src: StaticImageData;
  alt: string;
  id: number;
};

export const referenceImages: Reference[] = [
  {
    src: Dekoschal,
    alt: "Dekoschal",
    id: 1,
  },
  {
    src: GrauerStoreWellenband,
    alt: "Grauer Store mit Wellenband",
    id: 2,
  },
  {
    src: Plissee2Fenster,
    alt: "Plissee am Fenster",
    id: 3,
  },
  {
    src: PlisseeGelb,
    alt: "Gelbes Plissee",
    id: 4,
  },
  {
    src: PlisseeKindergarten,
    alt: "Plissee",
    id: 5,
  },
  {
    src: PlisseeModern,
    alt: "Modernes Plissee",
    id: 6,
  },
  {
    src: PlisseeSonderanfertigung,
    alt: "Plissee Sonderanfertigung",
    id: 7,
  },
  {
    src: PunkteStore,
    alt: "Punkte Store",
    id: 8,
  },
  {
    src: RaffrolloGruen,
    alt: "Raffrollo grün",
    id: 9,
  },
  {
    src: Raffrollos,
    alt: "Raffrollos",
    id: 10,
  },
];

export default function ReferenceComponent() {
  return (
    <div className="md:flex md:flex-row p-10 py-20">
      <div className="md:basis-1/4" />
      <h1 className="uppercase text-gray-500 text-xl md:basis-1/4 dark:text-gray-400">
        Meine Referenzen
      </h1>
      <div className="md:basis-1/2">
        <Masonry>
          {referenceImages.map((image) => (
            <Link href={`/image/${image.id}`} key={image.id}>
              <Image
                src={image.src}
                alt={image.alt}
                key={image.id}
                className="mb-4 rounded-lg shadow-md"
                loading="lazy"
                placeholder="blur"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Link>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
