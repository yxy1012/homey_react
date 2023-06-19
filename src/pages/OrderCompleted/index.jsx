import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";

export default function OrderCompleted() {
  const history = useHistory();
  const backHome = () => {
    history.push("/home");
  };
  return (
    <div>
      <img
        className="order-completed"
        src={`${global.constants.s3Image}orderCompleted.ffbcda52.png`}
        alt="order-completed"
      />
      <div className="order-completed-content">
        <img
          className="order-completed-content-image"
          src={`${global.constants.s3Image}oderIsCompleted.9312ef4a.png`}
          alt="order-completed-content"
        />
        <Button
          onClick={backHome}
          type="primary"
          className="order-completed-continue-button"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}
