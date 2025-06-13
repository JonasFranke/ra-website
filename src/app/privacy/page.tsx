import Link from "next/link";
import BackButton from "../components/BackButton";

export default function PrivacyPage() {
  return (
    <>
      <div className="m-4 mb-0">
        <BackButton />
      </div>
      <ol className="flex flex-col gap-4 px-20 m-4 list-decimal">
        <h1 className="text-3xl">Datenschutzerklärung</h1>
        <li>
          <h2>Einleitung</h2>
          <p>
            Wir legen großen Wert auf den Schutz Ihrer persönlichen Daten. In
            dieser Datenschutzerklärung informieren wir Sie darüber, welche
            Daten wir erheben, wie wir sie verwenden und welche Rechte Sie in
            Bezug auf Ihre Daten haben, wenn Sie unsere Website nutzen. Diese
            Website wird mit Cloudflare Pages gehostet. Wir verwenden keine
            Cookies und unser Kontaktformular versendet E-Mails über den Dienst
            Resend.
          </p>
        </li>
        <li>
          <h2>Verantwortlicher für die Datenverarbeitung</h2>
          <div>
            <p>Raumausstattung Franke</p>
            <p>Inhaberin: Maren Franke</p>
            <p>Lilienthaler Heerstraße 354</p>
            <p>28357 Bremen</p>
            <p>
              E-Mail:{" "}
              <Link href="mailto:info@raumausstattung-franke.com">
                info@raumausstattung-franke.com
              </Link>
            </p>
          </div>
        </li>
        <li>
          <h2>Datenverarbeitung auf dieser Website</h2>
          <ol className="ml-6 list-decimal">
            <li>
              <h3>Hosting bei Cloudflare Pages</h3>
              <p>
                Unsere Website wird über Cloudflare Pages gehostet. Cloudflare
                Pages ist ein Dienst von Cloudflare, Inc., 101 Townsend St, San
                Francisco, CA 94107, USA. Cloudflare Pages speichert und hostet
                unsere Website-Dateien. Dabei können Logdaten gesammelt werden,
                die technische Informationen über den Zugriff auf die Website
                enthalten, wie z.B. IP-Adressen, Browser-Typ, Zugriffszeiten und
                die aufgerufenen Seiten. Diese Daten werden von Cloudflare zur
                Gewährleistung der Sicherheit und Funktionalität des Dienstes
                sowie zur Problembehebung genutzt. Wir haben keinen direkten
                Zugriff auf diese detaillierten Logdaten, erhalten aber
                aggregierte Statistiken über die Website-Nutzung. Weitere
                Informationen zum Datenschutz bei Cloudflare finden Sie in der
                Datenschutzerklärung von Cloudflare:{" "}
                <Link href="https://www.cloudflare.com/privacypolicy/">
                  https://www.cloudflare.com/privacypolicy/
                </Link>
              </p>
            </li>
            <li>
              <h3>
                <strong>Keine</strong> Verwendung von Cookies
              </h3>
              <p>
                Diese Website verwendet keine Cookies. Das bedeutet, dass wir
                keine kleinen Textdateien auf Ihrem Gerät speichern, um
                Informationen über Ihr Surfverhalten zu verfolgen oder
                Einstellungen zu speichern.
              </p>
            </li>
            <li>
              <h3>Kontaktformular und Resend</h3>
              <p>
                Wenn Sie unser Kontaktformular nutzen, um mit uns in Kontakt zu
                treten, erheben wir die von Ihnen dort eingegebenen Daten (in
                der Regel Name und E-Mail-Adresse sowie Ihre Nachricht). Diese
                Daten werden ausschließlich dazu verwendet, Ihre Anfrage zu
                bearbeiten und Ihnen zu antworten. Der Versand der E-Mails über
                das Kontaktformular erfolgt über den Dienst Resend (
                <Link href="https://resend.com/">https://resend.com/</Link>).
                Resend ist ein E-Mail-Versanddienst, der die von Ihnen im
                Kontaktformular bereitgestellten Daten temporär verarbeitet, um
                die E-Mail an uns zuzustellen. Resend speichert die Inhalte der
                E-Mails nicht dauerhaft und verwendet sie nicht für eigene
                Zwecke. Die Rechtsgrundlage für die Verarbeitung Ihrer Daten im
                Rahmen des Kontaktformulars ist Ihre Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO) sowie unser berechtigtes Interesse an der
                Kommunikation mit Website-Besuchern (Art. 6 Abs. 1 lit. f
                DSGVO).
              </p>
            </li>
          </ol>
        </li>
        <li>
          <h2>Datenweitergabe an Dritte</h2>
          <p>
            Abgesehen von der bereits erwähnten Datenverarbeitung durch
            Cloudflare (als Hosting-Anbieter) und Resend (für den E-Mail-Versand
            des Kontaktformulars) geben wir Ihre persönlichen Daten
            grundsätzlich nicht an Dritte weiter, es sei denn, dies ist
            gesetzlich vorgeschrieben oder Sie haben ausdrücklich eingewilligt.
          </p>
        </li>
        <li>
          <h2>Ihre Rechte</h2>
          <p>
            Als betroffene Person haben Sie jederzeit das Recht auf: Auskunft
            (Art. 15 DSGVO): Sie haben das Recht, Auskunft darüber zu erhalten,
            ob und welche personenbezogenen Daten wir über Sie verarbeiten.
            Berichtigung (Art. 16 DSGVO): Sie haben das Recht, die Berichtigung
            unrichtiger oder die Vervollständigung unvollständiger
            personenbezogener Daten zu verlangen. Löschung (Art. 17 DSGVO): Sie
            haben das Recht, die Löschung Ihrer bei uns gespeicherten
            personenbezogenen Daten zu verlangen, sofern die Voraussetzungen des
            Art. 17 DSGVO erfüllt sind. Einschränkung der Verarbeitung (Art. 18
            DSGVO): Sie haben das Recht, die Einschränkung der Verarbeitung
            Ihrer Daten zu verlangen, wenn bestimmte Voraussetzungen erfüllt
            sind. Datenübertragbarkeit (Art. 20 DSGVO): Sie haben das Recht, die
            Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt
            haben, in einem strukturierten, gängigen und maschinenlesbaren
            Format zu erhalten und diese Daten einem anderen Verantwortlichen zu
            übermitteln. Widerspruch (Art. 21 DSGVO): Sie haben das Recht, aus
            Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
            gegen die Verarbeitung Sie betreffender personenbezogener Daten, die
            aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch
            einzulegen. Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO): Wenn
            die Verarbeitung auf Ihrer Einwilligung beruht, haben Sie das Recht,
            Ihre Einwilligung jederzeit mit Wirkung für die Zukunft zu
            widerrufen. Beschwerderecht bei einer Aufsichtsbehörde (Art. 77
            DSGVO): Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
            gerichtlichen Rechtsbehelfs haben Sie das Recht auf Beschwerde bei
            einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
            gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des
            mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
            Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die
            DSGVO verstößt.
          </p>
        </li>
        <li>
          <h2>Datensicherheit</h2>
          <p>
            Wir treffen angemessene technische und organisatorische
            Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder
            vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den
            Zugriff unberechtigter Personen zu schützen. Unsere
            Sicherheitsmaßnahmen werden entsprechend der technologischen
            Entwicklung fortlaufend verbessert.
          </p>
        </li>
        <li>
          <h2>Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
            anzupassen, um sie stets den aktuellen rechtlichen Anforderungen
            oder Änderungen unserer Leistungen anzupun. Für Ihren erneuten
            Besuch gilt dann die jeweils aktuelle Datenschutzerklärung.
          </p>
        </li>
        <li>
          <h2>Kontakt</h2>
          <p>
            Wenn Sie Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung
            Ihrer Daten haben, können Sie uns jederzeit kontaktieren unter:
            [Ihre E-Mail-Adresse]
          </p>
        </li>
      </ol>
    </>
  );
}
