import React from 'react'

const CTACard = ({data, bgColor}) => {
  return (
    <div className={`${data.bg} border-2 rounded-lg w-[350px] h-[150px] p-4 flex items-center justify-between `}>
        <div className='w-2/3 flex flex-col justify-center'>
            <h1 className='text-xl'>{data.title}</h1>
            <p className='text-gray-600'>{data.desc}</p>
        </div>

        <div>
            <img src={data.icon} />
        </div>
    </div>
  )
}

export default CTACard