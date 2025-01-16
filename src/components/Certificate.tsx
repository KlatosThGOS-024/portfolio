import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";

const images = [
  "public/images/codegoda.webp",
  "public/images/codegoda.webp",
  "public/images/codegoda.webp",
  "public/images/codegoda.webp",
];
export const Certificate = () => {
  const [zoomIn, setZoomIn] = useState<React.SetStateAction<boolean>>(false);
  const [string, setString] = useState<React.SetStateAction<string>>("");
  function addIndex(e: string) {
    setString(e);
    setZoomIn(!zoomIn);
  }
  return (
    <section className="xl:w-[1496px] mt-[64px] relative mx-auto lg:w-[1028px] md:w-[960px]">
      <div className="w-full px-9">
        <div className="grid grid-cols-4 gap-[48px]">
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
        <div className="w-full h-screen fixed top-0 left-0 bottom-0 right-0 overflow-hidden bg-[#33333386]">
          <div className="absolute top-[15%] left-[25%]">
            <Zoom>
              <img src={`${string}`} />
            </Zoom>
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
      )}
    </section>
  );
};
