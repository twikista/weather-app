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
    celsius.classList.remove("text-red-500");
    celsius.classList.add("text-gray-400");
    fahrenheit.classList.remove("text-gray-400");
    fahrenheit.classList.add("text-red-500");
    toggleOff.classList.add("hidden");
  }

  if (!isToggled) {
    toggleOn.classList.add("hidden");
    toggleOff.classList.remove("hidden");
    celsius.classList.add("text-red-500");
    celsius.classList.remove("text-gray-400");
    fahrenheit.classList.add("text-gray-400");
    fahrenheit.classList.remove("text-red-500");
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

  const logoDeg = _helper__WEBPACK_IMPORTED_MODULE_0__.special("&deg;");
  const logo = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", ["weda", logoDeg], {
    class: "teal"
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
      class: "flex flex-col w-4/5 rounded h-full mx-auto my-0"
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
  const weatherIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["cloud"], {
    class: "material-icons-outlined text-8xl"
  }); //weather description

  const weatherdescription = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", [weather.weatherdesc], null); //weather icon and description wrapper

  const weatherLeft = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [weatherdescription, weatherIcon], {
    class: "flex col"
  }); //degree special character

  const deg = _helper__WEBPACK_IMPORTED_MODULE_0__.special("&deg;"); // const celsiusSpan = helper.degreeCharacter("&#8451;");

  const celsiusSpan = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["C"], null); //celsiusSpan.classList.add("text-2xl", "align-top", "inline-block", "pt-2");
  //temperature value

  const temperature = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", [weather.temp.toFixed(0), deg, celsiusSpan], {
    class: "temperature-value text-8xl"
  }); //maximum and minimum temperature

  const high = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["H:", weather.maxTemp, _helper__WEBPACK_IMPORTED_MODULE_0__.special("&deg;")], null);
  const low = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["L:", weather.minTemp, _helper__WEBPACK_IMPORTED_MODULE_0__.special("&deg;")], null);
  const minMax = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", [high, `${_helper__WEBPACK_IMPORTED_MODULE_0__.special("&mid;")}`, low], {
    class: "text-xs"
  }); //temperature and feelsLike wrapper

  const weatherRight = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [temperature, minMax], null); //weather

  const weatherWrapper = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [weatherLeft, weatherRight], {
    class: "flex"
  }); //other weather details
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
  fragment.append(weatherWrapper, otherWeatherDetails); //

  const div = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [fragment], null);
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
  const city = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [`${weather.city}, `], null);
  const location = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", [locationIcon, city, weather.country], {
    class: "text-sm"
  });
  const localTime = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", [`${(0,_timeAndDate__WEBPACK_IMPORTED_MODULE_2__["default"])(weather.timeZone)}`], null);
  const headerLeft = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [location, localTime], {
    class: "header-left w-full flex justify-center"
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
    class: "toggler px-1 flex  ",
    for: "temp-toggler"
  });
  const fahrenheitSpan = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [_helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;F")], null);
  _helper__WEBPACK_IMPORTED_MODULE_1__.addClass(fahrenheitSpan, ["align-text-center", "fahrenheit", "text-gray-400"]);
  const celsiusSpan = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [_helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;C")], null);
  _helper__WEBPACK_IMPORTED_MODULE_1__.addClass(celsiusSpan, ["align-text-center", "celsius", "text-red-500", "font-900"]);
  const togglerWrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [celsiusSpan, checkbox, label, fahrenheitSpan], {
    class: "flex items-center"
  });
  const headerRight = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [togglerWrapper], {
    class: "header-right flex items-center h-8"
  });
  const fragment = new DocumentFragment();
  fragment.append(headerLeft);
  const header = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("header", [fragment], {
    class: "card-header flex justify-center items-center w-full"
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-0 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-full {\n  height: 100%;\n}\n.min-h-\\[50px\\] {\n  min-height: 50px;\n}\n.w-full {\n  width: 100%;\n}\n.w-\\[95\\%\\] {\n  width: 95%;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.min-w-min {\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n.max-w-4xl {\n  max-width: 56rem;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.grid-cols-\\[1fr_auto\\] {\n  grid-template-columns: 1fr auto;\n}\n.grid-rows-\\[auto_1fr_auto\\] {\n  grid-template-rows: auto 1fr auto;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.border-t-\\[1px\\] {\n  border-top-width: 1px;\n}\n.border-l-2 {\n  border-left-width: 2px;\n}\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\n.border-l-gray-600 {\n  --tw-border-opacity: 1;\n  border-left-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-\\[1px\\] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.pl-4 {\n  padding-left: 1rem;\n}\n.pt-\\[1\\.9px\\] {\n  padding-top: 1.9px;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.align-top {\n  vertical-align: top;\n}\n.align-text-bottom {\n  vertical-align: text-bottom;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-\\[32px\\] {\n  font-size: 32px;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-8xl {\n  font-size: 6rem;\n  line-height: 1;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-700 {\n  transition-duration: 700ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.placeholder\\:text-sm::-moz-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm:-ms-input-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm::placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-gray-400::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-400:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-400::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.focus-within\\:border-2:focus-within {\n  border-width: 2px;\n}\n.focus-within\\:border-gray-600:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\n.focus-within\\:bg-gray-900:focus-within {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}", "",{"version":3,"sources":["webpack://./src/style.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;",null],"sourceRoot":""}]);
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
document.body.classList.add("bg-gray-900", "text-gray-200", "h-screen");
(0,_events__WEBPACK_IMPORTED_MODULE_2__["default"])(); //toggleWeatherUnit();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLHNCQUFWLEVBQWtDO0VBQ2pELElBQUlDLElBQUksR0FBRyxFQUFYLENBRGlELENBQ2xDOztFQUVmQSxJQUFJLENBQUNDLFFBQUwsR0FBZ0IsU0FBU0EsUUFBVCxHQUFvQjtJQUNsQyxPQUFPLEtBQUtDLEdBQUwsQ0FBUyxVQUFVQyxJQUFWLEVBQWdCO01BQzlCLElBQUlDLE9BQU8sR0FBRyxFQUFkO01BQ0EsSUFBSUMsU0FBUyxHQUFHLE9BQU9GLElBQUksQ0FBQyxDQUFELENBQVgsS0FBbUIsV0FBbkM7O01BRUEsSUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBUixFQUFhO1FBQ1hDLE9BQU8sSUFBSSxjQUFjRSxNQUFkLENBQXFCSCxJQUFJLENBQUMsQ0FBRCxDQUF6QixFQUE4QixLQUE5QixDQUFYO01BQ0Q7O01BRUQsSUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBUixFQUFhO1FBQ1hDLE9BQU8sSUFBSSxVQUFVRSxNQUFWLENBQWlCSCxJQUFJLENBQUMsQ0FBRCxDQUFyQixFQUEwQixJQUExQixDQUFYO01BQ0Q7O01BRUQsSUFBSUUsU0FBSixFQUFlO1FBQ2JELE9BQU8sSUFBSSxTQUFTRSxNQUFULENBQWdCSCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFJLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUIsSUFBSUQsTUFBSixDQUFXSCxJQUFJLENBQUMsQ0FBRCxDQUFmLENBQXJCLEdBQTJDLEVBQTNELEVBQStELElBQS9ELENBQVg7TUFDRDs7TUFFREMsT0FBTyxJQUFJTCxzQkFBc0IsQ0FBQ0ksSUFBRCxDQUFqQzs7TUFFQSxJQUFJRSxTQUFKLEVBQWU7UUFDYkQsT0FBTyxJQUFJLEdBQVg7TUFDRDs7TUFFRCxJQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFSLEVBQWE7UUFDWEMsT0FBTyxJQUFJLEdBQVg7TUFDRDs7TUFFRCxJQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFSLEVBQWE7UUFDWEMsT0FBTyxJQUFJLEdBQVg7TUFDRDs7TUFFRCxPQUFPQSxPQUFQO0lBQ0QsQ0EvQk0sRUErQkpJLElBL0JJLENBK0JDLEVBL0JELENBQVA7RUFnQ0QsQ0FqQ0QsQ0FIaUQsQ0FvQzlDOzs7RUFHSFIsSUFBSSxDQUFDUyxDQUFMLEdBQVMsU0FBU0EsQ0FBVCxDQUFXQyxPQUFYLEVBQW9CQyxLQUFwQixFQUEyQkMsTUFBM0IsRUFBbUNDLFFBQW5DLEVBQTZDQyxLQUE3QyxFQUFvRDtJQUMzRCxJQUFJLE9BQU9KLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7TUFDL0JBLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBRCxFQUFPQSxPQUFQLEVBQWdCSyxTQUFoQixDQUFELENBQVY7SUFDRDs7SUFFRCxJQUFJQyxzQkFBc0IsR0FBRyxFQUE3Qjs7SUFFQSxJQUFJSixNQUFKLEVBQVk7TUFDVixLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1YsTUFBekIsRUFBaUNVLENBQUMsRUFBbEMsRUFBc0M7UUFDcEMsSUFBSUMsRUFBRSxHQUFHLEtBQUtELENBQUwsRUFBUSxDQUFSLENBQVQ7O1FBRUEsSUFBSUMsRUFBRSxJQUFJLElBQVYsRUFBZ0I7VUFDZEYsc0JBQXNCLENBQUNFLEVBQUQsQ0FBdEIsR0FBNkIsSUFBN0I7UUFDRDtNQUNGO0lBQ0Y7O0lBRUQsS0FBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHVCxPQUFPLENBQUNILE1BQTlCLEVBQXNDWSxFQUFFLEVBQXhDLEVBQTRDO01BQzFDLElBQUloQixJQUFJLEdBQUcsR0FBR0csTUFBSCxDQUFVSSxPQUFPLENBQUNTLEVBQUQsQ0FBakIsQ0FBWDs7TUFFQSxJQUFJUCxNQUFNLElBQUlJLHNCQUFzQixDQUFDYixJQUFJLENBQUMsQ0FBRCxDQUFMLENBQXBDLEVBQStDO1FBQzdDO01BQ0Q7O01BRUQsSUFBSSxPQUFPVyxLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO1FBQ2hDLElBQUksT0FBT1gsSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixXQUF2QixFQUFvQztVQUNsQ0EsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVVyxLQUFWO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xYLElBQUksQ0FBQyxDQUFELENBQUosR0FBVSxTQUFTRyxNQUFULENBQWdCSCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFJLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUIsSUFBSUQsTUFBSixDQUFXSCxJQUFJLENBQUMsQ0FBRCxDQUFmLENBQXJCLEdBQTJDLEVBQTNELEVBQStELElBQS9ELEVBQXFFRyxNQUFyRSxDQUE0RUgsSUFBSSxDQUFDLENBQUQsQ0FBaEYsRUFBcUYsR0FBckYsQ0FBVjtVQUNBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVXLEtBQVY7UUFDRDtNQUNGOztNQUVELElBQUlILEtBQUosRUFBVztRQUNULElBQUksQ0FBQ1IsSUFBSSxDQUFDLENBQUQsQ0FBVCxFQUFjO1VBQ1pBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVVEsS0FBVjtRQUNELENBRkQsTUFFTztVQUNMUixJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsVUFBVUcsTUFBVixDQUFpQkgsSUFBSSxDQUFDLENBQUQsQ0FBckIsRUFBMEIsSUFBMUIsRUFBZ0NHLE1BQWhDLENBQXVDSCxJQUFJLENBQUMsQ0FBRCxDQUEzQyxFQUFnRCxHQUFoRCxDQUFWO1VBQ0FBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVVEsS0FBVjtRQUNEO01BQ0Y7O01BRUQsSUFBSUUsUUFBSixFQUFjO1FBQ1osSUFBSSxDQUFDVixJQUFJLENBQUMsQ0FBRCxDQUFULEVBQWM7VUFDWkEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLEdBQUdHLE1BQUgsQ0FBVU8sUUFBVixDQUFWO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xWLElBQUksQ0FBQyxDQUFELENBQUosR0FBVSxjQUFjRyxNQUFkLENBQXFCSCxJQUFJLENBQUMsQ0FBRCxDQUF6QixFQUE4QixLQUE5QixFQUFxQ0csTUFBckMsQ0FBNENILElBQUksQ0FBQyxDQUFELENBQWhELEVBQXFELEdBQXJELENBQVY7VUFDQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVVSxRQUFWO1FBQ0Q7TUFDRjs7TUFFRGIsSUFBSSxDQUFDb0IsSUFBTCxDQUFVakIsSUFBVjtJQUNEO0VBQ0YsQ0FyREQ7O0VBdURBLE9BQU9ILElBQVA7QUFDRCxDQS9GRDs7Ozs7Ozs7OztBQ05hOztBQUViSCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUssSUFBVixFQUFnQjtFQUMvQixJQUFJQyxPQUFPLEdBQUdELElBQUksQ0FBQyxDQUFELENBQWxCO0VBQ0EsSUFBSWtCLFVBQVUsR0FBR2xCLElBQUksQ0FBQyxDQUFELENBQXJCOztFQUVBLElBQUksQ0FBQ2tCLFVBQUwsRUFBaUI7SUFDZixPQUFPakIsT0FBUDtFQUNEOztFQUVELElBQUksT0FBT2tCLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7SUFDOUIsSUFBSUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLFFBQVEsQ0FBQ0Msa0JBQWtCLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixVQUFmLENBQUQsQ0FBbkIsQ0FBVCxDQUFqQjtJQUNBLElBQUlPLElBQUksR0FBRywrREFBK0R0QixNQUEvRCxDQUFzRWlCLE1BQXRFLENBQVg7SUFDQSxJQUFJTSxhQUFhLEdBQUcsT0FBT3ZCLE1BQVAsQ0FBY3NCLElBQWQsRUFBb0IsS0FBcEIsQ0FBcEI7SUFDQSxJQUFJRSxVQUFVLEdBQUdULFVBQVUsQ0FBQ1UsT0FBWCxDQUFtQjdCLEdBQW5CLENBQXVCLFVBQVU4QixNQUFWLEVBQWtCO01BQ3hELE9BQU8saUJBQWlCMUIsTUFBakIsQ0FBd0JlLFVBQVUsQ0FBQ1ksVUFBWCxJQUF5QixFQUFqRCxFQUFxRDNCLE1BQXJELENBQTREMEIsTUFBNUQsRUFBb0UsS0FBcEUsQ0FBUDtJQUNELENBRmdCLENBQWpCO0lBR0EsT0FBTyxDQUFDNUIsT0FBRCxFQUFVRSxNQUFWLENBQWlCd0IsVUFBakIsRUFBNkJ4QixNQUE3QixDQUFvQyxDQUFDdUIsYUFBRCxDQUFwQyxFQUFxRHJCLElBQXJELENBQTBELElBQTFELENBQVA7RUFDRDs7RUFFRCxPQUFPLENBQUNKLE9BQUQsRUFBVUksSUFBVixDQUFlLElBQWYsQ0FBUDtBQUNELENBbkJEOzs7Ozs7Ozs7Ozs7Ozs7QUNGQSxNQUFNMEIsT0FBTyxHQUFHO0VBQ2RDLFNBQVMsRUFBRSxDQUFDLFVBQUQsQ0FERztFQUVkQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQUQsRUFBVyxXQUFYLENBRko7RUFHZEMsYUFBYSxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsQ0FIRDtFQUlkQyxVQUFVLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixRQUFqQixFQUEyQixRQUEzQixDQUpFO0VBS2RDLFNBQVMsRUFBRSxDQUFDLFNBQUQsRUFBWSxtQkFBWixDQUxHO0VBTWRDLFdBQVcsRUFBRSxDQUFDLGFBQUQsQ0FOQztFQU9kQyxLQUFLLEVBQUUsQ0FBQyxXQUFEO0FBUE8sQ0FBaEI7QUFVTyxNQUFNQyxNQUFNLEdBQUcsQ0FDcEI7RUFBRUMsWUFBWSxFQUFFO0FBQWhCLENBRG9CLEVBRXBCO0VBQUVDLGlCQUFpQixFQUFFO0FBQXJCLENBRm9CLEVBR3BCO0VBQUVDLGdCQUFnQixFQUFFO0FBQXBCLENBSG9CLENBQWY7QUFNUCxpRUFBZVgsT0FBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtDQUdBOztBQUNBLFNBQVNjLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCO0VBQzdCLE1BQU1DLFVBQVUsR0FBR0QsT0FBTyxHQUFHLEdBQVYsR0FBZ0IsRUFBbkM7RUFDQUUsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVUsQ0FBQ0csT0FBWCxDQUFtQixDQUFuQixDQUFaO0VBQ0EsT0FBT0gsVUFBVSxDQUFDRyxPQUFYLENBQW1CLENBQW5CLENBQVA7QUFDRCxFQUVEOzs7QUFDQSxTQUFTQyxTQUFULENBQW1CQyxVQUFuQixFQUErQjtFQUM3QixNQUFNTixPQUFPLEdBQUdNLFVBQVUsR0FBRyxNQUE3QjtFQUNBLE9BQU9OLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQixDQUFoQixDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1HLGtCQUFrQixHQUFHLENBQUNDLFNBQUQsRUFBWUMsT0FBWixLQUF3QjtFQUNqRCxNQUFNQyxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtFQUNBRixnQkFBZ0IsQ0FBQ0csU0FBakIsR0FBNkIsRUFBN0I7RUFDQSxNQUFNQyxJQUFJLEdBQUdOLFNBQVMsR0FDbEJULFlBQVksQ0FBQ1UsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxJQUFYLENBQWdCVixPQUFoQixDQUF3QixDQUF4QixDQUFELENBRE0sR0FFbEJLLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ssSUFBWCxDQUFnQlYsT0FBaEIsQ0FBd0IsQ0FBeEIsQ0FGSjtFQUlBTSxnQkFBZ0IsQ0FBQ0ssTUFBakIsQ0FDRUQsSUFERixFQUVFTixTQUFTLEdBQUdWLDRDQUFBLENBQWUsUUFBZixDQUFILEdBQThCQSw0Q0FBQSxDQUFlLFFBQWYsQ0FGekM7QUFJRCxDQVhEOztBQWFBLGlFQUFlUyxrQkFBZjs7Ozs7Ozs7Ozs7Ozs7QUN2Q08sTUFBTVUsV0FBVyxHQUFHLENBQ3pCO0VBQ0VSLE9BQU8sRUFBRSxRQURYO0VBRUVTLFdBQVcsRUFBRSxnQkFGZjtFQUdFSixJQUFJLEVBQUUsRUFIUjtFQUlFSyxPQUFPLEVBQUUsRUFKWDtFQUtFQyxPQUFPLEVBQUUsRUFMWDtFQU1FQyxTQUFTLEVBQUUsRUFOYjtFQU9FQyxRQUFRLEVBQUUsS0FQWjtFQVFFQyxJQUFJLEVBQUUsQ0FSUjtFQVNFQyxPQUFPLEVBQUUsSUFUWDtFQVVFQyxJQUFJLEVBQUUsWUFWUjtFQVdFQyxRQUFRLEVBQUUsUUFYWjtFQVlFQyxJQUFJLEVBQUUsSUFaUjtFQWFFQyxJQUFJLEVBQUU7QUFiUixDQUR5QixDQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NDUDtBQUNBOztBQUNBO0NBR0E7O0FBQ0EsU0FBU0UsV0FBVCxHQUF1QjtFQUNyQixNQUFNQyxJQUFJLEdBQUdwQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtFQUNBLE1BQU1vQixLQUFLLEdBQUdELElBQUksQ0FBQ0UsUUFBTCxDQUFjLGNBQWQsQ0FBZDtFQUNBRixJQUFJLENBQUNHLGdCQUFMLENBQXNCLFFBQXRCLEVBQWlDQyxDQUFELElBQU87SUFDckNBLENBQUMsQ0FBQ0MsY0FBRixHQURxQyxDQUVyQztJQUNBOztJQUNBUCx3REFBVyxDQUFDWiw4Q0FBRCxDQUFYO0lBQ0FmLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYyw4Q0FBWjtFQUNELENBTkQ7QUFPRCxFQUVEOzs7QUFDQSxNQUFNcEIsT0FBTyxHQUFHLE1BQU07RUFDcEIsTUFBTXdDLE1BQU0sR0FBRzFCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFmO0VBQ0F5QixNQUFNLENBQUNILGdCQUFQLENBQXdCLFFBQXhCLEVBQW1DQyxDQUFELElBQU87SUFDdkMsTUFBTUcsTUFBTSxHQUFHSCxDQUFDLENBQUNHLE1BQWpCO0lBQ0FwQyxPQUFPLENBQUNDLEdBQVIsQ0FBWW1DLE1BQU0sQ0FBQ0MsT0FBbkI7SUFDQSxNQUFNL0IsU0FBUyxHQUFHOEIsTUFBTSxDQUFDQyxPQUF6QjtJQUNBckMsT0FBTyxDQUFDQyxHQUFSLENBQVljLDhDQUFaO0lBQ0FWLGlFQUFrQixDQUFDQyxTQUFELEVBQVlTLDhDQUFaLENBQWxCO0lBQ0F1QixhQUFhLENBQUNoQyxTQUFELENBQWI7RUFDRCxDQVBEO0FBUUQsQ0FWRDs7QUFZQSxTQUFTZ0MsYUFBVCxDQUF1QmhDLFNBQXZCLEVBQWtDO0VBQ2hDLE1BQU1pQyxRQUFRLEdBQUc5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7RUFDQSxNQUFNOEIsU0FBUyxHQUFHL0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWxCO0VBQ0EsTUFBTVosT0FBTyxHQUFHVyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7RUFDQSxNQUFNWCxVQUFVLEdBQUdVLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFuQjs7RUFDQSxJQUFJSixTQUFKLEVBQWU7SUFDYmlDLFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsUUFBMUI7SUFDQTVDLE9BQU8sQ0FBQzJDLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGNBQXpCO0lBQ0E1QyxPQUFPLENBQUMyQyxTQUFSLENBQWtCRSxHQUFsQixDQUFzQixlQUF0QjtJQUNBNUMsVUFBVSxDQUFDMEMsU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsZUFBNUI7SUFDQTNDLFVBQVUsQ0FBQzBDLFNBQVgsQ0FBcUJFLEdBQXJCLENBQXlCLGNBQXpCO0lBQ0FILFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkUsR0FBcEIsQ0FBd0IsUUFBeEI7RUFDRDs7RUFFRCxJQUFJLENBQUNyQyxTQUFMLEVBQWdCO0lBQ2RpQyxRQUFRLENBQUNFLFNBQVQsQ0FBbUJFLEdBQW5CLENBQXVCLFFBQXZCO0lBQ0FILFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsUUFBM0I7SUFFQTVDLE9BQU8sQ0FBQzJDLFNBQVIsQ0FBa0JFLEdBQWxCLENBQXNCLGNBQXRCO0lBQ0E3QyxPQUFPLENBQUMyQyxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixlQUF6QjtJQUNBM0MsVUFBVSxDQUFDMEMsU0FBWCxDQUFxQkUsR0FBckIsQ0FBeUIsZUFBekI7SUFDQTVDLFVBQVUsQ0FBQzBDLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLGNBQTVCO0VBQ0Q7QUFDRixFQUVEOzs7QUFDQSxNQUFNRSxNQUFNLEdBQUcsTUFBTTtFQUNuQmhCLFdBQVc7RUFDWGpDLE9BQU87QUFDUixDQUhEOztBQUtBLGlFQUFlaUQsTUFBZixHQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLE1BQU07RUFDMUI7RUFDQSxNQUFNQyxNQUFNLEdBQUdsRCxrREFBQSxDQUFxQixHQUFyQixFQUEwQixJQUExQixFQUFnQztJQUFFb0QsS0FBSyxFQUFFO0VBQVQsQ0FBaEMsQ0FBZjtFQUNBLE1BQU1DLE9BQU8sR0FBR3JELGtEQUFBLENBQXFCLEdBQXJCLEVBQTBCLElBQTFCLEVBQWdDO0lBQUVvRCxLQUFLLEVBQUU7RUFBVCxDQUFoQyxDQUFoQjtFQUNBLE1BQU1FLFFBQVEsR0FBR3RELGtEQUFBLENBQXFCLEdBQXJCLEVBQTBCLElBQTFCLEVBQWdDO0lBQy9Db0QsS0FBSyxFQUFFO0VBRHdDLENBQWhDLENBQWpCLENBSjBCLENBTzFCOztFQUNBLE1BQU1HLFVBQVUsR0FBR3ZELGtEQUFBLENBQXFCLEdBQXJCLEVBQTBCLENBQUNrRCxNQUFELENBQTFCLEVBQW9DO0lBQ3JETSxJQUFJLEVBQUU7RUFEK0MsQ0FBcEMsQ0FBbkI7RUFHQSxNQUFNQyxXQUFXLEdBQUd6RCxrREFBQSxDQUFxQixHQUFyQixFQUEwQixDQUFDcUQsT0FBRCxDQUExQixFQUFxQztJQUN2REcsSUFBSSxFQUFFO0VBRGlELENBQXJDLENBQXBCO0VBR0EsTUFBTUUsWUFBWSxHQUFHMUQsa0RBQUEsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBQ3NELFFBQUQsQ0FBMUIsRUFBc0M7SUFDekRFLElBQUksRUFBRTtFQURtRCxDQUF0QyxDQUFyQixDQWQwQixDQWlCMUI7O0VBQ0EsTUFBTUcsUUFBUSxHQUFHLElBQUlDLGdCQUFKLEVBQWpCO0VBQ0FELFFBQVEsQ0FBQzFDLE1BQVQsQ0FBZ0JzQyxVQUFoQixFQUE0QkUsV0FBNUIsRUFBeUNDLFlBQXpDLEVBbkIwQixDQW9CMUI7O0VBQ0EsTUFBTUcsTUFBTSxHQUFHN0Qsa0RBQUEsQ0FBcUIsUUFBckIsRUFBK0IsQ0FBQzJELFFBQUQsQ0FBL0IsRUFBMkM7SUFDeERQLEtBQUssRUFDSDtFQUZzRCxDQUEzQyxDQUFmO0VBS0EsT0FBT1MsTUFBUDtBQUNELENBM0JEOztBQTZCQSxpRUFBZVosYUFBZjs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBOztBQUVBLE1BQU1hLGFBQWEsR0FBRyxNQUFNO0VBQzFCLE1BQU1ILFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtFQUVBOztFQUNBLE1BQU1HLE9BQU8sR0FBRy9ELDRDQUFBLENBQWUsT0FBZixDQUFoQjtFQUNBLE1BQU1nRSxJQUFJLEdBQUdoRSxrREFBQSxDQUFxQixJQUFyQixFQUEyQixDQUFDLE1BQUQsRUFBUytELE9BQVQsQ0FBM0IsRUFBOEM7SUFDekRYLEtBQUssRUFBRTtFQURrRCxDQUE5QyxDQUFiO0VBR0EsTUFBTWEsT0FBTyxHQUFHakUsa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQ2dFLElBQUQsQ0FBNUIsRUFBb0M7SUFDbERaLEtBQUssRUFBRTtFQUQyQyxDQUFwQyxDQUFoQjtFQUlBO0VBRUE7O0VBQ0EsTUFBTWMsV0FBVyxHQUFHbEUsa0RBQUEsQ0FBcUIsT0FBckIsRUFBOEIsRUFBOUIsRUFBa0M7SUFDcERtRSxJQUFJLEVBQUUsTUFEOEM7SUFFcERoRyxFQUFFLEVBQUUsY0FGZ0Q7SUFHcERpRyxXQUFXLEVBQUUseUJBSHVDO0lBSXBEaEIsS0FBSyxFQUNIO0VBTGtELENBQWxDLENBQXBCLENBZjBCLENBdUIxQjs7RUFDQSxNQUFNaUIsVUFBVSxHQUFHckUsa0RBQUEsQ0FBcUIsR0FBckIsRUFBMEIsRUFBMUIsRUFBOEI7SUFDL0NvRCxLQUFLLEVBQUU7RUFEd0MsQ0FBOUIsQ0FBbkIsQ0F4QjBCLENBNEIxQjs7RUFDQSxNQUFNa0IsWUFBWSxHQUFHdEUsa0RBQUEsQ0FBcUIsUUFBckIsRUFBK0IsQ0FBQ3FFLFVBQUQsQ0FBL0IsRUFBNkM7SUFDaEVGLElBQUksRUFBRSxRQUQwRDtJQUVoRWhHLEVBQUUsRUFBRSxZQUY0RDtJQUdoRWlGLEtBQUssRUFBRTtFQUh5RCxDQUE3QyxDQUFyQixDQTdCMEIsQ0FtQzFCOztFQUNBLE1BQU1uQixJQUFJLEdBQUdqQyxrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDa0UsV0FBRCxFQUFjSSxZQUFkLENBQTdCLEVBQTBEO0lBQ3JFbEIsS0FBSyxFQUNIO0VBRm1FLENBQTFELENBQWIsQ0FwQzBCLENBeUMxQjs7RUFDQSxNQUFNbUIsUUFBUSxHQUFHdkUsa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQ2lDLElBQUQsQ0FBNUIsRUFBb0M7SUFDbkRtQixLQUFLLEVBQUU7RUFENEMsQ0FBcEMsQ0FBakI7RUFJQTs7RUFDQSxNQUFNb0IsR0FBRyxHQUFHeEUsa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQ2lFLE9BQUQsRUFBVU0sUUFBVixDQUE1QixFQUFpRDtJQUMzRG5CLEtBQUssRUFBRTtFQURvRCxDQUFqRCxDQUFaO0VBSUFPLFFBQVEsQ0FBQzFDLE1BQVQsQ0FBZ0J1RCxHQUFoQjtFQUVBLE1BQU1DLE1BQU0sR0FBR3pFLGtEQUFBLENBQXFCLFFBQXJCLEVBQStCLENBQUMyRCxRQUFELENBQS9CLEVBQTJDO0lBQ3hEUCxLQUFLLEVBQUU7RUFEaUQsQ0FBM0MsQ0FBZjtFQUdBLE9BQU9xQixNQUFQO0FBQ0QsQ0F6REQ7O0FBMkRBLGlFQUFlWCxhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REEsU0FBU1ksUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUJ4RixPQUF2QixFQUFnQztFQUM5QkEsT0FBTyxDQUFDeUYsT0FBUixDQUFpQmxILENBQUQsSUFBT2lILEdBQUcsQ0FBQzlCLFNBQUosQ0FBY0UsR0FBZCxDQUFrQnJGLENBQWxCLENBQXZCO0FBQ0Q7O0FBRUQsTUFBTXlGLGFBQWEsR0FBRyxDQUFDMEIsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLFNBQVosS0FBMEI7RUFDOUMsTUFBTUMsT0FBTyxHQUFHbkUsUUFBUSxDQUFDc0MsYUFBVCxDQUF1QjBCLEdBQXZCLENBQWhCOztFQUNBLElBQUlDLElBQUosRUFBVTtJQUNSQSxJQUFJLENBQUNGLE9BQUwsQ0FBY2xILENBQUQsSUFBT3NILE9BQU8sQ0FBQy9ELE1BQVIsQ0FBZXZELENBQWYsQ0FBcEI7RUFDRDs7RUFDRCxJQUFJcUgsU0FBSixFQUFlO0lBQ2IsTUFBTUUsVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosU0FBWixDQUFuQjtJQUNBRSxVQUFVLENBQUNMLE9BQVgsQ0FBb0JsSCxDQUFELElBQU9zSCxPQUFPLENBQUNJLFlBQVIsQ0FBcUIxSCxDQUFyQixFQUF3QnFILFNBQVMsQ0FBQ3JILENBQUQsQ0FBakMsQ0FBMUI7RUFDRDs7RUFFRCxPQUFPc0gsT0FBUDtBQUNELENBWEQ7O0FBYUEsTUFBTUssZUFBZSxHQUFJQyxJQUFELElBQVU7RUFDaEMsTUFBTUMsVUFBVSxHQUFHMUUsUUFBUSxDQUFDc0MsYUFBVCxDQUF1QixNQUF2QixDQUFuQixDQURnQyxDQUVoQzs7RUFDQW9DLFVBQVUsQ0FBQ3hFLFNBQVgsR0FBdUJ1RSxJQUF2QixDQUhnQyxDQUloQzs7RUFDQSxPQUFPQyxVQUFQO0FBQ0QsQ0FORDs7QUFRQSxNQUFNckUsT0FBTyxHQUFJb0UsSUFBRCxJQUFVO0VBQ3hCLE1BQU1FLFNBQVMsR0FBRzNFLFFBQVEsQ0FBQ3NDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbEI7RUFDQXFDLFNBQVMsQ0FBQ3pFLFNBQVYsR0FBc0J1RSxJQUF0QjtFQUNBLE1BQU1HLE1BQU0sR0FBR0QsU0FBUyxDQUFDRSxXQUF6QjtFQUNBLE9BQU9ELE1BQVA7QUFDRCxDQUxEOztBQU9BLE1BQU1FLE9BQU8sR0FBRyxDQUFDQyxPQUFELEVBQVVqRyxNQUFWLEtBQXFCO0VBQ25DLE1BQU1rRyxJQUFJLEdBQUcxQyxhQUFhLENBQUMsTUFBRCxFQUFTLENBQUN5QyxPQUFELENBQVQsRUFBb0I7SUFDNUN4QyxLQUFLLEVBQUU7RUFEcUMsQ0FBcEIsQ0FBMUI7RUFHQXNCLFFBQVEsQ0FBQ21CLElBQUQsRUFBT2xHLE1BQVAsQ0FBUjtFQUNBLE9BQU9rRyxJQUFQO0FBQ0QsQ0FORDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLE1BQU07RUFDeEIsTUFBTUMsQ0FBQyxHQUFHL0Ysa0RBQUEsQ0FDUixJQURRLEVBRVIsQ0FBQyw0Q0FBRCxDQUZRLEVBR1I7SUFDRW9ELEtBQUssRUFBRTtFQURULENBSFEsQ0FBVjtFQU9BLE1BQU00QyxPQUFPLEdBQUdoRyxrREFBQSxDQUFxQixTQUFyQixFQUFnQyxDQUFDK0YsQ0FBRCxDQUFoQyxFQUFxQyxJQUFyQyxDQUFoQixDQVJ3QixDQVV4Qjs7RUFDQSxNQUFNcEMsUUFBUSxHQUFHLElBQUlDLGdCQUFKLEVBQWpCO0VBQ0FELFFBQVEsQ0FBQzFDLE1BQVQsQ0FBZ0IrRSxPQUFoQjtFQUNBLE1BQU1DLElBQUksR0FBR2pHLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMyRCxRQUFELENBQTdCLEVBQXlDO0lBQ3BEUCxLQUFLLEVBQ0g7RUFGa0QsQ0FBekMsQ0FBYjtFQUlBcEQsNkNBQUEsQ0FBZ0JpRyxJQUFoQixFQUFzQjlHLGlFQUF0QjtFQUNBLE9BQU84RyxJQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBLGlFQUFlSCxXQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBLE1BQU1JLFVBQVUsR0FBRyxDQUNqQjtFQUFFL0gsRUFBRSxFQUFFLENBQU47RUFBU2dJLEdBQUcsRUFBRTtBQUFkLENBRGlCLEVBRWpCO0VBQUVoSSxFQUFFLEVBQUUsQ0FBTjtFQUFTZ0ksR0FBRyxFQUFFO0FBQWQsQ0FGaUIsRUFHakI7RUFBRWhJLEVBQUUsRUFBRSxDQUFOO0VBQVNnSSxHQUFHLEVBQUU7QUFBZCxDQUhpQixFQUlqQjtFQUFFaEksRUFBRSxFQUFFLENBQU47RUFBU2dJLEdBQUcsRUFBRTtBQUFkLENBSmlCLEVBS2pCO0VBQUVoSSxFQUFFLEVBQUUsQ0FBTjtFQUFTZ0ksR0FBRyxFQUFFO0FBQWQsQ0FMaUIsRUFNakI7RUFBRWhJLEVBQUUsRUFBRSxDQUFOO0VBQVNnSSxHQUFHLEVBQUU7QUFBZCxDQU5pQixFQU9qQjtFQUFFaEksRUFBRSxFQUFFLENBQU47RUFBU2dJLEdBQUcsRUFBRTtBQUFkLENBUGlCLENBQW5CLEVBVUE7O0FBQ0EsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7RUFDdkIsSUFBSUYsR0FBRyxHQUFHLElBQVY7RUFDQUQsVUFBVSxDQUFDdEIsT0FBWCxDQUFvQmxILENBQUQsSUFBTztJQUN4QixJQUFJQSxDQUFDLENBQUNTLEVBQUYsS0FBU2tJLElBQWIsRUFBbUI7TUFDakJGLEdBQUcsR0FBR3pJLENBQUMsQ0FBQ3lJLEdBQVI7SUFDRDtFQUNGLENBSkQ7RUFLQSxPQUFPQSxHQUFQO0FBQ0QsRUFFRDs7O0FBQ0EsU0FBU0csUUFBVCxDQUFrQkMsY0FBbEIsRUFBa0M7RUFDaEMsTUFBTUYsSUFBSSxHQUFHLElBQUlHLElBQUosRUFBYjtFQUNBLE1BQU1DLFNBQVMsR0FBR0osSUFBSSxDQUFDSyxPQUFMLEVBQWxCO0VBQ0EsTUFBTUMsZUFBZSxHQUFHTixJQUFJLENBQUNPLGlCQUFMLEtBQTJCLEtBQW5EO0VBQ0EsTUFBTUMsT0FBTyxHQUFHSixTQUFTLEdBQUdFLGVBQTVCO0VBQ0EsTUFBTUcsY0FBYyxHQUFHRCxPQUFPLEdBQUcsT0FBT04sY0FBeEM7RUFDQSxNQUFNUSxZQUFZLEdBQUcsSUFBSVAsSUFBSixDQUFTTSxjQUFULENBQXJCO0VBQ0ExRyxPQUFPLENBQUNDLEdBQVIsQ0FBWTBHLFlBQVo7RUFDQSxPQUFPQSxZQUFQLENBUmdDLENBVWhDO0FBQ0Q7O0FBRUQsU0FBU0MsY0FBVCxDQUF3QlQsY0FBeEIsRUFBd0M7RUFDdEM7RUFDQSxNQUFNRixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBRCxDQUFyQjtFQUNBLE1BQU1KLEdBQUcsR0FBR0MsU0FBUyxDQUFDQyxJQUFJLENBQUNZLE1BQUwsRUFBRCxDQUFyQjtFQUNBLE1BQU1DLGNBQWMsR0FBR2IsSUFBSSxDQUFDYyxjQUFMLENBQW9CLEVBQXBCLEVBQXdCO0lBQzdDQyxJQUFJLEVBQUUsU0FEdUM7SUFFN0NDLE1BQU0sRUFBRTtFQUZxQyxDQUF4QixDQUF2QixDQUpzQyxDQVN0Qzs7RUFDQSxNQUFNQyxVQUFVLEdBQUksR0FBRW5CLEdBQUksSUFBR2UsY0FBZSxFQUE1QztFQUNBLE9BQU9JLFVBQVA7QUFDRDs7QUFFRCxpRUFBZU4sY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBOztBQUNBLE1BQU1qRixXQUFXLEdBQUlwQixPQUFELElBQWE7RUFDL0IsTUFBTXNGLElBQUksR0FBR3BGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0VBQ0FtRixJQUFJLENBQUNsRixTQUFMLEdBQWlCLEVBQWpCO0VBQ0FKLE9BQU8sQ0FBQ2lFLE9BQVIsQ0FBaUJ4SCxJQUFELElBQVU7SUFDeEIsTUFBTXFLLE9BQU8sR0FBR3pILGtEQUFBLENBQ2QsU0FEYyxFQUVkLENBQUN3SCw4REFBaUIsQ0FBQ3BLLElBQUQsQ0FBbEIsRUFBMEJtSywrREFBa0IsQ0FBQ25LLElBQUQsQ0FBNUMsQ0FGYyxFQUdkO01BQUVnRyxLQUFLLEVBQUU7SUFBVCxDQUhjLENBQWhCO0lBS0E2QyxJQUFJLENBQUNoRixNQUFMLENBQVl3RyxPQUFaO0VBQ0QsQ0FQRDtBQVFELENBWEQ7O0FBYUEsaUVBQWUxRixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTXdGLGtCQUFrQixHQUFJNUcsT0FBRCxJQUFhO0VBQ3RDOztFQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFFRSxNQUFNZ0gsV0FBVyxHQUFHM0gsa0RBQUEsQ0FBcUIsTUFBckIsRUFBNkIsQ0FBQyxPQUFELENBQTdCLEVBQXdDO0lBQzFEb0QsS0FBSyxFQUFFO0VBRG1ELENBQXhDLENBQXBCLENBUnNDLENBV3RDOztFQUNBLE1BQU13RSxrQkFBa0IsR0FBRzVILGtEQUFBLENBQ3pCLElBRHlCLEVBRXpCLENBQUNXLE9BQU8sQ0FBQ1MsV0FBVCxDQUZ5QixFQUd6QixJQUh5QixDQUEzQixDQVpzQyxDQWlCdEM7O0VBQ0EsTUFBTXlHLFdBQVcsR0FBRzdILGtEQUFBLENBQ2xCLEtBRGtCLEVBRWxCLENBQUM0SCxrQkFBRCxFQUFxQkQsV0FBckIsQ0FGa0IsRUFHbEI7SUFBRXZFLEtBQUssRUFBRTtFQUFULENBSGtCLENBQXBCLENBbEJzQyxDQXVCdEM7O0VBQ0EsTUFBTTBFLEdBQUcsR0FBRzlILDRDQUFBLENBQWUsT0FBZixDQUFaLENBeEJzQyxDQXlCdEM7O0VBQ0EsTUFBTStILFdBQVcsR0FBRy9ILGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMsR0FBRCxDQUE3QixFQUFvQyxJQUFwQyxDQUFwQixDQTFCc0MsQ0EyQnRDO0VBQ0E7O0VBQ0EsTUFBTWdJLFdBQVcsR0FBR2hJLGtEQUFBLENBQ2xCLElBRGtCLEVBRWxCLENBQUNXLE9BQU8sQ0FBQ0ssSUFBUixDQUFhVixPQUFiLENBQXFCLENBQXJCLENBQUQsRUFBMEJ3SCxHQUExQixFQUErQkMsV0FBL0IsQ0FGa0IsRUFHbEI7SUFDRTNFLEtBQUssRUFBRTtFQURULENBSGtCLENBQXBCLENBN0JzQyxDQXFDdEM7O0VBQ0EsTUFBTTZFLElBQUksR0FBR2pJLGtEQUFBLENBQ1gsTUFEVyxFQUVYLENBQUMsSUFBRCxFQUFPVyxPQUFPLENBQUNVLE9BQWYsRUFBd0JyQiw0Q0FBQSxDQUFlLE9BQWYsQ0FBeEIsQ0FGVyxFQUdYLElBSFcsQ0FBYjtFQUtBLE1BQU1rSSxHQUFHLEdBQUdsSSxrREFBQSxDQUNWLE1BRFUsRUFFVixDQUFDLElBQUQsRUFBT1csT0FBTyxDQUFDVyxPQUFmLEVBQXdCdEIsNENBQUEsQ0FBZSxPQUFmLENBQXhCLENBRlUsRUFHVixJQUhVLENBQVo7RUFNQSxNQUFNbUksTUFBTSxHQUFHbkksa0RBQUEsQ0FDYixJQURhLEVBRWIsQ0FBQ2lJLElBQUQsRUFBUSxHQUFFakksNENBQUEsQ0FBZSxPQUFmLENBQXdCLEVBQWxDLEVBQXFDa0ksR0FBckMsQ0FGYSxFQUdiO0lBQUU5RSxLQUFLLEVBQUU7RUFBVCxDQUhhLENBQWYsQ0FqRHNDLENBdUR0Qzs7RUFDQSxNQUFNZ0YsWUFBWSxHQUFHcEksa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQ2dJLFdBQUQsRUFBY0csTUFBZCxDQUE1QixFQUFtRCxJQUFuRCxDQUFyQixDQXhEc0MsQ0EwRHRDOztFQUNBLE1BQU1FLGNBQWMsR0FBR3JJLGtEQUFBLENBQ3JCLEtBRHFCLEVBRXJCLENBQUM2SCxXQUFELEVBQWNPLFlBQWQsQ0FGcUIsRUFHckI7SUFDRWhGLEtBQUssRUFBRTtFQURULENBSHFCLENBQXZCLENBM0RzQyxDQW1FdEM7RUFDQTs7RUFDQTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztFQUVFLE1BQU1rRixhQUFhLEdBQUd0SSxrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDLFlBQUQsQ0FBN0IsRUFBNkM7SUFDakVvRCxLQUFLLEVBQUU7RUFEMEQsQ0FBN0MsQ0FBdEI7RUFHQSxNQUFNN0IsU0FBUyxHQUFHdkIsa0RBQUEsQ0FDaEIsR0FEZ0IsRUFFaEIsQ0FBRSxnQkFBZVcsT0FBTyxDQUFDWSxTQUFSLENBQWtCakIsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBNkIsRUFBOUMsRUFBaUROLDRDQUFBLENBQWUsT0FBZixDQUFqRCxDQUZnQixFQUdoQixJQUhnQixDQUFsQjtFQUtBLE1BQU11SSxZQUFZLEdBQUd2SSxrREFBQSxDQUNuQixLQURtQixFQUVuQixDQUFDc0ksYUFBRCxFQUFnQi9HLFNBQWhCLENBRm1CLEVBR25CLElBSG1CLENBQXJCLENBbkZzQyxDQXlGdEM7O0VBQ0EsTUFBTWlILFlBQVksR0FBR3hJLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMsWUFBRCxDQUE3QixFQUE2QztJQUNoRW9ELEtBQUssRUFBRTtFQUR5RCxDQUE3QyxDQUFyQjtFQUdBLE1BQU01QixRQUFRLEdBQUd4QixrREFBQSxDQUNmLEdBRGUsRUFFZixDQUFFLGFBQVlXLE9BQU8sQ0FBQ2EsUUFBUyxFQUEvQixDQUZlLEVBR2YsSUFIZSxDQUFqQjtFQUtBLE1BQU1pSCxXQUFXLEdBQUd6SSxrREFBQSxDQUNsQixLQURrQixFQUVsQixDQUFDd0ksWUFBRCxFQUFlaEgsUUFBZixDQUZrQixFQUdsQixJQUhrQixDQUFwQixDQWxHc0MsQ0F3R3RDOztFQUNBLE1BQU1rSCxRQUFRLEdBQUcxSSxrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDLEtBQUQsQ0FBN0IsRUFBc0M7SUFDckRvRCxLQUFLLEVBQUU7RUFEOEMsQ0FBdEMsQ0FBakI7RUFHQSxNQUFNM0IsSUFBSSxHQUFHekIsa0RBQUEsQ0FDWCxHQURXLEVBRVgsQ0FBRSxTQUFRVyxPQUFPLENBQUNjLElBQVIsQ0FBYW5CLE9BQWIsQ0FBcUIsQ0FBckIsQ0FBd0IsTUFBbEMsQ0FGVyxFQUdYLElBSFcsQ0FBYjtFQUtBLE1BQU1xSSxPQUFPLEdBQUczSSxrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDMEksUUFBRCxFQUFXakgsSUFBWCxDQUE1QixFQUE4QyxJQUE5QyxDQUFoQixDQWpIc0MsQ0FtSHRDOztFQUNBLE1BQU1tSCxZQUFZLEdBQUc1SSxrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDLFNBQUQsQ0FBN0IsRUFBMEM7SUFDN0RvRCxLQUFLLEVBQUU7RUFEc0QsQ0FBMUMsQ0FBckI7RUFHQSxNQUFNeUYsUUFBUSxHQUFHN0ksa0RBQUEsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBRSxnQkFBRixDQUExQixFQUE4QyxJQUE5QyxDQUFqQjtFQUNBLE1BQU04SSxXQUFXLEdBQUc5SSxrREFBQSxDQUNsQixLQURrQixFQUVsQixDQUFDNEksWUFBRCxFQUFlQyxRQUFmLENBRmtCLEVBR2xCLElBSGtCLENBQXBCO0VBTUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFLRSxNQUFNRSxtQkFBbUIsR0FBRy9JLGtEQUFBLENBQzFCLEtBRDBCLEVBRTFCLENBQUN5SSxXQUFELEVBQWNFLE9BQWQsRUFBdUJHLFdBQXZCLEVBQW9DUCxZQUFwQyxDQUYwQixFQUcxQixJQUgwQixDQUE1QixDQTVKc0MsQ0FrS3RDOztFQUNBLE1BQU01RSxRQUFRLEdBQUcsSUFBSUMsZ0JBQUosRUFBakI7RUFDQUQsUUFBUSxDQUFDMUMsTUFBVCxDQUFnQm9ILGNBQWhCLEVBQWdDVSxtQkFBaEMsRUFwS3NDLENBc0t0Qzs7RUFDQSxNQUFNQyxHQUFHLEdBQUdoSixrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDMkQsUUFBRCxDQUE1QixFQUF3QyxJQUF4QyxDQUFaO0VBQ0EsT0FBT3FGLEdBQVA7QUFDRCxDQXpLRDs7QUEyS0EsaUVBQWV6QixrQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5S0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLGlCQUFpQixHQUFJN0csT0FBRCxJQUFhO0VBQ3JDO0VBQ0EsTUFBTXNJLFlBQVksR0FBR2pKLDRDQUFBLENBQWUsYUFBZixFQUE4QixDQUFDYixzREFBRCxDQUE5QixDQUFyQjtFQUNBLE1BQU13QyxJQUFJLEdBQUczQixrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFFLEdBQUVXLE9BQU8sQ0FBQ2dCLElBQUssSUFBakIsQ0FBN0IsRUFBb0QsSUFBcEQsQ0FBYjtFQUNBLE1BQU11SCxRQUFRLEdBQUdsSixrREFBQSxDQUNmLElBRGUsRUFFZixDQUFDaUosWUFBRCxFQUFldEgsSUFBZixFQUFxQmhCLE9BQU8sQ0FBQ2UsT0FBN0IsQ0FGZSxFQUdmO0lBQUUwQixLQUFLLEVBQUU7RUFBVCxDQUhlLENBQWpCO0VBS0EsTUFBTXFELFNBQVMsR0FBR3pHLGtEQUFBLENBQ2hCLElBRGdCLEVBRWhCLENBQUUsR0FBRWdILHdEQUFjLENBQUNyRyxPQUFPLENBQUNpQixRQUFULENBQW1CLEVBQXJDLENBRmdCLEVBR2hCLElBSGdCLENBQWxCO0VBS0EsTUFBTXVILFVBQVUsR0FBR25KLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUNrSixRQUFELEVBQVd6QyxTQUFYLENBQTVCLEVBQW1EO0lBQ3BFckQsS0FBSyxFQUFFO0VBRDZELENBQW5ELENBQW5CLENBZHFDLENBa0JyQzs7RUFDQSxNQUFNZ0csUUFBUSxHQUFHcEosa0RBQUEsQ0FBcUIsT0FBckIsRUFBOEIsSUFBOUIsRUFBb0M7SUFDbkRtRSxJQUFJLEVBQUUsVUFENkM7SUFFbkRoRyxFQUFFLEVBQUUsY0FGK0M7SUFHbkRpRixLQUFLLEVBQUU7RUFINEMsQ0FBcEMsQ0FBakIsQ0FuQnFDLENBd0JyQzs7RUFDQSxNQUFNaUcsWUFBWSxHQUFHckosa0RBQUEsQ0FBcUIsTUFBckIsRUFBNkIsQ0FBQyxXQUFELENBQTdCLEVBQTRDO0lBQy9Eb0QsS0FBSyxFQUNIO0VBRjZELENBQTVDLENBQXJCO0VBS0EsTUFBTWtHLGFBQWEsR0FBR3RKLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMsWUFBRCxDQUE3QixFQUE2QztJQUNqRW9ELEtBQUssRUFDSDtFQUYrRCxDQUE3QyxDQUF0QjtFQUlBLE1BQU1tRyxLQUFLLEdBQUd2SixrREFBQSxDQUFxQixPQUFyQixFQUE4QixDQUFDc0osYUFBRCxFQUFnQkQsWUFBaEIsQ0FBOUIsRUFBNkQ7SUFDekVqRyxLQUFLLEVBQUUscUJBRGtFO0lBRXpFb0csR0FBRyxFQUFFO0VBRm9FLENBQTdELENBQWQ7RUFLQSxNQUFNQyxjQUFjLEdBQUd6SixrREFBQSxDQUNyQixNQURxQixFQUVyQixDQUFDQSw0Q0FBQSxDQUFlLFFBQWYsQ0FBRCxDQUZxQixFQUdyQixJQUhxQixDQUF2QjtFQUtBQSw2Q0FBQSxDQUFnQnlKLGNBQWhCLEVBQWdDLENBQzlCLG1CQUQ4QixFQUU5QixZQUY4QixFQUc5QixlQUg4QixDQUFoQztFQUtBLE1BQU0xQixXQUFXLEdBQUcvSCxrREFBQSxDQUNsQixNQURrQixFQUVsQixDQUFDQSw0Q0FBQSxDQUFlLFFBQWYsQ0FBRCxDQUZrQixFQUdsQixJQUhrQixDQUFwQjtFQUtBQSw2Q0FBQSxDQUFnQitILFdBQWhCLEVBQTZCLENBQzNCLG1CQUQyQixFQUUzQixTQUYyQixFQUczQixjQUgyQixFQUkzQixVQUoyQixDQUE3QjtFQU9BLE1BQU0yQixjQUFjLEdBQUcxSixrREFBQSxDQUNyQixLQURxQixFQUVyQixDQUFDK0gsV0FBRCxFQUFjcUIsUUFBZCxFQUF3QkcsS0FBeEIsRUFBK0JFLGNBQS9CLENBRnFCLEVBR3JCO0lBQUVyRyxLQUFLLEVBQUU7RUFBVCxDQUhxQixDQUF2QjtFQUtBLE1BQU11RyxXQUFXLEdBQUczSixrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDMEosY0FBRCxDQUE1QixFQUE4QztJQUNoRXRHLEtBQUssRUFBRTtFQUR5RCxDQUE5QyxDQUFwQjtFQUlBLE1BQU1PLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtFQUNBRCxRQUFRLENBQUMxQyxNQUFULENBQWdCa0ksVUFBaEI7RUFFQSxNQUFNMUUsTUFBTSxHQUFHekUsa0RBQUEsQ0FBcUIsUUFBckIsRUFBK0IsQ0FBQzJELFFBQUQsQ0FBL0IsRUFBMkM7SUFDeERQLEtBQUssRUFBRTtFQURpRCxDQUEzQyxDQUFmO0VBR0EsT0FBT3FCLE1BQVA7QUFDRCxDQTdFRDs7QUErRUEsaUVBQWUrQyxpQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwyWEFBMlgsNEJBQTRCLDRCQUE0QixnQ0FBZ0Msa0NBQWtDLFVBQVUsd0JBQXdCLHFCQUFxQixHQUFHLHFQQUFxUCxzQkFBc0IsMkNBQTJDLDZCQUE2QiwwQkFBMEIsb0JBQW9CLHVQQUF1UCxVQUFVLGdLQUFnSyxlQUFlLGlDQUFpQyxVQUFVLDJOQUEyTixlQUFlLDJCQUEyQixrQ0FBa0MsVUFBVSxpR0FBaUcsOENBQThDLDhDQUE4QyxHQUFHLGtHQUFrRyx1QkFBdUIseUJBQXlCLEdBQUcsaUZBQWlGLG1CQUFtQiw2QkFBNkIsR0FBRywyRUFBMkUsd0JBQXdCLEdBQUcsMEpBQTBKLHlIQUF5SCwyQkFBMkIsVUFBVSxpRUFBaUUsbUJBQW1CLEdBQUcsMkdBQTJHLG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxnYkFBZ2Isb0JBQW9CLGtDQUFrQyxzQ0FBc0MsVUFBVSxrTUFBa00sMEJBQTBCLDRCQUE0QixpQ0FBaUMsMkJBQTJCLHNCQUFzQix1QkFBdUIsVUFBVSw4RkFBOEYseUJBQXlCLEdBQUcsbUxBQW1MLGdDQUFnQywwQ0FBMEMsbUNBQW1DLFVBQVUsK0ZBQStGLGtCQUFrQixHQUFHLCtNQUErTSxxQkFBcUIsR0FBRyxtRkFBbUYsNkJBQTZCLEdBQUcsaUpBQWlKLGlCQUFpQixHQUFHLDZIQUE2SCxtQ0FBbUMsaUNBQWlDLFVBQVUsb0dBQW9HLDZCQUE2QixHQUFHLHFLQUFxSyxnQ0FBZ0MsMEJBQTBCLFVBQVUsc0VBQXNFLHVCQUF1QixHQUFHLDRKQUE0SixjQUFjLEdBQUcsY0FBYyxjQUFjLGVBQWUsR0FBRyxZQUFZLGVBQWUsR0FBRyxvQkFBb0IscUJBQXFCLGNBQWMsZUFBZSxHQUFHLDZFQUE2RSxxQkFBcUIsR0FBRyxrUUFBa1EsZ0JBQWdCLDJCQUEyQixVQUFVLGlFQUFpRSxnQkFBZ0IsMkJBQTJCLFVBQVUsZ0RBQWdELGdCQUFnQiwyQkFBMkIsVUFBVSwrRUFBK0Usb0JBQW9CLEdBQUcsaUZBQWlGLG9CQUFvQixHQUFHLG1iQUFtYixvQkFBb0IsbUNBQW1DLFVBQVUsd0tBQXdLLG9CQUFvQixpQkFBaUIsR0FBRyx3RkFBd0Ysa0JBQWtCLEdBQUcsMEJBQTBCLHdCQUF3Qix3QkFBd0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsb0JBQW9CLG9CQUFvQixrQkFBa0Isa0JBQWtCLHVCQUF1QiwyQ0FBMkMsb0JBQW9CLHlCQUF5QiwyQkFBMkIsNEJBQTRCLDZCQUE2Qix1QkFBdUIsZ0NBQWdDLGlDQUFpQywyQ0FBMkMsdUNBQXVDLGdDQUFnQywyQkFBMkIsbUNBQW1DLGlCQUFpQix1QkFBdUIscUJBQXFCLHNCQUFzQix1QkFBdUIsbUJBQW1CLHFCQUFxQixrQkFBa0Isd0JBQXdCLDBCQUEwQixnQ0FBZ0MsOEJBQThCLCtCQUErQixnQ0FBZ0MsNEJBQTRCLDZCQUE2Qiw4QkFBOEIsMkJBQTJCLEdBQUcsWUFBWSxzQkFBc0IsdUJBQXVCLEdBQUcsU0FBUyxvQkFBb0IsdUJBQXVCLEdBQUcsU0FBUyx1QkFBdUIsR0FBRyxTQUFTLDBCQUEwQixHQUFHLFNBQVMsd0JBQXdCLEdBQUcsaUJBQWlCLDBCQUEwQixHQUFHLFNBQVMsa0JBQWtCLEdBQUcsU0FBUyxrQkFBa0IsR0FBRyxXQUFXLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsUUFBUSxpQkFBaUIsR0FBRyxXQUFXLGlCQUFpQixHQUFHLHFCQUFxQixxQkFBcUIsR0FBRyxXQUFXLGdCQUFnQixHQUFHLGtCQUFrQixlQUFlLEdBQUcsWUFBWSxlQUFlLEdBQUcsY0FBYyxtQ0FBbUMsZ0NBQWdDLDJCQUEyQixHQUFHLGNBQWMscUJBQXFCLEdBQUcsYUFBYSxxQkFBcUIsR0FBRyw2QkFBNkIsb0NBQW9DLEdBQUcsa0NBQWtDLHNDQUFzQyxHQUFHLGFBQWEsd0JBQXdCLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsbUJBQW1CLDRCQUE0QixHQUFHLGlCQUFpQiwwQkFBMEIsR0FBRyxZQUFZLDJCQUEyQixHQUFHLHVCQUF1QiwwQkFBMEIsR0FBRyxlQUFlLDJCQUEyQixHQUFHLGVBQWUsNkJBQTZCLEdBQUcsb0JBQW9CLDJCQUEyQiw4REFBOEQsR0FBRyxzQkFBc0IsMkJBQTJCLGdFQUFnRSxHQUFHLG1CQUFtQixrQ0FBa0MsR0FBRyxnQkFBZ0IsdUJBQXVCLDJEQUEyRCxHQUFHLGdCQUFnQix1QkFBdUIsMkRBQTJELEdBQUcsU0FBUyx5QkFBeUIsMEJBQTBCLEdBQUcsaUJBQWlCLHFCQUFxQix3QkFBd0IsR0FBRyxTQUFTLHdCQUF3QiwyQkFBMkIsR0FBRyxTQUFTLDBCQUEwQiwyQkFBMkIsR0FBRyxTQUFTLDBCQUEwQiwyQkFBMkIsR0FBRyxTQUFTLHVCQUF1QixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRyxTQUFTLDJCQUEyQixHQUFHLFNBQVMsd0JBQXdCLEdBQUcsY0FBYyx3QkFBd0IsR0FBRyxzQkFBc0IsZ0NBQWdDLEdBQUcsWUFBWSx3QkFBd0IseUJBQXlCLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLGNBQWMsb0JBQW9CLHdCQUF3QixHQUFHLGFBQWEsdUJBQXVCLHdCQUF3QixHQUFHLGFBQWEsb0JBQW9CLG1CQUFtQixHQUFHLGFBQWEsc0JBQXNCLHNCQUFzQixHQUFHLFlBQVksdUJBQXVCLHNCQUFzQixHQUFHLGFBQWEsd0JBQXdCLHlCQUF5QixHQUFHLGlCQUFpQix5QkFBeUIsbURBQW1ELEdBQUcsa0JBQWtCLHlCQUF5QixxREFBcUQsR0FBRyxrQkFBa0IseUJBQXlCLHFEQUFxRCxHQUFHLGlCQUFpQixtQ0FBbUMsd0JBQXdCLEdBQUcsZUFBZSw2S0FBNkssNkpBQTZKLHFOQUFxTiw2REFBNkQsK0JBQStCLEdBQUcsaUJBQWlCLCtCQUErQixHQUFHLFlBQVksMkRBQTJELEdBQUcsNENBQTRDLHdCQUF3Qix5QkFBeUIsR0FBRyxnREFBZ0Qsd0JBQXdCLHlCQUF5QixHQUFHLHVDQUF1Qyx3QkFBd0IseUJBQXlCLEdBQUcsa0RBQWtELHlCQUF5QixxREFBcUQsR0FBRyxzREFBc0QseUJBQXlCLHFEQUFxRCxHQUFHLDZDQUE2Qyx5QkFBeUIscURBQXFELEdBQUcseUNBQXlDLHNCQUFzQixHQUFHLGdEQUFnRCwyQkFBMkIsMkRBQTJELEdBQUcsNENBQTRDLHVCQUF1QiwyREFBMkQsR0FBRyxPQUFPLCtGQUErRixZQUFZLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIsb0JBQW9CLHFCQUFxQixvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFN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QVcsRUFBNUMsRUFBZ0Q3QyxtREFBYSxFQUE3RDtBQUNBLE1BQU0yRyxHQUFHLEdBQUcvSSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBOEksR0FBRyxDQUFDM0ksTUFBSixDQUFXMEMsUUFBWDtBQUNBM0QsNkNBQUEsQ0FBZ0I0SixHQUFoQixFQUFxQixDQUFDLE1BQUQsRUFBUywyQkFBVCxFQUFzQyxVQUF0QyxDQUFyQjtBQUVBL0ksUUFBUSxDQUFDZ0osSUFBVCxDQUFjaEgsU0FBZCxDQUF3QkUsR0FBeEIsQ0FBNEIsYUFBNUIsRUFBMkMsZUFBM0MsRUFBNEQsVUFBNUQ7QUFFQUMsbURBQU0sSUFDTixzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29udmVydC13ZWF0aGVyLXVuaXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90aW1lQW5kRGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQ2FyZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckNhcmRoZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiY29uc3QgY2xhc3NlcyA9IHtcbiAgYXBwU3R5bGVzOiBbXCJoLXNjcmVlblwiXSxcbiAgbWFpbkVsZW1lbnRTdHlsZTogW1widy1mdWxsXCIsIFwibWF4LXctNHhsXCJdLFxuICBoZWFkZXJFbGVtZW50OiBbXCJ3LWZ1bGxcIiwgXCJoLThcIl0sXG4gIG5hdkVsZW1lbnQ6IFtcImZsZXhcIiwgXCJweC0yXCIsIFwidy1mdWxsXCIsIFwiaC1mdWxsXCJdLFxuICBpY29uc1RlbXA6IFtcInRleHQtc21cIiwgXCJhbGlnbi10ZXh0LWJvdHRvbVwiXSxcbiAgaWNvblR0b2dnbGU6IFtcInRleHQtWzMycHhdXCJdLFxuICBpY29uczogW1widGV4dC1iYXNlXCJdLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IFtcbiAgeyBhcHBEaXZTdHlsZWE6IFwiaC1zY3JlZW5cIiB9LFxuICB7IG1haW5FbGVtZW50U3R5bGVzOiAndy1mdWxsXCIsIFwibWF4LXctNHhsJyB9LFxuICB7IG5hdkVsZW1lbnRTdHlsZXM6IFwiZmxleCBweC0yIHctZnVsbCBoLWZ1bGxcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NlcztcbiIsImltcG9ydCB7IHRvZ2dsZXIgfSBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuLy9jb252ZXJ0IGtlbHZpbiB1bml0IHRvIEZhaHJlbmhlaXRcbmZ1bmN0aW9uIHRvRmFocmVuaGVpdChjZWxzaXVzKSB7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBjZWxzaXVzICogMS44ICsgMzI7XG4gIGNvbnNvbGUubG9nKGZhaHJlbmhlaXQudG9GaXhlZCgwKSk7XG4gIHJldHVybiBmYWhyZW5oZWl0LnRvRml4ZWQoMCk7XG59XG5cbi8vY29udmVydCBrZWx2aW4gdW5pdCB0byBDZWxzaXVzXG5mdW5jdGlvbiB0b0NlbHNpdXMoa2VsdmluVW5pdCkge1xuICBjb25zdCBjZWxzaXVzID0ga2VsdmluVW5pdCAtIDI3My4xNTtcbiAgcmV0dXJuIGNlbHNpdXMudG9GaXhlZCgwKTtcbn1cblxuLypcbmNvbnN0IGNvbnZlclRlbXBlcmF0dXJlVW5pdCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGlzVG9nZ2xlZCA9IHRvZ2dsZXIoKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVVbml0ID0gaXNUb2dnbGVkXG4gICAgPyB0b0ZhaHJlbmhlaXQod2VhdGhlci50ZW1wKVxuICAgIDogdG9DZWxzaXVzKHdlYXRoZXIudGVtcCk7XG4gIHJldHVybiB0ZW1wZXJhdHVyZVVuaXQ7XG59O1xuKi9cblxuY29uc3Qgc2V0VGVtcGVyYXR1cmVVbml0ID0gKGlzVG9nZ2xlZCwgd2VhdGhlcikgPT4ge1xuICBjb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZS12YWx1ZVwiKTtcbiAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCB0ZW1wID0gaXNUb2dnbGVkXG4gICAgPyB0b0ZhaHJlbmhlaXQod2VhdGhlclswXS50ZW1wLnRvRml4ZWQoMCkpXG4gICAgOiB3ZWF0aGVyWzBdLnRlbXAudG9GaXhlZCgwKTtcblxuICB0ZW1wZXJhdHVyZUxhYmVsLmFwcGVuZChcbiAgICB0ZW1wLFxuICAgIGlzVG9nZ2xlZCA/IGhlbHBlci5zcGVjaWFsKFwiJmRlZztGXCIpIDogaGVscGVyLnNwZWNpYWwoXCImZGVnO0NcIilcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFRlbXBlcmF0dXJlVW5pdDtcbiIsImV4cG9ydCBjb25zdCB3ZWF0aGVyRGF0YSA9IFtcbiAge1xuICAgIHdlYXRoZXI6IFwiY2xvdWRzXCIsXG4gICAgd2VhdGhlcmRlc2M6IFwib3ZlcmNhc3QgY2xvdWRcIixcbiAgICB0ZW1wOiAzMixcbiAgICBtYXhUZW1wOiAzNCxcbiAgICBtaW5UZW1wOiAyNyxcbiAgICBmZWVsc0xpa2U6IDI5LFxuICAgIGh1bWlkaXR5OiBcIjc1JVwiLFxuICAgIHdpbmQ6IDIsXG4gICAgY291bnRyeTogXCJOR1wiLFxuICAgIGNpdHk6IFwiQmVuaW4gY2l0eVwiLFxuICAgIHRpbWVab25lOiAxNjAwMDAwMCxcbiAgICB0aW1lOiAzNjAwLFxuICAgIGljb246IFwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJDA0bkAyeC5wbmdcIixcbiAgfSxcbl07XG4iLCJpbXBvcnQgc2V0VGVtcGVyYXR1cmVVbml0IGZyb20gXCIuL2NvbnZlcnQtd2VhdGhlci11bml0XCI7XG4vL2ltcG9ydCBnZXREYXRhIGZyb20gXCIuL2ZldGNoLWRhdGFcIjtcbi8vIGltcG9ydCB7IHdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vdHJhbnNvcm0tZGF0YVwiO1xuaW1wb3J0IHsgd2VhdGhlckRhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgd2VhdGhlckNhcmQgZnJvbSBcIi4vd2VhdGhlckNhcmRcIjtcblxuLy9nZXQgbG9jYXRpb24gZnJvbSB1c2VyIGlucHV0IG9uIGZvcm1cbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gIGNvbnN0IGlucHV0ID0gZm9ybS5lbGVtZW50c1tcInNlYXJjaC1pbnB1dFwiXTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnN0IGxvY2F0aW9uID0gaW5wdXQudmFsdWU7XG4gICAgLy8gZ2V0RGF0YShsb2NhdGlvbik7XG4gICAgd2VhdGhlckNhcmQod2VhdGhlckRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgfSk7XG59XG5cbi8vdG9nZ2xlIGNoZWNrIGJveCB0byBzd2l0Y2ggYmV0d2VlbiB0ZW1wZXJhdHVyZSBzdGF0ZXNcbmNvbnN0IHRvZ2dsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKHRhcmdldC5jaGVja2VkKTtcbiAgICBjb25zdCBpc1RvZ2dsZWQgPSB0YXJnZXQuY2hlY2tlZDtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgc2V0VGVtcGVyYXR1cmVVbml0KGlzVG9nZ2xlZCwgd2VhdGhlckRhdGEpO1xuICAgIHRvZ2dsZXJTd2l0Y2goaXNUb2dnbGVkKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiB0b2dnbGVyU3dpdGNoKGlzVG9nZ2xlZCkge1xuICBjb25zdCB0b2dnbGVPbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLW9uXCIpO1xuICBjb25zdCB0b2dnbGVPZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1vZmZcIik7XG4gIGNvbnN0IGNlbHNpdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbHNpdXNcIik7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhaHJlbmhlaXRcIik7XG4gIGlmIChpc1RvZ2dsZWQpIHtcbiAgICB0b2dnbGVPbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGNlbHNpdXMuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtcmVkLTUwMFwiKTtcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWdyYXktNDAwXCIpO1xuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZ3JheS00MDBcIik7XG4gICAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwidGV4dC1yZWQtNTAwXCIpO1xuICAgIHRvZ2dsZU9mZi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgaWYgKCFpc1RvZ2dsZWQpIHtcbiAgICB0b2dnbGVPbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHRvZ2dsZU9mZi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QuYWRkKFwidGV4dC1yZWQtNTAwXCIpO1xuICAgIGNlbHNpdXMuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZ3JheS00MDBcIik7XG4gICAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwidGV4dC1ncmF5LTQwMFwiKTtcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXJlZC01MDBcIik7XG4gIH1cbn1cblxuLy9pbml0aWFsaXplIGV2ZW50c1xuY29uc3QgZXZlbnRzID0gKCkgPT4ge1xuICBnZXRMb2NhdGlvbigpO1xuICB0b2dnbGVyKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG5cbi8vY29uc29sZS5sb2coZm9ybS5lbGVtZW50cyk7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IGZvb3RlclNlY3Rpb24gPSAoKSA9PiB7XG4gIC8vaWNvbnNcbiAgY29uc3QgZ2l0aHViID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHsgY2xhc3M6IFwiZmFiIGZhLWdpdGh1YlwiIH0pO1xuICBjb25zdCB0d2l0dGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHsgY2xhc3M6IFwiZmFiIGZhLXR3aXR0ZXJcIiB9KTtcbiAgY29uc3QgbGlua2VkaW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgbnVsbCwge1xuICAgIGNsYXNzOiBcImZhYiBmYS1saW5rZWRpblwiLFxuICB9KTtcbiAgLy9saW5rc1xuICBjb25zdCBnaXRodWJMaW5rID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFtnaXRodWJdLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vdHdpa2lzdGFcIixcbiAgfSk7XG4gIGNvbnN0IHR3aXR0ZXJMaW5rID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFt0d2l0dGVyXSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9hYXJvbmFuYW1hXCIsXG4gIH0pO1xuICBjb25zdCBsaW5rZWRpbkxpbmsgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImFcIiwgW2xpbmtlZGluXSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Fhcm9uYW5hbWFcIixcbiAgfSk7XG4gIC8vZnJhZ21lbnRcbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmQoZ2l0aHViTGluaywgdHdpdHRlckxpbmssIGxpbmtlZGluTGluayk7XG4gIC8vZm9vdGVyIGVsZW1lbnRcbiAgY29uc3QgZm9vdGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgW2ZyYWdtZW50XSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJtaW4taC1bNTBweF0gYm9yZGVyLXQtWzFweF0gYm9yZGVyLWdyYXktNTAwIHctZnVsbCBmbGV4IGZsZXgtcm93IG10LTJcIixcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlclNlY3Rpb247XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmNvbnN0IGhlYWRlclNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcblxuICAvKioqKioqbmF2IGxlZnQgc2VjdGlvbioqKioqL1xuICBjb25zdCBsb2dvRGVnID0gaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKTtcbiAgY29uc3QgbG9nbyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaDNcIiwgW1wid2VkYVwiLCBsb2dvRGVnXSwge1xuICAgIGNsYXNzOiBcInRlYWxcIixcbiAgfSk7XG4gIGNvbnN0IG5hdkxlZnQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbbG9nb10sIHtcbiAgICBjbGFzczogXCJtYi0yIHB5LVsxcHhdIGxvZ28tY29udGFpbmVyXCIsXG4gIH0pO1xuXG4gIC8qKioqKipuYXYgcmlnaHQgc2VjdGlvbioqKioqKioqKi9cblxuICAvL2NyZWF0ZSBzZWFyY2ggYm94XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXSwge1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIGlkOiBcInNlYXJjaC1pbnB1dFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHdlYXRoZXIgbG9jYXRpb24gXCIsXG4gICAgY2xhc3M6XG4gICAgICBcImJnLXRyYW5zcGFyZW50ICBvdXRsaW5lLW5vbmUgYXBwZXJhbmNlLW5vbmUgcGwtNCBweS0yIGgtZnVsbCBwbGFjZWhvbGRlcjp0ZXh0LXNtIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDBcIixcbiAgfSk7XG5cbiAgLy9zZWFyY2ggaWNvbiA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLW1hZ25pZnlpbmctZ2xhc3NcIj48L2k+XG4gIGNvbnN0IHNlYXJjaEljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgW10sIHtcbiAgICBjbGFzczogXCJmYXMgZmEtc2VhcmNoIHRleHQtZ3JheS00MDAgXCIsXG4gIH0pO1xuXG4gIC8vY3JlYXRlIHNlYXJjaCBidXR0b25cbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW3NlYXJjaEljb25dLCB7XG4gICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICBpZDogXCJzZWFyY2gtYnRuXCIsXG4gICAgY2xhc3M6IFwiYm9yZGVyLWwtMiBib3JkZXItbC1ncmF5LTYwMCBweC0zIHB5LVsxcHhdIG1pbi13LW1pbiBoLWZ1bGxcIixcbiAgfSk7XG5cbiAgLy9jcmVhdCBzZWFyY2ggZm9ybVxuICBjb25zdCBmb3JtID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFtzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJncmlkIGdyaWQtY29scy1bMWZyX2F1dG9dIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LVs5NSVdIG1heC13LXhzIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTcwMCBweC0yIHB0LVsxLjlweF0gZm9jdXMtd2l0aGluOmJnLWdyYXktOTAwIGZvY3VzLXdpdGhpbjpib3JkZXItZ3JheS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci0yXCIsXG4gIH0pO1xuXG4gIC8vXG4gIGNvbnN0IG5hdlJpZ2h0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2Zvcm1dLCB7XG4gICAgY2xhc3M6IFwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIHBiLTJcIixcbiAgfSk7XG5cbiAgLyoqKioqbmF2IGVsZW1lbnQgKi9cbiAgY29uc3QgbmF2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwgW25hdkxlZnQsIG5hdlJpZ2h0XSwge1xuICAgIGNsYXNzOiBcImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbFwiLFxuICB9KTtcblxuICBmcmFnbWVudC5hcHBlbmQobmF2KTtcblxuICBjb25zdCBoZWFkZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBbZnJhZ21lbnRdLCB7XG4gICAgY2xhc3M6IFwiYm9yZGVyLWItMiBib3JkZXItZ3JheS01MDAgcHgtMiBweS0yIHctZnVsbCBtYi00XCIsXG4gIH0pO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyU2VjdGlvbjtcbiIsImZ1bmN0aW9uIGFkZENsYXNzKGVsZSwgY2xhc3Nlcykge1xuICBjbGFzc2VzLmZvckVhY2goKGkpID0+IGVsZS5jbGFzc0xpc3QuYWRkKGkpKTtcbn1cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIG5vZGUsIGF0dHJpYnV0ZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAobm9kZSkge1xuICAgIG5vZGUuZm9yRWFjaCgoaSkgPT4gZWxlbWVudC5hcHBlbmQoaSkpO1xuICB9XG4gIGlmIChhdHRyaWJ1dGUpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlKTtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGkpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKGksIGF0dHJpYnV0ZVtpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBkZWdyZWVDaGFyYWN0ZXIgPSAoY2hhcikgPT4ge1xuICBjb25zdCBkZWdyZWVDaGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIC8vIGNvbnN0IGxldHRlciA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtmXSwgbnVsbCk7XG4gIGRlZ3JlZUNoYXIuaW5uZXJIVE1MID0gY2hhcjtcbiAgLy9kZWdyZWVDaGFyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXNtXCIpO1xuICByZXR1cm4gZGVncmVlQ2hhcjtcbn07XG5cbmNvbnN0IHNwZWNpYWwgPSAoY2hhcikgPT4ge1xuICBjb25zdCBjaGFyYWN0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2hhcmFjdGVyLmlubmVySFRNTCA9IGNoYXI7XG4gIGNvbnN0IHJlY2hhciA9IGNoYXJhY3Rlci50ZXh0Q29udGVudDtcbiAgcmV0dXJuIHJlY2hhcjtcbn07XG5cbmNvbnN0IGFkZEljb24gPSAoa2V5d29yZCwgc3R5bGVzKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBba2V5d29yZF0sIHtcbiAgICBjbGFzczogXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLFxuICB9KTtcbiAgYWRkQ2xhc3Moc3Bhbiwgc3R5bGVzKTtcbiAgcmV0dXJuIHNwYW47XG59O1xuXG5leHBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCwgZGVncmVlQ2hhcmFjdGVyLCBhZGRJY29uLCBzcGVjaWFsIH07XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IG1haW5TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBwID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoMVwiLFxuICAgIFtcIkVudGVyIGEgbG9hY3Rpb24gdG8gZGlzbGF5IHdlYXRoZXIgZGV0YWlsc1wiXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJ0ZXh0LTR4bCB0ZXh0LWdyYXktMjAwXCIsXG4gICAgfVxuICApO1xuICBjb25zdCBzZWN0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtwXSwgbnVsbCk7XG5cbiAgLy9tYWluIGVsZW1lbnRcbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmQoc2VjdGlvbik7XG4gIGNvbnN0IG1haW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcIm1haW5cIiwgW2ZyYWdtZW50XSwge1xuICAgIGNsYXNzOlxuICAgICAgJ3ctZnVsbFwiLCBcIm1heC13LTR4bCBmbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC1hdXRvJyxcbiAgfSk7XG4gIGhlbHBlci5hZGRDbGFzcyhtYWluLCBjbGFzc2VzLm1haW5FbGVtZW50U3R5bGUpO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5TZWN0aW9uO1xuXG4vKlxuZXhwb3J0IGNvbnN0IHdlYXRoZXJEYXRhID0gW1xuICB7XG4gICAgd2VhdGhlcjogXCJjbG91ZHNcIixcbiAgICB3ZWF0aGVyZGVzYzogXCJvdmVyY2FzdCBjbG91ZFwiLFxuICAgIHRlbXA6IDMyLFxuICAgIG1heFRlbXA6IDM0LFxuICAgIG1pblRlbXA6IDI3LFxuICAgIGZlZWxzTGlrZTogMjksXG4gICAgaHVtaWRpdHk6IFwiNzUlXCIsXG4gICAgd2luZDogMixcbiAgICBjb3VudHJ5OiBcIk5HXCIsXG4gICAgY2l0eTogXCJCZW5pbiBjaXR5XCIsXG4gICAgdGltZVpvbmU6IDE2MDAwMDAwLFxuICAgIHRpbWU6IDM2MDAsXG4gICAgaWNvbjogXCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8kMDRuQDJ4LnBuZ1wiLFxuICB9LFxuXTsqL1xuIiwiLy9hcnJheSBvZiBkYXlzIG9mIHdlZWtcbmNvbnN0IGRheXNPZldlZWsgPSBbXG4gIHsgaWQ6IDAsIGRheTogXCJTdW5cIiB9LFxuICB7IGlkOiAxLCBkYXk6IFwiTW9uXCIgfSxcbiAgeyBpZDogMiwgZGF5OiBcIlR1ZVwiIH0sXG4gIHsgaWQ6IDMsIGRheTogXCJXZWRcIiB9LFxuICB7IGlkOiA0LCBkYXk6IFwiVGh1XCIgfSxcbiAgeyBpZDogNSwgZGF5OiBcIkZyaVwiIH0sXG4gIHsgaWQ6IDYsIGRheTogXCJTYXRcIiB9LFxuXTtcblxuLy9nZXQgZGF5IG9mIHdlZWtcbmZ1bmN0aW9uIGRheU9mV2VlayhkYXRlKSB7XG4gIGxldCBkYXkgPSBudWxsO1xuICBkYXlzT2ZXZWVrLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoaS5pZCA9PT0gZGF0ZSkge1xuICAgICAgZGF5ID0gaS5kYXk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRheTtcbn1cblxuLy9jb252ZXJ0IHRpbWUgdG8gdXNlciB0aW1lIHdpdGggVVRDIGFuZCBUaW1lWm9uZVxuZnVuY3Rpb24gdXNlclRpbWUodGltZVpvbmVPZmZzZXQpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGxvY2FsVGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuICBjb25zdCBsb2NhbFRpbWVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcbiAgY29uc3QgdXRjVGltZSA9IGxvY2FsVGltZSArIGxvY2FsVGltZU9mZnNldDtcbiAgY29uc3QgbG9jYXRpb25PZmZzZXQgPSB1dGNUaW1lICsgMTAwMCAqIHRpbWVab25lT2Zmc2V0O1xuICBjb25zdCBsb2NhdGlvblRpbWUgPSBuZXcgRGF0ZShsb2NhdGlvbk9mZnNldCk7XG4gIGNvbnNvbGUubG9nKGxvY2F0aW9uVGltZSk7XG4gIHJldHVybiBsb2NhdGlvblRpbWU7XG5cbiAgLy9kZWZpbmUgZGF0ZSwgZGF5LCBob3VyIGFtZCBtaW51dGVcbn1cblxuZnVuY3Rpb24gcmVuZGVyVXNlclRpbWUodGltZVpvbmVPZmZzZXQpIHtcbiAgLy9kZWZpbmUgZGF0ZSwgZGF5LCBob3VyIGFuZCBtaW51dGVcbiAgY29uc3QgZGF0ZSA9IHVzZXJUaW1lKHRpbWVab25lT2Zmc2V0KTtcbiAgY29uc3QgZGF5ID0gZGF5T2ZXZWVrKGRhdGUuZ2V0RGF5KCkpO1xuICBjb25zdCBob3VyQW5kTWludXRlcyA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoW10sIHtcbiAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICB9KTtcblxuICAvL2RlZmluZSBmb3JtYXQgdG8gZGlzcGxheSB0aW1lXG4gIGNvbnN0IGRpc2xheVRpbWUgPSBgJHtkYXl9ICR7aG91ckFuZE1pbnV0ZXN9YDtcbiAgcmV0dXJuIGRpc2xheVRpbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclVzZXJUaW1lO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHdlYXRoZXJDYXJkQ29udGVudCBmcm9tIFwiLi93ZWF0aGVyQ2FyZENvbnRlbnRcIjtcbmltcG9ydCB3ZWF0aGVyQ2FyZEhlYWRlciBmcm9tIFwiLi93ZWF0aGVyQ2FyZGhlYWRlclwiO1xuY29uc3Qgd2VhdGhlckNhcmQgPSAod2VhdGhlcikgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgd2VhdGhlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJhcnRpY2xlXCIsXG4gICAgICBbd2VhdGhlckNhcmRIZWFkZXIoaXRlbSksIHdlYXRoZXJDYXJkQ29udGVudChpdGVtKV0sXG4gICAgICB7IGNsYXNzOiBcImZsZXggZmxleC1jb2wgdy00LzUgcm91bmRlZCBoLWZ1bGwgbXgtYXV0byBteS0wXCIgfVxuICAgICk7XG4gICAgbWFpbi5hcHBlbmQoYXJ0aWNsZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckNhcmQ7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgY29udmVyVGVtcGVyYXR1cmVVbml0IGZyb20gXCIuL2NvbnZlcnQtd2VhdGhlci11bml0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9jbGFzc2VzXCI7XG5jb25zdCB3ZWF0aGVyQ2FyZENvbnRlbnQgPSAod2VhdGhlcikgPT4ge1xuICAvL3dlYXRoZXIgaWNvblxuICAvKmNvbnN0IHdlYXRoZXJJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW10sIHtcbiAgICBzcmM6IHdlYXRoZXIuaWNvbixcbiAgICBhbHQ6IFwid2VhdGhlci1pY29uXCIsXG4gICAgY2xhc3M6IFwiaW5saW5lLWJsb2NrXCIsXG4gIH0pOyovXG5cbiAgY29uc3Qgd2VhdGhlckljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wiY2xvdWRcIl0sIHtcbiAgICBjbGFzczogXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB0ZXh0LTh4bFwiLFxuICB9KTtcbiAgLy93ZWF0aGVyIGRlc2NyaXB0aW9uXG4gIGNvbnN0IHdlYXRoZXJkZXNjcmlwdGlvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDVcIixcbiAgICBbd2VhdGhlci53ZWF0aGVyZGVzY10sXG4gICAgbnVsbFxuICApO1xuICAvL3dlYXRoZXIgaWNvbiBhbmQgZGVzY3JpcHRpb24gd3JhcHBlclxuICBjb25zdCB3ZWF0aGVyTGVmdCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW3dlYXRoZXJkZXNjcmlwdGlvbiwgd2VhdGhlckljb25dLFxuICAgIHsgY2xhc3M6IFwiZmxleCBjb2xcIiB9XG4gICk7XG4gIC8vZGVncmVlIHNwZWNpYWwgY2hhcmFjdGVyXG4gIGNvbnN0IGRlZyA9IGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIik7XG4gIC8vIGNvbnN0IGNlbHNpdXNTcGFuID0gaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIiYjODQ1MTtcIik7XG4gIGNvbnN0IGNlbHNpdXNTcGFuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcIkNcIl0sIG51bGwpO1xuICAvL2NlbHNpdXNTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTJ4bFwiLCBcImFsaWduLXRvcFwiLCBcImlubGluZS1ibG9ja1wiLCBcInB0LTJcIik7XG4gIC8vdGVtcGVyYXR1cmUgdmFsdWVcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgxXCIsXG4gICAgW3dlYXRoZXIudGVtcC50b0ZpeGVkKDApLCBkZWcsIGNlbHNpdXNTcGFuXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJ0ZW1wZXJhdHVyZS12YWx1ZSB0ZXh0LTh4bFwiLFxuICAgIH1cbiAgKTtcblxuICAvL21heGltdW0gYW5kIG1pbmltdW0gdGVtcGVyYXR1cmVcbiAgY29uc3QgaGlnaCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtcIkg6XCIsIHdlYXRoZXIubWF4VGVtcCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBsb3cgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbXCJMOlwiLCB3ZWF0aGVyLm1pblRlbXAsIGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIildLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBtaW5NYXggPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImg1XCIsXG4gICAgW2hpZ2gsIGAke2hlbHBlci5zcGVjaWFsKFwiJm1pZDtcIil9YCwgbG93XSxcbiAgICB7IGNsYXNzOiBcInRleHQteHNcIiB9XG4gICk7XG5cbiAgLy90ZW1wZXJhdHVyZSBhbmQgZmVlbHNMaWtlIHdyYXBwZXJcbiAgY29uc3Qgd2VhdGhlclJpZ2h0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW3RlbXBlcmF0dXJlLCBtaW5NYXhdLCBudWxsKTtcblxuICAvL3dlYXRoZXJcbiAgY29uc3Qgd2VhdGhlcldyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFt3ZWF0aGVyTGVmdCwgd2VhdGhlclJpZ2h0XSxcbiAgICB7XG4gICAgICBjbGFzczogXCJmbGV4XCIsXG4gICAgfVxuICApO1xuXG4gIC8vb3RoZXIgd2VhdGhlciBkZXRhaWxzXG4gIC8vZmVlbHMgbGlrZVxuICAvKmNvbnN0IGZlZWxzTGlrZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDVcIixcbiAgICBbYGZlZWxzIGxpa2UgLSAke3dlYXRoZXIuZmVlbHNMaWtlLnRvRml4ZWQoMCl9YCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgeyBjbGFzczogXCJ0ZXh0LXhzXCIgfVxuICApOyovXG5cbiAgY29uc3QgZmVlbHNMaWtlSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0aGVybW9zdGF0XCJdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIixcbiAgfSk7XG4gIGNvbnN0IGZlZWxzTGlrZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtgZmVlbHMgbGlrZSAtICR7d2VhdGhlci5mZWVsc0xpa2UudG9GaXhlZCgwKX1gLCBoZWxwZXIuc3BlY2lhbChcIiZkZWc7XCIpXSxcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IGZlZWxzTGlrZURpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW2ZlZWxzTGlrZUljb24sIGZlZWxzTGlrZV0sXG4gICAgbnVsbFxuICApO1xuXG4gIC8vaHVtaWRpdHlcbiAgY29uc3QgaHVtaWRpdHlJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcIndhdGVyX2Ryb3BcIl0sIHtcbiAgICBjbGFzczogXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLFxuICB9KTtcbiAgY29uc3QgaHVtaWRpdHkgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbYEh1bWlkaXR5OiAke3dlYXRoZXIuaHVtaWRpdHl9YF0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBodW1pZGl0eURpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW2h1bWlkaXR5SWNvbiwgaHVtaWRpdHldLFxuICAgIG51bGxcbiAgKTtcblxuICAvL3dpbmRcbiAgY29uc3Qgd2luZEljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wiYWlyXCJdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIixcbiAgfSk7XG4gIGNvbnN0IHdpbmQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbYFdpbmQ6ICR7d2VhdGhlci53aW5kLnRvRml4ZWQoMCl9IG1wc2BdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3Qgd2luZERpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFt3aW5kSWNvbiwgd2luZF0sIG51bGwpO1xuXG4gIC8vcHJlc3N1cmVcbiAgY29uc3QgcHJlc3N1cmVJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcInNjaWVuY2VcIl0sIHtcbiAgICBjbGFzczogXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLFxuICB9KTtcbiAgY29uc3QgcHJlc3N1cmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInBcIiwgW2BwcmVzc3VyZTogMTAyMGBdLCBudWxsKTtcbiAgY29uc3QgcHJlc3N1cmVEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtwcmVzc3VyZUljb24sIHByZXNzdXJlXSxcbiAgICBudWxsXG4gICk7XG5cbiAgLypcbiAgLy9tYXhpbXVtIHRlbXBlcmF0dXJlXG4gIGNvbnN0IG1heFRlbXBJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHtcbiAgICBjbGFzczogXCJmYXMgZmEtdGVtcGVyYXR1cmUtaGlnaFwiLFxuICB9KTtcbiAgY29uc3QgbWF4VGVtcCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtgbWF4OiAke3dlYXRoZXIubWF4VGVtcC50b0ZpeGVkKDApfWAsIGhlbHBlci5kZWdyZWVDaGFyYWN0ZXIoXCJcIildLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBtYXhUZW1wRGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW21heFRlbXBJY29uLCBtYXhUZW1wXSwgbnVsbCk7XG5cbiAgLy9taW5pbXVtIHRlbXBlcmF0dXJlXG4gIGNvbnN0IG1pblRlbXBJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHtcbiAgICBjbGFzczogXCJmYXMgZmEtdGVtcGVyYXR1cmUtbG93XCIsXG4gIH0pO1xuICBjb25zdCBtaW5UZW1wID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BtaW46ICR7d2VhdGhlci5taW5UZW1wLnRvRml4ZWQoMCl9YCwgaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIlwiKV0sXG4gICAgbnVsbFxuICApO1xuXG4gIGNvbnN0IG1pblRlbXBEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbbWluVGVtcEljb24sIG1pblRlbXBdLCBudWxsKTtcbiAgLypjb25zdCBGZWVsc0xpa2UgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbYEZlZWxzLWxpa2U6ICR7d2VhdGhlci5mZWVsfWBdLFxuICAgIG51bGxcbiAgKTsqL1xuXG4gIGNvbnN0IG90aGVyV2VhdGhlckRldGFpbHMgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtodW1pZGl0eURpdiwgd2luZERpdiwgcHJlc3N1cmVEaXYsIGZlZWxzTGlrZURpdl0sXG4gICAgbnVsbFxuICApO1xuXG4gIC8vZnJhZ21lbnRcbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmQod2VhdGhlcldyYXBwZXIsIG90aGVyV2VhdGhlckRldGFpbHMpO1xuXG4gIC8vXG4gIGNvbnN0IGRpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmcmFnbWVudF0sIG51bGwpO1xuICByZXR1cm4gZGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckNhcmRDb250ZW50O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHJlbmRlclVzZXJUaW1lIGZyb20gXCIuL3RpbWVBbmREYXRlXCI7XG5cbmNvbnN0IHdlYXRoZXJDYXJkSGVhZGVyID0gKHdlYXRoZXIpID0+IHtcbiAgLy9oZWFkZXIgbGVmdFxuICBjb25zdCBsb2NhdGlvbkljb24gPSBoZWxwZXIuYWRkSWNvbihcImxvY2F0aW9uX29uXCIsIFtjbGFzc2VzLmljb25zXSk7XG4gIGNvbnN0IGNpdHkgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW2Ake3dlYXRoZXIuY2l0eX0sIGBdLCBudWxsKTtcbiAgY29uc3QgbG9jYXRpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgzXCIsXG4gICAgW2xvY2F0aW9uSWNvbiwgY2l0eSwgd2VhdGhlci5jb3VudHJ5XSxcbiAgICB7IGNsYXNzOiBcInRleHQtc21cIiB9XG4gICk7XG4gIGNvbnN0IGxvY2FsVGltZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDNcIixcbiAgICBbYCR7cmVuZGVyVXNlclRpbWUod2VhdGhlci50aW1lWm9uZSl9YF0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBoZWFkZXJMZWZ0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2xvY2F0aW9uLCBsb2NhbFRpbWVdLCB7XG4gICAgY2xhc3M6IFwiaGVhZGVyLWxlZnQgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIixcbiAgfSk7XG5cbiAgLy9oZWFkZXIgcmlnaHRcbiAgY29uc3QgY2hlY2tib3ggPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIG51bGwsIHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgaWQ6IFwidGVtcC10b2dnbGVyXCIsXG4gICAgY2xhc3M6IFwiY2hlY2tib3ggaGlkZGVuXCIsXG4gIH0pO1xuICAvL2xhYmVsXG4gIGNvbnN0IHRvZ2dsZU9uSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0b2dnbGVfb25cIl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC0zeGwgIGhpZGRlbiB0b2dnbGUtb24gdHJhbnNpdGlvbiBkdXJhdGlvbi03MDAgZWFzZS1pbiBcIixcbiAgfSk7XG5cbiAgY29uc3QgdG9nZ2xlT2ZmSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0b2dnbGVfb2ZmXCJdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHRleHQtM3hsIHRvZ2dsZS1vZmYgdHJhbnNpdGlvbiBkdXJhdGlvbi03MDAgZWFzZS1pblwiLFxuICB9KTtcbiAgY29uc3QgbGFiZWwgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFt0b2dnbGVPZmZJY29uLCB0b2dnbGVPbkljb25dLCB7XG4gICAgY2xhc3M6IFwidG9nZ2xlciBweC0xIGZsZXggIFwiLFxuICAgIGZvcjogXCJ0ZW1wLXRvZ2dsZXJcIixcbiAgfSk7XG5cbiAgY29uc3QgZmFocmVuaGVpdFNwYW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbaGVscGVyLnNwZWNpYWwoXCImZGVnO0ZcIildLFxuICAgIG51bGxcbiAgKTtcbiAgaGVscGVyLmFkZENsYXNzKGZhaHJlbmhlaXRTcGFuLCBbXG4gICAgXCJhbGlnbi10ZXh0LWNlbnRlclwiLFxuICAgIFwiZmFocmVuaGVpdFwiLFxuICAgIFwidGV4dC1ncmF5LTQwMFwiLFxuICBdKTtcbiAgY29uc3QgY2Vsc2l1c1NwYW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbaGVscGVyLnNwZWNpYWwoXCImZGVnO0NcIildLFxuICAgIG51bGxcbiAgKTtcbiAgaGVscGVyLmFkZENsYXNzKGNlbHNpdXNTcGFuLCBbXG4gICAgXCJhbGlnbi10ZXh0LWNlbnRlclwiLFxuICAgIFwiY2Vsc2l1c1wiLFxuICAgIFwidGV4dC1yZWQtNTAwXCIsXG4gICAgXCJmb250LTkwMFwiLFxuICBdKTtcblxuICBjb25zdCB0b2dnbGVyV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW2NlbHNpdXNTcGFuLCBjaGVja2JveCwgbGFiZWwsIGZhaHJlbmhlaXRTcGFuXSxcbiAgICB7IGNsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyXCIgfVxuICApO1xuICBjb25zdCBoZWFkZXJSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFt0b2dnbGVyV3JhcHBlcl0sIHtcbiAgICBjbGFzczogXCJoZWFkZXItcmlnaHQgZmxleCBpdGVtcy1jZW50ZXIgaC04XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKGhlYWRlckxlZnQpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczogXCJjYXJkLWhlYWRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIixcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZEhlYWRlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjAuMjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLm14LWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5teS0wIHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuLm10LTIge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4ubWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5tYi00IHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaC04IHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5taW4taC1cXFxcWzUwcHhcXFxcXSB7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udy1cXFxcWzk1XFxcXCVcXFxcXSB7XFxuICB3aWR0aDogOTUlO1xcbn1cXG4udy00XFxcXC81IHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5taW4tdy1taW4ge1xcbiAgbWluLXdpZHRoOiAtd2Via2l0LW1pbi1jb250ZW50O1xcbiAgbWluLXdpZHRoOiAtbW96LW1pbi1jb250ZW50O1xcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuLm1heC13LTR4bCB7XFxuICBtYXgtd2lkdGg6IDU2cmVtO1xcbn1cXG4ubWF4LXcteHMge1xcbiAgbWF4LXdpZHRoOiAyMHJlbTtcXG59XFxuLmdyaWQtY29scy1cXFxcWzFmcl9hdXRvXFxcXF0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG59XFxuLmdyaWQtcm93cy1cXFxcW2F1dG9fMWZyX2F1dG9cXFxcXSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcbi5mbGV4LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yb3VuZGVkLWZ1bGwge1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbn1cXG4ucm91bmRlZCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG4uYm9yZGVyLXQtXFxcXFsxcHhcXFxcXSB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcbi5ib3JkZXItbC0yIHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItYi0yIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG59XFxuLmJvcmRlci1ncmF5LTUwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTA3IDExNCAxMjggLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLWwtZ3JheS02MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzUgODUgOTkgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYmctdHJhbnNwYXJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5iZy1ncmF5LTcwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUgNjUgODEgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTkwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcgMjQgMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5weC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG4ucHktXFxcXFsxcHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogMXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDFweDtcXG59XFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5weC0zIHtcXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxufVxcbi5weC0xIHtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5wbC00IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuLnB0LVxcXFxbMVxcXFwuOXB4XFxcXF0ge1xcbiAgcGFkZGluZy10b3A6IDEuOXB4O1xcbn1cXG4ucGItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ucHQtMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4uYWxpZ24tdG9wIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5hbGlnbi10ZXh0LWJvdHRvbSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxufVxcbi50ZXh0LXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnRleHQtXFxcXFszMnB4XFxcXF0ge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG4udGV4dC1iYXNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcbi50ZXh0LTR4bCB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG4udGV4dC04eGwge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi50ZXh0LTJ4bCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG4udGV4dC14cyB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuLnRleHQtM3hsIHtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxuLnRleHQtcmVkLTUwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjM5IDY4IDY4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWdyYXktNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNTYgMTYzIDE3NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTIwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjI5IDIzMSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLm91dGxpbmUtbm9uZSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG4udHJhbnNpdGlvbiB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyLCAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG4uZHVyYXRpb24tNzAwIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDcwMG1zO1xcbn1cXG4uZWFzZS1pbiB7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1zbTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1zbTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtc206OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWdyYXktNDAwOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNTYgMTYzIDE3NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtZ3JheS00MDA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNTYgMTYzIDE3NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtZ3JheS00MDA6OnBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNTYgMTYzIDE3NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXMtd2l0aGluXFxcXDpib3JkZXItMjpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcbi5mb2N1cy13aXRoaW5cXFxcOmJvcmRlci1ncmF5LTYwMDpmb2N1cy13aXRoaW4ge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDc1IDg1IDk5IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmZvY3VzLXdpdGhpblxcXFw6YmctZ3JheS05MDA6Zm9jdXMtd2l0aGluIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNyAyNCAzOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLDROQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHlDQUFjO1VBQWQsaUNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7O0NBQWM7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7Ozs7OztFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztFQUFkLFlBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDtFQUFBLG1CQUFjO0VBQWQsbUJBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxlQUFjO0VBQWQsZUFBYztFQUFkLGFBQWM7RUFBZCxhQUFjO0VBQWQsa0JBQWM7RUFBZCxzQ0FBYztFQUFkLGVBQWM7RUFBZCxvQkFBYztFQUFkLHNCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLGtCQUFjO0VBQWQsMkJBQWM7RUFBZCw0QkFBYztFQUFkLHNDQUFjO0VBQWQsa0NBQWM7RUFBZCwyQkFBYztFQUFkLHNCQUFjO0VBQWQsOEJBQWM7RUFBZCxZQUFjO0VBQWQsa0JBQWM7RUFBZCxnQkFBYztFQUFkLGlCQUFjO0VBQWQsa0JBQWM7RUFBZCxjQUFjO0VBQWQsZ0JBQWM7RUFBZCxhQUFjO0VBQWQsbUJBQWM7RUFBZCxxQkFBYztFQUFkLDJCQUFjO0VBQWQseUJBQWM7RUFBZCwwQkFBYztFQUFkLDJCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLHlCQUFjO0VBQWQ7QUFBYztBQUVkO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsOEJBQW1CO0VBQW5CLDJCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxnQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGVBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw4QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx3S0FBbUI7RUFBbkIsd0pBQW1CO0VBQW5CLGdOQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBRm5CO0VBQUEsb0JDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxvQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLG9CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUE7Q0NBQTtBREFBO0VBQUEsdUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxtQkNBQTtFREFBO0NDQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuLy9pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9jbGFzc2VzXCI7XG4vL2ltcG9ydCBtYWluIGZyb20gXCIuL21haW4tZWxlbWVudFwiO1xuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbi8vaW1wb3J0IHRvZ2dsZVdlYXRoZXJVbml0IGZyb20gXCIuL2NvbnZlcnQtd2VhdGhlci11bml0XCI7XG5pbXBvcnQgaGVhZGVyU2VjdGlvbiBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBtYWluU2VjdGlvbiBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgZm9vdGVyU2VjdGlvbiBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2NsYXNzZXNcIjtcblxuY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuZnJhZ21lbnQuYXBwZW5kKGhlYWRlclNlY3Rpb24oKSwgbWFpblNlY3Rpb24oKSwgZm9vdGVyU2VjdGlvbigpKTtcbmNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwXCIpO1xuYXBwLmFwcGVuZChmcmFnbWVudCk7XG5oZWxwZXIuYWRkQ2xhc3MoYXBwLCBbXCJncmlkXCIsIFwiZ3JpZC1yb3dzLVthdXRvXzFmcl9hdXRvXVwiLCBcImgtc2NyZWVuXCJdKTtcblxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYmctZ3JheS05MDBcIiwgXCJ0ZXh0LWdyYXktMjAwXCIsIFwiaC1zY3JlZW5cIik7XG5cbmV2ZW50cygpO1xuLy90b2dnbGVXZWF0aGVyVW5pdCgpO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImNsYXNzZXMiLCJhcHBTdHlsZXMiLCJtYWluRWxlbWVudFN0eWxlIiwiaGVhZGVyRWxlbWVudCIsIm5hdkVsZW1lbnQiLCJpY29uc1RlbXAiLCJpY29uVHRvZ2dsZSIsImljb25zIiwic3R5bGVzIiwiYXBwRGl2U3R5bGVhIiwibWFpbkVsZW1lbnRTdHlsZXMiLCJuYXZFbGVtZW50U3R5bGVzIiwidG9nZ2xlciIsImhlbHBlciIsInRvRmFocmVuaGVpdCIsImNlbHNpdXMiLCJmYWhyZW5oZWl0IiwiY29uc29sZSIsImxvZyIsInRvRml4ZWQiLCJ0b0NlbHNpdXMiLCJrZWx2aW5Vbml0Iiwic2V0VGVtcGVyYXR1cmVVbml0IiwiaXNUb2dnbGVkIiwid2VhdGhlciIsInRlbXBlcmF0dXJlTGFiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJ0ZW1wIiwiYXBwZW5kIiwic3BlY2lhbCIsIndlYXRoZXJEYXRhIiwid2VhdGhlcmRlc2MiLCJtYXhUZW1wIiwibWluVGVtcCIsImZlZWxzTGlrZSIsImh1bWlkaXR5Iiwid2luZCIsImNvdW50cnkiLCJjaXR5IiwidGltZVpvbmUiLCJ0aW1lIiwiaWNvbiIsIndlYXRoZXJDYXJkIiwiZ2V0TG9jYXRpb24iLCJmb3JtIiwiaW5wdXQiLCJlbGVtZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGUiLCJ0YXJnZXQiLCJjaGVja2VkIiwidG9nZ2xlclN3aXRjaCIsInRvZ2dsZU9uIiwidG9nZ2xlT2ZmIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZXZlbnRzIiwiZm9vdGVyU2VjdGlvbiIsImdpdGh1YiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzcyIsInR3aXR0ZXIiLCJsaW5rZWRpbiIsImdpdGh1YkxpbmsiLCJocmVmIiwidHdpdHRlckxpbmsiLCJsaW5rZWRpbkxpbmsiLCJmcmFnbWVudCIsIkRvY3VtZW50RnJhZ21lbnQiLCJmb290ZXIiLCJoZWFkZXJTZWN0aW9uIiwibG9nb0RlZyIsImxvZ28iLCJuYXZMZWZ0Iiwic2VhcmNoSW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2hJY29uIiwic2VhcmNoQnV0dG9uIiwibmF2UmlnaHQiLCJuYXYiLCJoZWFkZXIiLCJhZGRDbGFzcyIsImVsZSIsImZvckVhY2giLCJ0YWciLCJub2RlIiwiYXR0cmlidXRlIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwic2V0QXR0cmlidXRlIiwiZGVncmVlQ2hhcmFjdGVyIiwiY2hhciIsImRlZ3JlZUNoYXIiLCJjaGFyYWN0ZXIiLCJyZWNoYXIiLCJ0ZXh0Q29udGVudCIsImFkZEljb24iLCJrZXl3b3JkIiwic3BhbiIsIm1haW5TZWN0aW9uIiwicCIsInNlY3Rpb24iLCJtYWluIiwiZGF5c09mV2VlayIsImRheSIsImRheU9mV2VlayIsImRhdGUiLCJ1c2VyVGltZSIsInRpbWVab25lT2Zmc2V0IiwiRGF0ZSIsImxvY2FsVGltZSIsImdldFRpbWUiLCJsb2NhbFRpbWVPZmZzZXQiLCJnZXRUaW1lem9uZU9mZnNldCIsInV0Y1RpbWUiLCJsb2NhdGlvbk9mZnNldCIsImxvY2F0aW9uVGltZSIsInJlbmRlclVzZXJUaW1lIiwiZ2V0RGF5IiwiaG91ckFuZE1pbnV0ZXMiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJkaXNsYXlUaW1lIiwid2VhdGhlckNhcmRDb250ZW50Iiwid2VhdGhlckNhcmRIZWFkZXIiLCJhcnRpY2xlIiwiY29udmVyVGVtcGVyYXR1cmVVbml0Iiwid2VhdGhlckljb24iLCJ3ZWF0aGVyZGVzY3JpcHRpb24iLCJ3ZWF0aGVyTGVmdCIsImRlZyIsImNlbHNpdXNTcGFuIiwidGVtcGVyYXR1cmUiLCJoaWdoIiwibG93IiwibWluTWF4Iiwid2VhdGhlclJpZ2h0Iiwid2VhdGhlcldyYXBwZXIiLCJmZWVsc0xpa2VJY29uIiwiZmVlbHNMaWtlRGl2IiwiaHVtaWRpdHlJY29uIiwiaHVtaWRpdHlEaXYiLCJ3aW5kSWNvbiIsIndpbmREaXYiLCJwcmVzc3VyZUljb24iLCJwcmVzc3VyZSIsInByZXNzdXJlRGl2Iiwib3RoZXJXZWF0aGVyRGV0YWlscyIsImRpdiIsImxvY2F0aW9uSWNvbiIsImxvY2F0aW9uIiwiaGVhZGVyTGVmdCIsImNoZWNrYm94IiwidG9nZ2xlT25JY29uIiwidG9nZ2xlT2ZmSWNvbiIsImxhYmVsIiwiZm9yIiwiZmFocmVuaGVpdFNwYW4iLCJ0b2dnbGVyV3JhcHBlciIsImhlYWRlclJpZ2h0IiwiYXBwIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=