const numbers = [2, 4, 5, 6];
console.log(...numbers);
const numbersMap = numbers.map((n) => n * 9);
console.log(...numbersMap);

const names = ["Md", "Ali", "Ismail", "Hossain"];
console.log(...names);
const firstLetter = names.map((first) => first[0]);
console.log(...firstLetter);

const nameLength = names.map((nameString) => nameString.length);
console.log(...nameLength);

// array object
const products = [
  { id: 1, name: "Mobile", price: 12000 },
  { id: 2, name: "Laptop", price: 54000 },
  { id: 3, name: "watch", price: 4000 },
  { id: 4, name: "tab", price: 2000 },
];
// const productNames = products.map(product => console.log(product));
// console.log(productNames);
const productName = products.map(product => product.name);
console.log(...productName);
const productId = products.map(product => product.id);
console.log(...productId);