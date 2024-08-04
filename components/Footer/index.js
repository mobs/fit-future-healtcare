import React from 'react'
import { FaBookMedical, FaHouse, FaLocationArrow, FaLocationPin, FaMap, FaMapLocation, FaPhone, FaRightLeft } from 'react-icons/fa6'
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='flex md:flex-row flex-col gap-4 justify-between lg:px-32 px-16 p-2 py-12 bg-background '>
      <div className='flex flex-col gap-6 md:w-1/3'>
        {/* logos and connect */}
        <img src='/logo.png' className='h-12 w-40' alt='fit-future-logo' />
        <div className='flex items-start gap-4 cursor-pointer hover:scale-110 hover:text-green-dark transition-all duration-300'>
          <FaMapLocation className='text-6xl text-green-dark' />
          <p className='flex flex-col font-bold'>
          <span className='text-lg'>Charkhi Dadri, Haryana</span>
          <span className='font-semibold'>Khata No.1201, Khatoni No, Loharu Rd, near Jai Hind Health care, Loharu Chowk</span>
          </p>
        </div>

        <div className='flex items-start gap-4 cursor-pointer hover:scale-110 hover:text-green-dark transition-all duration-300'>
          <IoMail className='text-4xl text-green-dark' />
          <p className='text-lg font-semibold'>info@fitfuturehealtcare.com</p>
        </div>

        <div className='flex items-start gap-4 cursor-pointer hover:scale-110 hover:text-green-dark transition-all duration-300'>
          <FaPhone className='text-4xl text-green-dark' />
          <p className='text-lg font-semibold'> (+91) 9876-543-210</p>
        </div>
      </div>

      <div className='flex flex-col gap-6 text-lg'>
        <h3 className='font-bold text-xl '>Quick Links</h3>
        <ul className='flex flex-col gap-2'>
          <li className='flex gap-6 items-center font-semibold hover:text-green-dark transition-all hover:scale-110 duration-300 cursor-pointer'> <FaHouse className='text-green-dark' /> Home</li>
          <li className='flex gap-6 items-center font-semibold hover:text-green-dark transition-all hover:scale-110 duration-300 cursor-pointer'> <FaBookMedical className='text-green-dark' /> Specialities</li>
          <li className='flex gap-6 items-center font-semibold hover:text-green-dark transition-all hover:scale-110 duration-300 cursor-pointer'> <FaRightLeft className='text-green-dark' /> About Us</li>
          <li className='flex gap-6 items-center font-semibold hover:text-green-dark transition-all hover:scale-110 duration-300 cursor-pointer'> <FaLocationPin className='text-green-dark' /> Location</li>
          <li className='flex gap-6 items-center font-semibold hover:text-green-dark transition-all hover:scale-110 duration-300 cursor-pointer'> <FaPhone className='text-green-dark' /> Contact Us</li>
        </ul>
      </div>

      <div className='flex flex-col gap-4 items-center justify-center rounded-lg p-4 bg-white/20 ring-1 ring-black/25 shadow-lg md:w-[400px]' >
        {/* cta or book apointment or subscribe etc */}
        <h3 className='font-extrabold uppercase'>Book Emergency Service</h3>
        <input type='phone' minLength={10} maxLength={13} placeholder='Whatsapp Number' required className='p-2 rounded-lg w-full' />
        <button className='bg-green-dark w-full text-white rounded-lg p-2'>Book Now</button>
      </div>
      
    </div>
  )
}

export default Footer