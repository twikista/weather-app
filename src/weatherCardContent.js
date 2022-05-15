import * as helper from "./helper";
import converTemperatureUnit from "./convert-weather-unit";
const weatherCardContent = (weather) => {
  const temperatureIcon = helper.createElement("img", [], {
    src: weather.icon,
    alt: "weather-icon",
  });
  const temperature = helper.createElement("h1", [weather.temp], null);
  const temperatureWrapper = helper.createElement(
    "div",
    [temperatureIcon, temperature],
    null
  );

  //other weather details
  const humidity = helper.createElement(
    "p",
    [`Humidity: ${weather.humidity}`],
    null
  );
  const wind = helper.createElement("p", [`Wind: ${weather.wind}`], null);
  const pressure = helper.createElement(
    "p",
    [`pressure: ${weather.humidity}`],
    null
  );
  const FeelsLike = helper.createElement(
    "p",
    [`Feels-like: ${weather.feel}`],
    null
  );

  const otherWeatherDetails = helper.createElement(
    "div",
    [humidity, wind, pressure, FeelsLike],
    null
  );

  //fragment
  const fragment = new DocumentFragment();
  fragment.append(temperatureWrapper, otherWeatherDetails);

  //
  const div = helper.createElement("div", [fragment], null);
  return div;
};

export default weatherCardContent;
