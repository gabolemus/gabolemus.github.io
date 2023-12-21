import { useEffect } from "react";
import Card from "../Card/Card";
import { projects } from "./projects";
import "./Projects.scss";

const Projects = () => {
  useEffect(() => {
    const navbarHeight = document.querySelector(".navbar")?.clientHeight;
    const footerHeight = document.querySelector(".footer")?.clientHeight;
    const main = document.querySelector(".main") as HTMLElement | null;

    if (footerHeight && main) {
      main.style.minHeight = `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`;
    }
  }, []);

  return (
    <div className="projects__container">
      {projects.map((project, idx) => (
        <Card key={idx} title={project.title}>
          <h3>{project.subtitle}</h3>
          <p>{project.description}</p>
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noreferrer"
              className="card__link"
            >
              Project Link
            </a>
          )}
          <br />
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="card__link"
            >
              Github Link
            </a>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Projects;
