import getData from "./fetch-data";
import store from "./location-store";
import weatherCard from "./weatherCard";
import defaultDataStore from "./location-data-store";
import renderState from "./renderState";

// const defaulPageRender = () => {
//   const defaultLocationData = defaultDataStore.defaultLocationData();
//   console.log(defaultLocationData);
//   renderState.setIsRenderingDefault(true);
//   const fragment = new DocumentFragment();
//   fragment.append(weatherCard(defaultLocationData));

//   return fragment;
// };

const defaulPageRender = (weatherData) => {
  //const defaultLocationData = defaultDataStore.defaultLocationData();
  //console.log(defaultLocationData);
  renderState.setIsRenderingDefault(true);
  const fragment = new DocumentFragment();
  fragment.append(weatherCard(weatherData));

  return fragment;
};

export default defaulPageRender;
