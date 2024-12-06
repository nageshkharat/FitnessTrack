import React, { useState, useEffect } from "react";
import "../styles/TrackFitness.css";
import { useNavigate } from "react-router-dom";

const TrackFitness = () => {
  const [fitnessData, setFitnessData] = useState({
    weight: 70, // in kg
    height: 175, // in cm
    bmi: 22.9,
    steps: 5000, // steps per day
    calories: 2000, // calories burned per day
    heartRate: 72, // resting heart rate
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setIsAdmin(user.role === "admin"); // Check if the user is an admin
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
      navigate("/login"); // Redirect to login if not logged in
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFitnessData({
      ...fitnessData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    if (!isAdmin) {
      alert("Only admins can update the fitness data.");
      return;
    }
    // Simulate an admin update
    console.log("Updated fitness data:", fitnessData);
    alert("Fitness data updated successfully!");
  };

  if (!isLoggedIn) {
    return (
      <div className="fitness-dashboard">
        <h2>Please log in to view your fitness data.</h2>
      </div>
    );
  }

  return (
    <div className="fitness-dashboard">
      <header className="fitness-header">
        <br /><br />
        <h1>Track Your Fitness</h1>
      </header>

      <div className="fitness-content">
        <div className="user-fitness">
          <h2>Your Fitness Overview</h2><br />
          <div className="fitness-card">
            <p><strong>Weight:</strong> {fitnessData.weight} kg</p>
            <p><strong>Height:</strong> {fitnessData.height} cm</p>
            <p><strong>BMI:</strong> {fitnessData.bmi}</p>
            <p><strong>Steps Today:</strong> {fitnessData.steps}</p>
            <p><strong>Calories Burned:</strong> {fitnessData.calories} kcal</p>
            <p><strong>Heart Rate:</strong> {fitnessData.heartRate} bpm</p>
          </div>
        </div>

        {isAdmin && (
          <div className="admin-panel">
            <h2>Admin Panel: Update Fitness Data</h2>
            <div className="update-form">
              <label>
                Weight (kg):
                <input
                  type="number"
                  name="weight"
                  value={fitnessData.weight}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Height (cm):
                <input
                  type="number"
                  name="height"
                  value={fitnessData.height}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Steps Today:
                <input
                  type="number"
                  name="steps"
                  value={fitnessData.steps}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Calories Burned (kcal):
                <input
                  type="number"
                  name="calories"
                  value={fitnessData.calories}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Heart Rate (bpm):
                <input
                  type="number"
                  name="heartRate"
                  value={fitnessData.heartRate}
                  onChange={handleInputChange}
                />
              </label>
              <button className="update-btn" onClick={handleUpdate}>
                Update Data
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackFitness;




// import React, { useState } from "react";
// import "../styles/TrackFitness.css";

// const TrackFitness = ({ isAdmin }) => {
//   const [fitnessData, setFitnessData] = useState({
//     weight: 70, // in kg
//     height: 175, // in cm
//     bmi: 22.9,
//     steps: 5000, // steps per day
//     calories: 2000, // calories burned per day
//     heartRate: 72, // resting heart rate
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFitnessData({
//       ...fitnessData,
//       [name]: value,
//     });
//   };

//   const handleUpdate = () => {
//     // Simulate an admin update
//     console.log("Updated fitness data:", fitnessData);
//     alert("Fitness data updated successfully!");
//   };

//   return (
//     <div className="fitness-dashboard">
//       <header className="fitness-header">
//         <br/><br/>
//         <h1>Track Your Fitness</h1>
//       </header>

//       <div className="fitness-content">
//         <div className="user-fitness">
//           <h2>Your Fitness Overview</h2><br/>
//           <div className="fitness-card">
//             <p><strong>Weight:</strong> {fitnessData.weight} kg</p>
//             <p><strong>Height:</strong> {fitnessData.height} cm</p>
//             <p><strong>BMI:</strong> {fitnessData.bmi}</p>
//             <p><strong>Steps Today:</strong> {fitnessData.steps}</p>
//             <p><strong>Calories Burned:</strong> {fitnessData.calories} kcal</p>
//             <p><strong>Heart Rate:</strong> {fitnessData.heartRate} bpm</p>
//           </div>
//         </div>

//         {isAdmin && (
//           <div className="admin-panel">
//             <h2>Admin Panel: Update Fitness Data</h2>
//             <div className="update-form">
//               <label>
//                 Weight (kg):
//                 <input
//                   type="number"
//                   name="weight"
//                   value={fitnessData.weight}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Height (cm):
//                 <input
//                   type="number"
//                   name="height"
//                   value={fitnessData.height}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Steps Today:
//                 <input
//                   type="number"
//                   name="steps"
//                   value={fitnessData.steps}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Calories Burned (kcal):
//                 <input
//                   type="number"
//                   name="calories"
//                   value={fitnessData.calories}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Heart Rate (bpm):
//                 <input
//                   type="number"
//                   name="heartRate"
//                   value={fitnessData.heartRate}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <button className="update-btn" onClick={handleUpdate}>
//                 Update Data
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TrackFitness;
