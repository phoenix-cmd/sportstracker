import React from "react";

function Home() {
  return (
    <div className="flex flex-col flex-grow min-h-screen max-w-screen justify-center items-center text-center bg-surface-900 text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold">LFC</h1>
      <p className="mt-4 text-gray-400 max-w-2xl">
        This site was made to help colleges and universities track tournaments held in their respective campuses.
      </p>

      {/* ✅ Features Section */}
      <section className="mt-10 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { title: "Player Database", desc: "Search and compare players across all leagues." },
          { title: "Squad Builder", desc: "Create and share your dream team." },
          { title: "Live Stats", desc: "Track in-game stats and player performance." },
        ].map((feature, index) => (
          <div key={index} className="p-6 bg-gray-700 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-white-400 mt-2">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
