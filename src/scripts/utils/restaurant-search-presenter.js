import restaurantCard from '../views/templates/restaurant-card';
import restaurantNotFound from '../views/component/restaurant-not-found';

const RestaurantSearchPresenter = {
  init({ inputSearch, buttonSearch, restaurantSource }) {
    this._inputSearch = inputSearch;
    this._buttonSearch = buttonSearch;
    this._restaurantSource = restaurantSource;

    this._listeningButtonSearch();
  },

  _listeningButtonSearch() {
    this._buttonSearch.addEventListener('click', async () => {
      if (this._inputSearch.value === '') {
        this._inputSearch.classList.add('warning');
      } else {
        const exploreContent = document.querySelector('.explore-content');
        exploreContent.innerHTML = '<loading-card></loading-card>';
        const restaurants = await this._restaurantSource.getSearchRestaurant(
          this._inputSearch.value
        );
        this._inputSearch.classList.remove('warning');
        if (restaurants.length > 0) {
          this._renderCard(restaurants);
        } else {
          this._renderRestaurantNotFound();
        }
      }
    });
  },

  _renderCard(restaurants) {
    const exploreContent = document.querySelector('.explore-content');
    let restaurantsContainer = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer += restaurantCard(restaurant);
    });
    exploreContent.innerHTML = restaurantsContainer;
  },

  _renderRestaurantNotFound() {
    const exploreContent = document.querySelector('.explore-content');
    exploreContent.innerHTML = restaurantNotFound();
  },
};

export default RestaurantSearchPresenter;
