import React from "react";
import auth from "../service/authServices";
import { Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return (
        <Route 
          path={path}
          {...rest}
          render={props => {
            if(!auth.getUser()) return <Redirect to={{
                pathname:"/login",
                state:{from: props.location}
            }} />;
            return Component ?  <Component {...props} /> : render(props);
          }}
          />
        )
}
          
export default ProtectedRoute