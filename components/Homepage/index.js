import React from 'react'
import HeroBanner from '../HeroBanner'
import WhatWeDo from '../WhatWeDo'
import Gallery from '../Gallery'
import { InfiniteMovingCards } from '../InfiniteMovingCard'
import { galleryItems } from '@/utils/constants'
import CTASection from '../CTA'
import OurDoctors from '../OurDoctors'
import OurServices from '../Services'

const Homepage = () => {
  return (
    <main>
      <HeroBanner />
      <CTASection />
      <OurServices />
      <OurDoctors />
      <WhatWeDo />
      <InfiniteMovingCards items={galleryItems}/>
      <Gallery />
    </main>
  )
}

export default Homepage