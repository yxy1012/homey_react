import React from 'react'
import { Carousel } from 'antd';
import { nanoid } from 'nanoid';
import "@/config.js"


const contentStyle = {
  width: '100%',
  height: '40rem',
  margin: '0rem',
  display: 'block'
};

const items = [
  {src: `${global.constants.s3Image}advImage1.4b1ea812.png`},
  {src: `${global.constants.s3Image}advImage2.a98ccc97.png`},
  {src: `${global.constants.s3Image}advImage3.2123805a.png`},
  {src: `${global.constants.s3Image}advImage4.e7140e89.png`}
]

export default function AdvCarousel() {
  return (
    <div>
      <Carousel autoplay>
        {
          items.map(item=>(
              <div key={nanoid()}><img src={item.src} alt="img" style={contentStyle}></img></div>
            )
          )
        }
      </Carousel>
    </div>
  )
}
