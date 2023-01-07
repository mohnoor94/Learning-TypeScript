// 8. Union Types

// Union types are used to express that a value can be one of several types.
// The pipe character (|) is used to separate each type.

let x2: string | number;
x2 = 'John';
x2 = 5;
// x2 = true; // Error, because x2 is a string or a number, but not a boolean.

console.log({ x2 });