import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  HYGRAPH_ENDPOINT: z.string(),
  HYGRAPH_DEV_AUTH_TOKEN: z.string(),
  HYGRAPH_PREVIEW_SECRET: z.string(),
  EMAIL: z.string(),
  PASSWORD: z.string(),
  EMAIL_RECEIVER: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("❌ Invalid environment variables", _env.error.format());

  throw new Error("Invalid environment variables.");
}

export const env = _env.data;
