import Image from 'next/image';

export default function WelcomeComponent() {
  return (
    <section className="md:h-screen sm:h-min bg-white dark:bg-slate-800 dark:text-gray-200">
      <div className="md:flex md:flex-row p-10 py-20">
        <h1 className="uppercase text-gray-500 text-xl md:basis-1/2 dark:text-gray-400">
          Alles aus einer Hand – vom Aufmaß bis zur fertigen Dekoration Ihres Fensters
        </h1>
        <div className="md:basis-1/3">
          <p className="text-balance">
            Ich bin Maren Franke, Raumausstatterin seit fast 30 Jahren, und fertige in meinem eigenen Nähatelier alles in Handarbeit an.
          </p>
          <br />
          <p className="text-balance font-bold">
            Handwerkliche Perfektion – individuell und maßgefertigt
          </p>
          <br />
          <p className="text-balance">
            Ich biete Ihnen eine große Stoffauswahl namhafter Hersteller an. Daraus fertige ich maßgeschneiderte Raffrollos, Dekoschals und Stores sowie Polster- und Sofakissen nach ihren Wünschen an.
          </p>
          <br />
          <p className="text-balance font-bold">
            Meine Produktpalette
          </p>
          <br />
          <ul className="text-balance list-disc">
            <li>Sicht- und Sonnenschutz:</li>
            <ul className="list-disc pl-5">
              <li>Plissées</li>
              <li>Rollos</li>
              <li>Flächenvorhänge</li>
              <li>Vertikallamellen</li>
              <li>Jalousien</li>
            </ul>
            <li>Gardinenstangen- und Schienen</li>
            <li>Stoffkollektionen namhafter Hersteller</li>
          </ul>
          <br />
          <Image src="/maren-franke-quer-web.webp" alt="Maren Franke mit einem Stoffmuster in der Hand" width={500} height={500} />
          <br />
          <p className="text-balance font-bold">
            Ich gebe Ihrem Fenster einen neuen Rahmen
          </p>
          <br />
          <p className='text-balance'>
            Ich berate Sie persönlich und individuell zu gewünschten Leistungen und Designs. Nach einem Aufmaß vor Ort erhalten Sie im nächsten Schritt ein verbindliches Angebot. Nach Auftragserteilung und fachgerechter Anfertigung in meinen Nähatelier, vereinbaren wir einen zeitnahen Montagetermin.
          </p>
          <br />
          <p className='text-balance font-bold'>
            So erreichen Sie mich
          </p>
          <br />
          <p className="text-balance">
            Nehmen Sie Kontakt zu mir auf – ich freue mich Ihren Fenstern einen neuen Look zu verpassen. Schreiben Sie mir eine Nachricht an
            {" "}
            <a
              href="mailto:info@raumausstattung-franke.com"
              className="underline underline-offset-1"
            >
              Mail
            </a>{" "}
            mit Ihren Wünschen sowie Kontaktdaten und ich melde mich bei Ihnen.
          </p>
        </div>
      </div>
    </section>
  );
}
