import { NextFunction, Request, Response } from 'express';
import { PersonBuilder } from '../builders';
import PersonModel from '../models/PersonModel';
import { HttpError } from '../util/HttpError';
import { isPersonExists } from '../util/isPersonExists';

export const createPerson = async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
  try {
    const { firstname, lastname, nickname, email, phone_number, note } = req.body;

    const person = new PersonBuilder(firstname, phone_number)
      .setLastname(lastname)
      .setNickname(nickname)
      .setEmail(email)
      .setNote(note)
      .build();

    const foundPerson = await PersonModel.findPersonByEmail(email);

    if (isPersonExists(foundPerson)) {
      throw new HttpError('Person already exists!', 400);
    }

    const newPerson = await PersonModel.createPerson(person);

    return res.json({ person: newPerson.rows[0] });
  } catch (error) {
    return next(error);
  }
};

export const updatePerson = async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
  try {
    const { id } = req.params;
    const { firstname, lastname, nickname, email, phone_number, note } = req.body;

    const foundPerson = await PersonModel.findPersonById(id);

    if (!isPersonExists(foundPerson)) {
      throw new HttpError('Person not exists', 400);
    }

    const person = new PersonBuilder(firstname, phone_number)
      .setLastname(lastname)
      .setNickname(nickname)
      .setEmail(email)
      .setNote(note)
      .build();

    const updatedPerson = await PersonModel.updatePersonByEmail(person);

    return res.json({ person: updatedPerson.rows[0] });
  } catch (error) {
    return next(error);
  }
};

export const getPeople = async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
  try {
    const people = await PersonModel.getPeople();

    return res.json({ people: people.rows });
  } catch (error) {
    return next(error);
  }
};
