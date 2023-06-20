import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";
export const Themecont = createContext();

const ThemeContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const addToCart = (selectedId) => {
    const selectedProduct = PRODUCTS.find(
      (product) => product.id === selectedId
    );

    if (selectedProduct) {
      const existingItem = cartItems.find(
        (item) => item.id === selectedProduct.id
      );

      if (existingItem) {
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item.id === selectedProduct.id
              ? { ...item, count: item.count + 1 }
              : item
          )
        );
        // setCount(count + 1);
      } else {
        // If the item doesn't exist, add it to the cart
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          { ...selectedProduct },
        ]);
        setCount(count + 1);
      }
    }
  };
  const removeFrom = (sele) => {
    setCount(count - 1);
  };
  const addButton = (selected) => {
    setCount(count + 1);
  };

  return (
    <Themecont.Provider
      value={{
        cartItems,
        addToCart,
        removeFrom,
        addButton,
        count,
        totalAmount,
      }}
    >
      {children}
    </Themecont.Provider>
  );
};
export default ThemeContextProvider;
