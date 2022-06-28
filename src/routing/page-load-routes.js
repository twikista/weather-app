import { de } from "date-fns/locale";
import renderHome from "../components/main-components/renderHome";
import renderFavorite from "../components/main-components/renderFavorites";
import renderSettings from "../components/main-components/settings";

const routes = {
  "https://twikista.github.io/": renderHome,
  "https://twikista.github.io/weather-app/": renderFavorite,
  "https://twikista.github.io/weather-app/": renderSettings,
};

const initialPageLoad = () => {
  const url = window.location.pathname;
  console.log(url);
  routes[url]();

  window.onpopstate = () => {
    console.log(`${window.location.origin}${window.location.pathname}`);
    routes[window.location.pathname]();
  };
};

export default initialPageLoad;
