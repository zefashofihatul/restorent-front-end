import FavoriteRestaurant from '../src/scripts/data/favorites-restaurant-idb';
import saveButtonInitiator from '../src/scripts/utils/save-button-initiator';

const addSaveButtonContainer = () => {
  document.body.innerHTML += '<div class="container-save"></div>';
  document.body.innerHTML += '<div class="saved" id="saved-text"></div>';
};

describe('Unsave favorite restaurant', () => {
  beforeEach(async () => {
    const idTest = 1;
    addSaveButtonContainer();
    await FavoriteRestaurant.putRestaurant({ id: idTest });
  });

  afterEach(async () => {
    const idTest = 1;
    await FavoriteRestaurant.deleteRestaurant(idTest);
  });

  it('Should display trash button when the restaurant has been liked', async () => {
    await saveButtonInitiator.init({
      saveButtonContainer: document.querySelector('.container-save'),
      restaurant: {
        id: 1,
      },
    });
    expect(
      document.querySelector('[aria-label="unsave restaurant"]')
    ).toBeTruthy();
  });

  it('Should not display save button when the restaurant has been liked', async () => {
    const idTest = 1;
    await saveButtonInitiator.init({
      saveButtonContainer: document.querySelector('.container-save'),
      restaurant: {
        id: idTest,
      },
    });
    expect(
      document.querySelector('[aria-label="save restaurant"]')
    ).toBeFalsy();
  });

  it('Should be able to remove saved restaurant from database', async () => {
    const idTest = 1;
    await saveButtonInitiator.init({
      saveButtonContainer: document.querySelector('.container-save'),
      restaurant: {
        id: idTest,
      },
    });
    document
      .querySelector('[aria-label="unsave restaurant"')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });

  it('Should not throw error if the unsaved restaurant is not in the list', async () => {
    const idTest = 1;
    await saveButtonInitiator.init({
      saveButtonContainer: document.querySelector('.container-save'),
      restaurant: {
        id: idTest,
      },
    });
    await FavoriteRestaurant.deleteRestaurant(idTest);
    document
      .querySelector('[aria-label="unsave restaurant"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });
});
