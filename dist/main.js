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
 //convert kelvin unit to Fahrenheit

function toFahrenheit(kelvinUnit) {
  const fahrenheit = (kelvinUnit - 273.15) * (9 / 5) + 32;
  console.log(fahrenheit.toFixed(2));
  return fahrenheit.toFixed(2);
} //convert kelvin unit to Celsius


function toCelsius(kelvinUnit) {
  const celsius = kelvinUnit - 273.15;
  return celsius.toFixed(2);
}

const converTemperatureUnit = weather => {
  const isToggled = (0,_events__WEBPACK_IMPORTED_MODULE_0__.toggler)();
  const temperatureUnit = isToggled ? toFahrenheit(weather.temp) : toCelsius(weather.temp);
  return temperatureUnit;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (converTemperatureUnit);

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "toggler": () => (/* binding */ toggler)
/* harmony export */ });
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-data */ "./src/fetch-data.js");
/* harmony import */ var _transorm_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transorm-data */ "./src/transorm-data.js");

 //get location from user input on form

function getLocation() {
  const form = document.querySelector("form");
  const input = form.elements["search-input"];
  form.addEventListener("submit", e => {
    e.preventDefault();
    const location = input.value;
    (0,_fetch_data__WEBPACK_IMPORTED_MODULE_0__["default"])(location);
    console.log(location);
  });
} //toggle check box to switch between temperature states


const toggler = () => {
  const toggle = document.querySelector("#temp-toggler");
  toggle.addEventListener("change", e => {
    const isToggled = toggle.checked; // displayWeather(weatherData, isToggled);

    return isToggled;
  });
}; //initialize events

const events = () => {
  getLocation();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events); //console.log(form.elements);

/***/ }),

/***/ "./src/fetch-data.js":
/*!***************************!*\
  !*** ./src/fetch-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transorm_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transorm-data */ "./src/transorm-data.js");


const getData = async city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ceb8852b9b6a1fd8a8191af7243397f&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  (0,_transorm_data__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
  console.log(data);
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

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

  const footer = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", [fragment], null);
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


const headerSection = () => {
  const fragment = new DocumentFragment();
  /******nav left section*****/

  const logo = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", ["App-Logo"], {
    class: "teal"
  });
  const navLeft = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [logo], {
    class: "logo-container"
  });
  /******nav right section*********/
  //create search box

  const searchInput = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("input", [], {
    type: "text",
    id: "search-input",
    placeholder: "Enter weather location"
  }); //search icon

  const searchIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("i", [], {
    class: "fas fa-search"
  }); //create search button

  const searchButton = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("input", [searchIcon], {
    type: "submit",
    id: "search-btn"
  }); //creat search form

  const form = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("form", [searchInput, searchButton], null); //

  const navRight = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [form], null);
  /*****nav element */

  const nav = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", [navLeft, navRight], null);
  fragment.append(nav);
  const header = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("header", [fragment], {
    class: "app-header"
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
/* harmony export */   "createElement": () => (/* binding */ createElement)
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
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


const mainSection = () => {
  const p = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", ["Hello World"], {
    class: "text-4xl text-gray-200"
  });
  const section = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("section", [p], null); //main element

  const fragment = new DocumentFragment();
  fragment.append(section);
  const main = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("main", [fragment], null);
  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSection);

/***/ }),

/***/ "./src/tempToggler.js":
/*!****************************!*\
  !*** ./src/tempToggler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const months = [{
  id: 0,
  month: "Jan"
}, {
  id: 1,
  month: "Feb"
}, {
  id: 2,
  month: "Mar"
}, {
  id: 3,
  month: "Apr"
}, {
  id: 4,
  month: "May"
}, {
  id: 5,
  month: "Jun"
}, {
  id: 6,
  month: "Jul"
}, {
  id: 7,
  month: "Aug"
}, {
  id: 8,
  month: "Sep"
}, {
  id: 9,
  month: "Oct"
}, {
  id: 10,
  month: "Nov"
}, {
  id: 11,
  month: "Dec"
}];

function mth(date) {
  let bb = null;
  months.forEach(i => {
    if (i.id === date) {
      bb = i.month;
    }
  });
  console.log(bb);
  return bb;
} //array of days of week


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
/*
const date = userTime(-14400);
const day = dayOfWeek(date.getDay());
const hour = date.getHours();
const minute = date.getMinutes();

const h = hour < 10 ? "0" + hour : hour;
const m = minute < 10 ? "0" + minute : minute;
const mc = hour < 12 ? "AM" : "PM";
const dislayTime = `${day} ${h}:${m}${mc}`;
*/


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderUserTime);

/***/ }),

/***/ "./src/transorm-data.js":
/*!******************************!*\
  !*** ./src/transorm-data.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "weatherData": () => (/* binding */ weatherData)
/* harmony export */ });
/* harmony import */ var _weatherCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherCard */ "./src/weatherCard.js");
//import { isToggled } from "./events";
 //import displayWeather from "./display-weather";

let weatherData = null;

const tranformData = data => {
  console.log(data);
  weatherData = [{
    weather: data.weather[0].main,
    weatherdesc: data.weather[0].description,
    temp: data.main.temp,
    maxTemp: data.main.temp_max,
    minTemp: data.main.temp_min,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    country: data.sys.country,
    city: data.name,
    timeZone: data.timezone,
    time: data.dt,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }]; // isToggled = weatherData;

  console.log(weatherData); //persistData(weatherData);
  //console.log(weatherData);

  (0,_weatherCard__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData); //display();
  //return weatherData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tranformData);

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
    const article = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("article", [(0,_weatherCardheader__WEBPACK_IMPORTED_MODULE_2__["default"])(item), (0,_weatherCardContent__WEBPACK_IMPORTED_MODULE_1__["default"])(item)], null);
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



const weatherCardContent = weather => {
  const temperatureIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("img", [], {
    src: weather.icon,
    alt: "weather-icon"
  });
  const temperature = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", [weather.temp], null);
  const temperatureWrapper = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [temperatureIcon, temperature], null); //other weather details

  const humidity = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`Humidity: ${weather.humidity}`], null);
  const wind = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`Wind: ${weather.wind}`], null);
  const pressure = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`pressure: ${weather.humidity}`], null);
  const FeelsLike = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`Feels-like: ${weather.feel}`], null);
  const otherWeatherDetails = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [humidity, wind, pressure, FeelsLike], null); //fragment

  const fragment = new DocumentFragment();
  fragment.append(temperatureWrapper, otherWeatherDetails); //

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
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _tempToggler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tempToggler */ "./src/tempToggler.js");



const weatherCardHeader = weather => {
  //header left
  const city = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", [`${weather.city},`], null);
  const p = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [city, weather.country]);
  const h3 = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", [`${(0,_tempToggler__WEBPACK_IMPORTED_MODULE_1__["default"])(weather.timeZone)}`], null);
  const headerLeft = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [p, h3], {
    class: "header-left"
  }); //header right

  const checkbox = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("input", null, {
    type: "checkbox",
    id: "temp-toggler",
    class: "checkbox"
  }); //label

  const label = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, {
    class: "toggler",
    for: "temp-toggler"
  });
  const degree = document.createElement("span");
  degree.innerHTML = "&deg;";
  const fahrenheitSpan = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", [degree, "F"], null);
  const celsiusSpan = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", [degree, "C"], null);
  const togglerWrapper = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [celsiusSpan, checkbox, label, fahrenheitSpan], null);
  const headerRight = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [togglerWrapper], {
    class: "header-right"
  });
  const fragment = new DocumentFragment();
  fragment.append(headerLeft, headerRight);
  const header = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("header", [fragment], {
    class: "card-header"
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.from-green-400 {\n  --tw-gradient-from: #4ade80;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(74 222 128 / 0));\n}\n.to-blue-500 {\n  --tw-gradient-to: #3b82f6;\n}\n.bg-clip-text {\n  -webkit-background-clip: text;\n          background-clip: text;\n}\n.text-9xl {\n  font-size: 8rem;\n  line-height: 1;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.font-extrabold {\n  font-weight: 800;\n}\n.text-transparent {\n  color: transparent;\n}\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;"],"sourceRoot":""}]);
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

 //import classes from "./classes";
//import main from "./main-element";

 //import toggleWeatherUnit from "./convert-weather-unit";




const fragment = new DocumentFragment();
fragment.append((0,_header__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_main__WEBPACK_IMPORTED_MODULE_4__["default"])(), (0,_footer__WEBPACK_IMPORTED_MODULE_5__["default"])());
const app = document.querySelector(".app");
app.append(fragment);
console.log(fragment);
document.body.classList.add("bg-gray-900", "text-gray-200");
(0,_events__WEBPACK_IMPORTED_MODULE_2__["default"])(); //toggleWeatherUnit();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxN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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0NBRUE7QUFDQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNL0UsUUFBUSxHQUFHLElBQUlDLGdCQUFKLEVBQWpCO0FBQ0FELFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkUsbURBQWEsRUFBN0IsRUFBaUN5QixpREFBVyxFQUE1QyxFQUFnRHZDLG1EQUFhLEVBQTdEO0FBQ0EsTUFBTWdILEdBQUcsR0FBR25JLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFaO0FBQ0FrSSxHQUFHLENBQUNwRyxNQUFKLENBQVdGLFFBQVg7QUFDQTNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMEMsUUFBWjtBQUVBN0IsUUFBUSxDQUFDb0ksSUFBVCxDQUFjcEYsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsYUFBNUIsRUFBMkMsZUFBM0M7QUFFQXRDLG1EQUFNLElBQ04sc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb252ZXJ0LXdlYXRoZXItdW5pdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RlbXBUb2dnbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RyYW5zb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckNhcmRDb250ZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJDYXJkaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCB7IHRvZ2dsZXIgfSBmcm9tIFwiLi9ldmVudHNcIjtcblxuLy9jb252ZXJ0IGtlbHZpbiB1bml0IHRvIEZhaHJlbmhlaXRcbmZ1bmN0aW9uIHRvRmFocmVuaGVpdChrZWx2aW5Vbml0KSB7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSAoa2VsdmluVW5pdCAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzI7XG4gIGNvbnNvbGUubG9nKGZhaHJlbmhlaXQudG9GaXhlZCgyKSk7XG4gIHJldHVybiBmYWhyZW5oZWl0LnRvRml4ZWQoMik7XG59XG5cbi8vY29udmVydCBrZWx2aW4gdW5pdCB0byBDZWxzaXVzXG5mdW5jdGlvbiB0b0NlbHNpdXMoa2VsdmluVW5pdCkge1xuICBjb25zdCBjZWxzaXVzID0ga2VsdmluVW5pdCAtIDI3My4xNTtcbiAgcmV0dXJuIGNlbHNpdXMudG9GaXhlZCgyKTtcbn1cblxuY29uc3QgY29udmVyVGVtcGVyYXR1cmVVbml0ID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgaXNUb2dnbGVkID0gdG9nZ2xlcigpO1xuICBjb25zdCB0ZW1wZXJhdHVyZVVuaXQgPSBpc1RvZ2dsZWRcbiAgICA/IHRvRmFocmVuaGVpdCh3ZWF0aGVyLnRlbXApXG4gICAgOiB0b0NlbHNpdXMod2VhdGhlci50ZW1wKTtcbiAgcmV0dXJuIHRlbXBlcmF0dXJlVW5pdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnZlclRlbXBlcmF0dXJlVW5pdDtcbiIsImltcG9ydCBnZXREYXRhIGZyb20gXCIuL2ZldGNoLWRhdGFcIjtcbmltcG9ydCB7IHdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vdHJhbnNvcm0tZGF0YVwiO1xuXG4vL2dldCBsb2NhdGlvbiBmcm9tIHVzZXIgaW5wdXQgb24gZm9ybVxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgY29uc3QgaW5wdXQgPSBmb3JtLmVsZW1lbnRzW1wic2VhcmNoLWlucHV0XCJdO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBpbnB1dC52YWx1ZTtcbiAgICBnZXREYXRhKGxvY2F0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gIH0pO1xufVxuXG4vL3RvZ2dsZSBjaGVjayBib3ggdG8gc3dpdGNoIGJldHdlZW4gdGVtcGVyYXR1cmUgc3RhdGVzXG5leHBvcnQgY29uc3QgdG9nZ2xlciA9ICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wLXRvZ2dsZXJcIik7XG4gIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgaXNUb2dnbGVkID0gdG9nZ2xlLmNoZWNrZWQ7XG4gICAgLy8gZGlzcGxheVdlYXRoZXIod2VhdGhlckRhdGEsIGlzVG9nZ2xlZCk7XG4gICAgcmV0dXJuIGlzVG9nZ2xlZDtcbiAgfSk7XG59O1xuXG4vL2luaXRpYWxpemUgZXZlbnRzXG5jb25zdCBldmVudHMgPSAoKSA9PiB7XG4gIGdldExvY2F0aW9uKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG5cbi8vY29uc29sZS5sb2coZm9ybS5lbGVtZW50cyk7XG4iLCJpbXBvcnQgdHJhbmZvcm1EYXRhIGZyb20gXCIuL3RyYW5zb3JtLWRhdGFcIjtcblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9M2NlYjg4NTJiOWI2YTFmZDhhODE5MWFmNzI0MzM5N2YmdW5pdHM9bWV0cmljYDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB0cmFuZm9ybURhdGEoZGF0YSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IGZvb3RlclNlY3Rpb24gPSAoKSA9PiB7XG4gIC8vaWNvbnNcbiAgY29uc3QgZ2l0aHViID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHsgY2xhc3M6IFwiZmFiIGZhLWdpdGh1YlwiIH0pO1xuICBjb25zdCB0d2l0dGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHsgY2xhc3M6IFwiZmFiIGZhLXR3aXR0ZXJcIiB9KTtcbiAgY29uc3QgbGlua2VkaW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgbnVsbCwge1xuICAgIGNsYXNzOiBcImZhYiBmYS1saW5rZWRpblwiLFxuICB9KTtcbiAgLy9saW5rc1xuICBjb25zdCBnaXRodWJMaW5rID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFtnaXRodWJdLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vdHdpa2lzdGFcIixcbiAgfSk7XG4gIGNvbnN0IHR3aXR0ZXJMaW5rID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFt0d2l0dGVyXSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9hYXJvbmFuYW1hXCIsXG4gIH0pO1xuICBjb25zdCBsaW5rZWRpbkxpbmsgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImFcIiwgW2xpbmtlZGluXSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Fhcm9uYW5hbWFcIixcbiAgfSk7XG4gIC8vZnJhZ21lbnRcbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmQoZ2l0aHViTGluaywgdHdpdHRlckxpbmssIGxpbmtlZGluTGluayk7XG4gIC8vZm9vdGVyIGVsZW1lbnRcbiAgY29uc3QgZm9vdGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgW2ZyYWdtZW50XSwgbnVsbCk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlclNlY3Rpb247XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IGhlYWRlclNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcblxuICAvKioqKioqbmF2IGxlZnQgc2VjdGlvbioqKioqL1xuICBjb25zdCBsb2dvID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBbXCJBcHAtTG9nb1wiXSwgeyBjbGFzczogXCJ0ZWFsXCIgfSk7XG4gIGNvbnN0IG5hdkxlZnQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbbG9nb10sIHtcbiAgICBjbGFzczogXCJsb2dvLWNvbnRhaW5lclwiLFxuICB9KTtcblxuICAvKioqKioqbmF2IHJpZ2h0IHNlY3Rpb24qKioqKioqKiovXG5cbiAgLy9jcmVhdGUgc2VhcmNoIGJveFxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgW10sIHtcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBpZDogXCJzZWFyY2gtaW5wdXRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJFbnRlciB3ZWF0aGVyIGxvY2F0aW9uXCIsXG4gIH0pO1xuXG4gIC8vc2VhcmNoIGljb25cbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBbXSwgeyBjbGFzczogXCJmYXMgZmEtc2VhcmNoXCIgfSk7XG5cbiAgLy9jcmVhdGUgc2VhcmNoIGJ1dHRvblxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFtzZWFyY2hJY29uXSwge1xuICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgaWQ6IFwic2VhcmNoLWJ0blwiLFxuICB9KTtcblxuICAvL2NyZWF0IHNlYXJjaCBmb3JtXG4gIGNvbnN0IGZvcm0gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgW3NlYXJjaElucHV0LCBzZWFyY2hCdXR0b25dLCBudWxsKTtcblxuICAvL1xuICBjb25zdCBuYXZSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmb3JtXSwgbnVsbCk7XG5cbiAgLyoqKioqbmF2IGVsZW1lbnQgKi9cbiAgY29uc3QgbmF2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwgW25hdkxlZnQsIG5hdlJpZ2h0XSwgbnVsbCk7XG5cbiAgZnJhZ21lbnQuYXBwZW5kKG5hdik7XG5cbiAgY29uc3QgaGVhZGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgW2ZyYWdtZW50XSwge1xuICAgIGNsYXNzOiBcImFwcC1oZWFkZXJcIixcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTZWN0aW9uO1xuIiwiZnVuY3Rpb24gYWRkQ2xhc3MoZWxlLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMuZm9yRWFjaCgoaSkgPT4gZWxlLmNsYXNzTGlzdC5hZGQoaSkpO1xufVxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgbm9kZSwgYXR0cmlidXRlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChub2RlKSB7XG4gICAgbm9kZS5mb3JFYWNoKChpKSA9PiBlbGVtZW50LmFwcGVuZChpKSk7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZSkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGUpO1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoaSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlW2ldKSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH07XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IG1haW5TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBwID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBbXCJIZWxsbyBXb3JsZFwiXSwge1xuICAgIGNsYXNzOiBcInRleHQtNHhsIHRleHQtZ3JheS0yMDBcIixcbiAgfSk7XG4gIGNvbnN0IHNlY3Rpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgW3BdLCBudWxsKTtcblxuICAvL21haW4gZWxlbWVudFxuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWdtZW50LmFwcGVuZChzZWN0aW9uKTtcbiAgY29uc3QgbWFpbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibWFpblwiLCBbZnJhZ21lbnRdLCBudWxsKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluU2VjdGlvbjtcbiIsImNvbnN0IG1vbnRocyA9IFtcbiAgeyBpZDogMCwgbW9udGg6IFwiSmFuXCIgfSxcbiAgeyBpZDogMSwgbW9udGg6IFwiRmViXCIgfSxcbiAgeyBpZDogMiwgbW9udGg6IFwiTWFyXCIgfSxcbiAgeyBpZDogMywgbW9udGg6IFwiQXByXCIgfSxcbiAgeyBpZDogNCwgbW9udGg6IFwiTWF5XCIgfSxcbiAgeyBpZDogNSwgbW9udGg6IFwiSnVuXCIgfSxcbiAgeyBpZDogNiwgbW9udGg6IFwiSnVsXCIgfSxcbiAgeyBpZDogNywgbW9udGg6IFwiQXVnXCIgfSxcbiAgeyBpZDogOCwgbW9udGg6IFwiU2VwXCIgfSxcbiAgeyBpZDogOSwgbW9udGg6IFwiT2N0XCIgfSxcbiAgeyBpZDogMTAsIG1vbnRoOiBcIk5vdlwiIH0sXG4gIHsgaWQ6IDExLCBtb250aDogXCJEZWNcIiB9LFxuXTtcblxuZnVuY3Rpb24gbXRoKGRhdGUpIHtcbiAgbGV0IGJiID0gbnVsbDtcbiAgbW9udGhzLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoaS5pZCA9PT0gZGF0ZSkge1xuICAgICAgYmIgPSBpLm1vbnRoO1xuICAgIH1cbiAgfSk7XG4gIGNvbnNvbGUubG9nKGJiKTtcbiAgcmV0dXJuIGJiO1xufVxuXG4vL2FycmF5IG9mIGRheXMgb2Ygd2Vla1xuY29uc3QgZGF5c09mV2VlayA9IFtcbiAgeyBpZDogMCwgZGF5OiBcIlN1blwiIH0sXG4gIHsgaWQ6IDEsIGRheTogXCJNb25cIiB9LFxuICB7IGlkOiAyLCBkYXk6IFwiVHVlXCIgfSxcbiAgeyBpZDogMywgZGF5OiBcIldlZFwiIH0sXG4gIHsgaWQ6IDQsIGRheTogXCJUaHVcIiB9LFxuICB7IGlkOiA1LCBkYXk6IFwiRnJpXCIgfSxcbiAgeyBpZDogNiwgZGF5OiBcIlNhdFwiIH0sXG5dO1xuXG4vL2dldCBkYXkgb2Ygd2Vla1xuZnVuY3Rpb24gZGF5T2ZXZWVrKGRhdGUpIHtcbiAgbGV0IGRheSA9IG51bGw7XG4gIGRheXNPZldlZWsuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmIChpLmlkID09PSBkYXRlKSB7XG4gICAgICBkYXkgPSBpLmRheTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGF5O1xufVxuXG4vL2NvbnZlcnQgdGltZSB0byB1c2VyIHRpbWUgd2l0aCBVVEMgYW5kIFRpbWVab25lXG5mdW5jdGlvbiB1c2VyVGltZSh0aW1lWm9uZU9mZnNldCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbG9jYWxUaW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IGxvY2FsVGltZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICBjb25zdCB1dGNUaW1lID0gbG9jYWxUaW1lICsgbG9jYWxUaW1lT2Zmc2V0O1xuICBjb25zdCBsb2NhdGlvbk9mZnNldCA9IHV0Y1RpbWUgKyAxMDAwICogdGltZVpvbmVPZmZzZXQ7XG4gIGNvbnN0IGxvY2F0aW9uVGltZSA9IG5ldyBEYXRlKGxvY2F0aW9uT2Zmc2V0KTtcbiAgY29uc29sZS5sb2cobG9jYXRpb25UaW1lKTtcbiAgcmV0dXJuIGxvY2F0aW9uVGltZTtcblxuICAvL2RlZmluZSBkYXRlLCBkYXksIGhvdXIgYW1kIG1pbnV0ZVxufVxuXG5mdW5jdGlvbiByZW5kZXJVc2VyVGltZSh0aW1lWm9uZU9mZnNldCkge1xuICAvL2RlZmluZSBkYXRlLCBkYXksIGhvdXIgYW5kIG1pbnV0ZVxuICBjb25zdCBkYXRlID0gdXNlclRpbWUodGltZVpvbmVPZmZzZXQpO1xuICBjb25zdCBkYXkgPSBkYXlPZldlZWsoZGF0ZS5nZXREYXkoKSk7XG4gIGNvbnN0IGhvdXJBbmRNaW51dGVzID0gZGF0ZS50b0xvY2FsZVN0cmluZyhbXSwge1xuICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gIH0pO1xuXG4gIC8vZGVmaW5lIGZvcm1hdCB0byBkaXNwbGF5IHRpbWVcbiAgY29uc3QgZGlzbGF5VGltZSA9IGAke2RheX0gJHtob3VyQW5kTWludXRlc31gO1xuICByZXR1cm4gZGlzbGF5VGltZTtcbn1cblxuLypcbmNvbnN0IGRhdGUgPSB1c2VyVGltZSgtMTQ0MDApO1xuY29uc3QgZGF5ID0gZGF5T2ZXZWVrKGRhdGUuZ2V0RGF5KCkpO1xuY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbmNvbnN0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpO1xuXG5jb25zdCBoID0gaG91ciA8IDEwID8gXCIwXCIgKyBob3VyIDogaG91cjtcbmNvbnN0IG0gPSBtaW51dGUgPCAxMCA/IFwiMFwiICsgbWludXRlIDogbWludXRlO1xuY29uc3QgbWMgPSBob3VyIDwgMTIgPyBcIkFNXCIgOiBcIlBNXCI7XG5jb25zdCBkaXNsYXlUaW1lID0gYCR7ZGF5fSAke2h9OiR7bX0ke21jfWA7XG4qL1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJVc2VyVGltZTtcbiIsIi8vaW1wb3J0IHsgaXNUb2dnbGVkIH0gZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmltcG9ydCB3ZWF0aGVyQ2FyZCBmcm9tIFwiLi93ZWF0aGVyQ2FyZFwiO1xuXG4vL2ltcG9ydCBkaXNwbGF5V2VhdGhlciBmcm9tIFwiLi9kaXNwbGF5LXdlYXRoZXJcIjtcbmV4cG9ydCBsZXQgd2VhdGhlckRhdGEgPSBudWxsO1xuXG5jb25zdCB0cmFuZm9ybURhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgd2VhdGhlckRhdGEgPSBbXG4gICAge1xuICAgICAgd2VhdGhlcjogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICB3ZWF0aGVyZGVzYzogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXG4gICAgICBtYXhUZW1wOiBkYXRhLm1haW4udGVtcF9tYXgsXG4gICAgICBtaW5UZW1wOiBkYXRhLm1haW4udGVtcF9taW4sXG4gICAgICBmZWVsc0xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXG4gICAgICBjaXR5OiBkYXRhLm5hbWUsXG4gICAgICB0aW1lWm9uZTogZGF0YS50aW1lem9uZSxcbiAgICAgIHRpbWU6IGRhdGEuZHQsXG4gICAgICBpY29uOiBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYCxcbiAgICB9LFxuICBdO1xuICAvLyBpc1RvZ2dsZWQgPSB3ZWF0aGVyRGF0YTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAvL3BlcnNpc3REYXRhKHdlYXRoZXJEYXRhKTtcbiAgLy9jb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIHdlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKTtcbiAgLy9kaXNwbGF5KCk7XG4gIC8vcmV0dXJuIHdlYXRoZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbmZvcm1EYXRhO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHdlYXRoZXJDYXJkQ29udGVudCBmcm9tIFwiLi93ZWF0aGVyQ2FyZENvbnRlbnRcIjtcbmltcG9ydCB3ZWF0aGVyQ2FyZEhlYWRlciBmcm9tIFwiLi93ZWF0aGVyQ2FyZGhlYWRlclwiO1xuY29uc3Qgd2VhdGhlckNhcmQgPSAod2VhdGhlcikgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgd2VhdGhlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJhcnRpY2xlXCIsXG4gICAgICBbd2VhdGhlckNhcmRIZWFkZXIoaXRlbSksIHdlYXRoZXJDYXJkQ29udGVudChpdGVtKV0sXG4gICAgICBudWxsXG4gICAgKTtcbiAgICBtYWluLmFwcGVuZChhcnRpY2xlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZDtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBjb252ZXJUZW1wZXJhdHVyZVVuaXQgZnJvbSBcIi4vY29udmVydC13ZWF0aGVyLXVuaXRcIjtcbmNvbnN0IHdlYXRoZXJDYXJkQ29udGVudCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IHRlbXBlcmF0dXJlSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtdLCB7XG4gICAgc3JjOiB3ZWF0aGVyLmljb24sXG4gICAgYWx0OiBcIndlYXRoZXItaWNvblwiLFxuICB9KTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImgxXCIsIFt3ZWF0aGVyLnRlbXBdLCBudWxsKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbdGVtcGVyYXR1cmVJY29uLCB0ZW1wZXJhdHVyZV0sXG4gICAgbnVsbFxuICApO1xuXG4gIC8vb3RoZXIgd2VhdGhlciBkZXRhaWxzXG4gIGNvbnN0IGh1bWlkaXR5ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BIdW1pZGl0eTogJHt3ZWF0aGVyLmh1bWlkaXR5fWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3Qgd2luZCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwicFwiLCBbYFdpbmQ6ICR7d2VhdGhlci53aW5kfWBdLCBudWxsKTtcbiAgY29uc3QgcHJlc3N1cmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbYHByZXNzdXJlOiAke3dlYXRoZXIuaHVtaWRpdHl9YF0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBGZWVsc0xpa2UgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbYEZlZWxzLWxpa2U6ICR7d2VhdGhlci5mZWVsfWBdLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBvdGhlcldlYXRoZXJEZXRhaWxzID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbaHVtaWRpdHksIHdpbmQsIHByZXNzdXJlLCBGZWVsc0xpa2VdLFxuICAgIG51bGxcbiAgKTtcblxuICAvL2ZyYWdtZW50XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKHRlbXBlcmF0dXJlV3JhcHBlciwgb3RoZXJXZWF0aGVyRGV0YWlscyk7XG5cbiAgLy9cbiAgY29uc3QgZGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2ZyYWdtZW50XSwgbnVsbCk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZENvbnRlbnQ7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgcmVuZGVyVXNlclRpbWUgZnJvbSBcIi4vdGVtcFRvZ2dsZXJcIjtcblxuY29uc3Qgd2VhdGhlckNhcmRIZWFkZXIgPSAod2VhdGhlcikgPT4ge1xuICAvL2hlYWRlciBsZWZ0XG4gIGNvbnN0IGNpdHkgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW2Ake3dlYXRoZXIuY2l0eX0sYF0sIG51bGwpO1xuICBjb25zdCBwID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtjaXR5LCB3ZWF0aGVyLmNvdW50cnldKTtcbiAgY29uc3QgaDMgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgzXCIsXG4gICAgW2Ake3JlbmRlclVzZXJUaW1lKHdlYXRoZXIudGltZVpvbmUpfWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgaGVhZGVyTGVmdCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtwLCBoM10sIHtcbiAgICBjbGFzczogXCJoZWFkZXItbGVmdFwiLFxuICB9KTtcblxuICAvL2hlYWRlciByaWdodFxuICBjb25zdCBjaGVja2JveCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgbnVsbCwge1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICBpZDogXCJ0ZW1wLXRvZ2dsZXJcIixcbiAgICBjbGFzczogXCJjaGVja2JveFwiLFxuICB9KTtcbiAgLy9sYWJlbFxuICBjb25zdCBsYWJlbCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwge1xuICAgIGNsYXNzOiBcInRvZ2dsZXJcIixcbiAgICBmb3I6IFwidGVtcC10b2dnbGVyXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGRlZ3JlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkZWdyZWUuaW5uZXJIVE1MID0gXCImZGVnO1wiO1xuXG4gIGNvbnN0IGZhaHJlbmhlaXRTcGFuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtkZWdyZWUsIFwiRlwiXSwgbnVsbCk7XG4gIGNvbnN0IGNlbHNpdXNTcGFuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtkZWdyZWUsIFwiQ1wiXSwgbnVsbCk7XG5cbiAgY29uc3QgdG9nZ2xlcldyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtjZWxzaXVzU3BhbiwgY2hlY2tib3gsIGxhYmVsLCBmYWhyZW5oZWl0U3Bhbl0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBoZWFkZXJSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFt0b2dnbGVyV3JhcHBlcl0sIHtcbiAgICBjbGFzczogXCJoZWFkZXItcmlnaHRcIixcbiAgfSk7XG5cbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmQoaGVhZGVyTGVmdCwgaGVhZGVyUmlnaHQpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczogXCJjYXJkLWhlYWRlclwiLFxuICB9KTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJDYXJkSGVhZGVyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMC4yNCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIC1vLXRhYi1zaXplOiA0O1xcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbkVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG4uYmctZ3JheS05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3IDI0IDM5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JhZGllbnQtdG8tciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XFxufVxcbi5mcm9tLWdyZWVuLTQwMCB7XFxuICAtLXR3LWdyYWRpZW50LWZyb206ICM0YWRlODA7XFxuICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8sIHJnYig3NCAyMjIgMTI4IC8gMCkpO1xcbn1cXG4udG8tYmx1ZS01MDAge1xcbiAgLS10dy1ncmFkaWVudC10bzogIzNiODJmNjtcXG59XFxuLmJnLWNsaXAtdGV4dCB7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbn1cXG4udGV4dC05eGwge1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi50ZXh0LTR4bCB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG4uZm9udC1leHRyYWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLnRleHQtdHJhbnNwYXJlbnQge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4udGV4dC1ncmF5LTIwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjI5IDIzMSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsNE5BQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkO0VBQUEsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQsYUFBYztFQUFkLGFBQWM7RUFBZCxrQkFBYztFQUFkLHNDQUFjO0VBQWQsZUFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQsa0JBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsc0NBQWM7RUFBZCxrQ0FBYztFQUFkLDJCQUFjO0VBQWQsc0JBQWM7RUFBZCw4QkFBYztFQUFkLFlBQWM7RUFBZCxrQkFBYztFQUFkLGdCQUFjO0VBQWQsaUJBQWM7RUFBZCxrQkFBYztFQUFkLGNBQWM7RUFBZCxnQkFBYztFQUFkLGFBQWM7RUFBZCxtQkFBYztFQUFkLHFCQUFjO0VBQWQsMkJBQWM7RUFBZCx5QkFBYztFQUFkLDBCQUFjO0VBQWQsMkJBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQseUJBQWM7RUFBZDtBQUFjO0FBRWQ7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLDJCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsNkJBQW1CO1VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG4vL2ltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2NsYXNzZXNcIjtcbi8vaW1wb3J0IG1haW4gZnJvbSBcIi4vbWFpbi1lbGVtZW50XCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuLy9pbXBvcnQgdG9nZ2xlV2VhdGhlclVuaXQgZnJvbSBcIi4vY29udmVydC13ZWF0aGVyLXVuaXRcIjtcbmltcG9ydCBoZWFkZXJTZWN0aW9uIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IG1haW5TZWN0aW9uIGZyb20gXCIuL21haW5cIjtcbmltcG9ydCBmb290ZXJTZWN0aW9uIGZyb20gXCIuL2Zvb3RlclwiO1xuXG5jb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5mcmFnbWVudC5hcHBlbmQoaGVhZGVyU2VjdGlvbigpLCBtYWluU2VjdGlvbigpLCBmb290ZXJTZWN0aW9uKCkpO1xuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIik7XG5hcHAuYXBwZW5kKGZyYWdtZW50KTtcbmNvbnNvbGUubG9nKGZyYWdtZW50KTtcblxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYmctZ3JheS05MDBcIiwgXCJ0ZXh0LWdyYXktMjAwXCIpO1xuXG5ldmVudHMoKTtcbi8vdG9nZ2xlV2VhdGhlclVuaXQoKTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJ0b2dnbGVyIiwidG9GYWhyZW5oZWl0Iiwia2VsdmluVW5pdCIsImZhaHJlbmhlaXQiLCJjb25zb2xlIiwibG9nIiwidG9GaXhlZCIsInRvQ2Vsc2l1cyIsImNlbHNpdXMiLCJjb252ZXJUZW1wZXJhdHVyZVVuaXQiLCJ3ZWF0aGVyIiwiaXNUb2dnbGVkIiwidGVtcGVyYXR1cmVVbml0IiwidGVtcCIsImdldERhdGEiLCJ3ZWF0aGVyRGF0YSIsImdldExvY2F0aW9uIiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0IiwiZWxlbWVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9jYXRpb24iLCJ2YWx1ZSIsInRvZ2dsZSIsImNoZWNrZWQiLCJldmVudHMiLCJ0cmFuZm9ybURhdGEiLCJjaXR5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJoZWxwZXIiLCJmb290ZXJTZWN0aW9uIiwiZ2l0aHViIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzIiwidHdpdHRlciIsImxpbmtlZGluIiwiZ2l0aHViTGluayIsImhyZWYiLCJ0d2l0dGVyTGluayIsImxpbmtlZGluTGluayIsImZyYWdtZW50IiwiRG9jdW1lbnRGcmFnbWVudCIsImFwcGVuZCIsImZvb3RlciIsImhlYWRlclNlY3Rpb24iLCJsb2dvIiwibmF2TGVmdCIsInNlYXJjaElucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoSWNvbiIsInNlYXJjaEJ1dHRvbiIsIm5hdlJpZ2h0IiwibmF2IiwiaGVhZGVyIiwiYWRkQ2xhc3MiLCJlbGUiLCJjbGFzc2VzIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsInRhZyIsIm5vZGUiLCJhdHRyaWJ1dGUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJzZXRBdHRyaWJ1dGUiLCJtYWluU2VjdGlvbiIsInAiLCJzZWN0aW9uIiwibWFpbiIsIm1vbnRocyIsIm1vbnRoIiwibXRoIiwiZGF0ZSIsImJiIiwiZGF5c09mV2VlayIsImRheSIsImRheU9mV2VlayIsInVzZXJUaW1lIiwidGltZVpvbmVPZmZzZXQiLCJEYXRlIiwibG9jYWxUaW1lIiwiZ2V0VGltZSIsImxvY2FsVGltZU9mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwidXRjVGltZSIsImxvY2F0aW9uT2Zmc2V0IiwibG9jYXRpb25UaW1lIiwicmVuZGVyVXNlclRpbWUiLCJnZXREYXkiLCJob3VyQW5kTWludXRlcyIsInRvTG9jYWxlU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsImRpc2xheVRpbWUiLCJ3ZWF0aGVyQ2FyZCIsIndlYXRoZXJkZXNjIiwiZGVzY3JpcHRpb24iLCJtYXhUZW1wIiwidGVtcF9tYXgiLCJtaW5UZW1wIiwidGVtcF9taW4iLCJmZWVsc0xpa2UiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJ3aW5kIiwic3BlZWQiLCJjb3VudHJ5Iiwic3lzIiwibmFtZSIsInRpbWVab25lIiwidGltZXpvbmUiLCJ0aW1lIiwiZHQiLCJpY29uIiwid2VhdGhlckNhcmRDb250ZW50Iiwid2VhdGhlckNhcmRIZWFkZXIiLCJpbm5lckhUTUwiLCJhcnRpY2xlIiwidGVtcGVyYXR1cmVJY29uIiwic3JjIiwiYWx0IiwidGVtcGVyYXR1cmUiLCJ0ZW1wZXJhdHVyZVdyYXBwZXIiLCJwcmVzc3VyZSIsIkZlZWxzTGlrZSIsImZlZWwiLCJvdGhlcldlYXRoZXJEZXRhaWxzIiwiZGl2IiwiaDMiLCJoZWFkZXJMZWZ0IiwiY2hlY2tib3giLCJsYWJlbCIsImZvciIsImRlZ3JlZSIsImZhaHJlbmhlaXRTcGFuIiwiY2Vsc2l1c1NwYW4iLCJ0b2dnbGVyV3JhcHBlciIsImhlYWRlclJpZ2h0IiwiYXBwIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=