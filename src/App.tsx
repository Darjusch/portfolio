import React, { useState } from "react";
import "./App.css";
import projectsData from "./projects.json";
import workExperienceData from "./work-expirience.json";
import educationData from "./education.json";
function App() {
  return (
    // TODO EMBED TryHackMe, HackTheBox, PortSwigger, and other badges that was a lot of time and effort
    // TODO Margins / Paddings should be consisten -> Multiples of each other
    // https://tryhackme.com/p/PrinceOfPersia
    // <img src="https://tryhackme-badges.s3.amazonaws.com/PrinceOfPersia.png" alt="TryHackMe">
    // either of this works
    // <script src="https://tryhackme.com/badge/84515"></script>

    <div className="portfolio">
      <div className="column left-column">
        <Introduction />
        <NavBar />
        <SocialMedia />
      </div>
      <div className="column right-column">
        <About />
        <Education />
        <WorkExperience />
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
    <div id="about" className="about">
      <p>Based in Berlin.</p>
      <p>
        I build Stuff since i am 12 years old. I am a Software Engineer with a
        passion for building interactive and engaging web applications. I am
        experienced in JavaScript, TypeScript, React, Node.js, and GraphQL. I am
        always looking to learn new technologies and improve my skills. I am a
        strong advocate for accessibility and performance. I believe that the
        web should be accessible to everyone, regardless of their abilities or
        the devices they use. When i am not coding i like: Running, Fitness,
        Climbing, Swimming, Reading, Cooking, and Traveling.
      </p>
    </div>
  );
};

export const Projects = () => {
  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="projects" className="projects">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="card"
          onClick={() => handleCardClick(project.url)}
        >
          <div className="image-wrapper">
            {project.image && <img src={project.image} alt={project.title} />}
          </div>
          <div className="card-body">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
            <ul className="card-technologies">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="technology-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export const WorkExperience = () => {
  return (
    <div id="experience" className="work-expirience">
      {workExperienceData.map((project, index) => (
        <div key={index} className="card">
          <div className="date-wrapper">
            <p>{project.time_period}</p>
          </div>
          <div className="card-body">
            <h3 className="card-title">
              {project.position} - {project.company}
            </h3>
            <p className="card-description">{project.description}</p>
            <ul className="card-technologies">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="technology-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Education = () => {
  const { education } = educationData;
  return (
    <div className="education">
      <div className="card">
        <div className="card-body">
          <h4>
            {education.university.name} - {education.university.grade}
          </h4>
          <p>
            {education.school.name} - {education.school.grade}
          </p>
        </div>
      </div>
    </div>
  );
};

export const SocialMedia = () => {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="social">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        onClick={() => handleSocialClick("https://github.com/Darjusch")}
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        onClick={() =>
          handleSocialClick(
            "https://www.linkedin.com/in/darjusch-schrand-892541153/"
          )
        }
      >
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
      </svg>
    </div>
  );
};
