import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaClock, FaPlayCircle, FaFlagCheckered } from "react-icons/fa";

const MatchScoreMaintain = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("upcoming");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:2000/api/v2/matchScore/allmatches"
        );
        if (response.status === 200) {
          const data = await response.json();
          const allMatches = [...data.data.upcoming, ...data.data.live];
          setMatches(allMatches);
        } else {
          setError("Failed to fetch matches");
        }
      } catch (error) {
        setError("Failed to fetch matches");
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  const handleMatchClick = (match) => {
    if (match.status === "upcoming") {
      navigate(`/admin/matchscoremaintain/status/${match._id}`, {
        state: { sport: match.sport },
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredMatches = matches.filter((match) => match.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Matches</h1>
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 rounded-lg transition-colors duration-300 ${
              activeTab === "upcoming"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg transition-colors duration-300 ${
              activeTab === "live"
                ? "bg-red-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("live")}
          >
            Live
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMatches.map((match) => (
            <div
              key={match._id}
              className={`p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-102 ${
                match.status === "live" ? "bg-red-500" : "bg-blue-500"
              }`}
              onClick={() => handleMatchClick(match)}
            >
              <h2 className="text-2xl font-bold mb-2">{match.sport}</h2>
              <div className="flex items-center mb-2">
                <p className="text-lg font-semibold">{match.team1Name}</p>
                <span className="mx-2 text-lg">vs</span>
                <p className="text-lg font-semibold">{match.team2Name}</p>
              </div>
              <p className="text-sm mb-1">
                <FaClock className="inline mr-1" />
                {new Date(match.date).toLocaleString()}
              </p>
              <p className="text-sm mb-1">
                <FaFlagCheckered className="inline mr-1" />
                {match.venue}
              </p>
              <p className="text-sm font-semibold">
                <FaPlayCircle className="inline mr-1" />
                Status: {match.status}
              </p>
              {match.status === "upcoming" && (
                <p className="text-sm font-semibold text-gray-300">
                  Countdown:{" "}
                  {Math.ceil((new Date(match.date) - new Date()) / 1000 / 60)}{" "}
                  minutes
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchScoreMaintain;
