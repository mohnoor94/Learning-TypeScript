// Functions are first class citizens in TypeScript.
// They can be assigned to variables, passed as arguments to other functions, and returned from functions.
// Functions can be assigned to variables.

// Function type
// A function type has two parts: the type of the arguments and the return type.
// The syntax is: (arg1: type1, arg2: type2, ...) => returnType

// Simple Functions
// We can declare a function like this:
// `void` is the return type of the function.
// `void` means that the function does not return anything.
function printTwice(message: string): void {
    console.log(message);
    console.log(message);
}

printTwice('Hello World'); // Hello World Hello World

// ==================================================================

// 'add' is a function that takes two numbers and returns a number.
function add(n1: number, n2: number): number {
    return n1 + n2;
}

// We can call the function like this:
console.log(add(1, 2)); // 3

const result = add(1, 2); // 3
console.log({ result });

// We can store the result of the function in a variable:
const sum1: number = add(1, 2); // 3
console.log({ sum1, sumType: typeof sum1 });

// Type inference works for functions too.
const sum2 = add(1, 2); // 3
console.log({ sum2, sumType: typeof sum2 });

// We cannot assign a function to a variable of a different type:
// const sum3: string = add(1, 2); // Error: Type 'number' is not assignable to type 'string'.

// ==================================================================

// We can assign the function to a variable:
const sum = add;

// We can call the new function name like this:
console.log(sum(1, 2)); // 3

// ==================================================================

// We can pass the function as an argument to another function:
function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5, 12)); // Result: 17

// ==================================================================

// We can also pass a function as an argument to another function:
// The function `cb` is a callback function.
// The function `cb` is called inside the function `addAndHandle`.
// The function `cb` is a function that takes a number and returns nothing.
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

// We can call the function like this:
// The function `addAndHandle` takes a callback function as an argument.
addAndHandle(10, 20, (result) => {
    console.log("The result is", result);
}); // The result is 30

// ==================================================================

// We can also return a function from a function:
function returnFunction(): () => void {
    return () => {
        console.log("I'm a function");
    }
}

const myFunction = returnFunction();
myFunction(); // I'm a function
console.log(myFunction()); // I'm a function undefined - undefined is the return value of the function `myFunction`
console.log(myFunction); // prints the function definition

// ==================================================================
