"use client";

import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import { Camera, ImagePlus } from "lucide-react";

interface ScanCameraProps {
  onCapture: (image: string) => void;
}

const ScanCamera = ({ onCapture }: ScanCameraProps) => {
  const webcamRef = useRef<Webcam>(null);

  const [cameraError, setCameraError] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();

    if (imageSrc) {
      onCapture(imageSrc);
    }
  }, [onCapture]);

  return (
    <section className="px-4 pb-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-start justify-between gap-3 border-b border-gray-200 px-4 py-3 sm:px-5 sm:py-4">
            <div className="min-w-0">
              <h2 className="font-inter-600 text-base text-gray-900 sm:text-lg">
                Scan Purchase Note
              </h2>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Position the purchase note inside the frame.
              </p>
            </div>

            <Camera size={22} className="shrink-0 text-green-700" />
          </div>

          <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-950 sm:aspect-4/3 lg:aspect-video">
            {!cameraError ? (
              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                screenshotQuality={0.9}
                videoConstraints={{
                  facingMode: { ideal: "environment" },
                  width: { ideal: 1920 },
                  height: { ideal: 1080 },
                }}
                onUserMediaError={() => setCameraError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center text-white">
                <Camera size={42} className="mb-4 text-gray-400" />

                <h3 className="font-inter-600 text-base sm:text-lg">
                  Camera unavailable
                </h3>

                <p className="mt-2 max-w-md text-xs text-gray-400 sm:text-sm">
                  Please allow camera permission or upload the purchase note
                  from your device.
                </p>
              </div>
            )}

            {!cameraError && (
              <>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[80%] w-[85%] max-w-2xl sm:h-[70%] sm:w-[75%]">
                    <span className="absolute left-0 top-0 size-6 border-l-4 border-t-4 border-green-400 sm:size-8" />
                    <span className="absolute right-0 top-0 size-6 border-r-4 border-t-4 border-green-400 sm:size-8" />
                    <span className="absolute bottom-0 left-0 size-6 border-b-4 border-l-4 border-green-400 sm:size-8" />
                    <span className="absolute bottom-0 right-0 size-6 border-b-4 border-r-4 border-green-400 sm:size-8" />

                    <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-green-400/40" />
                  </div>
                </div>

                <div className="pointer-events-none absolute bottom-4 left-1/2 w-[90%] -translate-x-1/2 rounded-full bg-black/60 px-3 py-2 text-center text-xs text-white backdrop-blur-sm sm:bottom-5 sm:w-auto sm:px-4 sm:text-sm">
                  Make sure the entire note is visible
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col-reverse items-center gap-4 px-4 py-5 sm:flex-row sm:justify-center sm:gap-5 sm:px-5 sm:py-6">
            <label
              htmlFor="note-upload"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 font-inter-500 text-sm text-gray-700 transition hover:bg-gray-50 sm:w-auto"
            >
              <ImagePlus size={19} />
              Upload Note
            </label>

            <input
              id="note-upload"
              type="file"
              accept="image/jpeg,image/png,image/jpg"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0];

                if (!file) return;

                const reader = new FileReader();

                reader.onload = () => {
                  if (typeof reader.result === "string") {
                    onCapture(reader.result);
                  }
                };

                reader.readAsDataURL(file);

                event.target.value = "";
              }}
            />

            <button
              type="button"
              onClick={capture}
              disabled={cameraError}
              aria-label="Ambil gambar nota"
              className="flex size-16 shrink-0 items-center justify-center rounded-full bg-green-700 text-white shadow-lg transition hover:scale-105 hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Camera size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanCamera;
