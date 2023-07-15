import React from "react";
import Image from "next/image";
import { SliderData } from "./Sliderdata";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const Slider = ({ slider }) => {
  const [corrent, setcorrent] = useState(0);
  const lenght = slider.lenght;
  const nextslide = () => {
    setcorrent(corrent === lenght - 1 ? 0 : corrent + 1);
  };
  const prevslide = () => {
    setcorrent(corrent === 0 ? length - 1 : corrent - 1);
  };
  if (!Array.isArray(slider) || slider.lenght <= 0) {
    return null;
  }
  return (
    <div className="max-w-[1240px] mx-auto" id="gallery">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, i) => {
          return (
            <div
              className={
                i === corrent
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
              key={i}
            >
              <FaArrowCircleLeft
                onClick={prevslide}
                size={50}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2] "
              />
              {i === corrent && (
                <Image
                  src={slide.image}
                  alt="image"
                  height={"600"}
                  width={"1440"}
                  objectFit="cover"
                />
              )}
              <FaArrowCircleRight
                onClick={nextslide}
                size={50}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2] "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
