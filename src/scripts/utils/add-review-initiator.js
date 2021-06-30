import RestaurantSource from '../data/restaurantSource';
import UrlParser from '../routes/url-parser';
import destructoringCustomerReview from '../views/templates/helper/destructoring-customer-review';

const AddReviewInitiator = {
  init({ addReviewButton, nameInputElement, textInputElement }) {
    this._nameInputElement = nameInputElement;
    this._textInputElement = textInputElement;

    addReviewButton.addEventListener('click', async () => {
      if (this._isInputNotNull) await this._sendReview();
    });
  },

  async _sendReview() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const customerReview = await RestaurantSource.postReviewRestaurant({
      id: `${url.id}`,
      name: `${this._nameInputElement.value}`,
      review: `${this._textInputElement.value}`,
    });
    const containerReview = document.querySelector('.costumer-review-cards');
    containerReview.innerHTML = destructoringCustomerReview(customerReview);

    // Clear input value
    this._nameInputElement.classList.remove('warning');
    this._nameInputElement.value = '';
    this._textInputElement.classList.remove('warning');
    this._textInputElement.value = '';
  },

  _isInputNotNull() {
    if (
      this._textInputElement.value === '' ||
      this._nameInputElement.value === ''
    ) {
      if (this._nameInputElement.value === '') {
        this._nameInputElement.classList.add('warning');
      } else {
        this._nameInputElement.classList.remove('warning');
      }
      if (this._textInputElement.value === '') {
        this._textInputElement.classList.add('warning');
      } else {
        this._textInputElement.classList.remove('warning');
      }
      return false;
    }
    return true;
  },
};

export default AddReviewInitiator;
