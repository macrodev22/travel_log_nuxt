import { user } from "./auth-schema";
import { location } from "./location";
import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const locationLog = sqliteTable("location_log", {
  id: int().primaryKey({ autoIncrement: true }),
  locationId: int().notNull().references(() => location.id, { onDelete: "restrict" }),
  name: text().notNull(),
  description: text(),
  lat: real().notNull(),
  lng: real().notNull(),
  startedAt: int().notNull(),
  endedAtd: int().notNull(),
  userId: text().notNull().references(() => user.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
