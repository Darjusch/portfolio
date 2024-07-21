import React, { useEffect, useState } from "react";
import "./App.css";
import projectsData from "./projects.json";
import workExperienceData from "./work-expirience.json";
function App() {
  return (
    // TODO Margins / Paddings should be consisten -> Multiples of each other
    // Texts need to be updated -> About me and for Projects / Work expirience !
    // TODO align the card with the about text
    // We need a Icon
    // We need to deploy
    // We need Imprint

    // TODO EMBED TryHackMe, HackTheBox, PortSwigger, and other badges that was a lot of time and effort
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
        <Techstack />
        <WorkExperience />
        <Projects />
        <ImpressumButton />
      </div>
    </div>
  );
}

export default App;

export const ImpressumButton = () => {
  return (
    <Link to="/impressum">
      <span className="nav-bar-item">IMPRESSUM</span>
    </Link>
  );
};

export const ViewResumeButton = () => {
  return (
    <a
      className="view-resume-button"
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="View Full Résumé (opens in a new tab)"
    >
      <span className="view-resume-button-text">
        View Full Résumé
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="view-resume-icon"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
    </a>
  );
};

export const Introduction = () => {
  return (
    <div className="introduction-wrapper">
      <h1 className="highlight-text">Darjusch Schrand</h1>
      <h3 className="highlight-text">Software Engineer</h3>
      <p>
        I create thoughtful, engaging, and accessible digital experiences.{" "}
        <br /> Based in Berlin.
      </p>
    </div>
  );
};

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleScroll = () => {
    // Throttle or debounce function can be used here to limit execution frequency
    window.requestAnimationFrame(() => {
      const sections = document.querySelectorAll("div[id]");
      let current: string | null = "";

      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - 60; // Adjust based on your desired offset
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          current = section.getAttribute("id");
        }
      });

      // Update the state only if the section has changed
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]); // Dependency array includes `activeSection` to update only when it changes

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

export const Techstack = () => {
  const techstack = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Java",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Solidity",
  ];
  return (
    <div className="techstack">
      My techstack
      <div className="card-technologies">
        {techstack.map((tech, techIndex) => (
          <li key={techIndex} className="technology-item">
            {tech}
          </li>
        ))}
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div id="about" className="about">
      <p>
        Back in 2016, my journey began at a small startup where I started
        building my first websites using only HTML and CSS. I fell in love with
        the process and enrolled in university to learn more about it.
      </p>
      <p>
        Since then, I have worked on various projects in my free time, at
        university, at work, and for clients. I have explored many different
        fields and gained valuable experience in cybersecurity, blockchain, and
        hardware development. However, my specialty is Fullstack Development.
      </p>
      <p>
        When I'm not coding, I'm probably planning my life (I'm a big fan of
        planning and making lists), traveling, cooking, or engaged in some
        sportive activity.
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
      <ViewResumeButton />
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
