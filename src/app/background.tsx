import type React from "react";

type BackgroundProps = {
  bgImgUrl: string;
  children?: React.ReactNode;
}

function BackgroundComponent({ bgImgUrl, children }: BackgroundProps) {

  return (
    <div className={`relative h-screen bg-fixed bg-center bg-cover`} style={{ backgroundImage: `url(${bgImgUrl})` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="h-full flex items-end p-6">
        {children}
      </div>
    </div >
  );
}

export default BackgroundComponent;
