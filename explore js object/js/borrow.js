const student = {
  name: "Ali",
  id: 24,
  dept: "CSE",
  course: ["Math", "C++", "AI"],
  money: 2000,
  exam: function () {
    // console.log(this.name);
    // console.log(this.dept);
    // console.log(this.course[0]);
    return this.name + "is participating in an exam";
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is taking improvement on ${subject}`;
  },
  treatDay: function (amount) {
    this.money = this.money - amount;
    return this.money;
  },
};
const studentBorrow = {
    name: 'Md',
    money:7000,
}
// 
const remainMoney3 = student.exam.call(studentBorrow);
console.log(remainMoney3);
// 
const remainMoney1 = student.treatDay.call(studentBorrow, 600);
console.log(remainMoney1);
// 
const remainMoney2 = student.treatDay.apply(studentBorrow, [400]);
console.log(remainMoney2);
// 
const remainMoney4 = student.treatDay.bind(studentBorrow);
const remainMoney = remainMoney4(100);
console.log(remainMoney);

