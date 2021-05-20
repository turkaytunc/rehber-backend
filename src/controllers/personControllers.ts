import { NextFunction, Request, Response } from 'express';
import { PersonBuilder } from '../builders';
import PersonModel from '../models/PersonModel';
import { HttpError } from '../util/HttpError';

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

    const isPersonExist = foundPerson?.rows?.length !== undefined && foundPerson?.rows?.length > 0;
    if (isPersonExist) {
      throw new HttpError('Person already exists!', 400);
    }

    const newPerson = await PersonModel.createPerson(person);

    return res.json({ newPerson: newPerson.rows[0] });
  } catch (error) {
    return next(error);
  }
};

export const updatePerson = async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
  try {
    const { id } = req.params;

    const foundPerson = await PersonModel.findPersonById(id);

    const isPersonExist = foundPerson?.rows?.length !== undefined && foundPerson?.rows?.length > 0;
    if (!isPersonExist) {
      throw new HttpError('Person not exists', 400);
    }

    const updatedPerson = await PersonModel.updatePersonByEmail(foundPerson.rows[0]);

    return res.json({ person: updatedPerson.rows[0] });
  } catch (error) {
    return next(error);
  }
};
