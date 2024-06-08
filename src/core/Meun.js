import React from "react"
import { Link } from "react-router-dom";


const currentTab = (history, path) => {
  // alert("history.location.path -----"+history.location.path )
    if (path != path) {
        console.log("insid if---->")
        return { color: "#2ecc72" };
    } else {
        console.log("insid else---->")
        return { color: "#FFFFFF" };
    }
  };
  
const Meun=({history})=>{
    return(
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link  style={currentTab(history,"/")}  className="nav-link" to="/">
                        Home
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link  style={currentTab(history, "/cart")} className="nav-link" to="/cart">
                        Cart
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link  style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">
                        Dashboard
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link  style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                        A. Dashboard
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link  style={currentTab(history, "/siginin")} className="nav-link" to="/Signup">
                    Signup
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link  style={currentTab(history, "/siginin")} className="nav-link" to="/siginin">
                        SignIn
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link  style={currentTab(history, "/signout")} className="nav-link" to="/signout">
                        SignOut
                    </Link>
                 </li>
            </ul>
        </div>
    )
}

export default Meun;