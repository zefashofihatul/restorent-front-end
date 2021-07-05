const assert = require('assert');
const savingRestaurant = require('./helpers/savingRestaurantTest');

Feature('saving restaurant');

Before(({ I }) => {
  I.amOnPage('/#/explore');
});

Scenario('Saving restaurant from API RestaurantDB', async ({ I }) => {
  await savingRestaurant(I);
});
