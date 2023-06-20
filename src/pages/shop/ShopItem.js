import React, { useContext, useState } from "react";
import "./ShopItem.css";
import { Themecont } from "../../context/ThemeContext";

const ShopItem = ({ img, name, price, id }) => {
  const { addToCart, count, cartItems } = useContext(Themecont);
  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="product">
      <img src={img} alt="there is no image" />
      <p>
        <b>{name}</b>
      </p>
      <p>${price}</p>

      <button
        key={id}
        className="addToCartBttn"
        onClick={handleAddToCart}
        disabled={cartItems.some((item) => item.id === id)}
      >
        {cartItems.some((item) => item.id === id) ? "Added" : "Add To Cart"}
        {cartItems.some((item) => item.id === id) && ` (${count})`}
      </button>
    </div>
  );
};

export default ShopItem;
