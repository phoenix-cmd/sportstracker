import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const Status = () => {
  const location = useLocation();
  const { matchId } = useParams();
  const { sport } = location.state || {};
  const navigate = useNavigate();

  const [status, setStatus] = useState("live");
  const [tossWinner, setTossWinner] = useState("");
  const [tossChoice, setTossChoice] = useState("batting");
  const [matchDetails, setMatchDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatchDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:2000/api/v2/matchScore/${matchId}`
        );
        if (response.ok) {
          const data = await response.json();
          setMatchDetails(data.data); // Access the data property from the response
          // Pre-fill the form with existing data if available
          if (data.data.status) setStatus(data.data.status);
          if (data.data.tossWinner) setTossWinner(data.data.tossWinner);
          if (data.data.tossChoice) setTossChoice(data.data.tossChoice);
        } else {
          throw new Error("Failed to fetch match details");
        }
      } catch (error) {
        console.error("Error fetching match details:", error);
        navigate(-1); // Go back if there's an error
      } finally {
        setLoading(false);
      }
    };

    if (matchId && sport) {
      fetchMatchDetails();
    } else {
      navigate(-1); // Go back if matchId or sport is missing
    }
  }, [matchId, sport, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { status };

    if (sport === "Cricket") {
      data.tossWinner = tossWinner;
      data.tossChoice = tossChoice;
    }

    try {
      const response = await fetch(
        `http://localhost:2000/api/v2/matchScore/${matchId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Status updated successfully");
        navigate(-1); // Go back after successful update
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert(error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Update Match Status
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-xl"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
            >
              <option value="live">Live</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {sport === "Cricket" && matchDetails && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Toss Winner
                </label>
                <select
                  value={tossWinner}
                  onChange={(e) => setTossWinner(e.target.value)}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  required
                >
                  <option value="">Select Toss Winner</option>
                  <option value={matchDetails.team1._id}>
                    {matchDetails.team1Name}
                  </option>
                  <option value={matchDetails.team2._id}>
                    {matchDetails.team2Name}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Toss Choice
                </label>
                <select
                  value={tossChoice}
                  onChange={(e) => setTossChoice(e.target.value)}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                >
                  <option value="batting">Batting</option>
                  <option value="bowling">Bowling</option>
                </select>
              </div>
            </>
          )}

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-full md:w-1/2 p-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
            >
              Update Status
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Status;
