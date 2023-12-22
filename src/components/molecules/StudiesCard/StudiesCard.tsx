import { useTranslation } from "react-i18next";
import Card from "../Card/Card";
import EducationBlock, { EducationBlockProps } from "../EducationBlock/EducationBlock";
import "./StudiesCard.scss";

const StudiesCard = () => {
  const { t } = useTranslation();
  const studiesLoc = t("education", { returnObjects: true }) as {
    title: string;
    education: EducationBlockProps[];
  };

  return (
    <Card title={studiesLoc.title}>
      <div className="experiences">
        {studiesLoc.education
          .slice(0)
          .reverse()
          .map((workExp, idx) => (
            <EducationBlock
              key={idx}
              title={workExp.title}
              company={workExp.company}
              date={workExp.date}
              description={workExp.description}
            />
          ))}
      </div>
    </Card>
  );
};

export default StudiesCard;
