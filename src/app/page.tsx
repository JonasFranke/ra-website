import BackgroundComponent from "./background"

export default function HomePage() {
  return (
    <>
      <BackgroundComponent bgImgId={5}>
        <h1 className="text-white text-5xl drop-shadow-lg uppercase">Raumausstattung Franke</h1>
      </BackgroundComponent>
      <section className="h-screen bg-white">
        <div className="flex flex-row p-10 py-20">
          <h1 className="uppercase text-gray-500 text-xl basis-1/2">
            Willkommen
          </h1>
          <div className="basis-1/3">
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
      <BackgroundComponent bgImgId={7} />
      <section className="h-screen bg-white">
        <div className="flex flex-row py-20 p-10">
          <div className="basis-1/2" />
          <div className="basis-1/3">
            <p className="text-balance">
              Lesen Sie mehr über mich im <a href="http://horner-magazin.de/2019-02/" className="underline underline-offset-1">Horner Magazin</a> ab Seite 46.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
