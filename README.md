# Track Fitness App

A web application for tracking fitness data such as weight, height, BMI, steps, calories burned, and heart rate. Users can view their data, and admins can update it. This project is built with Node.js and React.js, using JWT for authentication and MongoDB for data storage.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
Track Fitness App is designed to help users monitor their fitness journey by viewing and updating their data. Admin users have the additional privilege of editing any user's fitness data.

## Technologies Used
- **Frontend**: React.js, HTML, CSS
- **Backend**: Mongoose
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: Tailwind CSS, Bootstrap (optional)

## Installation
To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nageshkharat/FitnessTrack.git

2. **Navigate to the project directory:**
   ```bash
   cd FitnessTrack
4. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
6. **Set up environment variables:** Create a .env file in the backend directory with the following content:
   ```bash
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
8. **Start the backend server:**
   ```bash
   npm start
10. **Run the frontend (if in a separate directory):** Navigate to the frontend directory and run:
    ```bash
    npm install
    npm start

    
Usage
Open http://localhost:5000 (or the appropriate port) in your web browser.
Register a new user or log in with an existing account.
Users can view their fitness data, while admins can edit data for any user.

Features
User authentication with JWT.
View personal fitness data for logged-in users.
Admin functionality to update fitness data.
Responsive design for desktop and mobile.

