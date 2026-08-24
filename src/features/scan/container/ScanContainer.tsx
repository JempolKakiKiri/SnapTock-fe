"use client"

import { useState } from "react";
import ScanHeader from "../components/ScanHeader.tsx";
import ScanTitle from "../components/ScanTitle.tsx";
import ScanCamera from "../components/ScanCamera.tsx";
import ScanPreview from "../components/ScanPreview.tsx";
import ExtractionResult, {
  type ExtractionItem,
} from "../components/ScanExtractionResult.tsx";

type ScanState =
  | "camera"
  | "preview"
  | "processing"
  | "result";

const ScanContainer = () => {
  const [state, setState] = useState<ScanState>("camera");

  const [image, setImage] = useState<string | null>(null);

  const [items, setItems] = useState<ExtractionItem[]>([]);

  const handleCapture = (imageSrc: string) => {
    setImage(imageSrc);
    setState("preview");
  };

  const handleRetake = () => {
    setImage(null);
    setState("camera");
  };

  const handleProcess = async () => {
    if (!image) return;

    try {
      setState("processing");

      const response = await fetch(image);
      const blob = await response.blob();

      const file = new File(
        [blob],
        "purchase-note.jpg",
        {
          type: "image/jpeg",
        }
      );

      const formData = new FormData();

      formData.append("image", file);

      const apiResponse = await fetch(
        "/api/notes/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await apiResponse.json();

      if (!apiResponse.ok) {
        throw new Error(
          result.message || "Failed to process note"
        );
      }

      const extractedItems = result.data.map(
        (item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          receipt_qty:
            item.receipt_qty ?? item.qty,
        })
      );

      setItems(extractedItems);

      setState("result");
    } catch (error) {
      console.error("Scan error:", error);

      setState("preview");

      alert(
        error instanceof Error
          ? error.message
          : "Failed to process note"
      );
    }
  };

  const handleScanAnother = () => {
    setImage(null);
    setItems([]);
    setState("camera");
  };

  const handleBackDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <>
      <ScanHeader />

      {state !== "result" && <ScanTitle />}

      {state === "camera" && (
        <ScanCamera
          onCapture={handleCapture}
        />
      )}

      {state === "preview" && image && (
        <ScanPreview
          image={image}
          onRetake={handleRetake}
          onProcess={handleProcess}
        />
      )}

      {state === "processing" && (
        <section className="px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-24 text-center">
            <div className="mb-6 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-green-700" />

            <h2 className="font-inter-600 text-xl text-gray-900">
              Processing your note...
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              We're extracting products and updating your inventory.
            </p>
          </div>
        </section>
      )}

      {state === "result" && image && (
        <>
          <ScanTitle />

          <ExtractionResult
            image={image}
            items={items}
            onScanAnother={handleScanAnother}
            onBackDashboard={handleBackDashboard}
          />
        </>
      )}
    </>
  );
};

export default ScanContainer;