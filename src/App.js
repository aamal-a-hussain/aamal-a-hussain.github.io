import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from'./pages/Home';
import Research from'./pages/Research';
import Contact from'./pages/Contact';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
