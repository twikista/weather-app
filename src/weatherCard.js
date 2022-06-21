import * as helper from "./helper";
import weatherCardContent from "./weatherCardContent";
import weatherCardHeader from "./weatherCardHeader";
import cardHeaderBottom from "./cardHeaderBottom";
import loading from "./loading";
const weatherCard = (weather) => {
  const fragment = new DocumentFragment();
  weather.forEach((item) => {
    const article = helper.createElement(
      "article",
      [weatherCardHeader(item, cardHeaderBottom), weatherCardContent(item)],
      {
        class: "grid grid-cols-1 grid-rows-2 rounded h-full mt-3 mb-5 px-3",
      }
    );
    fragment.append(article);
  });
  return fragment;
};

export default weatherCard;
