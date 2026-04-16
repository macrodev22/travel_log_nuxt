import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const locations = sqliteTable("locations", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text().notNull(),
  started_at: text().notNull(),
});
