import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_DB, POSTGRES_PORT } = process.env;

const pool = new Pool({
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT as unknown as number,
  database: POSTGRES_DB,
  host: POSTGRES_HOST,
  max: 50,
});

export default pool;
