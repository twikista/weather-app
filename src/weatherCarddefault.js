import classes from "./classes";
import * as helper from "./helper";
import renderUserTime from "./timeAndDate";
import { formatDistanceToNowStrict, parseISO } from "date-fns";

const weatherCardDefault = (weather) => {
  //header left
  const locationIcon = helper.addIcon("location_on", [classes.icons]);
  locationIcon.classList.add("text-xs", "text-indigo-400");
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
  const headerTop = helper.createElement("div", [location, localTime], {
    class:
      "header-top w-full flex justify-between items center text-sm text-indigo-200 font-barlow  font-light pt-2",
  });
  const arrow = helper.createElement("span", ["arrow_right"], {
    class: "material-icons-outlined text-pink-500 align-middle ",
  });

  //weather icon
  const weatherIcon = helper.createElement("img", [], {
    src: weather.icon,
    alt: "weather-icon",
    class: "self-start -mt-5 w-[110px] h-[110px]",
  });

  //weather description
  const weatherdescription = helper.createElement(
    "h5",
    [arrow, weather.weatherdesc],
    {
      class:
        "gray-400 font-fira font-light text-xs self-start justify-self-start w-[115px]",
    }
  );

  //weather icon and description wrapper
  const weatherLeft = helper.createElement(
    "div",
    [weatherdescription, weatherIcon],
    {
      class: "flex flex-col items-center justify-center text-sm pt-3",
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
      class: "temperature-value text-5xl sm:text-7xl text-purple-400 mb-1",
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

  const mid = helper.degreeCharacter("&mid;");
  mid.classList.add("px-[1px]", "text-base");

  const minMax = helper.createElement("h5", [high, mid, low], {
    class:
      "text-sm font-barlow semibold flex items-center justify-center text-indigo-300",
  });

  const tempWrapper = helper.createElement("div", [temperature, minMax], {
    class:
      "temp-wrapper w-4/5 flex-auto flex flex-col items-center justify-center",
  });

  //temperature and minmax wrapper
  const weatherRight = helper.createElement("div", [tempWrapper], {
    class: "weather-right flex flex-col justify-center items-center",
  });

  //weather
  const divMid = helper.createElement("span", [], {
    class: "w-[1px] bg-slate-600 h-[96px] self-center justify-self-end",
  });

  //header-bottom
  const refreshIcon = helper.createElement("span", ["refresh"], {
    class:
      " refresh-icon material-icons-outlined  text-pink-500 cursor-pointer hover:scale-110 hover:font-bold transiton-[scale] duration-200 ease-in",
  });

  const timeSnap = new Date(weather.time).getTime();

  const timeUpdated = helper.createElement(
    "span",
    [`${formatDistanceToNowStrict(timeSnap)} ago`],
    {
      class: "text-slate-400",
    }
  );

  const timeOfWeatherUpdate = helper.createElement(
    "div",
    [timeUpdated, refreshIcon],
    { class: "flex" }
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
      "material-icons-outlined text-2xl  hidden toggle-on transition-[display] duration-700 ease-in ",
  });

  const toggleOffIcon = helper.createElement("span", ["toggle_off"], {
    class:
      "material-icons-outlined text-2xl toggle-off transition-[display] duration-700 ease-in",
  });
  const label = helper.createElement("label", [toggleOffIcon, toggleOnIcon], {
    class: "toggler px-1 flex text-xs text-indigo-300 cursor-pointer",
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
    "text-gray-500",
    "text-sm",
  ]);
  const celsiusSymbol = helper.createElement(
    "span",
    [helper.special("&deg;C")],
    null
  );
  helper.addClass(celsiusSymbol, [
    "align-text-center",
    "celsius",
    "text-purple-400",
    "text-sm",
  ]);

  const togglers = helper.createElement(
    "div",
    [celsiusSymbol, checkbox, label, fahrenheitSymbol],
    {
      class: "togglers flex items-center font-akshar font-semibold",
    }
  );
  const togglersWrapper = helper.createElement("div", [togglers], {
    class: "togglers-wrapper flex items-center self-end mt-auto",
  });

  const headerBottom = helper.createElement(
    "div",
    [timeOfWeatherUpdate, togglersWrapper],
    { class: "text-sm flex justify-between items-center" }
  );

  const weatherWrapper = helper.createElement(
    "div",
    [weatherLeft, weatherRight],
    {
      class:
        "weather-wrappper grid grid-cols-[1fr_1fr] grid-rows-1 gap-x-2 w-full h-full",
    }
  );

  const fragment = new DocumentFragment();
  fragment.append(headerTop, weatherWrapper, headerBottom);

  const header = helper.createElement("header", [fragment], {
    class:
      "card-header grid grid-rows-[50px_1fr_50px] grid-cols-1 justify-center items-center w-full bg-slate-800 mb-3 mt-5 pt-2 px-4 rounded-lg shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] font-sanspro",
  });
  return header;
};

export default weatherCardDefault;
