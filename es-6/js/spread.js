const max = Math.max(12, 85, 999,78);
console.log(max);
const numbers = [10, 85, 999,78];
// console.log(numbers);
console.log(...numbers);
// spread operator ...(three dot)
// const largest = Math.max(numbers);
const largest = Math.max(...numbers);
console.log(largest);

// copy array
// const numbers2 = numbers;
const numbers2 = [...numbers];
numbers.push(99);
numbers2.push(500);
console.log(numbers);
console.log(numbers2);

// 
const numbers3 = [...numbers];
console.log(numbers3);
const numbers4 = [10, 20, ...numbers, 50, 60];
console.log(numbers4);