import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import SubjectDetails from "./pages/SubjectDetails";
import Quizzes from "./pages/Quizzes";
import QuizAttempt from "./pages/QuizAttempt";
import QuizResults from "./pages/QuizResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/subjects/:id" element={<SubjectDetails />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/quiz/:id" element={<QuizAttempt />} />
      <Route path="/quiz-results" element={<QuizResults   />} />
    </Routes>
  );
}

export default App;
