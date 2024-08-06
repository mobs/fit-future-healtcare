import React from "react";
import SearchBar from "../SearchBar";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

const HeroBanner = () => {
  return (
    <div className="relative h-[60vh] shadow-lg">
      <img
        src="/banner.webp"
        className="absolute md:h-[60vh] h-[30vh] filter brightness-[0.45] w-screen object-fill"
      />
      <div></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center font-extrabold">
        <h1 className={`${rubik.className} lg:text-7xl md:text-5xl text-lg text-green-dark w[800px] `}>
          SERVING{" "}
          <span className="text-green-light-1"> HEALTH </span> &
          <span className="text-green-light-1"> HAPPINESS </span>
        </h1>
        <h2 className={`p-4 gradient-text md:text-5xl text-lg ${rubik.className}`}>TODAY. TOMMORROW. ALWAYS.</h2>
        
        <div className="mt-8 md:-ml-16">
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
