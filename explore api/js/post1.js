console.log("post 1 kson placeholder ");
function loadUsers1() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayUsers1(data));
}
function displayUsers1(data) {
  // console.log(data);
  // console.log(data.userId);
  const postContainer = document.getElementById("post-div");
  for (const post of data) {
    // console.log(post.userId)
    // dynamic element creat
      const div = document.createElement("div");
    //   const p = document.createElement('p');
    //   p.classList.add('para-class');
      div.classList.add('postClass');
      
    div.innerHTML = `
            <h3>Post-${post.userId}</h3>
            <h4>Post title-${post.title}</h4>
            <p>Post descrption-${post.body}</p>
            
    `;
    postContainer.appendChild(div);
  }
//   console.log("ali");
}
