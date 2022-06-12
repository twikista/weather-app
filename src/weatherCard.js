import * as helper from "./helper";
import weatherCardContent from "./weatherCardContent";
import weatherCardHeader from "./weatherCardHeader";
import loading from "./loading";
const weatherCard = (weather) => {
  // const main = document.querySelector("main");
  const fragment = new DocumentFragment();
  //main.innerHTML = "";
  weather.forEach((item) => {
    const article = helper.createElement(
      "article",
      [weatherCardHeader(item), weatherCardContent(item)],
      {
        class: "grid grid-cols-1 grid-rows-2 rounded h-full mt-3 mb-5 px-3",
      }
    );
    fragment.append(article);
  });
  return fragment;
};

export default weatherCard;
