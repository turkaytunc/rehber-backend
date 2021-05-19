import { Address } from './Address';

export class Person {
  firstname: string;
  lastname = '';
  nickname = '';
  address: Address | undefined;
  email = '';
  phoneNumber: string;
  note = '';

  constructor(firstname: string, phoneNumber: string) {
    this.firstname = firstname;
    this.phoneNumber = phoneNumber;
  }
}
