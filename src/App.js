import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from'./pages/Home';
import Research from'./pages/Research';
import Talks from'./pages/Talks';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


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
