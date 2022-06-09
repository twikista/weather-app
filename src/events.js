import setTemperatureUnit from "./convert-weather-unit";
import getData from "./fetch-data";
import { weatherData } from "./transorm-data";
import onPageLoad from "./home";
import store from "./location-store";

//get location from user input on form
function getLocation() {
  const form = document.querySelector(".location");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = input.value;
    getData(location);
    input.value = "";
  });
}

function defaultLocation() {
  const form = document.querySelector(".default-location-form");
  if (form) {
    const input = form.elements["default-location-input"];
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const location = input.value;
      store.setLocation(location);
      console.log(location);
      getData(location);
      input.value = "";
    });
  }
}

function cancelDefaultLocation() {
  //const form = document.querySelector(".default-location-form");
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("close-modal")) {
        overlay.remove();
      }
      store.setLocation("canceled");
    });
  }
}

//toggle check box to switch between temperature states
const toggler = () => {
  const mainElement = document.querySelector("main");
  mainElement.addEventListener("change", (e) => {
    const target = e.target;
    const isToggled = target.checked;
    setTemperatureUnit(isToggled, weatherData);
    togglerSwitch(isToggled);
  });
};

function togglerSwitch(isToggled) {
  const toggleOn = document.querySelector(".toggle-on");
  const toggleOff = document.querySelector(".toggle-off");
  const celsius = document.querySelector(".celsius");
  const fahrenheit = document.querySelector(".fahrenheit");
  if (isToggled) {
    //switch toggler
    toggleOn.classList.remove("hidden");
    toggleOff.classList.add("hidden");
    //switch between active weather unit
    celsius.classList.remove("text-purple-400");
    celsius.classList.add("text-gray-500");
    fahrenheit.classList.remove("text-gray-500");
    fahrenheit.classList.add("text-purple-400");
  }

  if (!isToggled) {
    toggleOn.classList.add("hidden");
    toggleOff.classList.remove("hidden");

    celsius.classList.add("text-purple-400");
    celsius.classList.remove("text-gray-500");
    fahrenheit.classList.add("text-gray-500");
    fahrenheit.classList.remove("text-purple-400");
  }
}

const focusInput = () => {
  const form = document.querySelector("form input");
  const callToActionBtn = document.querySelector(".call-to-action");
  callToActionBtn.addEventListener("click", (e) => {
    form.focus();
  });
};

//home

const backToHome = () => {
  const appLogo = document.querySelector(".app-logo");
  const mainElement = document.querySelector("main");
  appLogo.addEventListener("click", (e) => {
    mainElement.innerHTML = "";
    mainElement.append(onPageLoad());
    focusInput();
  });
};

//initialize events
const events = () => {
  getLocation();
  cancelDefaultLocation();
  defaultLocation();
  toggler();
  focusInput();
  backToHome();
};

export default events;
