import React from "react";
import Navbar from "../components/Navbar";
import "../components/Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-label">Your Smart Learning Companion</span>

          <h1>
            Study Smarter,
            <span> Not Harder.</span>
          </h1>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Get Started
            </Link>

            <Link to="/features" className="secondary-btn">
              Explore Features
            </Link>
          </div>

          <div className="hero-note">
            <span>✓</span> Learn at your own pace
            <span>✓</span> Track your progress
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle"></div>

          <div className="study-card">
            <div className="study-card-header">
              <span>Today's Study</span>
              <span className="card-icon">✦</span>
            </div>

            <h3>Keep Learning!</h3>
            <p>You're doing great. Keep going!</p>

            <div className="progress-info">
              <span>Weekly Progress</span>
              <strong>75%</strong>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <div className="mini-stats">
              <div>
                <strong>12</strong>
                <span>Quizzes</span>
              </div>

              <div>
                <strong>8</strong>
                <span>Topics</span>
              </div>

              <div>
                <strong>5</strong>
                <span>Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section" id="contact">
        <div className="section-heading">
          <span>CONTACT US</span>
          <h2>Have Questions?</h2>
        </div>

        <a href="mailto:quizzysupport@gmail.com" className="primary-btn">
          Send Us an Email
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Link to="/" className="logo">
          Quizzy<span>.</span>
        </Link>

        <Link to="/register">Create Account</Link>

        <p>Study smarter, not harder.</p>

        <p className="copyright">© 2026 Quizzy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
