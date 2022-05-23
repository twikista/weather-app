import setTemperatureUnit from "./convert-weather-unit";
import getData from "./fetch-data";
import { weatherData } from "./transorm-data";
import onPageLoad from "./home";
//import { weatherData } from "./data";
//import weatherCard from "./weatherCard";
//import loading from "./loading";

//let isLoading = true;

//get location from user input on form
function getLocation() {
  const form = document.querySelector("form");
  const input = form.elements["search-input"];
  const main = document.querySelector("main");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = input.value;
    getData(location);
    input.value = "";
    /*if (isLoading) {
      loading(isLoading);
    }

    setTimeout(() => {
      console.log(isLoading);
      weatherCard(weatherData);
      isLoading = false;
    }, 3000);
    console.log(weatherData);*/
  });
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
    return mainElement;
  });
};

//initialize events
const events = () => {
  getLocation();
  toggler();
  focusInput();
  backToHome();
};

export default events;
