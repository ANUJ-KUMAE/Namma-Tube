import React, { useState, useEffect } from "react";

const Clock = () => { const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval); // Cleanup
    }, []);
  
    return  <div className=" text-black p-4 rounded-lg shadow-lg w-70 mx-auto text-center">
    {/* <h2 className="text-lg font-bold mb-2">Real-Time Clock</h2> */}
    <p className="text-xl font-mono">{time.toLocaleString()}</p>
  </div>
}

export default Clock