import React from 'react'
import './index.css'

const share = {src:`${global.constants.s3Image}shareIcon.c7ef07ff.png`}

export default function Copyright() {
  return (
    <div className='copyright'>
      <div class='copyright-content'>©Homey - All Rights Reserved</div>
      <img src={share.src} className='share-icon' alt='img'></img>
    </div>
  )
}
