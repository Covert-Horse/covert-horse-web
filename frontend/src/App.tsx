import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");

  }
  
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <Router> 
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <a href="index.html">Covert Horse</a>
        </div>
        <button onClick={openMenu}>&#9776;</button>
        <div className="header-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li><a href="index.html">Pants</a></li>
          <li><a href="index.html">Shirts</a></li>
        </ul>
      </aside>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <footer className="footer">
        &copy; 2022 Covert Horse
      </footer>
    </div>
    </Router>
  );
}

export default App;
