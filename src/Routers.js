import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./core/Home";
import Cart from "./core/Cart"


const Routers = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/cart" element={<Cart/>} />
        
    </Routes>
    </BrowserRouter>
  );
};

export default Routers;