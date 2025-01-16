import UrlParser from '../../../scripts/routes/url-parser';
import DataSource from '../../../public/data/data-source';
import { createRestaurantDetailTemplate, createRestaurantDetailNoData, createFoodTemplate, createDrinkTemplate, createReviewTemplate } from '../templates/template-creator';
import FavButtonInitiator from '../../../scripts/utils/fav-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="restaurant-detail" class="restaurant-detail">
          <div class="restaurant-detail-header"></div>
          <div id="restaurant-detail-content" class="restaurant-detail-content"></div>
          <div id="favorite-button-container" class="favorite-button-container">
          </div>
          <div class="restaurant-detail-food">
              <h1>Foods Menu</h1>
              <div id="food-container" class="food-container">
              </div>
          </div>
          <div class="restaurant-detail-drinks">
              <h1>Drinks Menu</h1>
              <div id="drinks-container" class="drinks-container">
              </div>
          </div>
          <div class="restaurant-detail-review">
              <h1>Customer Review</h1>
              <div id="reviews-container" class="reviews-container">
              </div>
          </div>
          <footer>
              <footer-bar></footer-bar>
          </footer>
        </div>
      `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant-detail-content');

    try {
      const restaurant = await DataSource.detailRestaurant(url.id);

      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      FavButtonInitiator.init({
        favButtonContainer: document.querySelector('#favorite-button-container'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          rating: restaurant.rating,
        },
      });

      const foods = restaurant.menus.foods;
      const foodContainer = document.querySelector('#food-container');
      foods.forEach((food) => {
        const foodElement = createFoodTemplate(food);
        foodContainer.appendChild(foodElement);
      });

      const drinks = restaurant.menus.drinks;
      const drinksContainer = document.querySelector('#drinks-container');
      drinks.forEach((drink) => {
        const drinkElement = createDrinkTemplate(drink);
        drinksContainer.appendChild(drinkElement);
      });

      const reviews = restaurant.customerReviews;
      const reviewsContainer = document.querySelector('#reviews-container');
      reviews.forEach((review) => {
        const reviewElement = createReviewTemplate(review);
        console.log(reviewElement);
        reviewsContainer.appendChild(reviewElement);
      });
    } catch (error) {
      console.log(error);
      restaurantContainer.innerHTML = createRestaurantDetailNoData();
    }


  },
};
export default Detail;
