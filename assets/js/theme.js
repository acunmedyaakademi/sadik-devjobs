const toogleButton = document.querySelector('#theme-btn');
const body = document.body;

toogleButton.addEventListener('click', (e) => {
  const theme = e.target.checked ? "dark" : "light";
  body.setAttribute('data-theme', theme);

  console.log(theme);
  
});

