const assert = require('assert');
const savingRestaurant = require('./helpers/savingRestaurantTest');

Feature('unsaving restaurant');

Before(({ I }) => {
  I.amOnPage('/#/explore');
});

Scenario('Unsaving restaurant from API RestaurantDB', async ({ I }) => {
  const savedTitle = await savingRestaurant(I);

  I.amOnPage('/#/favorites');
  I.see(savedTitle, '.restaurant-info-name');

  I.click(locate('.restaurant-button a').first());

  I.amOnPage('/#/detail');

  I.seeElement('[aria-label="unsave restaurant"]');

  I.click(locate('[aria-label="unsave restaurant"]'));

  I.click(locate('#back-page-button'));

  I.amOnPage('/');

  I.click(locate('.tab-button-favorites'));

  I.see('Restaurant Not Found', '.restaurantNotFound');
});
