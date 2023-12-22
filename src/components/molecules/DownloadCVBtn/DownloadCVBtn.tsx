import { useTranslation } from "react-i18next";
import Button, { ButtonType } from "../../atoms/Button/Button";

const DownloadCVBtn = () => {
  const { t } = useTranslation();
  const downloadCVLoc = t("cv", { returnObjects: true }) as {
    button: string;
    path: string;
    name: string;
  };

  /** Callback to download the CV */
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = downloadCVLoc.path;
    link.download = downloadCVLoc.name;
    link.click();
  };

  return (
    <Button
      text={downloadCVLoc.button}
      type={ButtonType.PRIMARY}
      onClick={downloadCV}
    />
  );
};

export default DownloadCVBtn;
