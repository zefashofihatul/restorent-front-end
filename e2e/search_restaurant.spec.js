const assert = require('assert');

Feature('search restaurant');

Before(({ I }) => {
  I.amOnPage('/#/explore');
});

Scenario('Searching restaurant from API RestaurantDB', async ({ I }) => {
  I.seeElement('.restaurant');

  I.seeElement('.restaurant-info-name');
  const firstRestaurant = locate('.restaurant-info-name').at(3);
  const titleRestaurantOnMainPage = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.input-search');
  I.fillField('.input-search', titleRestaurantOnMainPage);
  I.click(locate('#button-search-restaurant'));

  I.seeElement('.restaurant-info-name');
  const searchTitleResult = locate('.restaurant-info-name').first();
  const titleRestaurantOnSearchContainer = await I.grabTextFrom(
    searchTitleResult
  );

  assert.strictEqual(
    titleRestaurantOnMainPage,
    titleRestaurantOnSearchContainer
  );
});

Scenario('Searching restaurant but not found', async ({ I }) => {
  I.seeElement('.restaurant');

  const titleDummyWillNotFoud = 'Just for testing';

  I.seeElement('.input-search');
  I.fillField('.input-search', titleDummyWillNotFoud);
  I.click(locate('#button-search-restaurant'));

  I.see('Restaurant Not Found', '.restaurantNotFound p');
});
