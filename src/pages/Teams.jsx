<<<<<<< HEAD
import React from "react";
import TeamCard from "../components/TeamCard"; // Import TeamCard component

const teams = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/5/53/FC_Barcelona_%28crest%29.svg",
    name: "FC Barcelona",
    sport: "Football",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Real_Madrid_CF.svg",
    name: "Real Madrid",
    sport: "Football",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4a/Los_Angeles_Lakers_logo.svg",
    name: "Los Angeles Lakers",
    sport: "Basketball",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/6/67/Golden_State_Warriors_logo.svg",
    name: "Golden State Warriors",
    sport: "Basketball",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a6/Manchester_United_FC_crest.svg",
    name: "Manchester United",
    sport: "Football",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/Paris_Saint-Germain_F.C..svg",
    name: "Paris Saint-Germain",
    sport: "Football",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/Chicago_Bulls_logo.svg",
    name: "Chicago Bulls",
    sport: "Basketball",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/0/02/New_York_Yankees_primary_logo.svg",
    name: "New York Yankees",
    sport: "Baseball",
  },
];

function Teams() {
  return (
    <div className="flex flex-col flex-grow min-h-screen justify-center items-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mt-10">Teams</h1>
      <p className="text-gray-400 text-center">Browse all registered teams.</p>

      {/* ✅ Grid Layout for Teams */}
      <div className="mt-10 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teams.map((team, index) => (
          <TeamCard key={index} logo={team.logo} name={team.name} sport={team.sport} />
        ))}
      </div>
=======
import React, { useState, useEffect } from "react";
import TeamCard from "../components/TeamCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Ui/LoadingSpinner";
import Loading from "../components/Ui/LoadingSpinner";
import ErrorHandler from "../components/Ui/StatusCodeError";
import { showToast } from "../components/Ui/Toastify";

function Teams() {
  const [teams, setteams] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchPlayers = async () => {
      try {
        const response = await fetch(
          `http://localhost:2000/api/v2/admin/allteams`
        );
        const data = await response.json();
        if (response.status === 200) {
          setteams(data.data || []);
        } else {
          if (response.status === 400) {
            setError({
              statusCode: 400,
              message: data.message || "Bad request",
            });
            return null;
          }
          if (response.status === 404) {
            setError({ statusCode: 404, message: "Resource not found" });
            return null;
          }
        }
      } catch (error) {
        setError({ statusCode: 500, message: "Failed to fetch" });
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);
  if (error) {
    return (
      <ErrorHandler statusCode={error.statusCode} message={error.message} />
    );
  }
  return (
    <div className="relative">
      <Navbar />
      <main className="bg-midnight min-h-screen relative">
        <div className="flex flex-col flex-grow min-h-screen justify-start items-center text-white">
          <h1 className="text-4xl font-bold text-center mt-10">Teams</h1>
          <p className="text-gray-400 text-center">
            Browse all registered teams.
          </p>

          {loading ? (
            <Loading />
          ) : (
            <div className="mt-10 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teams.length > 0 ? (
                teams.map((team, index) => (
                  <TeamCard
                    key={index}
                    logo={
                      !team.photo
                        ? "https://img.freepik.com/free-vector/basketball-team-background_1188-54.jpg?ga=GA1.1.482852627.1738911374&semt=ais_hybrid"
                        : team.photo
                    }
                    name={team.name}
                    sport={team.sport}
                  />
                ))
              ) : (
                <div className="col-span-full text-center text-gray-400 py-10">
                  No Teams found
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
>>>>>>> c3d914d7738cdab3d25e67ea32c92b006f8c5f37
    </div>
  );
}

export default Teams;
