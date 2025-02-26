import React from "react";
import { useParams } from "react-router-dom";

function PlayerDetails() {
  let { playerName } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">{playerName}</h1>
      <p className="text-gray-400">Detailed stats and performance analytics.</p>
    </div>
  );
}

export default PlayerDetails;

