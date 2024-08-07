"use client";
import { blogs } from "@/utils/constants";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import "./style.css";

const BlogsCard = ({
  numSlides = 3,
  isInfiniteScrollable = true,
  sliderSpeed = 1000,
  dotsVisible = false,
  autoplay = true,
  autoplaySpeed = 3000,
  pauseOnHover = true,
  arrows = false,
  data,
  Card,
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
      <Slider ref={sliderRef} {...settings}>
        {blogs.map((project, idx) => (
          <div
            key={idx}
            className={`mb-8 rounded-lg hover:shadow-custom transition-all duration-300 ease-in-out md:w-[100%] ${
              cardBg && cardBg
            }`}
          >
            <div className="flex flex-col rounded-lg bg-white">
              <img
                src={project?.image}
                className="h-[200px] rounded-lg object-fit p-1"
              />

              <div className="p-4 flex flex-col gap-2">
                <p className="font-bold text line-clamp-2 h-12">
                  {project?.title}
                </p>
                <div>
                  <p className="text-xs line-clamp-3 h-12">
                    {project?.desc}
                  </p>
                  {/* <p className="text-xs text-slate-500">{project.address}</p> */}
                </div>
                <hr className="border-slate-500" />
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <p>
                    Fit Future Healthcare
                  </p>
                  {/* <p>{postDate}</p> */}
                  {/* <p className='font-semibold text-sm'><span className="text-base"> &#8377; </span> {project.price}</p> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogsCard;
