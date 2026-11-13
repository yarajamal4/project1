import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Quizzes.css";

function Quizzes() {
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const quizzes = [
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      subject: "Web Programming",
      questions: 10,
      duration: 15,
      difficulty: "Easy",
      icon: "🌐",
      color: "purple",
      status: "Available",
    },
    {
      id: 2,
      title: "JavaScript Basics",
      subject: "Web Programming",
      questions: 15,
      duration: 20,
      difficulty: "Medium",
      icon: "💻",
      color: "blue",
      status: "Available",
    },
    {
      id: 3,
      title: "Computer Architecture",
      subject: "Computer Science",
      questions: 12,
      duration: 20,
      difficulty: "Medium",
      icon: "🖥️",
      color: "pink",
      status: "Available",
    },
    {
      id: 4,
      title: "SQL Fundamentals",
      subject: "Database Systems",
      questions: 10,
      duration: 15,
      difficulty: "Easy",
      icon: "🗄️",
      color: "orange",
      status: "Available",
    },
    {
      id: 5,
      title: "Flutter Basics",
      subject: "Mobile Applications",
      questions: 15,
      duration: 25,
      difficulty: "Hard",
      icon: "📱",
      color: "green",
      status: "Available",
    },
    {
      id: 6,
      title: "Introduction to Machine Learning",
      subject: "Machine Learning",
      questions: 10,
      duration: 15,
      difficulty: "Medium",
      icon: "🤖",
      color: "purple",
      status: "Available",
    },
  ];

  const subjects = [
    "All",
    "Web Programming",
    "Computer Science",
    "Database Systems",
    "Mobile Applications",
    "Machine Learning",
  ];

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch =
      quiz.title.toLowerCase().includes(search.toLowerCase()) ||
      quiz.subject.toLowerCase().includes(search.toLowerCase());

    const matchesSubject =
      selectedSubject === "All" || quiz.subject === selectedSubject;

    return matchesSearch && matchesSubject;
  });

  return (
    <div className="quizzes-page">
      {/* Sidebar */}
      <aside className="quizzes-sidebar">
        <Link to="/" className="quizzes-logo">
          Quizzy<span>.</span>
        </Link>

        <p className="quizzes-menu-label">MENU</p>

        <nav className="quizzes-nav">
          <Link to="/dashboard" className="quizzes-nav-link">
            <span>▦</span> Dashboard
          </Link>

          <Link to="/subjects" className="quizzes-nav-link">
            <span>📚</span> My Subjects
          </Link>

          <Link to="/quizzes" className="quizzes-nav-link active">
            <span>✎</span> Quizzes
          </Link>

          <Link to="/flashcards" className="quizzes-nav-link">
            <span>▤</span> Flashcards
          </Link>

          <Link to="/summaries" className="quizzes-nav-link">
            <span>📄</span> Summaries
          </Link>

          <Link to="/progress" className="quizzes-nav-link">
            <span>▥</span> My Progress
          </Link>
        </nav>

        <div className="quizzes-sidebar-bottom">
          <Link to="/login" className="quizzes-nav-link logout-link">
            <span>↪</span> Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="quizzes-main">
        {/* Header */}
        <header className="quizzes-header">
          <div>
            <p className="quizzes-eyebrow">TEST YOUR KNOWLEDGE</p>
            <h1>Quizzes</h1>
            <p className="quizzes-header-text">
              Challenge yourself and track your learning journey.
            </p>
          </div>

          <Link to="/dashboard" className="quizzes-back">
            ← Dashboard
          </Link>
        </header>

        {/* Statistics */}
        <section className="quizzes-stats">
          <div className="quiz-stat-card">
            <span className="quiz-stat-icon purple">📝</span>
            <div>
              <h3>{quizzes.length}</h3>
              <p>Total Quizzes</p>
            </div>
          </div>

          <div className="quiz-stat-card">
            <span className="quiz-stat-icon green">✓</span>
            <div>
              <h3>0</h3>
              <p>Completed</p>
            </div>
          </div>

          <div className="quiz-stat-card">
            <span className="quiz-stat-icon orange">⏳</span>
            <div>
              <h3>{quizzes.length}</h3>
              <p>Available</p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="quizzes-controls">
          <div className="quizzes-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search quizzes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject === "All" ? "All Subjects" : subject}
              </option>
            ))}
          </select>
        </section>

        {/* Quiz List */}
        <section className="quizzes-list-section">
          <div className="quizzes-list-heading">
            <div>
              <h2>Available Quizzes</h2>
              <p>{filteredQuizzes.length} quizzes found</p>
            </div>
          </div>

          {filteredQuizzes.length > 0 ? (
            <div className="quizzes-grid">
              {filteredQuizzes.map((quiz) => (
                <article className="quiz-card" key={quiz.id}>
                  <div className="quiz-card-top">
                    <div className={`quiz-card-icon ${quiz.color}`}>
                      {quiz.icon}
                    </div>

                    <span
                      className={`difficulty ${quiz.difficulty.toLowerCase()}`}
                    >
                      {quiz.difficulty}
                    </span>
                  </div>

                  <span className="quiz-subject">{quiz.subject}</span>

                  <h3>{quiz.title}</h3>

                  <div className="quiz-information">
                    <span>❓ {quiz.questions} Questions</span>
                    <span>⏱ {quiz.duration} Minutes</span>
                  </div>

                  <div className="quiz-card-bottom">
                    <span className="quiz-status">
                      <span></span> {quiz.status}
                    </span>

                    <Link to={`/quiz/${quiz.id}`} className="start-quiz-btn">
                      Start Quiz →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="quizzes-empty">
              <span>🔍</span>
              <h3>No quizzes found</h3>
              <p>Try searching for another quiz or subject.</p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedSubject("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        <footer className="quizzes-footer">
          © 2026 Quizzy. Study Smarter, Not Harder.
        </footer>
      </main>
    </div>
  );
}

export default Quizzes;
