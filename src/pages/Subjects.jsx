import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Subjects.css";

function Subjects() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const subjects = [
    {
      id: 1,
      name: "Web Programming",
      category: "Programming",
      description: "Learn HTML, CSS, JavaScript and React.",
      quizzes: 8,
      flashcards: 24,
      progress: 75,
      icon: "💻",
      color: "purple",
    },
    {
      id: 2,
      name: "Computer Science",
      category: "Computer Science",
      description: "Explore programming concepts and problem solving.",
      quizzes: 6,
      flashcards: 18,
      progress: 60,
      icon: "🖥️",
      color: "blue",
    },
    {
      id: 3,
      name: "Database Systems",
      category: "Database",
      description: "Study SQL, database design and normalization.",
      quizzes: 5,
      flashcards: 20,
      progress: 45,
      icon: "🗄️",
      color: "pink",
    },
    {
      id: 4,
      name: "Mobile Applications",
      category: "Programming",
      description: "Explore mobile app development and interfaces.",
      quizzes: 7,
      flashcards: 16,
      progress: 30,
      icon: "📱",
      color: "orange",
    },
    {
      id: 5,
      name: "Machine Learning",
      category: "Computer Science",
      description: "Discover data, models and machine learning basics.",
      quizzes: 4,
      flashcards: 12,
      progress: 20,
      icon: "🤖",
      color: "green",
    },
  ];

  const filters = ["All", "Programming", "Computer Science", "Database"];

  const filteredSubjects = subjects.filter((subject) => {
    const matchesSearch = subject.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || subject.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="subjects-page">
      {/* Sidebar */}
      <aside className="subjects-sidebar">
        <Link to="/" className="subjects-logo">
          Quizzy<span>.</span>
        </Link>

        <p className="subjects-menu-label">MENU</p>

        <nav className="subjects-nav">
          <Link to="/dashboard" className="subjects-nav-link">
            <span>▦</span> Dashboard
          </Link>

          <Link to="/subjects" className="subjects-nav-link active">
            <span>📚</span> My Subjects
          </Link>

          <Link to="/quizzes" className="subjects-nav-link">
            <span>✎</span> Quizzes
          </Link>

          <Link to="/flashcards" className="subjects-nav-link">
            <span>▤</span> Flashcards
          </Link>

          <Link to="/summaries" className="subjects-nav-link">
            <span>📄</span> Summaries
          </Link>

          <Link to="/progress" className="subjects-nav-link">
            <span>▥</span> My Progress
          </Link>
        </nav>

        <div className="subjects-sidebar-bottom">
          <Link to="/login" className="subjects-nav-link logout-link">
            <span>↪</span> Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="subjects-main">
        {/* Header */}
        <header className="subjects-header">
          <div>
            <p className="subjects-eyebrow">YOUR LEARNING SPACE</p>
            <h1>My Subjects</h1>
            <p className="subjects-header-text">
              Explore your subjects and continue your learning journey.
            </p>
          </div>

          <Link to="/dashboard" className="back-dashboard">
            ← Dashboard
          </Link>
        </header>

        {/* Summary */}
        <section className="subjects-summary">
          <div>
            <span className="summary-icon">📚</span>
            <div>
              <h3>{subjects.length}</h3>
              <p>Total Subjects</p>
            </div>
          </div>

          <div>
            <span className="summary-icon">📝</span>
            <div>
              <h3>
                {subjects.reduce(
                  (total, subject) => total + subject.quizzes,
                  0,
                )}
              </h3>
              <p>Available Quizzes</p>
            </div>
          </div>

          <div>
            <span className="summary-icon">▤</span>
            <div>
              <h3>
                {subjects.reduce(
                  (total, subject) => total + subject.flashcards,
                  0,
                )}
              </h3>
              <p>Flashcards</p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="subjects-controls">
          <div className="subjects-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search for a subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="subjects-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter ? "filter-btn active" : "filter-btn"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Subjects Grid */}
        <section className="subjects-list-section">
          <div className="subjects-list-heading">
            <div>
              <h2>All Subjects</h2>
              <p>{filteredSubjects.length} subjects found</p>
            </div>
          </div>

          {filteredSubjects.length > 0 ? (
            <div className="subjects-cards-grid">
              {filteredSubjects.map((subject) => (
                <article className="subject-item-card" key={subject.id}>
                  <div className="subject-item-top">
                    <div className={`subject-item-icon ${subject.color}`}>
                      {subject.icon}
                    </div>

                    <span className="subject-category">{subject.category}</span>
                  </div>

                  <h3>{subject.name}</h3>
                  <p className="subject-description">{subject.description}</p>

                  <div className="subject-resources">
                    <span>📝 {subject.quizzes} Quizzes</span>
                    <span>▤ {subject.flashcards} Flashcards</span>
                  </div>

                  <div className="subject-progress-heading">
                    <span>Learning Progress</span>
                    <strong>{subject.progress}%</strong>
                  </div>

                  <div className="subject-progress-track">
                    <div
                      className={`subject-progress-fill ${subject.color}`}
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>

                  <Link
                    to={`/subjects/${subject.id}`}
                    className="open-subject-btn"
                  >
                    View Subject <span>→</span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="subjects-empty">
              <span>🔍</span>
              <h3>No subjects found</h3>
              <p>Try another search or choose a different category.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        <footer className="subjects-footer">
          © 2026 Quizzy. Study Smarter, Not Harder.
        </footer>
      </main>
    </div>
  );
}

export default Subjects;
