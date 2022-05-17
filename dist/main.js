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
  return fahrenheit.toFixed(2);
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
  console.log(temperatureLabel.childN);
  const temp = isToggled ? toFahrenheit(weather[0].temp.toFixed(0)) : weather[0].temp.toFixed(0);
  temperatureLabel.append(temp, isToggled ? _helper__WEBPACK_IMPORTED_MODULE_1__.degreeCharacter("F") : _helper__WEBPACK_IMPORTED_MODULE_1__.degreeCharacter("C"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTemperatureUnit);

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
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data */ "./src/fetch-data.js");
/* harmony import */ var _transorm_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transorm-data */ "./src/transorm-data.js");


 //get location from user input on form

function getLocation() {
  const form = document.querySelector("form");
  const input = form.elements["search-input"];
  form.addEventListener("submit", e => {
    e.preventDefault();
    const location = input.value;
    (0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__["default"])(location);
    console.log(location);
  });
} //toggle check box to switch between temperature states


const toggler = () => {
  const toggle = document.querySelector("main");
  toggle.addEventListener("change", e => {
    const target = e.target;
    console.log(target.checked);
    const isToggled = target.checked;
    console.log(_transorm_data__WEBPACK_IMPORTED_MODULE_2__.weatherData);
    (0,_convert_weather_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(isToggled, _transorm_data__WEBPACK_IMPORTED_MODULE_2__.weatherData);
  });
}; //initialize events


const events = () => {
  getLocation();
  toggler();
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
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ceb8852b9b6a1fd8a8191af7243397f&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    (0,_transorm_data__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
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
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");



const headerSection = () => {
  const fragment = new DocumentFragment();
  /******nav left section*****/

  const logo = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", ["App-Logo"], {
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
    placeholder: "Enter weather location",
    class: "bg-transparent  outline-none apperance-none pl-2"
  }); //search icon <i class="fa-solid fa-magnifying-glass"></i>

  const searchIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("i", [], {
    class: "fas fa-search text-gray-400 "
  }); //create search button

  const searchButton = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", [searchIcon], {
    type: "submit",
    id: "search-btn",
    class: "border-l-2 border-l-gray-600 px-2 py-[1px] border"
  }); //creat search form

  const form = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("form", [searchInput, searchButton], {
    class: "flex justify-center items-center rounded-full bg-gray-700 px-4 py-[1.9px] focus-within:bg-gray-900 focus-within:border-gray-600 focus-within:border-2"
  }); //

  const navRight = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [form], null);
  /*****nav element */

  const nav = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", [navLeft, navRight], {
    class: "flex flex-col justify-center items-center w-full py-2"
  });
  fragment.append(nav);
  const header = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("header", [fragment], {
    class: "border-b-[1px] border-indigo-500 px-3 py-3 w-full"
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
/* harmony export */   "degreeCharacter": () => (/* binding */ degreeCharacter)
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

const degreeCharacter = f => {
  const degreeChar = document.createElement("span");
  degreeChar.innerHTML = `&deg;${f}`;
  return degreeChar;
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
  const p = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", ["Hello World"], {
    class: "text-4xl text-gray-200"
  });
  const section = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("section", [p], null); //main element

  const fragment = new DocumentFragment();
  fragment.append(section);
  const main = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("main", [fragment], {
    class: 'w-full", "max-w-4xl bg-red'
  });
  _helper__WEBPACK_IMPORTED_MODULE_1__.addClass(main, _classes__WEBPACK_IMPORTED_MODULE_0__["default"].mainElementStyle);
  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSection);

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
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/classes.js");




const weatherCardContent = weather => {
  //weather icon
  const weatherIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("img", [], {
    src: weather.icon,
    alt: "weather-icon"
  }); //weather description

  const weatherdescription = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", [weather.weatherdesc], null); //weather icon and description wrapper

  const weatherLeft = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [weatherIcon, weatherdescription], null); //degree special character

  const celsiusSpan = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", [_helper__WEBPACK_IMPORTED_MODULE_0__.degreeCharacter("C")], {
    class: "text-xs align-text-top"
  }); //temperature value

  const temperature = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", [weather.temp.toFixed(0), celsiusSpan], {
    class: "temperature-value"
  }); //feels like

  const feelsLike = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", [`feels like - ${weather.feelsLike.toFixed(0)}`, _helper__WEBPACK_IMPORTED_MODULE_0__.degreeCharacter("")], null); //temperature and feelsLike wrapper

  const weatherRight = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [temperature, feelsLike], null); //other weather details
  //humidity

  const humidityIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["water_drop"], {
    class: "material-icons-outlined"
  });
  const humidity = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`Humidity: ${weather.humidity}%`], null);
  const humidityDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [humidityIcon, humidity], null); //wind

  const windIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["air"], {
    class: "material-icons-outlined"
  });
  const wind = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`Wind: ${weather.wind.toFixed(0)} mps`], null);
  const windDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [windIcon, wind], null); //pressure

  const pressureIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["science"], {
    class: "material-icons-outlined"
  });
  const pressure = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`pressure: ${weather.pressure}`], null);
  const pressureDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [pressureIcon, pressure], null); //maximum temperature

  const maxTempIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, {
    class: "fas fa-temperature-high"
  });
  const maxTemp = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`max: ${weather.maxTemp.toFixed(0)}`, _helper__WEBPACK_IMPORTED_MODULE_0__.degreeCharacter("")], null);
  const maxTempDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [maxTempIcon, maxTemp], null); //minimum temperature

  const minTempIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, {
    class: "fas fa-temperature-low"
  });
  const minTemp = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`min: ${weather.minTemp.toFixed(0)}`, _helper__WEBPACK_IMPORTED_MODULE_0__.degreeCharacter("")], null);
  const minTempDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [minTempIcon, minTemp], null);
  /*const FeelsLike = helper.createElement(
    "p",
    [`Feels-like: ${weather.feel}`],
    null
  );*/

  const otherWeatherDetails = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [humidityDiv, windDiv, pressureDiv, minTempDiv, maxTempDiv], null); //fragment

  const fragment = new DocumentFragment();
  fragment.append(weatherLeft, weatherRight, otherWeatherDetails); //

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
  const location = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", [locationIcon, city, weather.country]);
  const localTime = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", [`${(0,_timeAndDate__WEBPACK_IMPORTED_MODULE_2__["default"])(weather.timeZone)}`], null);
  const headerLeft = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [location, localTime], {
    class: "header-left"
  }); //header right

  const checkbox = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("input", null, {
    type: "checkbox",
    id: "temp-toggler",
    class: "checkbox hidden"
  }); //label

  const toggleOnIcon = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["toggle_on"], {
    class: "material-icons-outlined text-3xl"
  });
  const toggleOffIcon = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["toggle_off"], {
    class: "material-icons-outlined text-3xl"
  });
  const label = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("label", [toggleOffIcon, toggleOnIcon], {
    class: "toggler",
    for: "temp-toggler"
  });
  const fahrenheitSpan = _helper__WEBPACK_IMPORTED_MODULE_1__.degreeCharacter("F");
  const celsiusSpan = _helper__WEBPACK_IMPORTED_MODULE_1__.degreeCharacter("C");
  const togglerWrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [celsiusSpan, checkbox, label, fahrenheitSpan], null);
  const headerRight = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [togglerWrapper], {
    class: "header-right"
  });
  const fragment = new DocumentFragment();
  fragment.append(headerLeft, headerRight);
  const header = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("header", [fragment], {
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.flex {\n  display: flex;\n}\n.hidden {\n  display: none;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-full {\n  height: 100%;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-4xl {\n  max-width: 56rem;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.border {\n  border-width: 1px;\n}\n.border-l-2 {\n  border-left-width: 2px;\n}\n.border-b-\\[1px\\] {\n  border-bottom-width: 1px;\n}\n.border-indigo-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(99 102 241 / var(--tw-border-opacity));\n}\n.border-l-gray-600 {\n  --tw-border-opacity: 1;\n  border-left-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-\\[1px\\] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-\\[1\\.9px\\] {\n  padding-top: 1.9px;\n  padding-bottom: 1.9px;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.pl-2 {\n  padding-left: 0.5rem;\n}\n.align-text-top {\n  vertical-align: text-top;\n}\n.align-text-bottom {\n  vertical-align: text-bottom;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-\\[32px\\] {\n  font-size: 32px;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus-within\\:border-2:focus-within {\n  border-width: 2px;\n}\n.focus-within\\:border-gray-600:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\n.focus-within\\:bg-gray-900:focus-within {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}", "",{"version":3,"sources":["webpack://./src/style.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;",null],"sourceRoot":""}]);
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
_helper__WEBPACK_IMPORTED_MODULE_1__.addClass(app, _classes__WEBPACK_IMPORTED_MODULE_6__["default"].appStyles);
document.body.classList.add("bg-gray-900", "text-gray-200");
(0,_events__WEBPACK_IMPORTED_MODULE_2__["default"])(); //toggleWeatherUnit();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0s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LENBQUNsSixNQUFKLENBQVdrQyxRQUFYO0FBQ0FwRCw2Q0FBQSxDQUFnQm9LLEdBQWhCLEVBQXFCakwsMERBQXJCO0FBRUEwQixRQUFRLENBQUN3SixJQUFULENBQWNoRyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixhQUE1QixFQUEyQyxlQUEzQztBQUVBcEMsbURBQU0sSUFDTixzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29udmVydC13ZWF0aGVyLXVuaXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90aW1lQW5kRGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90cmFuc29ybS1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJDYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQ2FyZGhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJjb25zdCBjbGFzc2VzID0ge1xuICBhcHBTdHlsZXM6IFtcImgtc2NyZWVuXCJdLFxuICBtYWluRWxlbWVudFN0eWxlOiBbXCJ3LWZ1bGxcIiwgXCJtYXgtdy00eGxcIl0sXG4gIGhlYWRlckVsZW1lbnQ6IFtcInctZnVsbFwiLCBcImgtOFwiXSxcbiAgbmF2RWxlbWVudDogW1wiZmxleFwiLCBcInB4LTJcIiwgXCJ3LWZ1bGxcIiwgXCJoLWZ1bGxcIl0sXG4gIGljb25zVGVtcDogW1widGV4dC1zbVwiLCBcImFsaWduLXRleHQtYm90dG9tXCJdLFxuICBpY29uVHRvZ2dsZTogW1widGV4dC1bMzJweF1cIl0sXG4gIGljb25zOiBbXCJ0ZXh0LWJhc2VcIl0sXG59O1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gW1xuICB7IGFwcERpdlN0eWxlYTogXCJoLXNjcmVlblwiIH0sXG4gIHsgbWFpbkVsZW1lbnRTdHlsZXM6ICd3LWZ1bGxcIiwgXCJtYXgtdy00eGwnIH0sXG4gIHsgbmF2RWxlbWVudFN0eWxlczogXCJmbGV4IHB4LTIgdy1mdWxsIGgtZnVsbFwiIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc2VzO1xuIiwiaW1wb3J0IHsgdG9nZ2xlciB9IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG4vL2NvbnZlcnQga2VsdmluIHVuaXQgdG8gRmFocmVuaGVpdFxuZnVuY3Rpb24gdG9GYWhyZW5oZWl0KGNlbHNpdXMpIHtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGNlbHNpdXMgKiAxLjggKyAzMjtcbiAgY29uc29sZS5sb2coZmFocmVuaGVpdC50b0ZpeGVkKDApKTtcbiAgcmV0dXJuIGZhaHJlbmhlaXQudG9GaXhlZCgyKTtcbn1cblxuLy9jb252ZXJ0IGtlbHZpbiB1bml0IHRvIENlbHNpdXNcbmZ1bmN0aW9uIHRvQ2Vsc2l1cyhrZWx2aW5Vbml0KSB7XG4gIGNvbnN0IGNlbHNpdXMgPSBrZWx2aW5Vbml0IC0gMjczLjE1O1xuICByZXR1cm4gY2Vsc2l1cy50b0ZpeGVkKDApO1xufVxuXG4vKlxuY29uc3QgY29udmVyVGVtcGVyYXR1cmVVbml0ID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgaXNUb2dnbGVkID0gdG9nZ2xlcigpO1xuICBjb25zdCB0ZW1wZXJhdHVyZVVuaXQgPSBpc1RvZ2dsZWRcbiAgICA/IHRvRmFocmVuaGVpdCh3ZWF0aGVyLnRlbXApXG4gICAgOiB0b0NlbHNpdXMod2VhdGhlci50ZW1wKTtcbiAgcmV0dXJuIHRlbXBlcmF0dXJlVW5pdDtcbn07XG4qL1xuXG5jb25zdCBzZXRUZW1wZXJhdHVyZVVuaXQgPSAoaXNUb2dnbGVkLCB3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlLXZhbHVlXCIpO1xuICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnNvbGUubG9nKHRlbXBlcmF0dXJlTGFiZWwuY2hpbGROKTtcbiAgY29uc3QgdGVtcCA9IGlzVG9nZ2xlZFxuICAgID8gdG9GYWhyZW5oZWl0KHdlYXRoZXJbMF0udGVtcC50b0ZpeGVkKDApKVxuICAgIDogd2VhdGhlclswXS50ZW1wLnRvRml4ZWQoMCk7XG4gIHRlbXBlcmF0dXJlTGFiZWwuYXBwZW5kKFxuICAgIHRlbXAsXG4gICAgaXNUb2dnbGVkID8gaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIkZcIikgOiBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiQ1wiKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0VGVtcGVyYXR1cmVVbml0O1xuIiwiaW1wb3J0IHNldFRlbXBlcmF0dXJlVW5pdCBmcm9tIFwiLi9jb252ZXJ0LXdlYXRoZXItdW5pdFwiO1xuaW1wb3J0IGdldERhdGEgZnJvbSBcIi4vZmV0Y2gtZGF0YVwiO1xuaW1wb3J0IHsgd2VhdGhlckRhdGEgfSBmcm9tIFwiLi90cmFuc29ybS1kYXRhXCI7XG5cbi8vZ2V0IGxvY2F0aW9uIGZyb20gdXNlciBpbnB1dCBvbiBmb3JtXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICBjb25zdCBpbnB1dCA9IGZvcm0uZWxlbWVudHNbXCJzZWFyY2gtaW5wdXRcIl07XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGlucHV0LnZhbHVlO1xuICAgIGdldERhdGEobG9jYXRpb24pO1xuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcbiAgfSk7XG59XG5cbi8vdG9nZ2xlIGNoZWNrIGJveCB0byBzd2l0Y2ggYmV0d2VlbiB0ZW1wZXJhdHVyZSBzdGF0ZXNcbmNvbnN0IHRvZ2dsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKHRhcmdldC5jaGVja2VkKTtcbiAgICBjb25zdCBpc1RvZ2dsZWQgPSB0YXJnZXQuY2hlY2tlZDtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgc2V0VGVtcGVyYXR1cmVVbml0KGlzVG9nZ2xlZCwgd2VhdGhlckRhdGEpO1xuICB9KTtcbn07XG5cbi8vaW5pdGlhbGl6ZSBldmVudHNcbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgZ2V0TG9jYXRpb24oKTtcbiAgdG9nZ2xlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzO1xuXG4vL2NvbnNvbGUubG9nKGZvcm0uZWxlbWVudHMpO1xuIiwiaW1wb3J0IHRyYW5mb3JtRGF0YSBmcm9tIFwiLi90cmFuc29ybS1kYXRhXCI7XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAoY2l0eSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9M2NlYjg4NTJiOWI2YTFmZDhhODE5MWFmNzI0MzM5N2YmdW5pdHM9bWV0cmljYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB0cmFuZm9ybURhdGEoZGF0YSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBmb290ZXJTZWN0aW9uID0gKCkgPT4ge1xuICAvL2ljb25zXG4gIGNvbnN0IGdpdGh1YiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7IGNsYXNzOiBcImZhYiBmYS1naXRodWJcIiB9KTtcbiAgY29uc3QgdHdpdHRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7IGNsYXNzOiBcImZhYiBmYS10d2l0dGVyXCIgfSk7XG4gIGNvbnN0IGxpbmtlZGluID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHtcbiAgICBjbGFzczogXCJmYWIgZmEtbGlua2VkaW5cIixcbiAgfSk7XG4gIC8vbGlua3NcbiAgY29uc3QgZ2l0aHViTGluayA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYVwiLCBbZ2l0aHViXSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3R3aWtpc3RhXCIsXG4gIH0pO1xuICBjb25zdCB0d2l0dGVyTGluayA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYVwiLCBbdHdpdHRlcl0sIHtcbiAgICBocmVmOiBcImh0dHBzOi8vdHdpdHRlci5jb20vYWFyb25hbmFtYVwiLFxuICB9KTtcbiAgY29uc3QgbGlua2VkaW5MaW5rID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFtsaW5rZWRpbl0sIHtcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hYXJvbmFuYW1hXCIsXG4gIH0pO1xuICAvL2ZyYWdtZW50XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKGdpdGh1YkxpbmssIHR3aXR0ZXJMaW5rLCBsaW5rZWRpbkxpbmspO1xuICAvL2Zvb3RlciBlbGVtZW50XG4gIGNvbnN0IGZvb3RlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIFtmcmFnbWVudF0sIG51bGwpO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJTZWN0aW9uO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG5jb25zdCBoZWFkZXJTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgLyoqKioqKm5hdiBsZWZ0IHNlY3Rpb24qKioqKi9cbiAgY29uc3QgbG9nbyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaDNcIiwgW1wiQXBwLUxvZ29cIl0sIHsgY2xhc3M6IFwidGVhbFwiIH0pO1xuICBjb25zdCBuYXZMZWZ0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2xvZ29dLCB7XG4gICAgY2xhc3M6IFwibWItMiBweS1bMXB4XSBsb2dvLWNvbnRhaW5lclwiLFxuICB9KTtcblxuICAvKioqKioqbmF2IHJpZ2h0IHNlY3Rpb24qKioqKioqKiovXG5cbiAgLy9jcmVhdGUgc2VhcmNoIGJveFxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgW10sIHtcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBpZDogXCJzZWFyY2gtaW5wdXRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJFbnRlciB3ZWF0aGVyIGxvY2F0aW9uXCIsXG4gICAgY2xhc3M6IFwiYmctdHJhbnNwYXJlbnQgIG91dGxpbmUtbm9uZSBhcHBlcmFuY2Utbm9uZSBwbC0yXCIsXG4gIH0pO1xuXG4gIC8vc2VhcmNoIGljb24gPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1tYWduaWZ5aW5nLWdsYXNzXCI+PC9pPlxuICBjb25zdCBzZWFyY2hJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtdLCB7XG4gICAgY2xhc3M6IFwiZmFzIGZhLXNlYXJjaCB0ZXh0LWdyYXktNDAwIFwiLFxuICB9KTtcblxuICAvL2NyZWF0ZSBzZWFyY2ggYnV0dG9uXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtzZWFyY2hJY29uXSwge1xuICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgaWQ6IFwic2VhcmNoLWJ0blwiLFxuICAgIGNsYXNzOiBcImJvcmRlci1sLTIgYm9yZGVyLWwtZ3JheS02MDAgcHgtMiBweS1bMXB4XSBib3JkZXJcIixcbiAgfSk7XG5cbiAgLy9jcmVhdCBzZWFyY2ggZm9ybVxuICBjb25zdCBmb3JtID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFtzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JheS03MDAgcHgtNCBweS1bMS45cHhdIGZvY3VzLXdpdGhpbjpiZy1ncmF5LTkwMCBmb2N1cy13aXRoaW46Ym9yZGVyLWdyYXktNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItMlwiLFxuICB9KTtcblxuICAvL1xuICBjb25zdCBuYXZSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmb3JtXSwgbnVsbCk7XG5cbiAgLyoqKioqbmF2IGVsZW1lbnQgKi9cbiAgY29uc3QgbmF2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwgW25hdkxlZnQsIG5hdlJpZ2h0XSwge1xuICAgIGNsYXNzOiBcImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBweS0yXCIsXG4gIH0pO1xuXG4gIGZyYWdtZW50LmFwcGVuZChuYXYpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczogXCJib3JkZXItYi1bMXB4XSBib3JkZXItaW5kaWdvLTUwMCBweC0zIHB5LTMgdy1mdWxsXCIsXG4gIH0pO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyU2VjdGlvbjtcbiIsImZ1bmN0aW9uIGFkZENsYXNzKGVsZSwgY2xhc3Nlcykge1xuICBjbGFzc2VzLmZvckVhY2goKGkpID0+IGVsZS5jbGFzc0xpc3QuYWRkKGkpKTtcbn1cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIG5vZGUsIGF0dHJpYnV0ZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAobm9kZSkge1xuICAgIG5vZGUuZm9yRWFjaCgoaSkgPT4gZWxlbWVudC5hcHBlbmQoaSkpO1xuICB9XG4gIGlmIChhdHRyaWJ1dGUpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlKTtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGkpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKGksIGF0dHJpYnV0ZVtpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBkZWdyZWVDaGFyYWN0ZXIgPSAoZikgPT4ge1xuICBjb25zdCBkZWdyZWVDaGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRlZ3JlZUNoYXIuaW5uZXJIVE1MID0gYCZkZWc7JHtmfWA7XG4gIHJldHVybiBkZWdyZWVDaGFyO1xufTtcblxuY29uc3QgYWRkSWNvbiA9IChrZXl3b3JkLCBzdHlsZXMpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtrZXl3b3JkXSwge1xuICAgIGNsYXNzOiBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsXG4gIH0pO1xuICBhZGRDbGFzcyhzcGFuLCBzdHlsZXMpO1xuICByZXR1cm4gc3Bhbjtcbn07XG5cbmV4cG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50LCBkZWdyZWVDaGFyYWN0ZXIsIGFkZEljb24gfTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY29uc3QgbWFpblNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHAgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImgxXCIsIFtcIkhlbGxvIFdvcmxkXCJdLCB7XG4gICAgY2xhc3M6IFwidGV4dC00eGwgdGV4dC1ncmF5LTIwMFwiLFxuICB9KTtcbiAgY29uc3Qgc2VjdGlvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBbcF0sIG51bGwpO1xuXG4gIC8vbWFpbiBlbGVtZW50XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKHNlY3Rpb24pO1xuICBjb25zdCBtYWluID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczogJ3ctZnVsbFwiLCBcIm1heC13LTR4bCBiZy1yZWQnLFxuICB9KTtcbiAgaGVscGVyLmFkZENsYXNzKG1haW4sIGNsYXNzZXMubWFpbkVsZW1lbnRTdHlsZSk7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpblNlY3Rpb247XG4iLCIvL2FycmF5IG9mIGRheXMgb2Ygd2Vla1xuY29uc3QgZGF5c09mV2VlayA9IFtcbiAgeyBpZDogMCwgZGF5OiBcIlN1blwiIH0sXG4gIHsgaWQ6IDEsIGRheTogXCJNb25cIiB9LFxuICB7IGlkOiAyLCBkYXk6IFwiVHVlXCIgfSxcbiAgeyBpZDogMywgZGF5OiBcIldlZFwiIH0sXG4gIHsgaWQ6IDQsIGRheTogXCJUaHVcIiB9LFxuICB7IGlkOiA1LCBkYXk6IFwiRnJpXCIgfSxcbiAgeyBpZDogNiwgZGF5OiBcIlNhdFwiIH0sXG5dO1xuXG4vL2dldCBkYXkgb2Ygd2Vla1xuZnVuY3Rpb24gZGF5T2ZXZWVrKGRhdGUpIHtcbiAgbGV0IGRheSA9IG51bGw7XG4gIGRheXNPZldlZWsuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmIChpLmlkID09PSBkYXRlKSB7XG4gICAgICBkYXkgPSBpLmRheTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGF5O1xufVxuXG4vL2NvbnZlcnQgdGltZSB0byB1c2VyIHRpbWUgd2l0aCBVVEMgYW5kIFRpbWVab25lXG5mdW5jdGlvbiB1c2VyVGltZSh0aW1lWm9uZU9mZnNldCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbG9jYWxUaW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IGxvY2FsVGltZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICBjb25zdCB1dGNUaW1lID0gbG9jYWxUaW1lICsgbG9jYWxUaW1lT2Zmc2V0O1xuICBjb25zdCBsb2NhdGlvbk9mZnNldCA9IHV0Y1RpbWUgKyAxMDAwICogdGltZVpvbmVPZmZzZXQ7XG4gIGNvbnN0IGxvY2F0aW9uVGltZSA9IG5ldyBEYXRlKGxvY2F0aW9uT2Zmc2V0KTtcbiAgY29uc29sZS5sb2cobG9jYXRpb25UaW1lKTtcbiAgcmV0dXJuIGxvY2F0aW9uVGltZTtcblxuICAvL2RlZmluZSBkYXRlLCBkYXksIGhvdXIgYW1kIG1pbnV0ZVxufVxuXG5mdW5jdGlvbiByZW5kZXJVc2VyVGltZSh0aW1lWm9uZU9mZnNldCkge1xuICAvL2RlZmluZSBkYXRlLCBkYXksIGhvdXIgYW5kIG1pbnV0ZVxuICBjb25zdCBkYXRlID0gdXNlclRpbWUodGltZVpvbmVPZmZzZXQpO1xuICBjb25zdCBkYXkgPSBkYXlPZldlZWsoZGF0ZS5nZXREYXkoKSk7XG4gIGNvbnN0IGhvdXJBbmRNaW51dGVzID0gZGF0ZS50b0xvY2FsZVN0cmluZyhbXSwge1xuICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gIH0pO1xuXG4gIC8vZGVmaW5lIGZvcm1hdCB0byBkaXNwbGF5IHRpbWVcbiAgY29uc3QgZGlzbGF5VGltZSA9IGAke2RheX0gJHtob3VyQW5kTWludXRlc31gO1xuICByZXR1cm4gZGlzbGF5VGltZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVXNlclRpbWU7XG4iLCIvL2ltcG9ydCB7IGlzVG9nZ2xlZCB9IGZyb20gXCIuL2V2ZW50c1wiO1xuXG5pbXBvcnQgd2VhdGhlckNhcmQgZnJvbSBcIi4vd2VhdGhlckNhcmRcIjtcblxuLy9pbXBvcnQgZGlzcGxheVdlYXRoZXIgZnJvbSBcIi4vZGlzcGxheS13ZWF0aGVyXCI7XG5leHBvcnQgbGV0IHdlYXRoZXJEYXRhID0gbnVsbDtcblxuY29uc3QgdHJhbmZvcm1EYXRhID0gKGRhdGEpID0+IHtcbiAgd2VhdGhlckRhdGEgPSBbXG4gICAge1xuICAgICAgd2VhdGhlcjogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICB3ZWF0aGVyZGVzYzogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXG4gICAgICBtYXhUZW1wOiBkYXRhLm1haW4udGVtcF9tYXgsXG4gICAgICBtaW5UZW1wOiBkYXRhLm1haW4udGVtcF9taW4sXG4gICAgICBmZWVsc0xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXG4gICAgICBjaXR5OiBkYXRhLm5hbWUsXG4gICAgICB0aW1lWm9uZTogZGF0YS50aW1lem9uZSxcbiAgICAgIHRpbWU6IGRhdGEuZHQsXG4gICAgICBpY29uOiBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYCxcbiAgICB9LFxuICBdO1xuICAvLyBpc1RvZ2dsZWQgPSB3ZWF0aGVyRGF0YTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAvL3BlcnNpc3REYXRhKHdlYXRoZXJEYXRhKTtcbiAgLy9jb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIHdlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKTtcbiAgLy9kaXNwbGF5KCk7XG4gIC8vcmV0dXJuIHdlYXRoZXJEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbmZvcm1EYXRhO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHdlYXRoZXJDYXJkQ29udGVudCBmcm9tIFwiLi93ZWF0aGVyQ2FyZENvbnRlbnRcIjtcbmltcG9ydCB3ZWF0aGVyQ2FyZEhlYWRlciBmcm9tIFwiLi93ZWF0aGVyQ2FyZGhlYWRlclwiO1xuY29uc3Qgd2VhdGhlckNhcmQgPSAod2VhdGhlcikgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgd2VhdGhlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJhcnRpY2xlXCIsXG4gICAgICBbd2VhdGhlckNhcmRIZWFkZXIoaXRlbSksIHdlYXRoZXJDYXJkQ29udGVudChpdGVtKV0sXG4gICAgICBudWxsXG4gICAgKTtcbiAgICBtYWluLmFwcGVuZChhcnRpY2xlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZDtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBjb252ZXJUZW1wZXJhdHVyZVVuaXQgZnJvbSBcIi4vY29udmVydC13ZWF0aGVyLXVuaXRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2NsYXNzZXNcIjtcbmNvbnN0IHdlYXRoZXJDYXJkQ29udGVudCA9ICh3ZWF0aGVyKSA9PiB7XG4gIC8vd2VhdGhlciBpY29uXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW10sIHtcbiAgICBzcmM6IHdlYXRoZXIuaWNvbixcbiAgICBhbHQ6IFwid2VhdGhlci1pY29uXCIsXG4gIH0pO1xuICAvL3dlYXRoZXIgZGVzY3JpcHRpb25cbiAgY29uc3Qgd2VhdGhlcmRlc2NyaXB0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoNVwiLFxuICAgIFt3ZWF0aGVyLndlYXRoZXJkZXNjXSxcbiAgICBudWxsXG4gICk7XG4gIC8vd2VhdGhlciBpY29uIGFuZCBkZXNjcmlwdGlvbiB3cmFwcGVyXG4gIGNvbnN0IHdlYXRoZXJMZWZ0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbd2VhdGhlckljb24sIHdlYXRoZXJkZXNjcmlwdGlvbl0sXG4gICAgbnVsbFxuICApO1xuICAvL2RlZ3JlZSBzcGVjaWFsIGNoYXJhY3RlclxuICBjb25zdCBjZWxzaXVzU3BhbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiQ1wiKV0sXG4gICAgeyBjbGFzczogXCJ0ZXh0LXhzIGFsaWduLXRleHQtdG9wXCIgfVxuICApO1xuICAvL3RlbXBlcmF0dXJlIHZhbHVlXG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoMVwiLFxuICAgIFt3ZWF0aGVyLnRlbXAudG9GaXhlZCgwKSwgY2Vsc2l1c1NwYW5dLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcInRlbXBlcmF0dXJlLXZhbHVlXCIsXG4gICAgfVxuICApO1xuICAvL2ZlZWxzIGxpa2VcbiAgY29uc3QgZmVlbHNMaWtlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoNVwiLFxuICAgIFtcbiAgICAgIGBmZWVscyBsaWtlIC0gJHt3ZWF0aGVyLmZlZWxzTGlrZS50b0ZpeGVkKDApfWAsXG4gICAgICBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiXCIpLFxuICAgIF0sXG4gICAgbnVsbFxuICApO1xuXG4gIC8vdGVtcGVyYXR1cmUgYW5kIGZlZWxzTGlrZSB3cmFwcGVyXG4gIGNvbnN0IHdlYXRoZXJSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW3RlbXBlcmF0dXJlLCBmZWVsc0xpa2VdLFxuICAgIG51bGxcbiAgKTtcblxuICAvL290aGVyIHdlYXRoZXIgZGV0YWlsc1xuXG4gIC8vaHVtaWRpdHlcbiAgY29uc3QgaHVtaWRpdHlJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcIndhdGVyX2Ryb3BcIl0sIHtcbiAgICBjbGFzczogXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLFxuICB9KTtcbiAgY29uc3QgaHVtaWRpdHkgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbYEh1bWlkaXR5OiAke3dlYXRoZXIuaHVtaWRpdHl9JWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtodW1pZGl0eUljb24sIGh1bWlkaXR5XSxcbiAgICBudWxsXG4gICk7XG5cbiAgLy93aW5kXG4gIGNvbnN0IHdpbmRJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcImFpclwiXSwge1xuICAgIGNsYXNzOiBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsXG4gIH0pO1xuICBjb25zdCB3aW5kID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BXaW5kOiAke3dlYXRoZXIud2luZC50b0ZpeGVkKDApfSBtcHNgXSxcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IHdpbmREaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbd2luZEljb24sIHdpbmRdLCBudWxsKTtcblxuICAvL3ByZXNzdXJlXG4gIGNvbnN0IHByZXNzdXJlSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJzY2llbmNlXCJdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIixcbiAgfSk7XG4gIGNvbnN0IHByZXNzdXJlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BwcmVzc3VyZTogJHt3ZWF0aGVyLnByZXNzdXJlfWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgcHJlc3N1cmVEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtwcmVzc3VyZUljb24sIHByZXNzdXJlXSxcbiAgICBudWxsXG4gICk7XG5cbiAgLy9tYXhpbXVtIHRlbXBlcmF0dXJlXG4gIGNvbnN0IG1heFRlbXBJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHtcbiAgICBjbGFzczogXCJmYXMgZmEtdGVtcGVyYXR1cmUtaGlnaFwiLFxuICB9KTtcbiAgY29uc3QgbWF4VGVtcCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtgbWF4OiAke3dlYXRoZXIubWF4VGVtcC50b0ZpeGVkKDApfWAsIGhlbHBlci5kZWdyZWVDaGFyYWN0ZXIoXCJcIildLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBtYXhUZW1wRGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW21heFRlbXBJY29uLCBtYXhUZW1wXSwgbnVsbCk7XG5cbiAgLy9taW5pbXVtIHRlbXBlcmF0dXJlXG4gIGNvbnN0IG1pblRlbXBJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHtcbiAgICBjbGFzczogXCJmYXMgZmEtdGVtcGVyYXR1cmUtbG93XCIsXG4gIH0pO1xuICBjb25zdCBtaW5UZW1wID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BtaW46ICR7d2VhdGhlci5taW5UZW1wLnRvRml4ZWQoMCl9YCwgaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIlwiKV0sXG4gICAgbnVsbFxuICApO1xuXG4gIGNvbnN0IG1pblRlbXBEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbbWluVGVtcEljb24sIG1pblRlbXBdLCBudWxsKTtcbiAgLypjb25zdCBGZWVsc0xpa2UgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbYEZlZWxzLWxpa2U6ICR7d2VhdGhlci5mZWVsfWBdLFxuICAgIG51bGxcbiAgKTsqL1xuXG4gIGNvbnN0IG90aGVyV2VhdGhlckRldGFpbHMgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtodW1pZGl0eURpdiwgd2luZERpdiwgcHJlc3N1cmVEaXYsIG1pblRlbXBEaXYsIG1heFRlbXBEaXZdLFxuICAgIG51bGxcbiAgKTtcblxuICAvL2ZyYWdtZW50XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKHdlYXRoZXJMZWZ0LCB3ZWF0aGVyUmlnaHQsIG90aGVyV2VhdGhlckRldGFpbHMpO1xuXG4gIC8vXG4gIGNvbnN0IGRpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmcmFnbWVudF0sIG51bGwpO1xuICByZXR1cm4gZGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckNhcmRDb250ZW50O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHJlbmRlclVzZXJUaW1lIGZyb20gXCIuL3RpbWVBbmREYXRlXCI7XG5cbmNvbnN0IHdlYXRoZXJDYXJkSGVhZGVyID0gKHdlYXRoZXIpID0+IHtcbiAgLy9oZWFkZXIgbGVmdFxuICBjb25zdCBsb2NhdGlvbkljb24gPSBoZWxwZXIuYWRkSWNvbihcImxvY2F0aW9uX29uXCIsIFtjbGFzc2VzLmljb25zXSk7XG4gIGNvbnN0IGNpdHkgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW2Ake3dlYXRoZXIuY2l0eX0sIGBdLCBudWxsKTtcbiAgY29uc3QgbG9jYXRpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImg0XCIsIFtcbiAgICBsb2NhdGlvbkljb24sXG4gICAgY2l0eSxcbiAgICB3ZWF0aGVyLmNvdW50cnksXG4gIF0pO1xuICBjb25zdCBsb2NhbFRpbWUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgzXCIsXG4gICAgW2Ake3JlbmRlclVzZXJUaW1lKHdlYXRoZXIudGltZVpvbmUpfWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgaGVhZGVyTGVmdCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtsb2NhdGlvbiwgbG9jYWxUaW1lXSwge1xuICAgIGNsYXNzOiBcImhlYWRlci1sZWZ0XCIsXG4gIH0pO1xuXG4gIC8vaGVhZGVyIHJpZ2h0XG4gIGNvbnN0IGNoZWNrYm94ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBudWxsLCB7XG4gICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgIGlkOiBcInRlbXAtdG9nZ2xlclwiLFxuICAgIGNsYXNzOiBcImNoZWNrYm94IGhpZGRlblwiLFxuICB9KTtcbiAgLy9sYWJlbFxuICBjb25zdCB0b2dnbGVPbkljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1widG9nZ2xlX29uXCJdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC0zeGxcIixcbiAgfSk7XG5cbiAgY29uc3QgdG9nZ2xlT2ZmSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0b2dnbGVfb2ZmXCJdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC0zeGxcIixcbiAgfSk7XG4gIGNvbnN0IGxhYmVsID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBbdG9nZ2xlT2ZmSWNvbiwgdG9nZ2xlT25JY29uXSwge1xuICAgIGNsYXNzOiBcInRvZ2dsZXJcIixcbiAgICBmb3I6IFwidGVtcC10b2dnbGVyXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGZhaHJlbmhlaXRTcGFuID0gaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIkZcIik7XG4gIGNvbnN0IGNlbHNpdXNTcGFuID0gaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIkNcIik7XG5cbiAgY29uc3QgdG9nZ2xlcldyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtjZWxzaXVzU3BhbiwgY2hlY2tib3gsIGxhYmVsLCBmYWhyZW5oZWl0U3Bhbl0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBoZWFkZXJSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFt0b2dnbGVyV3JhcHBlcl0sIHtcbiAgICBjbGFzczogXCJoZWFkZXItcmlnaHRcIixcbiAgfSk7XG5cbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmQoaGVhZGVyTGVmdCwgaGVhZGVyUmlnaHQpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczogXCJjYXJkLWhlYWRlclwiLFxuICB9KTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJDYXJkSGVhZGVyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMC4yNCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIC1vLXRhYi1zaXplOiA0O1xcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbkVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG4ubWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmgtc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5oLTgge1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG4uaC1mdWxsIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1heC13LTR4bCB7XFxuICBtYXgtd2lkdGg6IDU2cmVtO1xcbn1cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yb3VuZGVkLWZ1bGwge1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbn1cXG4uYm9yZGVyIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4uYm9yZGVyLWwtMiB7XFxuICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xcbn1cXG4uYm9yZGVyLWItXFxcXFsxcHhcXFxcXSB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcbi5ib3JkZXItaW5kaWdvLTUwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoOTkgMTAyIDI0MSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItbC1ncmF5LTYwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3NSA4NSA5OSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5iZy10cmFuc3BhcmVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmJnLWdyYXktNzAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSA2NSA4MSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyYXktOTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNyAyNCAzOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLnB4LTIge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5weS1cXFxcWzFweFxcXFxdIHtcXG4gIHBhZGRpbmctdG9wOiAxcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbn1cXG4ucHgtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG4ucHktXFxcXFsxXFxcXC45cHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogMS45cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMS45cHg7XFxufVxcbi5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ucHgtMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG4ucHktMyB7XFxuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4ucGwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuLmFsaWduLXRleHQtdG9wIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcXG59XFxuLmFsaWduLXRleHQtYm90dG9tIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG59XFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4udGV4dC1cXFxcWzMycHhcXFxcXSB7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcbi50ZXh0LWJhc2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuLnRleHQtNHhsIHtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxufVxcbi50ZXh0LXhzIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4udGV4dC0zeGwge1xcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG4udGV4dC1ncmF5LTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTU2IDE2MyAxNzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS0yMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIyOSAyMzEgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5vdXRsaW5lLW5vbmUge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuLmZvY3VzLXdpdGhpblxcXFw6Ym9yZGVyLTI6Zm9jdXMtd2l0aGluIHtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbn1cXG4uZm9jdXMtd2l0aGluXFxcXDpib3JkZXItZ3JheS02MDA6Zm9jdXMtd2l0aGluIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYig3NSA4NSA5OSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5mb2N1cy13aXRoaW5cXFxcOmJnLWdyYXktOTAwOmZvY3VzLXdpdGhpbiB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcgMjQgMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw0TkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjO0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7Ozs7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7RUFBZCxZQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7RUFBQSxtQkFBYztFQUFkLG1CQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsZUFBYztFQUFkLGVBQWM7RUFBZCxhQUFjO0VBQWQsYUFBYztFQUFkLGtCQUFjO0VBQWQsc0NBQWM7RUFBZCxlQUFjO0VBQWQsb0JBQWM7RUFBZCxzQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCxrQkFBYztFQUFkLDJCQUFjO0VBQWQsNEJBQWM7RUFBZCxzQ0FBYztFQUFkLGtDQUFjO0VBQWQsMkJBQWM7RUFBZCxzQkFBYztFQUFkLDhCQUFjO0VBQWQsWUFBYztFQUFkLGtCQUFjO0VBQWQsZ0JBQWM7RUFBZCxpQkFBYztFQUFkLGtCQUFjO0VBQWQsY0FBYztFQUFkLGdCQUFjO0VBQWQsYUFBYztFQUFkLG1CQUFjO0VBQWQscUJBQWM7RUFBZCwyQkFBYztFQUFkLHlCQUFjO0VBQWQsMEJBQWM7RUFBZCwyQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCx5QkFBYztFQUFkO0FBQWM7QUFFZDtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZ0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDhCQUFtQjtFQUFuQjtBQUFtQjtBQUZuQjtFQUFBO0NDQUE7QURBQTtFQUFBLHVCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsbUJDQUE7RURBQTtDQ0FBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbi8vaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuLy9pbXBvcnQgbWFpbiBmcm9tIFwiLi9tYWluLWVsZW1lbnRcIjtcbmltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG4vL2ltcG9ydCB0b2dnbGVXZWF0aGVyVW5pdCBmcm9tIFwiLi9jb252ZXJ0LXdlYXRoZXItdW5pdFwiO1xuaW1wb3J0IGhlYWRlclNlY3Rpb24gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgbWFpblNlY3Rpb24gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IGZvb3RlclNlY3Rpb24gZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbmZyYWdtZW50LmFwcGVuZChoZWFkZXJTZWN0aW9uKCksIG1haW5TZWN0aW9uKCksIGZvb3RlclNlY3Rpb24oKSk7XG5jb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcFwiKTtcbmFwcC5hcHBlbmQoZnJhZ21lbnQpO1xuaGVscGVyLmFkZENsYXNzKGFwcCwgY2xhc3Nlcy5hcHBTdHlsZXMpO1xuXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJiZy1ncmF5LTkwMFwiLCBcInRleHQtZ3JheS0yMDBcIik7XG5cbmV2ZW50cygpO1xuLy90b2dnbGVXZWF0aGVyVW5pdCgpO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImNsYXNzZXMiLCJhcHBTdHlsZXMiLCJtYWluRWxlbWVudFN0eWxlIiwiaGVhZGVyRWxlbWVudCIsIm5hdkVsZW1lbnQiLCJpY29uc1RlbXAiLCJpY29uVHRvZ2dsZSIsImljb25zIiwic3R5bGVzIiwiYXBwRGl2U3R5bGVhIiwibWFpbkVsZW1lbnRTdHlsZXMiLCJuYXZFbGVtZW50U3R5bGVzIiwidG9nZ2xlciIsImhlbHBlciIsInRvRmFocmVuaGVpdCIsImNlbHNpdXMiLCJmYWhyZW5oZWl0IiwiY29uc29sZSIsImxvZyIsInRvRml4ZWQiLCJ0b0NlbHNpdXMiLCJrZWx2aW5Vbml0Iiwic2V0VGVtcGVyYXR1cmVVbml0IiwiaXNUb2dnbGVkIiwid2VhdGhlciIsInRlbXBlcmF0dXJlTGFiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJjaGlsZE4iLCJ0ZW1wIiwiYXBwZW5kIiwiZGVncmVlQ2hhcmFjdGVyIiwiZ2V0RGF0YSIsIndlYXRoZXJEYXRhIiwiZ2V0TG9jYXRpb24iLCJmb3JtIiwiaW5wdXQiLCJlbGVtZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsInZhbHVlIiwidG9nZ2xlIiwidGFyZ2V0IiwiY2hlY2tlZCIsImV2ZW50cyIsInRyYW5mb3JtRGF0YSIsImNpdHkiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImVycm9yIiwiZm9vdGVyU2VjdGlvbiIsImdpdGh1YiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzcyIsInR3aXR0ZXIiLCJsaW5rZWRpbiIsImdpdGh1YkxpbmsiLCJocmVmIiwidHdpdHRlckxpbmsiLCJsaW5rZWRpbkxpbmsiLCJmcmFnbWVudCIsIkRvY3VtZW50RnJhZ21lbnQiLCJmb290ZXIiLCJoZWFkZXJTZWN0aW9uIiwibG9nbyIsIm5hdkxlZnQiLCJzZWFyY2hJbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNlYXJjaEljb24iLCJzZWFyY2hCdXR0b24iLCJuYXZSaWdodCIsIm5hdiIsImhlYWRlciIsImFkZENsYXNzIiwiZWxlIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsInRhZyIsIm5vZGUiLCJhdHRyaWJ1dGUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJzZXRBdHRyaWJ1dGUiLCJmIiwiZGVncmVlQ2hhciIsImFkZEljb24iLCJrZXl3b3JkIiwic3BhbiIsIm1haW5TZWN0aW9uIiwicCIsInNlY3Rpb24iLCJtYWluIiwiZGF5c09mV2VlayIsImRheSIsImRheU9mV2VlayIsImRhdGUiLCJ1c2VyVGltZSIsInRpbWVab25lT2Zmc2V0IiwiRGF0ZSIsImxvY2FsVGltZSIsImdldFRpbWUiLCJsb2NhbFRpbWVPZmZzZXQiLCJnZXRUaW1lem9uZU9mZnNldCIsInV0Y1RpbWUiLCJsb2NhdGlvbk9mZnNldCIsImxvY2F0aW9uVGltZSIsInJlbmRlclVzZXJUaW1lIiwiZ2V0RGF5IiwiaG91ckFuZE1pbnV0ZXMiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJkaXNsYXlUaW1lIiwid2VhdGhlckNhcmQiLCJ3ZWF0aGVyZGVzYyIsImRlc2NyaXB0aW9uIiwibWF4VGVtcCIsInRlbXBfbWF4IiwibWluVGVtcCIsInRlbXBfbWluIiwiZmVlbHNMaWtlIiwiZmVlbHNfbGlrZSIsImh1bWlkaXR5Iiwid2luZCIsInNwZWVkIiwiY291bnRyeSIsInN5cyIsIm5hbWUiLCJ0aW1lWm9uZSIsInRpbWV6b25lIiwidGltZSIsImR0IiwiaWNvbiIsIndlYXRoZXJDYXJkQ29udGVudCIsIndlYXRoZXJDYXJkSGVhZGVyIiwiYXJ0aWNsZSIsImNvbnZlclRlbXBlcmF0dXJlVW5pdCIsIndlYXRoZXJJY29uIiwic3JjIiwiYWx0Iiwid2VhdGhlcmRlc2NyaXB0aW9uIiwid2VhdGhlckxlZnQiLCJjZWxzaXVzU3BhbiIsInRlbXBlcmF0dXJlIiwid2VhdGhlclJpZ2h0IiwiaHVtaWRpdHlJY29uIiwiaHVtaWRpdHlEaXYiLCJ3aW5kSWNvbiIsIndpbmREaXYiLCJwcmVzc3VyZUljb24iLCJwcmVzc3VyZSIsInByZXNzdXJlRGl2IiwibWF4VGVtcEljb24iLCJtYXhUZW1wRGl2IiwibWluVGVtcEljb24iLCJtaW5UZW1wRGl2Iiwib3RoZXJXZWF0aGVyRGV0YWlscyIsImRpdiIsImxvY2F0aW9uSWNvbiIsImhlYWRlckxlZnQiLCJjaGVja2JveCIsInRvZ2dsZU9uSWNvbiIsInRvZ2dsZU9mZkljb24iLCJsYWJlbCIsImZvciIsImZhaHJlbmhlaXRTcGFuIiwidG9nZ2xlcldyYXBwZXIiLCJoZWFkZXJSaWdodCIsImFwcCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9