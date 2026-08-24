import { useQuery } from "@tanstack/react-query";

import { api, toApiError } from "../../lib/axios";
import type { ApiResponse} from "../../shared/repository/dto.ts";
import {
  normalizeRecommendation,
  sortByUrgency,
  type RecommendationDto
} from "./dto.ts";

export const dashboardKeys = {
  all: ["dashboard"] as const,
  recommendations: () => [...dashboardKeys.all, "recommendations"] as const,
};

export const getRecommendations = async () => {
  try {
    const { data } = await api.get<ApiResponse<RecommendationDto[]>>(
      "/inventory/recommendations",
    );

    return (data.data ?? []).map(normalizeRecommendation);
  } catch (error) {
    throw toApiError(error);
  }
};

export const useRecommendations = () =>
  useQuery({
    queryKey: dashboardKeys.recommendations(),
    queryFn: getRecommendations,
    select: sortByUrgency,
    staleTime: 5 * 60_000,
  });