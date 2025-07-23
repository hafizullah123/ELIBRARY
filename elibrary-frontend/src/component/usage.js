import React from "react";

function Usage() {
  const usageSteps = [
    {
      title: "Browse",
      desc: "Explore books using the navigation bar or gallery.",
    },
    {
      title: "Language",
      desc: "Switch between Pashto, Dari, and English using the selector.",
    },
    {
      title: "Read",
      desc: "Enjoy reading and discovering new books anytime, anywhere!",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-10 drop-shadow">
          How to Use <span className="text-blue-600">eLibrary</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {usageSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
            >
              <div className="text-2xl font-bold text-blue-700 mb-4">
                {step.title}
              </div>
              <div className="text-gray-700 text-lg">{step.desc}</div>
            </div>
          ))}
        </div>
        <a
          href="/register"
          className="inline-block bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-800 transition font-semibold text-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Usage;
