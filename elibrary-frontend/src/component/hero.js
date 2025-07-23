import React from "react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6 drop-shadow">
          Welcome to <span className="text-blue-600">eLibrary</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Discover, search, and read your favorite books online.
          <br />
          Your digital library is always open!
        </p>
        <a
          href="/books"
          className="inline-block bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-800 transition font-semibold text-lg"
        >
          Browse Books
        </a>
      </div>
    </section>
  );
}

export default Hero;
