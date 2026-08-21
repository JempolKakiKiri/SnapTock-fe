import {ArrowRight} from "lucide-react";

const DashboardRecommendation = () => {
  return (
    <section className="p-6">
      <div>
        <div className="flex items-end justify-between">
          <h1 className="font-inter-500 text-[32px]">Action Required</h1>
          <a href="/" className="flex items-center font-inter-500 text-[20px] cursor-pointer hover:scale-105 transition-transform duration-200">View All <ArrowRight width={24} height={24} /></a>
        </div>
        <div />
      </div>
      <div>

      </div>
    </section>
  );
};

export default DashboardRecommendation;