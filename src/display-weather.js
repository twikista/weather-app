import * as helper from "./helper";
import * as convert from "./convert-weather-unit";

//const tempDesc = helper.createElement("p", null, null);
//tempDesc.textContent = isToggled ? "Fahrenheit" : "Celsius";

function displayWeather(weather, toggler) {
  //create weather card header
  const weatherHeader = helper.createElement("h3", ["Fri May 2023, NG"], null);
  const cardHeader = helper.createElement("header", [weatherHeader], null);

  //create weather card content
  const temperature = helper.createElement("h1", null, null);
  temperature.textContent = toggler
    ? `${convert.toFahrenheit(weather.temp)}&deg;F`
    : `${convert.toCelsius(weather.temp)}&deg;F`;
  const cardMain = helper.createElement("div", [temperature], null);

  //weather card
  const currentWeatherCard = helper.createElement(
    "article",
    [cardHeader, cardMain],
    {
      class: "current-weather-card",
    }
  );

  const mainElement = document.querySelector(".main-element");
  mainElement.append(currentWeatherCard);
  console.log(mainElement.lastChild.tagName);

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
