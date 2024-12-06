// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/registration.css"; // Create a CSS file for styling if needed

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: "",
//     weight: "",
//     height: "",
//     dob: "",
//     number: "",
//     city: "",
//     gender: "",
//   });

//   const [role, setRole] = useState("user"); // Default role is user

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData); // Add this line to verify the data being submitted
//     try {
//       const response = await axios.post("http://localhost:5000/register", {
//         ...formData,
//         role,
//       });
//       alert("Registration successful!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error during registration:", error.response?.data || error.message);
//       alert(error.response?.data || "An error occurred");
//     }
//   };
  

//   return (
//     <div className="registration-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Age:</label>
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Weight (kg):</label>
//           <input
//             type="number"
//             name="weight"
//             value={formData.weight}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Height (cm):</label>
//           <input
//             type="number"
//             name="height"
//             value={formData.height}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="text"
//             name="number"
//             value={formData.number}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>City:</label>
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label>Role:</label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       <br/>
//       <a href="/login"><h4>Already registered? <span className="high">Login</span> here!</h4></a>
//     </div>
//   );
// };

// export default Registration;






import React, { useState } from "react";
import axios from "axios";
import "../styles/registration.css"; // Create a CSS file for styling if needed

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    height: "",
    dob: "",
    number: "",
    city: "",
    gender: "",
  });

  const [role, setRole] = useState("user"); // Default role is user

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { dob, number, email, password } = formData;

    // Date of Birth Validation
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 10) {
      alert("You must be at least 10 years old to register.");
      return false;
    }

    // Phone Number Validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(number)) {
      alert("Phone number must be a valid 10-digit number.");
      return false;
    }

    // Email Validation
    if (!email.endsWith("@gmail.com")) {
      alert("Email must be a valid Gmail address ending with '@gmail.com'.");
      return false;
    }

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and include one uppercase letter, one number, and one special character."
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Prevent form submission if validation fails
    }

    console.log("Form Data:", formData); // Add this line to verify the data being submitted
    try {
      const response = await axios.post("http://localhost:5000/register", {
        ...formData,
        role,
      });
      alert("Registration successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      alert(error.response?.data || "An error occurred");
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      <br />
      <a href="/login">
        <h4>
          Already registered? <span className="high">Login</span> here!
        </h4>
      </a>
    </div>
  );
};

export default Registration;
