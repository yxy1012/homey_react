import React, { Fragment } from "react";
import { useState } from "react";
import { Button, Menu, Input, Popover } from "antd";
import {
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./index.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createRemoveUserAction } from "@/redux/actions/user";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const { Search } = Input;

const HomeHeader = ({ user, removeUser }) => {
  const [current, setCurrent] = useState("logo");
  const onClick = (e) => {
    setCurrent(e.key);
  };

  const history = useHistory();

  const content = () => (
    <Button type="primary" className="pageHeader-item" onClick={logOut}>
      Log Out
    </Button>
  );

  const logOut = () => {
    removeUser();
  };

  const goToWishlist = () => {
    if (user.id) {
      history.push("/wishlist");
    } else {
      history.push("/myAccount");
    }
  };

  const goToShoppingCart = () => {
    if (user.id) {
      history.push("/shoppingCart");
    } else {
      history.push("/myAccount");
    }
  };

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
      label: user.id ? (
        <Link to="/myOrders">
          <div className="menuItem">My Orders</div>
        </Link>
      ) : (
        <Link to="/myAccount">
          <div className="menuItem">My Orders</div>
        </Link>
      ),
      key: "order",
    },
  ];

  return (
    <Fragment>
      <div className="pageHeader">
        <Button type="link" className="pageHeader-item" onClick={goToWishlist}>
          Wishlist
          <HeartOutlined />
        </Button>
        <Button
          type="link"
          className="pageHeader-item"
          onClick={goToShoppingCart}
        >
          Shopping Cart
          <ShoppingCartOutlined />
        </Button>
        {user.id ? (
          <Popover content={content} placement="bottom">
            <Button type="link" className="pageHeader-item">
              {user.email}
              <UserOutlined />
            </Button>
          </Popover>
        ) : (
          <Button type="link" className="pageHeader-item">
            <Link to="/myAccount">
              Login
              <UserOutlined />
            </Link>
          </Button>
        )}
      </div>
      <div className="topMenu">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <Search
          style={{ width: "15rem" }}
          placeholder="input search text"
          enterButton
        />
      </div>
    </Fragment>
  );
};

export default connect((state) => ({ user: state.user }), {
  removeUser: createRemoveUserAction,
})(HomeHeader);
