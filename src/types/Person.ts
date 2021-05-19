export class Person {
  firstname: string;
  lastname = '';
  nickname = '';
  email = '';
  phoneNumber: string;
  note = '';

  constructor(firstname: string, phoneNumber: string) {
    this.firstname = firstname;
    this.phoneNumber = phoneNumber;
  }
}
