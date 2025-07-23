import React, { useState } from "react";

function Navbar() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white px-4 py-3 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">eLibrary</div>
        {/* Mobile menu button */}
        <button
         
            </a>
          </li>
          <li>
            <a href="/books" className="hover:text-blue-200 transition">
              Books
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-200 transition">
              About
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-blue-200 transition">
              Login
            </a>
          </li>
          <li>
            <a href="/register" className="hover:text-blue-200 transition">
              Register
            </a>
          </li>
        </ul>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="ml-6 bg-blue-600 text-white px-3 py-1 rounded focus:outline-none"
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
