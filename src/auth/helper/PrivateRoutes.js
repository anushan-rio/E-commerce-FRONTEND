import React from "react"
import {isAutheticated} from "./index"
import { Route, useNavigate } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
    return (
      <Route
        {...rest}
        render={props =>
          isAutheticated() ? (
            <Component {...props} />
          ) : (
            <navigate
              to={{
                pathname: "/Sigin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  };
  
  export default PrivateRoute;




