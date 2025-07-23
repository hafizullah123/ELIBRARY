import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-4 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <span>
          &copy; {new Date().getFullYear()} eLibrary. All rights reserved.
        </span>
        <span>
          <a
            href="mailto:contact@elibrary.com"
            className="hover:text-blue-200 transition"
          >
            Contact
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
