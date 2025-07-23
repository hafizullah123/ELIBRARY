import React from "react";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Usage from "./component/usage";
import Service from "./component/service"; // Import Service
import Collection from "./component/collection";
import Gallery from "./component/galler";
import Footer from "./component/footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Usage />
        <Service /> {/* Add Service after Usage */}
        <Collection />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
