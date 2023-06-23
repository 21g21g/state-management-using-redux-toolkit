import React from "react";
import "./CartItem.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { shopsliceAction } from "../../store/statemana";

const CartItem = ({ id, names, imag, pricc }) => {
  const totalAmount = useSelector(
    (state) => state.shop.shopList.find((item) => item.id === id).totalAmount
  );
  const count = useSelector(
    (state) => state.shop.shopList.find((item) => item.id === id).count
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const removeFrom = () => {
    dispatch(shopsliceAction.removeFrom(id));
  };
  const addButton = () => {
    dispatch(shopsliceAction.addButton(id));
  };

  return (
    <>
      <div key={id} className="cartItem">
        <img src={imag} alt="ff" />
        <div className="description">
          <h1>
            <b>{names}</b>
          </h1>
          <p>Price: {pricc}</p>
          <div className="btton">
            <button style={{ cursor: "pointer" }} onClick={removeFrom}>
              -
            </button>
            <span
              style={{
                border: "1px solid black",
                color: "black",
                backgroundColor: "white",
                width: "3rem",
                height: "0.3rem",
              }}
            >
              {count}
            </span>
            <button onClick={addButton} style={{ cursor: "pointer" }}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="subtotal">
        <h2>TotalPrice: {totalAmount}</h2>
        <div className="btn">
          <button id="btt" onClick={() => navigate("/")}>
            ይቀጥሉ
          </button>
          <button id="btt">ያረጋግጡ</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
