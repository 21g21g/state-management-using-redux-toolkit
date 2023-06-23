import React, { useState } from "react";
import "./ShopItem.css";
import { shopsliceAction } from "../../store/statemana";
import { useDispatch, useSelector } from "react-redux";

const ShopItem = ({ img, name, price, id }) => {
  const dispatch = useDispatch();
  const meku = useSelector((state) => state.shop.meku);

  const addToCart = () => {
    dispatch(
      shopsliceAction.addToCart({
        id,
        name,
        price,
        img,
      })
    );
  };

  return (
    <div className="product" key={id}>
      <img src={img} alt="there is no image" />
      <p>
        <b>{name}</b>
      </p>
      <p>${price}</p>

      <button className="addToCartBttn" onClick={addToCart}>
        add cart{meku}
      </button>
    </div>
  );
};

export default ShopItem;
