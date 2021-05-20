export class Person {
  firstname: string;
  lastname = '';
  nickname = '';
  email = '';
  phone_number: string;
  note = '';

  constructor(firstname: string, phoneNumber: string) {
    this.firstname = firstname;
    this.phone_number = phoneNumber;
  }
}
