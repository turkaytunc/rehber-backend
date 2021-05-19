import pool from './pool';

export const initDB = async (): Promise<boolean> => {
  try {
    await pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await pool.query(`
    CREATE TABLE IF NOT EXISTS people (
      person_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      firstname VARCHAR(30) NOT NULL,
      lastname VARCHAR(30) NOT NULL,
      nickname VARCHAR(30) NOT NULL,
      email VARCHAR(50) NOT NULL,
      phone_number VARCHAR(15) NOT NULL,
      note VARCHAR(200) NOT NULL
    );
    `);
    return true;
  } catch (error) {
    return false;
  }
};
