import '../styles/main.css';
import '../scripts/components/components.js';
import view from './view/view.js';


document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButtonElement = document.querySelector('#hamburger');
  const appBar = document.querySelector('app-bar');
  const mainElement = document.querySelector('main');

  hamburgerButtonElement.addEventListener('click', (event) => {
    appBar.classList.toggle('open');
    event.stopPropagation();
  });

  mainElement.addEventListener('click', (event) => {
    appBar.classList.remove('open');
    event.stopPropagation();
  });

  view();
});
