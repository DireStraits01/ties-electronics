import './App.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './components/config/firebase';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
// import Home from './components/Pages/Home';
import AdminPanel from './components/admin/AdminPanel';
import Laptops from './components/Pages/Laptops';
import Pads from './components/Pages/Pads';
import Accessories from './components/Pages/Accessories';
import Watchs from './components/Pages/Watchs';
import CellPhones from './components/Pages/CellPhones';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const refreshItems = async () => {
      const data = await getDocs(collection(db, 'items'));
      setItems(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    refreshItems();
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<AdminPanel items={items} setItems={setItems} />}
          />
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
