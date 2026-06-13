import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  avatarUrl: text('avatar_url'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});

export const pillarProgress = sqliteTable('pillar_progress', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: text('user_id').notNull().references(() => users.id),
  pillarId: text('pillar_id').notNull(),
  score: integer('score').notNull().default(0),
  level: integer('level').notNull().default(1),
  xp: integer('xp').notNull().default(0),
});

export const habits = sqliteTable('habits', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: text('user_id').notNull().references(() => users.id),
  name: text('name').notNull(),
  pillarId: text('pillar_id').notNull(),
  streak: integer('streak').notNull().default(0),
  lastCompleted: integer('last_completed', { mode: 'timestamp' }),
});

export const dailyRituals = sqliteTable('daily_rituals', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: text('user_id').notNull().references(() => users.id),
  date: text('date').notNull(), // ISO format YYYY-MM-DD
  completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
});
