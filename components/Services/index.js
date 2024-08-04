import { ourServices } from '@/utils/constants'
import React from 'react'

const OurServices = () => {
  return (
    <div className='flex flex-col gap-12 items-center justify-center bg-gray-100 py-12'>
        <h1 className='text-green-light-1 text-2xl font-bold'> OUR SERVICES </h1>
        <h3 className='-mt-6 text-3xl text-slate-800 italic font-extrabold uppercase md:text-left text-center'>Best specialists services for you</h3>

        <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-8'>
            {
                ourServices.map((service, idx) => (
                    <div key={idx} className='hover:scale-110 transition-all duration-500 flex flex-col gap-4 items-center justify-center h-[200px] w-[200px] bg-transparent isolate rounded-lg shadow-xl text-white hover:bg-background ring-1 ring-black/5'>
                        <img src={service.icon} className='h-16 w-16' />
                        <p className='text-green-dark font-bold text-lg'>{service.title.toUpperCase()}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurServices