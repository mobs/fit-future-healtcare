import { specialities } from '@/utils/constants'
import React from 'react'
import Card from './card'

const WhatWeDo = () => {
  return (
    <div className='flex flex-col gap-8 mt-12 '>
        <h1 className='text-3xl font-bold text-center'> WHAT WE DO </h1>
        <h3 className='font-semibold text-gray-600 text-center'> Lorem ipsum lorem ipsum </h3>
        <ul className='grid grid-cols-3 px-24 gap-12 items-center justify-center'>
            {
                specialities.map((item, idx) => (
                    <li>
                        <Card data={item} />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default WhatWeDo