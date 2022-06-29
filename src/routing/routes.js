import renderHome from "../components/main-components/renderHome";
import renderFavorite from "../components/main-components/renderFavorites";
import renderSettings from "../components/main-components/settings";

const routes = {
  "/weather-app": renderHome,
  "/weather-app/favorites": renderFavorite,
  "/weather-app/settings": renderSettings,
};

export default routes;
