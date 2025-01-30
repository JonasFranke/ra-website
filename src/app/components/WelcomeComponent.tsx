export default function WelcomeComponent() {
  return (
    <section className="md:h-screen sm:h-min bg-white dark:bg-slate-800 dark:text-gray-200">
      <div className="md:flex md:flex-row p-10 py-20">
        <h1 className="uppercase text-gray-500 text-xl md:basis-1/2 dark:text-gray-400">
          Willkommen
        </h1>
        <div className="md:basis-1/3">
          <p className="text-balance">
            Herzlich Willkommen auf den Seiten der Raumausstatterin Maren
            Franke in Bremen–Borgfeld.
          </p>
          <br />
          <p className="text-balance">
            Ich bin Maren Franke, Raumausstatterin seit über 25 Jahren, und
            fertige in meinem Nähatelier an der Lilienthaler Heerstraße alles
            in Handarbeit.
          </p>
          <br />
          <p className="text-balance">
            Sie möchten Ihrem Fenster einen neuen Rahmen geben?
          </p>
          <br />
          <p className="text-balance">
            Ich biete Ihnen Raffrollos, Dekoschals und Stores aus ausgewählten
            Stoffen namhafter Hersteller und fertige nach ihren Wünschen in
            traditioneller handwerklicher Arbeit maßgeschneidert an.
          </p>
          <br />
          <p className="text-balance">
            Dazu besuche ich Sie gerne zuvor und berate Sie vor Ort zu
            gewünschten Leistungen und Designs.
          </p>
          <br />
          <p className="text-balance">
            Sicht- und Sonnenschutz- Anlagen, wie Plissées, Rollos,
            Flächenvorhänge, Vertikallamellen und Jalousien, finden Sie
            ebenfalls bei mir.
          </p>
          <br />
          <p className="text-balance">
            Die Montage dieser Anlagen sowie der Dekorationen mit den
            dazugehörenden Stilgarnituren oder Aluschienen führe ich zeitnah,
            sauber und fachgerecht aus.
          </p>
          <br />
          <p className="text-balance">
            Ich freue mich, wenn ich Ihr Interesse an den Leistungen der
            Raumausstattung Franke geweckt habe. Rufen Sie mich an oder
            schreiben Sie mir eine{" "}
            <a
              href="mailto:info@raumausstattung-franke.com"
              className="underline underline-offset-1"
            >
              Mail
            </a>{" "}
            mit Ihren Wünschen und Vorstellungen.
          </p>
        </div>
      </div>
    </section>
  )
}
