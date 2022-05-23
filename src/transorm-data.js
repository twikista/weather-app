import weatherCard from "./weatherCard";

export let weatherData = null;

const tranformData = (data) => {
  weatherData = [
    {
      weather: data.weather[0].main,
      weatherdesc: data.weather[0].description,
      temp: data.main.temp,
      maxTemp: data.main.temp_max.toFixed(0),
      minTemp: data.main.temp_min.toFixed(0),
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind: data.wind.speed,
      country: data.sys.country,
      city: data.name,
      timeZone: data.timezone,
      time: data.dt,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    },
  ];
  console.log(weatherData);
  weatherCard(weatherData);
};

export default tranformData;
