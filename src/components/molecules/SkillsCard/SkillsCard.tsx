import { useTranslation } from "react-i18next";
import Card from "../Card/Card";
import CardColumn from "../CardColumn/CardColumn";
import SkillsRow from "../SkillsRow/SkillsRow";
import { SkillsRowProps } from "../SkillsRow/SkillsRow";

const SkillsCard = () => {
  const { t } = useTranslation();
  const skillsLoc = t("skills", { returnObjects: true }) as {
    title: string;
    skills: SkillsRowProps[];
  };

  return (
    <Card title={skillsLoc.title}>
      <CardColumn>
        {skillsLoc.skills.map((skill) => (
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
