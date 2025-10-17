import Link from "next/link";
import type { FC } from "react";

const FooterComponent: FC = () => {
  return (
    <footer className="flex md:flex-row sm:flex-col sm:content-evenly sm:gap-x-2 px-20 py-10 bg-gray-200 dark:bg-gray-900 dark:text-gray-200">
      <div className="md:basis-1/5" />
      <div className="md:basis-1/5">
        <h1 className="uppercase font-mono pb-2">Raumausstattung Franke</h1>
        <p>Maren Franke</p>
        <p>Lilienthaler Heerstraße</p>
        <p>28357 Bremen</p>
      </div>
      <div className="md:basis-1/5">
        <h1 className="pb-2">Ust-Id-Nr: DE 31 61 76 70 9</h1>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:info@raumausstattung-franke.com"
            className="underline text-blue-600"
          >
            info@raumausstattung-franke.com
          </a>
        </p>
      </div>
      <div className="md:basis-1/5">
        <h1 className="uppercase font-mono">Impressum / Datenschutz</h1>
        <Link href="/impressum" className="underline text-blue-600">
          Impressum
        </Link>
        <br />
        <Link href="/privacy" className="underline text-blue-600">
          Datenschutz
        </Link>
      </div>
      <div className="md:basis-1/5" />
    </footer>
  );
};

export default FooterComponent;
