import React from 'react'

const CTACard = ({data, index}) => {
  let bgColor, border;

        switch (index) {
          case 0:
            bgColor = 'bg-[#fdfff4]';
              border = 'border-[#fdfff4]';
            break;
          case 1:
            bgColor = 'bg-[#edfaff]';
            border = 'border-[#edfaff]';
            break;
          case 2:
            bgColor = 'bg-[#f8f7ff]';
            border = 'border-[#f8f7ff]';
            break;
          case 3:
            bgColor = 'bg-[#fff6f4]';
              border = 'border-[#fff6f4]';
            break;
          default:
            bgColor = 'bg-[#f8f7ff]';
            border = 'border-[#fff6f4]';
        }

  return (
    <div className={`${bgColor} ${border} border-2 rounded-lg w-[350px] h-[120px] ring-1 ring-black/5 shadow-lg p-4 flex items-center justify-between hover:translate-y-2 transition-all duration-500 cursor-default`}>
        <div className='md:w-2/3 w-full flex flex-col justify-center'>
            <h1 className='text-xl font-semibold'>{data.title}</h1>
            <p className='text-gray-500'>{data.desc}</p>
        </div>

        <div>
            <img src={data.icon} />
        </div>
    </div>
  )
}

export default CTACard