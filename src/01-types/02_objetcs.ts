// 2. Object types

// An object is a collection of properties, and a property is an association between a name (or key) and a value.
const person = {
    name: 'John', // property `name` with a value of type `string`
    age: 30 // property `age` with a value of type `number`
};

console.log(person.name); // John
console.log(person.age); // 30
console.log(person); // { name: 'John', age: 30 }

// the type of the above object is: { name: string; age: number; }