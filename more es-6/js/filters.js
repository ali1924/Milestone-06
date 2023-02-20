const numbers = [8,2,5,10, 15, 30, 43,55,60,70];
console.log(...numbers);
// filter(n=>condition)
const greateThanTen = numbers.filter(num => num > 10 && num<50);
console.log(...greateThanTen);
const lessThanTen = numbers.filter(n => n < 10);
console.log(...lessThanTen);

// even number
const evenNumber = numbers.filter(N => N % 2 == 0);
console.log(...evenNumber);
//oddNumber
const oddNumber = numbers.filter(n => n % 2 == 1);
console.log(...oddNumber);

const countEvenNumber = evenNumber.length;
console.log(countEvenNumber);
const countOddNumber = oddNumber.length;
console.log(countOddNumber);

// array object filter
const products = [
  { id: 1, name: "Mobile", price: 12000 },
  { id: 2, name: "Laptop", price: 54000 },
  { id: 3, name: "watch", price: 4000 },
  { id: 4, name: "tab", price: 2000 },
];
const expensive = products.filter(product => product.price > 2000);
console.log(...expensive);
