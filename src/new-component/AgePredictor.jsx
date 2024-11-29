import React, { useState } from "react";
import axios from "axios";

function AgePredictor() {
  const [input, setInput] = useState("");
  const [age, setAge] = useState(null);

  const predictAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${input}`);
      setAge(response.data.age);
    } catch (error) {
      console.error("Error fetching age prediction:", error);
    }
  };

  const getColor = (age) => {
    if (age <= 30) return "text-green-500";
    if (age <= 60) return "text-blue-500";
    return "text-red-500";
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-80 mx-auto shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">Age Predictor</h2>
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your name"
          className="border border-gray-300 rounded px-3 py-2 w-2/3 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={predictAge}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Predict
        </button>
      </div>
      {age !== null && (
        <p className={`text-lg font-semibold text-center ${getColor(age)}`}>
          Predicted Age: {age}
        </p>
      )}
    </div>
  );
}

export default AgePredictor;
