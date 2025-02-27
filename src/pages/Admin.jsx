// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Admin() {
//   const [teams, setTeams] = useState([]);
//   const [players, setPlayers] = useState([]);
//   const [matches, setMatches] = useState([]);
//   const [newMatch, setNewMatch] = useState({ teamA: "", teamB: "", date: "" });

//   useEffect(() => {
//     axios.get("/api/teams").then((res) => setTeams(res.data));
//     axios.get("/api/players").then((res) => setPlayers(res.data));
//     axios.get("/api/matches").then((res) => setMatches(res.data));
//   }, []);

//   const handleMatchSubmit = (e) => {
//     e.preventDefault();
//     axios.post("/api/matches", newMatch).then((res) => {
//       setMatches([...matches, res.data]);
//       setNewMatch({ teamA: "", teamB: "", date: "" });
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-white min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      
//       {/* Teams Section */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Teams</h2>
//         <ul className="list-disc pl-6">
//           {teams.map((team) => (
//             <li key={team.id}>{team.name}</li>
//           ))}
//         </ul>
//       </div>
      
//       {/* Players Section */}
//       <div>
//         <h2 className="text-2xl font-bold mt-6 mb-4">Players</h2>
//         <ul className="list-disc pl-6">
//           {players.map((player) => (
//             <li key={player.id}>{player.name} - {player.team}</li>
//           ))}
//         </ul>
//       </div>
      
//       {/* Matches Section */}
//       <div>
//         <h2 className="text-2xl font-bold mt-6 mb-4">Matches</h2>
//         <ul className="list-disc pl-6">
//           {matches.map((match) => (
//             <li key={match.id}>{match.teamA} vs {match.teamB} - {match.date}</li>
//           ))}
//         </ul>
//       </div>
      
//       {/* Add Match Form */}
//       <div>
//         <h2 className="text-2xl font-bold mt-6 mb-4">Add Match</h2>
//         <form onSubmit={handleMatchSubmit} className="space-y-4">
//           <input 
//             type="text" 
//             placeholder="Team A" 
//             className="p-2 bg-gray-800 text-white rounded w-full"
//             value={newMatch.teamA} 
//             onChange={(e) => setNewMatch({ ...newMatch, teamA: e.target.value })}
//           />
//           <input 
//             type="text" 
//             placeholder="Team B" 
//             className="p-2 bg-gray-800 text-white rounded w-full"
//             value={newMatch.teamB} 
//             onChange={(e) => setNewMatch({ ...newMatch, teamB: e.target.value })}
//           />
//           <input 
//             type="date" 
//             className="p-2 bg-gray-800 text-white rounded w-full"
//             value={newMatch.date} 
//             onChange={(e) => setNewMatch({ ...newMatch, date: e.target.value })}
//           />
//           <button 
//             type="submit" 
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             Add Match
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Admin;

import React, { useState } from "react";

function Admin() {
  // ✅ Dummy Data for Players (Filtered for Football, Basketball, and Badminton)
  const [players, setPlayers] = useState([
    { id: 1, name: "Cristiano Ronaldo", sport: "Football", position: "Forward", age: 39, height: "6'2\"", goals: 12, assists: 8, fouls: 3 },
    { id: 2, name: "Lionel Messi", sport: "Football", position: "Forward", age: 36, height: "5'7\"", goals: 15, assists: 12, fouls: 2 },
    { id: 3, name: "LeBron James", sport: "Basketball", position: "Small Forward", age: 39, height: "6'9\"", points: 30, rebounds: 10, assists: 9 },
    { id: 4, name: "Kevin Durant", sport: "Basketball", position: "Power Forward", age: 35, height: "6'10\"", points: 27, rebounds: 8, assists: 7 },
    { id: 5, name: "Kento Momota", sport: "Badminton", position: "Singles", age: 29, height: "5'9\"", wins: 42, losses: 6, titles: 3 },
  ]);

  // ✅ Dummy Data for Teams
  const [teams, setTeams] = useState([
    { id: 1, name: "Real Madrid", sport: "Football", coach: "Carlo Ancelotti", players: 25 },
    { id: 2, name: "Los Angeles Lakers", sport: "Basketball", coach: "Darvin Ham", players: 15 },
    { id: 3, name: "Japan National Team", sport: "Badminton", coach: "Park Joo-bong", players: 8 },
  ]);

  // ✅ State for New Players & Teams
  const [newPlayer, setNewPlayer] = useState({ name: "", sport: "Football", position: "", age: "", height: "", goals: "", assists: "", fouls: "" });
  const [newTeam, setNewTeam] = useState({ name: "", sport: "Football", coach: "", players: "" });

  // ✅ Handle Input Changes
  const handlePlayerChange = (e) => setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
  const handleTeamChange = (e) => setNewTeam({ ...newTeam, [e.target.name]: e.target.value });

  // ✅ Add Player (Only for Selected Sports)
  const addPlayer = () => {
    if (!["Football", "Basketball", "Badminton"].includes(newPlayer.sport)) return;
    setPlayers([...players, { id: players.length + 1, ...newPlayer }]);
    setNewPlayer({ name: "", sport: "Football", position: "", age: "", height: "", goals: "", assists: "", fouls: "" });
  };

  // ✅ Add Team (Only for Selected Sports)
  const addTeam = () => {
    if (!["Football", "Basketball", "Badminton"].includes(newTeam.sport)) return;
    setTeams([...teams, { id: teams.length + 1, ...newTeam }]);
    setNewTeam({ name: "", sport: "Football", coach: "", players: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Admin Dashboard</h1>

      {/* ✅ Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-blue-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold">Total Players</h2>
          <p className="text-4xl">{players.length}</p>
        </div>
        <div className="bg-green-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold">Total Teams</h2>
          <p className="text-4xl">{teams.length}</p>
        </div>
        <div className="bg-yellow-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold">Upcoming Matches</h2>
          <p className="text-4xl">5</p>
        </div>
      </div>

      {/* ✅ Filtered Players List */}
      <h2 className="text-3xl font-bold mb-4">Manage Players</h2>
      <table className="w-full border-collapse border border-gray-700 mb-10">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-700 p-2">Name</th>
            <th className="border border-gray-700 p-2">Sport</th>
            <th className="border border-gray-700 p-2">Position</th>
            <th className="border border-gray-700 p-2">Age</th>
            <th className="border border-gray-700 p-2">Stats</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="text-center bg-gray-800">
              <td className="border border-gray-700 p-2">{player.name}</td>
              <td className="border border-gray-700 p-2">{player.sport}</td>
              <td className="border border-gray-700 p-2">{player.position}</td>
              <td className="border border-gray-700 p-2">{player.age}</td>
              <td className="border border-gray-700 p-2">
                {player.sport === "Football" && `G/A: ${player.goals}/${player.assists}, Fouls: ${player.fouls}`}
                {player.sport === "Basketball" && `PTS: ${player.points}, REB: ${player.rebounds}, AST: ${player.assists}`}
                {player.sport === "Badminton" && `Wins: ${player.wins}, Losses: ${player.losses}, Titles: ${player.titles}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Add Player Form */}
      <h2 className="text-3xl font-bold mb-4">Add Player</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input type="text" name="name" placeholder="Player Name" className="p-2 bg-gray-800 border border-gray-600 rounded" onChange={handlePlayerChange} />
        <select name="sport" className="p-2 bg-gray-800 border border-gray-600 rounded" onChange={handlePlayerChange}>
          <option>Football</option>
          <option>Basketball</option>
          <option>Badminton</option>
        </select>
        <input type="text" name="position" placeholder="Position" className="p-2 bg-gray-800 border border-gray-600 rounded" onChange={handlePlayerChange} />
      </div>
      <button onClick={addPlayer} className="bg-blue-600 p-2 rounded hover:bg-blue-700">Add Player</button>
    </div>
  );
}

export default Admin;
