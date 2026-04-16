import { drizzle } from "drizzle-orm/tursodatabase/database";
import env from "../../lib/env";
import * as schema from "./schema";

const db = drizzle({
  connection: {
    path: env.DB_FILE_NAME,
  },
  schema,
});

export default db;
