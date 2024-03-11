import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Back/Login";
import Navbar from "./components/Back/Navbar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/nav" element={<Navbar />} />
    </Routes>
  );
};

export default App;
