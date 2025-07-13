import axios from "axios";
import { redirect } from "react-router-dom";
import toast from "react-hot-toast";
import { ENV } from "@constants/env";

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
    const errorMsg = error?.response?.data?.message;

    if (error.response.status === 401) {
      toast.error(errorMsg);
      redirect("/login");
    } else {
      toast.error(errorMsg);
    }

    return Promise.reject(error);
  }
);
