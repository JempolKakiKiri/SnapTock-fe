import { useMutation, useQueryClient } from "@tanstack/react-query";

import { dashboardKeys, getRecommendations } from "./query.ts";

export const useRefreshRecommendations = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [...dashboardKeys.all, "refresh"],
    mutationFn: getRecommendations,
    onSuccess: (data) => {
      queryClient.setQueryData(dashboardKeys.recommendations(), data);
    },
  });
};
