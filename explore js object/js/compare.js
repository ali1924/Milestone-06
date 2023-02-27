// number comare
const first = 2;
const second = 2;
if (first === second) {
    console.log("number are same");
}
else {
    console.log("different number");
}
// object compare
// const firstObj = { a: 2 };
// const secondObj = { a: 2 };
// const thirdObj = secondObj;
// if (thirdObj === secondObj) {
//     console.log('Objects are same');
// } else {
//     console.log('different object')
// }

// do not use this method to compare object or array
const firstObj = { a: 2 };
const secondObj = { a: 2 };
const firstStr = JSON.stringify(firstObj);
const secondStr = JSON.stringify(secondObj);
console.log(firstStr, secondStr);
if (firstStr === secondStr) {
    console.log('Objects are same');
} else {
    console.log('different object')
}

// 2 object comparemethot but not use
function comapareObject(firstObj, secondObj) {
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);
    if (firstObjKeys.length === secondObjKeys.length) {
        // console.log('Same Object');
        for (const key of firstObjKeys) {
            if (firstObj[key] !== secondObj[key]) {
                return false;
            }
        }
        return true;
    } 
}
const obj = comapareObject(firstObj, secondObj);
console.log(obj);