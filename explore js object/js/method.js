const student = {
    name: 'Ali',
    id: 24,
    dept: 'CSE',
    course: ['Math', 'C++', 'AI'],
    money:2000,
    exam: function () {
        // console.log(this.name);
        // console.log(this.dept);
        // console.log(this.course[0]);
        return this.name +'is participating in an exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement on ${subject}`
    },
    treatDay: function (amount) {
        this.money = this.money - amount;
        return this.money;
    }
};
// student.exam();
const name = student.exam();
console.log(name);
const reExam = student.improveExam('C++');
console.log(reExam);
const remain = student.treatDay(500);
console.log(remain);