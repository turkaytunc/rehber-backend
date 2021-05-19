import { Address } from './Address';

export class Person {
  firstname: string;
  phoneNumber: number;
  age = 0;
  surname = '';
  nickname = '';
  address: Address | undefined;
  note = '';

  constructor(firstname: string, phoneNumber: number) {
    this.firstname = firstname;
    this.phoneNumber = phoneNumber;
  }
}
