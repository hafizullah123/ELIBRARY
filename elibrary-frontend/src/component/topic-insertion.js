import React, { useState } from "react";

const AddTopicForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    title_en: "",
    title_ps: "",
    title_dr: "",
    author: "",
    university: "",
    department: "",
    abstract: "",
    type: "",
    publication_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // You can send `formData` to backend here
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Add New Topic
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={formData.id}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="university"
            placeholder="University"
            value={formData.university}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <textarea
          name="abstract"
          placeholder="Abstract"
          value={formData.abstract}
          onChange={handleChange}
          className="border p-2 rounded w-full h-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="title_en"
            placeholder="Title (English)"
            value={formData.title_en}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="title_ps"
            placeholder="Title (Pashto)"
            value={formData.title_ps}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="title_dr"
            placeholder="Title (Dari)"
            value={formData.title_dr}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <option value="">Select Type</option>
            <option value="thesis">Thesis</option>
            <option value="research">Research</option>
            <option value="project">Project</option>
            <option value="article">Article</option>
          </select>

          <input
            type="date"
            name="publication_date"
            value={formData.publication_date}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTopicForm;
