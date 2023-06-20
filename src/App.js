import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { Contact } from "./pages/Contact";
import NavBar from "./components/NavBar";
import ThemeContextProvider from "./context/ThemeContext";
function App() {
  return (
    <ThemeContextProvider>
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
    </ThemeContextProvider>
  );
}

export default App;
