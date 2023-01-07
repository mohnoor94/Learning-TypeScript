// Type Aliases

// Type aliases are a way to give a name to a type. This is useful when you want to give a type a more descriptive name,
// or when you want to use a type in multiple places. 

// Type aliases are created with the type keyword, followed by the name of the alias, and then the type to assign to the alias.

type CarType = 'hatchback' | 'sedan' | 'suv' | 'coupe' | 'convertible' | 'wagon' | 'pickup' | 'van' | 'minivan' | 'other';

const car1: CarType = 'hatchback';
const car2: CarType = 'sedan';

let car3: CarType = 'suv';
car3 = 'coupe';
// car3 = 'not-valid'; // Error, because car4 is a CarType and not a string.

console.log({ car1, car2, car3 });