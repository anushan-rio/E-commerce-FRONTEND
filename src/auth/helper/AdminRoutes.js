import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { isAutheticated } from "./index";

const AdminRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={props =>
        isAutheticated() && isAutheticated().user.role === 1 ? (
          <Component {...props} />
        ) : (
          <navigate
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;