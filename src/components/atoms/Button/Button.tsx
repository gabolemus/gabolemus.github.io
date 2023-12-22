import "./Button.scss";

/** Enum for the button types */
export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  DANGER = "danger",
  WARNING = "warning",
  SUCCESS = "success",
  INFO = "info",
}

/** Props for the Button component */
interface ButtonProps {
  /** The text to display on the button */
  text: string;
  /** The type of button */
  type: ButtonType;
  /** Callback function to call when the button is clicked */
  onClick?: () => void;
}

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

