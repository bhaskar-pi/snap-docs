import { axiosInstance } from "./axios";

export const GET = <T>(url: string, config = {}) =>
  axiosInstance.get<T>(url, config);

export const POST = <T>(url: string, data: unknown, config = {}) =>
  axiosInstance.post<T>(url, data, config);
