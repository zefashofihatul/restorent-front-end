import saveButtonPresenter from '../../src/scripts/utils/save-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await saveButtonPresenter.init({
    saveButtonContainer: document.querySelector('.container-save'),
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
