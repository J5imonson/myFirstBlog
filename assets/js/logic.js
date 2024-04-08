const theme = localStorage.getItem('theme') || 'lightMode';
let element = document.body;
const mode = document.getElementById('modeButton');

element.classList.add(theme);

// light/dark function
mode.addEventListener('click', function() {
  if ( element.classList.contains('lightMode')) {
    element.classList.remove('lightMode');
    element.classList.toggle('darkMode');
    localStorage.setItem('theme', 'darkMode');
  }
  else if (element.classList.contains('darkMode')) {
    element.classList.remove('darkMode');
    element.classList.add('lightMode')
    localStorage.setItem('theme', 'lightMode');
  }
});

