import styles from "../../classes";
import * as helper from "../../helper";
import renderUserTime from "../../timeAndDate";
import renderHomeState from "../../states/home-state";
import cardHeaderBottom from "./cardHeaderBottom";
import { formatDistanceToNowStrict } from "date-fns";

const weatherCardTop = (weather) => {
  //header left
  const locationIcon = helper.addIcon("location_on", [styles.icons]);
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
    class: "material-icons-outlined text-pink-500 align-middle text-left ",
  });

  //weather description
  const descriptionText = helper.createElement("h5", [weather.weatherdesc], {
    class:
      "gray-400 font-fira font-light text-xs justify-self-start w-[115px] ml-0",
  });
  const weatherDescription = helper.createElement(
    "span",
    [arrow, descriptionText],
    { class: "flex items-center ml-[0]" }
  );

  const lastWeatherUpdateTime = helper.createElement(
    "span",
    [`Updated: ${formatDistanceToNowStrict(weather.currentTime)} ago`],
    {
      class:
        "last-updated font-fira font-light text-[11px] block text-indigo-200  text-[9px] sm:text-xs mt-[-25px]",
    }
  );

  //weather icon
  const weatherIcon = helper.createElement("img", [], {
    src: weather.icon,
    alt: "weather-icon",
    class: "self-center -mt-5 w-[100px] h-[100px]",
  });

  //weather icon and description wrapper
  const weatherLeft = renderHomeState.renderingHome()
    ? helper.createElement(
        "div",
        [weatherDescription, weatherIcon, lastWeatherUpdateTime],
        {
          class:
            "grid grid-cols-1 grid-rows-[20px_1fr-auto] items-center justify-center w-full text-sm pt-2",
        }
      )
    : helper.createElement("div", [weatherDescription, weatherIcon], {
        class: "flex flex-col items-center justify-center text-sm pt-2",
      });
  //degree special character
  const deg = helper.special("&deg;");
  const celsiusSpan = helper.createElement("span", ["C"], null);
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

  const checkbox = helper.createElement("input", null, {
    type: "checkbox",
    id: `${weather.id}`,
    class: "checkbox hidden",
  });
  /*try*/
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
    for: `${weather.id}`,
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
    class: "togglers-wrapper flex items-center self-center",
  });

  /*end of try*/

  const tempWrapper = helper.createElement(
    "div",
    [temperature, minMax, togglersWrapper],
    {
      class:
        "temp-wrapper w-4/5 flex-auto flex flex-col items-center justify-center",
    }
  );

  //temperature and minmax wrapper
  const weatherRight = helper.createElement("div", [tempWrapper], {
    class: "weather-right flex flex-col justify-center items-center",
  });

  /*
  const headerBottomFragment = new DocumentFragment();
  renderState.currentState()
    ? headerBottomFragment.append(
        cardHeaderBottom.timeSinceLastUpdate(weather.time)
      )
    : headerBottomFragment.append(cardHeaderBottom.addToFavorite());
    */

  /*
  set up class to condtionally apply to headerBottom element
  */

  const classOne = "text-sm flex justify-between items-center";
  const classTwo = "text-sm flex justify-end items-center pr-1 pb-1";
  const usedClass = renderHomeState.renderingHome() ? classOne : classTwo;
  /*
  const headerBottom = helper.createElement("div", [headerBottomFragment], {
    class: `${classOne}`,
  });
  */

  const weatherWrapper = helper.createElement(
    "div",
    [weatherLeft, weatherRight],
    {
      class:
        "weather-wrappper grid grid-cols-[1fr_1fr] grid-rows-1 gap-x-2 w-full h-full",
    }
  );

  const fragment = new DocumentFragment();
  fragment.append(
    headerTop,
    weatherWrapper,
    cardHeaderBottom(weather, weather.id)
  );

  const defaultClass =
    "card-header grid grid-rows-[40px_1fr_60px] grid-cols-1 justify-center items-center w-full bg-slate-800 mb-3 mt-5 pt-2 px-4 rounded-lg shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] font-sanspro";

  const header = helper.createElement("article", [fragment], {
    class: `${defaultClass}`,
    id: `weather-card-${weather.id}`,
  });
  return header;
};

export default weatherCardTop;
