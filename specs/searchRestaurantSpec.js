import RestaurantSearchPresenter from '../src/scripts/utils/restaurant-search-presenter';
import RestaurantSource from '../src/scripts/data/restaurantSource';

describe('Searching the Restaurant', () => {
  let present;
  let restaurantSource;

  const addInputElement = () => {
    document.body.innerHTML = `    
    <section class="explore" id="explore">
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

  const searchRestaurant = (textInput) => {
    const inputSearch = document.querySelector('#input-search-restaurant');
    const buttonSearch = document.querySelector('#button-search-restaurant');
    inputSearch.value = textInput.trim();
    buttonSearch.dispatchEvent(new Event('click'));
  };

  const constructPresenter = () => {
    restaurantSource = spyOnAllFunctions(RestaurantSource);
    spyOn(RestaurantSource, 'getSearchRestaurant');
    present = new RestaurantSearchPresenter({
      inputSearch: document.querySelector('#input-search-restaurant'),
      buttonSearch: document.querySelector('#button-search-restaurant'),
      restaurantSource,
    });
  };

  beforeEach(() => {
    addInputElement();
    constructPresenter();
  });

  describe('When text input is not empty', () => {
    it('Should be able to typed by user', () => {
      searchRestaurant('kafe');
      expect(present.latestTextInput).toEqual('kafe');
    });

    it('Should ask the model to search restaurant', () => {
      searchRestaurant('kafe');
      expect(restaurantSource.getSearchRestaurant).toHaveBeenCalledWith('kafe');
    });

    it('Should show the found restaurant', (done) => {
      document
        .getElementById('explore')
        .addEventListener('explore-content:searched:updated', () => {
          expect(document.querySelectorAll('.restaurant').length).toEqual(2);
          done();
        });

      restaurantSource.getSearchRestaurant.withArgs('kafe').and.returnValues([
        { id: 1, name: 'kafe' },
        { id: 3, name: 'mickey' },
      ]);

      searchRestaurant('kafe');
    });

    it('Should show the name restaurant of the found restaurant', (done) => {
      document
        .getElementById('explore')
        .addEventListener('explore-content:searched:updated', () => {
          expect(
            document.querySelectorAll('.restaurant-info-name').item(0)
              .textContent
          ).toEqual('kafein');
          expect(
            document.querySelectorAll('.restaurant-info-name').item(1)
              .textContent
          ).toEqual('kafeun');
          done();
        });

      restaurantSource.getSearchRestaurant.withArgs('kafe').and.returnValues([
        { id: 1111, name: 'kafein' },
        { id: 222, name: 'kafeun' },
      ]);

      searchRestaurant('kafe');
    });

    it('Should show search result by restaurants', (done) => {
      document
        .getElementById('explore')
        .addEventListener('explore-content:searched:updated', () => {
          expect(document.querySelectorAll('.restaurant').length).toEqual(3);

          done();
        });

      restaurantSource.getSearchRestaurant.withArgs('kafe').and.returnValues([
        { id: 111, name: 'kafe' },
        { id: 222, name: 'ada juga restaurant abcde' },
        { id: 333, name: 'ini juga boleh restaurant a' },
      ]);

      searchRestaurant('kafe');
    });

    it('Should show search result by name restaurant', (done) => {
      document
        .getElementById('explore')
        .addEventListener('explore-content:searched:updated', () => {
          expect(
            document.querySelectorAll('.restaurant-info-name').item(0)
              .textContent
          ).toEqual('kafe');
          expect(
            document.querySelectorAll('.restaurant-info-name').item(1)
              .textContent
          ).toEqual('ada juga restaurant abcde');
          expect(
            document.querySelectorAll('.restaurant-info-name').item(2)
              .textContent
          ).toEqual('ini juga boleh restaurant a');

          done();
        });

      restaurantSource.getSearchRestaurant.withArgs('kafe').and.returnValues([
        { id: 111, name: 'kafe' },
        { id: 222, name: 'ada juga restaurant abcde' },
        { id: 333, name: 'ini juga boleh restaurant a' },
      ]);

      searchRestaurant('kafe');
    });
  });

  describe('When text input is empty', () => {
    it('Should capture text input as empty', () => {
      searchRestaurant(' ');
      expect(present.latestTextInput.length).toEqual(0);

      searchRestaurant('    ');
      expect(present.latestTextInput.length).toEqual(0);

      searchRestaurant('');
      expect(present.latestTextInput.length).toEqual(0);

      searchRestaurant('\t');
      expect(present.latestTextInput.length).toEqual(0);
    });
  });

  describe('When no restaurant found', () => {
    it('Should show message', (done) => {
      document
        .getElementById('explore')
        .addEventListener('explore-content:searched:updated', () => {
          expect(
            document.querySelectorAll('.restaurantNotFound').length
          ).toEqual(1);
          done();
        });

      restaurantSource.getSearchRestaurant
        .withArgs('kafe')
        .and.returnValues([]);

      searchRestaurant('kafe');
    });
  });
});
