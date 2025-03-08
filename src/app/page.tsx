import BackgroundComponent from "./background";
import SuppliersComponent from "./components/SuppliersComponents";
import WelcomeComponent from "./components/WelcomeComponent";
import FooterComponent from "./footer";
import DarkModeToggleButtonComponent from "./components/DarkModeToggleButton";

export default function HomePage() {
  return (
    <>
      <DarkModeToggleButtonComponent />
      <BackgroundComponent bgImgUrl="/cropped-maren-franke5.webp">
        <h1 className="text-white text-5xl drop-shadow-lg uppercase hyphens-manual">
          Raumaus&shy;stattung Franke
        </h1>
      </BackgroundComponent>
      <WelcomeComponent />
      <BackgroundComponent bgImgUrl="maren-franke7.webp" />
      <SuppliersComponent />
      <FooterComponent />
    </>
  );
}
