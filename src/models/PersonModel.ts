import { QueryResult } from 'pg';
import pool from '../db/pool';
import { Person } from '../types';

class PersonModel {
  findPersonById = async (personId: string): Promise<QueryResult<Person>> => {
    return await pool.query(`SELECT * FROM people WHERE person_id = $1`, [personId]);
  };

  getPeople = async (): Promise<QueryResult<Person[]>> => {
    return await pool.query(`SELECT * FROM people`);
  };

  findPersonByEmail = async (email: string): Promise<QueryResult<Person>> => {
    return await pool.query(`SELECT * FROM people WHERE email = $1`, [email]);
  };

  createPerson = async (person: Person): Promise<QueryResult<Person>> => {
    const { firstname, lastname, nickname, email, phone_number, note } = person;

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
      [firstname, lastname, nickname, email, phone_number, note]
    );
  };

  updatePersonByEmail = async (person: Person): Promise<QueryResult<never>> => {
    const { firstname, lastname, nickname, email, phone_number, note } = person;

    return await pool.query(
      `UPDATE people SET 
        firstname = $2, 
        lastname = $3, 
        nickname = $4, 
        phone_number = $5, 
        note = $6 
       WHERE email = $1 
       RETURNING *`,
      [email, firstname, lastname, nickname, phone_number, note]
    );
  };

  deletePersonById = async (personId: string): Promise<QueryResult<Person>> => {
    return await pool.query(`DELETE FROM people WHERE person_id = $1`, [personId]);
  };
}

export default new PersonModel();
