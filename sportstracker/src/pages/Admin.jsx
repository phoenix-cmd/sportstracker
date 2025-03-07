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
        <Link to="/admin/teams" className="text-white font-bold hover:text-yellow-400 transition duration-300">
    Manage Teams
  </Link> {/* Added Manage Teams */}
      </nav>

      <h1 className="text-4xl font-bold text-center mb-10">Admin Dashboard</h1>
    </div>
  );
}

export default Admin;
