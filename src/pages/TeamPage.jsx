import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TeamPage() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [newTeam, setNewTeam] = useState({
    name: "",
    photo: null,
    captain: "",
    sport: "Football",
    selectedPlayers: [],
  });

  useEffect(() => {
    fetch("/api/players") // Replace with your API
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching players:", error));
  }, []);

  const handleChange = (e) => {
    setNewTeam({ ...newTeam, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setNewTeam({ ...newTeam, photo: e.target.files[0] });
  };

  const handlePlayerSelection = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setNewTeam({ ...newTeam, selectedPlayers: selectedOptions });
  };

  const addTeam = (e) => {
    e.preventDefault();
    setTeams([...teams, { id: teams.length + 1, ...newTeam }]);
    setNewTeam({ name: "", photo: null, captain: "", sport: "Football", selectedPlayers: [] });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10 flex flex-col items-center">
      <nav className="flex justify-around bg-gray-800 p-4 mb-6 rounded-lg shadow-lg w-full max-w-4xl">
        <Link to="/admin" className="text-white font-bold hover:text-yellow-400 transition duration-300">Admin Dashboard</Link>
      </nav>
      
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Create a Team</h1>
      <form onSubmit={addTeam} className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl">
        <input type="text" name="name" placeholder="Team Name" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleChange} />
        <input type="file" name="photo" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleFileChange} />
        
        <select name="sport" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleChange}>
          <option>Football</option>
          <option>Cricket</option>
          <option>Badminton</option>
        </select>
        
        <select name="captain" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleChange}>
          <option value="">Select Captain</option>
          {players.map((player) => (
            <option key={player.id} value={player.name}>{player.name}</option>
          ))}
        </select>
        
        <select multiple name="selectedPlayers" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full h-40" onChange={handlePlayerSelection}>
          {players.map((player) => (
            <option key={player.id} value={player.name}>{player.name}</option>
          ))}
        </select>
        
        <div className="col-span-1 sm:col-span-2 flex justify-center">
          <button type="submit" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 w-full max-w-xs">Create Team</button>
        </div>
      </form>
      
      <h2 className="text-2xl font-bold mt-10">Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-6">
        {teams.map((team) => (
          <div key={team.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{team.name}</h3>
            {team.photo && <img src={URL.createObjectURL(team.photo)} alt={team.name} className="mt-2 rounded-lg w-full h-32 object-cover" />}
            <p><strong>Sport:</strong> {team.sport}</p>
            <p><strong>Captain:</strong> {team.captain}</p>
            <p><strong>Players:</strong> {team.selectedPlayers.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;

