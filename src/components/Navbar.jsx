import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Quizzy<span>.</span>
      </Link>

      <div className="nav-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="signup-btn">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
