import onInitialPageLoad from "./page-load-routes";
import onBrowserNavigate from "./onBrowserNavigate";

const callRoutes = () => {
  onInitialPageLoad();
  onBrowserNavigate();
};

export default callRoutes;
