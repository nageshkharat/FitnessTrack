// import React, { useEffect, useRef, useState } from "react";
// import "../styles/header.css";
// import logo from "../assets/img/Health___Fitness.png";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// const nav__links = [
//   { path: "/", display: "Home" },
//   { path: "/programs", display: "Programs" },
//   { path: "/membership", display: "Membership" },
//   { path: "/trackfit", display: "Track your fitness" },
//   { path: "/registration", display: "Register" },
//   { path: "/login", display: "Login" },
// ];

// const Header = () => {
//   const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
//   const [role, setRole] = useState(null); // user or admin
//   const navigate = useNavigate();

//   const headerRef = useRef(null);
//   const headerFunc = () => {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       headerRef.current.classList.add("sticky__header");
//     } else {
//       headerRef.current.classList.remove("sticky__header");
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", headerFunc);
//     return () => window.removeEventListener("scroll", headerFunc);
//   }, []);

//   useEffect(() => {
//     if (isAuthenticated) {
//       // Placeholder for role determination logic (fetch from backend based on user email)
//       setRole(user.email.includes("admin") ? "admin" : "user");
//     }
//   }, [isAuthenticated, user]);

//   const handleLogOut = () => {
//     logout({ returnTo: window.location.origin });
//   };

//   const handleLogIn = () => {
//     loginWithRedirect();
//   };

//   return (
//     <header className="header" ref={headerRef}>
//       <div className="container">
//         <div className="nav__wrapper">
//           <div className="logo">
//             <div className="logo__img">
//               <img src={logo} alt="Health & Fitness" />
//             </div>
//           </div>
//           <div className="navigation">
//             <ul className="menu">
//               {nav__links.map((item) => (
//                 <NavLink key={item.path} className="nav__item" to={item.path}>
//                   {item.display}
//                 </NavLink>
//               ))}
//               {role === "admin" && (
//                 <NavLink className="nav__item" to="/admin">
//                   Admin Dashboard
//                 </NavLink>
//               )}
//             </ul>
//           </div>
//           <div className="nav__right">
//             {isAuthenticated && (
//               <p className="nav__item">Welcome, {user.name}</p>
//             )}
//             {isAuthenticated ? (
//               <button className="register__btn" onClick={handleLogOut}>
//                 Log Out
//               </button>
//             ) : (
//               <button className="register__btn" onClick={handleLogIn}>
//                 Log In / Register
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;









// import React, { useEffect, useRef, useState } from "react";
// import "../styles/header.css";
// import logo from "../assets/img/Health___Fitness.png";
// import { NavLink, useNavigate } from "react-router-dom";

// const nav__links = [
//   { path: "/", display: "Home" },
//   { path: "/programs", display: "Programs" },
//   { path: "/membership", display: "Membership" },
//   { path: "/trackfit", display: "Track your fitness" },
//   { path: "/registration", display: "Register" },
//   { path: "/login", display: "Login" },
// ];

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [role, setRole] = useState(null); // "user" or "admin"
//   const navigate = useNavigate();
//   const headerRef = useRef(null);

//   const headerFunc = () => {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       headerRef.current.classList.add("sticky__header");
//     } else {
//       headerRef.current.classList.remove("sticky__header");
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", headerFunc);
//     return () => window.removeEventListener("scroll", headerFunc);
//   }, []);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setIsLoggedIn(true);
//       setRole(user.role); // Assume the user object contains a role
//     } else {
//       setIsLoggedIn(false);
//       setRole(null);
//     }
//   }, []);

//   const handleLogOut = () => {
//     localStorage.removeItem("user");
//     setIsLoggedIn(false);
//     setRole(null);
//     navigate("/");
//   };

//   const handleLogIn = () => {
//     navigate("/login");
//   };

//   return (
//     <header className="header" ref={headerRef}>
//       <div className="container">
//         <div className="nav__wrapper">
//           <div className="logo">
//             <div className="logo__img">
//               <img src={logo} alt="Health & Fitness" />
//             </div>
//           </div>
//           <div className="navigation">
//             <ul className="menu">
//               {nav__links.map((item) => (
//                 <NavLink key={item.path} className="nav__item" to={item.path}>
//                   {item.display}
//                 </NavLink>
//               ))}
//               {role === "admin" && (
//                 <NavLink className="nav__item" to="/admin">
//                   Admin Dashboard
//                 </NavLink>
//               )}
//             </ul>
//           </div>
//           <div className="auth-buttons">
//             {isLoggedIn ? (
//               <button className="btn logout-btn" onClick={handleLogOut}>
//                 Logout
//               </button>
//             ) : (
//               <button className="btn login-btn" onClick={handleLogIn}>
//                 Login
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;










import React, { useEffect, useRef, useState } from "react";
import "../styles/header.css";
import logo from "../assets/img/Health___Fitness.png";
import { NavLink, useNavigate } from "react-router-dom";

const nav__links = [
  { path: "/", display: "Home" },
  { path: "/programs", display: "Programs" },
  { path: "/membership", display: "Membership" },
  { path: "/trackfitness", display: "Track your fitness" },

];

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null); // "user" or "admin"
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setRole(user.role); // Assume the user object contains a role
    } else {
      setIsLoggedIn(false);
      setRole(null);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setRole(null);
    navigate("/");
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* Logo Section */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="Health & Fitness" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <NavLink key={item.path} className="nav__item" to={item.path}>
                  {item.display}
                </NavLink>
              ))}
              {role === "admin" && (
                <NavLink className="nav__item" to="/admin">
                  Admin Dashboard
                </NavLink>
              )}
            </ul>
          </div>

          {/* Authentication Buttons */}
          <div className="auth-buttons">
            {isLoggedIn ? (
              <button className="btn logout-btn" onClick={handleLogOut}>
                Logout
              </button>
            ) : (
              <NavLink className="btn login-btn" to="/registration">
                Register/Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
