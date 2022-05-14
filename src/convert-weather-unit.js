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

export { toCelsius, toFahrenheit };
