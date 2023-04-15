import React from 'react'
import AdvCarousel from './AdvCarousel'
import FeaturedProducts from './FeaturedProducts'
import LatestProducts from './LatestProducts'
import HomeyOffer from './HomeyOffer'
import UniqueProduct from './UniqueProduct'
import TrendingProducts from './TrendingProducts'

export default function Home() {
  return (
    <div>
      <AdvCarousel/>
      <FeaturedProducts/>
      <LatestProducts/>
      <HomeyOffer/>
      <UniqueProduct/>
      <TrendingProducts/>
    </div>
  )
}

