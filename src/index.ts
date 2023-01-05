//Tuple

let person: [number, string, boolean] = [1, "Brad", true];
//Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

//Union
let pid: string | number;

pid = "22";

//Enum

enum Derection1 {
  one,
  two,
  three,
  four,
}

enum Derection2 {
  one,
  two,
  three,
  four,
}

//object

type User = {
  id: number;
  name: string;
};

const user1: User = {
  id: 1,
  name: "John",
};

//type Assertion

let cid: any = 1;

//let customerId = <number>cid;

let customerId = cid as number;

//function

function addNum(x: number, y: number): number {
  return x + y;
}

//Void

function log(message: string | number): void {
  console.log(message);
}

//Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const user2: UserInterface = {
  id: 1,
  name: "John",
};

//console.log(addNum(1, 2));

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//Classes
