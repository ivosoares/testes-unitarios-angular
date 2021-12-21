import { User } from "../models/user";

export const mockUsersResponse: User[] = [
  {
    id: 1,
    name: 'Ivonaldo',
    username: 'ivosoaresdev',
    email: 'ivonaldo@gmail.com',
    address: {
      city: 'São Paulo',
      street: 'Rua x',
      zipcode: '000000',
      suite: '',
      geo: {
        lat: '12.00',
        lng: '20.00'
      }
    },
    phone: '9999999999',
    website: 'www.meusite.com',
    company: {
      bs: '',
      catchPhrase: '',
      name: '',
    },
  },
  {
    id: 2,
    name: 'teste',
    email: 'teste@gmail.com',
    website: 'www.meusite.com',
    username: 'testexx',
    address: {
      city: 'São Paulo',
      street: 'Rua x',
      zipcode: '000000',
      suite: '',
      geo: {
        lat: '25.00',
        lng: '30.00'
      }
    },
    company: {
      bs: '',
      catchPhrase: '',
      name: '',
    },
    phone: '9999999999'
  }
]
