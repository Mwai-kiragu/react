export interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  town: string;
  email: string;
  number: string;
  type: string;
}

export enum PageEnum {
  list,
  add,
  edit,
}
