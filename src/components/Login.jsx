import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login button clicked");
    console.log("Email:", email);
    console.log("Password:", password);
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side */}
        <div className="login-welcome">
          <Link to="/" className="login-logo">
            Quizzy<span>.</span>
          </Link>

          <div className="welcome-content">
            <span className="welcome-label">WELCOME BACK</span>

            <h1>
              Study Smarter,
              <span> Not Harder.</span>
            </h1>

            <p>
              Continue your learning journey with Quizzy. Your next achievement
              is just one step away!
            </p>

            <div className="welcome-decoration">
              <div className="decoration-circle circle-one"></div>
              <div className="decoration-circle circle-two"></div>
              <div className="decoration-card">
                <span>✦</span>
                <h3>Keep Learning!</h3>
                <p>Small steps lead to big achievements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="login-form-side">
          <Link to="/" className="back-home">
            ← Back to Home
          </Link>

          <div className="login-form-wrapper">
            <div className="form-heading">
              <span>YOUR LEARNING SPACE</span>
              <h2>Welcome Back!</h2>
              <p>Log in to continue your learning journey.</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="login-input-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="login-input-group">
                <label htmlFor="password">Password</label>

                <div className="password-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <button
                    type="button"
                    className="show-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="login-options">
                <label className="remember-option">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    setMessage("Password recovery will be added later.")
                  }
                >
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className="login-submit">
                Login
              </button>

              {message && (
                <p className="login-message" role="status">
                  {message}
                </p>
              )}
            </form>

            <div className="signup-text">
              Don't have an account?
              <Link to="/register"> Create Account</Link>
            </div>

            <div className="login-divider">
              <span>Study smarter, not harder.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
