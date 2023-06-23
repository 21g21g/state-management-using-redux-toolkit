import { createSlice } from "@reduxjs/toolkit";
import shop from "../pages/shop/Shop";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    count: 0,
    meku: 0,
    shopList: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newShop = action.payload;

      const existingShop = state.shopList.find(
        (shop) => shop.id === newShop.id
      );

      if (existingShop) {
        existingShop.count++;
        existingShop.meku++;

        existingShop.totalAmount += newShop.price;
      } else {
        state.shopList.push({
          id: newShop.id,
          productName: newShop.name,
          productImage: newShop.img,
          price: newShop.price,
          totalAmount: newShop.price,
          count: 1,
        });
      }
    },

    removeFrom(state, action) {
      const id = action.payload;
      const getidd = state.shopList.find((shop) => shop.id === id);

      if (getidd) {
        getidd.count--;
        getidd.totalAmount -= getidd.price;

        if (getidd.count === 0) {
          state.shopList.pop();
        }
      }
    },
    addButton(state, action) {
      const id = action.payload;
      const getidd = state.shopList.find((shop) => shop.id === id);
      if (getidd) {
        getidd.count++;

        getidd.totalAmount += getidd.price;
      }
    },
  },
});

export const shopsliceAction = shopSlice.actions;
export default shopSlice;
