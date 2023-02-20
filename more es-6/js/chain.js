const user = [{ name: 'ali', id: 24 }];
// console.log(user);
// console.log(user.name);
// console.log(user[0].name);

// nesting access
const data = {
    count: 100,
    data: [
        { name: 'Md', id: 24 },
        { name: 'Ali', id: 1819, dept:'CSE'}
    ],
};
// console.log(data.data[0].name);
console.log(data.data[1].id);
