import BackgroundComponent from "./background"

export default function HomePage() {
  return (
    <div>
      <BackgroundComponent bgImgId={5}>
        <h1 className="text-white text-6xl drop-shadow-lg">Raumausstattung Franke</h1>
      </BackgroundComponent>
      <section className="h-screen bg-white ">
        <p>lorem ipsum dolor sit amet</p>
      </section>
      <BackgroundComponent bgImgId={7} />
    </div>
  );
}
