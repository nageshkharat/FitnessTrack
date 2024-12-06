import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Footer from "./UI/Footer";
import Header from "./component/Header";
import AllRoutes from "./component/AllRoutes";
import Chatbot from "./UI/Chatbot";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
      <Chatbot />
      
    </>
  );
}

export default App;




// import "./App.css";
// import { useEffect, useState } from "react";
// import Aos from "aos";
// import Footer from "./UI/Footer";
// import Header from "./component/Header";
// import AllRoutes from "./component/AllRoutes";
// import Chatbot from "./UI/Chatbot"; // Import Chatbot
// import { BrowserRouter as Router } from "react-router-dom";

// function App() {
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     Aos.init();

//     // Retrieve role from sessionStorage (or localStorage)
//     const storedRole = sessionStorage.getItem("role");
//     if (storedRole) {
//       setUserRole(storedRole);
//     }
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem("role"); // Clear session data
//     setUserRole(null); // Update role state
//   };

//   return (
//     <Router>
//       <Header role={userRole} onLogout={handleLogout} /> {/* Pass role and logout handler */}
//       <AllRoutes role={userRole} setRole={setUserRole} /> {/* Pass role and setter */}
//       <Footer />
//       <Chatbot /> {/* Include Chatbot */}
//     </Router>
//   );
// }

// export default App;
