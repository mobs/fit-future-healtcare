"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import { doctors } from "@/utils/constants";

const OurDoctors = () => {
  return (
    <div className="flex flex-col gap-6 py-12 px-32 relative bg-gray-200">
      {/* <img src="/slider.png" className="-ml-32 absolute w-screen filter brightness-50 " /> */}
      <h1 className="text-green-light-1 text-2xl ">OUR DOCTORS</h1>
      <h3 className="-mt-6 text-3xl text-slate-800 font-bold font-maxima-italic">Meet our highly qualified doctors</h3>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        className="w-[calc(100vw - 8px)] h[60vh] px-48 mt-12"
      >
        
      </Carousel>
    </div>
  );
};

export default OurDoctors;
