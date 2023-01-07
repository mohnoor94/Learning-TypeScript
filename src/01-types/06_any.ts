// 6. Any

// Any is a type that allows any value to be assigned to it.
// It is a type that is not recommended to use.

let value1: any;
value1 = 5;
value1 = 'John';

let x = 4;
x = value1; // No error, even x is a number and value is a string.

console.log({ value: value1, x});