import RestaurantSource from '../../data/restaurantSource';
import restaurantDetail from '../templates/restaurant-detail';
import UrlParser from '../../routes/url-parser';
import saveButtonInitiator from '../../utils/save-button-initiator';
import AddReviewInitiator from '../../utils/add-review-initiator';

const Detail = {
  async render() {
    return `
    <loading-element></loading-element>
    <div class="container-save">
    </div>
    <section class="detail-page" id="maincontent">
    </section>
    `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const containerLoading = document.querySelector('#loadingContainer');
    const containerDetailPage = document.querySelector('.detail-page');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getDetailRestaurant(url.id);
    containerDetailPage.innerHTML = restaurantDetail(restaurant);
    containerLoading.classList.add('loadingOpen');
    this._initialDetailShell(restaurant);
  },

  async _initialDetailShell(restaurant) {
    saveButtonInitiator.init({
      saveButtonContainer: document.querySelector('.container-save'),
      backPageButton: document.querySelector('#back-page-button'),
      restaurant,
    });
    AddReviewInitiator.init({
      addReviewButton: document.querySelector('#add-review-button'),
      nameInputElement: document.querySelector('#add-review-name'),
      textInputElement: document.querySelector('#add-review-text'),
    });
  },
};

export default Detail;
