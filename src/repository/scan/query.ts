import { useQueryClient } from "@tanstack/react-query";

import type { ScannedProductDto} from "./dto.ts";

export const scanKeys = {
  all: ["scan"] as const,
  lastResult: () => [...scanKeys.all, "last-result"] as const,
};

export const useLastScanResult = () => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData<ScannedProductDto[]>(scanKeys.lastResult());
};