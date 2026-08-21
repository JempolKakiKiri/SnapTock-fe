import {BellRing, UserRound} from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="flex h-18 items-center justify-between border-b-2 bg-white px-6">
          <span className="text-base font-inter-500 text-black">
            Overview / Today
          </span>

      <div className="flex items-center gap-12">
        <input
          type="text"
          placeholder="Search inventory..."
          className="h-10 w-60 max-w-60 rounded-xl border border-gray-300 px-3 text-xs outline-none placeholder:text-gray-400 focus:border-green-500"
        />
        <div className="flex gap-4">
          <button
            type="button"
            className="text-black transition-colors hover:text-gray-900 cursor-pointer"
          >
            <BellRing width={32} height={32} className="hover:scale-105 transition-transform duration-200"/>
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
          >
            <UserRound width={32} height={32} className="hover:scale-105 transition-transform duration-200"/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;