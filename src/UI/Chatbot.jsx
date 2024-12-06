// src/Chatbot.js
import React, { useState } from "react";
import "../styles/Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // To toggle the chatbot visibility
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you with your fitness journey today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages([...messages, userMessage]);

      const botResponse = getBotResponse(input);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: botResponse }
        ]);
      }, 1000);

      setInput(""); // Clear the input after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const getBotResponse = (input) => {
    // Basic fitness-related responses
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
      return "Hello! How can I help you with your fitness goals?";
    } else if (input.includes("diet") || input.includes("nutrition")) {
      return "A balanced diet with the right amount of protein, carbs, and fats is key. Focus on whole foods, and drink plenty of water.";
    } else if (input.includes("lose weight")) {
      return "To lose weight, aim for a caloric deficit. Combine regular exercise, like cardio and strength training, with a healthy, balanced diet.";
    } else if (input.includes("exercise")) {
      return "A mix of strength training and cardio exercises is important for overall fitness. For strength, focus on squats, deadlifts, and presses. For cardio, running, cycling, and swimming are great!";
    } else if (input.includes("build muscle")) {
      return "To build muscle, prioritize strength training with progressive overload. Ensure you're consuming enough protein and calories.";
    } else if (input.includes("hydration")) {
      return "Hydration is essential. Aim to drink at least 8 glasses (or 2 liters) of water per day, especially during workouts.";
    } else if (input.includes("protein")) {
      return "Protein is vital for muscle recovery and growth. Try to consume lean sources like chicken, fish, beans, and legumes.";
    } else if (input.includes("cardio")) {
      return "Cardio exercises, like running, cycling, or swimming, help improve heart health and burn calories. Aim for at least 150 minutes per week.";
    } else if (input.includes("strength training") || input.includes("weights")) {
      return "Strength training with weights helps build muscle and improve bone density. Focus on compound exercises like squats, deadlifts, and presses.";
    } else if (input.includes("fat loss") || input.includes("belly fat")) {
      return "Fat loss, including belly fat, requires a calorie deficit. Combine a healthy diet with strength training and cardio for the best results.";
    } else if (input.includes("calories")) {
      return "Caloric intake depends on your goals. To lose weight, consume fewer calories than you burn. To gain weight, do the opposite!";
    } else if (input.includes("rest") || input.includes("recovery")) {
      return "Rest and recovery are essential for muscle growth and injury prevention. Aim for 7-9 hours of sleep and include rest days in your training.";
    } else if (input.includes("yoga")) {
      return "Yoga is great for flexibility, balance, and mental relaxation. It can also improve strength and posture when practiced regularly.";
    } else if (input.includes("stretching")) {
      return "Stretching helps improve flexibility and can prevent injury. It's good to stretch before and after workouts.";
    } else if (input.includes("fitness goals")) {
      return "Set realistic fitness goals, such as losing weight, building muscle, or improving endurance, and create a plan that balances diet and exercise.";
    } else if (input.includes("motivation")) {
      return "Staying motivated can be tough. Track your progress, set small achievable goals, and stay consistent. Remember, fitness is a journey!";
    } else if (input.includes("beginner")) {
      return "For beginners, start with full-body workouts 2-3 times a week. Focus on learning proper form with bodyweight exercises before adding weights.";
    } else if (input.includes("supplements")) {
      return "Supplements like protein powder, creatine, and multivitamins can help, but focus on getting nutrients from whole foods first.";
    }else if (input.includes("best time to work out") || input.includes("best time for workout")) {
            return "The best time to work out depends on your schedule and energy levels. Some people prefer mornings for a fresh start, while others feel more energized in the evening. Consistency is key!";
    } else if (input.includes("how much water") || input.includes("water intake")) {
            return "It's recommended to drink at least 8 glasses (2 liters) of water per day. Increase your intake if you're exercising or live in a hot climate.";
    } else if (input.includes("how often should I exercise") || input.includes("exercise frequency")) {
            return "Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week, combined with strength training twice a week.";
    } else if (input.includes("eat before workout") || input.includes("pre-workout meal")) {
        return "A pre-workout snack should include carbs for energy and protein for muscle support. Examples: a banana with peanut butter or yogurt with berries.";
    } else if (input.includes("eat after workout") || input.includes("post-workout meal")) {
        return "Post-workout meals should focus on protein for muscle repair and carbs for replenishing energy. Good options are a protein shake, grilled chicken, or eggs with whole grains.";
    } else if (input.includes("lose weight") || input.includes("weight loss")) {
        return "Weight loss occurs when you burn more calories than you consume. Combine a healthy, balanced diet with regular exercise (both cardio and strength training).";
    } else if (input.includes("build muscle")) {
        return "To build muscle, focus on strength training exercises and increase your protein intake. Aim for compound exercises like squats, deadlifts, and bench presses.";
    } else if (input.includes("how much protein") || input.includes("protein intake")) {
        return "The recommended daily intake of protein is about 0.8 grams per kilogram of body weight. If you're trying to build muscle, you may need more (1.2-1.6g per kg).";
    } else if (input.includes("stay motivated") || input.includes("motivation")) {
        return "Set clear goals, track your progress, find a workout buddy, and vary your routines to stay engaged. Consistency is key for long-term success.";
    } else if (input.includes("importance of sleep") || input.includes("sleep for fitness")) {
        return "Sleep is crucial for recovery, muscle repair, and overall well-being. Aim for 7-9 hours of sleep per night to support your fitness goals.";
    } else if (input.includes("reduce belly fat") || input.includes("belly fat")) {
        return "Reducing belly fat requires a combination of a healthy diet, calorie deficit, and consistent cardio and strength training. Spot reduction isn’t effective.";
    } else if (input.includes("cardio or weights first") || input.includes("exercise order")) {
        return "It depends on your goal. If your main goal is to build strength, do weights first. If your goal is to improve cardiovascular health, start with cardio.";
    } else if (input.includes("work out every day") || input.includes("daily workout")) {
        return "It's fine to work out every day as long as you vary the intensity and type of exercise to allow your body to recover. Include rest days for proper recovery.";
    } else if (input.includes("how long should my workout be") || input.includes("workout duration")) {
        return "A typical workout session can range from 30 to 60 minutes, depending on your fitness level and goals. Quality and consistency matter more than duration.";
    } else if (input.includes("balanced diet") || input.includes("healthy diet")) {
        return "A balanced diet includes a variety of foods: fruits, vegetables, whole grains, lean proteins, and healthy fats. Avoid processed foods and sugary drinks.";
    } else if (input.includes("improve flexibility") || input.includes("flexibility")) {
        return "Incorporate stretching and mobility exercises into your routine. Yoga and Pilates can also help improve flexibility over time.";
    } else if (input.includes("strength training benefits") || input.includes("strength training")) {
        return "Strength training builds muscle, increases metabolism, improves bone density, and supports overall physical health and endurance.";
    } else if (input.includes("avoid injuries") || input.includes("injuries during exercise")) {
        return "Warm up properly, use correct form, progress gradually, and listen to your body. Don’t push through pain—rest if needed.";
    } else if (input.includes("supplements for fitness") || input.includes("fitness supplements")) {
        return "Supplements can help, but they're not necessary for everyone. Focus on a nutrient-rich diet first, and consider supplements like protein powder or vitamins if you're lacking in certain areas.";
    } else if (input.includes("improve endurance")) {
        return "To improve endurance, gradually increase the duration and intensity of your cardio exercises, such as running, cycling, or swimming.";
    } else if (input.includes("flat stomach") || input.includes("stomach fat")) {
        return "A flat stomach is achieved through a combination of a calorie-controlled diet, cardio to burn fat, and core-strengthening exercises like planks and crunches.";
    } else if (input.includes("work out when sore") || input.includes("sore muscles")) {
        return "Light exercise can help reduce soreness, but if you're very sore, it’s best to rest or focus on different muscle groups to prevent injury.";
    } else if (input.includes("aerobic vs anaerobic") || input.includes("difference between aerobic and anaerobic")) {
        return "Aerobic exercises (like running or cycling) use oxygen for energy and are typically longer in duration. Anaerobic exercises (like sprinting or lifting weights) are shorter and more intense, using stored energy in the muscles.";
    } else if (input.includes("gain muscle without weights") || input.includes("muscle without lifting weights")) {
        return "Yes, bodyweight exercises like push-ups, pull-ups, and squats can help build muscle. However, adding weights will increase resistance and lead to faster muscle growth.";
    } else if (input.includes("daily calories") || input.includes("calorie intake")) {
        return "Caloric needs vary by age, gender, weight, and activity level. On average, women need around 2000 calories per day, and men need about 2500, but adjust based on your goals (weight loss, gain, or maintenance).";
    }    
    return "I'm not sure how to answer that. Could you ask something else about fitness or health?";
  };

  return (
    <div>
      {/* Chatbot toggle button */}
      <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img
          src="https://user-images.githubusercontent.com/74038190/221352989-518609ab-b4d1-459e-929f-a08cd2bd9b3c.gif" // Replace this with the URL or path to your GIF
          alt="Chatbot Icon"
          className="chatbot-icon"
        />
      </div>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            <h3>Fitness Assistant</h3>
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>

          <div className="chat-window">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === "bot" ? "bot" : "user"}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about fitness..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
