import routes from "./routes";

const onBrowserNavigate = () => {
  window.onpopstate = () => {
    routes[url]();
  };
};

export default onBrowserNavigate;
