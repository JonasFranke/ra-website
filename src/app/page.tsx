import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <div className="relative h-screen bg-fixed bg-center bg-cover bg-mf5">
        <div className="h-full flex items-center justify-center">
        </div>
      </div>
      <div className="h-screen">
        <p>lorem ipsum dolor sit amet</p>
      </div>
      <div className="relative h-screen bg-fixed bg-center bg-cover bg-mf7">
        <div className="h-full flex items-center justify-center">
          <h2>Hallo Welt!</h2>
          <p>Dies ist eine coole Seite!</p>
        </div>
      </div>
    </div>
  );
}
