// 3. Arrays

// Arrays are a type of object that can hold multiple values of the same type.
// The type of the array is written as `type[]` where type is the type of the elements in the array.

const numbers: number[] = [1, 2, 3]; // type number[]
const strings: string[] = ['a', 'b', 'c']; // type string[]
const booleans: boolean[] = [true, false, true]; // type boolean[]
const mixed: (number | string)[] = [1, 'a', 2, 'b', 3, 'c']; // type (number | string)[] - we will talk about unions later.

console.log('arrays', { numbers, strings, booleans, mixed});
// ==================================================================


// Type inference works for arrays too.
const numbers2 = [1, 2, 3]; // type number[]
const strings2 = ['a', 'b', 'c']; // type string[]
const booleans2 = [true, false, true]; // type boolean[]
const mixed2 = [1, 'a', 2, 'b', 3, 'c']; // type (number | string)[]

console.log('arrays with infered types', { numbers2, strings2, booleans2, mixed2});
// ==================================================================

// We can use arrays inside objects.
const person2 = {
    name: 'John', // property `name` with a value of type `string`
    age: 30, // property `age` with a value of type `number`
    hobbies: ['sports', 'cooking'] // property `hobbies` with a value of type `string[]`
};

console.log('an object with an array', person2);
// ==================================================================

// We can use objects inside arrays too.
const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 27 },
    { name: 'Bob', age: 31 }
];
console.log('an array with objects', people);