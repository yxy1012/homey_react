import React from 'react'
import { Button } from 'antd'
import './index.css'

const uniqueProduct = {
    src: `${global.constants.s3Image}uniqueProduct.e18fcd6c.png`,
    details: [
      'All frames constructed with hardwood solids and laminates',
      'Reinforced with wood dowels, glue, screw-nails corner blocks and machine nails',
      'Arms, backs and seats are structurally reinforced'
    ],
    name: 'B&B Italian Sofa',
    price: 32
}

export default function UniqueProduct() {
  return (
    <div className='unique-product'>
      <img src={uniqueProduct.src} className='unique-product-image'  alt="img"/>
      <div className='unique-product-description'>
        <h1>Unique Features of Latest & Trending Products</h1>
        <ul>
          {
            uniqueProduct.details.map((item, index)=>
              <li key={index} className='unique-product-description-item'>{item}</li>)
          }
        </ul>
        <div className="unique-product-detail">
          <Button type="primary">Add To Cart</Button>
          <ul className='unique-product-detail-ul'>
            <li>{uniqueProduct.name}</li>
            <li>${uniqueProduct.price}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
