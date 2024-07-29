"use client"
import React from 'react'


const DoctorCarousel = ({ data }) => {
  return (
    <div className='flex gap-24'>
        <div className='w-1/2'>

        </div>

        <div className='w-1/2 relative'>
            <img src='/doctor.png' className='absolute z-30 left-64 -top-12 h-96' />
            <div className='bg-green-dark object-cover ml-24 mt-24 opacity-80 rounded-xl h-[150px] w-[500px]' />
        </div>

    </div>
  )
}

export default DoctorCarousel