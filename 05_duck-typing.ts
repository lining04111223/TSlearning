interface IPotentialUser {
  username: string;
  password: string;
}

const login = (user: IPotentialUser): boolean => {
  return true;
};

const jstamos = {
  username: "jstamos",
  password: "1234",
  morestuff: "hello",
};

login(jstamos);
