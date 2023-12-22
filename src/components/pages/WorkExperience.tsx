import DownloadCVBtn from "../molecules/DownloadCVBtn/DownloadCVBtn";
import WorkExpCard from "../molecules/WorkExpCard/WorkExpCard";
import MainPage from "../templates/MainPage";

/** Component for the page that displays my work experience */
const WorkExperience = () => {
  return (
    <MainPage>
      <DownloadCVBtn />
      <WorkExpCard />
    </MainPage>
  );
};

export default WorkExperience;
