import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Buyer from './pages/Buyer';
import Seller from './pages/Seller';
import './App.css';

// Simple check for login
const Protected = ({ children }) => {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Protected><Home /></Protected>} />
        <Route path="/about" element={<Protected><About /></Protected>} />
        <Route path="/pricing" element={<Protected><Pricing /></Protected>} />
        <Route path="/contact" element={<Protected><Contact /></Protected>} />
        <Route path="/buyer" element={<Protected><Buyer /></Protected>} />
        <Route path="/seller" element={<Protected><Seller /></Protected>} />
      </Routes>
    </Router>
  );
}

export default App;
