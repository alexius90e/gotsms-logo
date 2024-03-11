import './custom-select.js';

const themeTogglers = document.querySelectorAll('.theme-toggler');

themeTogglers.forEach((themeToggler) => {
  themeToggler.addEventListener('click', () => {
    themeToggler.classList.toggle('theme-toggler_dark');
    document.body.classList.toggle('dark');
  });
});
