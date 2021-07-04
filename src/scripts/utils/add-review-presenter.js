import RestaurantSource from '../data/restaurantSource';
import destructoringCustomerReview from '../views/templates/helper/destructoring-customer-review';

class AddReviewPresenter {
  constructor({
    addReviewButton,
    nameInputElement,
    textInputElement,
    restaurant,
  }) {
    this._nameInputElement = nameInputElement;
    this._textInputElement = textInputElement;
    this._addReviewButton = addReviewButton;
    this._restaurant = restaurant;

    this._sendReview = this._sendReview.bind(this);
    this._isInputNotNull = this._isInputNotNull.bind(this);

    this._listeningAddReviewButton();
  }

  async _listeningAddReviewButton() {
    this._addReviewButton.addEventListener('click', async () => {
      if (this._isInputNotNull()) {
        await this._sendReview();
        this._makeNewEventReview();
      }
    });
  }

  get valueInputText() {
    return this._textInputElement.value.trim();
  }

  get valueInputName() {
    return this._nameInputElement.value.trim();
  }

  async _sendReview() {
    const customerReview =
      (await RestaurantSource.postReviewRestaurant({
        id: `${this._restaurant.id}`,
        name: `${this._nameInputElement.value.trim()}`,
        review: `${this._textInputElement.value.trim()}`,
      })) || [];

    const containerReview = document.querySelector('.costumer-review-cards');
    containerReview.innerHTML = destructoringCustomerReview(customerReview);

    // Clear input value
    this._nameInputElement.classList.remove('warning');
    this._nameInputElement.value = '';
    this._textInputElement.classList.remove('warning');
    this._textInputElement.value = '';
  }

  _isInputNotNull() {
    if (
      this._textInputElement.value.trim() === '' ||
      this._nameInputElement.value.trim() === ''
    ) {
      if (this._nameInputElement.value.trim() === '') {
        this._nameInputElement.classList.add('warning');
      } else {
        this._nameInputElement.classList.remove('warning');
      }
      if (this._textInputElement.value.trim() === '') {
        this._textInputElement.classList.add('warning');
      } else {
        this._textInputElement.classList.remove('warning');
      }
      return false;
    }
    return true;
  }

  _makeNewEventReview() {
    document
      .querySelector('#review')
      .dispatchEvent(new Event('costumer-review-cards:searched:updated'));
  }
}

export default AddReviewPresenter;
