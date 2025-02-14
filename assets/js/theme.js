const toogleButton = document.querySelector('#theme-btn');
const body = document.body;

const userPreferance = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

body.setAttribute('data-theme', userPreferance);

toogleButton.addEventListener('click', (e) => {
  const theme = e.target.checked ? "dark" : "light";
  body.setAttribute('data-theme', theme);
  
});

