import weatherCard from "../weatherCard-component/weatherCard";
import renderHomeState from "../../states/home-state";
import * as helper from "../../helper";

const configuredHomepage = (weatherData) => {
  const section = helper.createElement("section", [weatherCard(weatherData)], {
    class: "default-index",
  });
  // if (main) {
  //   main.innerHTML = "";
  //   main.append(section);
  //   console.log(main);
  //   return;
  // }
  return section;
};

export default configuredHomepage;
