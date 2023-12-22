import Card from "../Card/Card";
import WorkExpBlock, { WorkExpBlockProps } from "../WorkExpBlock/WorkExpBlock";
import { useTranslation } from "react-i18next";
import "./WorkExpCard.scss";

const WorkExpCard = () => {
  const { t } = useTranslation();
  const workExpLoc = t("workExp", { returnObjects: true }) as {
    title: string;
    experiences: WorkExpBlockProps[];
  };

  return (
    <Card title={workExpLoc.title}>
      <div className="experiences">
        {workExpLoc.experiences
          .slice(0)
          .reverse()
          .map((workExp, idx) => (
            <WorkExpBlock
              key={idx}
              title={workExp.title}
              company={workExp.company}
              date={workExp.date}
              description={workExp.description}
              tasks={workExp.tasks}
            />
          ))}
      </div>
    </Card>
  );
};

export default WorkExpCard;
