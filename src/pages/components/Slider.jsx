import React from "react";
import Image from "next/image";
import { SliderData } from "./Sliderdata";
import { useState } from "react";
import {FaArrowCircleLeft} from "react-icons/fa"
const Slider = ({ slides }) => {
    const [corrent, setcorrent] = useState(0)
    const lenght= slides.lenght;
    const nextslide=()=>{
        setcorrent(corrent=== lenght -1 ?  0:corrent + 1)
    }
    const prevslide=()=>{
        setcorrent(corrent=== 0  ?  length -1 :corrent - 1)
    }
    if(!Array.isArray(slides) || slides.lenght <= 0 ){
        return null;
    }
  return (
    <div id="gallary">
      <h1>Gallery</h1>
      <div>
        {SliderData.map((slide, i)=>{
            return (
                <div className={i === corrent ? "opacity-[1] ease-in duration-1000":"opacity-0"} key={i}>
                    <FaArrowCircleLeft size={50} className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2] "/>
{i === corrent && (                                <Image src={slide.image} alt="image" height={"600"} width={"1440"} objectFit="cover"/>
)}
                </div>

       ) })}
      </div>
    </div>
  );
};

export default Slider;
