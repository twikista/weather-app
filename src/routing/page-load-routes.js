import { de } from "date-fns/locale";
import renderHome from "../components/main-components/renderHome";
import renderFavorite from "../components/main-components/renderFavorites";

const routes = {
  "/": renderHome,
  "/dist/index.html": renderHome,
  "/favorites": renderFavorite,
};

const initialPageLoad = () => {
  const url = window.location.pathname;
  console.log(url);
  // if (url === "/dist/index.html" || url === window.location.pathname)
  routes[url]();
  // if (url === "/favorites") renderFavorite();

  window.onpopstate = () => {
    console.log(`${window.location.origin}${window.location.pathname}`);
    routes[window.location.pathname]();
  };
};

export default initialPageLoad;
