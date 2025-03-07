import React from "react";

function Analytics() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mt-10">Analytics</h1>
      <p className="text-gray-400 text-center">View player and team performance analytics.</p>

      <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold">No Data Available</h2>
        <p className="text-gray-300 mt-4">Analytics will be displayed once match data is available.</p>
      </div>
    </div>
  );
}

export default Analytics;
