import Home from "../views/pages/now-playing";
import Favorites from "../views/pages/favorites";
import Detail from "../views/pages/detail";

const routes = {
  "/": Home, // default page
  "/favorites": Favorites,
  "/detail/:id": Detail,
};
export default routes;
