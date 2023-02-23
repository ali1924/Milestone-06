// console.log('fetching');
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       // .then(response => response.json())//.json not similar but closed to JSON.parse
//       .then(response => console.log(response))
//       // .then(json => console.log(json))
// Step-1
// fetch("https://jsonplaceholder.typicode.com/todos/1");
// const url = "https://jsonplaceholder.typicode.com/todos/1";
// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));
const url = "https://jsonplaceholder.typicode.com/todos/1";
function loadData() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
