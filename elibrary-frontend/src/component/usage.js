import React from "react";

function Usage() {
  return (
    <section className="bg-white py-12 rounded-xl shadow-lg max-w-3xl mx-auto my-8">
      <div className="px-6 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-4">
          How to Use eLibrary
        </h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 text-lg mx-auto max-w-xl">
          <li>
            <span className="font-semibold text-blue-600">Browse:</span> Use the
            navigation bar or gallery to explore available books.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Search:</span> Find
            books by category, author, or title.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Language:</span>
            Switch between Pashto, Dari, and English using the language
            selector.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Read:</span> Enjoy
            reading and discovering new books anytime, anywhere!
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Usage;
