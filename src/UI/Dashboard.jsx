import React from "react";
import "../styles/dashboard.css";

const Dashboard = ({ plan }) => {
  const renderPlanFeatures = () => {
    switch (plan) {
      case "Regular":
        return (
          <div className="plan-features">
            <h3 className="feature-title">Regular Plan Features</h3>
            <ul>
              <li><i className="fas fa-check-circle"></i> Unlimited access during off-peak hours.</li>
              <li><i className="fas fa-check-circle"></i> Basic cardio and strength equipment.</li>
              <li><i className="fas fa-check-circle"></i> 1 complimentary fitness assessment.</li>
              <li><i className="fas fa-check-circle"></i> Shared locker facility.</li>
              <li><i className="fas fa-check-circle"></i> 2 group class sessions/month (e.g., yoga, Zumba).</li>
            </ul>
          </div>
        );
      case "Gold":
        return (
          <div className="plan-features">
            <h3 className="feature-title">Gold Plan Features</h3>
            <ul>
              <li><i className="fas fa-check-circle"></i> Full access during operating hours.</li>
              <li><i className="fas fa-check-circle"></i> Priority equipment access.</li>
              <li><i className="fas fa-check-circle"></i> 3 fitness assessments/year.</li>
              <li><i className="fas fa-check-circle"></i> Personal locker and towel service.</li>
              <li><i className="fas fa-check-circle"></i> Unlimited group classes (HIIT, Pilates, etc.).</li>
              <li><i className="fas fa-check-circle"></i> Monthly trainer consultations and nutrition plans.</li>
            </ul>
          </div>
        );
      case "Platinum":
        return (
          <div className="plan-features">
            <h3 className="feature-title">Platinum Plan Features</h3>
            <ul>
              <li><i className="fas fa-check-circle"></i> 24/7 VIP gym access.</li>
              <li><i className="fas fa-check-circle"></i> Exclusive equipment areas.</li>
              <li><i className="fas fa-check-circle"></i> Unlimited fitness assessments and tracking.</li>
              <li><i className="fas fa-check-circle"></i> Private locker with laundry service.</li>
              <li><i className="fas fa-check-circle"></i> Sauna, steam, and spa access.</li>
              <li><i className="fas fa-check-circle"></i> 2 personal trainer sessions/month.</li>
              <li><i className="fas fa-check-circle"></i> Tailored meal plans by dieticians.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <h2>Your Plan: <span className="plan-type">{plan}</span></h2>
      </header>

      <div className="dashboard-content">
        {renderPlanFeatures()}

        <div className="user-activity">
          <h3>Your Recent Activities</h3><br/>
          <div className="activity-cards">
            <div className="activity-card">
              <i className="fas fa-video"></i>
              <p>Watched a tutorial video</p>
            </div>
            <div className="activity-card">
              <i className="fas fa-file-alt"></i>
              <p>Accessed an exclusive article</p>
            </div>
            <div className="activity-card">
              <i className="fas fa-check-circle"></i>
              <p>Completed a quiz</p>
            </div>
          </div>
        </div>

        <div className="notifications">
          <h3>Notifications</h3>
          <ul>
            <li><i className="fas fa-envelope"></i> You have 3 new messages.</li>
            <li><i className="fas fa-bell"></i> New webinar available for Gold and Platinum users.</li>
            <li><i className="fas fa-tasks"></i> Feature request "Dark Mode" has been added to the roadmap.</li>
          </ul>
        </div>
      </div>

      <button className="logout-btn" onClick={() => window.location.reload()}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
