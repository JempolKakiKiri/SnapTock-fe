import DashboardHeader from "../components/DashboardHeader.tsx";
import DashboardTitle from "../components/DashboardTitle.tsx";
import DashboardSummary from "../components/DashboardSummary.tsx";
import DashboardRecommendation from "../components/DashboardRecommendation.tsx";

const DashboardContainer = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardTitle />
      <DashboardSummary />
      <DashboardRecommendation />
    </>
  );
};

export default DashboardContainer;
