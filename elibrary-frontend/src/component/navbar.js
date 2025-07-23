import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use named import for Link

function Navbar() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white px-4 py-3 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">eLibrary</div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Links */}
        <ul
          className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static bg-blue-700 md:bg-transparent left-0 right-0 top-16 md:top-auto z-10 px-4 py-6 md:p-0 rounded-b-xl shadow-lg md:shadow-none ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <li>
            <Link to="/" className="hover:text-blue-200 transition block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="hover:text-blue-200 transition block">
              Books
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-200 transition block">
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-200 transition block">
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="hover:text-blue-200 transition block"
            >
              Register
            </Link>
          </li>
          <li className="md:hidden">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-blue-600 text-white px-3 py-1 rounded focus:outline-none mt-2"
            >
              <option value="en">English</option>
              <option value="ps">Pashto</option>
              <option value="fa">Dari</option>
            </select>
          </li>
        </ul>
        {/* Desktop language selector */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="ml-6 bg-blue-600 text-white px-3 py-1 rounded focus:outline-none hidden md:block"
        >
          <option value="en">English</option>
          <option value="ps">Pashto</option>
          <option value="fa">Dari</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
