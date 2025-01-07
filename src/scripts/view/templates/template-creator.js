import CONFIG from '../../globals/config';
import '../../components/restaurant-item';
import '../../components/food-item';
import '../../components/testimonial-item';

const createRestaurantTemplate = (restaurant) => {
  const restaurantItem = document.createElement('restaurant-item');
  restaurantItem.setRestaurantItem(restaurant);
  return restaurantItem;
};

const createRestaurantDetailTemplate = (restaurant) => `
    
        <div class="detail-content-container">
            <div class="detail-content-left">
                <div class="content-left-container">
                    <h1 class="detail-restaurant-name">${restaurant.name} </h1>
                    <p class="detail-restaurant-address">${restaurant.address} </p>
                    <p class="detail-restaurant-desc">${restaurant.description}</p>
                </div>
            </div>
            <div class="detail-content-right">
                <img src="${CONFIG.BASE_IMAGE_URL+restaurant.pictureId}" alt="restaurant-image"/>
                <div class="detail-restaurant-city primary-color-button">
                    <p style="margin: 10px 0px;">${restaurant.city}</p>
                </div>
            </div>
        </div>
    
`;

const createFoodTemplate = (food) => {
  const foodItem = document.createElement('food-item');
  foodItem.setFoodItem(food);
  return foodItem;
};

const createDrinkTemplate = (drink) => {
  const drinkItem = document.createElement('drink-item');
  drinkItem.setDrinkItem(drink);
  return drinkItem;
};

const createReviewTemplate = (review) => {
  const template = document.createElement('template');
  template.innerHTML = `
      <testimonial-item profileImg="./images/default_user.png" profileName="${review.name}" profileJob="${review.date}" reviewDesc="${review.review}"></testimonial-item>
    `.trim();
  return template.content.firstChild;
};

const createFavoriteButtonTemplate = () => `
    <button id="favoriteButton" class="shadow-box box-leaf primary-color-button"> Add to Favorites </button>
`;

const createFavoritedButtonTemplate = () => `
    <button id="favoriteButton" class="shadow-box box-leaf primary-color-button"> Unfavorite </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createFoodTemplate,
  createDrinkTemplate,
  createReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate
};