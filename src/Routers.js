import {React,Fragment} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./core/Home";
import Cart from "./core/Cart"
import Signup from "./user/Signup";
import Sigin from "./user/Signin"
import UserDashboard from "./user/UserDashboard"
import AdminDashboard from "./user/AdminDashBoard"
 
const Routers = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/cart" element={<Cart/>} />
        <Route  path="/Signup" element={<Signup/>} />
        <Route  path="/Sigin" element={<Sigin/>} />
        <Route path="/user/dashboard" element={<UserDashboard/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        
    </Routes>
    
    </BrowserRouter>
    
  );
};

export default Routers;