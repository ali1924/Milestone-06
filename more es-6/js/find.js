const numbers = [8, 2, 5, 10, 15, 30, 43, 55, 60, 70];
console.log(...numbers);
// find(n=>condition)
const firstEvenNumber = numbers.find(number => number % 2 == 1);
console.log(firstEvenNumber);
// array object filter
const products = [
  { id: 1, name: "Mobile", price: 12000 },
  { id: 2, name: "Laptop", price: 54000 },
  { id: 3, name: "watch", price: 4000 },
  { id: 4, name: "tab", price: 2000 },
];
const firstProduct = products.find(product => product.name === 'Laptop');
// console.log(firstProduct.name);
console.log(firstProduct);

