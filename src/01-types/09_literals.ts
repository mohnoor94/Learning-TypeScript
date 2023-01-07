// 9. Literal Types

// Literal types are used to express that a value can be one of several values.

let carType:  'BMW' | 'Audi' | 'Mercedes' = 'BMW';
carType = 'Audi';
// carType = 'Ferrari'; // Error, because carType is a BMW, Audi or Mercedes, but not a Ferrari.

console.log({ carType });