// 5. Enums

// Enums are a way to give more friendly names to sets of numeric values.
// Enums limit the values that can be assigned to a variable.
// Enums introdcues a safe way to work with related values. 

enum Rule {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person4 = {
    name: 'John',
    age: 30,
    role: Rule.ADMIN // 0 - ADMIN, 1 - READ_ONLY, 2 - AUTHOR # Ws safely limited to the values in the enum.
};

console.log(person4); // { name: 'John', age: 30, role: 0 }

// The enum values are automatically assigned numbers starting from 0.
// We can also assign our own values to the enum values.

enum CustomRule {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR = 100,
    WHATEVER = 'whatever'
}

console.log(CustomRule);