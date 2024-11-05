// basic-types.ts

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';

// Template strings
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;


// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error - Type 'number' is not assignable to type 'string'.

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;

// Any
let looselyTyped: any = 4;
looselyTyped.ifItExists(); // okay, ifItExists might exist at runtime
looselyTyped.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}

// Object
let obj: object = { name: "John" };