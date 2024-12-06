



import React, { useState } from "react";
import Dashboard from "./Dashboard";
import "../styles/pricing.css";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  const handleBuyNow = (plan) => {
    setSelectedPlan(plan);
    setShowRegistration(true);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    setShowRegistration(false);
    setShowPayment(true);
  };

  const closeModal = () => {
    setShowRegistration(false);
    setShowPayment(false);
    setSelectedPlan(null);
    setSelectedBank("");
  };

  const handlePayment = (method) => {
    if ((method === "Credit Card" || method === "Debit Card") && !selectedBank) {
      alert("Please select a bank to proceed.");
      return;
    }
    alert(`Payment successful via ${method}${selectedBank ? ` with ${selectedBank}` : ""}!`);
    setShowPayment(false);
    setShowDashboard(true);
  };

  return (
    <section id="membership">
      {showDashboard ? (
        <Dashboard plan={selectedPlan} />
      ) : (
        <div className="container">
          <div className="pricing__top">
            <h2 className="section__title">
              Premium <span className="highlights">Subscription</span> Plans
            </h2>
            <p>
              Choose a plan that fits your needs. Access premium features with
              affordable options.
            </p>
          </div>

          <div className="pricing__wrapper">
            {[
              { type: "Regular", price: "Rs. 5000", duration: "/month" },
            ].map((plan, idx) => (
              <div key={idx} className="pricing__item">
                <div className="pricing__card-top">
                  <h2>{`${plan.type} Plan`}</h2>
                  <h2 className="pricing">
                    {plan.price} <span>{plan.duration}</span>
                  </h2>
                </div>
                <div className="services">
                  <ul>
                    <li>1. Unlimited access during off-peak hours.</li>
                    <li>2. Basic cardio and strength equipment.</li>
                    <li>3. 1 complimentary fitness assessment.</li>
                    <li>4. Shared locker facility.</li>
                    <li>5. 2 group class sessions/month (e.g., yoga, Zumba).</li>
                  </ul>
                  <button
                    className="register__btn"
                    onClick={() => handleBuyNow(plan.type)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>



          <div className="pricing__wrapper">
            {[
              { type: "Gold", price: "Rs. 10000", duration: "/year" },
            ].map((plan, idx) => (
              <div key={idx} className="pricing__item">
                <div className="pricing__card-top">
                  <h2>{`${plan.type} Plan`}</h2>
                  <h2 className="pricing">
                    {plan.price} <span>{plan.duration}</span>
                  </h2>
                </div>
                <div className="services">
                  <ul>
                    <li>1. Full access during operating hours.</li>
                    <li>2. Priority equipment access.</li>
                    <li>3. 3 fitness assessments/year.</li>
                    <li>4. Personal locker and towel service.</li>
                    <li>5. Unlimited group classes (HIIT, Pilates, etc.).</li>
                    <li>6. Monthly trainer consultations and nutrition plans.</li>
                  </ul>
                  <button
                    className="register__btn"
                    onClick={() => handleBuyNow(plan.type)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>


          <div className="pricing__wrapper">
            {[
              { type: "Platinum", price: "Rs. 20000", duration: "/year" },
            ].map((plan, idx) => (
              <div key={idx} className="pricing__item">
                <div className="pricing__card-top">
                  <h2>{`${plan.type} Plan`}</h2>
                  <h2 className="pricing">
                    {plan.price} <span>{plan.duration}</span>
                  </h2>
                </div>
                <div className="services">
                  <ul>
                    <li>1. 24/7 VIP gym access.</li>
                    <li>2. Exclusive equipment areas.</li>
                    <li>3. Unlimited fitness assessments and tracking.</li>
                    <li>4. Private locker with laundry service.</li>
                    <li>5. Sauna, steam, and spa access.</li>
                    <li>6. 2 personal trainer sessions/month.</li>
                    <li>7. Tailored meal plans by dieticians.</li>
                  </ul>
                  <button
                    className="register__btn"
                    onClick={() => handleBuyNow(plan.type)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>



          {showRegistration && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <h3>Complete Registration</h3>
                <form onSubmit={handleRegistrationSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />
                  </div>
                  <button type="submit" className="register__btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}

          {showPayment && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <h3>Payment Options</h3>
                <div className="payment-options">
                  <button
                    className="payment-btn"
                    onClick={() => handlePayment("UPI")}
                  >
                    Pay with UPI
                  </button>
                  <button
                    className="payment-btn"
                    onClick={() => handlePayment("Credit Card")}
                  >
                    Pay with Credit Card
                  </button>
                  <button
                    className="payment-btn"
                    onClick={() => handlePayment("Debit Card")}
                  >
                    Pay with Debit Card
                  </button>
                </div>

                {(selectedPlan === "Gold" || selectedPlan === "Platinum") && (
                  <div className="bank-selection">
                    <label>Select your bank:</label>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                    >
                      <option value="">-- Select a Bank --</option>
                      <option value="Axis Bank">Axis Bank</option>
                      <option value="ICICI Bank">ICICI Bank</option>
                      <option value="HDFC Bank">HDFC Bank</option>
                      <option value="SBI">SBI</option>
                      <option value="IPPB">IPPB</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Pricing;


// ********************************************************************************************


// import React, { useState } from "react";
// import Dashboard from "./Dashboard";
// import axios from "axios";
// import "../styles/pricing.css";

// const Pricing = () => {
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [showRegistration, setShowRegistration] = useState(false);
//   const [showPayment, setShowPayment] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [registrationData, setRegistrationData] = useState({
//     name: "",
//     email: "",
//   });
//   const [selectedBank, setSelectedBank] = useState("");

//   const handleBuyNow = (plan) => {
//     setSelectedPlan(plan);
//     setShowRegistration(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setRegistrationData({ ...registrationData, [name]: value });
//   };

//   const handleRegistrationSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/register-plan", {
//         ...registrationData,
//         plan: selectedPlan,
//       });
//       setShowRegistration(false);
//       setShowPayment(true);
//     } catch (error) {
//       alert("Error submitting registration. Please try again.");
//     }
//   };

//   const handlePayment = async (method) => {
//     if ((method === "Credit Card" || method === "Debit Card") && !selectedBank) {
//       alert("Please select a bank to proceed.");
//       return;
//     }
//     try {
//       await axios.post("/api/process-payment", {
//         method,
//         plan: selectedPlan,
//         bank: selectedBank,
//       });
//       alert("Payment successful!");
//       setShowPayment(false);
//       setShowDashboard(true);
//     } catch (error) {
//       alert("Payment failed. Please try again.");
//     }
//   };

//   const closeModal = () => {
//     setShowRegistration(false);
//     setShowPayment(false);
//     setSelectedPlan(null);
//     setRegistrationData({ name: "", email: "" });
//     setSelectedBank("");
//   };

//   return (
//     <section id="membership">
//       {showDashboard ? (
//         <Dashboard plan={selectedPlan} />
//       ) : (
//         <div className="container">
//           <div className="pricing__top">
//             <h2 className="section__title">
//               Premium <span className="highlights">Subscription</span> Plans
//             </h2>
//             <p>
//               Choose a plan that fits your needs. Access premium features with
//               affordable options.
//             </p>
//           </div>

//           <div className="pricing__wrapper">
//             {[
//               {
//                 type: "Regular",
//                 price: "Rs. 5000",
//                 duration: "/month",
//                 features: [
//                   "Unlimited access during off-peak hours.",
//                   "Basic cardio and strength equipment.",
//                   "1 complimentary fitness assessment.",
//                   "Shared locker facility.",
//                   "2 group class sessions/month.",
//                 ],
//               },
//               {
//                 type: "Gold",
//                 price: "Rs. 10000",
//                 duration: "/year",
//                 features: [
//                   "Full access during operating hours.",
//                   "Priority equipment access.",
//                   "3 fitness assessments/year.",
//                   "Personal locker and towel service.",
//                   "Unlimited group classes.",
//                   "Monthly trainer consultations and nutrition plans.",
//                 ],
//               },
//               {
//                 type: "Platinum",
//                 price: "Rs. 20000",
//                 duration: "/year",
//                 features: [
//                   "24/7 VIP gym access.",
//                   "Exclusive equipment areas.",
//                   "Unlimited fitness assessments and tracking.",
//                   "Private locker with laundry service.",
//                   "Sauna, steam, and spa access.",
//                   "2 personal trainer sessions/month.",
//                   "Tailored meal plans by dieticians.",
//                 ],
//               },
//             ].map((plan, idx) => (
//               <div key={idx} className="pricing__item">
//                 <div className="pricing__card-top">
//                   <h2>{`${plan.type} Plan`}</h2>
//                   <h2 className="pricing">
//                     {plan.price} <span>{plan.duration}</span>
//                   </h2>
//                 </div>
//                 <div className="services">
//                   <ul>
//                     {plan.features.map((feature, index) => (
//                       <li key={index}>{feature}</li>
//                     ))}
//                   </ul>
//                   <button
//                     className="register__btn"
//                     onClick={() => handleBuyNow(plan.type)}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {showRegistration && (
//             <div className="modal">
//               <div className="modal-content">
//                 <span className="close" onClick={closeModal}>
//                   &times;
//                 </span>
//                 <h3>Complete Registration</h3>
//                 <form onSubmit={handleRegistrationSubmit}>
//                   <div className="form-group">
//                     <label>Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Enter your name"
//                       value={registrationData.name}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       value={registrationData.email}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <button type="submit" className="register__btn">
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           )}

//           {showPayment && (
//             <div className="modal">
//               <div className="modal-content">
//                 <span className="close" onClick={closeModal}>
//                   &times;
//                 </span>
//                 <h3>Payment Options</h3>
//                 <div className="payment-options">
//                   <button
//                     className="payment-btn"
//                     onClick={() => handlePayment("UPI")}
//                   >
//                     Pay with UPI
//                   </button>
//                   <button
//                     className="payment-btn"
//                     onClick={() => handlePayment("Credit Card")}
//                   >
//                     Pay with Credit Card
//                   </button>
//                   <button
//                     className="payment-btn"
//                     onClick={() => handlePayment("Debit Card")}
//                   >
//                     Pay with Debit Card
//                   </button>
//                 </div>

//                 {(selectedPlan === "Gold" || selectedPlan === "Platinum") && (
//                   <div className="bank-selection">
//                     <label>Select your bank:</label>
//                     <select
//                       value={selectedBank}
//                       onChange={(e) => setSelectedBank(e.target.value)}
//                     >
//                       <option value="">-- Select a Bank --</option>
//                       <option value="Axis Bank">Axis Bank</option>
//                       <option value="ICICI Bank">ICICI Bank</option>
//                       <option value="HDFC Bank">HDFC Bank</option>
//                       <option value="SBI">SBI</option>
//                       <option value="IPPB">IPPB</option>
//                     </select>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Pricing;



// ********************************************************************************************

















// import React from 'react'
// import "../styles/pricing.css"

// const Pricing = () => {
//   return <section id='membership'>
//     <div className="container">
//     <div className="pricing__top">
//         <h2 className="section__title">Premium <span className="highlights">Subscription</span> plan</h2>
//         <p>Health & Fitness is a popular nutrition and exercise tracking app that offers a premium subscription service.<br/>The premium version includes advanced nutrient tracking, customized goals and advice, and exclusive content.</p>
//     </div>

//     <div className="pricing__wrapper">
//         <div className="pricing__item" data-aos-duration="1500" data-aos="fade-up">
//             <div className="pricing__card-top">
//                 <h2 className=''>Regular Member</h2>
//                 <h2 className="pricing">$9.99 <span>/month</span></h2>
//             </div>

//             <div className="services">
//                 <ul>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the App</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Nutritionist</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Demo online classes</li>
//                 </ul>

//                 <button className='register__btn'>Buy Now</button>
//             </div>
//         </div>

//         <div className="pricing__item pricing__item-02" data-aos-duration="1500" data-aos="fade-up">
//             <div className="pricing__card-top">
//                 <h2 className=''>Gold Member</h2>
//                 <h2 className="pricing">$79.99 <span>/year</span></h2>
//             </div>

//             <div className="services">
//                 <ul>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the App</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Nutritionist</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Free online classes</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Free access to our gym centers</li>
//                 </ul>

//                 <button className='register__btn'>Buy Now</button>
//             </div>
//         </div>

//         <div className="pricing__item" data-aos-duration="1500" data-aos="fade-up">
//             <div className="pricing__card-top">
//                 <h2 className=''>Standard Member</h2>
//                 <h2 className="pricing">$49.99 <span>/year</span></h2>
//             </div>

//             <div className="services">
//                 <ul>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the App</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Nutritionist</li>
//                     <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Free online classes</li>
//                 </ul>

//                 <button className='register__btn'>Buy Now</button>
//             </div>
//         </div>
//     </div>
//     </div>
    
//   </section>
// }

// export default Pricing
