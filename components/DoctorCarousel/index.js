"use client"
import React from 'react'


const DoctorCarousel = ({ doctor, idx }) => {
  return (
    <div className={`flex flex-col gap-2 p-2 shadow-xl ${idx !== 1 && 'shadow-green-light-1'} border rounded-lg`}>
      <img src={doctor.img} alt="doctor-image" className='h-72 w-full object-fit rounded-lg' />
      <div className='px-4 py-2'>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-lg'>{doctor.name}</p>
          <p className='uppercase text-slate-600 fontlight text-sm'>{doctor.department}</p>
        </div>
        <p className='uppercase text-slate-500 text-sm pt-2'>{doctor.college}</p>
        
      </div>
      <div className='flex flex-wrap gap-2 items-center justify-center' >
          {doctor.specialised.map((data, idx) => (
            <p key={idx} className='text-xs shadow-lg text-slate-500 border border-slate-300 rounded-lg p-2'>
              {data}
            </p>
          ))}
        </div>
      <div className='flex gap-2 items-center text-xs'>
        <button className='flex-1 p-2 border rounded-lg border-slate-500 hover:bg-green-light-1 hover:text-white hover:border-0 transition-all duration-500'>View Full Profile</button>
        <button className='flex-1 p-2 bg-green-light-1 rounded-lg text-white hover:bg-white hover:text-black hover:border border-black transition-all duration-500'>Book Appointment</button>
      </div>
    </div>
  )
}

export default DoctorCarousel