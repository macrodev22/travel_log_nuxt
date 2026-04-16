CREATE TABLE `location` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`slug` text NOT NULL UNIQUE,
	`description` text,
	`lat` real NOT NULL,
	`lng` real NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `location_log` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`location_id` integer NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`lat` real NOT NULL,
	`lng` real NOT NULL,
	`started_at` integer NOT NULL,
	`ended_atd` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	CONSTRAINT `fk_location_log_location_id_location_id_fk` FOREIGN KEY (`location_id`) REFERENCES `location`(`id`) ON DELETE RESTRICT
);
--> statement-breakpoint
CREATE TABLE `location_log_image` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`key` text NOT NULL,
	`location_log_id` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	CONSTRAINT `fk_location_log_image_location_log_id_location_log_id_fk` FOREIGN KEY (`location_log_id`) REFERENCES `location_log`(`id`) ON DELETE CASCADE
);
