"use strict";
//Tuple
let person = [1, "Brad", true];
//Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
//Union
let pid;
pid = "22";
//Enum
var Derection1;
(function (Derection1) {
    Derection1[Derection1["one"] = 0] = "one";
    Derection1[Derection1["two"] = 1] = "two";
    Derection1[Derection1["three"] = 2] = "three";
    Derection1[Derection1["four"] = 3] = "four";
})(Derection1 || (Derection1 = {}));
var Derection2;
(function (Derection2) {
    Derection2[Derection2["one"] = 0] = "one";
    Derection2[Derection2["two"] = 1] = "two";
    Derection2[Derection2["three"] = 2] = "three";
    Derection2[Derection2["four"] = 3] = "four";
})(Derection2 || (Derection2 = {}));
const user1 = {
    id: 1,
    name: "John",
};
//type Assertion
let cid = 1;
//let customerId = <number>cid;
let customerId = cid;
//function
function addNum(x, y) {
    return x + y;
}
//Void
function log(message) {
    console.log(message);
}
const user2 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Sha", "developer");
//
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brand", "John", "Jill"]);
numArray.push(5);
