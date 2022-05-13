import { isToggled } from "./events";

/*function toggleWeatherUnit(kelvinUnit) {
  const weatherUnit = isToggled
    ? toFahrenheit(kelvinUnit)
    : toCelsius(kelvinUnit);
  console.log(weatherUnit);
  return weatherUnit;
}*/

function toFahrenheit(kelvinUnit) {
  const fahrenheit = (kelvinUnit - 273.15) * (9 / 5) + 32;
  console.log(fahrenheit.toFixed(2));
  return fahrenheit.toFixed(2);
}

function toCelsius(kelvinUnit) {
  const celsius = kelvinUnit - 273.15;
  return celsius.toFixed(2);
}

/*function toggleWeatherDesc() {
  const weatherUnit = document.querySelector(".weather-unit");
  weatherUnit.addEventListener("change", (e) => {
    toggler(weatherUnit);
    display();
  });
}

function toggler(unit) {
  const label = unit.nextElementSibling;
  let isToggled = unit.checked;
  label.textContent = isToggled ? "Fahrenheit" : "Celsius";

  console.log(isToggled);
}

toggleWeatherDesc();
*/
export { toCelsius, toFahrenheit };
