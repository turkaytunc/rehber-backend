import { QueryResult } from 'pg';
import pool from '../db/pool';

class PersonModel {
  createUser = async (username: string): Promise<QueryResult<never>> => {
    return await pool.query(`INSERT INTO users(username) values($1)`, [username]);
  };

  updateUserByEmail = async (username: string, email: string): Promise<QueryResult<never>> => {
    return await pool.query(`UPDATE users SET username = $1 WHERE email = $2`, [username, email]);
  };
}

export default PersonModel;
