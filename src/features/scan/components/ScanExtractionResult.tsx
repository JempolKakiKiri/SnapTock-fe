import {
  CheckCircle2,
  Pencil,
  PlusCircle,
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
    (sum, item) =>
      sum + item.price * item.receipt_qty,
    0
  );

  return (
    <section className="px-6 pb-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.5fr]">

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
            <h2 className="font-inter-600 text-base text-gray-900">
              Note Preview
            </h2>

            <button
              type="button"
              className="text-gray-500 transition hover:text-green-700"
            >
              <ScanLine size={18} />
            </button>
          </div>

          <div className="flex min-h-[500px] items-center justify-center bg-gray-50 p-5">
            <img
              src={image}
              alt="Purchase note"
              className="max-h-[480px] w-full rounded-lg object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">

          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
            <div className="flex items-center gap-2">
              <h2 className="font-inter-600 text-base text-gray-900">
                Hasil Ekstraksi
              </h2>

              <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-inter-600 text-green-700">
                {items.length} Items
              </span>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-sm font-inter-500 text-green-700 hover:text-green-800"
            >
              <Pencil size={14} />
              Edit All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 text-xs font-inter-500 text-gray-500">
                  Nama Barang
                </th>

                <th className="px-4 py-3 text-xs font-inter-500 text-gray-500">
                  Harga
                </th>

                <th className="px-4 py-3 text-xs font-inter-500 text-gray-500">
                  Qty
                </th>

                <th className="px-4 py-3 text-xs font-inter-500 text-gray-500">
                  Subtotal
                </th>

                <th className="px-4 py-3 text-xs font-inter-500 text-gray-500">
                  Status
                </th>
              </tr>
              </thead>

              <tbody>
              {items.map((item, index) => {
                const subtotal =
                  item.price * item.receipt_qty;

                return (
                  <tr
                    key={item.id ?? index}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <td className="px-4 py-4">
                      <p className="max-w-[150px] text-sm font-inter-600 text-gray-900">
                        {item.name}
                      </p>
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-600">
                      {formatRupiah(item.price)}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-600">
                      {item.receipt_qty}
                    </td>

                    <td className="px-4 py-4 text-sm font-inter-500 text-gray-700">
                      {formatRupiah(subtotal)}
                    </td>

                    <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-inter-500 text-green-700">
                          <CheckCircle2 size={13} />
                          Tersimpan
                        </span>
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 border-b border-gray-200 px-5 py-4 text-sm font-inter-500 text-green-700 transition hover:bg-green-50"
          >
            <PlusCircle size={17} />
            Add Missing Item Manually
          </button>

          <div className="mt-auto flex items-end justify-between bg-green-50 px-5 py-6">
            <div>
              <p className="text-sm text-gray-500">
                Total Terbaca
              </p>
            </div>

            <p className="text-2xl font-inter-700 text-green-700">
              {formatRupiah(total)}
            </p>
          </div>

          <div className="flex flex-col-reverse gap-3 px-5 py-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onScanAnother}
              className="flex items-center justify-center gap-2 rounded-lg border border-green-700 px-5 py-2.5 text-sm font-inter-500 text-green-700 transition hover:bg-green-50"
            >
              <ScanLine size={17} />
              Scan Another Note
            </button>

            <button
              type="button"
              onClick={onBackDashboard}
              className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-inter-500 text-white transition hover:bg-green-800"
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