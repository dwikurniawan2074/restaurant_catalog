import '../styles/main.css';
import '../scripts/components/components.js';
import 'regenerator-runtime';
import App from './view/app.js';
import swRegister from './utils/sw-register.js';

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButtonElement = document.querySelector('#hamburger');
  const appBar = document.querySelector('app-bar');
  const mainElement = document.querySelector('main');

  const app = new App({
    button: hamburgerButtonElement,
    drawer: appBar,
    content: mainElement,
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});

