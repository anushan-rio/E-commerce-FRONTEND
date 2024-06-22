import {React,Fragment} from "react"
import { Link ,useNavigate} from "react-router-dom";
import {signout,isAutheticated} from "../auth/helper/index"
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
    const navigate = useNavigate();
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
                 {isAutheticated() && isAutheticated().user.role=="0" && (
                      <li className="nav-item">
                      <Link  style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">
                          U .Dashboard
                      </Link>
                   </li>
                 )}
                    {isAutheticated() && isAutheticated().user.role=="1" && (
                         <li className="nav-item">
                         <Link  style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                             A. Dashboard
                         </Link>
                      </li>
                    )}
                 {!isAutheticated() && (
                     <Fragment>
                     <li className="nav-item">
                        <Link  style={currentTab(history, "/siginin")} className="nav-link" to="/Signup">
                        Signup
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link  style={currentTab(history, "/Sigin")} className="nav-link" to="/Sigin">
                            SignIn
                        </Link>
                     </li>
                     </Fragment>
                 )}
                 {isAutheticated() && (<li className="nav-item">
                     <span className="nav-link text-warning" onClick={() => {
                        signout(() => {
                            navigate("/")
                        });
                         }}>signout</span>
                    </li>)}
            </ul>
        </div>
    )
}

export default Meun;