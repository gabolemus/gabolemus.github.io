import "./CardColumn.scss";

/** Props for CardColumn component */
export interface CardColumnProps {
  /** Children to render inside CardColumn */
  children: React.ReactNode;
}

const CardColumn = ({ children }: CardColumnProps) => {
  return <div className="card-col">{children}</div>;
};

export default CardColumn;
