import * as helper from "../../helper";
import weatherCardBottom from "./weatherCardBottom";
import weatherCardTop from "./weatherCardTop";

import loading from "../../loading";
const weatherCard = (weather) => {
  const fragment = new DocumentFragment();
  weather.forEach((item) => {
    const article = helper.createElement(
      "section",
      [weatherCardTop(item), weatherCardBottom(item)],
      {
        class:
          "weather-card grid grid-cols-1 grid-rows-2 rounded h-full mt-3 mb-5 px-3",
      }
    );
    fragment.append(article);
  });
  return fragment;
};

export default weatherCard;
