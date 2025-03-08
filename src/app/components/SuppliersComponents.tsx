import Image from "next/image";

export default function SuppliersComponent() {
  return (
    <section className="md:h-screen sm:h-min bg-white dark:bg-slate-800 dark:text-gray-200">
      <div className="md:flex md:flex-row py-20 p-10">
        <div className="md:basis-1/2" />
        <div className="md:basis-1/3">
          <p className="text-balance">
            Lesen Sie mehr über mich im{" "}
            <a
              href="http://horner-magazin.de/2019-02/"
              className="underline underline-offset-1"
            >
              Horner Magazin
            </a>{" "}
            ab Seite 46.
          </p>
          <div className="dark:bg-slate-100 md:grid md:grid-flow-row-dense gap-4 md:grid-cols-2 md:items-center sm:flex sm:flex-col sm:justify-between pt-10">
            <div className="md:w-full sm:w-1/2 h-32 p-4 relative">
              <Image
                src="https://www.christianfischbacher.com/ch/en/skin/frontend/digitalhome/christianfischbacher_ch_en/images/LOGO_YD_desktop.svg"
                className="p-2"
                alt="Fischbacher"
                fill
                sizes="100vw"
                style={{
                  objectFit: "fill",
                }}
              />
            </div>
            <div className="md:w-full sm:w-1/2 h-32 p-4 relative">
              <Image
                src="https://www.teba.de/images/teba_logo.svg"
                className="md:w-full sm:w-1/2 p-2"
                alt="Teba"
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="md:w-full sm:w-1/2 h-32 p-4 relative">
              <Image
                src="https://www.heco-textilverlag.com/themes/Frontend/SaumViebahn/frontend/_public/src/img/logos/HECO_LOGO_dunkelgrau_bronze_dunkel.png"
                className="md:w-full sm:w-1/2 p-2"
                alt="Heco"
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="md:w-full sm:w-1/2 h-32 p-4 relative">
              <Image
                src="https://www.ado-goldkante.de/typo3conf/ext/ado_goldkante/Resources/Public/Images/ado-logo.png"
                className="md:w-full sm:w-1/2 p-2"
                alt="Ado"
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
