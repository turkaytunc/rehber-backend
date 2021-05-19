import { QueryResult } from 'pg';
import pool from '../db/pool';

class PersonModel {
  getPersonById = async (personId: string): Promise<QueryResult<never>> => {
    return await pool.query(`SELECT * FROM people WHERE person_id = $1`, [personId]);
  };

  createUser = async (firstname: string): Promise<QueryResult<never>> => {
    return await pool.query(
      `INSERT INTO people(
        firstname, 
        lastname, 
        nickname, 
        address, 
        email, 
        phone_number, 
        note) 
        
        values($1)
        RETURNING *`,
      [firstname]
    );
  };

  updatePersonByEmail = async (firstname: string, email: string): Promise<QueryResult<never>> => {
    return await pool.query(`UPDATE people SET firstname = $1 WHERE email = $2`, [firstname, email]);
  };
}

export default new PersonModel();
