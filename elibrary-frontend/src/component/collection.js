import React from "react";

const categories = [
  { name: "Programming", count: 12 },
  { name: "Algorithms", count: 8 },
  { name: "Fiction", count: 15 },
  { name: "Science", count: 7 },
  { name: "History", count: 5 },
];

function Collection() {
  return (
    <section className="bg-white py-10 rounded-xl shadow max-w-3xl mx-auto my-8">
      <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Book Collections
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-blue-50 rounded-lg px-4 py-3 shadow"
          >
            <span className="font-semibold text-blue-800">{cat.name}</span>
            <span className="bg-blue-700 text-white rounded-full px-3 py-1 text-sm font-bold">
              {cat.count}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collection;
