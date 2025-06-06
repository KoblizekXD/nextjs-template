import { PrismaClient } from "@/generated/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import env from "./env";
import { nextCookies } from "better-auth/next-js";

export const prisma = new PrismaClient();

export const auth = betterAuth({
  baseURL: env.BASE_URL,
  secret: env.AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
    usePlural: true,
  }),
  plugins: [
    nextCookies()
  ],
  emailAndPassword: {
    enabled: true,
  },
  /* 
  // Want to add additional fields to the user model that will appear in the session? This will add a `description` field to the user model.
  // It Assumes you have already added the field to your Prisma schema and run the migration.
   user: {
    additionalFields: {
      description: {
        type: "string",
        required: true,
      }
    }
  }
  */
});
