import React, { Fragment } from "react";
import { useState } from "react";
import { Button, Menu } from "antd";
import { UserOutlined, HeartOutlined } from "@ant-design/icons";
import "./index.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <Link to="/home">
        <img
          className="menuItem logo"
          src={`${global.constants.s3Image}logo.964fb4aa.png`}
          alt="logo"
        />
      </Link>
    ),
    key: "logo",
  },
  {
    label: (
      <Link to="/home">
        <div className="menuItem">Home</div>
      </Link>
    ),
    key: "home",
  },
  {
    label: (
      <Link to="/shopCatalog">
        <div className="menuItem">Shop</div>
      </Link>
    ),
    key: "shop",
  },
  {
    label: (
      <Link to="/myOrder">
        <div className="menuItem">Order</div>
      </Link>
    ),
    key: "order",
  },
];

const HomeHeader = () => {
  const [current, setCurrent] = useState("logo");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Fragment>
      <div className="pageHeader">
        <Button type="link" className="pageHeader-item">
          <Link to="/wishlist">
            Wishlist
            <HeartOutlined />
          </Link>
        </Button>
        <Button type="link" className="pageHeader-item">
          <Link to="/myAccount">
            Login
            <UserOutlined />
          </Link>
        </Button>
      </div>
      <div className="topMenu">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </Fragment>
  );
};

export default connect((state) => ({ user: state.user }))(HomeHeader);
