import { toggler } from "./events";

//convert kelvin unit to Fahrenheit
function toFahrenheit(kelvinUnit) {
  const fahrenheit = (kelvinUnit - 273.15) * (9 / 5) + 32;
  console.log(fahrenheit.toFixed(2));
  return fahrenheit.toFixed(2);
}

//convert kelvin unit to Celsius
function toCelsius(kelvinUnit) {
  const celsius = kelvinUnit - 273.15;
  return celsius.toFixed(2);
}

const converTemperatureUnit = (weather) => {
  const isToggled = toggler();
  const temperatureUnit = isToggled
    ? toFahrenheit(weather.temp)
    : toCelsius(weather.temp);
  return temperatureUnit;
};

export default converTemperatureUnit;
