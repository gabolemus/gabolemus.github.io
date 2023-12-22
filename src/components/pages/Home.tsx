import MainInfoCard from "../molecules/MainInfoCard/MainInfoCard";
import SkillsCard from "../molecules/SkillsCard/SkillsCard";
import StudiesCard from "../molecules/StudiesCard/StudiesCard";
import MainPage from "../templates/MainPage";

/** Component for the Home page */
const Home = () => {
  return (
    <MainPage>
      <MainInfoCard />
      <SkillsCard />
      <StudiesCard />
    </MainPage>
  );
};

export default Home;
