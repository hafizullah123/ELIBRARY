import React from "react";

export default function UserDashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold text-blue-600 mb-6">User Panel</h2>
        <nav className="space-y-4">
          <a href="#" className="text-gray-700 hover:text-blue-600 block">
            Books
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 block">
            Topics
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 block">
            Profile
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 block">
            Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, User!</h1>
          <p className="text-gray-500">Here is your recent activity</p>
        </header>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Topics
            </h3>
            <p className="text-2xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-700">Published</h3>
            <p className="text-2xl font-bold text-green-500">9</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-700">Pending</h3>
            <p className="text-2xl font-bold text-yellow-500">3</p>
          </div>
        </section>
      </main>
    </div>
  );
}
