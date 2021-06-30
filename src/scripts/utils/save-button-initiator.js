import FavoriteRestaurant from '../data/favorites-restaurant-idb';
import {
  createSaveButtonTemplate,
  createDeleteButtonTemplate,
} from '../views/component/save-button';

const saveButtonInitiator = {
  async init({ saveButtonContainer, restaurant }) {
    this._saveButtonContainer = saveButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderSaved();
    } else {
      this._renderSave();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderSave() {
    const saveTextContainer = document.querySelector('#saved-text');
    saveTextContainer.innerHTML = '';
    this._saveButtonContainer.innerHTML = createSaveButtonTemplate();
    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await FavoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderSaved() {
    const saveTextContainer = document.querySelector('#saved-text');
    saveTextContainer.innerHTML = `<p>You saved this resto</p>`;
    this._saveButtonContainer.innerHTML = createDeleteButtonTemplate();
    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default saveButtonInitiator;
