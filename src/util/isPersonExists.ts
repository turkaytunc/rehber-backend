export const isPersonExists = (foundPerson: any): boolean =>
  foundPerson?.rows?.length !== undefined && foundPerson?.rows?.length > 0;
