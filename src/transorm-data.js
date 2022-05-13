let weatherData = null;

const tranformData = (data) => {
  console.log(data);
  weatherData = {
    weather: data.weather[0].main,
    weatherdesc: data.weather[0].description,
    temp: data.main.temp,
    humidity: data.main.humidity,
    country: data.sys.country,
    city: data.name,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  };
  // isToggled = weatherData;
  console.log(weatherData);
  //persistData(weatherData);
  //console.log(weatherData);
  //display();
  return weatherData;
};

export default tranformData;
