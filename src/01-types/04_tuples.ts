// 4. Tuples

// A tuple is an array-like structure where each element represents some property of a record, and the order is important.
// Tuples are immutable, and the number of elements is fixed.

const person3 = {
    name: 'John',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author'] // property `role` with a value of type `[number, string]`
};

console.log(person3.role); // [2, 'author']

// the type of the above object is: { name: string; age: number; hobbies: string[]; role: [number, string]; }

// ==================================================================

// Declare a tuple type - notice that we put the types of the elements in the tuple in order **inside** parentheses.
const tuple1: [number, string] = [1, 'a'];

const tuple2 = [1, 'a']; // type inference works for tuples too.

console.log({ tuple1, tuple2 });