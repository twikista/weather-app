import weatherCard from "../weatherCard-component/weatherCard";
import renderHomeState from "../../states/home-state";
import * as helper from "../../helper";

const configuredHomepage = (weatherData) => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const section = helper.createElement("section", [weatherCard(weatherData)], {
    class: "default-index",
  });
  // renderHomeState.setIsRenderingHome(true);
  main.append(section);
};

export default configuredHomepage;
