import searchSection from "./search-section";
import tempUnitContainer from "./tempToggler";
import * as helper from "./helper";
import tempUnitToggler from "./tempToggler";
import displayWeather from "./display-weather";

//create main element

const mainElement = helper.createElement(
  "main",
  [searchSection, tempUnitContainer],
  {
    class: "main-element bg-red-500",
  }
);

export default mainElement;
