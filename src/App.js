import './App.css';
import React from 'react';
import Navbar from './components/Layout/Navbar';
import Home from './components/Pages/Home';
import Laptops from './components/Pages/Laptops';
import Pads from './components/Pages/Pads';
import Accessories from './components/Pages/Accessories';
import Watchs from './components/Pages/Watchs';
import CellPhones from './components/Pages/CellPhones';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/pads" element={<Pads />} />
          <Route path="/cellPhones" element={<CellPhones />} />
          <Route path="/watchs" element={<Watchs />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
