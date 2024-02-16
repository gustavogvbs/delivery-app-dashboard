import { env } from "@config/env";
import axios, { AxiosInstance } from "axios";

const req: AxiosInstance = axios.create({
  baseURL: env.API_URL,
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
