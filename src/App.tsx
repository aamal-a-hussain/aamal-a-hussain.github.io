import "./App.css";

import Home from "./pages/Home";
import Research from "./pages/Research";
import Talks from "./pages/Talks";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/talks" element={<Talks />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
