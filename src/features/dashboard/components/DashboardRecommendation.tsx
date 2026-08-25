import { Loader2, PackageCheck, RefreshCw, Truck } from "lucide-react";

import Card from "../../../shared/components/ui/Card.tsx";
import { useRecommendations } from "../../../repository/inventory/query.ts";
import { useRefreshRecommendations } from "../../../repository/inventory/action.ts";
import {
  getRunoutLabel,
  getUrgencyLevel,
} from "../../../repository/inventory/dto.ts";
import { urgencyStyle } from "../types/UrgencyStyles.ts";

const DashboardRecommendation = () => {
  const { data, isPending, isError, error } = useRecommendations();
  const refresh = useRefreshRecommendations();

  return (
    <section className="flex flex-col p-6 gap-4">
      <div>
        <div className="flex items-end justify-between">
          <h1 className="font-inter-500 text-[32px]">Action Required</h1>

          <button
            type="button"
            onClick={() => refresh.mutate()}
            disabled={refresh.isPending}
            className="flex cursor-pointer items-center gap-1.5 pb-2 text-sm font-inter-500 text-gray-600 transition-colors hover:text-green-700 disabled:opacity-60"
          >
            <RefreshCw
              size={15}
              className={refresh.isPending ? "animate-spin" : undefined}
            />
            Hitung ulang
          </button>
        </div>
        <div className="border-t-2 rounded-full" />
      </div>

      {isPending && (
        <Card className="flex items-center justify-center gap-2 py-16 text-base text-gray-500">
          <Loader2 size={18} className="animate-spin" />
          Menghitung perkiraan stok…
        </Card>
      )}

      {isError && (
        <Card className="py-10 text-center">
          <p className="font-inter-500 text-base text-red-600">
            {error.message}
          </p>

          <button
            type="button"
            onClick={() => refresh.mutate()}
            className="mt-4 cursor-pointer rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-green-700"
          >
            Coba lagi
          </button>
        </Card>
      )}

      {data?.length === 0 && (
        <Card className="py-16 text-center">
          <PackageCheck size={32} className="mx-auto text-green-700" />

          <p className="mt-3 font-inter-500 text-lg">Semua stok masih aman</p>

          <p className="mt-1 text-base text-gray-700">
            Pindai nota pembelian berikutnya untuk memperbarui stok.
          </p>
        </Card>
      )}

      <div className="grid grid-cols-1 gap-4">
        {data?.map((item) => {
          const { Icon, bgClassName, colorClassName, title } =
            urgencyStyle[getUrgencyLevel(item.runout_days)];

          return (
            <Card
              key={item.product_id}
              className="flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-13 w-13 items-center justify-center rounded-full ${bgClassName}`}
                  >
                    <Icon size={36} className={colorClassName} />
                  </div>

                  <h2 className="font-inter-500 text-[32px] uppercase">
                    {title}
                  </h2>
                </div>

                <span className="font-inter-500 text-base text-gray-700">
                  {item.current_stock} Pcs left
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div className="flex flex-col gap-1 font-inter-500 text-base text-gray-700">
                  <p>
                    Product Name&nbsp; : &nbsp;
                    <span className="text-gray-900">{item.name}</span>
                  </p>

                  <p>
                    Runs Out&nbsp; : &nbsp;
                    <span className="text-gray-900">
                      {getRunoutLabel(item.runout_days)}
                    </span>
                  </p>

                  <p>
                    Recommended Restock:{" "}
                    <span className="text-gray-900">
                      {item.recommended_restock_qty} pcs
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
          );
        })}
      </div>
    </section>
  );
};

export default DashboardRecommendation;
