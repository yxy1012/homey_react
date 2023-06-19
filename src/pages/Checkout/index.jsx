import React, { useState } from "react";
import { Input, Checkbox, Button, Card } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";

const checkoutItems = [
  {
    key: 1,
    name: "Mustard Chair",
    image: `${global.constants.s3Resources}MustardChair.png`,
    price: 42,
    quantity: 1,
    total: 42,
  },
  {
    key: 2,
    name: "Sulvex Chair",
    image: `${global.constants.s3Resources}SulvexChair.png`,
    price: 20,
    quantity: 2,
    total: 40,
  },
];

const originSubTotals = checkoutItems.reduce((pre, cur) => pre + cur.total, 0);
const originTotals = checkoutItems.reduce((pre, cur) => pre + cur.total, 0);

export default function Checkout() {
  const [subtotals] = useState(originSubTotals);
  const [totals] = useState(originTotals);

  const history = useHistory();

  const proceedToCheckout = () => {
    history.push("/orderCompleted");
  };
  return (
    <div>
      <img
        className="checkout"
        src={`${global.constants.s3Image}checkout.ce625668.png`}
        alt="checkout"
      />
      <div className="checkout-header">
        <h3 style={{ margin: 0 }}>Shipping Details</h3>
        <p className="checkout-tips">Enter Your Shipping Address Here!</p>
      </div>
      <div className="shipping-details-content">
        <div className="shipping-details-info">
          <div className="shipping-details-contact-info">
            <h4 style={{ margin: "1rem 0 1rem 0" }}>Contact Information</h4>
            <Input
              className="shipping-details-input"
              placeholder="Mobile phone number"
            />
            <Checkbox>Keep me up to date on news and exclusive offers</Checkbox>
          </div>
          <div className="shipping-details-shipping-address">
            <h4 style={{ margin: "1rem 0 1rem 0" }}>Shipping Address</h4>
            <div className="shipping-details-inputs-container">
              <Input
                style={{ width: "19rem" }}
                className="shipping-details-input"
                placeholder="First name(optional)"
              />
              <Input
                style={{ width: "19rem" }}
                className="shipping-details-input"
                placeholder="Last name"
              />
            </div>
            <div className="shipping-details-inputs-container">
              <Input className="shipping-details-input" placeholder="Address" />
            </div>
            <div className="shipping-details-inputs-container">
              <Input
                className="shipping-details-input"
                placeholder="Apartment, suit, etc(optional)"
              />
            </div>
            <div className="shipping-details-inputs-container">
              <Input className="shipping-details-input" placeholder="City" />
            </div>
            <div className="shipping-details-inputs-container">
              <Input
                style={{ width: "19rem" }}
                className="shipping-details-input"
                placeholder="United States"
                disabled
              />
              <Input
                style={{ width: "19rem" }}
                className="shipping-details-input"
                placeholder="Postal Code"
              />
            </div>
            <div className="shipping-details-info-buttons-container">
              <Button type="primary" style={{ marginRight: "16rem" }}>
                Calculate Shipping
              </Button>
              <Button type="primary">Update Information</Button>
            </div>
          </div>
        </div>
        <div className="checkout-items-side-container">
          {checkoutItems.map((item) => (
            <>
              <div key={item.key} className="checkout-item">
                <img
                  className="checkout-item-image"
                  src={item.image}
                  alt="checkout"
                />
                <div>
                  <h5 style={{ marginBottom: 0 }}>{item.name}</h5>
                  <span style={{ color: "darkgray", fontSize: "small" }}>
                    {global.priceFilter(item.price)}
                  </span>
                  <span
                    style={{
                      color: "darkgray",
                      fontSize: "small",
                      marginLeft: "2rem",
                    }}
                  >
                    *{item.quantity}
                  </span>
                </div>
                <div style={{ margin: "2rem 0 0 3rem" }}>
                  {global.priceFilter(item.price * item.quantity)}
                </div>
              </div>
              <div className="checkout-bottom-line"></div>
            </>
          ))}
          <Card className="checkout-totals-table">
            <div className="checkout-totals-table-items">
              <h3 style={{ textAlign: "left", margin: "0 0 0 0.5rem" }}>
                Subtotals:
              </h3>
              <span>{global.priceFilter(subtotals)}</span>
            </div>
            <div className="checkout-bottom-line"></div>
            <div className="checkout-totals-table-items">
              <h3 style={{ textAlign: "left", margin: "0 0 0 0.5rem" }}>
                Shipping & Tax:
              </h3>
              <span>{global.priceFilter(0)}</span>
            </div>
            <div className="checkout-bottom-line"></div>
            <div className="checkout-totals-table-items">
              <h3 style={{ textAlign: "left", margin: "0 0 0 0.5rem" }}>
                Totals:
              </h3>
              <span>{global.priceFilter(totals)}</span>
            </div>
            <div className="checkout-bottom-line"></div>
            <Button
              style={{
                backgroundColor: " rgb(98, 206, 121)",
                color: "#FFFFFF",
                width: "100%",
                marginTop: "1rem",
              }}
              onClick={proceedToCheckout}
            >
              Proceed To Checkout
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
