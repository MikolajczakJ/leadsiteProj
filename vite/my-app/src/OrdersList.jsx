// OrdersList.jsx
import React from "react";
import OneOrder from "./OneOrder";

const OrdersList = () => {
  const orders = ["Hamburger","Cheese Burger", "Pizza", "Fries"];

  return (
    <ul>
      {orders.map((order, index) => (
        <OneOrder key={index} order={order} />
      ))}
    </ul>
  );
};

export default OrdersList;
