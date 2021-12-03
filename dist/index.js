"use strict";
// Basic Types
let id = 5;
let company = 'Dom';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hi'];
// Tuple
let person = [1, 'Dom', true];
// Tuple Array
let employee;
employee = [
    [1, 'Dom'],
    [2, 'Domm'],
    [3, 'Dommm'],
    [4, 'Dommmm']
];
// Union
let prod_id = 22;
prod_id = '22';
// Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right"; // 4
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'Dom'
};
// Type Assertion
// treat entity as diff. type
let cid = 1;
// let customerId = <number> cid;
let customerId = cid;
// Functions
// Disable implicitAny in tsconfig
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// Void return type
function log(message) {
    console.log(message);
}
log(2);
const user1 = {
    id: 1,
    name: 'Dom'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
// protected identifier only classes that extends this class
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const dom = new Person(1, 'Dom');
console.log(dom.register());
// Subclasses - Parent is Person
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Dom-three', 'Engineer');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['d', 'o', 'm']);
strArray.push('hello');
console.log(strArray);
