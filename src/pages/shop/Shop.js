import React from "react";
import { PRODUCTS } from "../../products";
import "./Shop.css";
import ShopItem from "./ShopItem";

const shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>
          <b>ፊትአውራሪ ገበየሁ ኦንላይን ሱቅ</b>
        </h1>
      </div>
      <div className="products">
        {PRODUCTS.map((pro) => {
          return (
            <ShopItem
              id={pro.id}
              img={pro.productImage}
              name={pro.productName}
              price={pro.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default shop;
