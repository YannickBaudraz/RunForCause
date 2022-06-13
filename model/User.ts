type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  picture: string;
  picture64FromApi: string
}

export class NullUser implements User {
  constructor(
      public id: number = 0,
      public name: string = '',
      public email: string = '',
      public phone: string = '',
      public picture: string = '',
      public picture64FromApi: string = ''
  ) {
  }
}

export default User;
