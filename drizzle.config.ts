import { defineConfig } from "drizzle-kit";
import env from "./lib/env";

export default defineConfig({
  out: "./lib/db/migrations",
  schema: "./lib/db/schema/index.ts",
  dialect: "turso",
  dbCredentials: {
    url: env.TURSO_DB_URL,
  },
  casing: "snake_case",
});
