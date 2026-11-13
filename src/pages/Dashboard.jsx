import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const subjects = [
    {
      id: 1,
      name: "Web Programming",
      description: "HTML, CSS, JavaScript and React",
      progress: 75,
      color: "purple",
      icon: "💻",
    },
    {
      id: 2,
      name: "Computer Science",
      description: "Programming and problem solving",
      progress: 60,
      color: "blue",
      icon: "🖥️",
    },
    {
      id: 3,
      name: "Database Systems",
      description: "SQL and database concepts",
      progress: 45,
      color: "pink",
      icon: "🗄️",
    },
  ];

  const activities = [
    {
      id: 1,
      title: "Completed a Web Programming quiz",
      time: "Today",
      icon: "✓",
      color: "green",
    },
    {
      id: 2,
      title: "Reviewed Database flashcards",
      time: "Yesterday",
      icon: "▤",
      color: "purple",
    },
    {
      id: 3,
      title: "Studied Computer Science",
      time: "2 days ago",
      icon: "📚",
      color: "blue",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <Link to="/" className="dashboard-logo">
          Quizzy<span>.</span>
        </Link>

        <p className="sidebar-label">MENU</p>

        <nav className="sidebar-nav">
          <Link to="/dashboard" className="sidebar-link active">
            <span>▦</span> Dashboard
          </Link>

          <Link to="/subjects" className="sidebar-link">
            <span>📚</span> My Subjects
          </Link>

          <Link to="/quizzes" className="sidebar-link">
            <span>✎</span> Quizzes
          </Link>

          <Link to="/flashcards" className="sidebar-link">
            <span>▤</span> Flashcards
          </Link>

          <Link to="/summaries" className="sidebar-link">
            <span>📄</span> Summaries
          </Link>

          <Link to="/progress" className="sidebar-link">
            <span>▥</span> My Progress
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <div className="help-icon">?</div>
            <h4>Need Help?</h4>
            <p>We're here to help you learn better.</p>
            <Link to="/contact">Contact Us</Link>
          </div>

          <Link to="/login" className="sidebar-link logout-link">
            <span>↪</span> Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Bar */}
        <header className="dashboard-topbar">
          <div>
            <p className="dashboard-date">STUDENT WORKSPACE</p>
            <h2>Dashboard</h2>
          </div>

          <div className="dashboard-user">
            <div className="user-avatar">S</div>
            <div>
              <h4>Student</h4>
              <p>Welcome back!</p>
            </div>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-text">
            <p className="welcome-small">LET'S KEEP LEARNING</p>
            <h1>Welcome back, Student! 👋</h1>
            <p>
              Keep up the great work. Every small step brings you closer to your
              learning goals.
            </p>
            <Link to="/subjects" className="welcome-btn">
              Continue Learning <span>→</span>
            </Link>
          </div>

          <div className="welcome-illustration">
            <div className="welcome-circle">📚</div>
            <span className="floating-star star-one">✦</span>
            <span className="floating-star star-two">✧</span>
          </div>
        </section>

        {/* Statistics */}
        <section className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon purple-icon">📝</div>
            <div>
              <p>Total Quizzes</p>
              <h2>24</h2>
              <span>Quizzes completed</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green-icon">🎯</div>
            <div>
              <p>Average Score</p>
              <h2>86%</h2>
              <span>Great performance!</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange-icon">⏱</div>
            <div>
              <p>Study Hours</p>
              <h2>18.5</h2>
              <span>Hours this month</span>
            </div>
          </div>
        </section>

        {/* Subjects */}
        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <p className="section-subtitle">YOUR LEARNING SPACE</p>
              <h2>Continue Learning</h2>
            </div>

            <Link to="/subjects" className="view-all">
              View All →
            </Link>
          </div>

          <div className="subjects-grid">
            {subjects.map((subject) => (
              <div className="learning-card" key={subject.id}>
                <div className="subject-card-top">
                  <div className={`subject-icon ${subject.color}`}>
                    {subject.icon}
                  </div>
                  <span className="subject-percentage">
                    {subject.progress}%
                  </span>
                </div>

                <h3>{subject.name}</h3>
                <p>{subject.description}</p>

                <div className="progress-track">
                  <div
                    className={`progress-fill ${subject.color}`}
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>

                <Link to={`/subjects/${subject.id}`} className="subject-link">
                  Open Subject →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="dashboard-section activity-section">
          <div className="section-heading">
            <div>
              <p className="section-subtitle">YOUR LATEST UPDATES</p>
              <h2>Recent Activity</h2>
            </div>
          </div>

          <div className="activity-card">
            {activities.map((activity) => (
              <div className="activity-item" key={activity.id}>
                <div className={`activity-icon ${activity.color}`}>
                  {activity.icon}
                </div>

                <div className="activity-info">
                  <h4>{activity.title}</h4>
                  <p>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="dashboard-footer">
          <p>© 2026 Quizzy. Study Smarter, Not Harder.</p>
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
