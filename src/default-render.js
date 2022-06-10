import getData from "./fetch-data";
import store from "./location-store";
import weatherCard from "./weatherCard";
import defaultDataStore from "./location-data-store";

const defaulPageRender = () => {
  const defaultLocationData = defaultDataStore.defaultLocationData();
  console.log(defaultLocationData);
  const fragment = new DocumentFragment();
  fragment.append(weatherCard(defaultLocationData));

  return fragment;
};

export default defaulPageRender;
