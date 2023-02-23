console.log('index json');
function loadUsers2(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
        .then(data => displayUsers2(data));
}
// function displayUsers2(data) {
//     console.log(data);
// }
// function displayUsers2(users) {
//     for (const user of users) {
//         // console.log(user);
//         // console.log(user.name);
//         // console.log(user.email);
//         console.log(user.name);
//     }
// }

function displayUsers2(data) {
    const ul = document.getElementById('users-list');
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}