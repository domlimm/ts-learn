// Basic Types
let id: number = 5;
let company: string = 'Dom';
let isPublished: boolean = true;
let x: any = 'Hello';
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hi'];

// Tuple
let person: [number, string, boolean] = [1, 'Dom', true];

// Tuple Array
let employee: [number, string][];

employee = [
    [1, 'Dom'],
    [2, 'Domm'],
    [3, 'Dommm'],
    [4, 'Dommmm']
]

// Union
let prod_id: string | number = 22;

prod_id = '22';

// Enums
enum Direction1 {
    Up = 1,
    Down, // 2
    Left, // 3
    Right // 4
}

console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2.Left);

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Dom'
}

// Type Assertion
// treat entity as diff. type
let cid: any = 1;
// let customerId = <number> cid;
let customerId = cid as number;

// Functions
// Disable implicitAny in tsconfig
function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(1, 2));

// Void return type
function log(message: string | number): void {
    console.log(message);
}

log(2);

// Interfaces
// Describe object
// Type can be used with primitives and unions (|)
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Dom'
}

// Can't change type to interface, look at Line 83
type Point = number | string;
const p1: Point = 1;

// Interface w/ Function
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
// protected identifier only classes that extends this class
class Person implements PersonInterface {
    id: number;
    name: string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    
    register() {
        return `${this.name} is now registered.`;
    }
}

interface PersonInterface {
    readonly id: number,
    name: string,
    register(): string
}

const dom = new Person(1, 'Dom');
console.log(dom.register());

// Subclasses - Parent is Person
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, 'Dom-three', 'Engineer');
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['d', 'o', 'm']);

strArray.push('hello');
console.log(strArray);