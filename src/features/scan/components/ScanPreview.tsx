interface ScanPreviewProps {
  image: string;
  onRetake: () => void;
  onProcess: () => void;
}

const ScanPreview = ({ image, onRetake, onProcess }: ScanPreviewProps) => {
  return (
    <section className="px-4 pb-8 md:px-6">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 px-4 py-3 sm:px-5 sm:py-4">
          <h2 className="font-inter-600 text-base sm:text-lg">
            Preview Purchase Note
          </h2>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Make sure the note is clearly visible before processing.
          </p>
        </div>

        <div className="flex min-h-[45dvh] items-center justify-center bg-gray-50 p-3 sm:min-h-100 sm:p-5 lg:min-h-125">
          <img
            src={image}
            alt="Purchase note preview"
            className="max-h-[60dvh] max-w-full rounded-lg object-contain sm:max-h-120"
          />
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-gray-200 px-4 py-4 sm:flex-row sm:justify-end sm:px-5 sm:py-5">
          <button
            type="button"
            onClick={onRetake}
            className="rounded-lg border border-gray-300 px-5 py-2.5 font-inter-500 text-sm text-gray-700 transition hover:bg-gray-50"
          >
            Retake
          </button>

          <button
            type="button"
            onClick={onProcess}
            className="rounded-lg bg-green-700 px-5 py-2.5 font-inter-500 text-sm text-white transition hover:bg-green-800"
          >
            Process Note
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScanPreview;
