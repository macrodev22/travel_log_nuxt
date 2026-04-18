import { drizzle } from "drizzle-orm/libsql";
import env from "../../lib/env";
import * as schema from "./schema";

const db = drizzle({
  connection: {
    url: env.TURSO_DB_URL,
  },
  schema,
  casing: "snake_case",
});

export default db;
