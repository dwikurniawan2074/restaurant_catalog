import FavButtonInitiator from '../src/scripts/utils/fav-button-initiator';
import FavoriteRestaurantIdb from '../src/public/data/favorite-restaurant-idb';

describe('UnFavorite A Movie', () => {
    const addFavoriteButtonContainer = () => {
        document.body.innerHTML = '<div id="favorite-button-container" class="favorite-button-container"></div>';
    };

    beforeEach(async () => {
        addFavoriteButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });
   
    afterEach(async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(1);
    });
   
    it('should display unfavorite widget when the restaurant has been favorited', async () => {
      await FavButtonInitiator.init({
        favButtonContainer: document.querySelector('#favorite-button-container'),
        restaurant: {
          id: 1,
        },
      });
   
      expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeTruthy();
    });
   
    it('should not display favorite widget when the restaurant has been favorited', async () => {
      await FavButtonInitiator.init({
        favButtonContainer: document.querySelector('#favorite-button-container'),
        restaurant: {
          id: 1,
        },
      });
   
      expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeFalsy();
    });

    it('should be able to remove favorited restaurant from the list', async () => {
        await FavButtonInitiator.init({
        favButtonContainer: document.querySelector('#favorite-button-container'),
          restaurant: {
            id: 1,
          },
        });
        document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
      });
});