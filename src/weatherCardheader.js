import * as helper from "./helper";
import renderUserTime from "./tempToggler";

const weatherCardHeader = (weather) => {
  //header left
  const city = helper.createElement("span", [`${weather.city},`], null);
  const p = helper.createElement("p", [city, weather.country]);
  const h3 = helper.createElement(
    "h3",
    [`${renderUserTime(weather.timeZone)}`],
    null
  );
  const headerLeft = helper.createElement("div", [p, h3], {
    class: "header-left",
  });

  //header right
  const checkbox = helper.createElement("input", null, {
    type: "checkbox",
    id: "temp-toggler",
    class: "checkbox",
  });
  //label
  const label = helper.createElement("label", null, {
    class: "toggler",
    for: "temp-toggler",
  });

  const degree = document.createElement("span");
  degree.innerHTML = "&deg;";

  const fahrenheitSpan = helper.createElement("span", [degree, "F"], null);
  const celsiusSpan = helper.createElement("span", [degree, "C"], null);

  const togglerWrapper = helper.createElement(
    "div",
    [celsiusSpan, checkbox, label, fahrenheitSpan],
    null
  );
  const headerRight = helper.createElement("div", [togglerWrapper], {
    class: "header-right",
  });

  const fragment = new DocumentFragment();
  fragment.append(headerLeft, headerRight);

  const header = helper.createElement("header", [fragment], {
    class: "card-header",
  });
  return header;
};

export default weatherCardHeader;
