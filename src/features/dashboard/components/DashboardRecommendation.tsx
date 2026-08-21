import {ArrowRight, type LucideIcon, Truck} from "lucide-react";
import {reccomData} from "../data/data.ts";
import Card from "../../../shared/components/ui/Card.tsx";

interface ReccomProps {
  id: number;
  Icon: LucideIcon;
  bgClassName: string;
  colorClassName: string;
  title: string;
  product: string;
  runsout: string;
  stock: string;
  restock: string;
}

const DashboardRecommendation = () => {
  return (
    <section className="flex flex-col p-6 gap-4">
      <div>
        <div className="flex items-end justify-between">
          <h1 className="font-inter-500 text-[32px]">Action Required</h1>
          <a
            href="/"
            className="flex items-center font-inter-500 text-[20px] cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            View All <ArrowRight width={24} height={24} />
          </a>
        </div>
        <div className="border-t-2 rounded-full"/>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {reccomData.map(({id, Icon, bgClassName, colorClassName, title, product, runsout, stock, restock}: ReccomProps)=> (
            <Card
              key={id}
              className="flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-13 w-13 items-center justify-center rounded-full ${bgClassName}`}
                  >
                    <Icon
                      size={36}
                      className={colorClassName}
                    />
                  </div>

                  <h2 className="font-inter-500 text-[32px] uppercase">
                    {title}
                  </h2>
                </div>

                <span className="font-inter-500 text-base text-gray-700">
                  {stock} Pcs left
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div className="flex flex-col gap-1 font-inter-500 text-base text-gray-700">
                  <p>
                    Product Name&nbsp; : &nbsp;
                    <span className="text-gray-900">
                      {product}
                    </span>
                  </p>

                  <p>
                    Runs Out&nbsp; : &nbsp;
                    <span className="text-gray-900">
                      {runsout}
                    </span>
                  </p>

                  <p>
                    Recommended Restock:{" "}
                    <span className="text-gray-900">
                      {restock} pcs
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-green-700 cursor-pointer"
                >
                  <Truck size={18} />
                  Restock
                </button>
              </div>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default DashboardRecommendation;
