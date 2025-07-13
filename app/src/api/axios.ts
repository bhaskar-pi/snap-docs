import axios from "axios";
import { redirect } from "react-router-dom";
import toast from "react-hot-toast";
import { ENV } from "@constants/env";
import { getErrorMessage, getFirstZodErrorMessage } from "@helpers/validation";

export const axiosInstance = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMsg = getErrorMessage(error);
    const data = error?.response?.data;
    const status = error?.response?.status;

    // Handle validation errors
    if (status === 400 || status === 402) {
      const validationErrors = data?.errors;
      if (validationErrors && typeof validationErrors === "object") {
        const firstError = getFirstZodErrorMessage(validationErrors);
        toast.error(firstError);
        return Promise.reject(error);
      }
    }

    // Unauthorized
    if (status === 401) {
      toast.error(errorMsg);
      redirect("/login");
      return Promise.reject(error);
    }

    // General fallback
    toast.error(errorMsg);
    return Promise.reject(error);
  }
);
