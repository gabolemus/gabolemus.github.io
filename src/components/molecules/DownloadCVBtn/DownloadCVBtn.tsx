import Button, { ButtonType } from "../../atoms/Button/Button";

const DownloadCVBtn = () => {
  /** Callback to download the CV */
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV - Gabriel Lemus - EN.pdf";
    link.download = "CV - Gabriel Lemus - EN.pdf";
    // link.href = "/CV - Gabriel Lemus - ES.pdf";
    // link.download = "CV - Gabriel Lemus - ES.pdf";
    link.click();
  };

  return (
    <Button text="Download CV" type={ButtonType.PRIMARY} onClick={downloadCV} />
  );
};

export default DownloadCVBtn;
