import renderState from "./renderState";
import favoriteState from "./favoriteState";
import favoriteStore from "./favorites-store";
import defaultDataStore from "./location-data-store";

function dataController(weatherData) {
  const homeViewData = renderState.currentState()
    ? defaultDataStore.defaultLocationData()
    : weatherData;
  weatherData = favoriteState.currentFavoriteState()
    ? favoriteStore.favoritesArray()
    : homeViewData;
  console.log(weatherData);
  return weatherData;
}

export default dataController;
