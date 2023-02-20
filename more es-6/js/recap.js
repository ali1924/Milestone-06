// 1. var let constant
const numbers = [10, 20, 30];
console.log(numbers);

let salary = 450;
console.log(salary);
salary = 555;
console.log(salary);
// 2. default parameter
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}
// 3. template string
const elementHTML = `
   <div>
            <h1>Name: </h1>
            <p>Address: </p>
            <p>Salary:${calculateSalary(10000,0,0)}</p>
            <p>Others: ${numbers[2]}</p>
   </div>
`;
// 4. arrow function
const doubleIt = num => num * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spead
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages, 22, 18];

// 6. destructuring array and object
//6.1 destructuring  object
const { a, b, c ,...others} = { a: 10, b: 30, c: 33 ,d:99,e:100};
//6.2 destructuring  array
const [first,second,third]=[10,20,30]