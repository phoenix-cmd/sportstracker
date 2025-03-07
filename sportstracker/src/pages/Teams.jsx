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
    </div>
  );
}

export default Teams;
