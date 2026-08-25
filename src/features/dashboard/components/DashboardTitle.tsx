import { ScanLine} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardTitle = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-1 p-4 md:p-6">
      <h1 className="font-inter-500 text-3xl sm:text-4xl lg:text-[48px]">
        Dashboard
      </h1>

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-inter-400 text-sm sm:text-base">
          Monitor Your Stock and Restock What You Need
        </p>

        <button
          type="button"
          onClick={() => navigate("/scan")}
          className="flex w-full shrink-0 cursor-pointer items-center justify-center gap-3 rounded-xl bg-green-500 px-3 py-2.5 text-white transition-transform duration-300 hover:scale-105 sm:w-auto"
        >
          <ScanLine size={20} />
          <span className="font-inter-400 text-base">Scan New Note</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardTitle;
