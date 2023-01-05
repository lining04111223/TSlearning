"use strict";
const sayHello = (name) => {
    return "hello";
};
const returnVal = sayHello("Alice");
const returningPromise = (num) => {
    return new Promise((resolve) => {
        resolve(num);
    });
};
returningPromise(1);
