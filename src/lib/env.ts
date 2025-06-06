import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  DATABASE_URL: z.string().url(),
  BASE_URL: z.string().url(),
  PORT: z.string().regex(/^\d+$/).transform(Number).optional(),
  AUTH_SECRET: z.string(),
  APP_NAME: z.string().min(1),
  POSTGRES_USER: z.string().min(1),
  POSTGRES_PASSWORD: z.string().min(1),
});

export const validateEnv = () => {
  const parsedEnv = envSchema.safeParse(process.env);

  if (!parsedEnv.success) {
    console.error("Invalid environment variables:", parsedEnv.error.format());
    throw new Error("Environment validation failed");
  }

  return parsedEnv.data;
};

const env = validateEnv();
export type Env = z.infer<typeof envSchema>;
export default env;
