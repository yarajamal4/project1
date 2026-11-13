import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
