import React, { useState } from "react";

const BookForm = () => {
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    isbn: "",
    publisher: "",
    publicationDate: "",
    category: "",
    image: null,
    pdf: null,
  });

  const categories = ["Science", "Math", "History", "Technology", "Literature"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" || name === "pdf") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to backend here using fetch or axios
    console.log(formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="bookName"
          placeholder="Book Name"
          className="w-full border p-2 rounded"
          value={formData.bookName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          className="w-full border p-2 rounded"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          className="w-full border p-2 rounded"
          value={formData.isbn}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="publisher"
          placeholder="Publisher"
          className="w-full border p-2 rounded"
          value={formData.publisher}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="publicationDate"
          className="w-full border p-2 rounded"
          value={formData.publicationDate}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          className="w-full border p-2 rounded"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="file"
          name="pdf"
          accept="application/pdf"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
