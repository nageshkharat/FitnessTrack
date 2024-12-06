import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FitnessDetails = () => {
  const [fitnessData, setFitnessData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    } else {
      fetch(`http://localhost:5000/fitness?userId=${user._id}`)
        .then((response) => response.json())
        .then((data) => setFitnessData(data))
        .catch((err) => console.error(err));
    }
  }, [navigate]);

  return (
    <div>
      <h1>Your Fitness Details</h1>
      {fitnessData ? (
        <div>
          <p><strong>BMI:</strong> {fitnessData.bmi}</p>
          <p><strong>Weight:</strong> {fitnessData.weight} kg</p>
          <p><strong>Last Updated:</strong> {new Date(fitnessData.lastUpdated).toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FitnessDetails;
