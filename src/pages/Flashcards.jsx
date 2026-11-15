import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Flashcards.css";

function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
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

  const currentCard = filteredCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) =>
      prev === filteredCards.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) =>
      prev === 0 ? filteredCards.length - 1 : prev - 1,
    );
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setCurrentIndex(0);
    setIsFlipped(false);
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

        <section className="flashcards-study">
          <div className="study-header">
            <div>
              <h2>Study Cards</h2>
              <p>Click on the card to reveal the answer.</p>
            </div>

            <select value={selectedSubject} onChange={handleSubjectChange}>
              <option value="All">All Subjects</option>
              <option value="Web Programming">Web Programming</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Database Systems">Database Systems</option>
              <option value="Mobile Applications">Mobile Applications</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
          </div>

          {filteredCards.length > 0 ? (
            <>
              <p className="card-counter">
                Card {currentIndex + 1} of {filteredCards.length}
              </p>

              <div
                className={`flashcard ${isFlipped ? "flipped" : ""}`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <span className="flashcard-label">
                  {isFlipped ? "ANSWER" : "QUESTION"}
                </span>

                <h2>{isFlipped ? currentCard.answer : currentCard.question}</h2>

                <p>Click to {isFlipped ? "see question" : "reveal answer"}</p>
              </div>

              <div className="flashcard-controls">
                <button onClick={handlePrevious}>Previous</button>

                <button
                  className="flip-btn"
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  Flip Card
                </button>

                <button onClick={handleNext}>Next</button>
              </div>
            </>
          ) : (
            <p>No flashcards available.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Flashcards;
