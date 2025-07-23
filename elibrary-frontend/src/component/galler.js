import React from "react";

const images = [
  "https://source.unsplash.com/random/300x200?sig=1",
  "https://source.unsplash.com/random/300x200?sig=2",
  "https://source.unsplash.com/random/300x200?sig=3",
  "https://source.unsplash.com/random/300x200?sig=4",
  "https://source.unsplash.com/random/300x200?sig=5",
  "https://source.unsplash.com/random/300x200?sig=6",
  "https://source.unsplash.com/random/300x200?sig=7",
  "https://source.unsplash.com/random/300x200?sig=8",
  "https://source.unsplash.com/random/300x200?sig=9",
];

function Gallery() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-6">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="rounded shadow object-cover w-full h-48"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
