import React from 'react'
import { Card, Button } from 'antd'
import './index.css'

const items = [
    {
        src: `${global.constants.s3Image}featured1.f4bfd6fd.png`,
        name: 'Cantilever chair',
        price: 42.00,
        original_price: 65.00
    },
    {
        src: `${global.constants.s3Image}featured1.f4bfd6fd.png`,
        name: 'Cantilever chair',
        price: 42.00,
        original_price: 65.00
    },
    {
        src: `${global.constants.s3Image}featured1.f4bfd6fd.png`,
        name: 'Cantilever chair',
        price: 42.00,
        original_price: 65.00
    },
    {
        src: `${global.constants.s3Image}featured1.f4bfd6fd.png`,
        name: 'Cantilever chair',
        price: 42.00,
        original_price: 65.00
    }
]

const trendCards = [
    {title:'23% off in all products',color: '#fef6fb',action: 'Shop Now',
    src:`${global.constants.s3Image}trendCard1.884e87fa.png`,width:'8rem',height:'7rem'},
    {title:'23% off in all products',color: '#efeffa',action: 'View Collection',
    src:`${global.constants.s3Image}trendCard2.dd7a060b.png`,width:'15rem',height:'5rem'}
]

const trendSide = [
    {
        src: `${global.constants.s3Image}trendImage.1247931a.png`,
        name: 'Executive Seat Chair',
        price: 19.00,
        original_price: 32.00
    },
    {
        src: `${global.constants.s3Image}trendImage.1247931a.png`,
        name: 'Executive Seat Chair',
        price: 19.00,
        original_price: 32.00
    },
    {
        src: `${global.constants.s3Image}trendImage.1247931a.png`,
        name: 'Executive Seat Chair',
        price: 19.00,
        original_price: 32.00
    }
]

const cardStyle = {
    padding: '0.3rem'
}  

export default function TrendingProducts() {
  return (
    <div>
      <h1 className='trending-title'>Trending Products</h1>
      <div className='trending-list'>
        {
            items.map((item, index)=>(
                <Card key={index} className='trending-item' bodyStyle={cardStyle}>
                    <img src={item.src} className='trending-item-image' alt='img'></img>
                    <h4>{item.name}</h4>
                    <span>{item.price ? "$" + item.price.toFixed(2) : item.price}</span>
                    <span className='trending-item-originalPrice'>
                        {item.original_price ? "$" + item.original_price.toFixed(2) : item.original_price}
                    </span>
                </Card>
            ))
        }
      </div>
      <div className='trending-card-side'>
        {
            trendCards.map((item, index)=>(
                <div key={index} style={{backgroundColor:item.color}} className='trending-card'>
                    <h3>{item.title}</h3>
                    <Button type="link" className='trending-card-button'>{item.action}</Button>
                    <div className='trending-card-image-wrapper'>
                        <img src={item.src} style={{width:item.width, height:item.height}} alt='img'></img>
                    </div>
                </div>
            ))
        }
        <div>
            {
                trendSide.map((item, index)=>(
                    <div key={index} className='trend-side-item'>
                        <img src={item.src} className='trend-side-item-image' alt='img'></img>
                        <div>
                            <div className='trend-side-item-name'>{item.name}</div>
                            <div>
                                <span>{item.price ? "$" + item.price.toFixed(2) : item.price}</span>
                                <span className='trend-side-item-originalPrice'>
                                    {item.original_price ? 
                                    "$" + item.original_price.toFixed(2) : item.original_price}
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}
