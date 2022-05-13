import getData from "./fetch-data";
import { weatherData } from "./transorm-data";
import displayWeather from "./display-weather";
export let isToggled = null;

function getLocation() {
  const form = document.querySelector("form");
  const input = form.elements["search-field"];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = input.value;
    getData(location);
    console.log(location);
  });
}

function toggler() {
  const toggle = document.querySelector("#temp-unit-toggler");
  toggle.addEventListener("change", (e) => {
    isToggled = toggle.checked;
    displayWeather(weatherData, isToggled);
  });
}

const events = () => {
  getLocation();
  toggler();
};

export default events;

//console.log(form.elements);
