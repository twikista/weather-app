import routes from "./routes";

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
