import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Admin Navbar */}
      <nav className="bg-gray-800 p-4 mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <div className="space-x-4">
          <Link to="/admin/players" className="hover:text-gray-400">Manage Players</Link>
          <Link to="/admin/teams" className="hover:text-gray-400">Manage Teams</Link>
          <Link to="/admin/matches" className="hover:text-gray-400">Manage Matches</Link>
        </div>
      </nav>

      {/* Admin Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold">Total Players</h2>
          <p className="text-gray-400 text-2xl">50</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold">Total Teams</h2>
          <p className="text-gray-400 text-2xl">10</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold">Upcoming Matches</h2>
          <p className="text-gray-400 text-2xl">5</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;
