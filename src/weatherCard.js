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
      { class: "flex flex-col w-1/2 border bg-gray-800" }
    );
    main.append(article);
  });
};

export default weatherCard;
