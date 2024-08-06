import React from 'react'
import SlickCarousel from '../SlickCarousel'
import BlogsCard from '../BlogsCard'

const OurBlogs = () => {
  return (
    <div className='flex flex-col gap-6 py-6 lg:px-32 md:px-16 p-2 md:mx-12 rounded-xl relative '>
        <h1 className='text-green-light-1 text-3xl font-bold uppercase'> Our Blogs </h1>
        <h3 className='-mt6 text-xl text-slate-800 italic font-extrabold'> {"Get Insights about latest development in technology, treatment of various diseases".toUpperCase()}</h3>

        <div>
            <BlogsCard />
            {/* <SlickCarousel  /> */}
        </div>
    </div>
  )
}

export default OurBlogs