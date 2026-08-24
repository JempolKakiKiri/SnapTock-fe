import { ArrowLeft, BellRing, UserRound } from "lucide-react";

const ScanHeader = () => {
  return (
    <header className="flex h-18 items-center justify-between border-b-2 bg-white px-6">
      <a
        href="/dashboard"
        className="text-base font-inter-500 text-black flex items-center gap-2 hover:scale-105 duration-200"
      >
        <ArrowLeft size={20} />
        Extranction Result
      </a>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="text-black transition-colors hover:text-gray-900 cursor-pointer"
        >
          <BellRing
            width={32}
            height={32}
            className="hover:scale-105 transition-transform duration-200"
          />
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 cursor-pointer"
        >
          <UserRound
            width={32}
            height={32}
            className="hover:scale-105 transition-transform duration-200"
          />
        </button>
      </div>
    </header>
  );
};

export default ScanHeader;
