import React from "react";
import { useParams } from "react-router-dom";

const players = [
  {
    id: 1,
    name: "Cristiano Ronaldo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnpCr3xMG3KwrXYYNY8Qwe0VYIn9KlmyHjE5wMcK35SquMbRsDbSOTIM&usqp=CAE&s",
    position: "Forward",
    age: 39,
    height: "6'2\"",
    goals: 12,
    assists: 8,
    fouls: 3,
  },
  {
    id: 2,
    name: "Lionel Messi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVfD7jt0ws7S7psRIMChaewxLpFeOeqTWIlP1rgup4sBJTAcYVAgzSN4&usqp=CAE&s",
    position: "Forward",
    age: 36,
    height: "5'7\"",
    goals: 15,
    assists: 12,
    fouls: 2,
  },
  {
    id: 3,
    name: "LeBron James",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-TJn1VUs1vgRqW6tsQp4lEleJnRxOxTq9Ng&s",
    position: "Small Forward",
    age: 39,
    height: "6'9\"",
    goals: 0,
    assists: 10,
    fouls: 1,
  },
];

function PlayerDetails() {
  const { playerName } = useParams(); // Get player name from URL
  const player = players.find((p) => p.name === playerName);

  if (!player) {
    return <h2 className="text-center text-red-500 text-2xl">Player not found!</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-4"> 
      {/* Centering container */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">{player.name}</h1>
        <img 
          src={player.image} 
          alt={player.name} 
          className="h-40 w-40 rounded-full mx-auto mb-4 border-4 border-blue-500" 
        />
        <div className="grid grid-cols-2 gap-6 text-lg">
          <p><span className="font-bold">Position:</span> {player.position}</p>
          <p><span className="font-bold">Age:</span> {player.age}</p>
          <p><span className="font-bold">Height:</span> {player.height}</p>
          <p><span className="font-bold">Goals/Assists:</span> {player.goals} / {player.assists}</p>
          <p><span className="font-bold">Fouls:</span> {player.fouls}</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetails;
