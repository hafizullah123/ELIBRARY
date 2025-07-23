import React from "react";

function Service() {
  const services = [
    {
      title: "Online Search",
      desc: "Find books instantly with our powerful search feature.",
    },
    {
      title: "Personalized Recommendations",
      desc: "Get book suggestions tailored to your interests.",
    },
    {
      title: "24/7 Access",
      desc: "Enjoy your digital library anytime, on any device.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-10 drop-shadow">
          Library <span className="text-blue-600">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
            >
              <div className="text-2xl font-bold text-blue-700 mb-4">
                {service.title}
              </div>
              <div className="text-gray-700 text-lg">{service.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
