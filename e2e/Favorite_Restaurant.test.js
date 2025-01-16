Feature('Favorite Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorites');
  });

Scenario('showing empty favorited restaurants',  ({ I }) => {
    I.seeElement('.restaurant-item__not__found');
    I.see('No Restaurants.', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('No Restaurants.', '.restaurant-item__not__found');
  I.amOnPage('/');
  // pause();
  I.seeElement('.restaurant-name a');
  I.click(locate('.restaurant-name a').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');
  I.seeElement('restaurant-item');
});

Scenario('Unlike one restaurant', ({ I }) => {
  I.see('No Restaurants.', '.restaurant-item__not__found');
  I.amOnPage('/');
  // ... kita akan mengisi uji coba berikutnya ...
  // pause();
  I.seeElement('.restaurant-name a');
  I.click(locate('.restaurant-name a').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-name a');
  I.click(locate('.restaurant-name a').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');

  I.seeElement('.restaurant-item__not__found');
  I.see('No Restaurants.', '.restaurant-item__not__found');
});