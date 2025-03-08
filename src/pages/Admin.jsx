import React, { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      {/* Navbar */}
      <nav className="flex justify-around bg-gray-800 p-4 mb-6 rounded-lg shadow-lg">
        <Link
          to="/admin/cricket-matches"
          className="text-white font-bold hover:text-yellow-400 transition duration-300"
        >
          Cricket Matches
        </Link>
        <Link
          to="/admin/football-matches"
          className="text-white font-bold hover:text-yellow-400 transition duration-300"
        >
          Football Matches
        </Link>
        <Link
          to="/admin/badminton-matches"
          className="text-white font-bold hover:text-yellow-400 transition duration-300"
        >
          Badminton Matches
        </Link>
        <Link
          to="/admin/addmatch"
          className="text-white font-bold hover:text-yellow-400 transition duration-300"
        >
          Add Match
        </Link>
        <Link
          to="/admin/matchscoremaintain"
          className="text-white font-bold hover:text-yellow-400 transition duration-300"
        >
          Match Score management
        </Link>
        <Link
          to="/admin/add-player"
          className="text-white font-bold hover:text-yellow-400 transition duration-300"
        >
          Add Player
        </Link>
        <Link
          to="/admin/teams"
          className="text-white font-bold hover:text-yellow-400 transition duration-300"
        >
          Manage Teams
        </Link>{" "}
        {/* Added Manage Teams */}
      </nav>

      <h1 className="text-4xl font-bold text-center mb-10">Admin Dashboard</h1>
    </div>
  );
}

export default Admin;
