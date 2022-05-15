import getData from "./fetch-data";
import { weatherData } from "./transorm-data";

//get location from user input on form
function getLocation() {
  const form = document.querySelector("form");
  const input = form.elements["search-input"];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = input.value;
    getData(location);
    console.log(location);
  });
}

//toggle check box to switch between temperature states
export const toggler = () => {
  const toggle = document.querySelector("#temp-toggler");
  toggle.addEventListener("change", (e) => {
    const isToggled = toggle.checked;
    // displayWeather(weatherData, isToggled);
    return isToggled;
  });
};

//initialize events
const events = () => {
  getLocation();
};

export default events;

//console.log(form.elements);
