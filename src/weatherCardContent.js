import * as helper from "./helper";
import converTemperatureUnit from "./convert-weather-unit";
import classes from "./classes";
const weatherCardContent = (weather) => {
  //weather icon
  const weatherIcon = helper.createElement("img", [], {
    src: weather.icon,
    alt: "weather-icon",
    class: "inline-block",
  });
  //weather description
  const weatherdescription = helper.createElement(
    "h5",
    [weather.weatherdesc],
    null
  );
  //weather icon and description wrapper
  const weatherLeft = helper.createElement(
    "div",
    [weatherdescription, weatherIcon],
    { class: "flex col" }
  );
  //degree special character
  const celsiusSpan = helper.createElement(
    "span",
    [helper.degreeCharacter("C")],
    { class: "text-xs align-text-top" }
  );
  //temperature value
  const temperature = helper.createElement(
    "h1",
    [weather.temp.toFixed(0), celsiusSpan],
    {
      class: "temperature-value text-5xl",
    }
  );

  //feels like
  const feelsLike = helper.createElement(
    "h5",
    [
      `feels like - ${weather.feelsLike.toFixed(0)}`,
      helper.degreeCharacter(""),
    ],
    { class: "text-xs" }
  );

  //temperature and feelsLike wrapper
  const weatherRight = helper.createElement(
    "div",
    [temperature, feelsLike],
    null
  );

  //weather
  const weatherWrapper = helper.createElement(
    "div",
    [weatherLeft, weatherRight],
    {
      class: "flex",
    }
  );

  //other weather details

  //humidity
  const humidityIcon = helper.createElement("span", ["water_drop"], {
    class: "material-icons-outlined",
  });
  const humidity = helper.createElement(
    "p",
    [`Humidity: ${weather.humidity}%`],
    null
  );
  const humidityDiv = helper.createElement(
    "div",
    [humidityIcon, humidity],
    null
  );

  //wind
  const windIcon = helper.createElement("span", ["air"], {
    class: "material-icons-outlined",
  });
  const wind = helper.createElement(
    "p",
    [`Wind: ${weather.wind.toFixed(0)} mps`],
    null
  );
  const windDiv = helper.createElement("div", [windIcon, wind], null);

  //pressure
  const pressureIcon = helper.createElement("span", ["science"], {
    class: "material-icons-outlined",
  });
  const pressure = helper.createElement(
    "p",
    [`pressure: ${weather.pressure}`],
    null
  );
  const pressureDiv = helper.createElement(
    "div",
    [pressureIcon, pressure],
    null
  );

  //maximum temperature
  const maxTempIcon = helper.createElement("i", null, {
    class: "fas fa-temperature-high",
  });
  const maxTemp = helper.createElement(
    "p",
    [`max: ${weather.maxTemp.toFixed(0)}`, helper.degreeCharacter("")],
    null
  );

  const maxTempDiv = helper.createElement("div", [maxTempIcon, maxTemp], null);

  //minimum temperature
  const minTempIcon = helper.createElement("i", null, {
    class: "fas fa-temperature-low",
  });
  const minTemp = helper.createElement(
    "p",
    [`min: ${weather.minTemp.toFixed(0)}`, helper.degreeCharacter("")],
    null
  );

  const minTempDiv = helper.createElement("div", [minTempIcon, minTemp], null);
  /*const FeelsLike = helper.createElement(
    "p",
    [`Feels-like: ${weather.feel}`],
    null
  );*/

  const otherWeatherDetails = helper.createElement(
    "div",
    [humidityDiv, windDiv, pressureDiv, minTempDiv, maxTempDiv],
    null
  );

  //fragment
  const fragment = new DocumentFragment();
  fragment.append(weatherWrapper, otherWeatherDetails);

  //
  const div = helper.createElement("div", [fragment], null);
  return div;
};

export default weatherCardContent;
