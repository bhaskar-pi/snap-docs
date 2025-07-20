import axios from "axios";
import { redirect } from "react-router-dom";
import toast from "react-hot-toast";
import { ENV } from "@constants/env";
import { getFirstZodErrorMessage } from "@helpers/validation";
import { getToken } from "@config/storage";

export const axiosInstance = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response.data as Axios.AxiosXHR<unknown>,
  (error) => {
    const data = error?.response?.data;
    const status = error?.response?.status;

    // Handle validation errors
    if (status === 400 || status === 402) {
      const validationErrors = data?.errors;
      if (validationErrors && typeof validationErrors === "object") {
        const firstError =
          getFirstZodErrorMessage(validationErrors) ||
          "Missing required fields";
        toast.error(firstError);
        return Promise.reject(error);
      }
    }

    // Unauthorized
    if (status === 401) {
      redirect("/login");
      return Promise.reject(error);
    }

    // General fallback
    return Promise.reject(error);
  }
);
