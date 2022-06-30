import initialHomepage from "../home-components/initial-homepage.js";
import configuredHomepage from "../home-components/configured-homepage";
import defaultLocation from "../../data/default-location";
import defaultDataStore from "../../data/default-location-data.js";

const renderHome = () => {
  const fragment = new DocumentFragment();
  defaultLocation.savedLocation() === null
    ? fragment.append(initialHomepage())
    : fragment.append(
        configuredHomepage(defaultDataStore.defaultLocationData())
      );

  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = "";
    main.append(fragment);
    return;
  }
  return fragment;
};

export default renderHome;
