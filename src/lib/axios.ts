import axios, { AxiosError} from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60_000,
  headers: {
    Accept: "application/json",
  }
});

api.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

interface ApiErrorPayload {
  status?: "error";
  message?: string;
}

export const toApiError = (error: unknown): Error => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiErrorPayload>;
    const message =
      axiosError.response?.data?.message ??
      axiosError.message ??
      "Terjadi kesalahan pada server";

    return new Error(message);
  }

  return error instanceof Error ? error : new Error("Terjadi kesalahan");
};