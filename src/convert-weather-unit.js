import { toggler } from "./events";
import * as helper from "./helper";

//convert kelvin unit to Fahrenheit
function toFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  console.log(fahrenheit.toFixed(0));
  return fahrenheit.toFixed(0);
}

//convert kelvin unit to Celsius
function toCelsius(kelvinUnit) {
  const celsius = kelvinUnit - 273.15;
  return celsius.toFixed(0);
}

const setTemperatureUnit = (isToggled, weather) => {
  const temperatureLabel = document.querySelector(".temperature-value");
  temperatureLabel.innerHTML = "";
  const temp = isToggled
    ? toFahrenheit(weather[0].temp.toFixed(0))
    : weather[0].temp.toFixed(0);

  temperatureLabel.append(
    temp,
    isToggled ? helper.special("&deg;F") : helper.special("&deg;C")
  );
};

export default setTemperatureUnit;
