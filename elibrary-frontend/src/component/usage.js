import React from "react";

function Usage() {
  return (
    <section className="bg-white py-12 rounded-xl shadow-lg max-w-3xl mx-auto my-8">
      <div className="px-6 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-4">
          How to Use eLibrary
        </h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-3 text-lg mx-auto max-w-xl">
          <li>Browse the available books using the navigation or gallery.</li>
          <li>Click "Browse Books" to explore the collection.</li>
          <li>
            Use the language selector to switch between Pashto, Dari, and
            English.
          </li>
          <li>Enjoy reading and discovering new books anytime, anywhere!</li>
        </ol>
      </div>
    </section>
  );
}

export default Usage;
