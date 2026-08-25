import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api, toApiError } from "../../lib/axios";
import type { ApiResponse } from "../../shared/repository/dto.ts";
import { dashboardKeys } from "../inventory/query.ts";
import { scanKeys } from "./query.ts";
import {
  normalizeScannedProduct,
  type ScanNotePayload,
  type ScannedProductDto,
} from "./dto.ts";

export const scanNote = async ({ image }: ScanNotePayload) => {
  try {
    const form = new FormData();
    form.append("image", image);

    const { data } = await api.post<ApiResponse<ScannedProductDto[]>>(
      "/notes/upload",
      form,
      { headers: { "Content-Type": "multipart/form-data" } },
    );

    return (data.data ?? []).map(normalizeScannedProduct);
  } catch (error) {
    throw toApiError(error);
  }
};

export const useScanNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [...scanKeys.all, "scan-note"],
    mutationFn: scanNote,
    onSuccess: (items) => {
      queryClient.setQueryData(scanKeys.lastResult(), items);
      queryClient.invalidateQueries({
        queryKey: dashboardKeys.recommendations(),
      });
    },
  });
};
