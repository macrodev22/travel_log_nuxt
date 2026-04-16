import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { locationLog } from "./location-log";
import { user } from "./auth-schema";

export const locationLogImage = sqliteTable("location_log_image", {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  locationLogId: int().notNull().references(() => locationLog.id, { onDelete: "cascade" }),
  userId: text().notNull().references(() => user.id, { onDelete: "cascade" }),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
