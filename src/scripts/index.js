// Importing module
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import App from './views/app';
// import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.drawer'),
  content: document.querySelector('header'),
  main: document.querySelector('main'),
  container: document.querySelector('section.container'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});
