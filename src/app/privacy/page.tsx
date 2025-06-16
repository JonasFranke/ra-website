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
            Bezug auf Ihre Daten haben, wenn Sie unsere Website nutzen. Unsere
            Website wird über Cloudflare Pages gehostet und zur Abwehr von
            Missbrauch setzen wir Cloudflare Turnstile ein. Unser
            Kontaktformular versendet E-Mails über den Dienst Resend.
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
                Unsere Website wird über Cloudflare Pages gehostet. Cloudflare,
                Inc., 101 Townsend St, San Francisco, CA 94107, USA, stellt uns
                diesen Dienst zur Verfügung. Cloudflare Pages speichert und
                hostet unsere Website-Dateien. Dabei können beim Zugriff auf die
                Website Logdaten wie IP-Adressen, Browser-Typ, Zugriffszeiten
                und aufgerufene Seiten erfasst werden. Diese Daten nutzt
                Cloudflare, um die Sicherheit und Funktionalität des Dienstes zu
                gewährleisten sowie zur Problembehebung. Wir selbst haben keinen
                direkten Zugriff auf diese detaillierten Logdaten, erhalten aber
                aggregierte Statistiken über die Website-Nutzung. Weitere
                Informationen zum Datenschutz bei Cloudflare finden Sie in der
                Datenschutzerklärung von Cloudflare:{" "}
                <Link href="https://www.cloudflare.com/privacypolicy/">
                  https://www.cloudflare.com/privacypolicy/
                </Link>
              </p>
            </li>
            <li>
              <h3>Cloudflare Turnstile (Spam-Schutz)</h3>
              <p>
                Wir nutzen Cloudflare Turnstile auf dieser Website, um
                Missbrauch unserer Formulare und Spam-Einträge zu verhindern.
                Turnstile ist ein Dienst von Cloudflare, der analysiert, ob der
                Besucher ein Mensch oder ein Bot ist. Hierfür werden bestimmte
                Informationen über Ihr Verhalten auf unserer Webseite (z.B.
                Mausbewegungen, Verweildauer, Browsereinstellungen) von
                Cloudflare verarbeitet. Diese Daten dienen der Risikoanalyse, um
                die Menschlichkeit des Nutzers festzustellen. Dies geschieht,
                ohne dass persönliche Daten wie Ihr Name oder Ihre
                E-Mail-Adresse direkt verarbeitet werden, es sei denn, Sie geben
                diese freiwillig in ein Formular ein. Cloudflare kann hierfür
                Cookies und ähnliche Technologien verwenden.
              </p>
              <p>
                Die Rechtsgrundlage für den Einsatz von Cloudflare Turnstile ist
                unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO,
                unsere Website vor automatisiertem Missbrauch und Spam zu
                schützen.
              </p>
              <p>
                Weitere Informationen zum Datenschutz bei Cloudflare Turnstile
                finden Sie hier:{" "}
                <Link href="https://developers.cloudflare.com/turnstile/">
                  https://developers.cloudflare.com/turnstile/
                </Link>{" "}
                und in der allgemeinen Datenschutzerklärung von Cloudflare:{" "}
                <Link href="https://www.cloudflare.com/privacypolicy/">
                  https://www.cloudflare.com/privacypolicy/
                </Link>
              </p>
            </li>
            <li>
              <h3>Kontaktformular und E-Mail-Versand (Resend)</h3>
              <p>
                Wenn Sie uns über unser Kontaktformular kontaktieren, erheben
                wir die von Ihnen dort eingegebenen Daten (in der Regel Name,
                E-Mail-Adresse und Ihre Nachricht). Diese Daten nutzen wir
                ausschließlich zur Bearbeitung Ihrer Anfrage und zur
                Kommunikation mit Ihnen.
              </p>
              <p>
                Der Versand der über das Kontaktformular generierten E-Mails
                erfolgt über den Dienst Resend (
                <Link href="https://resend.com/">https://resend.com/</Link>).
                Resend ist ein E-Mail-Versanddienst, der die von Ihnen im
                Kontaktformular bereitgestellten Daten temporär verarbeitet, um
                die E-Mail an uns zuzustellen. Resend speichert die Inhalte der
                E-Mails nicht dauerhaft und verwendet sie nicht für eigene
                Zwecke.
              </p>
              <p>
                Die Rechtsgrundlage für die Verarbeitung Ihrer Daten im Rahmen
                des Kontaktformulars ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a
                DSGVO) sowie unser berechtigtes Interesse an einer effizienten
                und zuverlässigen Kommunikation mit Website-Besuchern (Art. 6
                Abs. 1 lit. f DSGVO).
              </p>
              <p>
                Weitere Informationen zum Datenschutz bei Resend finden Sie in
                deren Datenschutzerklärung:{" "}
                <Link href="https://resend.com/legal/privacy-policy">
                  https://resend.com/legal/privacy-policy
                </Link>
              </p>
            </li>
          </ol>
        </li>
        <li>
          <h2>Cookies</h2>
          <p>
            Unsere Website setzt keine eigenen Cookies. Die einzigen Cookies,
            die in bestimmten Fällen gesetzt werden können, stammen von
            Cloudflare Turnstile und sind technisch notwendig, um die
            Funktionsweise des Spam-Schutzes zu gewährleisten.
          </p>
        </li>
        <li>
          <h2>Datenweitergabe an Dritte</h2>
          <p>
            Abgesehen von der bereits erwähnten Datenverarbeitung durch
            Cloudflare (als Hosting-Anbieter und für Turnstile) und Resend (für
            den E-Mail-Versand des Kontaktformulars) geben wir Ihre
            personenbezogenen Daten grundsätzlich nicht an Dritte weiter, es sei
            denn, dies ist gesetzlich vorgeschrieben (z.B. durch eine
            gerichtliche Anordnung) oder Sie haben ausdrücklich eingewilligt.
          </p>
        </li>
        <li>
          <h2>Speicherdauer der Daten</h2>
          <p>
            Die von uns verarbeiteten Daten werden gelöscht oder in ihrer
            Verarbeitung eingeschränkt, sobald sie für ihre Zweckbestimmung
            nicht mehr erforderlich sind und der Löschung keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen. Daten, die wir aufgrund Ihrer
            Kontaktaufnahme über das Formular erhalten, speichern wir so lange,
            wie es für die Bearbeitung Ihrer Anfrage und eventuelle
            Anschlusskommunikation erforderlich ist.
          </p>
        </li>
        <li>
          <h2>Ihre Rechte als betroffene Person (DSGVO)</h2>
          <p>
            Als betroffene Person stehen Ihnen gemäß der
            Datenschutz-Grundverordnung (DSGVO) folgende Rechte zu:
          </p>
          <ul>
            <li>
              Recht auf Auskunft (Art. 15 DSGVO): Sie haben das Recht, eine
              Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet
              werden, sowie auf Auskunft über diese Daten und eine Kopie davon.
            </li>
            <li>
              Recht auf Berichtigung (Art. 16 DSGVO): Sie haben das Recht, die
              Vervollständigung unvollständiger oder die Berichtigung
              unrichtiger Sie betreffender Daten zu verlangen.
            </li>
            <li>
              Recht auf Löschung („Recht auf Vergessenwerden“, Art. 17 DSGVO):
              Sie können die Löschung Ihrer bei uns gespeicherten
              personenbezogenen Daten verlangen, sofern die gesetzlichen
              Voraussetzungen erfüllt sind.
            </li>
            <li>
              Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO): Sie
              haben das Recht, eine Einschränkung der Verarbeitung Ihrer Daten
              zu verlangen, wenn bestimmte Voraussetzungen vorliegen (z.B. wenn
              die Richtigkeit der Daten bestritten wird).
            </li>
            <li>
              Recht auf Datenübertragbarkeit (Art. 20 DSGVO): Sie haben das
              Recht, die Sie betreffenden Daten, die Sie uns bereitgestellt
              haben, in einem strukturierten, gängigen und maschinenlesbaren
              Format zu erhalten oder die Übermittlung an einen anderen
              Verantwortlichen zu fordern.
            </li>
            <li>
              Recht auf Widerspruch (Art. 21 DSGVO): Sie haben das Recht, aus
              Gründen, die sich aus Ihrer besonderen Situation ergeben,
              jederzeit gegen die Verarbeitung der Sie betreffenden
              personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse) erfolgt, Widerspruch einzulegen.
            </li>
            <li>
              Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO):
              Wenn die Verarbeitung auf Ihrer Einwilligung beruht, können Sie
              diese Einwilligung jederzeit mit Wirkung für die Zukunft
              widerrufen.
            </li>
            <li>
              Recht auf Beschwerde bei der Aufsichtsbehörde (Art. 77 DSGVO):
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
              gerichtlichen Rechtsbehelfs haben Sie das Recht auf Beschwerde bei
              einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
              gewöhnlichen Aufenthaltsortes, Ihres Arbeitsplatzes oder des Orts
              des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
              Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
              die DSGVO verstößt.
            </li>
          </ul>
        </li>
        <li>
          <h2>Datensicherheit</h2>
          <p>
            Wir treffen angemessene technische und organisatorische
            Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder
            vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff
            unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen
            werden entsprechend der technologischen Entwicklung fortlaufend
            verbessert.
          </p>
        </li>
        <li>
          <h2>Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
            anzupassen, um sie stets den aktuellen rechtlichen Anforderungen
            oder Änderungen unserer Leistungen anzupassen, z.B. bei der
            Einführung neuer Dienste. Für Ihren erneuten Besuch gilt dann die
            jeweils aktuelle Datenschutzerklärung.
          </p>
          <p>Stand: Juni 2025</p>
        </li>
        <li>
          <h2>Kontakt</h2>
          <p>
            Wenn Sie Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung
            Ihrer Daten haben, können Sie uns jederzeit kontaktieren unter:{" "}
            <Link href="mailto:info@raumausstattung-franke.com">
              info@raumausstattung-franke.com
            </Link>
          </p>
        </li>
      </ol>
    </>
  );
}
