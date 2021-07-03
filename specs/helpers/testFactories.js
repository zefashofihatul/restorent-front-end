import saveButtonPresenter from '../../src/scripts/utils/save-button-presenter';
import FavoriteRestaurant from '../../src/scripts/data/favorites-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await saveButtonPresenter.init({
    saveButtonContainer: document.querySelector('.container-save'),
    favoriteRestaurant: FavoriteRestaurant,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
