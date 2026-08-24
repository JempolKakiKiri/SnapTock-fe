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
    <section className="px-6">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
            <div>
              <h2 className="font-inter-600 text-lg text-gray-900">
                Scan Purchase Note
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Position the purchase note inside the frame.
              </p>
            </div>

            <Camera size={22} className="text-green-700" />
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-950">
            {!cameraError ? (
              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                screenshotQuality={0.9}
                videoConstraints={{
                  facingMode: {
                    ideal: "environment",
                  },
                  width: 1280,
                  height: 720,
                }}
                onUserMediaError={() => setCameraError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center text-white">
                <Camera size={42} className="mb-4 text-gray-400" />

                <h3 className="font-inter-600 text-lg">Camera unavailable</h3>

                <p className="mt-2 max-w-md text-sm text-gray-400">
                  Please allow camera permission or upload the purchase note
                  from your device.
                </p>
              </div>
            )}

            {!cameraError && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="relative h-[70%] w-[75%] max-w-2xl">
                  <span className="absolute left-0 top-0 h-8 w-8 border-l-4 border-t-4 border-green-400" />

                  <span className="absolute right-0 top-0 h-8 w-8 border-r-4 border-t-4 border-green-400" />

                  <span className="absolute bottom-0 left-0 h-8 w-8 border-b-4 border-l-4 border-green-400" />

                  <span className="absolute bottom-0 right-0 h-8 w-8 border-b-4 border-r-4 border-green-400" />

                  <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-green-400/40" />
                </div>
              </div>
            )}

            {!cameraError && (
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-sm">
                Make sure the entire note is visible
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-5 px-5 py-6">
            <label
              htmlFor="note-upload"
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-inter-500 text-gray-700 transition hover:bg-gray-50"
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
              }}
            />

            <button
              type="button"
              onClick={capture}
              disabled={cameraError}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-white shadow-lg transition hover:scale-105 hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
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
