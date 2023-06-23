import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import CartItem from "./pages/cart/CartItem";
import Cart from "./pages/cart/Cart";
import { useSelector } from "react-redux";
import { Contact } from "./pages/Contact";
import NavBar from "./components/NavBar";
function App() {
  const shoplist = useSelector((state) => state.shop.shopList);
  console.log(shoplist);
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
