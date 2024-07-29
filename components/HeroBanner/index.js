import React from "react";
import SearchBar from "../SearchBar";

const HeroBanner = () => {
  return (
    <div className="relative h-[60vh]">
      <img src="/banner.png" className="absolute h-[60vh] filter brightness-[0.45] w-screen" />
      {/* <img src="/doctor.png" className="h-[85vh] w-screen" /> */}
      <div>
      <img src="/doctor.png" className="absolute top-12 h-[54vh] object-cover z-20 ml-[75rem]" />
      </div>
      <div className="absolute top-48 left-24 font-extrabold">
        <h1 className="text-7xl text-white w[800px] font-dove">
          SERVING <span className="gradient-text "> HEALTH </span> & 
          <span className="gradient-text "> HAPPINESS </span>
        </h1>
        <div className="mt-4">
          <button className="text-white ring-1 ring-black/5 isolate bg-white/20 px-6 py-1 rounded-full shadwo-lg font-normal text-lg bg-white hover:text-white transition-colors duration-300 ease-in-out">
            <span className="z-20 relative ">Contact Us</span>
          </button>
        </div>
        <div className="ml-56 mt-8">
        <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
