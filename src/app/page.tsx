import BackgroundComponent from "./background";
import FooterComponent from "./footer";
import WelcomeComponent from "./components/WelcomeComponent";
import SuppliersComponent from "./components/SuppliersComponents";

export default function HomePage() {
  return (
    <>
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
