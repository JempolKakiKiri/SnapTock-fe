import {
  CheckCircle2,
  ArrowRight,
  ScanLine,
} from "lucide-react";

export interface ExtractionItem {
  id?: number;
  name: string;
  price: number;
  receipt_qty: number;
  subtotal?: number;
}

interface ExtractionResultProps {
  image: string;
  items: ExtractionItem[];
  onScanAnother: () => void;
  onBackDashboard: () => void;
}

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
};

const ExtractionResult = ({
  image,
  items,
  onScanAnother,
  onBackDashboard,
}: ExtractionResultProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.receipt_qty,
    0,
  );

  return (
    <section className="px-4 pb-8 md:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.5fr] lg:gap-5">
        {/* Note preview */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-inter-600 text-base text-gray-900">
              Note Preview
            </h2>

            <button
              type="button"
              aria-label="View note"
              className="text-gray-500 transition hover:text-green-700"
            >
              <ScanLine size={18} />
            </button>
          </div>

          <div className="flex min-h-[35dvh] items-center justify-center bg-gray-50 p-3 sm:min-h-100 sm:p-5 lg:min-h-125">
            <img
              src={image}
              alt="Purchase note"
              className="max-h-[50dvh] w-full rounded-lg object-contain sm:max-h-120"
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 px-4 py-3 sm:px-5 sm:py-4">
            <h2 className="font-inter-600 text-base text-gray-900">
              Extraction Result
            </h2>

            <span className="rounded-full bg-green-100 px-2.5 py-1 font-inter-600 text-xs text-green-700">
              {items.length} Items
            </span>
          </div>

          <div className="flex flex-col divide-y divide-gray-100 lg:hidden">
            {items.map((item, index) => {
              const subtotal = item.price * item.receipt_qty;

              return (
                <div key={item.id ?? index} className="px-4 py-3.5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="min-w-0 font-inter-600 text-sm text-gray-900">
                      {item.name}
                    </p>

                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-green-50 px-2 py-1 font-inter-500 text-xs text-green-700">
                      <CheckCircle2 size={13} />
                      Saved
                    </span>
                  </div>

                  <div className="mt-2 flex items-end justify-between gap-3">
                    <p className="text-xs text-gray-500">
                      {formatRupiah(item.price)}
                      <span className="mx-1.5 text-gray-300">×</span>
                      {item.receipt_qty}
                    </p>

                    <p className="font-inter-600 text-sm text-gray-900">
                      {formatRupiah(subtotal)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full border-collapse text-left">
              <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-inter-500 text-xs text-gray-500">
                  Item Name
                </th>
                <th className="px-4 py-3 font-inter-500 text-xs text-gray-500">
                  Price
                </th>
                <th className="px-4 py-3 font-inter-500 text-xs text-gray-500">
                  Qty
                </th>
                <th className="px-4 py-3 font-inter-500 text-xs text-gray-500">
                  Subtotal
                </th>
                <th className="px-4 py-3 font-inter-500 text-xs text-gray-500">
                  Status
                </th>
              </tr>
              </thead>

              <tbody>
              {items.map((item, index) => {
                const subtotal = item.price * item.receipt_qty;

                return (
                  <tr
                    key={item.id ?? index}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <td className="px-4 py-4">
                      <p className="max-w-37.5 font-inter-600 text-sm text-gray-900">
                        {item.name}
                      </p>
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600">
                      {formatRupiah(item.price)}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-600">
                      {item.receipt_qty}
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 font-inter-500 text-sm text-gray-700">
                      {formatRupiah(subtotal)}
                    </td>

                    <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-green-50 px-2.5 py-1 font-inter-500 text-xs text-green-700">
                          <CheckCircle2 size={13} />
                          Saved
                        </span>
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>

          <div className="mt-auto flex items-end justify-between gap-3 border-t border-gray-200 bg-green-50 px-4 py-5 sm:px-5 sm:py-6">
            <p className="text-sm text-gray-500">Total Detected</p>

            <p className="font-inter-700 text-xl text-green-700 sm:text-2xl">
              {formatRupiah(total)}
            </p>
          </div>

          <div className="flex flex-col-reverse gap-3 px-4 py-4 sm:flex-row sm:justify-end sm:px-5 sm:py-5">
            <button
              type="button"
              onClick={onScanAnother}
              className="flex items-center justify-center gap-2 rounded-lg border border-green-700 px-5 py-2.5 font-inter-500 text-sm text-green-700 transition hover:bg-green-50"
            >
              <ScanLine size={17} />
              Scan Another Note
            </button>

            <button
              type="button"
              onClick={onBackDashboard}
              className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-2.5 font-inter-500 text-sm text-white transition hover:bg-green-800"
            >
              Back to Dashboard
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtractionResult;
