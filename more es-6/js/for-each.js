const numbers = [2, 4, 5, 6];
console.log(...numbers);

// forEach no return
numbers.forEach(n => console.log(n));
// array object
const products = [
  { id: 1, name: "Mobile", price: 12000 },
  { id: 2, name: "Laptop", price: 54000 },
  { id: 3, name: "watch", price: 4000 },
  { id: 4, name: "tab", price: 2000 },
];
products.forEach(product => console.log(product.name));

