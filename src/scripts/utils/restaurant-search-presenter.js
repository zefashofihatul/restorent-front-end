import restaurantCard from '../views/templates/restaurant-card';
import restaurantNotFound from '../views/component/restaurant-not-found';

class RestaurantSearchPresenter {
  constructor({ inputSearch, buttonSearch, restaurantSource }) {
    this._inputSearch = inputSearch;
    this._buttonSearch = buttonSearch;
    this._restaurantSource = restaurantSource;

    this._listeningButtonSearch = this._listeningButtonSearch.bind(this);
    this._renderCard = this._renderCard.bind(this);
    this._searchRestaurant = this._searchRestaurant.bind(this);
    this._renderRestaurantNotFound = this._renderRestaurantNotFound.bind(this);

    this._listeningButtonSearch();
  }

  async _listeningButtonSearch() {
    this._buttonSearch.addEventListener('click', async () => {
      if (this._inputSearch.value === '') {
        this._inputSearch.classList.add('warning');
      } else {
        await this._searchRestaurant();
      }
    });
  }

  async _searchRestaurant() {
    const exploreContent = document.querySelector('.explore-content');
    exploreContent.innerHTML = '<loading-card></loading-card>';
    const restaurants =
      (await this._restaurantSource.getSearchRestaurant(
        this._inputSearch.value.trim()
      )) || [];
    this._inputSearch.classList.remove('warning');

    if (restaurants.length > 0) {
      this._renderCard(restaurants);
    } else {
      this._renderRestaurantNotFound();
    }
  }

  get latestTextInput() {
    return this._inputSearch.value;
  }

  _renderCard(restaurants) {
    const exploreContent = document.querySelector('.explore-content');
    let restaurantsContainer = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer += restaurantCard(restaurant);
    });
    exploreContent.innerHTML = restaurantsContainer;
    this._makeNewEventExploreContent();
  }

  _renderRestaurantNotFound() {
    const exploreContent = document.querySelector('.explore-content');
    exploreContent.innerHTML = restaurantNotFound();
    this._makeNewEventExploreContent();
  }

  _makeNewEventExploreContent() {
    document
      .getElementById('explore')
      .dispatchEvent(new Event('explore-content:searched:updated'));
  }
}

export default RestaurantSearchPresenter;
