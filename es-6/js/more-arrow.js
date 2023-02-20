const add = (first, second) => first + second;
const addResult = add(5, 6);
console.log(addResult);
// implicite arraw function
const getFullName = (first, last) => first + ' ' + last;
const name = getFullName('Md', 'Ali');
console.log(name);

const multiply = (a, b) => a * b;
const result = multiply(7, 8);
console.log(result);

const addFive = (a, b, c, d, e) => a + b + c + d + c;
const resultFive = addFive(1, 2, 3, 4, 5);
console.log(resultFive);

// no parameter arrow function
const getPie = () => Math.PI;
const pi = getPie();
console.log(pi);
// one parameter arrow function
const doubleIt = (num) => num * 2;
const resultDouble = doubleIt(5);
console.log(resultDouble);
// one parameter simple version
const multiplyFive = num => num * 5;
const resultFiveMul = multiplyFive(5);
console.log(resultFiveMul);
// multiline arrow function
// if you want to resturn something, we use return
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}
const resultDoMath = doMath(5, 6, 7);
console.log(resultDoMath);

