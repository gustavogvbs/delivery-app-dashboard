import { AxiosResponse } from "axios";

import req from "@config/request-handle";

import { LoginAdmin } from "@type/dtos/login-user";
import { RegisterAdmin } from "@type/dtos/register-admin";

export const apiAdmin = () => ({
  registerAmin(data: RegisterAdmin): Promise<AxiosResponse> {
    return req.post("/auth/admin", {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    });
  },
  loginAmin(data: LoginAdmin): Promise<AxiosResponse> {
    return req.post("/users/login", {
      email: data.email,
      password: data.password,
    });
  },
});
