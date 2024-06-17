import { CTAData } from '@/utils/constants'
import React from 'react'
import CTACard from './CTACard'

const CTASection = () => {
  return (
    <div className='flex gap-12 px-24 py-12'>
        <div className='flex gap-4 flex-wrap'>
            {
                CTAData.map((data, idx) => (
                    <div key={idx}>
                        <CTACard data={data} index={idx} /> 
                    </div>
                ))
            }

        </div>

        {/* <div className='flex-2'>
            <h1>
                How can we help you
            </h1>
            <div className='border-2 w-full h-full'>

            </div>
        </div> */}
    </div>
  )
}

export default CTASection