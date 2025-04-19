"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { slidesData } from "./data";
import SubHeading from "../shared/SubHeading";

const PlayerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length); // Loop back to first slide
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length // Loop back to last slide
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto border-[1px] border-gray-300 py-2">
      <SubHeading subHeading="Most Viewed Players" />
      <div className="flex gap-3 justify-end py-2 items-center">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="  text-white bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        >
          <IoIosArrowBack size={20} />
        </button>
        <button
          onClick={nextSlide}
          className=" text-white bg-gray-200 hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
      <div className="flex gap-2 p-2">
        <div>
          <img
            src={slidesData[currentIndex].clubIcon}
            alt="Club Icon"
            className="max-w-[100px] max-h-[130px] md:w-[100px] md:h-[100px] object-cover border-2 border-white"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between w-full">
            <div className="w-full">
              <p className="text-[#3f8fd5] text-sm font-semibold">
                {slidesData[currentIndex].playerName}
              </p>
              <p className="text-sm">Market value: 22 M</p>
            </div>
            <div className="bg-gray-200 p-2 text-lg font-bold">
              #{currentIndex + 1}
            </div>
          </div>
          <div className="bg-gray-200 my-1 p-1">
            <p className="text-[#3f8fd5] text-sm font-semibold">
              {slidesData[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slidesData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-[#3f8fd5]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerSlider;
