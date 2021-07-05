const assert = require('assert');

const savingRestaurant = async (I) => {
  I.seeElement('.restaurant');

  I.seeElement('.restaurant-info-name');
  const firstRestaurant = locate('.restaurant-info-name').first();
  const titleRestaurantOnMainPage = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.restaurant-button a');
  I.click(locate('.restaurant-button a').first());

  I.amOnPage('/#/detail');
  I.seeElement('.title-general-information h1');
  const titleRestaurantLocation = locate('.title-general-information h1');
  const titleRestaurantOnDetailPage = await I.grabTextFrom(
    titleRestaurantLocation
  );

  assert.strictEqual(titleRestaurantOnMainPage, titleRestaurantOnDetailPage);

  I.seeElement('[aria-label="save restaurant"]');
  I.click(locate('[aria-label="save restaurant"]'));

  I.click(locate('#back-page-button'));

  I.amOnPage('/');

  I.click(locate('.tab-button-favorites'));

  I.amOnPage('/#/favorites');
  const firstRestaurantOnFavoriteLocation = locate(
    '.restaurant-info-name'
  ).first();
  const titleRestaurantOnFavoritesPage = await I.grabTextFrom(
    firstRestaurantOnFavoriteLocation
  );

  assert.strictEqual(
    titleRestaurantOnDetailPage,
    titleRestaurantOnFavoritesPage
  );

  return titleRestaurantOnDetailPage;
};

module.exports = savingRestaurant;
