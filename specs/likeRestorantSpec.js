import FavoriteRestaurant from '../src/scripts/data/favorites-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Save Favorite Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML += '<div class="saved" id="saved-text"></div>';
    document.body.innerHTML += '<div class="container-save"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('Should show the save button when the restaurant has not been saved before', async () => {
    const idTest = 1;
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: idTest });
    expect(
      document.querySelector('[aria-label="save restaurant"]')
    ).toBeTruthy();
  });

  it('Should not show the trash button when the restaurant has not been saved before', async () => {
    const idTest = 1;
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: idTest });
    expect(
      document.querySelector('[aria-label="unsave restaurant"]')
    ).toBeFalsy();
  });

  it('Should be able to like the save the restaurant', async () => {
    const idTest = 1;
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: idTest });

    document.querySelector('#saveButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurant.getRestaurant(idTest);
    expect(restaurant).toEqual({ id: idTest });
    await FavoriteRestaurant.deleteRestaurant(idTest);
  });

  it('Should not add a restaurant again when its saved before', async () => {
    const idTest = 1;
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: idTest });
    await FavoriteRestaurant.putRestaurant({ id: idTest });
    document.querySelector('#saveButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([
      { id: idTest },
    ]);
    await FavoriteRestaurant.deleteRestaurant(idTest);
  });

  it('Should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#saveButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });
});
