import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <div className="column left-column">
        <Introduction />
        <NavBar />
      </div>
      <div className="column right-column">
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;

export const Introduction = () => {
  return (
    <div className="introduction-wrapper">
      <h1 className="highlight-text">Darjusch Schrand</h1>
      <h3 className="highlight-text">Software Engineer</h3>
      <p>
        I build pixel-perfect, engaging, and accessible digital experiences.
      </p>
    </div>
  );
};

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            <span className="nav-bar-item">ABOUT</span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => handleClick("experience")}
          >
            <span className="nav-bar-item">EXPERIENCE</span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => handleClick("projects")}
          >
            <span className="nav-bar-item">PROJECTS</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export const About = () => {
  return (
    <div className="about">
      <p>Based in Berlin.</p>
      <p>
        When i am not coding i like: Running, Fitness, Climbing, Swimming,
        Reading, Cooking, and Traveling.
      </p>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="projects">
      <div className="project">
        <h3>Project 1</h3>
        <p>Project description</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Project description</p>
      </div>
    </div>
  );
};
