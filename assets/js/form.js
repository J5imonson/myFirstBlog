const username = document.getElementById('username');
const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');
const submit = document.getElementById('submit');
const form = document.querySelector('form');
const modeButton = document.querySelector('#modeButton');
const blogPost = (localStorage.getItem('formContent'));
const post = JSON.parse(blogPost) || [];

function submitForm(event) {
  event.preventDefault();
  const formContent = {
    username: username.value,
    blogTitle: blogTitle.value,
    blogContent: blogContent.value.trim(),
  }
  post.push(formContent);
  localStorage.setItem('formContent', JSON.stringify(post));
  document.location.href = "blog.html";
}

// submits user input to local storage
form.addEventListener('submit', submitForm);
// event.preventDefault();