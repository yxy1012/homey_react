import React from "react";
import { Card, InputNumber, Button } from "antd";
import {
  HeartOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./index.css";

const productDetails = {
  name: "Bermund Chair",
  original_price: 42.0,
  price: 26.0,
  description:
    "The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.",
  image: `${global.constants.s3Resources}wishItem2.png`,
  detailImages: [
    `${global.constants.s3Resources}wishItem2.png`,
    `${global.constants.s3Resources}wishItem2.png`,
    `${global.constants.s3Resources}wishItem2.png`,
  ],
};

const shareIcons = [
  <FacebookOutlined />,
  <InstagramOutlined />,
  <TwitterOutlined />,
];

export default function ProductDetails() {
  //   const [quantity, setQuantity] = useState(1);
  const onChange = (value) => {
    console.log("changed", value);
    // setQuantity(value);
  };
  return (
    <div>
      <img
        className="product-details"
        src={`${global.constants.s3Image}productDetailsImage.1548201d.png`}
        alt="product-details"
      />
      <Card className="product-details-card">
        <div className="product-details-container">
          <div className="product-details-side-images-container">
            {productDetails.detailImages.map((item, index) => (
              <div key={index}>
                <img
                  className="product-details-side-image"
                  src={item}
                  alt="sideImage"
                />
              </div>
            ))}
          </div>
          <div className="product-details-main-image-container">
            <img
              className="product-details-main-image"
              src={productDetails.image}
              alt="mainImage"
            />
          </div>
          <div className="product-details-info-container">
            <h1>{productDetails.name}</h1>
            <span style={{ fontSize: "1.5rem" }}>
              {global.priceFilter(productDetails.price)}
            </span>
            <span
              style={{
                color: "red",
                textDecoration: "line-through",
                marginLeft: "0.5rem",
                fontSize: "1.5rem",
              }}
            >
              {global.priceFilter(productDetails.original_price)}
            </span>
            <p style={{ color: "darkgray" }}>{productDetails.description}</p>
            <div className="product-details-icons">
              <InputNumber
                min={1}
                max={10}
                defaultValue={1}
                onChange={onChange}
              />
              <Button
                type="link"
                style={{ fontSize: "1rem" }}
              >
                Add to Cart
              </Button>
              <Button
                type="link"
                style={{ fontSize: "1.5rem", paddingBottom: "2.5rem" }}
                icon={<HeartOutlined />}
              >
              </Button>
            </div>
            <div className="product-details-share">
              <h3>Share</h3>
              {shareIcons.map((item, index) => (
                <Button
                  key={index}
                  type="link"
                  style={{ fontSize: "1.5rem", padding: "0" }}
                  icon={item}
                >
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
