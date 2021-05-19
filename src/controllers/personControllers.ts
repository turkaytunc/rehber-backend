import { NextFunction, Request, Response } from 'express';
import { AddressBuilder, PersonBuilder } from '../builders';
import PersonModel from '../models/PersonModel';
import { Address } from '../types';

export const createPerson = async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
  try {
    const { firstname, lastname, nickname, email, phoneNumber, note } = req.body;

    const address: Address = req.body.address;
    const newAddress = new AddressBuilder(address.name).build();

    const person = new PersonBuilder(firstname, phoneNumber)
      .setLastname(lastname)
      .setNickname(nickname)
      .setAddress(newAddress)
      .setEmail(email)
      .setNote(note)
      .build();

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
