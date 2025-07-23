import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    alt: "Library Interior",
    detail: "A beautiful library interior with classic architecture.",
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    alt: "Bookshelves",
    detail: "Rows of bookshelves filled with books.",
  },
  {
    src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80",
    alt: "Open Book",
    detail: "An open book ready to be read.",
  },
  {
    src: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=80",
    alt: "Library Desk",
    detail: "A quiet desk for studying in the library.",
  },
  {
    src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    alt: "Library Study",
    detail: "Students studying in a modern library.",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    alt: "Library Hall",
    detail: "A grand hall in a public library.",
  },
  {
    src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    alt: "Library Reading Area",
    detail: "Comfortable reading area with natural light.",
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    alt: "Library Books",
    detail: "Stacks of books in a cozy library corner.",
  },
  {
    src: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=400&q=80",
    alt: "Library Entrance",
    detail: "The entrance to a historic library.",
  },
];

function Gallery() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-6">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative group">
              <img
                src={img.src}
                alt={img.alt}
                className="rounded shadow object-cover w-full h-48"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
                <span className="text-white text-center px-4 text-lg">
                  {img.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
