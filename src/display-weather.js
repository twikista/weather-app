import * as helper from "./helper";
import renderWeather from "./render-weather";
import { weatherData } from "./transorm-data";
import * as convert from "./convert-weather-unit";

const currentWeatherCard = helper.createElement("article", [], {
  class: "current-weather-card",
});
//const tempDesc = helper.createElement("p", null, null);
//tempDesc.textContent = isToggled ? "Fahrenheit" : "Celsius";

function displayWeather(weather, toggler) {
  const temp = toggler ? console.log("Fahrenheit") : console.log("Celsius");
  const unit = toggler
    ? console.log(convert.toFahrenheit(weather.temp))
    : console.log(convert.toCelsius(weather.temp));
}

/*const ra = document.createElement("p");
ra.textContent = weatherData ? weatherData.temp : "add a city";
const p = helper.createElement("p", [weatherData.temp], null);

//weather card to hold all current weather details
const currentWeatherCard = helper.createElement("article", [], {
  class: "current-weather-card",
});

const displayWeather = helper.createElement("section", [currentWeatherCard], {
  class: "display-weather-section",
});
*/
export default displayWeather;
