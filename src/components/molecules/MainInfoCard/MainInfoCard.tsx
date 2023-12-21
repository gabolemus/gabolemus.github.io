import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Card from "../Card/Card";
import CardColumn from "../CardColumn/CardColumn";

const MainInfoCard = () => {
  return (
    <Card title="Gabriel Lemus">
      <CardColumn>
        <a href="https://github.com/gabolemus" target="_blank" rel="noreferrer">
          <img
            src="https://avatars.githubusercontent.com/u/49124491?v=4"
            alt="GitHub profile picture"
            className="about-me__image"
          />
        </a>
        <p className="about-me__description">Systems Engineering and Computer Science Student</p>
        {/* <p className="about-me__description">Estudiante de Ingeniería en Sistemas y Ciencias de la Computación</p> */}
        <div className="about-me__icons">
          <a href="mailto:gabriel.lemusp@gmail.com">
            <FontAwesomeIcon icon={icon({ name: "envelope" })} />
          </a>
          <a
            href="https://github.com/gabolemus"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={icon({ name: "github", style: "brands" })} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-lemus-pacheco/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={icon({ name: "linkedin", style: "brands" })}
            />
          </a>
        </div>
      </CardColumn>
    </Card>
  );
};

export default MainInfoCard;
