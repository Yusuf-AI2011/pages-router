import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { RiHeartFill } from "@remixicon/react";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="wrapper">
      <nav className="navbar">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
