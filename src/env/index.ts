import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_HYGRAPH_ENDPOINT: z.string(),
  NEXT_PUBLIC_HYGRAPH_DEV_AUTH_TOKEN: z.string(),
  NEXT_PUBLIC_HYGRAPH_PREVIEW_SECRET: z.string(),
  NEXT_PUBLIC_EMAIL: z.string(),
  NEXT_PUBLIC_PASSWORD: z.string(),
  NEXT_PUBLIC_EMAIL_RECEIVER: z.string(),
});
const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("❌ Invalid environment variables", _env.error.format());

  throw new Error("Invalid environment variables.");
}

export const env = _env.data;
