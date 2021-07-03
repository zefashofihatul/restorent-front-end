import RestaurantSource from '../../data/restaurantSource';
import restaurantCard from '../templates/restaurant-card';
import RestaurantSearchPresenter from '../../utils/restaurant-search-presenter';

const Main = {
  async render() {
    return `

    <!-- Explore Restaurant -->
    <section class="explore">
      <div class="explore-title">
        <h2 tabindex="0">Explore Restaurant</h2>
        <p>Here are the restaurant that you might interest</p>
      </div>
      <div class="search-explore">
        <div class="input-search-container">
          <input class="input-search" id="input-search-restaurant" name="input-search" placeholder="Input name to search restaurant">
        </div>
        <div class="button-search-container">
          <button class="fa fa-search" id="button-search-restaurant"></button>
        </div>
      </div>
      <div class="explore-content">
        <loading-card></loading-card>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getDataRestaurants();
    const restaurantsContainer = document.querySelector('.explore-content');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restaurantCard(restaurant);
    });

    this._initialMainShell();
  },

  async _initialMainShell() {
    RestaurantSearchPresenter.init({
      inputSearch: document.querySelector('#input-search-restaurant'),
      buttonSearch: document.querySelector('#button-search-restaurant'),
      restaurantSource: RestaurantSource,
    });
  },
};

export default Main;
