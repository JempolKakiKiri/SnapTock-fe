import { ArrowLeft } from "lucide-react";

const ScanHeader = () => {
  return (
    <header className="flex h-18 items-center justify-between border-b-2 bg-white px-6">
      <a
        href="/dashboard"
        className="pl-12 md:pl-0 text-base font-inter-500 text-black flex items-center gap-2 hover:scale-105 duration-200"
      >
        <ArrowLeft size={20} />
        Extranction Result
      </a>
    </header>
  );
};

export default ScanHeader;
