import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <div className="font-bold mb-1">eLibrary</div>
          <div>123 Library St, Kabul, Afghanistan</div>
          <div>
            Email:{" "}
            <a
              href="mailto:contact@elibrary.com"
              className="underline hover:text-blue-200"
            >
              contact@elibrary.com
            </a>
          </div>
          <div>Phone: +93 700 000 000</div>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-200 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            Instagram
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-blue-200">
        &copy; {new Date().getFullYear()} eLibrary. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
