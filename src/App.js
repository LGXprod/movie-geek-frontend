import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import "./styles/styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recommendation-quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;
