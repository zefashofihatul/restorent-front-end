import RestaurantSearchPresenter from '../src/scripts/utils/restaurant-search-presenter';
import RestaurantSource from '../src/scripts/data/restaurantSource';

describe('Searching the Restaurant', () => {
  const addInputElement = () => {
    document.body.innerHTML += `    
    <section class="explore">
      <div class="search-explore">
        <div class="input-search-container">
          <input class="input-search" id="input-search-restaurant" name="input-search" placeholder="Input name to search restaurant">
        </div>
        <div class="button-search-container">
          <button class="fa fa-search" id="button-search-restaurant"></button>
        </div>
      </div>
      <div class="explore-content">
      </div>
    </section>
    `;
  };

  beforeEach(() => {
    addInputElement();
  });

  fit('Should ask the model to search restaurant', async () => {
    spyOn(RestaurantSource, 'getSearchRestaurant');
    const inputSearch = document.querySelector('#input-search-restaurant');
    const buttonSearch = document.querySelector('#button-search-restaurant');
    RestaurantSearchPresenter.init({
      inputSearch,
      buttonSearch,
      restaurantSource: RestaurantSource,
    });
    inputSearch.value = 'kafe';
    buttonSearch.dispatchEvent(new Event('click'));
    expect(RestaurantSource.getSearchRestaurant).toHaveBeenCalledWith('kafe');
  });
});
