import { int, mysqlEnum, mysqlTable, serial, uniqueIndex, varchar,timestamp,text } from 'drizzle-orm/mysql-core';
 
// declaring enum in database
export const course = mysqlTable('course', {
  id: int('id').notNull().autoincrement().primaryKey(),
  image_url: varchar('image_url', { length: 256 }).notNull(),
  title: varchar('title', { length: 256 }).notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
});
 
export const content = mysqlTable('content', {
  id: int('id').notNull().autoincrement().primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  content: text('content').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),  
  course_id: int('course_id').references(() => course.id).notNull(),
});