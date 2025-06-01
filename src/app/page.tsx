import BackgroundComponent from "./background";
import ContactComponent from "./components/ContactComponent";
import DarkModeToggleButtonComponent from "./components/DarkModeToggleButton";
import ReferenceComponent from "./components/ReferenceComponent";
import { ScrollDownButton } from "./components/ScrollDownButton";
import SuppliersComponent from "./components/SuppliersComponents";
import WelcomeComponent from "./components/WelcomeComponent";
import FooterComponent from "./footer";

export default function HomePage() {
  return (
    <>
      <DarkModeToggleButtonComponent />
      <section className="relative min-h-screen">
        <BackgroundComponent bgImgUrl="/cropped-maren-franke-1-quer-web.webp">
          <h1 className="text-white text-5xl drop-shadow-lg uppercase hyphens-manual">
            Raumaus&shy;stattung Franke
          </h1>
          <div className="ml-5 z-10">
            <ScrollDownButton />
          </div>
        </BackgroundComponent>
      </section>
      <section id="content">
        <WelcomeComponent />
      </section>
      <hr />
      <section className="md:min-h-screen sm:h-min bg-white dark:bg-slate-800 dark:text-gray-200">
        <SuppliersComponent />
        <ReferenceComponent />
      </section>
      <hr />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}
