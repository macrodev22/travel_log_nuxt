import { drizzle } from "drizzle-orm/tursodatabase/database";
import env from "../../lib/env";
import * as schema from "./schema";

const db = drizzle({
  connection: {
    path: env.TURSO_DB_URL,
  },
  schema,
  casing: "snake_case",
});

export default db;
