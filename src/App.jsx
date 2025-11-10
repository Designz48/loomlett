// src/App.jsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'

import Shop from "./pages/Shop";
import Downloads from "./pages/Downloads";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      {/* -------------------------------------------------
          Whole‑page canvas – white background, full height,
          flex column so the footer sticks to the bottom.
          ------------------------------------------------- */}
      <div className="bg-white min-h-screen flex flex-col">

        {/* -------------------------------------------------
            Global header – appears on EVERY page.
            ------------------------------------------------- */}
        <Header />

        {/* -------------------------------------------------
            Main content – the *only* place we constrain width.
            All pages are rendered inside this container, so they
            automatically share the same max‑width as the header.
            ------------------------------------------------- */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>

        {/* -------------------------------------------------
            Footer – also inside the same centered container.
            ------------------------------------------------- */}
        <Footer />
      </div>
    </Router>
  );
}
