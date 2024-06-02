import React from 'react'
import HeroBanner from '../HeroBanner'
import WhatWeDo from '../WhatWeDo'
import Gallery from '../Gallery'
import { InfiniteMovingCards } from '../InfiniteMovingCard'
import { galleryItems } from '@/utils/constants'
import CTASection from '../CTA'

const Homepage = () => {
  return (
    <main>
      <HeroBanner />
      <CTASection />
      <WhatWeDo />
      <InfiniteMovingCards items={galleryItems}/>
      <Gallery />
    </main>
  )
}

export default Homepage