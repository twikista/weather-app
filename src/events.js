import setTemperatureUnit from "./toggle-weather-unit";
import getData from "./fetch-data";
import { weatherData } from "./transorm-data";
import defaultLocation from "./data/default-location";
import togglerSwitch from "./components/weatherCard-component/render-weather-unit";
import defaultDataStore from "./data/default-location-data";
import renderHomeState from "./states/home-state";
import favorites from "./data/favorites-data";
import renderFavoriteState from "./states/favorite-state";
import renderFavorite from "./components/main-components/renderFavorites";
import dataController from "./data/data-controller";
import renderHome from "./components/main-components/renderHome";
import renderingState from "./states/state";
import * as helper from "./helper";
import renderSettings from "./components/main-components/settings";

//get location from user input on form
function setCurrentLocation() {
  const form = document.querySelector(".location");
  const input = form.elements["search-input"];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = input.value;
    renderingState.searchOutput();
    getData(location);
    input.value = "";
  });
}

function setDefaultLocation() {
  const form = document.querySelector(".default-location-form");
  if (form) {
    const input = form.elements["default-location-input"];
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const location = input.value;
      renderHomeState.setIsRenderingHome(true);
      getData(location);
      input.value = "";
    });
  }
}

function closeDefaultLocationModal() {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("close-modal")) {
        overlay.remove();
      }
    });
  }
}

//update default location weather data
const updateDefaultLocationWeatherData = () => {
  const main = document.querySelector("main");
  main.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains("update-btn") ||
      target.classList.contains("update-icon")
    ) {
      if (renderingState.isTruthy()) {
        let location = null;
        const favoritesArray = favorites.favoritesData();
        const id = target.closest(".bottom-div").parentElement.id.split("-")[2];
        favoritesArray.forEach((i) => {
          if (i.id === id) location = i.city;
        });
        getData(location);
        return;
      }
      const location = defaultLocation.savedLocation();
      getData(location);
    }
  });
};

//toggle check box to switch between temperature states
const toggler = () => {
  const mainElement = document.querySelector("main");

  mainElement.addEventListener("change", (e) => {
    const target = e.target;
    if (!target.classList.contains("checkbox")) {
      return;
    }
    const h1 =
      target.parentElement.parentElement.parentElement.firstElementChild;
    const id = target.id;
    const isToggled = target.checked;
    const data = dataController(weatherData);
    let index = null;
    data.forEach((item, i) => {
      if (item.id === id) {
        console.log(i);
        index = i;
      }
      return index;
    });

    setTemperatureUnit(isToggled, data[index], h1);
    togglerSwitch(isToggled, target);
  });
};

const focusInput = () => {
  const form = document.querySelector(".location input");
  const callToActionBtn = document.querySelector(".call-to-action");
  if (callToActionBtn) {
    callToActionBtn.addEventListener("click", (e) => {
      form.focus();
    });
  }
};

//home
const backToHome = () => {
  const navElement = document.querySelector(".nav");
  const mainElement = document.querySelector("main");
  navElement.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains("app-logo") ||
      target.classList.contains("home-btn")
    ) {
      renderingState.home();
      mainElement.innerHTML = "";
      // mainElement.append(renderHome());
      // events();
      renderHome();
      helper.activeTab(target);
    }
  });
};

const addToFavorite = () => {
  const main = document.querySelector("main");
  const favoriteCount = document.querySelector(".favorite-count");
  main.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("favorite-btn")) {
      return;
    }
    favorites.addFavorite(weatherData);
    favoriteCount.textContent = `${favorites.favoritesData().length}`; //move to helper funtions
  });
};

const deletefavorite = () => {
  const main = document.querySelector("main");
  const favoriteCount = document.querySelector(".favorite-count");
  main.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("remove-favorite")) {
      return;
    }
    const id = target.id;
    favorites.deleteFavorite(id);
    favoriteCount.textContent = `${favorites.favoritesData().length}`;
    renderFavorite();
  });
};

const loadFavorites = () => {
  const favBtn = document.querySelector(".favorite-btn");
  favBtn.addEventListener("click", (e) => {
    const target = e.target;
    renderingState.favorites();
    helper.activeTab(target);
    renderingState.favorites();
    renderFavorite();
  });
};

const loadSettings = () => {
  const favBtn = document.querySelector(".settings-btn");
  favBtn.addEventListener("click", (e) => {
    const target = e.target;
    helper.activeTab(target);
    renderSettings();
  });
};

//initialize events
const events = () => {
  setCurrentLocation();
  setDefaultLocation();
  closeDefaultLocationModal();
  updateDefaultLocationWeatherData();
  toggler();
  focusInput();
  backToHome();
  addToFavorite();
  deletefavorite();
  loadFavorites();
  loadSettings();
};

export default events;
