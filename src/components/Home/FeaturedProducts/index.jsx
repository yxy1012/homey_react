import React from 'react'
import { nanoid } from 'nanoid'
import { Card } from 'antd';
import '@/config.js'
import './index.css'

const items = [
  {
    name: 'Cantilever chair',
    price: 42.00,
    src: `${global.constants.s3Image}featured1.f4bfd6fd.png`
  },
  {
    name: 'Cantilever chair',
    price: 42.00,
    src: `${global.constants.s3Image}featured1.f4bfd6fd.png`
  },
  {
    name: 'Cantilever chair',
    price: 42.00,
    src: `${global.constants.s3Image}featured1.f4bfd6fd.png`
  },
  {
    name: 'Cantilever chair',
    price: 42.00,
    src: `${global.constants.s3Image}featured1.f4bfd6fd.png`
  }
]

const cardStyle = {
  padding: '0rem'
}

export default function FeaturedProducts() {
  return (
    <div>
      <h1 className='featured-title'>Featured Products</h1>
        <div className='featured-list'>
          {
            items.map(item=>(
                <Card key={nanoid()} className="featured-item" bodyStyle={cardStyle}>
                  <img src={item.src} className="featured-item-image" alt="img"/> 
                  <h3 className="featured-item-name">{item.name}</h3> 
                  <div className="featured-item-price">${`${item.price.toFixed(2)}`}</div>
                </Card>
              )
            )
          }
        </div>
    </div>
  )
}
