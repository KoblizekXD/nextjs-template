import { PrismaClient } from "@/generated/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import env from "./env";

export const prisma = new PrismaClient();

export const auth = betterAuth({
  baseURL: env.BASE_URL,
  secret: env.AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true
  }
});
