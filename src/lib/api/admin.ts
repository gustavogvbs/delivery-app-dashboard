import { LoginAdmin } from "@lib/api/dtos/login-user";
import { RegisterAdmin } from "@lib/api/dtos/register-admin";

import req from "@config/request-handle";

import { UserResponseData } from "@contracts/user-response";

export const admin = () => ({
  async REGISTER(data: RegisterAdmin): Promise<UserResponseData> {
    return await req.post("/auth/admin", {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    });
  },
  async LOGIN(data: LoginAdmin): Promise<UserResponseData> {
    return await req.post("/users/login", {
      email: data.email,
      password: data.password,
    });
  },
  async GET(token: string): Promise<UserResponseData> {
    const adm = await req.get(`/users/me/admin`, {
      headers: {
        cookie: `token=${token}; HttpOnly;`,
      },
    });
    return adm;
  },
});
