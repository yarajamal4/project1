import React from "react";
import { Link } from "react-router-dom";
import "./Progress.css";

function Progress() {
  const subjects = [
    {
      id: 1,
      name: "Web Programming",
      progress: 85,
      completed: 17,
      total: 20,
    },
    {
      id: 2,
      name: "Computer Science",
      progress: 70,
      completed: 14,
      total: 20,
    },
    {
      id: 3,
      name: "Database Systems",
      progress: 60,
      completed: 12,
      total: 20,
    },
    {
      id: 4,
      name: "Mobile Applications",
      progress: 90,
      completed: 18,
      total: 20,
    },
    {
      id: 5,
      name: "Machine Learning",
      progress: 45,
      completed: 9,
      total: 20,
    },
  ];

  const activities = [
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      subject: "Web Programming",
      score: "90%",
      date: "Nov 14, 2026",
    },
    {
      id: 2,
      title: "Database Fundamentals",
      subject: "Database Systems",
      score: "85%",
      date: "Nov 12, 2026",
    },
    {
      id: 3,
      title: "Flutter Basics",
      subject: "Mobile Applications",
      score: "95%",
      date: "Nov 10, 2026",
    },
  ];

  return (
    <div className="progress-page">
      <aside className="progress-sidebar">
        <h2 className="sidebar-logo">
          Quizzy<span>.</span>
        </h2>

        <nav className="sidebar-menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/subjects">My Subjects</Link>
          <Link to="/quizzes">Quizzes</Link>
          <Link to="/flashcards">Flashcards</Link>
          <Link to="/progress" className="active">
            Progress
          </Link>
        </nav>

        <Link to="/" className="sidebar-logout">
          Log Out
        </Link>
      </aside>

      <main className="progress-main">
        <header className="progress-header">
          <div>
            <h1>My Progress</h1>
            <p>Track your learning journey and achievements.</p>
          </div>

          <Link to="/quizzes" className="progress-quiz-btn">
            Take a Quiz
          </Link>
        </header>

        <section className="progress-stats">
          <div className="progress-stat-card">
            <div className="stat-icon">📝</div>
            <h2>24</h2>
            <p>Quizzes Completed</p>
          </div>

          <div className="progress-stat-card">
            <div className="stat-icon">🎯</div>
            <h2>86%</h2>
            <p>Average Score</p>
          </div>

          <div className="progress-stat-card">
            <div className="stat-icon">⏱️</div>
            <h2>18.5</h2>
            <p>Study Hours</p>
          </div>

          <div className="progress-stat-card">
            <div className="stat-icon">📚</div>
            <h2>5</h2>
            <p>Subjects Studied</p>
          </div>
        </section>

        <section className="overall-progress">
          <div className="section-heading">
            <div>
              <h2>Overall Progress</h2>
              <p>Your learning progress across all subjects.</p>
            </div>

            <span className="overall-percentage">72%</span>
          </div>

          <div className="overall-progress-track">
            <div className="overall-progress-fill"></div>
          </div>

          <p className="overall-note">
            Keep going! You're making great progress.
          </p>
        </section>

        <section className="subject-progress">
          <div className="section-heading">
            <div>
              <h2>Progress by Subject</h2>
              <p>See how much you have completed in each subject.</p>
            </div>
          </div>

          <div className="subject-progress-list">
            {subjects.map((subject) => (
              <div className="subject-progress-item" key={subject.id}>
                <div className="subject-progress-info">
                  <h3>{subject.name}</h3>

                  <span>{subject.progress}%</span>
                </div>

                <div className="subject-progress-track">
                  <div
                    className="subject-progress-fill"
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>

                <p>
                  {subject.completed} of {subject.total} learning activities
                  completed
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="recent-progress">
          <div className="section-heading">
            <div>
              <h2>Recent Quiz Results</h2>
              <p>Your latest quiz performance.</p>
            </div>

            <Link to="/quizzes">View Quizzes</Link>
          </div>

          <div className="progress-table-wrapper">
            <table className="progress-table">
              <thead>
                <tr>
                  <th>Quiz</th>
                  <th>Subject</th>
                  <th>Score</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id}>
                    <td>{activity.title}</td>
                    <td>{activity.subject}</td>
                    <td>
                      <span className="score-badge">{activity.score}</span>
                    </td>
                    <td>{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Progress;
