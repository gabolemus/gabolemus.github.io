import Card from "../Card/Card";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.scss";

const Projects = () => {
  const { t } = useTranslation();
  const projectsLoc = t("projects", { returnObjects: true }) as {
    projectLinkName: string;
    githubLinkName: string;
    projects: {
      title: string;
      subtitle: string;
      description: string;
      githubLink: string;
      projectLink: string;
    }[];
  };

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
      {projectsLoc.projects.map((project, idx) => (
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
              {projectsLoc.projectLinkName}
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
              {projectsLoc.githubLinkName}
            </a>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Projects;
