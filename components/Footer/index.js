import { socials } from "@/utils/constants";
import React from "react";
import {
  FaBookMedical,
  FaHouse,
  FaLocationArrow,
  FaLocationPin,
  FaMap,
  FaMapLocation,
  FaPhone,
  FaRightLeft,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 justify-between lg:px-32 px-16 p-2 py-12 bg-background ">
      <div className="flex flex-col gap-6 md:w-1/3">
        {/* logos and connect */}
        <img src="/logo.png" className="h-12 w-40" alt="fit-future-logo" />
        <div className="flex items-start gap-4 cursor-pointer hover:scale-110 hover:text-green-dark transition-all duration-300">
          <FaMapLocation className="text-6xl text-green-dark" />
          <p className="flex flex-col font-bold">
            <span className="text-lg">Charkhi Dadri, Haryana</span>
            <span className="font-semibold">
              Khata No.1201, Khatoni No, Loharu Rd, near Jai Hind Health care,
              Loharu Chowk
            </span>
          </p>
        </div>

        <div className="flex items-start gap-4 cursor-pointer hover:scale-110 hover:text-green-dark transition-all duration-300">
          <IoMail className="text-4xl text-green-dark" />
          <p className="text-lg font-semibold">info@fitfuturehealtcare.com</p>
        </div>

        <div className="flex items-start gap-4 cursor-pointer hover:scale-110 hover:text-green-dark transition-all duration-300">
          <FaPhone className="text-4xl text-green-dark" />
          <p className="text-lg font-semibold"> (+91) 9876-543-210</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-lg">
        <h3 className="font-bold text-xl ">Quick Links</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-6 items-center font-semibold hover:text-green-dark transition-all hover:scale-110 duration-300 cursor-pointer">
            {" "}
            <FaHouse className="text-green-dark" /> Home
          </li>
          <li className="flex gap-6 items-center font-semibold hover:text-green-dark transition-all hover:scale-110 duration-300 cursor-pointer">
            {" "}
            <FaBookMedical className="text-green-dark" /> Specialities
          </li>
          <li className="flex gap-6 items-center font-semibold hover:text-green-dark transition-all hover:scale-110 duration-300 cursor-pointer">
            {" "}
            <FaRightLeft className="text-green-dark" /> About Us
          </li>
          <li className="flex gap-6 items-center font-semibold hover:text-green-dark transition-all hover:scale-110 duration-300 cursor-pointer">
            {" "}
            <FaLocationPin className="text-green-dark" /> Location
          </li>
          <li className="flex gap-6 items-center font-semibold hover:text-green-dark transition-all hover:scale-110 duration-300 cursor-pointer">
            {" "}
            <FaPhone className="text-green-dark" /> Contact Us
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 items-start justify-start rounded-lg md:p-4 text-slate-700 md:w[400px]">
         <p className="font-bold text-xl">Find us on Google Maps</p>
         {/*
        <ul className="flex gap-6">
          {socials.map((social, idx) => (
            <li
              key={idx}
              className="hover:scale-125 transition-all duration-500"
            >
              <a href={social.link} target="_blank">
                <img src={social.img} className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex md:flex-row flex-col gap-2">
          <input
            type="phone"
            minLength={10}
            maxLength={13}
            placeholder="Whatsapp Number"
            required
            className="p-2 rounded-full md:w-[300px]"
          />
          <button className="bg-green-dark text-white rounded-full p-2 md:w-1/3 w-2/3 hover:bg-green-light-1 transition-all duration-300 hover:outline-none focus:outline-none ring-0">
            Connect
          </button>
        </div> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14012.896994732744!2d76.2532014!3d28.5930487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128f005a64b9b1%3A0x5b3629dfaa352208!2sFit%20Future%20Healthcare%20Multi%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1723243944419!5m2!1sen!2sin" className="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </div>
  );
};

export default Footer;
