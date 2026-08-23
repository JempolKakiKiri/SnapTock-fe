import DashboardHeader from "../components/DashboardHeader.tsx";
import DashboardTitle from "../components/DashboardTitle.tsx";
import DashboardRecommendation from "../components/DashboardRecommendation.tsx";

const DashboardContainer = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardTitle />
      <DashboardRecommendation />
    </>
  );
};

export default DashboardContainer;
