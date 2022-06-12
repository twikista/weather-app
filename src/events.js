import setTemperatureUnit from "./convert-weather-unit";
import getData from "./fetch-data";
import tranformData, { weatherData } from "./transorm-data";
import renderOnPageLoad from "./home";
import store from "./location-store";
import togglerSwitch from "./render-temp-unit-change";
import defaultDataStore from "./location-data-store";
import renderState from "./renderState";

//export let isDefault = false;

//handle render on page load
function onPageLoadHandler() {
  window.addEventListener("load", () => {
    renderOnPageLoad();
  });
}

//get location from user input on form
function setCurrentLocation() {
  const form = document.querySelector(".location");
  const input = form.elements["search-input"];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = input.value;
    renderState.setIsRenderingDefault(false);
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
      // store.setLocation(location);
      console.log(location);
      getData(location);
      //console.log(isDefault);
      input.value = "";
    });
  }
}

function closeDefaultLocationModal() {
  //const form = document.querySelector(".default-location-form");
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("close-modal")) {
        overlay.remove();
      }
      // store.setLocation("canceled");
    });
  }
}

//update default location weather data
const updateDefaultLocationWeatherData = () => {
  const main = document.querySelector("main");
  main.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("refresh-icon")) {
      return;
    }
    defaultDataStore.clearDefaultData();
    const defaultLocation = store.location();
    renderState.setIsRenderingDefault(true);
    getData(defaultLocation);
    console.log("i got clicked!!");
  });
};

//toggle check box to switch between temperature states
const toggler = () => {
  const mainElement = document.querySelector("main");
  mainElement.addEventListener("change", (e) => {
    const target = e.target;
    const isToggled = target.checked;
    const data =
      weatherData === null
        ? defaultDataStore.defaultLocationData()
        : weatherData;
    setTemperatureUnit(isToggled, data);
    togglerSwitch(isToggled);
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
  const appLogo = document.querySelector(".app-logo");
  const mainElement = document.querySelector("main");
  appLogo.addEventListener("click", (e) => {
    mainElement.innerHTML = "";
    mainElement.append(renderOnPageLoad());
    focusInput();
  });
};

//initialize events
const events = () => {
  //onPageLoadHandler();
  //renderOnPageLoad();
  setCurrentLocation();
  setDefaultLocation();
  closeDefaultLocationModal();
  updateDefaultLocationWeatherData();
  toggler();
  focusInput();
  backToHome();
};

export default events;
