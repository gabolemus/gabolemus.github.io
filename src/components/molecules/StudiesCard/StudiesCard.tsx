import Card from "../Card/Card";
import EducationBlock from "../EducationBlock/EducationBlock";
import { workExps } from "./Studies";
import "./StudiesCard.scss";

const StudiesCard = () => {
  return (
    <Card title="Education">
      {/* <Card title="Formación Académica"> */}
      <div className="experiences">
        {workExps
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
