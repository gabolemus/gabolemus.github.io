import Card from "../Card/Card";
import CardColumn from "../CardColumn/CardColumn";
import SkillsRow from "../SkillsRow/SkillsRow";
import { skills } from "./Skills";

const SkillsCard = () => {
  return (
    <Card title="Skills">
      {/* <Card title="Habilidades Técnicas"> */}
      <CardColumn>
        {skills.map((skill) => (
          <SkillsRow
            key={skill.title}
            title={skill.title}
            description={skill.description}
            iconName={skill.iconName}
          />
        ))}
      </CardColumn>
    </Card>
  );
};

export default SkillsCard;
