import React from 'react'
import './index.css'

const brands = {src: `${global.constants.s3Image}brandsImage.4bdebff3.png`,}

export default function Brands() {
  return (
    <div className='brands'><img className='brands-image' src={brands.src} alt="img" /></div>
  )
}
