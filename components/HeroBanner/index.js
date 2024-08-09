import React from "react";
import SearchBar from "../SearchBar";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

const HeroBanner = () => {
  return (
    <div className="relative md:h-[50vh] h-[30vh] shadow-lg">
      <img
        src="/banner.webp"
        className=" md:h-[50vh] h-[30vh] filter brightness[0.45] w-screen md:object-fit object-cover"
      />
      {/* <div></div> */}
      <div className="absolute inset-0 flex flex-col items-center top-6 justify-center font-bold">
        <div className="border border-slate-700 rounded-lg p-3 bgwhite/20">
        <h1 className={`lg:text-5xl md:text-5xl text-2xl text-center text-green-light-1 `}>
          Serving Health and Happiness
          {/* <span className="text-green-light-1"> HEALTH </span> &
          <span className="text-green-light-1"> HAPPINESS </span> */}
        </h1>
        <h2 className={`text-green-light-1 md:text-3xl text-lg text-center`}>Today. Tommorrow. Always.</h2>
        </div>
        
        <div className="mt-8 md:-ml16">
          <SearchBar />
        </div>
        <div className="mt-4">
          {/* <button className="text-slate-600 overlay-button ring-1 ring-black/25 isolate bg-white/20 px-6 py-1 rounded-full shadwo-lg font-normal text-lg bg-white hover:text-white transition-colors duration-300 ease-in-out">
            <span className="z-20 relative ">Contact Us</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
