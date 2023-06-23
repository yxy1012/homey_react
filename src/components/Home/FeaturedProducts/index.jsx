import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./index.css";
import { Link } from "react-router-dom";

const cardStyle = {
  padding: "0rem",
};

export default function FeaturedProducts({ featuredList }) {
  const [items, setItems] = useState(featuredList);
  useEffect(() => {
    setItems(featuredList);
  }, [featuredList]);
  return (
    <div>
      <h1 className="featured-title">Featured Products</h1>
      <div className="featured-list">
        {items.map((item) => (
          <Link
            key={item.id}
            to={{pathname: "/productDetails", state: {item}}}
            style={{ textDecoration: "none" }}
          >
            <Card
              className="featured-item"
              bodyStyle={cardStyle}
              onClick={() => {}}
            >
              <img src={item.image} className="featured-item-image" alt="img" />
              <h3 className="featured-item-name">{item.name}</h3>
              <div className="featured-item-price">
                {global.priceFilter(item.price)}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
