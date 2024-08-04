import React from 'react'
import HeroBanner from '../HeroBanner'
import WhatWeDo from '../WhatWeDo'
import Gallery from '../Gallery'
import { InfiniteMovingCards } from '../InfiniteMovingCard'
import { galleryItems } from '@/utils/constants'
import CTASection from '../CTA'
import OurDoctors from '../OurDoctors'
import OurServices from '../Services'
import OurBlogs from '../OurBlogs'

const Homepage = () => {
  return (
    <main>
      <HeroBanner />
      <hr />
      <CTASection />
      <hr />
      <OurServices />
      <hr />
      <OurDoctors />
      <hr />
      <OurBlogs />
      <hr />
      {/* <WhatWeDo /> */}
      {/* <InfiniteMovingCards className={"ml-24"} items={galleryItems}/> */}
      <Gallery />
      <hr />
    </main>
  )
}

export default Homepage