import React from "react";
import "./Cart.css";
import { Themecont } from "../../context/ThemeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, count, totalAmount, removeFrom, addButton } =
    useContext(Themecont);

  return (
    <div className="all">
      <h1 style={{ textAlign: "center", color: "greenyellow" }}>
        <b>ሊገዙ የመረጡዋቸዉ እቃዎች</b>
      </h1>
      {cartItems.length > 0 ? (
        <div className="cart">
          {cartItems.map((item) => (
            <div>
              <div key={item.id} className="cartItem">
                <img src={item.productImage} alt="ff" />
                <div className="description">
                  <h1>
                    <b>{item.productName}</b>
                  </h1>
                  <p>Price: {item.price}</p>
                  <div className="btton">
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => removeFrom(item.id)}
                    >
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
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => addButton(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="subtotal">
                <h2>SubTotal: {totalAmount}</h2>
                <div className="btn">
                  <button id="btt" onClick={() => navigate("/")}>
                    ይቀጥሉ
                  </button>
                  <button id="btt">ያረጋግጡ</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 style={{ marginTop: "10rem", textAlign: "center", color: "red" }}>
          <b>ምንም ነገር አልመረጡም</b>
        </h1>
      )}
    </div>
  );
};

export default Cart;
