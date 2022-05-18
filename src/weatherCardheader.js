import classes from "./classes";
import * as helper from "./helper";
import renderUserTime from "./timeAndDate";

const weatherCardHeader = (weather) => {
  //header left
  const locationIcon = helper.addIcon("location_on", [classes.icons]);
  locationIcon.classList.add("text-xs");
  const city = helper.createElement("span", [`${weather.city}, `], null);
  const location = helper.createElement(
    "h3",
    [locationIcon, city, weather.country],
    { class: "" }
  );
  const localTime = helper.createElement(
    "h3",
    [`${renderUserTime(weather.timeZone)}`],
    null
  );
  const headerLeft = helper.createElement("div", [location, localTime], {
    class:
      "header-left w-full flex justify-around items center text-sm text-indigo-200 font-barlow  font-light",
  });

  const weatherIcon = helper.createElement("span", ["cloud"], {
    class: "material-icons-outlined text-8xl",
  });
  //weather description
  const weatherdescription = helper.createElement("h5", [weather.weatherdesc], {
    class: "text-indigo-500",
  });
  //weather icon and description wrapper
  const weatherLeft = helper.createElement(
    "div",
    [weatherdescription, weatherIcon],
    {
      class:
        "flex flex-col items-center font-barlow font-semibold text-sm border-r-[1px] border-slate-700 pr-2",
    }
  );
  //degree special character
  const deg = helper.special("&deg;");
  // const celsiusSpan = helper.degreeCharacter("&#8451;");
  const celsiusSpan = helper.createElement("span", ["C"], null);
  //celsiusSpan.classList.add("text-2xl", "align-top", "inline-block", "pt-2");
  //temperature value
  const temperature = helper.createElement(
    "h1",
    [weather.temp.toFixed(0), deg, celsiusSpan],
    {
      class: "temperature-value text-5xl text-purple-400",
    }
  );

  //maximum and minimum temperature
  const high = helper.createElement(
    "span",
    ["H:", weather.maxTemp, helper.special("&deg;")],
    null
  );
  const low = helper.createElement(
    "span",
    ["L:", weather.minTemp, helper.special("&deg;")],
    null
  );

  const minMax = helper.createElement(
    "h5",
    [high, `${helper.special("&mid;")}`, low],
    { class: "text-xs" }
  );

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
    class: "toggler px-1 flex text-indigo-300 ",
    for: "temp-toggler",
  });

  const fahrenheitSymbol = helper.createElement(
    "span",
    [helper.special("&deg;F")],
    null
  );
  helper.addClass(fahrenheitSymbol, [
    "align-text-center",
    "fahrenheit",
    "text-gray-400",
    "text-base",
  ]);
  const celsiusSymbol = helper.createElement(
    "span",
    [helper.special("&deg;C")],
    null
  );
  helper.addClass(celsiusSymbol, [
    "align-text-center",
    "celsius",
    "text-sky-500",
    "text-base",
  ]);

  const togglerWrapper = helper.createElement(
    "div",
    [celsiusSymbol, checkbox, label, fahrenheitSymbol],
    { class: "flex items-center font-akshar font-700" }
  );
  const headerRight = helper.createElement("div", [togglerWrapper], {
    class: "header-right flex items-center h-8 self-end",
  });

  //temperature and minmax wrapper
  const weatherRight = helper.createElement(
    "div",
    [temperature, minMax, headerRight],
    { class: "flex flex-col justify-center items-center" }
  );

  //weather
  const weatherWrapper = helper.createElement(
    "div",
    [weatherLeft, weatherRight],
    {
      class: "grid grid-cols-[1fr_2fr] grid-rows-1 gap-x-1",
    }
  );

  const fragment = new DocumentFragment();
  fragment.append(headerLeft, weatherWrapper);

  const header = helper.createElement("header", [fragment], {
    class:
      "card-header grid grid-rows-[auto_1fr] grid-cols-1 justify-center items-center w-full bg-slate-800 mb-5 mt-2 pt-2 px-4 rounded-lg",
  });
  return header;
};

export default weatherCardHeader;
