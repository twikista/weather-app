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
      null
    );
    main.append(article);
  });
};

export default weatherCard;
