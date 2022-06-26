import renderHomeState from "../states/home-state";
import renderFavoriteState from "../states/favorite-state";
import favorites from "./favorites-data";
import defaultDataStore from "./default-location-data";

function dataController(weatherData) {
  const homeViewData = renderHomeState.renderingHome()
    ? defaultDataStore.defaultLocationData()
    : weatherData;
  weatherData = renderFavoriteState.renderingFavorite()
    ? favorites.favoritesData()
    : homeViewData;
  console.log(weatherData);
  return weatherData;
}

export default dataController;
