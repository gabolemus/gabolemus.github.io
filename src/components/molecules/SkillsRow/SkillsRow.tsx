import "./SkillsRow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

/** Object that maps icon names to icon components */
export const projectIcons = {
  /** Web development icon */
  globe: faGlobe,
  /** Backend development icon */
  server: faServer,
  /** Docker icon */
  docker: faDocker,
  /** Dev frameworks icon */
  frameworks: faGear,
  /** Programming languages icon */
  languages: faCode,
};

/** Props for SkillsRow component */
export interface SkillsRowProps {
  /** Icon to render */
  iconName: keyof typeof projectIcons;
  /** Title to render */
  title: string;
  /** Description to render */
  description: string;
}

const SkillsRow = ({ iconName, title, description }: SkillsRowProps) => {
  return (
    <div className="skills__row">
      <FontAwesomeIcon className="skills__icon" icon={projectIcons[iconName]} />
      <div className="skills__info">
        <h4 className="skills__title">{title}</h4>
        <p className="skills__description">{description}</p>
      </div>
    </div>
  );
};

export default SkillsRow;
