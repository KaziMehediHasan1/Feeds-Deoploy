import React from "react";
import Heading from "../shared/Heading";
import PlayerSlider from "./PlayerSlider";
import PlayerSliderWithSwiper from "./PlayerSliderWithSwiper";
import header from "../../../../public/header.jpeg";
import Image from "next/image";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="shadow-lg p-2 my-3">
      <Heading heading="Spotlight" />
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full ">
          {/* <PlayerSlider /> */}
          {/* <PlayerSliderWithSwiper /> */}
          <Image src={header} alt="header" className="w-fit" />
        </div>
        {/* <div className="w-full md:w-[35%]">
          <PlayerSlider />d
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
