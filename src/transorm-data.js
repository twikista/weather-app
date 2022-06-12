// import weatherCard from "./weatherCard";
import defaultDataStore from "./location-data-store";
import store from "./location-store";
import renderCurrent from "./render-current";
import renderState from "./renderState";
import { userTime } from "./timeAndDate";

export let weatherData = null;

//import { isDefault } from "./events";

const tranformData = (data) => {
  weatherData = [
    {
      weather: data.weather[0].main,
      weatherdesc: data.weather[0].description,
      temp: data.main.temp,
      maxTemp: Math.round(data.main.temp_max.toFixed(1)),
      minTemp: Math.round(data.main.temp_min.toFixed(1)),
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind: data.wind.speed,
      country: data.sys.country,
      city: data.name,
      timeZone: data.timezone,
      time: userTime(data.timezone),
      //time: data.dt,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    },
  ];
  console.log(weatherData);
  console.log(renderState.currentState());
  if (renderState.currentState()) {
    defaultDataStore.setData(weatherData);
    store.setLocation(weatherData[0].city);
    console.log("i ran");
    renderCurrent(defaultDataStore.defaultLocationData());
    return;
  }

  console.log(defaultDataStore.defaultRequestState());
  renderCurrent(weatherData);
};

export default tranformData;
