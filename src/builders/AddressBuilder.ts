import { Address } from '../types';

export class AddressBuilder {
  address: Address;

  constructor(name: string) {
    this.address = new Address(name);
  }

  setStreet(street: string): AddressBuilder {
    this.address.street = street;
    return this;
  }

  setCity(city: string): AddressBuilder {
    this.address.city = city;
    return this;
  }

  setCountry(country: string): AddressBuilder {
    this.address.country = country;
    return this;
  }

  build(): Address {
    return this.address;
  }
}
