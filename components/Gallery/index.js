"use client";
import { blogs, galleryImages, mobileGallery } from "@/utils/constants";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Gallery = ({
  numSlides = 1,
  isInfiniteScrollable = true,
  sliderSpeed = 1000,
  dotsVisible = false,
  autoplay = true,
  autoplaySpeed = 3000,
  pauseOnHover = true,
  arrows = false,
  cardBg,
  index,
  setIndex,
  carouselClasses,
}) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numberOfSlides, setNumberOfSlides] = useState(numSlides);

  const settings = {
    dots: dotsVisible,
    infinite: isInfiniteScrollable,
    speed: sliderSpeed,
    slidesToShow: numSlides,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: pauseOnHover,
    arrows: arrows,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    afterChange: (current) => {
      if (typeof setIndex === "function") {
        setIndex(current);
        console.log({ index });
      } else {
        console.error("setIndex is not a function");
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: numSlides,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: numSlides - 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const updateNumSlides = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setNumberOfSlides(1);
    } else {
      setNumberOfSlides(numSlides);
    }
  };

  useEffect(() => {
    updateNumSlides();
    window.addEventListener("resize", updateNumSlides);
    return () => window.removeEventListener("resize", updateNumSlides);
  }, []);
  return (
    <div className="lg:px-48 md:px-16 p-2 py-12">
      <h1 className="font-bold text-green-light-1 text-4xl text-center uppercase mb-4">
        Gallery
      </h1>
      <div
        className={`custom-slider relative rounded-lg ${
          carouselClasses && carouselClasses
        } `}
      >
        {/* {currentSlide !== 0 && ( */}
        <button
          className="absolute flex items-center justify-center top-1/2 transform -translate-y-[70%] md:-left-16 left-1 bg-white shadow-xl text-slate-600 text-2xl p-2 h-12 w-12 rounded-full z-10"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaArrowLeft />
        </button>
        {/* )} */}
        {/* {currentSlide !== data.length - numberOfSlides && ( */}
        <button
          className="absolute flex items-center justify-center top-1/2 transform -translate-y-[70%] md:-right-16 right-1 bg-white shadow-xl text-slate-600 text-2xl h-12 w-12 p-2 rounded-full z-10"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaArrowRight />
        </button>
        {/* )} */}
        <div className="md:block hidden">
        <Slider
          ref={sliderRef}
          {...settings}
          
        >
          {galleryImages.map((project, idx) => (
            <div
              key={idx}

            >
              <img src={project} className="md:w-[80vw] w-full md:h-[600px] h-[400px]" />
            </div>
          ))}
        </Slider>
        </div>
        <div className="md:hidden block">
        <Slider
          ref={sliderRef}
          {...settings}
          
        >
          {mobileGallery.map((project, idx) => (
            <div
              key={idx}
            >
              <img src={project} className="md:w-[80vw] w-full md:h-[600px] h-[400px]" />
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
