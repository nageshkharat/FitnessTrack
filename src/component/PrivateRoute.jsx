import React from 'react'
import { useContext } from 'react'
import { Navigate } from "react-router-dom";
import { AuthContext } from './AuthContextProvider'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({children}) => {
    const {isAuth} = useContext(AuthContext);
    const {isAuthenticated,loginWithRedirect} = useAuth0();

    // const navigate = useNavigate();
    if(isAuthenticated){
        loginWithRedirect()                                                             
    }
    // const token = localStorage.getItem("token");

    // if (!token) {
    //   return <Navigate to="/login" replace />;
    // }

    return children;
}

export default PrivateRoute



// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "./AuthContextProvider";

// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;
