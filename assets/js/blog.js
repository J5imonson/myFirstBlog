//retrieves user input from localStorage
const main = document.querySelector('.posts');

function readPost() {
  const blogPost = (localStorage.getItem('formContent'));
  const post = JSON.parse(blogPost) || [];

  for (let i = 0; i < post.length; i++) {
    const div = document.createElement("div")
    div.classList.add("blogPost")
    let html = `
  <h2>${post[i].blogTitle}</h2>
  <p>User: ${post[i].username}</p>
  <p>Post: ${post[i].blogContent}</p>
  `
    div.innerHTML = html
    main.appendChild(div)
  }
};

readPost();

//dynamically generated blogs stuff