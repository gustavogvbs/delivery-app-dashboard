import axios, { AxiosInstance } from "axios";

import { env } from "./env";

const req: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

req.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default req;
