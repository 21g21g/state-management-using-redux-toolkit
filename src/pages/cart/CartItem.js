import React, { useContext } from "react";
import "./Cart.css";
import { Themecont } from "../../context/ThemeContext";

const CartItem = (data) => {
  const { count } = useContext(Themecont);
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="cartItem" key={item.id}>
            <img src={item.productImage} alt="ff" />
            <div className="description">
              <h1>
                <b>{item.productName}</b>
              </h1>
              <p>Price:{item.price}</p>
              <div className="btton">
                <button>-</button>
                <span
                  style={{
                    border: "1px black",
                    color: "black",
                    backgroundColor: "white",
                    width: "2rem",
                  }}
                >
                  {count}
                </span>
                <button>+</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
