import React from "react";
import { Card, Button } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";
import "./index.css";
import { nanoid } from "nanoid";

const wishlist = [
  {
    id: 1,
    product: {
      id: 1,
      name: "Mustard Chair",
      image: `${global.constants.s3Image}wishItem1.5b3fca7c.png`,
      price: 42.0,
      original_price: 65.0,
      description:
        "Thanks to new research and a new technique, this upholstered chair gives you optimal seating comfort.",
    },
  },
];

export default function Wishlist() {
  return (
    <div>
      <img
        className="wishlist"
        src={`${global.constants.s3Image}wishlist.963180e6.png`}
        alt="wishlist"
      />
      <div className="wishlist-header">
        <h3 style={{ margin: 0 }}>My Wishlist</h3>
        <p className="wishlist-results">About {1} results</p>
      </div>
      {wishlist.map((item) => (
        <Card className="wishlist-card" key={nanoid()}>
          <div className="wishlist-container">
            <div>
              <img
                className="wishlist-item-image"
                src={item.product.image}
                alt="wishlist-item"
              />
            </div>
            <div>
              <h3>{item.product.name}</h3>
              <span>{global.priceFilter(item.product.price)}</span>
              <span
                style={{
                  color: "red",
                  textDecoration: "line-through",
                  marginLeft: "0.5rem",
                }}
              >
                {global.priceFilter(item.product.original_price)}
              </span>
              <p style={{ color: "darkgray" }}>{item.product.description}</p>
              <Button
                shape="circle"
                style={{ marginRight: "0.5rem" }}
                icon={<ShoppingCartOutlined />}
              />
              <Button
                shape="circle"
                style={{ marginRight: "0.5rem" }}
                icon={<ZoomInOutlined />}
              />
              <Button
                shape="circle"
                style={{ marginRight: "0.5rem" }}
                type="primary"
                icon={<HeartOutlined />}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
