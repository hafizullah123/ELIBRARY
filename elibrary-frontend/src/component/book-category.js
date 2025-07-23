import React, { useState } from "react";

function BookCategory() {
  const [category, setCategory] = useState({ id: "", name: "" });
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category.id || !category.name) return;

    setCategories([...categories, category]);
    setCategory({ id: "", name: "" });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Add Book Category
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Category ID
          </label>
          <input
            type="text"
            name="id"
            value={category.id}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter ID"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Category Name
          </label>
          <input
            type="text"
            name="name"
            value={category.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Category Name"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Category
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Categories List
        </h2>
        <ul className="list-disc pl-6 text-gray-800">
          {categories.map((cat, index) => (
            <li key={index}>
              <strong>ID:</strong> {cat.id}, <strong>Name:</strong> {cat.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookCategory;
