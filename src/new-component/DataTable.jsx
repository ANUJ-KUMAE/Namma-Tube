import React, { useState, useEffect } from "react";
import axios from "axios";

function DataTable() {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10") // API URL
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap p-4">
      {/* Table Section */}
      <div className="w-full md:w-1/2 p-2">
  <h2 className="text-2xl font-bold mb-4 text-center">Cat Data Table</h2>
  <div className="overflow-x-auto">
    <table className="table-auto w-[90%] mx-auto border-collapse border border-gray-300 max-h-64">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-2 py-1 text-left text-sm">ID</th>
          <th className="border border-gray-300 px-2 py-1 text-left text-sm">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="border border-gray-300 px-2 py-1 text-sm">{item.id}</td>
            <td className="border border-gray-300 px-2 py-1">
              <button
                onClick={() => setSelectedImage(item.url)}
                className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
              >
                View Image
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      {/* Image Preview Section */}
      <div className="w-full md:w-1/2 p-2 flex flex-col items-center">
  <h3 className="text-xl font-bold mb-3">Selected Image</h3>
  {selectedImage ? (
    <img
      src={selectedImage}
      alt="Selected"
      className="w-64 h-auto border border-gray-300 rounded shadow-lg"
    />
  ) : (
    <p className="text-gray-500 italic text-sm">Click on an item to view its image.</p>
  )}
</div>

    </div>
  );
}

export default DataTable;
