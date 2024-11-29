import React, { useState, useEffect } from "react";
import axios from "axios";

function CryptoValues() {
  const [crypto, setCrypto] = useState({ USD: null, GBP: null, EUR: null });

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        const data = response.data.bpi;
        setCrypto({
          USD: data.USD.rate,
          GBP: data.GBP.rate,
          EUR: data.EUR.rate,
        });
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCrypto(); // Initial fetch
    const interval = setInterval(fetchCrypto, 60000); // Refresh every 60 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-lg mx-auto mt-6 bg-white">
      <h3 className="text-2xl font-bold text-center mb-4">Bitcoin Prices</h3>
      <div className="text-center">
        {crypto.USD ? (
          <>
            <p className="text-gray-700">
              <span className="font-semibold">USD:</span> {crypto.USD}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">GBP:</span> {crypto.GBP}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">EUR:</span> {crypto.EUR}
            </p>
          </>
        ) : (
          <p className="text-gray-500 italic">Loading prices...</p>
        )}
      </div>
    </div>
  );
}

export default CryptoValues;
