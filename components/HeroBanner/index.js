import React from "react";
import SearchBar from "../SearchBar";

const HeroBanner = () => {
  return (
    <div className="relative">
      <img src="/doctor-banner.jpg" className="h-[85vh] w-screen" />
      <div className="absolute top-56 left-32 font-extrabold">
        <h1 className="text-7xl text-white w-[700px]">
          SERVING <span className="text-green-light-1 "> HEALTH </span> & 
          <span className="text-green-light-1 "> HAPPINESS </span>
        </h1>
        <div className="mt-4">
          <button className="text-green-dark px-4 py-2 rounded-lg font-normal text-lg bg-white hover:text-white hover:bg-green-dark transition-colors duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
        <div className="ml-56 mt-24">
        <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
