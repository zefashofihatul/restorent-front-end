import Main from '../views/pages/main';
import Favorites from '../views/pages/favorites';

const TabInitiator = {
  init({ buttonExplore, buttonFavorites }) {
    this._buttonExplore = buttonExplore;
    this._buttonFavorites = buttonFavorites;

    buttonExplore.addEventListener('click', async () => {
      window.location.href = '#/explore';
      const mainContainer = document.querySelector('main');
      mainContainer.innerHTML = await Main.render();
      await Main.afterRender();
    });

    buttonFavorites.addEventListener('click', async () => {
      window.location.href = '#/favorites';
      const mainContainer = document.querySelector('main');
      mainContainer.innerHTML = await Favorites.render();
      await Favorites.afterRender();
    });
  },

  _changeCondition(url = 'explore') {
    if (url.includes('favorites')) {
      this._changeTheme(this._buttonFavorites, this._buttonExplore);
    } else {
      this._changeTheme(this._buttonExplore, this._buttonFavorites);
    }
  },

  _changeTheme(buttonA, buttonB) {
    buttonB.disabled = false;
    buttonA.disabled = true;
    buttonA.classList.toggle('on-mode');
    buttonB.classList.toggle('on-mode');
  },
};

export default TabInitiator;
