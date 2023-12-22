import Card from "../Card/Card";
import CardColumn from "../CardColumn/CardColumn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useTranslation } from "react-i18next";

const MainInfoCard = () => {
  const { t } = useTranslation();

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
        <p className="about-me__description">{t("position")}</p>
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
