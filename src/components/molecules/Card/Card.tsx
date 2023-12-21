import "./Card.scss";

/** Props for the Card component */
interface CardProps {
  /** The title of the card */
  title: string;
  /** Content of the card */
  children: React.ReactNode;
  /** Footer of the card */
  footer?: React.ReactNode;
}

/** A card component */
const Card = ({ title, children, footer }: CardProps) => {
  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <div className="card__content">{children}</div>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
}

export default Card;
