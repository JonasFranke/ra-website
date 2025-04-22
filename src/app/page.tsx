import BackgroundComponent from "./background";
import DarkModeToggleButtonComponent from "./components/DarkModeToggleButton";
import { ScrollDownButton } from "./components/ScrollDownButton";
import SuppliersComponent from "./components/SuppliersComponents";
import WelcomeComponent from "./components/WelcomeComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./footer";

export default function HomePage() {
  return (
    <>
      <DarkModeToggleButtonComponent />
      <section className="relative min-h-screen">
        <BackgroundComponent bgImgUrl="/cropped-maren-franke-1-quer-web.jpg">
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
        <hr />
        <SuppliersComponent />
        <hr />
        <ContactComponent />
      </section>
      <FooterComponent />
    </>
  );
}
