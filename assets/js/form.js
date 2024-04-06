const username = document.getElementById('username');
const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');
const submit = document.getElementById('submit');
const form = document.querySelector('form');
const modeButton = document.querySelector('#modeButton');

// submits user input to local storage
form.addEventListener('submit', function(event) {
  event.preventDefault();

  let formContent ={
    username: username.value,
    blogTitle: blogTitle.value,
    blogContent: blogContent.value.trim(),
  }
  localStorage.setItem('formContent', JSON.stringify(formContent));
  window.location.href = "blog.html";
});




