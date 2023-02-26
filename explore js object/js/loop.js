const numbers = [5, 10,];
// for of loop
for (const number of numbers) {
    console.log(number);
}
const bottle = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: 1,
};
// 1. for off can not be used with objects
const keys = Object.keys(bottle);
// 2 ways to read object property
// a. objectName.propertyName
// b. obJectName['propertyName']
// c. objectName[variable]
for (const key of keys) {
    console.log(bottle[key]);
}

// for in loop
for (const key in bottle) {
    console.log(key,bottle[key]);
}

// advance
const pair = Object.entries(bottle);
// two dimentional [[key,value],[key,value]]
