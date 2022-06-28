import renderHome from "../components/main-components/renderHome";
import renderFavorite from "../components/main-components/renderFavorites";

const routes = {
  "/": renderHome,
  "/favorites": renderFavorite,
};
const onClickRoutes = (pathName) => {
  console.log(pathName);
  console.log(routes[pathName]);

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
