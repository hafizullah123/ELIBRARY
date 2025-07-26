import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Usage from "./component/usage";
import Service from "./component/service";
import Collection from "./component/collection";
import Gallery from "./component/galler";
import Footer from "./component/footer";
import Login from "./component/login"; // Import Login
import Register from "./component/register"; // Import Register
import BookCategory from "./component/book-category";
import BookForm from "./component/book-form";
import AdminDashboard from "./component/admindashboard";
import TopicInsertForm from "./component/topic-insertion";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Usage />
                  <Service />
                  <Collection />
                  <Gallery />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book-category" element={<BookCategory />} />
            <Route path="/book-form" element={<BookForm />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/topic-insertion" element={<TopicInsertForm />} />S
            {/* Add this line */}
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
