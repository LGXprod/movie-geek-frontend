import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Recommendations from "./pages/recommendations";
import "./styles/styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recommendation-quiz" element={<Quiz />} />
      <Route path="/recommendations" element={<Recommendations />} />
    </Routes>
  );
}

export default App;
