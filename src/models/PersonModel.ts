import { QueryResult } from 'pg';
import pool from '../db/pool';
import { Person } from '../types';

class PersonModel {
  getPersonById = async (personId: string): Promise<QueryResult<Person>> => {
    return await pool.query(`SELECT * FROM people WHERE person_id = $1`, [personId]);
  };

  createPerson = async (person: Person): Promise<QueryResult<Person>> => {
    return await pool.query(
      `INSERT INTO people(
        firstname, 
        lastname, 
        nickname, 
        email, 
        phone_number, 
        note) 
        
        values($1, $2, $3, $4, $5, $6)
        RETURNING *`,
      [person.firstname, person.lastname, person.nickname, person.email, person.phoneNumber, person.note]
    );
  };

  updatePersonByEmail = async (firstname: string, email: string): Promise<QueryResult<never>> => {
    return await pool.query(`UPDATE people SET firstname = $1 WHERE email = $2`, [firstname, email]);
  };
}

export default new PersonModel();
