import React, { useEffect, useState } from "react";
import { Table, InputNumber, Button, Card, message, Modal } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";
import tip from "../../assets/tip.png";
import axios from "@/axios";
import { connect } from "react-redux";
import { CloseOutlined, ExclamationCircleFilled } from "@ant-design/icons";

const ShoppingCart = ({ user }) => {
  const [data, setData] = useState([]);
  const [subtotals, setSubTotals] = useState(0);
  const [totals, setTotals] = useState(0);

  const [messageApi, contextHolderMessage] = message.useMessage();

  const [modal, contextHolder] = Modal.useModal();

  const history = useHistory();

  const successConfig = {
    title: "Success",
    content: <p>Update Successfully!</p>,
  };
  const warningConfig = {
    title: "Warning",
    content: <p>Fail to Update!</p>,
  };

  const removeItem = (id) => {
    modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleFilled />,
      content: "Do you want to remove this item ?",
      okText: "Yes",
      cancelText: "Cancel",
      onOk: () => {
        axios.delete(`/shoppingcarts/deleteById/${id}`).then(() => {
          setData(data.filter(item => item.id !== id));
          messageApi.open({
            type: "success",
            content: "Remove Successfully"
          });
        });
      },
      onCancel: () => {
        messageApi.open({
          type: 'warning',
          content: 'Cancel Removing',
        });
      }
    });
  }

  const updateCart = () => {
    axios.put("/shoppingcarts/update", data).then(resp => {
      if(resp.data === "success"){
        modal.success(successConfig);
      }else{
        modal.warning(warningConfig);
      }
    })
  };

  const clearCart = () => {
    modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleFilled />,
      content: "Do you want to remove all items ?",
      okText: "Yes",
      cancelText: "Cancel",
      onOk: () => {
        axios.put("/shoppingcarts/deleteAll", data).then(() => {
          setData([]);
          messageApi.open({
            type: "success",
            content: "Successfully Remove All Items"
          });
        });
      },
      onCancel: () => {
        messageApi.open({
          type: 'warning',
          content: 'Cancel Removing All Items',
        });
      }
    });
  };

  useEffect(() => {
    if (user.id) {
      axios.get("/shoppingcarts/findByUserId/" + user.id).then((resp) => {
        setData(resp.data);
      });
    }
  }, [user]);

  useEffect(() => {
    const newTotal = data.reduce(
      (pre, cur) => pre + cur.quantity * cur.product.price,
      0
    );
    setSubTotals(newTotal);
    setTotals(newTotal);
  }, [data]);

  const columns = [
    {
      title: <h2>Product</h2>,
      dataIndex: "product",
      key: "name",
      render: ({ image, name }, {id}) => (
        <div className="shopping-cart-product">
          <img
            className="shopping-cart-product-image"
            src={image}
            alt="product"
          />
          <Button
            shape="circle"
            icon={<CloseOutlined />}
            className="shopping-cart-product-delete"
            onClick={() => removeItem(id)}
          ></Button>
          <h4>{name}</h4>
        </div>
      ),
    },
    {
      title: <h2>Price</h2>,
      dataIndex: "product",
      key: "price",
      render: ({ price }) => <>{global.priceFilter(price)}</>,
    },
    {
      title: <h2>Quantity</h2>,
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, { id }) => (
        <InputNumber
          min={1}
          max={10}
          defaultValue={quantity}
          onChange={(value) => changeQuantity(value, id)}
        />
      ),
    },
    {
      title: <h2>Total</h2>,
      dataIndex: "product",
      key: "total",
      render: ({ price }, { quantity }) => (
        <>{global.priceFilter(price * quantity)}</>
      ),
    },
  ];

  const changeQuantity = (value, id) => {
    let newData = data.map((item) => {
      if (item.id === id) item.quantity = value;
      return item;
    });
    setData(newData);
  };

  const goToCheckout = () => {
    history.push("/checkout");
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
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            rowKey="id"
          />
          <div className="shopping-cart-table-buttons">
            <Button type="primary" onClick={updateCart}>Update Cart</Button>
            <Button type="primary" onClick={clearCart}>Clear Cart</Button>
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
      {contextHolder}
      {contextHolderMessage}
    </div>
  );
};

export default connect((state) => ({ user: state.user }))(ShoppingCart);
