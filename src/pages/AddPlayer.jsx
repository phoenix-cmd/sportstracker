import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddPlayer() {
  const [player, setPlayer] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    phone: "",
    email: "",
    rollNo: "",
    birthDate: "",
    collegeYear: "",
    sport: "Football",
    position: "",
    category: "",
    photo: null,
  });

  const sportsPositions = {
    Football: ["Forward", "Midfielder", "Defender", "Goalkeeper"],
    Cricket: ["Batsman", "Bowler", "All-rounder", "Wicketkeeper"],
    Badminton: ["Singles", "Doubles", "Mixed Doubles"],
  };

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSportChange = (e) => {
    setPlayer({ ...player, sport: e.target.value, position: "" });
  };

  const handleFileChange = (e) => {
    setPlayer({ ...player, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Player Data:", player);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10 flex flex-col items-center">
      {/* Admin Navbar */}
      {/* <nav className="flex justify-around bg-gray-800 p-4 mb-6 rounded-lg shadow-lg w-full max-w-4xl">
        <Link to="/admin/manage-players" className="text-white font-bold hover:text-yellow-400 transition duration-300">Manage Players</Link>
      </nav> */}

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Add Player</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl">
        <input type="text" name="name" placeholder="Name" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleChange} />
        <input type="text" name="fatherName" placeholder="Father's Name" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleChange} />
        <input type="text" name="motherName" placeholder="Mother's Name" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleChange} />
        <input type="text" name="rollNo" placeholder="Roll No" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleChange} />
        <input type="date" name="birthDate" placeholder="Birth Date" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleChange} />
        {/* Sport Selection */}
        <select name="sport" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleSportChange}>
          <option>Football</option>
          <option>Cricket</option>
          <option>Badminton</option>
        </select>

        {/* Position Selection */}
        <select name="position" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleChange} value={player.position}>
          <option value="">Select Position</option>
          {sportsPositions[player.sport]?.map((pos) => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
        <input type="file" name="photo" className="p-3 bg-gray-700 border border-gray-600 rounded-lg w-full" onChange={handleFileChange} />
        <div className="col-span-1 sm:col-span-2 flex justify-center">
          <button type="submit" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 w-full max-w-xs">Add Player</button>
        </div>
      </form>
    </div>
  );
}

export default AddPlayer;
