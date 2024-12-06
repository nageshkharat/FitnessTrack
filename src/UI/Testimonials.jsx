// import React, { useState } from "react";
// import "../styles/testimonials.css";

// export default function Testimonials() {
//   const [showVideo, setShowVideo] = useState(null);
//   const [showRegistration, setShowRegistration] = useState(false);
//   const [popupMessage, setPopupMessage] = useState(false);

//   const handleRegister = () => {
//     setShowRegistration(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowRegistration(false);
//     setPopupMessage(true);
//     setTimeout(() => setPopupMessage(false), 3000);
//   };

//   return (
//     <>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//          <center><h1><span className="highlights">Full-Length</span> Workout Programs</h1></center> 
        
//       <section id="programs" className="programs-container">
        

//         {/* Video Thumbnails */}
//         <div className="video-item">
//           <img
//             src="http://surl.li/xhylvt"
//             alt="Video Thumbnail 1"
//             className="thumbnail"
//             onClick={() => setShowVideo("video1")}
//           />
//           <br/>
//           <br/>
//           <h3>Zumba Fitness Program</h3>
//           <p>
//           <br/>
//           Zumba is a dance-based fitness program that combines Latin and international music with energetic dance moves to provide an aerobic workout. The program is known for its ability to provide both physical and mental health benefits. 
//           </p>
//         </div><br></br>

//         <div className="video-item">
//           <img
//             src="http://surl.li/awqpdm"
//             alt="Video Thumbnail 2"
//             className="thumbnail"
//             onClick={() => setShowVideo("video2")}
//           />
//           <br/>
//           <br/>
//           <h3>9 Workout types</h3>
//           <p>
//             <br/>
//           A well-balanced exercise program should include activities that address all five components of physical fitness: body composition, flexibility, muscular strength, muscular endurance, and cardiorespiratory endurance. 
//           </p>
//         </div>

//         {/* Video Modal */}
//         {showVideo && (
//           <div className="video-modal">
//             <div className="video-content">
//               {showVideo === "video1" && (
//                 <video width="100%" height="400" controls>
//                   <source src="/videos/video1.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               )}
//               {showVideo === "video2" && (
//                 <video width="100%" height="400" controls>
//                   <source src="/videos/video2.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               )}
//               <button className="close-video" onClick={() => setShowVideo(null)}>
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </section>


//       {/* Upcoming Workshops Section */}
// <section id="workshops">
//   <h2 className="section__title">
//     <center>
//       <h1><span className="highlights">Upcoming</span> Workshops</h1>
//     </center>
//     <br />
//     <hr />
//     <br />
//   </h2>
//   <div className="workshop-list">
//     {[
//       {
//         title: "Yoga for Beginners",
//         date: "Dec 4, 2024",
//         time: "10:00 AM",
//         imageSrc: "http://surl.li/zddahq",
//       },
//       {
//         title: "Strength Training Basics",
//         date: "Dec 5, 2024",
//         time: "2:00 PM",
//         imageSrc: "http://surl.li/nehxdf",
//       },
//       {
//         title: "HIIT Cardio Techniques",
//         date: "Dec 10, 2024",
//         time: "6:00 PM",
//         imageSrc: "http://surl.li/fthmha",
//       },
//       {
//         title: "Mindfulness and Fitness",
//         date: "Dec 15, 2024",
//         time: "8:00 AM",
//         imageSrc: "http://surl.li/umwghs",
//       },
//       {
//         title: "Advanced Weightlifting",
//         date: "Dec 20, 2024",
//         time: "3:00 PM",
//         imageSrc: "http://surl.li/hoyhri",
//       },
//     ].map((workshop, index) => (
//       <div className="workshop-item" key={index}>
//         <img
//           src={workshop.imageSrc}
//           alt={workshop.title}
//           className="workshop-image"
//         />
//         <br></br>
//         <h3>{workshop.title}</h3>
//         <br></br>
//         <p>
//           Date: {workshop.date} <br /><br/>
//           Time: {workshop.time}<br/><br/>
//         </p>
//         <button className="register-btn" onClick={handleRegister}>
//           Register
//         </button>
//       </div>
//     ))}
//   </div>
// </section>

// {/* Registration Form Modal */}
// {showRegistration && (
//   <div className="registration-modal">
//     <form className="registration-form" onSubmit={handleSubmit}>
//       <h3>Workshop Registration</h3>
//       <label>Name:</label>
//       <input type="text" required />
//       <label>Email:</label>
//       <input type="email" required />
//       <label>Phone:</label>
//       <input type="tel" required />
//       <button type="submit">Submit</button>
//       <button
//         type="button"
//         className="close-form"
//         onClick={() => setShowRegistration(false)}
//       >
//         Cancel
//       </button>
//     </form>
//   </div>
// )}

//  {/* Popup Confirmation */}
//  {popupMessage && <div className="popup-message">Registration Successful!</div>}
//     </>
//   );
// }








import React, { useState } from "react";
import "../styles/testimonials.css";

export default function Testimonials() {
  const [showVideo, setShowVideo] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [popupMessage, setPopupMessage] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const handleRegister = (workshop) => {
    setSelectedWorkshop(workshop);
    setShowRegistration(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      workshopTitle: selectedWorkshop.title,
    };

    try {
      const response = await fetch("http://localhost:5000/register-workshop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setPopupMessage(true);
        setTimeout(() => setPopupMessage(false), 3000);
      } else {
        console.error("Failed to register for workshop");
        alert("Registration failed. Please try again later.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while registering. Please check your network connection.");
    }

    setShowRegistration(false);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1>
          <span className="highlights">Full-Length</span> Workout Programs
        </h1>
      </center>

      <section id="programs" className="programs-container">
        <div className="video-item">
          <img
            src="http://surl.li/xhylvt"
            alt="Video Thumbnail 1"
            className="thumbnail"
            onClick={() => setShowVideo("video1")}
          />
          <br />
          <br />
          <h3>Zumba Fitness Program</h3>
          <p>
            <br />
            Zumba is a dance-based fitness program that combines Latin and
            international music with energetic dance moves to provide an aerobic
            workout. The program is known for its ability to provide both
            physical and mental health benefits.
          </p>
        </div>
        <br />
        <div className="video-item">
          <img
            src="http://surl.li/awqpdm"
            alt="Video Thumbnail 2"
            className="thumbnail"
            onClick={() => setShowVideo("video2")}
          />
          <br />
          <br />
          <h3>9 Workout types</h3>
          <p>
            <br />
            A well-balanced exercise program should include activities that
            address all five components of physical fitness: body composition,
            flexibility, muscular strength, muscular endurance, and
            cardiorespiratory endurance.
          </p>
        </div>

        {showVideo && (
          <div className="video-modal">
            <div className="video-content">
              {showVideo === "video1" && (
                <video width="100%" height="400" controls>
                  <source src="/videos/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {showVideo === "video2" && (
                <video width="100%" height="400" controls>
                  <source src="/videos/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <button
                className="close-video"
                onClick={() => setShowVideo(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Upcoming Workshops Section */}
      <section id="workshops">
        <h2 className="section__title">
          <center>
            <h1>
              <span className="highlights">Upcoming</span> Workshops
            </h1>
          </center>
          <br />
          <hr />
          <br />
        </h2>
        <div className="workshop-list">
          {[
            {
              title: "Yoga for Beginners",
              date: "Dec 4, 2024",
              time: "10:00 AM",
              imageSrc: "http://surl.li/zddahq",
            },
            {
              title: "Strength Training Basics",
              date: "Dec 5, 2024",
              time: "2:00 PM",
              imageSrc: "http://surl.li/nehxdf",
            },
            {
              title: "HIIT Cardio Techniques",
              date: "Dec 10, 2024",
              time: "6:00 PM",
              imageSrc: "http://surl.li/fthmha",
            },
            {
              title: "Mindfulness and Fitness",
              date: "Dec 15, 2024",
              time: "8:00 AM",
              imageSrc: "http://surl.li/umwghs",
            },
            {
              title: "Advanced Weightlifting",
              date: "Dec 20, 2024",
              time: "3:00 PM",
              imageSrc: "http://surl.li/hoyhri",
            },
          ].map((workshop, index) => (
            <div className="workshop-item" key={index}>
              <img
                src={workshop.imageSrc}
                alt={workshop.title}
                className="workshop-image"
              />
              <br />
              <h3>{workshop.title}</h3>
              <br />
              <p>
                Date: {workshop.date} <br />
                <br />
                Time: {workshop.time}
                <br />
                <br />
              </p>
              <button
                className="register-btn"
                onClick={() => handleRegister(workshop)}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form Modal */}
      {showRegistration && (
        <div className="registration-modal">
          <form className="registration-form" onSubmit={handleSubmit}>
            <h3>Workshop Registration</h3>
            <label>Name:</label>
            <input type="text" name="name" required />
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Phone:</label>
            <input type="tel" name="phone" required />
            <button type="submit">Submit</button>
            <button
              type="button"
              className="close-form"
              onClick={() => setShowRegistration(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Popup Confirmation */}
      {popupMessage && (
        <div className="popup-message">Registration Successful!</div>
      )}
    </>
  );
}
