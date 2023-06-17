import 'dotenv/config'
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from '@planetscale/database'
import * as schema from './schema';
const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
}

export const db = connect(config)
export const Dcon = drizzle(db, {schema});