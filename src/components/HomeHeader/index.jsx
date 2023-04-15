import React, { Fragment } from 'react'
import { useState } from 'react';
import { Button, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css'
import { nanoid } from 'nanoid';

const items = [
    {
        label: <img className="menuItem logo" 
            src={`${global.constants.s3Image}logo.964fb4aa.png`} alt="logo"/>,
        key: 'logo'
    },
    {
      label: <div className="menuItem">Home</div>,
      key: 'home'
    },
    {
      label: <div className="menuItem">Shop</div>,
      key: 'shop'
    },
    {
      label: <div className="menuItem">Order</div>,
      key: 'order'
    },
  ];

export default function HomeHeader() {
    const [current, setCurrent] = useState('logo');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return (
        <Fragment key={nanoid()}>
            <div className="pageHeader">
                <Button type="link" className="login">Login<UserOutlined/></Button>
            </div>
            <div className="topMenu">
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </div>
        </Fragment>
    )
}
