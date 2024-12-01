import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../scripts/components/components.js';
import view from './view/view.js';

const restaurantData = require('../public/data/DATA.json');
// console.log(restaurantData);
// restaurantData.restaurants.forEach((restaurant) => {
//     console.log(`Name: ${restaurant.name}, City: ${restaurant.city}, Rating: ${restaurant.rating}`);
//   });

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButtonElement = document.querySelector('#hamburger');
    const appBar = document.querySelector('app-bar');
    const mainElement = document.querySelector('main');

    hamburgerButtonElement.addEventListener('click', event => {
        appBar.classList.toggle('open');
        event.stopPropagation();
    });

    mainElement.addEventListener('click', event => {
        appBar.classList.remove('open');
        event.stopPropagation();
      });

    view();
});
