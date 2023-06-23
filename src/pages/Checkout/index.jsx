import React, { useEffect, useState } from "react";
import { Input, Checkbox, Button, Card, Modal } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";
import axios from "@/axios";
import { connect } from "react-redux";

const Checkout = ({user}) => {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [subtotals, setSubTotals] = useState(0);
  const [totals, setTotals] = useState(0);
  const [shippingAndTax, setShippingAndTax] = useState(0);

  const [modal, contextHolder] = Modal.useModal();

  const history = useHistory();

  const warningCheckoutConfig = {
    title: "Warning",
    content: <p>Fail to Checkout!</p>,
  };

  const warningCalculateConfig = {
    title: "Warning",
    content: <p>Please Calculate Shipping!</p>,
  };

  const calculate = () => {
    setShippingAndTax(subtotals * 0.08 + 5);
  }

  const proceedToCheckout = () => {
    if(shippingAndTax !== 0){
      const finalItems = [];
      checkoutItems.forEach(item=>{
        const date = new Date();
        const finalItem = {
          quantity: item.quantity,
          total_amount: item.product.price * item.quantity,
          status: "Completed",
          date: date.toDateString().split( " " )[1] + " " + date.getDate(),
          user: {
            id: user.id
          },
          product: {
            id: item.product.id
          }
        }
        finalItems.push(finalItem);
      })
      axios.post("/orders/saveAll", finalItems).then(resp => {
        if(resp.data === "success"){
          axios.put("/shoppingcarts/deleteAll", checkoutItems).then(() => {
            history.push("/orderCompleted");
          })
        }else{
          modal.warning(warningCheckoutConfig);
        }
      })
    }else{
      modal.warning(warningCalculateConfig);
    }
  };

  useEffect(() => {
    if (user.id) {
      axios.get("/shoppingcarts/findByUserId/" + user.id).then((resp) => {
        setCheckoutItems(resp.data);
      });
    }
  }, [user]);

  useEffect(() => {
    const newSubTotals = checkoutItems.reduce(
      (pre, cur) => pre + cur.quantity * cur.product.price,
      0
    );
    setSubTotals(newSubTotals);
  }, [checkoutItems]);

  useEffect(() => {
    setTotals(subtotals + shippingAndTax)
  }, [subtotals, shippingAndTax]);

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
              <Button type="primary" style={{ marginRight: "16rem" }} onClick={calculate}>
                Calculate Shipping
              </Button>
              <Button type="primary">Update Information</Button>
            </div>
          </div>
        </div>
        <div className="checkout-items-side-container">
          {checkoutItems.map((item) => (
            <div key={item.id}>
              <div className="checkout-item">
                <img
                  className="checkout-item-image"
                  src={item.product.image}
                  alt="checkout"
                />
                <div>
                  <h5 style={{ marginBottom: 0 }}>{item.product.name}</h5>
                  <span style={{ color: "darkgray", fontSize: "small" }}>
                    {global.priceFilter(item.product.price)}
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
                  {global.priceFilter(item.product.price * item.quantity)}
                </div>
              </div>
              <div className="checkout-bottom-line"></div>
            </div>
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
              <span>{global.priceFilter(shippingAndTax)}</span>
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
      {contextHolder}
    </div>
  );
};

export default connect((state)=>({user: state.user}))(Checkout);
