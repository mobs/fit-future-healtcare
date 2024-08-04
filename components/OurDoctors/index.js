"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import { doctors } from "@/utils/constants";
import DoctorCarousel from "../DoctorCarousel";
import SlickCarousel from "../SlickCarousel";

const OurDoctors = () => {
  return (
    <div className="flex flex-col gap-6 py-6 lg:px-32 md:px-16 p-2 md:mx-12 rounded-xl relative md:h-[90vh]">
      <h1 className="text-green-light-1 text-3xl font-bold md:text-left text-center">
        {" "}
        OUR DOCTORS{" "}
      </h1>
      <h3 className="-mt-6 text-3xl text-slate-800 italic font-extrabold uppercase md:text-left text-center">
        Meet our highly qulaified doctors
      </h3>

      <SlickCarousel data={doctors} />
    </div>
  );
};

export default OurDoctors;
