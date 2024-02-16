import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

import z from "zod";
const envSchema = z.object({
  API_URL: z.string().url(),
});

export const env = envSchema.parse(publicRuntimeConfig);
