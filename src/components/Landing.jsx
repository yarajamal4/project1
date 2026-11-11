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

          <p>
            Make your learning journey easier with Quizzy. Practice quizzes,
            review flashcards, and explore summaries all in one place.
          </p>

          <div className="hero-buttons">
            <a href="/register" className="primary-btn">
              Get Started
            </a>

            <a href="#features" className="secondary-btn">
              Explore Features
            </a>
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

          <div className="floating-card">✨ Smart Learning</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section" id="features">
        <div className="section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Everything You Need to Study Better</h2>
          <p>Simple tools to make studying more effective and enjoyable.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Practice Quizzes</h3>
            <p>
              Test your knowledge with interactive quizzes based on your
              subjects and topics.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗂️</div>
            <h3>Smart Flashcards</h3>
            <p>
              Remember important concepts using simple question and answer
              cards.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Study Summaries</h3>
            <p>
              Review important information through organized and easy-to-read
              summaries.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track Progress</h3>
            <p>
              Follow your quiz results and see how your learning improves over
              time.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works section">
        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Start Learning in 3 Simple Steps</h2>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Choose Your Subject</h3>
            <p>Select the subject and topic you want to study.</p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Practice and Review</h3>
            <p>
              Use quizzes, flashcards, and summaries to improve your knowledge.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Track Your Progress</h3>
            <p>Check your results and discover where you need more practice.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section" id="about">
        <div className="about-content">
          <span>ABOUT QUIZZY</span>

          <h2>
            Learning Should Be
            <span> Simple and Effective.</span>
          </h2>

          <p>
            Quizzy is a smart study platform designed to help students organize
            their learning, practice their knowledge, and review important
            concepts in one place.
          </p>

          <a href="/register" className="primary-btn">
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section" id="contact">
        <div className="section-heading">
          <span>CONTACT US</span>
          <h2>Have Questions?</h2>
          <p>We'd love to hear from you. Feel free to get in touch.</p>
        </div>

        <a href="mailto:hello@quizzy.com" className="primary-btn">
          Send Us an Email
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Link to="/" className="logo">
          Quizzy<span>.</span>
        </Link>

        <p>Study smarter, not harder.</p>

        <p className="copyright">© 2026 Quizzy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
