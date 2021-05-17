import pool from '../db/pool';

class User {
  constructor() {}
  createUser = async (username: string) => {
    return await pool.query(`INSERT INTO users(username) values($1)`, [username]);
  };

  updateUserByEmail = async (username: string, email: string) => {
    return await pool.query(`UPDATE users SET username = $1 WHERE email = $2`, [username, email]);
  };
}

export default User;
