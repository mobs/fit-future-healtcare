import { CTAData } from '@/utils/constants'
import React from 'react'
import CTACard from './CTACard'

const CTASection = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse gap-12 lg:px-32 md:px-16 p-2 py-12'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-8 md:w-2/3 w-full'>
            {
                CTAData.map((data, idx) => (
                    <div key={idx}>
                        <CTACard data={data} index={idx} /> 
                    </div>
                ))
            }

        </div>

        <div className='md:w-1/3 w-full'>
            <h1 className='font-bold text-2xl font-serif mb-6 md:text-left text-center'>
               We can also help you with these
            </h1>
            <div className='border2 w-full h-full flex gap-8'>
                <div className='ring-1 ring-green-light-2/20 shadow-lg rounded-lg w-1/2 p-4 flex flex-col items-center gap-4 justify-center h-[calc(100%-60px)] hover:translate-y-2 transition-all duration-500'>
                    <img src='/checkup.png' />
                    <p className='text-green-dark font-semibold text-lg'>Health Checkup</p>
                </div>
                <div className='ring-1 ring-green-light-2/20 shadow-lg rounded-lg w-1/2 p-4 flex flex-col items-center gap-4 justify-center h-[calc(100%-60px)] hover:translate-y-2 transition-all duration-500'>
                    <img src='/test-report.png' />
                    <p className='text-green-dark font-semibold text-lg'>Tests & Services</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTASection