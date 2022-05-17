import classes from "./classes";
import * as helper from "./helper";
import renderUserTime from "./timeAndDate";

const weatherCardHeader = (weather) => {
  //header left
  const locationIcon = helper.addIcon("location_on", [classes.icons]);
  const city = helper.createElement("span", [`${weather.city}, `], null);
  const location = helper.createElement(
    "h3",
    [locationIcon, city, weather.country],
    { class: "flex items-end text-sm" }
  );
  const localTime = helper.createElement(
    "h3",
    [`${renderUserTime(weather.timeZone)}`],
    null
  );
  const headerLeft = helper.createElement("div", [location, localTime], {
    class: "header-left",
  });

  //header right
  const checkbox = helper.createElement("input", null, {
    type: "checkbox",
    id: "temp-toggler",
    class: "checkbox hidden",
  });
  //label
  const toggleOnIcon = helper.createElement("span", ["toggle_on"], {
    class:
      "material-icons-outlined text-3xl  hidden toggle-on transition duration-700 ease-in ",
  });

  const toggleOffIcon = helper.createElement("span", ["toggle_off"], {
    class:
      "material-icons-outlined text-3xl toggle-off transition duration-700 ease-in",
  });
  const label = helper.createElement("label", [toggleOffIcon, toggleOnIcon], {
    class: "toggler px-1 flex  ",
    for: "temp-toggler",
  });

  const fahrenheitSpan = helper.degreeCharacter("F");
  helper.addClass(fahrenheitSpan, [
    "align-text-center",
    "fahrenheit",
    "text-gray-400",
  ]);
  const celsiusSpan = helper.degreeCharacter("C");
  helper.addClass(celsiusSpan, [
    "align-text-center",
    "celsius",
    "text-red-500",
    "font-900",
  ]);

  const togglerWrapper = helper.createElement(
    "div",
    [celsiusSpan, checkbox, label, fahrenheitSpan],
    { class: "flex items-center" }
  );
  const headerRight = helper.createElement("div", [togglerWrapper], {
    class: "header-right flex items-center h-8",
  });

  const fragment = new DocumentFragment();
  fragment.append(headerLeft, headerRight);

  const header = helper.createElement("header", [fragment], {
    class: "card-header flex justify-between w-full",
  });
  return header;
};

export default weatherCardHeader;
