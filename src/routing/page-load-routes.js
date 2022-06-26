import { de } from "date-fns/locale";
import renderHome from "../components/main-components/renderHome";
import renderFavorite from "../components/main-components/renderFavorites";

const initialPageLoad = () => {
  const url = window.location.pathname;
  console.log(url);
  if (url === "/dist/index.html" || url === "/") renderHome();
};

export default initialPageLoad;
