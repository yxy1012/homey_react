import React, { Fragment, useState } from "react";
import { Select } from "antd";
import "./index.css";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const options = [
  { label: "All Items", value: "allItems" },
  { label: "Featured Items", value: "featuredList" },
  { label: "Latest Items", value: "latestList" },
  { label: "Trending Items", value: "trendingList" },
];

const allLists = {
  featuredList: [
    {
      image: `${global.constants.s3Resources}BarChair.png`,
      name: "Bar Chair",
      price: 15.0,
    },
  ],
  trendingList: [
    {
      image: `${global.constants.s3Resources}ElementalChair.png`,
      name: "Elemental Chair",
      price: 21.0,
    },
  ],
  latestList: [
    {
      image: `${global.constants.s3Resources}VibraniumChair.png`,
      name: "Sulvex Chair",
      original_price: 28.0,
      price: 22.0,
    },
  ],
  allItems: [
    {
      image: `${global.constants.s3Resources}SulvexChair.png`,
      name: "Sulvex Chair",
      original_price: 32.0,
      price: 20.0,
    },
    {
      image: `${global.constants.s3Resources}MustardChair.png`,
      name: "Bermund Chair",
      original_price: 42.0,
      price: 26.0,
    },
    {
      image: `${global.constants.s3Resources}MustardChair.png`,
      name: "Bermund Chair",
      original_price: 42.0,
      price: 26.0,
    },
    {
      image: `${global.constants.s3Resources}MustardChair.png`,
      name: "Bermund Chair",
      original_price: 42.0,
      price: 26.0,
    },
    {
      image: `${global.constants.s3Resources}MustardChair.png`,
      name: "Bermund Chair",
      original_price: 42.0,
      price: 26.0,
    },
  ],
};

export default function ShopCatalog() {
  const [list, setList] = useState(allLists.allItems);
  return (
    <Fragment>
      <img
        className="shop-catalog"
        src={`${global.constants.s3Image}shopCatalog.44e313a8.png`}
        alt="logo"
      />
      <div className="shop-catalog-header">
        <div>
          <h3 style={{ margin: 0 }}>All Items</h3>
          <p className="shop-catalog-results">About {list.length} results</p>
        </div>
        <div>
          Sort by:
          <Select
            defaultValue="allItems"
            style={{ width: 130 }}
            options={options}
            onChange={(value) => setList(allLists[value])}
          ></Select>
        </div>
      </div>
      <div className="shop-catalog-content">
        {list.map((item) => (
          <Link
            style={{ color: "#000000", textDecoration: "none" }}
            to="/productDetails"
            key={nanoid()}
          >
            <div className="shop-catalog-item">
              <img className="shop-catalog-image" src={item.image} alt="logo" />
              <h4 style={{ margin: 0 }}>{item.name}</h4>
              <span>{global.priceFilter(item.price)}</span>
              <span
                style={{
                  color: "red",
                  textDecoration: "line-through",
                  marginLeft: "0.5rem",
                }}
              >
                {global.priceFilter(item.original_price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}
