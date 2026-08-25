import { toNumber } from "../../shared/repository/dto.ts";

export interface RecommendationDto {
  product_id: number;
  name: string;
  current_stock: number;
  runout_days: number | null;
  recommended_restock_qty: number;
}

export type UrgencyLevel = "critical" | "warning" | "normal" | "unknown";

export const normalizeRecommendation = (
  raw: RecommendationDto,
): RecommendationDto => ({
  ...raw,
  current_stock: toNumber(raw.current_stock),
  recommended_restock_qty: toNumber(raw.recommended_restock_qty),
  runout_days: raw.runout_days === null ? null : toNumber(raw.runout_days),
});

export const getUrgencyLevel = (runoutDays: number | null): UrgencyLevel => {
  if (runoutDays === null) return "unknown";
  if (runoutDays <= 3) return "critical";
  if (runoutDays <= 7) return "warning";

  return "normal";
};

export const getRunoutLabel = (runoutDays: number | null): string => {
  if (runoutDays === null) return "Belum bisa diprediksi";
  if (runoutDays === 0) return "Stok bisa habis kapan saja";

  return `Diperkirakan habis dalam ${runoutDays} hari`;
};

export const sortByUrgency = (
  items: RecommendationDto[],
): RecommendationDto[] =>
  [...items].sort((a, b) => {
    if (a.runout_days === null) return 1;
    if (b.runout_days === null) return -1;

    return a.runout_days - b.runout_days;
  });
