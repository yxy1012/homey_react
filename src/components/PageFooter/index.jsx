import React from 'react'
import { Button, Input, Space } from 'antd';
import './index.css'

const homey = [
  {title: 'Contact Info'},
  {title: '1010 Commonwealth Avenue, Boston, MA 02215'}
]

const categories = [
  {title: 'Contact Info'},
  {title: 'Tables'},
  {title: 'Bed'},
  {title: 'Bookcases'},
  {title: 'Dressers & Wardrobes'}
]

const customerCare = [
  {title: 'My Account'},
  {title: 'Order History'},
  {title: 'Order Tracking'},
  {title: 'FAQ'},
  {title: 'Contact Us'}
]

const buttonStyle1 = {
  padding: '0',
  'margin-top':'0.5rem'
}

const buttonStyle2 = {
  padding: '0'
}

export default function PageFooter() {
  return (
    <div className='page-footer'>
        <div className='page-footer-col'>
            <h1>Homey</h1>
            <Space.Compact className='page-footer-input-wrapper'>
                <Input placeholder='Enter Email Address'/>
                <Button type="primary">Submit</Button>
            </Space.Compact>
            {homey.map(item=>(<Button type="link" style={buttonStyle1}>{item.title}</Button>))}
        </div>
        <div className='page-footer-col'>
          <h3>Categories</h3>
          {categories.map(item=>(<Button type="link" style={buttonStyle2}>{item.title}</Button>))}
        </div>
        <div className='page-footer-col'>
          <h3>Customer Care</h3>
          {customerCare.map(item=>(<Button type="link" style={buttonStyle2}>{item.title}</Button>))}
        </div>
    </div>
  )
}
