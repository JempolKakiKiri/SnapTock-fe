import { Loader2, PackageCheck, RefreshCw } from "lucide-react";

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
    <section className="flex flex-col gap-4 p-4 md:p-6">
      <div>
        <div className="flex items-end justify-between gap-3">
          <h1 className="font-inter-500 text-2xl sm:text-3xl lg:text-[32px]">
            Action Required
          </h1>

          <button
            type="button"
            onClick={() => refresh.mutate()}
            disabled={refresh.isPending}
            className="flex shrink-0 cursor-pointer items-center gap-1.5 pb-1.5 font-inter-500 text-sm text-gray-600 transition-colors hover:text-green-700 disabled:opacity-60"
          >
            <RefreshCw
              size={15}
              className={refresh.isPending ? "animate-spin" : undefined}
            />
            <span className="hidden sm:inline">Hitung ulang</span>
          </button>
        </div>
        <div className="rounded-full border-t-2" />
      </div>

      {isPending && (
        <Card className="flex items-center justify-center gap-2 py-12 text-sm text-gray-500 sm:py-16 sm:text-base">
          <Loader2 size={18} className="animate-spin" />
          Menghitung perkiraan stok…
        </Card>
      )}

      {isError && (
        <Card className="py-10 text-center">
          <p className="font-inter-500 text-sm text-red-600 sm:text-base">
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
        <Card className="py-12 text-center sm:py-16">
          <PackageCheck size={32} className="mx-auto text-green-700" />

          <p className="mt-3 font-inter-500 text-base sm:text-lg">
            Semua stok masih aman
          </p>

          <p className="mt-1 text-sm text-gray-700 sm:text-base">
            Pindai nota pembelian berikutnya untuk memperbarui stok.
          </p>
        </Card>
      )}

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {data?.map((item) => {
          const { Icon, bgClassName, colorClassName, title } =
            urgencyStyle[getUrgencyLevel(item.runout_days)];

          return (
            <Card
              key={item.product_id}
              className="flex flex-col justify-between"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full sm:size-13 ${bgClassName}`}
                  >
                    <Icon
                      className={`size-6 sm:size-9 ${colorClassName}`}
                      size={undefined}
                    />
                  </div>

                  <h2 className="truncate font-inter-500 text-xl uppercase sm:text-2xl lg:text-[32px]">
                    {title}
                  </h2>
                </div>

                <span className="font-inter-500 text-sm text-gray-700 sm:text-base">
                  {item.current_stock} Pcs left
                </span>
              </div>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex min-w-0 flex-col gap-1 font-inter-500 text-sm text-gray-700 sm:text-base">
                  <p className="truncate">
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
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default DashboardRecommendation;
