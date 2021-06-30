import RestaurantSource from '../data/restaurantSource';
import restaurantCard from '../views/templates/restaurant-card';
import restaurantNotFound from '../views/component/restaurant-not-found';

const SearchInitiator = {
  init({ inputSearch, buttonSearch }) {
    buttonSearch.addEventListener('click', async () => {
      if (inputSearch.value === '') {
        inputSearch.classList.add('warning');
      } else {
        const exploreContent = document.querySelector('.explore-content');
        const restaurants = await RestaurantSource.getSearchRestaurant(
          inputSearch.value
        );
        inputSearch.classList.remove('warning');
        exploreContent.innerHTML = '<loading-card></loading-card>';
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

export default SearchInitiator;
