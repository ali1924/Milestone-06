const student = {
    name: 'Mohammad Ali',
    departdent: 'CSE',
    id: 19111124,
    institution: 'BSFMSTU',
};
// console.log(student);
// console.log(student.name);
// console.log(student.departdent);
// console.log(student.id);
// console.log(student.institution);
// const name = student.name;
// const departdent = student.departdent;
// const id = student.id;
// const institution = student.institution;
// console.log(name);
// console.log(departdent);
// console.log(id);
// console.log(institution);

//object destructuring
const {name} = student;
console.log(name);


// object destructuring
const { name1,idn } = {
    name1: 'Md',
    idn: 24,
};
console.log(name1);
console.log(idn);

// array destructuring
const arrayName = [10, 20, 30, 40];
const [first, second, third] = arrayName;
console.log(first);
console.log(third);