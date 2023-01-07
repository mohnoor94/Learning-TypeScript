
// 1. Basic Types
const num1: number = 5; // number
const num2: number = 5.5; // number
const num3: number = 0xff; // number

const str1: string = "Hello"; // string
const str2: string = 'World'; // string
const str3: string = `Hello World`; // string

const bool1: boolean = true; // boolean
const bool2: boolean = false; // boolean

// Typescript can infer the type
const num4 = 5; // number
const str4 = "Hello"; // string
const bool3 = true; // boolean

// 'const' is a constant variable. It cannot be reassigned.

console.log({
    num1,
    num2,
    num3,
    str1,
    str2,
    str3,
    bool1,
    bool2,
    num4,
    str4,
    bool3
})