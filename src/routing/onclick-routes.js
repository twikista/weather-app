import renderHome from "../components/main-components/renderHome";
import renderFavorite from "../components/main-components/renderFavorites";
import renderSettings from "../components/main-components/settings";

const routes = {
  "/weather-app": renderHome,
  "/weather-app/favorites": renderFavorite,
  "/weather-app/settings": renderSettings,
};
const onClickRoutes = (pathName) => {
  window.history.pushState(
    {},
    pathName,
    `${window.location.origin}${pathName}`
  );

  const main = document.querySelector("main");
  main.innerHTML = "";
  routes[pathName]();
};

export default onClickRoutes;
