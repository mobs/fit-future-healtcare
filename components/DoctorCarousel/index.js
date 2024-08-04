"use client"
import React from 'react'


const DoctorCarousel = ({ data }) => {
  return (
    <div className='flex md:flex-row flex-col-reverse md:gap-24 gap-0 ' >
        <div className='w1/2 flex flex-col items-center justify-center gap-4 md:mt-16 bg-white/25 ring-1 ring-black/5 rounded-lg p-8 shadow-lg'>
          <p className='text-center md:text-4xl text-xl font-bold mb-8 underline underline-offset-8'>DEPARTMENT OF {data.department.toUpperCase()}</p>
          <p className='md:text-4xl text-xl font-bold text-green-dark text-center'>{data.name}</p>
          <p className='md:text-3xl text-lg font-semibold text-center'>{data.degree}</p>
          <p className='md:text-2xl text-base text-center' >{data.college}</p>
        </div>

        <div className='relative flex items-center justify-center'>
            <img src={data.img} className='object-cover md:h-[70vh] h-[30vh]' />
        </div>

    </div>
  )
}

export default DoctorCarousel