import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 text-xl font-bold border-b">Admin Panel</div>
        <nav className="p-4 space-y-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            Dashboard
          </a>
          <a href="/book-form" className="block p-2 rounded hover:bg-gray-200">
            Books
          </a>
          <a
            href="/book-category"
            className="block p-2 rounded hover:bg-gray-200"
          >
            Categories
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            Users
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            Reports
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="p-4 bg-white shadow flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="text-sm text-gray-600">Admin User</div>
        </header>

        {/* Dashboard Cards */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Total Books" value="128" />
          <Card title="Categories" value="12" />
          <Card title="Users" value="89" />
          <Card title="Downloads" value="234" />
        </main>
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
    <h2 className="text-sm font-semibold text-gray-500">{title}</h2>
    <p className="mt-2 text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

export default AdminDashboard;
