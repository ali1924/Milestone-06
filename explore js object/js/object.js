// create object using object literals
// 1................
const player = {};
// add object property
// objectName.property=value
player.name = 'Shakib';
player.speciality = 'All-rounder';
player.bat = function () {
    console.log('swing your bat');
}
console.log(player);
player.bat();
// 1....................
const student = {
    name: 'Ali',
    id: 24,
    dept: function () {
        console.log('CSE');
    },
};
student.dept();
// 2......... object conststuctor
const person = new Object();
console.log(person);
// 3...........Object creat method
const obj = Object.create(null);
console.log(obj);
const newObj = Object.create(student);
// console.log(newObj);
console.log(newObj.name);

// 4..................Class
class Student{
    name = 'Md Ali';
    id = 19111124;
    constructor(age) {
        this.age = age;
    }
}
const student1 = new Student(22);
console.log(student1);
// 5.................
function Car(name, price) {
    this.name = name;
    this.price = price;
}
const car1 = new Car('BMW', 1200000);
console.log(car1.name);