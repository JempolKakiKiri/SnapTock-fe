interface ScanPreviewProps {
  image: string;
  onRetake: () => void;
  onProcess: () => void;
}

const ScanPreview = ({ image, onRetake, onProcess }: ScanPreviewProps) => {
  return (
    <section className="px-6 pb-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 px-5 py-4">
          <h2 className="font-inter-600 text-lg">Preview Purchase Note</h2>

          <p className="mt-1 text-sm text-gray-500">
            Make sure the note is clearly visible before processing.
          </p>
        </div>

        <div className="flex min-h-[500px] items-center justify-center bg-gray-50 p-5">
          <img
            src={image}
            alt="Purchase note preview"
            className="max-h-[480px] max-w-full rounded-lg object-contain"
          />
        </div>

        <div className="flex justify-end gap-3 border-t border-gray-200 px-5 py-5">
          <button
            type="button"
            onClick={onRetake}
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-inter-500 text-gray-700 hover:bg-gray-50"
          >
            Retake
          </button>

          <button
            type="button"
            onClick={onProcess}
            className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-inter-500 text-white hover:bg-green-800"
          >
            Process Note
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScanPreview;
