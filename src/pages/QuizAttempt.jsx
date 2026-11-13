import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./QuizAttempt.css";

function QuizAttempt() {
  const { id } = useParams();
  const navigate = useNavigate();

  const quizQuestions = {
    1: {
      title: "HTML & CSS Fundamentals",
      subject: "Web Programming",
      questions: [
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Management Language",
            "Home Tool Markup Language",
          ],
          answer: 0,
        },
        {
          question: "Which HTML tag is used to create a link?",
          options: ["<link>", "<a>", "<href>", "<url>"],
          answer: 1,
        },
        {
          question: "Which CSS property changes the text color?",
          options: ["font-style", "background", "color", "text-size"],
          answer: 2,
        },
      ],
    },

    2: {
      title: "JavaScript Basics",
      subject: "Web Programming",
      questions: [
        {
          question: "Which keyword declares a variable in JavaScript?",
          options: ["var", "int", "string", "define"],
          answer: 0,
        },
        {
          question: "Which symbol is used for strict equality?",
          options: ["=", "==", "===", "!="],
          answer: 2,
        },
        {
          question: "Which method displays a message in the console?",
          options: ["alert()", "console.log()", "print()", "display()"],
          answer: 1,
        },
      ],
    },

    3: {
      title: "Computer Architecture",
      subject: "Computer Science",
      questions: [
        {
          question: "What does CPU stand for?",
          options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Control Processing User",
          ],
          answer: 0,
        },
        {
          question: "Which register holds the address of the next instruction?",
          options: ["IR", "MAR", "PC", "MBR"],
          answer: 2,
        },
        {
          question: "What are the main stages of the instruction cycle?",
          options: [
            "Read, Write, Save",
            "Fetch, Decode, Execute",
            "Input, Output, Store",
            "Start, Run, Stop",
          ],
          answer: 1,
        },
      ],
    },

    4: {
      title: "SQL Fundamentals",
      subject: "Database Systems",
      questions: [
        {
          question: "Which SQL command retrieves data from a table?",
          options: ["GET", "OPEN", "SELECT", "EXTRACT"],
          answer: 2,
        },
        {
          question: "Which clause is used to filter records?",
          options: ["ORDER BY", "WHERE", "GROUP BY", "FROM"],
          answer: 1,
        },
        {
          question: "Which command adds a new record?",
          options: ["INSERT INTO", "ADD ROW", "UPDATE", "CREATE"],
          answer: 0,
        },
      ],
    },

    5: {
      title: "Flutter Basics",
      subject: "Mobile Applications",
      questions: [
        {
          question: "Which language is used with Flutter?",
          options: ["Java", "Python", "Dart", "C++"],
          answer: 2,
        },
        {
          question: "Which widget is used for a vertical layout?",
          options: ["Row", "Column", "Stack", "Container"],
          answer: 1,
        },
        {
          question: "Which function is the entry point of a Flutter app?",
          options: ["main()", "start()", "run()", "build()"],
          answer: 0,
        },
      ],
    },

    6: {
      title: "Introduction to Machine Learning",
      subject: "Machine Learning",
      questions: [
        {
          question: "What is Machine Learning?",
          options: [
            "A type of computer hardware",
            "A way for computers to learn from data",
            "A programming language",
            "A database system",
          ],
          answer: 1,
        },
        {
          question: "Which is an example of supervised learning?",
          options: [
            "Clustering",
            "Classification using labeled data",
            "Random data storage",
            "Data compression",
          ],
          answer: 1,
        },
        {
          question: "What is a dataset?",
          options: [
            "A collection of data",
            "A programming command",
            "A computer device",
            "A type of network",
          ],
          answer: 0,
        },
      ],
    },
  };

  const quiz = quizQuestions[id];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  if (!quiz) {
    return (
      <div className="quiz-not-found">
        <h2>Quiz Not Found</h2>
        <Link to="/quizzes">Back to Quizzes</Link>
      </div>
    );
  }

  const questions = quiz.questions;
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length !== questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const score = questions.reduce((total, item, index) => {
      return total + (selectedAnswers[index] === item.answer ? 1 : 0);
    }, 0);

    navigate("/quiz-results", {
      state: {
        quizTitle: quiz.title,
        subject: quiz.subject,
        score,
        total: questions.length,
      },
    });
  };

  return (
    <div className="attempt-page">
      <header className="attempt-header">
        <Link to="/quizzes" className="back-link">
          ← Back to Quizzes
        </Link>

        <div className="attempt-brand">Quizzy</div>

        <span className="question-counter">
          {currentQuestion + 1} / {questions.length}
        </span>
      </header>

      <main className="attempt-container">
        <div className="attempt-heading">
          <span className="attempt-subject">{quiz.subject}</span>
          <h1>{quiz.title}</h1>
          <p>Read each question carefully and choose the correct answer.</p>
        </div>

        <div className="attempt-progress">
          <div className="progress-info">
            <span>Quiz Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <section className="question-card">
          <div className="question-number">
            QUESTION {currentQuestion + 1}
          </div>

          <h2>{question.question}</h2>

          <div className="answer-options">
            {question.options.map((option, index) => (
              <button
                key={index}
                type="button"
                className={`answer-option ${
                  selectedAnswers[currentQuestion] === index
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleAnswer(index)}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="attempt-navigation">
          <button
            className="previous-btn"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          <span className="answered-count">
            {Object.keys(selectedAnswers).length} of {questions.length} answered
          </span>

          {currentQuestion === questions.length - 1 ? (
            <button className="submit-btn" onClick={handleSubmit}>
              Submit Quiz
            </button>
          ) : (
            <button className="next-btn" onClick={handleNext}>
              Next Question →
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default QuizAttempt;