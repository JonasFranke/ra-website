import Image, { type StaticImageData } from "next/image";

type BackgroundProps = {
  bgImg: StaticImageData;
  children?: React.ReactNode;
};

function BackgroundComponent({ bgImg, children }: BackgroundProps) {
  return (
    <div className="relative h-screen">
      <Image
        src={bgImg}
        alt="Background"
        priority
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="h-full flex items-end p-6">{children}</div>
    </div>
  );
}

export default BackgroundComponent;
