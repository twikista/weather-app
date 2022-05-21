/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
const classes = {
  appStyles: ["h-screen"],
  mainElementStyle: ["w-full", "max-w-4xl"],
  headerElement: ["w-full", "h-8"],
  navElement: ["flex", "px-2", "w-full", "h-full"],
  iconsTemp: ["text-sm", "align-text-bottom"],
  iconTtoggle: ["text-[32px]"],
  icons: ["text-base"]
};
const styles = [{
  appDivStylea: "h-screen"
}, {
  mainElementStyles: 'w-full", "max-w-4xl'
}, {
  navElementStyles: "flex px-2 w-full h-full"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classes);

/***/ }),

/***/ "./src/convert-weather-unit.js":
/*!*************************************!*\
  !*** ./src/convert-weather-unit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");

 //convert kelvin unit to Fahrenheit

function toFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  console.log(fahrenheit.toFixed(0));
  return fahrenheit.toFixed(0);
} //convert kelvin unit to Celsius


function toCelsius(kelvinUnit) {
  const celsius = kelvinUnit - 273.15;
  return celsius.toFixed(0);
}
/*
const converTemperatureUnit = (weather) => {
  const isToggled = toggler();
  const temperatureUnit = isToggled
    ? toFahrenheit(weather.temp)
    : toCelsius(weather.temp);
  return temperatureUnit;
};
*/


const setTemperatureUnit = (isToggled, weather) => {
  const temperatureLabel = document.querySelector(".temperature-value");
  temperatureLabel.innerHTML = "";
  const temp = isToggled ? toFahrenheit(weather[0].temp.toFixed(0)) : weather[0].temp.toFixed(0);
  temperatureLabel.append(temp, isToggled ? _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;F") : _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;C"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTemperatureUnit);

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherData": () => (/* binding */ weatherData)
/* harmony export */ });
const weatherData = [{
  weather: "clouds",
  weatherdesc: "overcast cloud",
  temp: 32,
  maxTemp: 34,
  minTemp: 27,
  feelsLike: 29,
  humidity: "75%",
  wind: 2,
  country: "NG",
  city: "Benin city",
  timeZone: 16000000,
  time: 3600,
  icon: "http://openweathermap.org/img/wn/$04n@2x.png"
}];

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _convert_weather_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert-weather-unit */ "./src/convert-weather-unit.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _weatherCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherCard */ "./src/weatherCard.js");
 //import getData from "./fetch-data";
// import { weatherData } from "./transorm-data";


 //get location from user input on form

function getLocation() {
  const form = document.querySelector("form");
  const input = form.elements["search-input"];
  form.addEventListener("submit", e => {
    e.preventDefault(); // const location = input.value;
    // getData(location);

    (0,_weatherCard__WEBPACK_IMPORTED_MODULE_2__["default"])(_data__WEBPACK_IMPORTED_MODULE_1__.weatherData);
    console.log(_data__WEBPACK_IMPORTED_MODULE_1__.weatherData);
  });
} //toggle check box to switch between temperature states


const toggler = () => {
  const toggle = document.querySelector("main");
  toggle.addEventListener("change", e => {
    const target = e.target;
    console.log(target.checked);
    const isToggled = target.checked;
    console.log(_data__WEBPACK_IMPORTED_MODULE_1__.weatherData);
    (0,_convert_weather_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(isToggled, _data__WEBPACK_IMPORTED_MODULE_1__.weatherData);
    togglerSwitch(isToggled);
  });
};

function togglerSwitch(isToggled) {
  const toggleOn = document.querySelector(".toggle-on");
  const toggleOff = document.querySelector(".toggle-off");
  const celsius = document.querySelector(".celsius");
  const fahrenheit = document.querySelector(".fahrenheit");

  if (isToggled) {
    toggleOn.classList.remove("hidden");
    celsius.classList.remove("text-sky-500");
    celsius.classList.add("text-gray-400");
    fahrenheit.classList.remove("text-gray-400");
    fahrenheit.classList.add("text-sky-500");
    toggleOff.classList.add("hidden");
  }

  if (!isToggled) {
    toggleOn.classList.add("hidden");
    toggleOff.classList.remove("hidden");
    celsius.classList.add("text-sky-500");
    celsius.classList.remove("text-gray-400");
    fahrenheit.classList.add("text-gray-400");
    fahrenheit.classList.remove("text-sky-500");
  }
} //initialize events


const events = () => {
  getLocation();
  toggler();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events); //console.log(form.elements);

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


const footerSection = () => {
  //icons
  const github = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, {
    class: "fab fa-github"
  });
  const twitter = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, {
    class: "fab fa-twitter"
  });
  const linkedin = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, {
    class: "fab fa-linkedin"
  }); //links

  const githubLink = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("a", [github], {
    href: "https://github.com/twikista"
  });
  const twitterLink = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("a", [twitter], {
    href: "https://twitter.com/aaronanama"
  });
  const linkedinLink = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("a", [linkedin], {
    href: "https://www.linkedin.com/in/aaronanama"
  }); //fragment

  const fragment = new DocumentFragment();
  fragment.append(githubLink, twitterLink, linkedinLink); //footer element

  const footer = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", [fragment], {
    class: "min-h-[50px] border-t-[1px] border-gray-500 w-full flex flex-row mt-2"
  });
  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerSection);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");



const headerSection = () => {
  const fragment = new DocumentFragment();
  /******nav left section*****/

  const logoDeg = _helper__WEBPACK_IMPORTED_MODULE_0__.degreeCharacter("&deg;");
  logoDeg.classList.add("text-pink-500", "text-xl");
  const logo = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", ["weda", logoDeg], {
    class: "font-barlow font-semibold text-sky-400 text-2xl"
  });
  const navLeft = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [logo], {
    class: "mb-2 py-[1px] logo-container"
  });
  /******nav right section*********/
  //create search box

  const searchInput = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("input", [], {
    type: "text",
    id: "search-input",
    placeholder: "Enter weather location ",
    class: "bg-transparent  outline-none apperance-none pl-4 py-2 h-full placeholder:text-sm placeholder:text-gray-400"
  }); //search icon <i class="fa-solid fa-magnifying-glass"></i>

  const searchIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("i", [], {
    class: "fas fa-search text-gray-400 "
  }); //create search button

  const searchButton = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", [searchIcon], {
    type: "submit",
    id: "search-btn",
    class: "border-l-2 border-l-gray-600 px-3 py-[1px] min-w-min h-full"
  }); //creat search form

  const form = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("form", [searchInput, searchButton], {
    class: "grid grid-cols-[1fr_auto] justify-center items-center w-[95%] max-w-xs rounded-full bg-gray-700 px-2 pt-[1.9px] focus-within:bg-gray-900 focus-within:border-gray-600 focus-within:border-2"
  }); //

  const navRight = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [form], {
    class: "flex justify-center items-center w-full pb-2"
  });
  /*****nav element */

  const nav = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", [navLeft, navRight], {
    class: "flex flex-col justify-center items-center w-full"
  });
  fragment.append(nav);
  const header = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("header", [fragment], {
    class: "border-b-2 border-gray-500 px-2 py-2 w-full mb-4"
  });
  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerSection);

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "addIcon": () => (/* binding */ addIcon),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "degreeCharacter": () => (/* binding */ degreeCharacter),
/* harmony export */   "special": () => (/* binding */ special)
/* harmony export */ });
function addClass(ele, classes) {
  classes.forEach(i => ele.classList.add(i));
}

const createElement = (tag, node, attribute) => {
  const element = document.createElement(tag);

  if (node) {
    node.forEach(i => element.append(i));
  }

  if (attribute) {
    const attributes = Object.keys(attribute);
    attributes.forEach(i => element.setAttribute(i, attribute[i]));
  }

  return element;
};

const degreeCharacter = char => {
  const degreeChar = document.createElement("span"); // const letter = createElement("span", [f], null);

  degreeChar.innerHTML = char; //degreeChar.classList.add("text-sm");

  return degreeChar;
};

const special = char => {
  const character = document.createElement("span");
  character.innerHTML = char;
  const rechar = character.textContent;
  return rechar;
};

const addIcon = (keyword, styles) => {
  const span = createElement("span", [keyword], {
    class: "material-icons-outlined"
  });
  addClass(span, styles);
  return span;
};



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");



const mainSection = () => {
  const p = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", ["Enter a loaction to dislay weather details"], {
    class: "text-4xl text-gray-200"
  });
  const section = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("section", [p], null); //main element

  const fragment = new DocumentFragment();
  fragment.append(section);
  const main = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("main", [fragment], {
    class: 'w-full", "max-w-4xl flex flex-column justify-center items-center mx-auto'
  });
  _helper__WEBPACK_IMPORTED_MODULE_1__.addClass(main, _classes__WEBPACK_IMPORTED_MODULE_0__["default"].mainElementStyle);
  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSection);
/*
export const weatherData = [
  {
    weather: "clouds",
    weatherdesc: "overcast cloud",
    temp: 32,
    maxTemp: 34,
    minTemp: 27,
    feelsLike: 29,
    humidity: "75%",
    wind: 2,
    country: "NG",
    city: "Benin city",
    timeZone: 16000000,
    time: 3600,
    icon: "http://openweathermap.org/img/wn/$04n@2x.png",
  },
];*/

/***/ }),

/***/ "./src/timeAndDate.js":
/*!****************************!*\
  !*** ./src/timeAndDate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//array of days of week
const daysOfWeek = [{
  id: 0,
  day: "Sun"
}, {
  id: 1,
  day: "Mon"
}, {
  id: 2,
  day: "Tue"
}, {
  id: 3,
  day: "Wed"
}, {
  id: 4,
  day: "Thu"
}, {
  id: 5,
  day: "Fri"
}, {
  id: 6,
  day: "Sat"
}]; //get day of week

function dayOfWeek(date) {
  let day = null;
  daysOfWeek.forEach(i => {
    if (i.id === date) {
      day = i.day;
    }
  });
  return day;
} //convert time to user time with UTC and TimeZone


function userTime(timeZoneOffset) {
  const date = new Date();
  const localTime = date.getTime();
  const localTimeOffset = date.getTimezoneOffset() * 60000;
  const utcTime = localTime + localTimeOffset;
  const locationOffset = utcTime + 1000 * timeZoneOffset;
  const locationTime = new Date(locationOffset);
  console.log(locationTime);
  return locationTime; //define date, day, hour amd minute
}

function renderUserTime(timeZoneOffset) {
  //define date, day, hour and minute
  const date = userTime(timeZoneOffset);
  const day = dayOfWeek(date.getDay());
  const hourAndMinutes = date.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit"
  }); //define format to display time

  const dislayTime = `${day} ${hourAndMinutes}`;
  return dislayTime;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderUserTime);

/***/ }),

/***/ "./src/weatherCard.js":
/*!****************************!*\
  !*** ./src/weatherCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _weatherCardContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherCardContent */ "./src/weatherCardContent.js");
/* harmony import */ var _weatherCardheader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherCardheader */ "./src/weatherCardheader.js");




const weatherCard = weather => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  weather.forEach(item => {
    const article = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("article", [(0,_weatherCardheader__WEBPACK_IMPORTED_MODULE_2__["default"])(item), (0,_weatherCardContent__WEBPACK_IMPORTED_MODULE_1__["default"])(item)], {
      class: "grid grid-cols-1 grid-rows-2 w-4/5 rounded h-full mx-auto my-0"
    });
    main.append(article);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherCard);

/***/ }),

/***/ "./src/weatherCardContent.js":
/*!***********************************!*\
  !*** ./src/weatherCardContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _convert_weather_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert-weather-unit */ "./src/convert-weather-unit.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/classes.js");




const weatherCardContent = weather => {
  //weather icon

  /*const weatherIcon = helper.createElement("img", [], {
    src: weather.icon,
    alt: "weather-icon",
    class: "inline-block",
  });*/

  /* const weatherIcon = helper.createElement("span", ["cloud"], {
    class: "material-icons-outlined text-8xl",
  });
  //weather description
  const weatherdescription = helper.createElement(
    "h5",
    [weather.weatherdesc],
    null
  );
  //weather icon and description wrapper
  const weatherLeft = helper.createElement(
    "div",
    [weatherdescription, weatherIcon],
    { class: "flex col" }
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
      class: "temperature-value text-8xl",
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
   //temperature and feelsLike wrapper
  const weatherRight = helper.createElement("div", [temperature, minMax], null);
   //weather
  const weatherWrapper = helper.createElement(
    "div",
    [weatherLeft, weatherRight],
    {
      class: "flex bg-slate-800",
    }
  );*/
  //other weather details
  //feels like

  /*const feelsLike = helper.createElement(
    "h5",
    [`feels like - ${weather.feelsLike.toFixed(0)}`, helper.special("&deg;")],
    { class: "text-xs" }
  );*/
  const feelsLikeIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["thermostat"], {
    class: "material-icons-outlined"
  });
  const feelsLike = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`feels like - ${weather.feelsLike.toFixed(0)}`, _helper__WEBPACK_IMPORTED_MODULE_0__.special("&deg;")], null);
  const feelsLikeDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [feelsLikeIcon, feelsLike], null); //humidity

  const humidityIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["water_drop"], {
    class: "material-icons-outlined"
  });
  const humidity = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`Humidity: ${weather.humidity}`], null);
  const humidityDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [humidityIcon, humidity], null); //wind

  const windIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["air"], {
    class: "material-icons-outlined"
  });
  const wind = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`Wind: ${weather.wind.toFixed(0)} mps`], null);
  const windDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [windIcon, wind], null); //pressure

  const pressureIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["science"], {
    class: "material-icons-outlined"
  });
  const pressure = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`pressure: 1020`], null);
  const pressureDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [pressureIcon, pressure], null);
  /*
  //maximum temperature
  const maxTempIcon = helper.createElement("i", null, {
    class: "fas fa-temperature-high",
  });
  const maxTemp = helper.createElement(
    "p",
    [`max: ${weather.maxTemp.toFixed(0)}`, helper.degreeCharacter("")],
    null
  );
   const maxTempDiv = helper.createElement("div", [maxTempIcon, maxTemp], null);
   //minimum temperature
  const minTempIcon = helper.createElement("i", null, {
    class: "fas fa-temperature-low",
  });
  const minTemp = helper.createElement(
    "p",
    [`min: ${weather.minTemp.toFixed(0)}`, helper.degreeCharacter("")],
    null
  );
   const minTempDiv = helper.createElement("div", [minTempIcon, minTemp], null);
  /*const FeelsLike = helper.createElement(
    "p",
    [`Feels-like: ${weather.feel}`],
    null
  );*/

  const otherWeatherDetails = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [humidityDiv, windDiv, pressureDiv, feelsLikeDiv], null); //fragment

  const fragment = new DocumentFragment();
  fragment.append(otherWeatherDetails); //

  const div = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [fragment], {
    class: "bg-slate-800"
  });
  return div;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherCardContent);

/***/ }),

/***/ "./src/weatherCardheader.js":
/*!**********************************!*\
  !*** ./src/weatherCardheader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _timeAndDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeAndDate */ "./src/timeAndDate.js");




const weatherCardHeader = weather => {
  //header left
  const locationIcon = _helper__WEBPACK_IMPORTED_MODULE_1__.addIcon("location_on", [_classes__WEBPACK_IMPORTED_MODULE_0__["default"].icons]);
  locationIcon.classList.add("text-xs");
  const city = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [`${weather.city}, `], null);
  const location = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", [locationIcon, city, weather.country], {
    class: ""
  });
  const localTime = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", [`${(0,_timeAndDate__WEBPACK_IMPORTED_MODULE_2__["default"])(weather.timeZone)}`], null);
  const headerLeft = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [location, localTime], {
    class: "header-left w-full flex justify-around items center text-sm text-indigo-200 font-barlow  font-light"
  });
  const weatherIcon = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["cloud"], {
    class: "material-icons-outlined text-8xl"
  }); //weather description

  const weatherdescription = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", [weather.weatherdesc], {
    class: "text-indigo-500"
  }); //weather icon and description wrapper

  const weatherLeft = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [weatherdescription, weatherIcon], {
    class: "flex flex-col items-center font-barlow font-semibold text-sm border-r-[1px] border-slate-700 pr-2"
  }); //degree special character

  const deg = _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;"); // const celsiusSpan = helper.degreeCharacter("&#8451;");

  const celsiusSpan = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["C"], null); //celsiusSpan.classList.add("text-2xl", "align-top", "inline-block", "pt-2");
  //temperature value

  const temperature = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", [weather.temp.toFixed(0), deg, celsiusSpan], {
    class: "temperature-value text-5xl text-violet-400"
  }); //maximum and minimum temperature

  const high = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["H:", weather.maxTemp, _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;")], null);
  const low = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["L:", weather.minTemp, _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;")], null);
  const mid = _helper__WEBPACK_IMPORTED_MODULE_1__.degreeCharacter("&mid;");
  mid.classList.add("px-[1px", "text-violet-400");
  const minMax = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", [high, mid, low], {
    class: "text-xs text-indigo-300"
  }); //header right

  const checkbox = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("input", null, {
    type: "checkbox",
    id: "temp-toggler",
    class: "checkbox hidden"
  }); //label

  const toggleOnIcon = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["toggle_on"], {
    class: "material-icons-outlined text-3xl  hidden toggle-on transition duration-700 ease-in "
  });
  const toggleOffIcon = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["toggle_off"], {
    class: "material-icons-outlined text-3xl toggle-off transition duration-700 ease-in"
  });
  const label = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("label", [toggleOffIcon, toggleOnIcon], {
    class: "toggler px-1 flex text-indigo-300 ",
    for: "temp-toggler"
  });
  const fahrenheitSymbol = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [_helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;F")], null);
  _helper__WEBPACK_IMPORTED_MODULE_1__.addClass(fahrenheitSymbol, ["align-text-center", "fahrenheit", "text-gray-400", "text-base"]);
  const celsiusSymbol = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [_helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;C")], null);
  _helper__WEBPACK_IMPORTED_MODULE_1__.addClass(celsiusSymbol, ["align-text-center", "celsius", "text-sky-500", "text-base"]);
  const togglerWrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [celsiusSymbol, checkbox, label, fahrenheitSymbol], {
    class: "flex items-center font-akshar font-700"
  });
  const headerRight = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [togglerWrapper], {
    class: "header-right flex items-center h-8 self-end"
  }); //temperature and minmax wrapper

  const weatherRight = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [temperature, minMax, headerRight], {
    class: "flex flex-col justify-center items-center"
  }); //weather

  const weatherWrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [weatherLeft, weatherRight], {
    class: "grid grid-cols-[1fr_2fr] grid-rows-1 gap-x-1"
  });
  const fragment = new DocumentFragment();
  fragment.append(headerLeft, weatherWrapper);
  const header = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("header", [fragment], {
    class: "card-header grid grid-rows-[auto_1fr] grid-cols-1 justify-center items-center w-full bg-slate-800 mb-5 mt-2 pt-2 px-4 rounded-lg"
  });
  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherCardHeader);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-0 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-full {\n  height: 100%;\n}\n.min-h-\\[50px\\] {\n  min-height: 50px;\n}\n.w-full {\n  width: 100%;\n}\n.w-\\[95\\%\\] {\n  width: 95%;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.min-w-min {\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n.max-w-4xl {\n  max-width: 56rem;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.grid-cols-\\[1fr_auto\\] {\n  grid-template-columns: 1fr auto;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-\\[1fr_2fr\\] {\n  grid-template-columns: 1fr 2fr;\n}\n.grid-rows-\\[auto_1fr_auto\\] {\n  grid-template-rows: auto 1fr auto;\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-1 {\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n}\n.grid-rows-\\[auto_1fr\\] {\n  grid-template-rows: auto 1fr;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.gap-x-1 {\n  -moz-column-gap: 0.25rem;\n       column-gap: 0.25rem;\n}\n.self-end {\n  align-self: flex-end;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.border-t-\\[1px\\] {\n  border-top-width: 1px;\n}\n.border-l-2 {\n  border-left-width: 2px;\n}\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n.border-r-\\[1px\\] {\n  border-right-width: 1px;\n}\n.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\n.border-slate-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity));\n}\n.border-l-gray-600 {\n  --tw-border-opacity: 1;\n  border-left-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n}\n.bg-slate-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-\\[1px\\] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.pl-4 {\n  padding-left: 1rem;\n}\n.pt-\\[1\\.9px\\] {\n  padding-top: 1.9px;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.pr-2 {\n  padding-right: 0.5rem;\n}\n.align-top {\n  vertical-align: top;\n}\n.align-text-bottom {\n  vertical-align: text-bottom;\n}\n.font-barlow {\n  font-family: Barlow, sans-serif;\n}\n.font-akshar {\n  font-family: Akshar, sans-serif;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-\\[32px\\] {\n  font-size: 32px;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-8xl {\n  font-size: 6rem;\n  line-height: 1;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-light {\n  font-weight: 300;\n}\n.text-sky-500 {\n  --tw-text-opacity: 1;\n  color: rgb(14 165 233 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-pink-500 {\n  --tw-text-opacity: 1;\n  color: rgb(236 72 153 / var(--tw-text-opacity));\n}\n.text-sky-400 {\n  --tw-text-opacity: 1;\n  color: rgb(56 189 248 / var(--tw-text-opacity));\n}\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n.text-indigo-200 {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.text-indigo-500 {\n  --tw-text-opacity: 1;\n  color: rgb(99 102 241 / var(--tw-text-opacity));\n}\n.text-violet-400 {\n  --tw-text-opacity: 1;\n  color: rgb(167 139 250 / var(--tw-text-opacity));\n}\n.text-indigo-300 {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-700 {\n  transition-duration: 700ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.placeholder\\:text-sm::-moz-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm:-ms-input-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm::placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-gray-400::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-400:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-400::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.focus-within\\:border-2:focus-within {\n  border-width: 2px;\n}\n.focus-within\\:border-gray-600:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\n.focus-within\\:bg-gray-900:focus-within {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}", "",{"version":3,"sources":["webpack://./src/style.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes */ "./src/classes.js");

 //import classes from "./classes";
//import main from "./main-element";

 //import toggleWeatherUnit from "./convert-weather-unit";





const fragment = new DocumentFragment();
fragment.append((0,_header__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_main__WEBPACK_IMPORTED_MODULE_4__["default"])(), (0,_footer__WEBPACK_IMPORTED_MODULE_5__["default"])());
const app = document.querySelector(".app");
app.append(fragment);
_helper__WEBPACK_IMPORTED_MODULE_1__.addClass(app, ["grid", "grid-rows-[auto_1fr_auto]", "h-screen"]);
document.body.classList.add("bg-slate-900", "text-gray-200", "h-screen");
(0,_events__WEBPACK_IMPORTED_MODULE_2__["default"])(); //toggleWeatherUnit();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFB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QUFFQWpKLFFBQVEsQ0FBQ2tKLElBQVQsQ0FBY2xILFNBQWQsQ0FBd0JFLEdBQXhCLENBQTRCLGNBQTVCLEVBQTRDLGVBQTVDLEVBQTZELFVBQTdEO0FBRUFDLG1EQUFNLElBQ04sc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbnZlcnQtd2VhdGhlci11bml0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdGltZUFuZERhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckNhcmRDb250ZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJDYXJkaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImNvbnN0IGNsYXNzZXMgPSB7XG4gIGFwcFN0eWxlczogW1wiaC1zY3JlZW5cIl0sXG4gIG1haW5FbGVtZW50U3R5bGU6IFtcInctZnVsbFwiLCBcIm1heC13LTR4bFwiXSxcbiAgaGVhZGVyRWxlbWVudDogW1widy1mdWxsXCIsIFwiaC04XCJdLFxuICBuYXZFbGVtZW50OiBbXCJmbGV4XCIsIFwicHgtMlwiLCBcInctZnVsbFwiLCBcImgtZnVsbFwiXSxcbiAgaWNvbnNUZW1wOiBbXCJ0ZXh0LXNtXCIsIFwiYWxpZ24tdGV4dC1ib3R0b21cIl0sXG4gIGljb25UdG9nZ2xlOiBbXCJ0ZXh0LVszMnB4XVwiXSxcbiAgaWNvbnM6IFtcInRleHQtYmFzZVwiXSxcbn07XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSBbXG4gIHsgYXBwRGl2U3R5bGVhOiBcImgtc2NyZWVuXCIgfSxcbiAgeyBtYWluRWxlbWVudFN0eWxlczogJ3ctZnVsbFwiLCBcIm1heC13LTR4bCcgfSxcbiAgeyBuYXZFbGVtZW50U3R5bGVzOiBcImZsZXggcHgtMiB3LWZ1bGwgaC1mdWxsXCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzZXM7XG4iLCJpbXBvcnQgeyB0b2dnbGVyIH0gZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbi8vY29udmVydCBrZWx2aW4gdW5pdCB0byBGYWhyZW5oZWl0XG5mdW5jdGlvbiB0b0ZhaHJlbmhlaXQoY2Vsc2l1cykge1xuICBjb25zdCBmYWhyZW5oZWl0ID0gY2Vsc2l1cyAqIDEuOCArIDMyO1xuICBjb25zb2xlLmxvZyhmYWhyZW5oZWl0LnRvRml4ZWQoMCkpO1xuICByZXR1cm4gZmFocmVuaGVpdC50b0ZpeGVkKDApO1xufVxuXG4vL2NvbnZlcnQga2VsdmluIHVuaXQgdG8gQ2Vsc2l1c1xuZnVuY3Rpb24gdG9DZWxzaXVzKGtlbHZpblVuaXQpIHtcbiAgY29uc3QgY2Vsc2l1cyA9IGtlbHZpblVuaXQgLSAyNzMuMTU7XG4gIHJldHVybiBjZWxzaXVzLnRvRml4ZWQoMCk7XG59XG5cbi8qXG5jb25zdCBjb252ZXJUZW1wZXJhdHVyZVVuaXQgPSAod2VhdGhlcikgPT4ge1xuICBjb25zdCBpc1RvZ2dsZWQgPSB0b2dnbGVyKCk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlVW5pdCA9IGlzVG9nZ2xlZFxuICAgID8gdG9GYWhyZW5oZWl0KHdlYXRoZXIudGVtcClcbiAgICA6IHRvQ2Vsc2l1cyh3ZWF0aGVyLnRlbXApO1xuICByZXR1cm4gdGVtcGVyYXR1cmVVbml0O1xufTtcbiovXG5cbmNvbnN0IHNldFRlbXBlcmF0dXJlVW5pdCA9IChpc1RvZ2dsZWQsIHdlYXRoZXIpID0+IHtcbiAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmUtdmFsdWVcIik7XG4gIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgdGVtcCA9IGlzVG9nZ2xlZFxuICAgID8gdG9GYWhyZW5oZWl0KHdlYXRoZXJbMF0udGVtcC50b0ZpeGVkKDApKVxuICAgIDogd2VhdGhlclswXS50ZW1wLnRvRml4ZWQoMCk7XG5cbiAgdGVtcGVyYXR1cmVMYWJlbC5hcHBlbmQoXG4gICAgdGVtcCxcbiAgICBpc1RvZ2dsZWQgPyBoZWxwZXIuc3BlY2lhbChcIiZkZWc7RlwiKSA6IGhlbHBlci5zcGVjaWFsKFwiJmRlZztDXCIpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXRUZW1wZXJhdHVyZVVuaXQ7XG4iLCJleHBvcnQgY29uc3Qgd2VhdGhlckRhdGEgPSBbXG4gIHtcbiAgICB3ZWF0aGVyOiBcImNsb3Vkc1wiLFxuICAgIHdlYXRoZXJkZXNjOiBcIm92ZXJjYXN0IGNsb3VkXCIsXG4gICAgdGVtcDogMzIsXG4gICAgbWF4VGVtcDogMzQsXG4gICAgbWluVGVtcDogMjcsXG4gICAgZmVlbHNMaWtlOiAyOSxcbiAgICBodW1pZGl0eTogXCI3NSVcIixcbiAgICB3aW5kOiAyLFxuICAgIGNvdW50cnk6IFwiTkdcIixcbiAgICBjaXR5OiBcIkJlbmluIGNpdHlcIixcbiAgICB0aW1lWm9uZTogMTYwMDAwMDAsXG4gICAgdGltZTogMzYwMCxcbiAgICBpY29uOiBcImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyQwNG5AMngucG5nXCIsXG4gIH0sXG5dO1xuIiwiaW1wb3J0IHNldFRlbXBlcmF0dXJlVW5pdCBmcm9tIFwiLi9jb252ZXJ0LXdlYXRoZXItdW5pdFwiO1xuLy9pbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG4vLyBpbXBvcnQgeyB3ZWF0aGVyRGF0YSB9IGZyb20gXCIuL3RyYW5zb3JtLWRhdGFcIjtcbmltcG9ydCB7IHdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHdlYXRoZXJDYXJkIGZyb20gXCIuL3dlYXRoZXJDYXJkXCI7XG5cbi8vZ2V0IGxvY2F0aW9uIGZyb20gdXNlciBpbnB1dCBvbiBmb3JtXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICBjb25zdCBpbnB1dCA9IGZvcm0uZWxlbWVudHNbXCJzZWFyY2gtaW5wdXRcIl07XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zdCBsb2NhdGlvbiA9IGlucHV0LnZhbHVlO1xuICAgIC8vIGdldERhdGEobG9jYXRpb24pO1xuICAgIHdlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIH0pO1xufVxuXG4vL3RvZ2dsZSBjaGVjayBib3ggdG8gc3dpdGNoIGJldHdlZW4gdGVtcGVyYXR1cmUgc3RhdGVzXG5jb25zdCB0b2dnbGVyID0gKCkgPT4ge1xuICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQuY2hlY2tlZCk7XG4gICAgY29uc3QgaXNUb2dnbGVkID0gdGFyZ2V0LmNoZWNrZWQ7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIHNldFRlbXBlcmF0dXJlVW5pdChpc1RvZ2dsZWQsIHdlYXRoZXJEYXRhKTtcbiAgICB0b2dnbGVyU3dpdGNoKGlzVG9nZ2xlZCk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gdG9nZ2xlclN3aXRjaChpc1RvZ2dsZWQpIHtcbiAgY29uc3QgdG9nZ2xlT24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1vblwiKTtcbiAgY29uc3QgdG9nZ2xlT2ZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtb2ZmXCIpO1xuICBjb25zdCBjZWxzaXVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZWxzaXVzXCIpO1xuICBjb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYWhyZW5oZWl0XCIpO1xuICBpZiAoaXNUb2dnbGVkKSB7XG4gICAgdG9nZ2xlT24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXNreS01MDBcIik7XG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QuYWRkKFwidGV4dC1ncmF5LTQwMFwiKTtcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWdyYXktNDAwXCIpO1xuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZChcInRleHQtc2t5LTUwMFwiKTtcbiAgICB0b2dnbGVPZmYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuXG4gIGlmICghaXNUb2dnbGVkKSB7XG4gICAgdG9nZ2xlT24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB0b2dnbGVPZmYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICAgIGNlbHNpdXMuY2xhc3NMaXN0LmFkZChcInRleHQtc2t5LTUwMFwiKTtcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWdyYXktNDAwXCIpO1xuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZChcInRleHQtZ3JheS00MDBcIik7XG4gICAgZmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1za3ktNTAwXCIpO1xuICB9XG59XG5cbi8vaW5pdGlhbGl6ZSBldmVudHNcbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgZ2V0TG9jYXRpb24oKTtcbiAgdG9nZ2xlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzO1xuXG4vL2NvbnNvbGUubG9nKGZvcm0uZWxlbWVudHMpO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBmb290ZXJTZWN0aW9uID0gKCkgPT4ge1xuICAvL2ljb25zXG4gIGNvbnN0IGdpdGh1YiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7IGNsYXNzOiBcImZhYiBmYS1naXRodWJcIiB9KTtcbiAgY29uc3QgdHdpdHRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7IGNsYXNzOiBcImZhYiBmYS10d2l0dGVyXCIgfSk7XG4gIGNvbnN0IGxpbmtlZGluID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHtcbiAgICBjbGFzczogXCJmYWIgZmEtbGlua2VkaW5cIixcbiAgfSk7XG4gIC8vbGlua3NcbiAgY29uc3QgZ2l0aHViTGluayA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYVwiLCBbZ2l0aHViXSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3R3aWtpc3RhXCIsXG4gIH0pO1xuICBjb25zdCB0d2l0dGVyTGluayA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYVwiLCBbdHdpdHRlcl0sIHtcbiAgICBocmVmOiBcImh0dHBzOi8vdHdpdHRlci5jb20vYWFyb25hbmFtYVwiLFxuICB9KTtcbiAgY29uc3QgbGlua2VkaW5MaW5rID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFtsaW5rZWRpbl0sIHtcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hYXJvbmFuYW1hXCIsXG4gIH0pO1xuICAvL2ZyYWdtZW50XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKGdpdGh1YkxpbmssIHR3aXR0ZXJMaW5rLCBsaW5rZWRpbkxpbmspO1xuICAvL2Zvb3RlciBlbGVtZW50XG4gIGNvbnN0IGZvb3RlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwibWluLWgtWzUwcHhdIGJvcmRlci10LVsxcHhdIGJvcmRlci1ncmF5LTUwMCB3LWZ1bGwgZmxleCBmbGV4LXJvdyBtdC0yXCIsXG4gIH0pO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJTZWN0aW9uO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG5jb25zdCBoZWFkZXJTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgLyoqKioqKm5hdiBsZWZ0IHNlY3Rpb24qKioqKi9cbiAgY29uc3QgbG9nb0RlZyA9IGhlbHBlci5kZWdyZWVDaGFyYWN0ZXIoXCImZGVnO1wiKTtcbiAgbG9nb0RlZy5jbGFzc0xpc3QuYWRkKFwidGV4dC1waW5rLTUwMFwiLCBcInRleHQteGxcIik7XG4gIGNvbnN0IGxvZ28gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImgyXCIsIFtcIndlZGFcIiwgbG9nb0RlZ10sIHtcbiAgICBjbGFzczogXCJmb250LWJhcmxvdyBmb250LXNlbWlib2xkIHRleHQtc2t5LTQwMCB0ZXh0LTJ4bFwiLFxuICB9KTtcbiAgY29uc3QgbmF2TGVmdCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtsb2dvXSwge1xuICAgIGNsYXNzOiBcIm1iLTIgcHktWzFweF0gbG9nby1jb250YWluZXJcIixcbiAgfSk7XG5cbiAgLyoqKioqKm5hdiByaWdodCBzZWN0aW9uKioqKioqKioqL1xuXG4gIC8vY3JlYXRlIHNlYXJjaCBib3hcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFtdLCB7XG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgaWQ6IFwic2VhcmNoLWlucHV0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgd2VhdGhlciBsb2NhdGlvbiBcIixcbiAgICBjbGFzczpcbiAgICAgIFwiYmctdHJhbnNwYXJlbnQgIG91dGxpbmUtbm9uZSBhcHBlcmFuY2Utbm9uZSBwbC00IHB5LTIgaC1mdWxsIHBsYWNlaG9sZGVyOnRleHQtc20gcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTQwMFwiLFxuICB9KTtcblxuICAvL3NlYXJjaCBpY29uIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbWFnbmlmeWluZy1nbGFzc1wiPjwvaT5cbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBbXSwge1xuICAgIGNsYXNzOiBcImZhcyBmYS1zZWFyY2ggdGV4dC1ncmF5LTQwMCBcIixcbiAgfSk7XG5cbiAgLy9jcmVhdGUgc2VhcmNoIGJ1dHRvblxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbc2VhcmNoSWNvbl0sIHtcbiAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgIGlkOiBcInNlYXJjaC1idG5cIixcbiAgICBjbGFzczogXCJib3JkZXItbC0yIGJvcmRlci1sLWdyYXktNjAwIHB4LTMgcHktWzFweF0gbWluLXctbWluIGgtZnVsbFwiLFxuICB9KTtcblxuICAvL2NyZWF0IHNlYXJjaCBmb3JtXG4gIGNvbnN0IGZvcm0gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgW3NlYXJjaElucHV0LCBzZWFyY2hCdXR0b25dLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImdyaWQgZ3JpZC1jb2xzLVsxZnJfYXV0b10ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctWzk1JV0gbWF4LXcteHMgcm91bmRlZC1mdWxsIGJnLWdyYXktNzAwIHB4LTIgcHQtWzEuOXB4XSBmb2N1cy13aXRoaW46YmctZ3JheS05MDAgZm9jdXMtd2l0aGluOmJvcmRlci1ncmF5LTYwMCBmb2N1cy13aXRoaW46Ym9yZGVyLTJcIixcbiAgfSk7XG5cbiAgLy9cbiAgY29uc3QgbmF2UmlnaHQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbZm9ybV0sIHtcbiAgICBjbGFzczogXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcGItMlwiLFxuICB9KTtcblxuICAvKioqKipuYXYgZWxlbWVudCAqL1xuICBjb25zdCBuYXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcIm5hdlwiLCBbbmF2TGVmdCwgbmF2UmlnaHRdLCB7XG4gICAgY2xhc3M6IFwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsXCIsXG4gIH0pO1xuXG4gIGZyYWdtZW50LmFwcGVuZChuYXYpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczogXCJib3JkZXItYi0yIGJvcmRlci1ncmF5LTUwMCBweC0yIHB5LTIgdy1mdWxsIG1iLTRcIixcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTZWN0aW9uO1xuIiwiZnVuY3Rpb24gYWRkQ2xhc3MoZWxlLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMuZm9yRWFjaCgoaSkgPT4gZWxlLmNsYXNzTGlzdC5hZGQoaSkpO1xufVxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgbm9kZSwgYXR0cmlidXRlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChub2RlKSB7XG4gICAgbm9kZS5mb3JFYWNoKChpKSA9PiBlbGVtZW50LmFwcGVuZChpKSk7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZSkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGUpO1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoaSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlW2ldKSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGRlZ3JlZUNoYXJhY3RlciA9IChjaGFyKSA9PiB7XG4gIGNvbnN0IGRlZ3JlZUNoYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgLy8gY29uc3QgbGV0dGVyID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW2ZdLCBudWxsKTtcbiAgZGVncmVlQ2hhci5pbm5lckhUTUwgPSBjaGFyO1xuICAvL2RlZ3JlZUNoYXIuY2xhc3NMaXN0LmFkZChcInRleHQtc21cIik7XG4gIHJldHVybiBkZWdyZWVDaGFyO1xufTtcblxuY29uc3Qgc3BlY2lhbCA9IChjaGFyKSA9PiB7XG4gIGNvbnN0IGNoYXJhY3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjaGFyYWN0ZXIuaW5uZXJIVE1MID0gY2hhcjtcbiAgY29uc3QgcmVjaGFyID0gY2hhcmFjdGVyLnRleHRDb250ZW50O1xuICByZXR1cm4gcmVjaGFyO1xufTtcblxuY29uc3QgYWRkSWNvbiA9IChrZXl3b3JkLCBzdHlsZXMpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtrZXl3b3JkXSwge1xuICAgIGNsYXNzOiBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsXG4gIH0pO1xuICBhZGRDbGFzcyhzcGFuLCBzdHlsZXMpO1xuICByZXR1cm4gc3Bhbjtcbn07XG5cbmV4cG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50LCBkZWdyZWVDaGFyYWN0ZXIsIGFkZEljb24sIHNwZWNpYWwgfTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY29uc3QgbWFpblNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHAgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgxXCIsXG4gICAgW1wiRW50ZXIgYSBsb2FjdGlvbiB0byBkaXNsYXkgd2VhdGhlciBkZXRhaWxzXCJdLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcInRleHQtNHhsIHRleHQtZ3JheS0yMDBcIixcbiAgICB9XG4gICk7XG4gIGNvbnN0IHNlY3Rpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgW3BdLCBudWxsKTtcblxuICAvL21haW4gZWxlbWVudFxuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWdtZW50LmFwcGVuZChzZWN0aW9uKTtcbiAgY29uc3QgbWFpbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibWFpblwiLCBbZnJhZ21lbnRdLCB7XG4gICAgY2xhc3M6XG4gICAgICAndy1mdWxsXCIsIFwibWF4LXctNHhsIGZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LWF1dG8nLFxuICB9KTtcbiAgaGVscGVyLmFkZENsYXNzKG1haW4sIGNsYXNzZXMubWFpbkVsZW1lbnRTdHlsZSk7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpblNlY3Rpb247XG5cbi8qXG5leHBvcnQgY29uc3Qgd2VhdGhlckRhdGEgPSBbXG4gIHtcbiAgICB3ZWF0aGVyOiBcImNsb3Vkc1wiLFxuICAgIHdlYXRoZXJkZXNjOiBcIm92ZXJjYXN0IGNsb3VkXCIsXG4gICAgdGVtcDogMzIsXG4gICAgbWF4VGVtcDogMzQsXG4gICAgbWluVGVtcDogMjcsXG4gICAgZmVlbHNMaWtlOiAyOSxcbiAgICBodW1pZGl0eTogXCI3NSVcIixcbiAgICB3aW5kOiAyLFxuICAgIGNvdW50cnk6IFwiTkdcIixcbiAgICBjaXR5OiBcIkJlbmluIGNpdHlcIixcbiAgICB0aW1lWm9uZTogMTYwMDAwMDAsXG4gICAgdGltZTogMzYwMCxcbiAgICBpY29uOiBcImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyQwNG5AMngucG5nXCIsXG4gIH0sXG5dOyovXG4iLCIvL2FycmF5IG9mIGRheXMgb2Ygd2Vla1xuY29uc3QgZGF5c09mV2VlayA9IFtcbiAgeyBpZDogMCwgZGF5OiBcIlN1blwiIH0sXG4gIHsgaWQ6IDEsIGRheTogXCJNb25cIiB9LFxuICB7IGlkOiAyLCBkYXk6IFwiVHVlXCIgfSxcbiAgeyBpZDogMywgZGF5OiBcIldlZFwiIH0sXG4gIHsgaWQ6IDQsIGRheTogXCJUaHVcIiB9LFxuICB7IGlkOiA1LCBkYXk6IFwiRnJpXCIgfSxcbiAgeyBpZDogNiwgZGF5OiBcIlNhdFwiIH0sXG5dO1xuXG4vL2dldCBkYXkgb2Ygd2Vla1xuZnVuY3Rpb24gZGF5T2ZXZWVrKGRhdGUpIHtcbiAgbGV0IGRheSA9IG51bGw7XG4gIGRheXNPZldlZWsuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmIChpLmlkID09PSBkYXRlKSB7XG4gICAgICBkYXkgPSBpLmRheTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGF5O1xufVxuXG4vL2NvbnZlcnQgdGltZSB0byB1c2VyIHRpbWUgd2l0aCBVVEMgYW5kIFRpbWVab25lXG5mdW5jdGlvbiB1c2VyVGltZSh0aW1lWm9uZU9mZnNldCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbG9jYWxUaW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IGxvY2FsVGltZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICBjb25zdCB1dGNUaW1lID0gbG9jYWxUaW1lICsgbG9jYWxUaW1lT2Zmc2V0O1xuICBjb25zdCBsb2NhdGlvbk9mZnNldCA9IHV0Y1RpbWUgKyAxMDAwICogdGltZVpvbmVPZmZzZXQ7XG4gIGNvbnN0IGxvY2F0aW9uVGltZSA9IG5ldyBEYXRlKGxvY2F0aW9uT2Zmc2V0KTtcbiAgY29uc29sZS5sb2cobG9jYXRpb25UaW1lKTtcbiAgcmV0dXJuIGxvY2F0aW9uVGltZTtcblxuICAvL2RlZmluZSBkYXRlLCBkYXksIGhvdXIgYW1kIG1pbnV0ZVxufVxuXG5mdW5jdGlvbiByZW5kZXJVc2VyVGltZSh0aW1lWm9uZU9mZnNldCkge1xuICAvL2RlZmluZSBkYXRlLCBkYXksIGhvdXIgYW5kIG1pbnV0ZVxuICBjb25zdCBkYXRlID0gdXNlclRpbWUodGltZVpvbmVPZmZzZXQpO1xuICBjb25zdCBkYXkgPSBkYXlPZldlZWsoZGF0ZS5nZXREYXkoKSk7XG4gIGNvbnN0IGhvdXJBbmRNaW51dGVzID0gZGF0ZS50b0xvY2FsZVN0cmluZyhbXSwge1xuICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gIH0pO1xuXG4gIC8vZGVmaW5lIGZvcm1hdCB0byBkaXNwbGF5IHRpbWVcbiAgY29uc3QgZGlzbGF5VGltZSA9IGAke2RheX0gJHtob3VyQW5kTWludXRlc31gO1xuICByZXR1cm4gZGlzbGF5VGltZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVXNlclRpbWU7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgd2VhdGhlckNhcmRDb250ZW50IGZyb20gXCIuL3dlYXRoZXJDYXJkQ29udGVudFwiO1xuaW1wb3J0IHdlYXRoZXJDYXJkSGVhZGVyIGZyb20gXCIuL3dlYXRoZXJDYXJkaGVhZGVyXCI7XG5jb25zdCB3ZWF0aGVyQ2FyZCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICB3ZWF0aGVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBhcnRpY2xlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImFydGljbGVcIixcbiAgICAgIFt3ZWF0aGVyQ2FyZEhlYWRlcihpdGVtKSwgd2VhdGhlckNhcmRDb250ZW50KGl0ZW0pXSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6IFwiZ3JpZCBncmlkLWNvbHMtMSBncmlkLXJvd3MtMiB3LTQvNSByb3VuZGVkIGgtZnVsbCBteC1hdXRvIG15LTBcIixcbiAgICAgIH1cbiAgICApO1xuICAgIG1haW4uYXBwZW5kKGFydGljbGUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJDYXJkO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IGNvbnZlclRlbXBlcmF0dXJlVW5pdCBmcm9tIFwiLi9jb252ZXJ0LXdlYXRoZXItdW5pdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuY29uc3Qgd2VhdGhlckNhcmRDb250ZW50ID0gKHdlYXRoZXIpID0+IHtcbiAgLy93ZWF0aGVyIGljb25cbiAgLypjb25zdCB3ZWF0aGVySWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtdLCB7XG4gICAgc3JjOiB3ZWF0aGVyLmljb24sXG4gICAgYWx0OiBcIndlYXRoZXItaWNvblwiLFxuICAgIGNsYXNzOiBcImlubGluZS1ibG9ja1wiLFxuICB9KTsqL1xuXG4gIC8qIGNvbnN0IHdlYXRoZXJJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcImNsb3VkXCJdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC04eGxcIixcbiAgfSk7XG4gIC8vd2VhdGhlciBkZXNjcmlwdGlvblxuICBjb25zdCB3ZWF0aGVyZGVzY3JpcHRpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImg1XCIsXG4gICAgW3dlYXRoZXIud2VhdGhlcmRlc2NdLFxuICAgIG51bGxcbiAgKTtcbiAgLy93ZWF0aGVyIGljb24gYW5kIGRlc2NyaXB0aW9uIHdyYXBwZXJcbiAgY29uc3Qgd2VhdGhlckxlZnQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFt3ZWF0aGVyZGVzY3JpcHRpb24sIHdlYXRoZXJJY29uXSxcbiAgICB7IGNsYXNzOiBcImZsZXggY29sXCIgfVxuICApO1xuICAvL2RlZ3JlZSBzcGVjaWFsIGNoYXJhY3RlclxuICBjb25zdCBkZWcgPSBoZWxwZXIuc3BlY2lhbChcIiZkZWc7XCIpO1xuICAvLyBjb25zdCBjZWxzaXVzU3BhbiA9IGhlbHBlci5kZWdyZWVDaGFyYWN0ZXIoXCImIzg0NTE7XCIpO1xuICBjb25zdCBjZWxzaXVzU3BhbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJDXCJdLCBudWxsKTtcbiAgLy9jZWxzaXVzU3Bhbi5jbGFzc0xpc3QuYWRkKFwidGV4dC0yeGxcIiwgXCJhbGlnbi10b3BcIiwgXCJpbmxpbmUtYmxvY2tcIiwgXCJwdC0yXCIpO1xuICAvL3RlbXBlcmF0dXJlIHZhbHVlXG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoMVwiLFxuICAgIFt3ZWF0aGVyLnRlbXAudG9GaXhlZCgwKSwgZGVnLCBjZWxzaXVzU3Bhbl0sXG4gICAge1xuICAgICAgY2xhc3M6IFwidGVtcGVyYXR1cmUtdmFsdWUgdGV4dC04eGxcIixcbiAgICB9XG4gICk7XG5cbiAgLy9tYXhpbXVtIGFuZCBtaW5pbXVtIHRlbXBlcmF0dXJlXG4gIGNvbnN0IGhpZ2ggPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbXCJIOlwiLCB3ZWF0aGVyLm1heFRlbXAsIGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIildLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgbG93ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJzcGFuXCIsXG4gICAgW1wiTDpcIiwgd2VhdGhlci5taW5UZW1wLCBoZWxwZXIuc3BlY2lhbChcIiZkZWc7XCIpXSxcbiAgICBudWxsXG4gICk7XG5cbiAgY29uc3QgbWluTWF4ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoNVwiLFxuICAgIFtoaWdoLCBgJHtoZWxwZXIuc3BlY2lhbChcIiZtaWQ7XCIpfWAsIGxvd10sXG4gICAgeyBjbGFzczogXCJ0ZXh0LXhzXCIgfVxuICApO1xuXG4gIC8vdGVtcGVyYXR1cmUgYW5kIGZlZWxzTGlrZSB3cmFwcGVyXG4gIGNvbnN0IHdlYXRoZXJSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFt0ZW1wZXJhdHVyZSwgbWluTWF4XSwgbnVsbCk7XG5cbiAgLy93ZWF0aGVyXG4gIGNvbnN0IHdlYXRoZXJXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbd2VhdGhlckxlZnQsIHdlYXRoZXJSaWdodF0sXG4gICAge1xuICAgICAgY2xhc3M6IFwiZmxleCBiZy1zbGF0ZS04MDBcIixcbiAgICB9XG4gICk7Ki9cblxuICAvL290aGVyIHdlYXRoZXIgZGV0YWlsc1xuICAvL2ZlZWxzIGxpa2VcbiAgLypjb25zdCBmZWVsc0xpa2UgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImg1XCIsXG4gICAgW2BmZWVscyBsaWtlIC0gJHt3ZWF0aGVyLmZlZWxzTGlrZS50b0ZpeGVkKDApfWAsIGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIildLFxuICAgIHsgY2xhc3M6IFwidGV4dC14c1wiIH1cbiAgKTsqL1xuXG4gIGNvbnN0IGZlZWxzTGlrZUljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1widGhlcm1vc3RhdFwiXSwge1xuICAgIGNsYXNzOiBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsXG4gIH0pO1xuICBjb25zdCBmZWVsc0xpa2UgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbYGZlZWxzIGxpa2UgLSAke3dlYXRoZXIuZmVlbHNMaWtlLnRvRml4ZWQoMCl9YCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBmZWVsc0xpa2VEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtmZWVsc0xpa2VJY29uLCBmZWVsc0xpa2VdLFxuICAgIG51bGxcbiAgKTtcblxuICAvL2h1bWlkaXR5XG4gIGNvbnN0IGh1bWlkaXR5SWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ3YXRlcl9kcm9wXCJdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIixcbiAgfSk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BIdW1pZGl0eTogJHt3ZWF0aGVyLmh1bWlkaXR5fWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtodW1pZGl0eUljb24sIGh1bWlkaXR5XSxcbiAgICBudWxsXG4gICk7XG5cbiAgLy93aW5kXG4gIGNvbnN0IHdpbmRJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcImFpclwiXSwge1xuICAgIGNsYXNzOiBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsXG4gIH0pO1xuICBjb25zdCB3aW5kID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BXaW5kOiAke3dlYXRoZXIud2luZC50b0ZpeGVkKDApfSBtcHNgXSxcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IHdpbmREaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbd2luZEljb24sIHdpbmRdLCBudWxsKTtcblxuICAvL3ByZXNzdXJlXG4gIGNvbnN0IHByZXNzdXJlSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJzY2llbmNlXCJdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIixcbiAgfSk7XG4gIGNvbnN0IHByZXNzdXJlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtgcHJlc3N1cmU6IDEwMjBgXSwgbnVsbCk7XG4gIGNvbnN0IHByZXNzdXJlRGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbcHJlc3N1cmVJY29uLCBwcmVzc3VyZV0sXG4gICAgbnVsbFxuICApO1xuXG4gIC8qXG4gIC8vbWF4aW11bSB0ZW1wZXJhdHVyZVxuICBjb25zdCBtYXhUZW1wSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7XG4gICAgY2xhc3M6IFwiZmFzIGZhLXRlbXBlcmF0dXJlLWhpZ2hcIixcbiAgfSk7XG4gIGNvbnN0IG1heFRlbXAgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbYG1heDogJHt3ZWF0aGVyLm1heFRlbXAudG9GaXhlZCgwKX1gLCBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiXCIpXSxcbiAgICBudWxsXG4gICk7XG5cbiAgY29uc3QgbWF4VGVtcERpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFttYXhUZW1wSWNvbiwgbWF4VGVtcF0sIG51bGwpO1xuXG4gIC8vbWluaW11bSB0ZW1wZXJhdHVyZVxuICBjb25zdCBtaW5UZW1wSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7XG4gICAgY2xhc3M6IFwiZmFzIGZhLXRlbXBlcmF0dXJlLWxvd1wiLFxuICB9KTtcbiAgY29uc3QgbWluVGVtcCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtgbWluOiAke3dlYXRoZXIubWluVGVtcC50b0ZpeGVkKDApfWAsIGhlbHBlci5kZWdyZWVDaGFyYWN0ZXIoXCJcIildLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBtaW5UZW1wRGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW21pblRlbXBJY29uLCBtaW5UZW1wXSwgbnVsbCk7XG4gIC8qY29uc3QgRmVlbHNMaWtlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BGZWVscy1saWtlOiAke3dlYXRoZXIuZmVlbH1gXSxcbiAgICBudWxsXG4gICk7Ki9cblxuICBjb25zdCBvdGhlcldlYXRoZXJEZXRhaWxzID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbaHVtaWRpdHlEaXYsIHdpbmREaXYsIHByZXNzdXJlRGl2LCBmZWVsc0xpa2VEaXZdLFxuICAgIG51bGxcbiAgKTtcblxuICAvL2ZyYWdtZW50XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKG90aGVyV2VhdGhlckRldGFpbHMpO1xuXG4gIC8vXG4gIGNvbnN0IGRpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczogXCJiZy1zbGF0ZS04MDBcIixcbiAgfSk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZENvbnRlbnQ7XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgcmVuZGVyVXNlclRpbWUgZnJvbSBcIi4vdGltZUFuZERhdGVcIjtcblxuY29uc3Qgd2VhdGhlckNhcmRIZWFkZXIgPSAod2VhdGhlcikgPT4ge1xuICAvL2hlYWRlciBsZWZ0XG4gIGNvbnN0IGxvY2F0aW9uSWNvbiA9IGhlbHBlci5hZGRJY29uKFwibG9jYXRpb25fb25cIiwgW2NsYXNzZXMuaWNvbnNdKTtcbiAgbG9jYXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhzXCIpO1xuICBjb25zdCBjaXR5ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtgJHt3ZWF0aGVyLmNpdHl9LCBgXSwgbnVsbCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoM1wiLFxuICAgIFtsb2NhdGlvbkljb24sIGNpdHksIHdlYXRoZXIuY291bnRyeV0sXG4gICAgeyBjbGFzczogXCJcIiB9XG4gICk7XG4gIGNvbnN0IGxvY2FsVGltZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDNcIixcbiAgICBbYCR7cmVuZGVyVXNlclRpbWUod2VhdGhlci50aW1lWm9uZSl9YF0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBoZWFkZXJMZWZ0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2xvY2F0aW9uLCBsb2NhbFRpbWVdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImhlYWRlci1sZWZ0IHctZnVsbCBmbGV4IGp1c3RpZnktYXJvdW5kIGl0ZW1zIGNlbnRlciB0ZXh0LXNtIHRleHQtaW5kaWdvLTIwMCBmb250LWJhcmxvdyAgZm9udC1saWdodFwiLFxuICB9KTtcblxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJjbG91ZFwiXSwge1xuICAgIGNsYXNzOiBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHRleHQtOHhsXCIsXG4gIH0pO1xuICAvL3dlYXRoZXIgZGVzY3JpcHRpb25cbiAgY29uc3Qgd2VhdGhlcmRlc2NyaXB0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBbd2VhdGhlci53ZWF0aGVyZGVzY10sIHtcbiAgICBjbGFzczogXCJ0ZXh0LWluZGlnby01MDBcIixcbiAgfSk7XG4gIC8vd2VhdGhlciBpY29uIGFuZCBkZXNjcmlwdGlvbiB3cmFwcGVyXG4gIGNvbnN0IHdlYXRoZXJMZWZ0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbd2VhdGhlcmRlc2NyaXB0aW9uLCB3ZWF0aGVySWNvbl0sXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZm9udC1iYXJsb3cgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIGJvcmRlci1yLVsxcHhdIGJvcmRlci1zbGF0ZS03MDAgcHItMlwiLFxuICAgIH1cbiAgKTtcbiAgLy9kZWdyZWUgc3BlY2lhbCBjaGFyYWN0ZXJcbiAgY29uc3QgZGVnID0gaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKTtcbiAgLy8gY29uc3QgY2Vsc2l1c1NwYW4gPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJiM4NDUxO1wiKTtcbiAgY29uc3QgY2Vsc2l1c1NwYW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wiQ1wiXSwgbnVsbCk7XG4gIC8vY2Vsc2l1c1NwYW4uY2xhc3NMaXN0LmFkZChcInRleHQtMnhsXCIsIFwiYWxpZ24tdG9wXCIsIFwiaW5saW5lLWJsb2NrXCIsIFwicHQtMlwiKTtcbiAgLy90ZW1wZXJhdHVyZSB2YWx1ZVxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDFcIixcbiAgICBbd2VhdGhlci50ZW1wLnRvRml4ZWQoMCksIGRlZywgY2Vsc2l1c1NwYW5dLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcInRlbXBlcmF0dXJlLXZhbHVlIHRleHQtNXhsIHRleHQtdmlvbGV0LTQwMFwiLFxuICAgIH1cbiAgKTtcblxuICAvL21heGltdW0gYW5kIG1pbmltdW0gdGVtcGVyYXR1cmVcbiAgY29uc3QgaGlnaCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtcIkg6XCIsIHdlYXRoZXIubWF4VGVtcCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBsb3cgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbXCJMOlwiLCB3ZWF0aGVyLm1pblRlbXAsIGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIildLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBtaWQgPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJm1pZDtcIik7XG4gIG1pZC5jbGFzc0xpc3QuYWRkKFwicHgtWzFweFwiLCBcInRleHQtdmlvbGV0LTQwMFwiKTtcblxuICBjb25zdCBtaW5NYXggPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImg1XCIsIFtoaWdoLCBtaWQsIGxvd10sIHtcbiAgICBjbGFzczogXCJ0ZXh0LXhzIHRleHQtaW5kaWdvLTMwMFwiLFxuICB9KTtcblxuICAvL2hlYWRlciByaWdodFxuICBjb25zdCBjaGVja2JveCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgbnVsbCwge1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICBpZDogXCJ0ZW1wLXRvZ2dsZXJcIixcbiAgICBjbGFzczogXCJjaGVja2JveCBoaWRkZW5cIixcbiAgfSk7XG4gIC8vbGFiZWxcbiAgY29uc3QgdG9nZ2xlT25JY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcInRvZ2dsZV9vblwiXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB0ZXh0LTN4bCAgaGlkZGVuIHRvZ2dsZS1vbiB0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMCBlYXNlLWluIFwiLFxuICB9KTtcblxuICBjb25zdCB0b2dnbGVPZmZJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcInRvZ2dsZV9vZmZcIl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC0zeGwgdG9nZ2xlLW9mZiB0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMCBlYXNlLWluXCIsXG4gIH0pO1xuICBjb25zdCBsYWJlbCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgW3RvZ2dsZU9mZkljb24sIHRvZ2dsZU9uSWNvbl0sIHtcbiAgICBjbGFzczogXCJ0b2dnbGVyIHB4LTEgZmxleCB0ZXh0LWluZGlnby0zMDAgXCIsXG4gICAgZm9yOiBcInRlbXAtdG9nZ2xlclwiLFxuICB9KTtcblxuICBjb25zdCBmYWhyZW5oZWl0U3ltYm9sID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJzcGFuXCIsXG4gICAgW2hlbHBlci5zcGVjaWFsKFwiJmRlZztGXCIpXSxcbiAgICBudWxsXG4gICk7XG4gIGhlbHBlci5hZGRDbGFzcyhmYWhyZW5oZWl0U3ltYm9sLCBbXG4gICAgXCJhbGlnbi10ZXh0LWNlbnRlclwiLFxuICAgIFwiZmFocmVuaGVpdFwiLFxuICAgIFwidGV4dC1ncmF5LTQwMFwiLFxuICAgIFwidGV4dC1iYXNlXCIsXG4gIF0pO1xuICBjb25zdCBjZWxzaXVzU3ltYm9sID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJzcGFuXCIsXG4gICAgW2hlbHBlci5zcGVjaWFsKFwiJmRlZztDXCIpXSxcbiAgICBudWxsXG4gICk7XG4gIGhlbHBlci5hZGRDbGFzcyhjZWxzaXVzU3ltYm9sLCBbXG4gICAgXCJhbGlnbi10ZXh0LWNlbnRlclwiLFxuICAgIFwiY2Vsc2l1c1wiLFxuICAgIFwidGV4dC1za3ktNTAwXCIsXG4gICAgXCJ0ZXh0LWJhc2VcIixcbiAgXSk7XG5cbiAgY29uc3QgdG9nZ2xlcldyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtjZWxzaXVzU3ltYm9sLCBjaGVja2JveCwgbGFiZWwsIGZhaHJlbmhlaXRTeW1ib2xdLFxuICAgIHsgY2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIgZm9udC1ha3NoYXIgZm9udC03MDBcIiB9XG4gICk7XG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW3RvZ2dsZXJXcmFwcGVyXSwge1xuICAgIGNsYXNzOiBcImhlYWRlci1yaWdodCBmbGV4IGl0ZW1zLWNlbnRlciBoLTggc2VsZi1lbmRcIixcbiAgfSk7XG5cbiAgLy90ZW1wZXJhdHVyZSBhbmQgbWlubWF4IHdyYXBwZXJcbiAgY29uc3Qgd2VhdGhlclJpZ2h0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbdGVtcGVyYXR1cmUsIG1pbk1heCwgaGVhZGVyUmlnaHRdLFxuICAgIHsgY2xhc3M6IFwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIiB9XG4gICk7XG5cbiAgLy93ZWF0aGVyXG4gIGNvbnN0IHdlYXRoZXJXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbd2VhdGhlckxlZnQsIHdlYXRoZXJSaWdodF0sXG4gICAge1xuICAgICAgY2xhc3M6IFwiZ3JpZCBncmlkLWNvbHMtWzFmcl8yZnJdIGdyaWQtcm93cy0xIGdhcC14LTFcIixcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmQoaGVhZGVyTGVmdCwgd2VhdGhlcldyYXBwZXIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiY2FyZC1oZWFkZXIgZ3JpZCBncmlkLXJvd3MtW2F1dG9fMWZyXSBncmlkLWNvbHMtMSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGJnLXNsYXRlLTgwMCBtYi01IG10LTIgcHQtMiBweC00IHJvdW5kZWQtbGdcIixcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZEhlYWRlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjAuMjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLm14LWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5teS0wIHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuLm10LTIge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4ubWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5tYi00IHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxufVxcbi5pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaC04IHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5taW4taC1cXFxcWzUwcHhcXFxcXSB7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udy1cXFxcWzk1XFxcXCVcXFxcXSB7XFxuICB3aWR0aDogOTUlO1xcbn1cXG4udy00XFxcXC81IHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5taW4tdy1taW4ge1xcbiAgbWluLXdpZHRoOiAtd2Via2l0LW1pbi1jb250ZW50O1xcbiAgbWluLXdpZHRoOiAtbW96LW1pbi1jb250ZW50O1xcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuLm1heC13LTR4bCB7XFxuICBtYXgtd2lkdGg6IDU2cmVtO1xcbn1cXG4ubWF4LXcteHMge1xcbiAgbWF4LXdpZHRoOiAyMHJlbTtcXG59XFxuLmdyaWQtY29scy1cXFxcWzFmcl9hdXRvXFxcXF0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG59XFxuLmdyaWQtY29scy0xIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWQtY29scy1cXFxcWzFmcl8yZnJcXFxcXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxufVxcbi5ncmlkLXJvd3MtXFxcXFthdXRvXzFmcl9hdXRvXFxcXF0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbn1cXG4uZ3JpZC1yb3dzLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1yb3dzLTEge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1yb3dzLVxcXFxbYXV0b18xZnJcXFxcXSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1hcm91bmQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5nYXAteC0xIHtcXG4gIC1tb3otY29sdW1uLWdhcDogMC4yNXJlbTtcXG4gICAgICAgY29sdW1uLWdhcDogMC4yNXJlbTtcXG59XFxuLnNlbGYtZW5kIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG4ucm91bmRlZC1mdWxsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG59XFxuLnJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuLnJvdW5kZWQtbGcge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG4uYm9yZGVyLXQtXFxcXFsxcHhcXFxcXSB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcbi5ib3JkZXItbC0yIHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItYi0yIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG59XFxuLmJvcmRlci1yLVxcXFxbMXB4XFxcXF0ge1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxufVxcbi5ib3JkZXItZ3JheS01MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDEwNyAxMTQgMTI4IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1zbGF0ZS03MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDUxIDY1IDg1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1sLWdyYXktNjAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDc1IDg1IDk5IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJnLXRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYmctZ3JheS03MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1IDY1IDgxIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctc2xhdGUtOTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSAyMyA0MiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXNsYXRlLTgwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAgNDEgNTkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5weC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG4ucHktXFxcXFsxcHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogMXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDFweDtcXG59XFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5weC0zIHtcXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxufVxcbi5weC0xIHtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5weC00IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcbi5wbC00IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuLnB0LVxcXFxbMVxcXFwuOXB4XFxcXF0ge1xcbiAgcGFkZGluZy10b3A6IDEuOXB4O1xcbn1cXG4ucGItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ucHQtMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4ucHItMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5hbGlnbi10b3Age1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmFsaWduLXRleHQtYm90dG9tIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG59XFxuLmZvbnQtYmFybG93IHtcXG4gIGZvbnQtZmFtaWx5OiBCYXJsb3csIHNhbnMtc2VyaWY7XFxufVxcbi5mb250LWFrc2hhciB7XFxuICBmb250LWZhbWlseTogQWtzaGFyLCBzYW5zLXNlcmlmO1xcbn1cXG4udGV4dC1zbSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi50ZXh0LVxcXFxbMzJweFxcXFxdIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuLnRleHQtYmFzZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuLnRleHQtMnhsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcbi50ZXh0LTR4bCB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG4udGV4dC04eGwge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi50ZXh0LXhzIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4udGV4dC01eGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi50ZXh0LTN4bCB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcbi5mb250LXNlbWlib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5mb250LWxpZ2h0IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi50ZXh0LXNreS01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE0IDE2NSAyMzMgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS00MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE1NiAxNjMgMTc1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXBpbmstNTAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMzYgNzIgMTUzIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXNreS00MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDU2IDE4OSAyNDggLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS0yMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIyOSAyMzEgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWluZGlnby0yMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWluZGlnby01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDk5IDEwMiAyNDEgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtdmlvbGV0LTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTY3IDEzOSAyNTAgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtaW5kaWdvLTMwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTY1IDE4MCAyNTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLm91dGxpbmUtbm9uZSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG4udHJhbnNpdGlvbiB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyLCAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG4uZHVyYXRpb24tNzAwIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDcwMG1zO1xcbn1cXG4uZWFzZS1pbiB7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1zbTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1zbTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtc206OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWdyYXktNDAwOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNTYgMTYzIDE3NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtZ3JheS00MDA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNTYgMTYzIDE3NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtZ3JheS00MDA6OnBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNTYgMTYzIDE3NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXMtd2l0aGluXFxcXDpib3JkZXItMjpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcbi5mb2N1cy13aXRoaW5cXFxcOmJvcmRlci1ncmF5LTYwMDpmb2N1cy13aXRoaW4ge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDc1IDg1IDk5IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmZvY3VzLXdpdGhpblxcXFw6YmctZ3JheS05MDA6Zm9jdXMtd2l0aGluIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNyAyNCAzOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLDROQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHlDQUFjO1VBQWQsaUNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7O0NBQWM7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7Ozs7OztFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztFQUFkLFlBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDtFQUFBLG1CQUFjO0VBQWQsbUJBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxlQUFjO0VBQWQsZUFBYztFQUFkLGFBQWM7RUFBZCxhQUFjO0VBQWQsa0JBQWM7RUFBZCxzQ0FBYztFQUFkLGVBQWM7RUFBZCxvQkFBYztFQUFkLHNCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLGtCQUFjO0VBQWQsMkJBQWM7RUFBZCw0QkFBYztFQUFkLHNDQUFjO0VBQWQsa0NBQWM7RUFBZCwyQkFBYztFQUFkLHNCQUFjO0VBQWQsOEJBQWM7RUFBZCxZQUFjO0VBQWQsa0JBQWM7RUFBZCxnQkFBYztFQUFkLGlCQUFjO0VBQWQsa0JBQWM7RUFBZCxjQUFjO0VBQWQsZ0JBQWM7RUFBZCxhQUFjO0VBQWQsbUJBQWM7RUFBZCxxQkFBYztFQUFkLDJCQUFjO0VBQWQseUJBQWM7RUFBZCwwQkFBYztFQUFkLDJCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLHlCQUFjO0VBQWQ7QUFBYztBQUVkO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSw4QkFBbUI7RUFBbkIsMkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHdCQUFtQjtPQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGdCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGVBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDhCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHdLQUFtQjtFQUFuQix3SkFBbUI7RUFBbkIsZ05BQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFGbkI7RUFBQSxvQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLG9CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsb0JDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQTtDQ0FBO0FEQUE7RUFBQSx1QkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1wiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG4vL2ltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2NsYXNzZXNcIjtcbi8vaW1wb3J0IG1haW4gZnJvbSBcIi4vbWFpbi1lbGVtZW50XCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuLy9pbXBvcnQgdG9nZ2xlV2VhdGhlclVuaXQgZnJvbSBcIi4vY29udmVydC13ZWF0aGVyLXVuaXRcIjtcbmltcG9ydCBoZWFkZXJTZWN0aW9uIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IG1haW5TZWN0aW9uIGZyb20gXCIuL21haW5cIjtcbmltcG9ydCBmb290ZXJTZWN0aW9uIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG5jb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5mcmFnbWVudC5hcHBlbmQoaGVhZGVyU2VjdGlvbigpLCBtYWluU2VjdGlvbigpLCBmb290ZXJTZWN0aW9uKCkpO1xuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIik7XG5hcHAuYXBwZW5kKGZyYWdtZW50KTtcbmhlbHBlci5hZGRDbGFzcyhhcHAsIFtcImdyaWRcIiwgXCJncmlkLXJvd3MtW2F1dG9fMWZyX2F1dG9dXCIsIFwiaC1zY3JlZW5cIl0pO1xuXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJiZy1zbGF0ZS05MDBcIiwgXCJ0ZXh0LWdyYXktMjAwXCIsIFwiaC1zY3JlZW5cIik7XG5cbmV2ZW50cygpO1xuLy90b2dnbGVXZWF0aGVyVW5pdCgpO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImNsYXNzZXMiLCJhcHBTdHlsZXMiLCJtYWluRWxlbWVudFN0eWxlIiwiaGVhZGVyRWxlbWVudCIsIm5hdkVsZW1lbnQiLCJpY29uc1RlbXAiLCJpY29uVHRvZ2dsZSIsImljb25zIiwic3R5bGVzIiwiYXBwRGl2U3R5bGVhIiwibWFpbkVsZW1lbnRTdHlsZXMiLCJuYXZFbGVtZW50U3R5bGVzIiwidG9nZ2xlciIsImhlbHBlciIsInRvRmFocmVuaGVpdCIsImNlbHNpdXMiLCJmYWhyZW5oZWl0IiwiY29uc29sZSIsImxvZyIsInRvRml4ZWQiLCJ0b0NlbHNpdXMiLCJrZWx2aW5Vbml0Iiwic2V0VGVtcGVyYXR1cmVVbml0IiwiaXNUb2dnbGVkIiwid2VhdGhlciIsInRlbXBlcmF0dXJlTGFiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJ0ZW1wIiwiYXBwZW5kIiwic3BlY2lhbCIsIndlYXRoZXJEYXRhIiwid2VhdGhlcmRlc2MiLCJtYXhUZW1wIiwibWluVGVtcCIsImZlZWxzTGlrZSIsImh1bWlkaXR5Iiwid2luZCIsImNvdW50cnkiLCJjaXR5IiwidGltZVpvbmUiLCJ0aW1lIiwiaWNvbiIsIndlYXRoZXJDYXJkIiwiZ2V0TG9jYXRpb24iLCJmb3JtIiwiaW5wdXQiLCJlbGVtZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGUiLCJ0YXJnZXQiLCJjaGVja2VkIiwidG9nZ2xlclN3aXRjaCIsInRvZ2dsZU9uIiwidG9nZ2xlT2ZmIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZXZlbnRzIiwiZm9vdGVyU2VjdGlvbiIsImdpdGh1YiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzcyIsInR3aXR0ZXIiLCJsaW5rZWRpbiIsImdpdGh1YkxpbmsiLCJocmVmIiwidHdpdHRlckxpbmsiLCJsaW5rZWRpbkxpbmsiLCJmcmFnbWVudCIsIkRvY3VtZW50RnJhZ21lbnQiLCJmb290ZXIiLCJoZWFkZXJTZWN0aW9uIiwibG9nb0RlZyIsImRlZ3JlZUNoYXJhY3RlciIsImxvZ28iLCJuYXZMZWZ0Iiwic2VhcmNoSW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2hJY29uIiwic2VhcmNoQnV0dG9uIiwibmF2UmlnaHQiLCJuYXYiLCJoZWFkZXIiLCJhZGRDbGFzcyIsImVsZSIsImZvckVhY2giLCJ0YWciLCJub2RlIiwiYXR0cmlidXRlIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwic2V0QXR0cmlidXRlIiwiY2hhciIsImRlZ3JlZUNoYXIiLCJjaGFyYWN0ZXIiLCJyZWNoYXIiLCJ0ZXh0Q29udGVudCIsImFkZEljb24iLCJrZXl3b3JkIiwic3BhbiIsIm1haW5TZWN0aW9uIiwicCIsInNlY3Rpb24iLCJtYWluIiwiZGF5c09mV2VlayIsImRheSIsImRheU9mV2VlayIsImRhdGUiLCJ1c2VyVGltZSIsInRpbWVab25lT2Zmc2V0IiwiRGF0ZSIsImxvY2FsVGltZSIsImdldFRpbWUiLCJsb2NhbFRpbWVPZmZzZXQiLCJnZXRUaW1lem9uZU9mZnNldCIsInV0Y1RpbWUiLCJsb2NhdGlvbk9mZnNldCIsImxvY2F0aW9uVGltZSIsInJlbmRlclVzZXJUaW1lIiwiZ2V0RGF5IiwiaG91ckFuZE1pbnV0ZXMiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJkaXNsYXlUaW1lIiwid2VhdGhlckNhcmRDb250ZW50Iiwid2VhdGhlckNhcmRIZWFkZXIiLCJhcnRpY2xlIiwiY29udmVyVGVtcGVyYXR1cmVVbml0IiwiZmVlbHNMaWtlSWNvbiIsImZlZWxzTGlrZURpdiIsImh1bWlkaXR5SWNvbiIsImh1bWlkaXR5RGl2Iiwid2luZEljb24iLCJ3aW5kRGl2IiwicHJlc3N1cmVJY29uIiwicHJlc3N1cmUiLCJwcmVzc3VyZURpdiIsIm90aGVyV2VhdGhlckRldGFpbHMiLCJkaXYiLCJsb2NhdGlvbkljb24iLCJsb2NhdGlvbiIsImhlYWRlckxlZnQiLCJ3ZWF0aGVySWNvbiIsIndlYXRoZXJkZXNjcmlwdGlvbiIsIndlYXRoZXJMZWZ0IiwiZGVnIiwiY2Vsc2l1c1NwYW4iLCJ0ZW1wZXJhdHVyZSIsImhpZ2giLCJsb3ciLCJtaWQiLCJtaW5NYXgiLCJjaGVja2JveCIsInRvZ2dsZU9uSWNvbiIsInRvZ2dsZU9mZkljb24iLCJsYWJlbCIsImZvciIsImZhaHJlbmhlaXRTeW1ib2wiLCJjZWxzaXVzU3ltYm9sIiwidG9nZ2xlcldyYXBwZXIiLCJoZWFkZXJSaWdodCIsIndlYXRoZXJSaWdodCIsIndlYXRoZXJXcmFwcGVyIiwiYXBwIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=