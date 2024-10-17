import type React from "react";

type BackgroundProps = {
  bgImgId: number;
  children?: React.ReactNode;
}

function BackgroundComponent({ bgImgId, children }: BackgroundProps) {

  const bgImgClass: string = `bg-mf${bgImgId.toString()}`;

  return (
    <div className={`relative h-screen bg-fixed bg-center bg-cover ${bgImgClass}`} >
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="h-full flex items-end p-6">
        {children}
      </div>
    </div >
  );
}

export default BackgroundComponent;
