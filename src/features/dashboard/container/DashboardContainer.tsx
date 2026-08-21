import DashboardHeader from "../components/DashboardHeader.tsx";
import DashboardTitle from "../components/DashboardTitle.tsx";
import DashboardSummary from "../components/DashboardSummary.tsx";

const DashboardContainer = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardTitle />
      <DashboardSummary />
    </>
  );
};

export default DashboardContainer;
