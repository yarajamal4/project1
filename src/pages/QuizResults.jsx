import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./QuizResults.css";

function QuizResults() {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state;

  if (!result) {
    return (
      <div className="result-not-found">
        <h2>No Quiz Results Found</h2>
        <p>Please complete a quiz first.</p>
        <Link to="/quizzes">Back to Quizzes</Link>
      </div>
    );
  }

  const { quizTitle, subject, score, total } = result;

  const percentage = Math.round((score / total) * 100);
  const incorrect = total - score;

  let message = "Keep practicing! You can do better.";

  if (percentage >= 90) {
    message = "Excellent work! You did an amazing job.";
  } else if (percentage >= 70) {
    message = "Great job! You have a good understanding.";
  } else if (percentage >= 50) {
    message = "Good effort! Keep improving your skills.";
  }

  const handleTryAgain = () => {
    const quizId = {
      "HTML & CSS Fundamentals": 1,
      "JavaScript Basics": 2,
      "Computer Architecture": 3,
      "SQL Fundamentals": 4,
      "Flutter Basics": 5,
      "Introduction to Machine Learning": 6,
    };

    navigate(`/quiz/${quizId[quizTitle]}`);
  };

  return (
    <div className="results-page">
      <header className="results-header">
        <Link to="/dashboard" className="results-logo">
          Quizzy
        </Link>

        <Link to="/quizzes" className="results-back">
          Back to Quizzes
        </Link>
      </header>

      <main className="results-container">
        <div className="results-icon">✓</div>

        <span className="results-label">QUIZ COMPLETED</span>

        <h1>Quiz Results</h1>
        <p className="results-subtitle">{quizTitle}</p>

        <section className="score-card">
          <p>Your Final Score</p>

          <div className="score-circle">
            <div>
              <strong>{percentage}%</strong>
              <span>Score</span>
            </div>
          </div>

          <h2>{message}</h2>
          <p className="score-description">
            You answered {score} out of {total} questions correctly.
          </p>
        </section>

        <section className="result-stats">
          <div className="result-stat correct-stat">
            <span className="stat-symbol">✓</span>
            <strong>{score}</strong>
            <p>Correct Answers</p>
          </div>

          <div className="result-stat incorrect-stat">
            <span className="stat-symbol">✕</span>
            <strong>{incorrect}</strong>
            <p>Incorrect Answers</p>
          </div>

          <div className="result-stat total-stat">
            <span className="stat-symbol">≡</span>
            <strong>{total}</strong>
            <p>Total Questions</p>
          </div>
        </section>

        <div className="result-actions">
          <button className="try-again-btn" onClick={handleTryAgain}>
            Try Again
          </button>

          <Link to="/quizzes" className="all-quizzes-btn">
            Explore More Quizzes
          </Link>
        </div>

        <p className="results-footer">Keep learning, keep growing!</p>
      </main>
    </div>
  );
}

export default QuizResults;
