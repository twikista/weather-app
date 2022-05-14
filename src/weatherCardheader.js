import * as helper from "./helper";

const weatherCardHeader = (weather) => {
  //header left
  const city = helper.createElement("span", [`${weather.city},`], null);
  const p = helper.createElement("p", [city, weather.country]);
  const headerLeft = helper.createElement("div", [p], null);

  //header right
  const checkbox = helper.createElement("input", null, {
    type: "checkbox",
    id: "temp-toggler",
  });

  const label = document.createElement("label");
  label.htmlFor = "temp-toggler";
  label.innerHTML = "&deg;";
  const tempSpan = helper.createElement("span", ["F"], null);
  label.append(tempSpan);

  const header = helper.createElement("header", [headerLeft], null);
};
