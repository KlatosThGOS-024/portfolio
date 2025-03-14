import React, { useState } from "react";

const images = [
  "/Certs/C++ cert.jpg",
  "/Certs/JP Morgan.jpg",
  "/Certs/JS Cert.jpg",
  "/Certs/Python certs.jpg",
  "/Certs/Python certs.jpg",
  "/Certs/Python certs.jpg",
];
export const Certificate = () => {
  const [zoomIn, setZoomIn] = useState<React.SetStateAction<boolean>>(false);
  const [string, setString] = useState<React.SetStateAction<string>>("");
  function addIndex(e: string) {
    setString(e);
    setZoomIn(!zoomIn);
  }
  return (
    <section
      id="certs"
      className="xl:w-[1496px] mt-[64px] relative z-20
    mx-auto lg:w-[1028px] md:w-[960px]"
    >
      <div className="w-full px-9">
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-[48px]">
          {images.map((imgSrc: string, index: number) => {
            return (
              <div
                onClick={() => {
                  addIndex(imgSrc);
                }}
                className=" cursor-pointer rounded-lg"
                key={index}
              >
                <img className="w-[210px] rounded-lg" src={imgSrc} />
              </div>
            );
          })}
        </div>
      </div>
      {zoomIn && (
        <div
          className="w-full h-screen 
         fixed top-0 left-0 bottom-0 right-0 overflow-hidden bg-[#33333386]"
        >
          <div className="">
            <div className="absolute top-0 p-9 left-[20%] max-lg:top-[20%] max-lg:left-[20%]  max-md:top-[30%] max-md:left-0 ">
              <img
                className="w-3/4  max-md:w-full max-md:h-full  "
                src={`${string}`}
              />
            </div>

            <div
              onClick={() => {
                setZoomIn(!zoomIn);
              }}
              className="absolute cursor-pointer top-0 right-0 m-[48px]"
            >
              <img className=" w-[58px]" src="/icons/cross.svg" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
