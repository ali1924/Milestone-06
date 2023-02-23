console.log('post placeholder');
function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
        .then(data => displayPosts(data));
}

// 1. get the container element where you want to add the new elements
// 2. creat child element
// 3. set innerText or innerHTML
// 4. appendChild
function displayPosts(data) {
    // console.log(data);
    const postContainer = document.getElementById("users-container");
    for (const post of data) {
        // console.log(post);
        const div = document.createElement('div');
        div.classList.add('post');//background color
        div.innerHTML = `
                <h4>Users-${post.userId}</h4>
                <h5>Post titile:${post.title}</h5>
                <p>Post Descrption: ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}