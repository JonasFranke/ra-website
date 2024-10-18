import BackgroundComponent from "./background"
import FooterComponent from "./footer";

export default function HomePage() {
  return (
    <>
      <BackgroundComponent bgImgUrl="/cropped-maren-franke5.jpg">
        <h1 className="text-white text-5xl drop-shadow-lg uppercase hyphens-manual">Raumaus&shy;stattung Franke</h1>
      </BackgroundComponent >
      <section className="md:h-screen sm:h-min bg-white">
        <div className="md:flex md:flex-row p-10 py-20">
          <h1 className="uppercase text-gray-500 text-xl md:basis-1/2">
            Willkommen
          </h1>
          <div className="md:basis-1/3">
            <p className="text-balance">
              Herzlich Willkommen auf den Seiten der Raumausstatterin
              Maren Franke in Bremen–Borgfeld.
            </p>
            <br />
            <p className="text-balance">
              Ich bin Maren Franke, Raumausstatterin seit über 25 Jahren,  und fertige in meinem Nähatelier an der Lilienthaler Heerstraße alles in Handarbeit.
            </p>
            <br />
            <p className="text-balance">
              Sie möchten Ihrem Fenster einen neuen Rahmen geben?
            </p>
            <br />
            <p className="text-balance">
              Ich biete Ihnen Raffrollos, Dekoschals und Stores aus ausgewählten Stoffen namhafter Hersteller und fertige nach ihren Wünschen in traditioneller handwerklicher Arbeit maßgeschneidert an.
            </p>
            <br />
            <p className="text-balance">
              Dazu besuche ich Sie gerne zuvor und berate Sie vor Ort zu gewünschten Leistungen und Designs.
            </p>
            <br />
            <p className="text-balance">
              Sicht- und Sonnenschutz- Anlagen, wie Plissées, Rollos, Flächenvorhänge, Vertikallamellen und Jalousien, finden Sie ebenfalls bei mir.
            </p>
            <br />
            <p className="text-balance">
              Die Montage dieser Anlagen sowie der Dekorationen mit den dazugehörenden Stilgarnituren oder Aluschienen führe ich zeitnah, sauber und  fachgerecht aus.
            </p>
            <br />
            <p className="text-balance">
              Ich freue mich, wenn ich Ihr Interesse an den Leistungen der Raumausstattung Franke geweckt habe. Rufen Sie mich an oder schreiben Sie mir eine <a href="mailto:info@raumausstattung-franke.com" className="underline underline-offset-1">Mail</a> mit Ihren Wünschen und Vorstellungen.
            </p>
          </div>
        </div>
      </section>
      <BackgroundComponent bgImgUrl="maren-franke7.webp" />
      <section className="md:h-screen sm:h-min bg-white">
        <div className="md:flex md:flex-row py-20 p-10">
          <div className="md:basis-1/2" />
          <div className="md:basis-1/3">
            <p className="text-balance">
              Lesen Sie mehr über mich im <a href="http://horner-magazin.de/2019-02/" className="underline underline-offset-1">Horner Magazin</a> ab Seite 46.
            </p>
            <div className="md:grid md:grid-flow-row-dense md:grid-cols-2 md:items-center sm:flex sm:flex-col sm:justify-between pt-10">
              <img src="https://www.christianfischbacher.com/ch/en/skin/frontend/digitalhome/christianfischbacher_ch_en/images/LOGO_YD_desktop.svg"
                className="md:w-full sm:w-1/2 p-2" />
              <img src="https://www.teba.de/images/teba_logo.svg"
                className="md:w-full sm:w-1/2 p-2" />
              <img src="https://www.heco-textilverlag.com/themes/Frontend/SaumViebahn/frontend/_public/src/img/logos/HECO_LOGO_dunkelgrau_bronze_dunkel.png"
                className="md:w-full sm:w-1/2 p-2" />
              <img src="https://www.ado-goldkante.de/typo3conf/ext/ado_goldkante/Resources/Public/Images/ado-logo.png"
                className="md:w-full sm:w-1/2 p-2" />
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
