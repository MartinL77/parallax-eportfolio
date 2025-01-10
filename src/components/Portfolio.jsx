import React from "react";

const projectCard = [
  {
    image: import.meta.env.BASE_URL + "/assets/Library.PNG",
    title: "E-commerce Library",
    subtitle: "HTML, CSS, JavaScript",
    description: `
      <ul>
        <li>Developed a library of books using HTML, CSS, and JS.</li>
        <li>Designed as a platform for purchasing books.</li>
        <li>Added sorting by price or rating.</li>
        <li>Dynamically rendered books using JS.</li>
        <li>Implemented a loading screen with a spinning icon.</li>
      </ul>
    `,
    github: "https://github.com/MartinL77/ecommerce-library",
    live: "https://martinl77.github.io/ecommerce-library/",
  },
  {
    image: import.meta.env.BASE_URL + "/assets/windows-desktop-image.PNG",
    title: "Windows Desktop Clone",
    subtitle: "Vite, TypeScript, React",
    description: `
      <ul>
        <li>Recreated the Windows 7 home screen desktop layout using Vite, React, and TypeScript.</li>
        <li>Designed a functional taskbar with an interactive start menu.</li>
        <li>Ensured a responsive layout that mimics the Windows 7 desktop experience on different screen sizes.</li>
      </ul>
    `,
    github: "https://github.com/MartinL77/windows-desktop",
    live: "https://martinl77.github.io/windows-desktop/",
  },
  {
    image: import.meta.env.BASE_URL + "/assets/adn-project.PNG",
    title: "ADN Auto Solutions",
    subtitle: "Vite, TypeScript, React",
    description: `
      <ul>
        <li>Developed a sleek and modern website for a local mechanic business.</li>
        <li>Features a dynamic hero section with a video playing in the background.</li>
        <li>Implemented responsive design for both desktop and mobile devices.</li>
      </ul>
    `,
    github: "https://github.com/MartinL77/adn-auto-solutions",
    live: "https://martinl77.github.io/adn-auto-solutions",
  },
  {
    image: import.meta.env.BASE_URL + "/assets/Eportfolio.PNG",
    title: "E-portfolio",
    subtitle: "HTML, CSS, JavaScript",
    description: `
      <ul>
        <li>An online portfolio that showcases my projects and tells a bit about me.</li>
        <li>Implemented a pop-up modal for contact information.</li>
        <li>Added a dark mode toggle feature.</li>
        <li>Integrated fancy background symbols that move with the mouse.</li>
        <li>Sending an email is fully functional with EmailJS.</li>
      </ul>
    `,
    github: "https://github.com/MartinL77/MartinL77.github.io",
    live: "https://martinl77.github.io",
  },
];

const Portfolio = () => {
  return (
    <div className="content-wrapper">
      <h1>Projects</h1>
      <ul className="project-list">
        {projectCard.map((project, index) => (
          <li className="project" key={index}>
            <div className="project-wrapper">
              <img
                src={project.image}
                className="project-img"
                alt={project.title}
              />
              <div className="project-wrapper-bg"></div>
              <div className="project-description">
                <h3 className="project-description-title">{project.title}</h3>
                <h4 className="project-description-subtitle">{project.subtitle}</h4>
                  <p
                    className="project-description-para"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                <div className="project-description-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-description-link"
                  >
                    <img src={import.meta.env.BASE_URL + "/assets/github.png"} alt="github" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-description-link"
                  >
                    <img src={import.meta.env.BASE_URL + "/assets/link.png"} alt="link" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
