import React from "react";

const books = [
  {
    id: 1,
    title: "Modern Web Development",
    author: "John Doe",
    publicationDate: "2023-05-20",
    cover: "https://via.placeholder.com/120x160",
    abstract: "A deep dive into modern frontend technologies.",
    downloadUrl: "/books/book1.pdf",
  },
  {
    id: 2,
    title: "Database Systems",
    author: "Jane Smith",
    publicationDate: "2022-11-10",
    cover: "https://via.placeholder.com/120x160",
    abstract: "Understanding relational and NoSQL databases.",
    downloadUrl: "/books/book2.pdf",
  },
  // Add more books here...
];

export default function UserDashboard() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md p-4 md:p-6">
        <h2 className="text-xl font-bold text-blue-600 mb-6">User Panel</h2>
        <nav className="space-y-3">
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
      <main className="flex-1 p-4 md:p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, User!</h1>
          <p className="text-gray-500">Here is your recent activity</p>
        </header>

        {/* Book List */}
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Author:</strong> {book.author}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Published:</strong> {book.publicationDate}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Abstract:</strong> {book.abstract}
                </p>
                <a
                  href={book.downloadUrl}
                  download
                  className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
