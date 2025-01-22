import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import EducationAndExperience from "./pages/Education-and-Experience";
import Projects from "./pages/Projects";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Education-and-Experience" element={<EducationAndExperience />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;