import "./WorkExpBlock.scss";

/** Interface for WorkExpBlock props */
export interface WorkExpBlockProps {
  /** Role title */
  title: string;
  /** Company name */
  company: string;
  /** Time period */
  date: string;
  /** Work description */
  description: string;
  /** Work tasks */
  tasks: string[];
}

/** Work experience block component */
const WorkExpBlock = ({
  title,
  company,
  date,
  description,
  tasks,
}: WorkExpBlockProps) => {
  return (
    <div className="experience">
      <div className="timeline-divider"></div>
      <div className="experience__description">
        <h3 className="experience__description__title">{title}</h3>
        <h4 className="experience__description__company">{company}</h4>
        <h5 className="experience__description__date">{date}</h5>
        <p className="experience__description__details">{description}</p>
        <p className="experience__description__tasks--title">Tasks:</p>
        <ul className="experience__description__tasks">
          {tasks.map((task) => (
            <li
              key={task}
              className="experience__description__tasks__task"
            >
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExpBlock;
