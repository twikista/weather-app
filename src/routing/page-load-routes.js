import routes from "./routes";

const onInitialPageLoad = () => {
  const url = window.location.pathname;
  routes[url]();
};

export default onInitialPageLoad;
