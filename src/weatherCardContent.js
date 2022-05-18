import * as helper from "./helper";
import converTemperatureUnit from "./convert-weather-unit";
import classes from "./classes";
const weatherCardContent = (weather) => {
  //weather icon
  /*const weatherIcon = helper.createElement("img", [], {
    src: weather.icon,
    alt: "weather-icon",
    class: "inline-block",
  });*/

  /* const weatherIcon = helper.createElement("span", ["cloud"], {
    class: "material-icons-outlined text-8xl",
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
  const deg = helper.special("&deg;");
  // const celsiusSpan = helper.degreeCharacter("&#8451;");
  const celsiusSpan = helper.createElement("span", ["C"], null);
  //celsiusSpan.classList.add("text-2xl", "align-top", "inline-block", "pt-2");
  //temperature value
  const temperature = helper.createElement(
    "h1",
    [weather.temp.toFixed(0), deg, celsiusSpan],
    {
      class: "temperature-value text-8xl",
    }
  );

  //maximum and minimum temperature
  const high = helper.createElement(
    "span",
    ["H:", weather.maxTemp, helper.special("&deg;")],
    null
  );
  const low = helper.createElement(
    "span",
    ["L:", weather.minTemp, helper.special("&deg;")],
    null
  );

  const minMax = helper.createElement(
    "h5",
    [high, `${helper.special("&mid;")}`, low],
    { class: "text-xs" }
  );

  //temperature and feelsLike wrapper
  const weatherRight = helper.createElement("div", [temperature, minMax], null);

  //weather
  const weatherWrapper = helper.createElement(
    "div",
    [weatherLeft, weatherRight],
    {
      class: "flex bg-slate-800",
    }
  );*/

  //other weather details
  //feels like
  /*const feelsLike = helper.createElement(
    "h5",
    [`feels like - ${weather.feelsLike.toFixed(0)}`, helper.special("&deg;")],
    { class: "text-xs" }
  );*/

  const feelsLikeIcon = helper.createElement("span", ["thermostat"], {
    class: "material-icons-outlined",
  });
  const feelsLike = helper.createElement(
    "p",
    [`feels like - ${weather.feelsLike.toFixed(0)}`, helper.special("&deg;")],
    null
  );
  const feelsLikeDiv = helper.createElement(
    "div",
    [feelsLikeIcon, feelsLike],
    null
  );

  //humidity
  const humidityIcon = helper.createElement("span", ["water_drop"], {
    class: "material-icons-outlined",
  });
  const humidity = helper.createElement(
    "p",
    [`Humidity: ${weather.humidity}`],
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
  const pressure = helper.createElement("p", [`pressure: 1020`], null);
  const pressureDiv = helper.createElement(
    "div",
    [pressureIcon, pressure],
    null
  );

  /*
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
    [humidityDiv, windDiv, pressureDiv, feelsLikeDiv],
    null
  );

  //fragment
  const fragment = new DocumentFragment();
  fragment.append(otherWeatherDetails);

  //
  const div = helper.createElement("div", [fragment], {
    class: "bg-slate-800",
  });
  return div;
};

export default weatherCardContent;
