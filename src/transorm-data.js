// import weatherCard from "./weatherCard";
import favorites from "./data/favorites-data";
import defaultLocation from "./data/default-location";
import defaultDataStore from "./data/default-location-data";
import renderSearchedLocation from "./components/home-components/render-searched-location";
import renderHomeState from "./states/home-state";
import { userTime } from "./timeAndDate";
import renderFavoriteState from "./states/favorite-state";
import uniqid from "uniqid";
import renderFavorite from "./components/main-components/renderFavorites";
import configuredHomepage from "./components/home-components/configured-homepage";
import renderHome from "./components/main-components/renderHome";

export let weatherData = null;

const tranformData = (data) => {
  weatherData = [
    {
      id: uniqid.process(),
      weather: data.weather[0].main,
      weatherdesc: data.weather[0].description,
      temp: data.main.temp,
      maxTemp: Math.round(data.main.temp_max.toFixed(1)),
      minTemp: Math.round(data.main.temp_min.toFixed(1)),
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind: data.wind.speed,
      country: data.sys.country,
      city: data.name,
      timeZone: data.timezone,
      time: userTime(data.timezone),
      currentTime: new Date().getTime(),
      //time: data.dt,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    },
  ];

  if (
    renderHomeState.renderingHome() &&
    renderFavoriteState.renderingFavorite()
  ) {
    console.log(
      renderHomeState.renderingHome(),
      renderFavoriteState.renderingFavorite()
    );
    favorites.updateFavorites(weatherData);
    renderFavorite(favorites.favoritesData());
    return;
  }

  if (
    renderHomeState.renderingHome() &&
    !renderFavoriteState.renderingFavorite()
  ) {
    defaultDataStore.setData(weatherData);
    defaultLocation.setLocation(weatherData[0].city);
    // configuredHomepage(defaultDataStore.defaultLocationData());
    const main = document.querySelector("main");
    // main.innerHTML = "";
    // main.append(renderHome());
    renderHome();
    return;
  }

  renderSearchedLocation(weatherData);
};

export default tranformData;
