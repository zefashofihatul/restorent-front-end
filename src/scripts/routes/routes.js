import Detail from '../views/pages/detail';
import Main from '../views/pages/main';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': Main, // default page
  '/explore': Main,
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
