import { createRestaurantTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../../public/data/favorite-restaurant-idb';

const Favorites = {
  async render() {
    return `
        <div class="restaurant-favorites">

          <div class="restaurant-favorites-header">
            <h1>Favorite Restaurants</h1>
          </div>

          <div class="restaurant-favorites-content">
            <div class="favorites-container">
            </div>
          </div>

        </div>
      `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoritesContainer = document.querySelector('.favorites-container');

    restaurants.forEach((restaurant) => {
      // favoritesContainer.innerHTML += createRestaurantTemplate(restaurant);
      const restaurantElement = createRestaurantTemplate(restaurant);
      favoritesContainer.appendChild(restaurantElement);
    });
  },
};
export default Favorites;
