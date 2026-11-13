import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleRegister(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    if (formData.password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      setMessageType("error");
      return;
    }

    if (!agree) {
      setMessage("Please accept the Terms and Conditions.");
      setMessageType("error");
      return;
    }

    setMessage("Please check your information and try again.");
    setMessageType("error");
  }

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Left Welcome Section */}
        <div className="register-welcome">
          <Link to="/" className="register-logo">
            Quizzy<span>.</span>
          </Link>

          <div className="register-welcome-content">
            <span className="register-label">START YOUR JOURNEY</span>

            <h1>
              Learn More,
              <span> Achieve More.</span>
            </h1>

            <p>
              Create your Quizzy account and discover a smarter way to study,
              practice, and achieve your goals.
            </p>

            <div className="register-decoration">
              <div className="register-circle circle-one"></div>
              <div className="register-circle circle-two"></div>

              <div className="register-decoration-card">
                <span>✦</span>
                <h3>Your Journey Starts Here!</h3>
                <p>
                  Organize your learning and make every study session count.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Register Form */}
        <div className="register-form-side">
          <Link to="/" className="register-back-home">
            ← Back to Home
          </Link>

          <div className="register-form-wrapper">
            <div className="register-heading">
              <span>CREATE YOUR ACCOUNT</span>
              <h2>Join Quizzy!</h2>
              <p>Fill in your details to get started.</p>
            </div>

            <form onSubmit={handleRegister}>
              {/* First and Last Name */}
              <div className="register-name-row">
                <div className="register-input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="register-input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="register-input-group">
                <label htmlFor="registerEmail">Email Address</label>
                <input
                  type="email"
                  id="registerEmail"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="register-input-group">
                <label htmlFor="registerPassword">Password</label>

                <div className="register-password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="registerPassword"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength="8"
                    required
                  />

                  <button
                    type="button"
                    className="register-show-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="register-input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>

                <div className="register-password-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="register-show-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="register-terms">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />

                <span>
                  I agree to the <a href="#terms">Terms & Conditions</a>
                </span>
              </label>

              {/* Submit */}
              <button type="submit" className="register-submit">
                Create Account
              </button>

              {message && (
                <p className={`register-message ${messageType}`} role="status">
                  {message}
                </p>
              )}
            </form>

            <div className="register-login-text">
              Already have an account?
              <Link to="/login"> Login</Link>
            </div>

            <div className="register-divider">
              <span>Study smarter, not harder.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
