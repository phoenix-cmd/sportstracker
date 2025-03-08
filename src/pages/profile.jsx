import React from "react";
import { FaFutbol } from "react-icons/fa";
import { GiShuttlecock } from "react-icons/gi";
import { Bar, Radar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register all required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Enhanced mock data based on your schema
const mockPlayer = {
  photo: "https://example.com/player-photo.jpg",
  name: "John Smith",
  sport: "Cricket",
  rollNo: "2024001",
  age: 21,
  team: "Team Alpha",
  matchesPlayed: 15,
  wins: 10,
  losses: 5,
  category: "All-rounder",
  ranking: 3,
  stats: {
    cricket: {
      runs: 450,
      wickets: 20,
      battingAverage: 45.0,
      bowlingEconomy: 6.2,
      strikeRate: 135.5,
      // Additional match-specific stats
      recentMatches: [
        {
          date: "2024-02-28",
          runs: 75,
          wickets: 2,
          ballsFaced: 45,
          runsConceded: 28,
        },
        // ... more matches
      ],
    },
  },
  matchHistory: [
    {
      id: 1,
      date: "2024-02-28",
      venue: "Central Ground",
      result: "Won",
      performance: {
        runs: 75,
        wickets: 2,
        fours: 8,
        sixes: 3,
      },
    },
    // ... more match history
  ],
};

// Common chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: { color: "#4B5563" },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: "rgba(156, 163, 175, 0.1)" },
      ticks: { color: "#4B5563" },
    },
    x: {
      grid: { color: "rgba(156, 163, 175, 0.1)" },
      ticks: { color: "#4B5563" },
    },
  },
};

const renderSportStats = (sport, stats) => {
  switch (sport) {
    case "Cricket":
      return (
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              title="Batting Average"
              value={stats.cricket.battingAverage.toFixed(2)}
              icon="🏏"
            />
            <StatCard
              title="Strike Rate"
              value={stats.cricket.strikeRate.toFixed(2)}
              icon="⚡"
            />
            <StatCard
              title="Economy Rate"
              value={stats.cricket.bowlingEconomy.toFixed(2)}
              icon="🎯"
            />
            <StatCard title="Wickets" value={stats.cricket.wickets} icon="🎪" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">
                Batting Performance
              </h3>
              <div className="h-[300px] w-full">
                <Bar
                  options={chartOptions}
                  data={{
                    labels: ["Runs", "Fours", "Sixes", "Strike Rate"],
                    datasets: [
                      {
                        label: "Batting Stats",
                        data: [
                          stats.cricket.runs,
                          stats.cricket.fours || 0,
                          stats.cricket.sixes || 0,
                          stats.cricket.strikeRate,
                        ],
                        backgroundColor: [
                          "rgba(59, 130, 246, 0.6)",
                          "rgba(16, 185, 129, 0.6)",
                          "rgba(249, 115, 22, 0.6)",
                          "rgba(139, 92, 246, 0.6)",
                        ],
                      },
                    ],
                  }}
                />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Bowling Analysis</h3>
              <div className="h-[300px] w-full">
                <Line
                  options={chartOptions}
                  data={{
                    labels: [
                      "Match 1",
                      "Match 2",
                      "Match 3",
                      "Match 4",
                      "Match 5",
                    ],
                    datasets: [
                      {
                        label: "Economy Rate",
                        data: [6.2, 5.8, 4.9, 7.1, 5.5],
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      );

    case "Football":
      return (
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard title="Goals" value={stats.football.goals} icon="⚽" />
            <StatCard
              title="Assists"
              value={stats.football.assists}
              icon="👟"
            />
            <StatCard
              title="Pass Accuracy"
              value={`${stats.football.passAccuracy}%`}
              icon="🎯"
            />
            <StatCard
              title="Clean Sheets"
              value={stats.football.cleanSheets || 0}
              icon="🥅"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Performance Stats</h3>
              <div className="h-[300px] w-full">
                <Bar
                  options={chartOptions}
                  data={{
                    labels: ["Goals", "Assists", "Yellow Cards", "Red Cards"],
                    datasets: [
                      {
                        label: "Season Statistics",
                        data: [
                          stats.football.goals,
                          stats.football.assists,
                          stats.football.yellowCards,
                          stats.football.redCards,
                        ],
                        backgroundColor: [
                          "rgba(59, 130, 246, 0.6)",
                          "rgba(16, 185, 129, 0.6)",
                          "rgba(251, 191, 36, 0.6)",
                          "rgba(239, 68, 68, 0.6)",
                        ],
                      },
                    ],
                  }}
                />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Player Analysis</h3>
              <div className="h-[300px] w-full">
                <Radar
                  options={{
                    ...chartOptions,
                    scales: {
                      r: {
                        min: 0,
                        max: 100,
                        ticks: { stepSize: 20 },
                      },
                    },
                  }}
                  data={{
                    labels: [
                      "Speed",
                      "Shooting",
                      "Passing",
                      "Dribbling",
                      "Defense",
                      "Physical",
                    ],
                    datasets: [
                      {
                        label: "Skills Rating",
                        data: [85, 78, 88, 76, 70, 82],
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        borderColor: "rgb(59, 130, 246)",
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      );

    case "Badminton":
      return (
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              title="Matches Won"
              value={stats.badminton.matchesWon}
              icon="🏸"
            />
            <StatCard
              title="Win Rate"
              value={`${(
                (stats.badminton.matchesWon / mockPlayer.matchesPlayed) *
                100
              ).toFixed(1)}%`}
              icon="📈"
            />
            <StatCard
              title="Sets Won"
              value={stats.badminton.setsWon}
              icon="🎯"
            />
            <StatCard
              title="Smashes"
              value={stats.badminton.smashCount}
              icon="💥"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Match Statistics</h3>
              <div className="h-[300px] w-full">
                <Bar
                  options={chartOptions}
                  data={{
                    labels: [
                      "Points Scored",
                      "Smashes",
                      "Drop Shots",
                      "Net Play",
                    ],
                    datasets: [
                      {
                        label: "Game Statistics",
                        data: [
                          stats.badminton.pointsScored,
                          stats.badminton.smashCount,
                          stats.badminton.dropShots || 0,
                          stats.badminton.netWins || 0,
                        ],
                        backgroundColor: [
                          "rgba(59, 130, 246, 0.6)",
                          "rgba(239, 68, 68, 0.6)",
                          "rgba(16, 185, 129, 0.6)",
                          "rgba(139, 92, 246, 0.6)",
                        ],
                      },
                    ],
                  }}
                />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">
                Performance Analysis
              </h3>
              <div className="h-[300px] w-full">
                <Line
                  options={chartOptions}
                  data={{
                    labels: ["Game 1", "Game 2", "Game 3", "Game 4", "Game 5"],
                    datasets: [
                      {
                        label: "Points Per Game",
                        data: [21, 19, 21, 21, 18],
                        borderColor: "rgb(59, 130, 246)",
                        tension: 0.1,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return <div>Sport not supported</div>;
  }
};

const PlayerProfile = () => {
  const player = mockPlayer;

  const getSportIcon = (sport) => {
    switch (sport) {
      case "Cricket":
        return <FaFutbol className="text-3xl text-blue-500" />;
      case "Football":
        return <FaFutbol className="text-3xl text-green-500" />;
      case "Badminton":
        return <GiShuttlecock className="text-3xl text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-100">
      {/* Player Header */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="absolute -bottom-16 left-8">
            <img
              src={player.photo}
              alt={player.name}
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>
        <div className="pt-20 pb-6 px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{player.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                {getSportIcon(player.sport)}
                <span className="text-gray-600">{player.category}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">
                #{player.ranking}
              </p>
              <p className="text-gray-600">Ranking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-8">
        {renderSportStats(mockPlayer.sport, mockPlayer.stats)}
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg p-4 shadow-lg">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <span className="text-2xl">{icon}</span>
    </div>
    <p className="text-2xl font-bold text-blue-600">{value}</p>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between border-b border-gray-100 py-2">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default PlayerProfile;
