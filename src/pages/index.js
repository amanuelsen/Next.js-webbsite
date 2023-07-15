import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/hero";
import Slider from "./components/Slider";
import { SliderData } from "./components/Sliderdata";
import Instagram from "./components/Instagram";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero
        heading="Capture Photo"
        message="i capture moments in the nature and keep them alive"
      />
      <Slider slider={SliderData}/>
      <Instagram/>
    </div>
  );
}
