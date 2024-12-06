// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Models
// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   age: Number,
//   weight: Number,
//   height: Number,
//   dob: Date,
//   number: String,
//   city: String,
//   gender: String,
//   role: { type: String, default: "user" }, // user or admin
//   // fitnessData: Array, // Placeholder for fitness tracking data
//   fitnessData: {
//     BMI: { type: Number, default: 0 },
//     Weight: { type: Number, default: 0 },
//   },
// });

// const User = mongoose.model("User", UserSchema);

// // Routes
// // Register User
// app.post("/register", async (req, res) => {
//   try {
//     const { name, email, password, ...rest } = req.body;

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({ name, email, password: hashedPassword, ...rest });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error registering user", error });
//   }
// });

// // Login User
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Compare the password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: { id: user._id, name: user.name, email: user.email, role: user.role },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error logging in", error });
//   }
// });

// // Get All Users (Admin-Only Route)
// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users", error });
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// ********************************************************************************************

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/authMiddleware");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Models
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: Number,
  weight: Number,
  height: Number,
  dob: Date,
  number: String,
  city: String,
  gender: String,
  role: { type: String, default: "user" }, // user or admin
  // fitnessData: Array, // Placeholder for fitness tracking data
  fitnessData: {
    BMI: { type: Number, default: 0 },
    Weight: { type: Number, default: 0 },
  },
});

const User = mongoose.model("User", UserSchema);

// Routes
// Register User
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, ...rest } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword, ...rest });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

// Login User
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

// Get All Users (Admin-Only Route)
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});
// Get User's Fitness Data (Authenticated Route)
app.get("/fitness/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ fitnessData: user.fitnessData });
  } catch (error) {
    res.status(500).json({ message: "Error fetching fitness data", error });
  }
});

// Update Fitness Data (Admin-Only Route)
app.put("/fitness/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.user; // Get role from the JWT payload

    if (role !== "admin") {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    const updatedData = req.body; // Assuming body contains the updated data

    const updatedUser = await User.findByIdAndUpdate(id, { fitnessData: updatedData }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Fitness data updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Error updating fitness data", error });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// ********************************************************************************************




































// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// // Models
// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   age: Number,
//   weight: Number,
//   height: Number,
//   dob: Date,
//   number: String,
//   city: String,
//   gender: String,
//   role: { type: String, default: "user" }, // user or admin
//   fitnessData: Array, // Placeholder for fitness tracking data
// });

// const User = mongoose.model("User", UserSchema);

// // Routes
// app.post("/register", async (req, res) => {
//   const { name, email, password, ...rest } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).send("User already exists");

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save new user
//     const newUser = new User({ name, email, password: hashedPassword, ...rest });
//     await newUser.save();
//     res.status(201).send("User registered successfully");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred during registration");
//   }
// });

// app.post("/login", async (req, res) => {
//   const { email, password, role } = req.body;

//   try {
//     const user = await User.findOne({ email, role });
//     if (!user || user.password !== password) {
//       return res.status(400).json({ success: false, message: "Invalid credentials" });
//     }

//     res.status(200).json({ success: true, message: "Login successful", user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });


// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred while fetching users");
//   }
// });

// // Admin-specific route to update fitness data
// app.put("/update-fitness/:id", async (req, res) => {
//   const { id } = req.params;
//   const { fitnessData } = req.body;

//   try {
//     const user = await User.findByIdAndUpdate(id, { fitnessData }, { new: true });
//     if (!user) return res.status(404).send("User not found");
//     res.status(200).json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred while updating fitness data");
//   }
// });

// // Middleware for token verification
// const authenticateToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).send("Access denied");

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).send("Invalid token");
//     req.user = user;
//     next();
//   });
// };

// // Protected route example
// app.get("/dashboard", authenticateToken, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).send("User not found");
//     res.status(200).json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred while fetching the dashboard");
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5008;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





















// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("./models/User");
// require("dotenv").config();

// const app = express();
// // const userRoutes = require("./routes/userRoutes");

// // app.use("/api/users", userRoutes);

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// // Models
// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   // age: Number,
//   weight: Number,
//   height: Number,
//   dob: Date,
//   number: String,
//   city: String,
//   gender: String,
//   role: { type: String, default: "user" }, // user or admin
//   fitnessData: Array, // Placeholder for fitness tracking data
// });

// const User = mongoose.model("User", UserSchema);

// // Routes
// app.post("/register", async (req, res) => {
//   const { name, email, password, ...rest } = req.body;
//   const existingUser = await User.findOne({ email });
//   if (existingUser) return res.status(400).send("User already exists");

//   const newUser = new User({ name, email, password, ...rest });
//   await newUser.save();
//   res.status(201).send("User registered successfully");
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user || user.password !== password) {
//     return res.status(400).send("Invalid credentials");
//   }
//   res.status(200).send(user);
// });

// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.status(200).json(users);
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("./models/User");

// const app = express();

// // Login Route
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body; // Get email and password from the client

//   try {
//     // 1. Find the user in the database by their email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // 2. Compare the entered password with the stored hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     // 3. Generate a JSON Web Token (JWT) for the authenticated user
//     const token = jwt.sign({ userId: user._id }, "your_jwt_secret", {
//       expiresIn: "1h", // Token expires in 1 hour
//     });

//     // 4. Send the token back to the client
//     res.status(200).json({ token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// // Models
// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   age: Number,
//   weight: Number,
//   height: Number,
//   dob: Date,
//   number: String,
//   city: String,
//   gender: String,
//   role: { type: String, default: "user" }, // user or admin
//   fitnessData: Array, // Placeholder for fitness tracking data
// });

// // const User = mongoose.model("User", UserSchema);

// // Routes
// app.post("/register", async (req, res) => {
//   const { name, email, password, ...rest } = req.body;
//   const existingUser = await User.findOne({ email });
//   if (existingUser) return res.status(400).send("User already exists");

//   const newUser = new User({ name, email, password, ...rest });
//   await newUser.save();
//   res.status(201).send("User registered successfully");
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user || user.password !== password) {
//     return res.status(400).send("Invalid credentials");
//   }
//   res.status(200).send(user);
// });

// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.status(200).json(users);
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



