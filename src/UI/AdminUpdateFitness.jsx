import React, { useState } from "react";

const AdminUpdateFitness = () => {
  const [userId, setUserId] = useState("");
  const [bmi, setBmi] = useState("");
  const [weight, setWeight] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/fitness/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bmi, weight }),
    })
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Update Fitness Details</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>BMI:</label>
          <input
            type="number"
            step="0.01"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminUpdateFitness;
