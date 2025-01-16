import FavButtonInitiator from '../src/scripts/utils/fav-button-initiator';
import FavoriteRestaurantIdb from '../src/public/data/favorite-restaurant-idb';

describe('Favorite A Restaurant', () => {
    const addFavoriteButtonContainer = () => {
      document.body.innerHTML = '<div id="favorite-button-container" class="favorite-button-container"></div>';
    };

    beforeEach(() => {
      addFavoriteButtonContainer();
    });

    it('should show the favorite button when the restaurant has not been favorited before', async () => {

        await FavButtonInitiator.init({
            favButtonContainer: document.querySelector('#favorite-button-container'),
            restaurant: {
              id: 1,
            },
          });

          expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
    });

    it('should not show the unfavorite button when the restaurant has been favorited before', async () => {

      await FavButtonInitiator.init({
          favButtonContainer: document.querySelector('#favorite-button-container'),
          restaurant: {
            id: 1,
          },
        });

        expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favorite-button-container'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({id: 1});

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });


  it('should not add a restaurant when it has no id', async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favorite-button-container'),
      restaurant: {},
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});