"use client";

import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { slidesData } from "./data";

type Props = {};

const PlayerSliderWithSwiper = (props: Props) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideElement slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlayerSliderWithSwiper;

const SlideElement = ({ slide }: any) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative">
        {/* Image */}
        <img
          src={slide.image}
          alt={slide.playerName}
          className="w-full h-130 object-cover rounded-lg shadow-md"
        />

        {/* Description */}
        <div className="absolute bottom-4 left-4  bg-opacity-50 p-4 rounded-lg">
          <div className="flex gap-3">
            <img
              src={slide.clubIcon}
              alt="Club Icon"
              className="max-w-[100px] max-h-[100px] md:w-[100px] md:h-[100px] object-cover border-2 border-white"
            />
            <div>
              <p className="text-lg font-bold text-white">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
