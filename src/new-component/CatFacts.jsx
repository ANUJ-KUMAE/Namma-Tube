import React, { useState, useEffect } from "react";
import axios from "axios";

function CatFacts() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const response = await axios.get("https://catfact.ninja/fact");
        setFact(response.data.fact);
      } catch (error) {
        console.error("Error fetching cat fact:", error);
      }
    };

    fetchFact(); // Initial call
    const interval = setInterval(fetchFact, 20000); // Fetch every 20 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-4 w-full mx-auto mt-6">
    <h2 className="text-xl font-bold text-center mb-4">Random Cat Fact</h2>
    <p className="text-gray-700 italic text-center">{fact || "Loading..."}</p>
  </div>
  
  );
}

export default CatFacts;
