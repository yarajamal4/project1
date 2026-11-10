import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/" className="logo">
        Quizzy<span>.</span>
          </Link>
          <div className="nav-links">
              <Link to="/Home">Home</Link>
              <Link to="/Features">Features</Link>
              <Link to="/About">About</Link>
              <Link to="/contact">Contact</Link>
          </div>
          <div className="nav-buttons">
              <Link to="/Home" className="login-button"> Login </Link>
              <Link to="/Home" className="signup-button"> Get Start </Link>
              
          </div>
      </nav>
    
  );
}
export default Navbar;
