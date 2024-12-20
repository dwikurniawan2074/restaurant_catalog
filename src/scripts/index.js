import '../styles/main.css';
import '../scripts/components/components.js';
import 'regenerator-runtime';
import App from './view/app.js';

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

  // view();
  const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('app-bar'),
    content: document.querySelector('main'),
  });
  
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  window.addEventListener('load', () => {
    app.renderPage();
  });
});

