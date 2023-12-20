import Card from "../Card/Card";
import WorkExpBlock from "../WorkExpBlock/WorkExpBlock";
import { workExps } from "./WorkExps";
import "./WorkExpCard.scss";

const WorkExpCard = () => {
  return (
    <Card title="Work Experience">
      <div className="experiences">
        {workExps.slice(0).reverse().map((workExp, idx) => (
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
