import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Demo from "./Page/Demo";
import CheckOrder from "./Page/CheckOrder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/check-order" element={<CheckOrder />} />
      <Route path="*" element={<div>Halaman tidak ditemukan</div>} />
    </Routes>
  );
}

export default App;
