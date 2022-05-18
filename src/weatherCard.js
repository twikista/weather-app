import * as helper from "./helper";
import weatherCardContent from "./weatherCardContent";
import weatherCardHeader from "./weatherCardheader";
const weatherCard = (weather) => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  weather.forEach((item) => {
    const article = helper.createElement(
      "article",
      [weatherCardHeader(item), weatherCardContent(item)],
      {
        class: "grid grid-cols-1 grid-rows-2 w-4/5 rounded h-full mx-auto my-0",
      }
    );
    main.append(article);
  });
};

export default weatherCard;
