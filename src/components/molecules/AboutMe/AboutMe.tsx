import "./AboutMe.scss";
import MainInfoCard from "../MainInfoCard/MainInfoCard";
import SkillsCard from "../SkillsCard/SkillsCard";
import StudiesCard from "../StudiesCard/StudiesCard";

/** Component for the AboutMe page */
const AboutMe = () => {
  return (
    <>
      <MainInfoCard />
      <SkillsCard />
      <StudiesCard />
    </>
  );
};

export default AboutMe;
