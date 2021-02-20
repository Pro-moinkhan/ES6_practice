//1. NOTE non declared function expression / raw function:
function DoubleIt(num){
    return num * 2;
}
const input = DoubleIt(5);
console.log(input);

// 2. NOTE function expression declared with const double it:
const doubleIt = function(num){
    return num * 2;
}
const result0 = doubleIt(2); //<-- TODO look carefully!
console.log(result0); 

// NOTE arrow function without parameter ES6:
const get5 = () => 5;   //NOTE () this is a empty parameter.
// const result1 = get5();
console.log(get5());

// 4. NOTE arrow function with single parameter ES6:
const DoubleIT = num => num * 2; // NOTE DoubleIT is the name of function, first num is the parameter of function & second num is return of function.
const result2 = DoubleIT(2);
console.log(result2);

// 5.NOTE arrow function with multiple parameter ES6:
const add = (num1, num2) => num1 + num2;
const result3 = add(12, 12);
console.log(result3);

// 6. NOTE arrow {big-function} with double parameter ES6:
const doMath = (num1, num2) => {
    const add = num1 + num2;
    const minus = num1 - num2;
    const total = add + minus;
    return total;
} 
const result4 = doMath(3, 1);
console.log(result4);