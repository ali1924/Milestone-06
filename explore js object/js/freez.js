// key:value or property:value
const bottole = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: 1,
};
// object all keys access
const keys = Object.keys(bottole);
console.log(keys);
// object all values access
const values = Object.values(bottole);
console.log(values);
// object all keys and values pair access
const pair = Object.entries(bottole);
console.log(pair);

console.log(bottole);
// delete object property
delete bottole.isCleaned;
console.log(bottole);
// seal used modify object property and
// It does not allow delete object property
// It does not allow added new object property
Object.seal(bottole);
delete bottole.capacity;
console.log(bottole); 
bottole.height = 50;
console.log(bottole);

// freez does not modify object property and
// It does not allow delete object property
// It does not allow added new object property
Object.freeze(bottole);
delete bottole.capacity;
console.log(bottole); 
bottole.height = 50;
console.log(bottole);
 
 