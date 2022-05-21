import setTemperatureUnit from "./convert-weather-unit";
import getData from "./fetch-data";
// import { weatherData } from "./transorm-data";
import { weatherData } from "./data";
import weatherCard from "./weatherCard";
import loading from "./loading";

let isLoading = true;

//get location from user input on form
function getLocation() {
  const form = document.querySelector("form");
  const input = form.elements["search-input"];
  const main = document.querySelector("main");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //const location = input.value;
    //getData(location);
    if (isLoading) {
      loading();
    }

    setTimeout(() => {
      isLoading = false;
      console.log(isLoading);
      weatherCard(weatherData);
    }, 1000);
    console.log(weatherData);
  });
}

//toggle check box to switch between temperature states
const toggler = () => {
  const toggle = document.querySelector("main");
  toggle.addEventListener("change", (e) => {
    const target = e.target;
    console.log(target.checked);
    const isToggled = target.checked;
    console.log(weatherData);
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
    toggleOn.classList.remove("hidden");
    celsius.classList.remove("text-sky-500");
    celsius.classList.add("text-gray-400");
    fahrenheit.classList.remove("text-gray-400");
    fahrenheit.classList.add("text-sky-500");
    toggleOff.classList.add("hidden");
  }

  if (!isToggled) {
    toggleOn.classList.add("hidden");
    toggleOff.classList.remove("hidden");

    celsius.classList.add("text-sky-500");
    celsius.classList.remove("text-gray-400");
    fahrenheit.classList.add("text-gray-400");
    fahrenheit.classList.remove("text-sky-500");
  }
}

const focusInput = () => {
  const form = document.querySelector("form input");
  const callToActionBtn = document.querySelector(".call-to-action");
  callToActionBtn.addEventListener("click", (e) => {
    form.focus();
  });
};

//initialize events
const events = () => {
  getLocation();
  toggler();
  focusInput();
};

export default events;

//console.log(form.elements);
