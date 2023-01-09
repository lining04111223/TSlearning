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

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

//Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }
  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brd");
const mike = new Person(2, "Mike");
console.log(brad.register());
console.log(brad, mike);

//subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Sha", "developer");

//
//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brand", "John", "Jill"]);

numArray.push(5);
