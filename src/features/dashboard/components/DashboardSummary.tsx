import Card from "../../../shared/components/ui/Card.tsx";
import { summaryData } from "../data/data.ts";
import type { LucideIcon } from "lucide-react";

interface SummaryProps {
  id: number;
  Icon: LucideIcon;
  className: string;
  title: string;
  amount: number;
  desc: string;
}

const DashboardSummary = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {summaryData.map(
        ({ id, Icon, className, title, amount, desc }: SummaryProps) => (
          <Card
            key={id}
            className="flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-200"
          >
            <div className={`${className} flex items-center gap-4`}>
              <Icon width={36} height={36} />
              <h1 className="font-inter-600 text-[28px]">{title}</h1>
            </div>
            <div className="flex flex-col leading-none">
              <p className="font-inter-600 text-[40px]">{amount}</p>
              <p className="font-inter-500 text-[24px]">{desc}</p>
            </div>
          </Card>
        ),
      )}
    </div>
  );
};

export default DashboardSummary;
