import React, { useEffect, useState } from "react";
import { Table, InputNumber, Button, Card } from "antd";
import { useHistory  } from 'react-router-dom';
import "./index.css";
import tip from "../../assets/tip.png";

const originData = [
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

const originSubTotals = originData.reduce((pre, cur) => pre + cur.total, 0);
const originTotals = originData.reduce((pre, cur) => pre + cur.total, 0)

export default function ShoppingCart() {
  const [data, setData] = useState(originData);
  const [subtotals, setSubTotals] = useState(originSubTotals);
  const [totals, setTotals] = useState(originTotals);

  const history = useHistory();

  useEffect(() => {
    const newTotal = data.reduce((pre, cur) => pre + cur.total, 0);
    setSubTotals(newTotal);
    setTotals(newTotal);
  },[data])

  const columns = [
    {
      title: <h2>Product</h2>,
      dataIndex: "name",
      key: "name",
      render: (text, { image }) => (
        <div className="shopping-cart-product">
          <img
            className="shopping-cart-product-image"
            src={image}
            alt="product"
          />
          <h4>{text}</h4>
        </div>
      ),
    },
    {
      title: <h2>Price</h2>,
      dataIndex: "price",
      key: "price",
      render: (price) => <>{global.priceFilter(price)}</>,
    },
    {
      title: <h2>Quantity</h2>,
      dataIndex: "quantity",
      key: "quantity",
      render: (_, { quantity, key }) => (
        <InputNumber
          min={1}
          max={10}
          defaultValue={quantity}
          onChange={(value) => changeQuantity(value, key)}
        />
      ),
    },
    {
      title: <h2>Total</h2>,
      dataIndex: "total",
      key: "total",
      render: (total) => <>{global.priceFilter(total)}</>,
    },
  ];

  const changeQuantity = (value, key) => {
    let newData = data.map((item) => {
      if (item.key === key) item.total = value * item.price;
      return item;
    });
    setData(newData);
  };

  const goToCheckout = () => {
    history.push('/checkout');
  };

  return (
    <div>
      <img
        className="shoppingCart"
        src={`${global.constants.s3Image}shoppingCartImage.2b896a28.png`}
        alt="shoppingCart"
      />
      <div className="shopping-cart-content">
        <div className="shopping-cart-table-container">
          <Table columns={columns} dataSource={data} pagination={false} />
          <div className="shopping-cart-table-buttons">
            <Button type="primary">Update Cart</Button>
            <Button type="primary">Clear Cart</Button>
          </div>
        </div>
        <div className="shopping-cart-totals">
          <h2>Cart Totals</h2>
          <Card className="shopping-cart-totals-table">
            <div className="shopping-cart-totals-table-subtotals">
              <h3 style={{ textAlign: "left", margin: "0 0 0 0.5rem" }}>
                Subtotals:
              </h3>
              <span>{global.priceFilter(subtotals)}</span>
            </div>
            <div className="shopping-cart-bottom-line"></div>
            <div className="shopping-cart-totals-table-totals">
              <h3 style={{ textAlign: "left", margin: "0 0 0 0.5rem" }}>
                Totals:
              </h3>
              <span>{global.priceFilter(totals)}</span>
            </div>
            <div className="shopping-cart-bottom-line"></div>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "0.3rem" }}>
                <img
                  className="tip"
                  src={tip}
                  alt="tip"
                  style={{ width: "2rem" }}
                />
              </div>
              <div>Shipping & taxes calculated at checkout</div>
            </div>
            <Button
              style={{
                backgroundColor: " rgb(98, 206, 121)",
                color: "#FFFFFF",
                width: "100%",
                marginTop: "1rem",
              }}
              onClick={goToCheckout}
            >
              Proceed To Checkout
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
