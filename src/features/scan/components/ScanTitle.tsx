import {ScanBox} from "lucide-react";

const ScanTitle = () => {
  return (
    <div className="flex flex-col p-6">
      <h1 className="font-inter-500 text-[48px]">Dashboard</h1>
      <div className="w-full flex justify-between">
        <p className="text-base font-inter-400">
          Monitor Your Stock and Restock What You Need
        </p>
        <button className="flex items-center gap-3 text-white bg-green-500 px-3 py-2 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300">
          <ScanBox width={20} height={20} />
          <p className="text-base font-inter-400">Scan New Note</p>
        </button>
      </div>
    </div>
  );
};

export default ScanTitle;