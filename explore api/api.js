const user = {
    id: 1, name: "Ali", job: "student"
};
console.log(user);
console.log(Object)
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(stringified);
/*
{id: 1, name: 'Ali', job: 'student'}
{"id":1,"name":"Ali","job":"student"}
*/ 
const shop = {
    owner: 'Ali',
    address: {
        street: 'Khukni',
        city: 'Sirajganj',
        country: 'Bangladesh',
    },
    product: ['Mobile', 'Laptop', 'Monitor'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};
console.log(shop);
console.log(shop.JSON);
// convert object to string
const string = JSON.stringify(shop);
console.log(string);
// convert JSON string to object
const object = JSON.parse(string);
console.log(object);