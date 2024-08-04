import React from "react";
import SearchBar from "../SearchBar";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

const HeroBanner = () => {
  return (
    <div className="relative h-[60vh] shadow-lg">
      <img
        src="/banner.webp"
        className="absolute md:h-[60vh] h-[30vh] filter brightness-[0.95] w-screen object-fill"
      />
      <div></div>
      <div className="absolute top-36 md:left-24 left-8 font-extrabold">
        <h1 className={`${rubik.className} lg:text-5xl md:text-3xl text-lg text-green-dark w[800px] `}>
          SERVING{" "}
          <span className="gradienttext text-green-light-1"> HEALTH </span> &
          <span className="gradienttext text-green-light-1"> HAPPINESS </span>
        </h1>
        <div className="mt-8 md:-ml-16">
          <SearchBar />
        </div>
        <div className="mt-4">
          <button className="text-slate-600 overlay-button ring-1 ring-black/25 isolate bg-white/20 px-6 py-1 rounded-full shadwo-lg font-normal text-lg bg-white hover:text-white transition-colors duration-300 ease-in-out">
            <span className="z-20 relative ">Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
