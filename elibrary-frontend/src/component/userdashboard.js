import React, { useState } from "react";

export default function UserDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold text-blue-600">User Panel</h2>
        <button
          className="text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-white shadow-md p-6 md:min-h-screen`}
      >
        <nav className="space-y-4">
          <a href="#" className="text-gray-700 hover:text-blue-600 block">
            📚 Books
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 block">
            📝 Topics
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 block">
            👤 Profile
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 block">
            🚪 Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, User!</h1>
          <p className="text-gray-500">Here is your recent activity</p>
        </header>

        {/* Dashboard Content Placeholder */}
        {/* <section className="bg-white rounded-xl shadow p-4">
          <p className="text-gray-600">Dashboard content goes here...</p>
        </section> */}
      </main>
    </div>
  );
}
