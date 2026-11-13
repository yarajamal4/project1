import React from "react";
import { Link, useParams } from "react-router-dom";
import "./SubjectDetails.css";

function SubjectDetails() {
  const { id } = useParams();

  const subjects = [
    {
      id: 1,
      name: "Web Programming",
      category: "Programming",
      description:
        "Learn how to build modern websites using HTML, CSS, JavaScript and React.",
      progress: 75,
      quizzes: 8,
      flashcards: 24,
      icon: "💻",
      color: "purple",
      topics: [
        "HTML Fundamentals",
        "CSS Styling",
        "JavaScript Basics",
        "React Components",
      ],
    },
    {
      id: 2,
      name: "Computer Science",
      category: "Computer Science",
      description:
        "Explore programming concepts, computer systems and problem solving.",
      progress: 60,
      quizzes: 6,
      flashcards: 18,
      icon: "🖥️",
      color: "blue",
      topics: [
        "Computer Fundamentals",
        "Memory Organization",
        "Computer Architecture",
        "Operating Systems",
      ],
    },
    {
      id: 3,
      name: "Database Systems",
      category: "Database",
      description:
        "Understand database design, SQL queries and data management.",
      progress: 45,
      quizzes: 5,
      flashcards: 20,
      icon: "🗄️",
      color: "pink",
      topics: [
        "Database Concepts",
        "ER Diagrams",
        "SQL Queries",
        "Normalization",
      ],
    },
    {
      id: 4,
      name: "Mobile Applications",
      category: "Programming",
      description:
        "Learn the basics of designing and developing mobile applications.",
      progress: 30,
      quizzes: 7,
      flashcards: 16,
      icon: "📱",
      color: "orange",
      topics: ["Mobile UI Design", "Flutter Basics", "Widgets", "Navigation"],
    },
    {
      id: 5,
      name: "Machine Learning",
      category: "Computer Science",
      description:
        "Discover machine learning concepts, data analysis and models.",
      progress: 20,
      quizzes: 4,
      flashcards: 12,
      icon: "🤖",
      color: "green",
      topics: [
        "Introduction to ML",
        "Data Preparation",
        "Supervised Learning",
        "Model Evaluation",
      ],
    },
  ];

  const subject = subjects.find((item) => item.id === Number(id));

  if (!subject) {
    return (
      <div className="subject-not-found">
        <h2>Subject Not Found</h2>
        <p>The subject you are looking for does not exist.</p>
        <Link to="/subjects">Back to My Subjects</Link>
      </div>
    );
  }

  return (
    <div className="subject-details-page">
      {/* Sidebar */}
      <aside className="details-sidebar">
        <Link to="/" className="details-logo">
          Quizzy<span>.</span>
        </Link>

        <p className="details-menu-label">MENU</p>

        <nav className="details-nav">
          <Link to="/dashboard" className="details-nav-link">
            <span>▦</span> Dashboard
          </Link>

          <Link to="/subjects" className="details-nav-link active">
            <span>📚</span> My Subjects
          </Link>

          <Link to="/quizzes" className="details-nav-link">
            <span>✎</span> Quizzes
          </Link>

          <Link to="/flashcards" className="details-nav-link">
            <span>▤</span> Flashcards
          </Link>

          <Link to="/summaries" className="details-nav-link">
            <span>📄</span> Summaries
          </Link>

          <Link to="/progress" className="details-nav-link">
            <span>▥</span> My Progress
          </Link>
        </nav>

        <div className="details-sidebar-bottom">
          <Link to="/login" className="details-nav-link logout-link">
            <span>↪</span> Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="subject-details-main">
        {/* Header */}
        <header className="details-header">
          <div>
            <p className="details-eyebrow">YOUR LEARNING SPACE</p>
            <h1>Subject Details</h1>
          </div>

          <Link to="/subjects" className="back-subjects">
            ← Back to Subjects
          </Link>
        </header>

        {/* Subject Banner */}
        <section className="subject-banner">
          <div className={`details-subject-icon ${subject.color}`}>
            {subject.icon}
          </div>

          <div className="subject-banner-info">
            <span className="details-category">{subject.category}</span>

            <h2>{subject.name}</h2>

            <p>{subject.description}</p>
          </div>
        </section>

        {/* Statistics */}
        <section className="details-stats">
          <div className="details-stat-card">
            <span>📝</span>
            <div>
              <h3>{subject.quizzes}</h3>
              <p>Available Quizzes</p>
            </div>
          </div>

          <div className="details-stat-card">
            <span>▤</span>
            <div>
              <h3>{subject.flashcards}</h3>
              <p>Flashcards</p>
            </div>
          </div>

          <div className="details-stat-card">
            <span>🎯</span>
            <div>
              <h3>{subject.progress}%</h3>
              <p>Learning Progress</p>
            </div>
          </div>
        </section>

        {/* Progress */}
        <section className="details-progress-card">
          <div className="details-section-heading">
            <div>
              <h2>Your Progress</h2>
              <p>Keep going! You are making progress.</p>
            </div>

            <strong>{subject.progress}%</strong>
          </div>

          <div className="details-progress-track">
            <div
              className={`details-progress-fill ${subject.color}`}
              style={{ width: `${subject.progress}%` }}
            ></div>
          </div>
        </section>

        {/* Topics */}
        <section className="details-topics-section">
          <div className="details-title">
            <h2>What You'll Learn</h2>
            <p>Explore the main topics of this subject.</p>
          </div>

          <div className="topics-grid">
            {subject.topics.map((topic, index) => (
              <div className="topic-item" key={index}>
                <span className="topic-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{topic}</span>

                <span className="topic-check">✓</span>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Resources */}
        <section className="details-resources-section">
          <div className="details-title">
            <h2>Learning Resources</h2>
            <p>Choose how you want to study this subject.</p>
          </div>

          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon quiz-resource">✎</div>
              <h3>Practice Quizzes</h3>
              <p>Test your knowledge and improve your understanding.</p>
              <span>{subject.quizzes} Quizzes Available</span>

              <Link to="/quizzes" className="resource-btn">
                Explore Quizzes →
              </Link>
            </div>

            <div className="resource-card">
              <div className="resource-icon flash-resource">▤</div>
              <h3>Flashcards</h3>
              <p>Review important concepts with interactive flashcards.</p>
              <span>{subject.flashcards} Flashcards Available</span>

              <Link to="/flashcards" className="resource-btn">
                Study Flashcards →
              </Link>
            </div>
          </div>
        </section>

        <footer className="details-footer">
          © 2026 Quizzy. Study Smarter, Not Harder.
        </footer>
      </main>
    </div>
  );
}

export default SubjectDetails;
