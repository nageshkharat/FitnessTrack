import React from 'react'
import { Routes, Route} from "react-router-dom";
import Hero from '../UI/Hero';
import Testimonials from '../UI/Testimonials';
import Pricing from '../UI/Pricing';
import Trackfit from '../UI/TrackFitness';
import Exercise from '../UI/Exercise';
import Registration from '../UI/Registration';
import Home from '../UI/Home';
import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import Swal from 'sweetalert2';
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from './PrivateRoute';
import Login from '../UI/Login';
import TrackFitness from '../UI/TrackFitness';


const AllRoutes = () => {
  // const {loginWithRedirect, isAuthenticated,} = useAuth0();
  // const {filter,setFilter,verifyUser}=useContext(AuthContext);
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="/programs" element={<Testimonials />} />  
      <Route path="/membership" element={<Pricing />} />  
      <Route path="/TrackFitness" element={<TrackFitness/>} />
      {/* <Route path="/Trackfit" element={
        isAuthenticated?<Track />:<Login/>
      } /> */}
      <Route path="/Registration" element={<Registration/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
  )
}

export default AllRoutes






// import React, { useContext } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Hero from '../UI/Hero';
// import Testimonials from '../UI/Testimonials';
// import Pricing from '../UI/Pricing';
// import Trackfit from '../UI/Trackfit';
// import Exercise from '../UI/Exercise';
// import Registration from '../UI/Registration';
// import Home from '../UI/Home';
// import Login from '../UI/LogIn/Login';
// import PrivateRoute from './PrivateRoute'; // For protecting routes
// import { AuthContext } from './AuthContextProvider';

// const AllRoutes = () => {
//   const { isAuthenticated } = useContext(AuthContext); // Using custom AuthContext

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/programs" element={<Testimonials />} />
//       <Route path="/membership" element={<Pricing />} />
//       <Route path="/Trackfit" element={<Trackfit your fitness />} />
//       {/* Protect the /Trackfit route */}
//       <Route
//         path="/Trackfit"
//         element={
//           isAuthenticated ? (
//             <Trackfit />
//           ) : (
//             <Login />
//           )
//         }
//       />
//       <Route path="/Registration" element={<Registration />} />
//     </Routes>
//   );
// };

// export default AllRoutes;
