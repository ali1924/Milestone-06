const numbers = [2, 4, 6, 10, 8];
const output = [];
// for (const number of numbers) {
//     const doubleIt = number * 2;
//     output.push(doubleIt);
// }
// console.log(output);
// console.log(...output);
function getDouble(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubleIt =doubleMul(number);
        output.push(doubleIt);
    }
    return output;
}
// function doubleMul(number) {
//     return number * 2;
// }
const doubleMul = number => number * 2;

const makeDouble = numbers.map(doubleMul);
const makeDoubleDirect=numbers.map(number=>number*2)

const makeFive = [10, 20, 30, 40].map(x => x - 2);
console.log(...makeFive);

const result = getDouble(numbers);
console.log(result);
console.log(makeDouble);
console.log(makeDoubleDirect);
// console.log(result[1]);

/*
 purpose:
 1. get an array
 2. for every elements of the array do something
 3. store the result in an array
 4. return the array result
*/
