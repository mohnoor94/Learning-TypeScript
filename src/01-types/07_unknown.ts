// 7. Unknown

// Unknown is a type-safe any.
// It is a type that is not recommended to use, but it is safer than any.

let value2: unknown;
value2 = 5;
value2 = 'John';

let y = 4;
// y = value2; // Error, because y is a number and value is unknown (but have a string).

console.log({ value: value2, y});