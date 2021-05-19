import { NextFunction, Request, Response } from 'express';
import { PersonBuilder } from '../builders';
import PersonModel from '../models/PersonModel';
import { HttpError } from '../util/HttpError';

export const createPerson = async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
  try {
    const { firstname, lastname, nickname, email, phoneNumber, note } = req.body;

    const person = new PersonBuilder(firstname, phoneNumber)
      .setLastname(lastname)
      .setNickname(nickname)
      .setEmail(email)
      .setNote(note)
      .build();

    const foundPerson = await PersonModel.getPersonByEmail(email);

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

export const updatePerson = (req: Request, res: Response): Response => {
  const { id } = req.params;

  return res.json({ id });
};
