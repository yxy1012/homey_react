import React from 'react'
import { nanoid } from 'nanoid'
import {Button, ConfigProvider} from 'antd'
import './index.css'

const links = [
    {name:'New Arrival'},
    {name:'Best Seller'},
    {name:'Featured'},
    {name:'Speical Offer'}
]

const latestProducts = [
    {
        src: `${global.constants.s3Image}latestImage1.dc4cdc1f.png`,
        name: 'Comfort Handy Craft',
        original_price: 65.00,
        price: 42.00
    },
    {
        src: `${global.constants.s3Image}latestImage1.dc4cdc1f.png`,
        name: 'Comfort Handy Craft',
        original_price: 65.00,
        price: 42.00
    },
    {
        src: `${global.constants.s3Image}latestImage1.dc4cdc1f.png`,
        name: 'Comfort Handy Craft',
        original_price: 65.00,
        price: 42.00
    }
]

export default function LatestProducts() {
  return (
    <div>
      <h1 className='latest-title'>Latest Products</h1>
      <div className='latest-links'>
        <ConfigProvider theme={{token: {colorLink: '#f78989', colorLinkHover:'#efcccc'}}}>
          {links.map(item=>(
              <Button type="link" className='latest-link'>{item.name}</Button>
          ))}
        </ConfigProvider>
      </div>
      <div className='latest-list'>
        {latestProducts.map(item => (
            <div key={nanoid()} className='latest-item'>
                <img src={item.src} className="latest-item-image" alt="img"/>
                <span>{item.name}</span>
                <span className='latest-item-originalPrice'>
                  {item.original_price ? "$" + item.original_price.toFixed(2) : item.original_price}
                </span> 
                <span className='latest-item-price'>
                  {item.price ? "$" + item.price.toFixed(2) : item.price}
                </span>
            </div>
        ))}
      </div>
    </div>
  )
}
