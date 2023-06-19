import React from "react";
import { Card, Button } from "antd";
import "./index.css";

const orderItems = [
  {
    id: "#1231918",
    total_amount: 135.0,
    quantity: 5,
    date: "Nov 18",
    status: "Completed",
    product: {
      id: 1,
      name: "Mustard Chair",
      price: 27.0,
      image: `${global.constants.s3Resources}MustardChair.png`,
    },
  },
  {
    id: "#1231919",
    total_amount: 81.0,
    quantity: 3,
    date: "Dec 01",
    status: "Completed",
    product: {
      id: 1,
      name: "Mustard Chair",
      price: 27.0,
      image: `${global.constants.s3Resources}MustardChair.png`,
    },
  },
];

export default function MyOrders() {
  return (
    <div>
      <img
        className="myOrders"
        src={`${global.constants.s3Image}myOrder.bb3e736d.png`}
        alt="myOrders"
      />
      <div className="my-orders-header">
        <h3 style={{ margin: 0 }}>Your Order History</h3>
        <p className="my-orders-results">About {1} results</p>
      </div>
      {orderItems.map((item) => (
        <Card key={item.id} className="my-orders-card">
          <div className="my-orders-container">
            <img
              className="my-order-item-image"
              src={item.product.image}
              alt="my-order-item"
            />
            <div className="my-order-item-info">
              <h3 style={{ marginBottom: "1rem" }}>Order# {item.id}</h3>
              <div style={{marginBottom: "0.5rem"}}>{global.priceFilter(item.total_amount)}</div>
              <div style={{ marginBottom: "0.5rem", color: "darkgray" }}>{item.quantity} items</div>
              <div style={{ marginBottom: "0.5rem", color: "darkgray" }}>
                {item.date} - {item.status}
              </div>
              <Button type="primary"> Reorder</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
