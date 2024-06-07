import React from "react"
import { Link, withRouter } from "react-router-dom";

const Meun=()=>{
    return(
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link  className="nav-link" to="/">
                        Home
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link  className="nav-link" to="/cart">
                        Cart
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link  className="nav-link" to="/">
                        Dashboard
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link  className="nav-link" to="/">
                        A. Dashboard
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link  className="nav-link" to="/">
                        SignIn
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link  className="nav-link" to="/">
                        SignOut
                    </Link>
                 </li>
            </ul>
        </div>
    )
}

export default Meun;