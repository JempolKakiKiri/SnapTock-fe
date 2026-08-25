export interface ApiResponse<T> {
  status: "success" | "error";
  message?: string;
  data: T;
}

export interface ProductDto {
  id: number;
  name: string;
  price: number;
  current_stock: number;
  min_threshold?: number;
  max_threshold?: number;
  createdAt?: string;
  updatedAt?: string;
}

export const toNumber = (value: unknown): number => {
  const parsed = typeof value === "string" ? Number(value) : (value as number);

  return Number.isFinite(parsed) ? parsed : 0;
};

export const formatRupiah = (value: number): string =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
