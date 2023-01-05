interface IDog {
  name: string;
  faveToy: string;
}

interface IUser {
  ID?: number;
  username: string;
  password: string;
  friends?: IUser[];
  pet?: IDog;
}
const user: IUser = {
  username: "Alice",
  password: "1234",
};

const users: IUser[] = [];
users.push(user);

console.log(users);
