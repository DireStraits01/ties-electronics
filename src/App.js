import './App.css';
import React from 'react';
import Navbar from './components/Layout/Navbar';
import CellPhones from './components/Pages/CellPhones';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CellPhones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
