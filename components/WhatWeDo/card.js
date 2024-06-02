import React from 'react'

const Card = ({data}) => {
  return (
    <div className='border-2 flex flex-col items-center gap-4'>
        <img src={data.image} className='h-24 w-16' />
        <h1 className='text-lg font-semibold'>
            {data.title}
        </h1>
        <h3 className='text-gray-600'>
            {data.desc}
        </h3>
    </div>
  )
}

export default Card