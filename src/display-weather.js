import * as helper from "./helper";

const p = helper.createElement("p", ["celsius"], null);

//weather card to hold all current weather details
const currentWeatherCard = helper.createElement("article", [p], {
  class: "current-weather-card",
});

const displayWeather = helper.createElement("section", [currentWeatherCard], {
  class: "display-weather-section",
});
export default displayWeather;
