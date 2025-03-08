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
    </div>
  );
}

export default Teams;
