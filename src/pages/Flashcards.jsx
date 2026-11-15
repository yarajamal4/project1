import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Flashcards.css";

function Flashcards() {
  const [flippedCards, setFlippedCards] = useState({});
  const [selectedSubject, setSelectedSubject] = useState("All");

  const flashcards = [
    {
      id: 1,
      subject: "Web Programming",
      question: "What does HTML stand for?",
      answer: "HyperText Markup Language.",
    },
    {
      id: 2,
      subject: "Web Programming",
      question: "What is CSS used for?",
      answer: "CSS is used to style and design web pages.",
    },
    {
      id: 3,
      subject: "Computer Science",
      question: "What is an Algorithm?",
      answer: "A step-by-step procedure used to solve a problem.",
    },
    {
      id: 4,
      subject: "Database Systems",
      question: "What is a Primary Key?",
      answer: "A field that uniquely identifies each record in a table.",
    },
    {
      id: 5,
      subject: "Mobile Applications",
      question: "What is Flutter?",
      answer: "A framework used to build cross-platform applications.",
    },
    {
      id: 6,
      subject: "Machine Learning",
      question: "What is Machine Learning?",
      answer: "A field of AI that allows computers to learn from data.",
    },
  ];

  const filteredCards =
    selectedSubject === "All"
      ? flashcards
      : flashcards.filter((card) => card.subject === selectedSubject);

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setFlippedCards({});
  };

  return (
    <div className="flashcards-page">
      <aside className="flashcards-sidebar">
        <h2 className="sidebar-logo">
          Quizzy<span>.</span>
        </h2>

        <nav className="sidebar-menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/subjects">My Subjects</Link>
          <Link to="/quizzes">Quizzes</Link>
          <Link to="/flashcards" className="active">
            Flashcards
          </Link>
          <Link to="/progress">Progress</Link>
        </nav>

        <Link to="/" className="sidebar-logout">
          Log Out
        </Link>
      </aside>

      <main className="flashcards-main">
        <header className="flashcards-header">
          <div>
            <h1>Flashcards</h1>
            <p>Review and memorize your lessons easily.</p>
          </div>

          <Link to="/subjects" className="browse-subjects-btn">
            Browse Subjects
          </Link>
        </header>

        <section className="flashcards-info">
          <div>
            <h3>{flashcards.length}</h3>
            <p>Total Flashcards</p>
          </div>

          <div>
            <h3>6</h3>
            <p>Available Subjects</p>
          </div>

          <div>
            <h3>Learn</h3>
            <p>At Your Own Pace</p>
          </div>
        </section>

        <div className="study-header">
  <div>
    <h2>Choose a Flashcard</h2>
    <p>Select any card to reveal its answer.</p>
  </div>

  <select
    value={selectedSubject}
    onChange={handleSubjectChange}
  >
    <option value="All">All Subjects</option>
    <option value="Web Programming">Web Programming</option>
    <option value="Computer Science">Computer Science</option>
    <option value="Database Systems">Database Systems</option>
    <option value="Mobile Applications">Mobile Applications</option>
    <option value="Machine Learning">Machine Learning</option>
  </select>
</div>

<div className="flashcards-grid">
  {filteredCards.length > 0 ? (
    filteredCards.map((card) => (
      <div
        className={`flashcard-item ${
          flippedCards[card.id] ? "flipped" : ""
        }`}
        key={card.id}
        onClick={() =>
          setFlippedCards((prev) => ({
            ...prev,
            [card.id]: !prev[card.id],
          }))
        }
      >
        <span className="flashcard-label">
          {flippedCards[card.id] ? "ANSWER" : "QUESTION"}
        </span>

        <h3>
          {flippedCards[card.id]
            ? card.answer
            : card.question}
        </h3>

        <p>
          Click to {flippedCards[card.id]
            ? "see question"
            : "reveal answer"}
        </p>
      </div>
    ))
  ) : (
    <p className="no-flashcards">
      No flashcards available.
    </p>
  )}
</div>
      </main>
    </div>
  );
}

export default Flashcards;
