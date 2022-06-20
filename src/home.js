import initialPageRender from "./initial-render";
import defaulPageRender from "./default-render";
import store from "./location-store";
import defaultDataStore from "./location-data-store";

function renderOnPageLoad() {
  const fragment = new DocumentFragment();
  store.location() === null
    ? fragment.append(initialPageRender())
    : fragment.append(defaulPageRender(defaultDataStore.defaultLocationData()));
  return fragment;
}

export default renderOnPageLoad;
