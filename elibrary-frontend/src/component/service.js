import React from "react";

function Service() {
  return (
    <section className="bg-blue-50 py-12 rounded-xl shadow-lg max-w-3xl mx-auto my-8">
      <div className="px-6 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-4">
          Library Services
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg mx-auto max-w-xl text-left">
          <li>Online book search and discovery</li>
          <li>Read books instantly in your browser</li>
          <li>Personalized book recommendations</li>
          <li>Bookmark and save your favorite books</li>
          <li>24/7 access to your digital library</li>
          <li>Support for multiple devices</li>
        </ul>
      </div>
    </section>
  );
}

export default Service;
