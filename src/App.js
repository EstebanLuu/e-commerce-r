import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./Cart/Cart";
import Footer from "./footer/Footer";
import Sdata from "./components/shops/Sdata";
import Usuario from "./components/usuario/Usuario";
import Register from "./components/Login/Register";
import { AuthProvider } from "./components/context/AuthContext";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Pages
                  productItems={productItems}
                  addToCart={addToCart}
                  shopItems={shopItems}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  CartItem={CartItem}
                  addToCart={addToCart}
                  decreaseQty={decreaseQty}
                />
              }
            />

            <Route path="/usuario" element={<Usuario />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
