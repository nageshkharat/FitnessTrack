import React from 'react'
import { createContext,useState,useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [filter,setFilter] = useState("");
    

    return <AuthContext.Provider value={{filter,setFilter}}>{children}</AuthContext.Provider> 
}

export default AuthContextProvider




// // AuthContextProvider.js
// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = async (email, password) => {
//     try {
//       const response = await fetch("http://localhost:5008/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         setUser(data.user); // Update user state
//         localStorage.setItem("token", data.token); // Store token
//       } else {
//         throw new Error(data.message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   const isAuthenticated = !!user;

//   return (
//     <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
