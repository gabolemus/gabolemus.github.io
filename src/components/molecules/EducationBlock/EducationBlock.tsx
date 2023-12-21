import "./EducationBlock.scss";

/** Interface for WorkExpBlock props */
export interface EducationBlockProps {
  /** Role title */
  title: string;
  /** Company name */
  company: string;
  /** Time period */
  date: string;
  /** Work description */
  description: string;
}

/** Work experience block component */
const EducationBlock = ({
  title,
  company,
  date,
  description,
}: EducationBlockProps) => {
  return (
    <div className="experience">
      <div className="timeline-divider"></div>
      <div className="experience__description">
        <h3 className="experience__description__title">{title}</h3>
        <h4 className="experience__description__company">{company}</h4>
        <h5 className="experience__description__date">{date}</h5>
        <p className="experience__description__details">{description}</p>
      </div>
    </div>
  );
};

export default EducationBlock;
