import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./core/Home";
import Cart from "./core/Cart"
import Signup from "./user/Signup";
import Sigin from "./user/Signin"
const Routers = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/cart" element={<Cart/>} />
        <Route  path="/Signup" element={<Signup/>} />
        <Route  path="/Sigin" element={<Sigin/>} />
        
    </Routes>
    </BrowserRouter>
  );
};

export default Routers;