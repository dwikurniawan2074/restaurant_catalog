// import Home from "../views/pages/";
import Home from '../../scripts/view/pages/home';
import Favorites from '../../scripts/view/pages/favorites';
import Detail from '../../scripts/view/pages/detail';

const routes = {
  '/': Home, // default page
  '/favorites': Favorites,
  '/detail/:id': Detail,
};
export default routes;
