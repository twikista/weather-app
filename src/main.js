import classes from "./classes";
import * as helper from "./helper";

const mainSection = () => {
  const p = helper.createElement(
    "h1",
    ["Enter a loaction to dislay weather details"],
    {
      class: "text-4xl text-gray-200",
    }
  );
  const section = helper.createElement("section", [p], null);

  //main element
  const fragment = new DocumentFragment();
  fragment.append(section);
  const main = helper.createElement("main", [fragment], {
    class:
      'w-full", "max-w-4xl flex flex-column justify-center items-center mx-auto',
  });
  helper.addClass(main, classes.mainElementStyle);
  return main;
};

export default mainSection;

/*
export const weatherData = [
  {
    weather: "clouds",
    weatherdesc: "overcast cloud",
    temp: 32,
    maxTemp: 34,
    minTemp: 27,
    feelsLike: 29,
    humidity: "75%",
    wind: 2,
    country: "NG",
    city: "Benin city",
    timeZone: 16000000,
    time: 3600,
    icon: "http://openweathermap.org/img/wn/$04n@2x.png",
  },
];*/
