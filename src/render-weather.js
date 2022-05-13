import { weatherData } from "./transorm-data";
//import toggleWeatherUnit from "./convert-weather-unit";

function renderWeather() {
  console.log(`this is ${weatherData.main}`);
  console.log(toggleWeatherUnit(weatherData.temp));
}

//renderWeather();

export default renderWeather;
