import * as helper from "./helper";
import styles from "./classes";
const weatherCardContent = (weather) => {
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
  const pressure = helper.createElement(
    "p",
    [`pressure: ${weather.pressure}`],
    null
  );
  const pressureDiv = helper.createElement("div", [pressureIcon, pressure], {
    class: styles.cardStyles,
  });

  const fragment = new DocumentFragment();
  fragment.append(humidityDiv, windDiv, pressureDiv, feelsLikeDiv);
  const otherWeatherDetails = helper.createElement("div", [fragment], {
    class:
      "card-bottom bg-slate-800 grid grid-cols-2 grid-rows-2 gap-x-3 items-center justify-center px-4 py-2 font-fira text-sm rounded-lg shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] mb-3 ",
  });

  return otherWeatherDetails;
};

export default weatherCardContent;
