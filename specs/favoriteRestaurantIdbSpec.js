import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurant from '../src/scripts/data/favorites-restaurant-idb';

describe('Favorite restaurant Idb Contract Test implementation', () => {
  afterEach(async () => {
    await (
      await FavoriteRestaurant.getAllRestaurant()
    ).forEach(async (restaurant) => {
      await FavoriteRestaurant.deleteRestaurant(restaurant.id);
    });
  });
  itActsAsFavoriteRestaurantModel(FavoriteRestaurant);
});
