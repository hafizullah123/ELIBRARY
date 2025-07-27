import React from "react";
import {
  Book,
  Users,
  LayoutDashboard,
  FileText,
  LogOut,
  Search,
  Layers,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard />, link: "#" },
  { name: "Books", icon: <Book />, link: "book-form" },
  { name: "Topics", icon: <Layers />, link: "topic-insertion" },
  { name: "Users", icon: <Users />, link: "#" },
  { name: "Reports", icon: <FileText />, link: "#" },
];

export default function LiborDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r">
        <div className="p-4 text-xl font-bold text-blue-600">Library Panel</div>
        <nav className="mt-4">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <hr className="my-4" />
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-100 hover:text-red-600"
          >
            <LogOut />
            Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome, Librarian!
          </h1>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Example Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-md border-l-4 border-blue-500">
            <h2 className="text-lg font-semibold">Total Books</h2>
            <p className="text-3xl mt-2 text-blue-600">240</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md border-l-4 border-green-500">
            <h2 className="text-lg font-semibold">Active Users</h2>
            <p className="text-3xl mt-2 text-green-600">52</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md border-l-4 border-yellow-500">
            <h2 className="text-lg font-semibold">Topics</h2>
            <p className="text-3xl mt-2 text-yellow-600">89</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="bg-white shadow rounded-md p-4">
            <ul className="space-y-3">
              <li>📚 New book "React Guide" added.</li>
              <li>👤 User "Amina" registered.</li>
              <li>📥 Book "Laravel Mastery" downloaded.</li>
              <li>📝 Topic "Machine Learning" updated.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
