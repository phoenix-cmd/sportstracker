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
import { Link } from "react-router-dom";

function Admin() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [newPlayer, setNewPlayer] = useState({ name: "", sport: "Football", position: "" });
  const [newTeam, setNewTeam] = useState({ name: "", sport: "Football", coach: "" });

  const handlePlayerChange = (e) => setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
  const handleTeamChange = (e) => setNewTeam({ ...newTeam, [e.target.name]: e.target.value });

  const addPlayer = () => {
    setPlayers([...players, { id: players.length + 1, ...newPlayer }]);
    setNewPlayer({ name: "", sport: "Football", position: "" });
  };

  const addTeam = () => {
    setTeams([...teams, { id: teams.length + 1, ...newTeam }]);
    setNewTeam({ name: "", sport: "Football", coach: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      {/* Navbar */}
      <nav className="flex justify-around bg-gray-800 p-4 mb-6 rounded-lg shadow-lg">
        <Link to="/admin/cricket-matches" className="text-white font-bold hover:text-yellow-400 transition duration-300">Cricket Matches</Link>
        <Link to="/admin/football-matches" className="text-white font-bold hover:text-yellow-400 transition duration-300">Football Matches</Link>
        <Link to="/admin/badminton-matches" className="text-white font-bold hover:text-yellow-400 transition duration-300">Badminton Matches</Link>
        <Link to="/admin/players" className="text-white font-bold hover:text-yellow-400 transition duration-300">Manage Players</Link>
        <Link to="/admin/teams" className="text-white font-bold hover:text-yellow-400 transition duration-300">Manage Teams</Link>
        <Link to="/admin/add-player" className="text-white font-bold hover:text-yellow-400 transition duration-300">Add Player</Link>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-10">Admin Dashboard</h1>
    </div>
  );
}

export default Admin;
