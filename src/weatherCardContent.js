import * as helper from "./helper";
import converTemperatureUnit from "./convert-weather-unit";
import styles from "./classes";
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
    class: `material-icons-outlined ${styles.icons}`,
  });
  const feelsLike = helper.createElement(
    "p",
    [`feels like: ${weather.feelsLike.toFixed(0)}`, helper.special("&deg;")],
    null
  );
  const feelsLikeDiv = helper.createElement("div", [feelsLikeIcon, feelsLike], {
    class: styles.cardStyles,
  });

  //humidity
  const humidityIcon = helper.createElement("span", ["water_drop"], {
    class: `material-icons-outlined ${styles.icons}`,
  });
  const humidity = helper.createElement(
    "p",
    [`Humidity: ${weather.humidity}`],
    null
  );
  const humidityDiv = helper.createElement("div", [humidityIcon, humidity], {
    class: styles.cardStyles,
  });

  //wind
  const windIcon = helper.createElement("span", ["air"], {
    class: `material-icons-outlined ${styles.icons}`,
  });
  const wind = helper.createElement(
    "p",
    [`Wind: ${weather.wind.toFixed(0)} mps`],
    null
  );
  const windDiv = helper.createElement("div", [windIcon, wind], {
    class: styles.cardStyles,
  });

  //pressure
  const pressureIcon = helper.createElement("span", ["science"], {
    class: `material-icons-outlined ${styles.icons}`,
  });
  const pressure = helper.createElement("p", [weather.pressure], null);
  const pressureDiv = helper.createElement("div", [pressureIcon, pressure], {
    class: styles.cardStyles,
  });

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

  const fragment = new DocumentFragment();
  fragment.append(humidityDiv, windDiv, pressureDiv, feelsLikeDiv);
  const otherWeatherDetails = helper.createElement("div", [fragment], {
    class:
      "card-bottom bg-slate-800 grid grid-cols-2 grid-rows-2 gap-x-3 items-center justify-center px-4 py-2 font-fira text-sm rounded-lg shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] mb-3 ",
  });

  //fragment

  // //
  // const div = helper.createElement("div", [fragment], {
  //   class: "bg-slate-800 grid grid-cols-4",
  // });
  return otherWeatherDetails;
};

export default weatherCardContent;
