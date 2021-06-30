import './component/nav';
import './component/loading';
import './component/loadingCard';
import DrawerInitiator from '../utils/drawer-initiator';
import TabInitiator from '../utils/tab-initiator';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({ button, drawer, content, main, container }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._main = main;
    this._container = container;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      main: this._main,
      container: this._container,
    });

    TabInitiator.init({
      buttonExplore: document.querySelector('.tab-button-explore'),
      buttonFavorites: document.querySelector('.tab-button-favorites'),
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    TabInitiator._changeCondition(url);
    if (url.includes('detail')) {
      this._container.innerHTML = await page.render();
      await page.afterRender();
    } else {
      this._main.innerHTML = await page.render();
      await page.afterRender();
    }
  }
}

export default App;
