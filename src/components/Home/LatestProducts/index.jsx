import React, { useEffect, useState } from "react";
import { Button, ConfigProvider } from "antd";
import { Link } from "react-router-dom";
import "./index.css";

const links = [
  { name: "New Arrival" },
  { name: "Best Seller" },
  { name: "Featured" },
  { name: "Speical Offer" },
];

export default function LatestProducts({
  latestList,
  featuredList,
  trendingList,
  sideList,
}) {
  const [list, setList] = useState(latestList);

  const switchList = (index) => {
    switch (index) {
      case 0:
        return setList(latestList);
      case 1:
        return setList(trendingList);
      case 2:
        return setList(featuredList);
      case 3:
        return setList(sideList);
      default:
        return setList(latestList);
    }
  };

  useEffect(() => {
    setList(latestList);
  }, [latestList, featuredList, trendingList, sideList]);

  return (
    <div>
      <h1 className="latest-title">Latest Products</h1>
      <div className="latest-links">
        <ConfigProvider
          theme={{ token: { colorLink: "#f78989", colorLinkHover: "#efcccc" } }}
        >
          {links.map((item, index) => (
            <Button
              key={index}
              type="link"
              className="latest-link"
              onClick={() => switchList(index)}
            >
              {item.name}
            </Button>
          ))}
        </ConfigProvider>
      </div>
      <div className="latest-list">
        {list.map((item) => (
          <Link
            key={item.id}
            to={{ pathname: "/productDetails", state: { item } }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="latest-item">
              <img src={item.image} className="latest-item-image" alt="img" />
              <span>{item.name}</span>
              <span className="latest-item-originalPrice">
                {item.original_price
                  ? "$" + item.original_price.toFixed(2)
                  : item.original_price}
              </span>
              <span className="latest-item-price">
                {item.price ? "$" + item.price.toFixed(2) : item.price}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
