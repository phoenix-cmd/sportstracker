import React from "react";

function Matches() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mt-10">Matches</h1>
      <p className="text-gray-400 text-center">Track all the upcoming and past matches.</p>
      
      <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold">Upcoming Matches</h2>
        <p className="text-gray-300 mt-4">No matches scheduled at the moment.</p>
      </div>
    </div>
  );
}

export default Matches;
