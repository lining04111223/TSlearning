const sayHello = (name: string): string => {
  return "hello";
};

const returnVal = sayHello("Alice");

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(num);
  });
};

returningPromise(1);
