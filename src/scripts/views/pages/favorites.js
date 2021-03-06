import restaurantCard from '../templates/restaurant-card';
import FavoriteRestaurant from '../../data/favorites-restaurant-idb';
import restaurantNotFound from '../component/restaurant-not-found';

const Favorites = {
  async render() {
    return `
      <!-- Explore Restaurant -->
      <section class="explore">
        <div class="explore-title">
          <h2 tabindex="0">Favorites Restaurant</h2>
          <p>Here are your favorites Restaurant</p>
        </div>
        <div class="favorites-content">
        <loading-card></loading-card>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestaurant.getAllRestaurant();
    const restaurantsContainer = document.querySelector('.favorites-content');
    restaurantsContainer.innerHTML = '';
    console.log(restaurants);
    if (!restaurants.length > 0) {
      restaurantsContainer.innerHTML = restaurantNotFound();
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += restaurantCard(restaurant);
      });
    }
  },
};

export default Favorites;
