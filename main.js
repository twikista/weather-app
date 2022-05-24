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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const styles = {
  cardStyles: "flex flex-col items-center justify-center text-center py-6 bg-slate-900 rounded-lg text-slate-300 px-2 h-[90%]",
  icons: "mb-2",
  footerIcons: "transition-color ease-in dutation-300 hover:text-indigo-400 hover:scale-125 text-lg",
  flexRowCenter: "flex flex-row items-center justify-center",
  flexColCenter: "flex flex-col justify-center items-center"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);

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

const setTemperatureUnit = (isToggled, weather) => {
  const temperatureLabel = document.querySelector(".temperature-value");
  temperatureLabel.innerHTML = "";
  const temp = isToggled ? toFahrenheit(weather[0].temp.toFixed(0)) : weather[0].temp.toFixed(0);
  temperatureLabel.append(temp, isToggled ? _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;F") : _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;C"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTemperatureUnit);

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkError": () => (/* binding */ checkError),
/* harmony export */   "displayOnError": () => (/* binding */ displayOnError)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");

function checkError(response) {
  if (response.status !== 200) {
    throw new Error("Can't get weather details");
  }

  return response;
}
function displayOnError(err, isLoading) {
  const sadFace = _helper__WEBPACK_IMPORTED_MODULE_0__.special("&lpar;&gt;&lowbar;&lt;&rpar;");
  const sadFaceSpan = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", [sadFace], {
    class: "text-4xl leading-normal tracking-tighter font-medium mb-1 sm:text-6xl sm:mb-3"
  });
  const errorMessage = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", [err.message], {
    class: "text-2xl sm:text-4xl font-medium"
  });
  const dashOne = _helper__WEBPACK_IMPORTED_MODULE_0__.degreeCharacter("&hyphen;");
  dashOne.classList.add("pr-[1px]");
  const dashTwo = _helper__WEBPACK_IMPORTED_MODULE_0__.degreeCharacter("&hyphen;");
  dashTwo.classList.add("pr-[1px]");
  const fixOne = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [dashOne, "check your internet connection"], null);
  const fixTwo = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [dashTwo, "ensure weather location is correctly spelt"], null);
  const fixSuggestion = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [fixOne, fixTwo], {
    class: "border-[1px] border-slate-400 rounded-lg px-2 py-2 mt-5"
  });
  const errorWrapper = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [sadFaceSpan, errorMessage, fixSuggestion], {
    class: "error-wrapper flex flex-col justify-center items-center h-4/5 mt-[0] sm:justify-center sm:h-[90%]"
  });
  const onErrorDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [errorWrapper], {
    class: "flex flex-col items-center justify-start font-sanspro text-slate-300 text-sm sm:text-base w-full h-full"
  }); // "home-section flex justify-center items-start px-4 text-justify h-full",

  const main = document.querySelector("main");
  main.innerHTML = "";
  main.append(onErrorDiv);
  isLoading = false;
  console.log(isLoading);
  return main;
}

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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");



 //get location from user input on form

function getLocation() {
  const form = document.querySelector("form");
  const input = form.elements["search-input"];
  const main = document.querySelector("main");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const location = input.value;
    (0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__["default"])(location);
    input.value = "";
  });
} //toggle check box to switch between temperature states


const toggler = () => {
  const mainElement = document.querySelector("main");
  mainElement.addEventListener("change", e => {
    const target = e.target;
    const isToggled = target.checked;
    (0,_convert_weather_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(isToggled, _transorm_data__WEBPACK_IMPORTED_MODULE_2__.weatherData);
    togglerSwitch(isToggled);
  });
};

function togglerSwitch(isToggled) {
  const toggleOn = document.querySelector(".toggle-on");
  const toggleOff = document.querySelector(".toggle-off");
  const celsius = document.querySelector(".celsius");
  const fahrenheit = document.querySelector(".fahrenheit");

  if (isToggled) {
    //switch toggler
    toggleOn.classList.remove("hidden");
    toggleOff.classList.add("hidden"); //switch between active weather unit

    celsius.classList.remove("text-purple-400");
    celsius.classList.add("text-gray-500");
    fahrenheit.classList.remove("text-gray-500");
    fahrenheit.classList.add("text-purple-400");
  }

  if (!isToggled) {
    toggleOn.classList.add("hidden");
    toggleOff.classList.remove("hidden");
    celsius.classList.add("text-purple-400");
    celsius.classList.remove("text-gray-500");
    fahrenheit.classList.add("text-gray-500");
    fahrenheit.classList.remove("text-purple-400");
  }
}

const focusInput = () => {
  const form = document.querySelector("form input");
  const callToActionBtn = document.querySelector(".call-to-action");
  callToActionBtn.addEventListener("click", e => {
    form.focus();
  });
}; //home


const backToHome = () => {
  const appLogo = document.querySelector(".app-logo");
  const mainElement = document.querySelector("main");
  appLogo.addEventListener("click", e => {
    mainElement.innerHTML = "";
    mainElement.append((0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])());
    focusInput();
  });
}; //initialize events


const events = () => {
  getLocation();
  toggler();
  focusInput();
  backToHome();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

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
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading */ "./src/loading.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./src/error.js");



let isLoading = true;

const getData = async city => {
  try {
    (0,_loading__WEBPACK_IMPORTED_MODULE_1__["default"])(isLoading);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ceb8852b9b6a1fd8a8191af7243397f&units=metric`;
    const response = await fetch(url);
    (0,_error__WEBPACK_IMPORTED_MODULE_2__.checkError)(response);
    isLoading = false;
    const data = await response.json();
    (0,_transorm_data__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    console.log(data);
    return data;
  } catch (err) {
    (0,_error__WEBPACK_IMPORTED_MODULE_2__.displayOnError)(err, isLoading);
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
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");



const footerSection = () => {
  //icons
  const github = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("i", null, {
    class: "fab fa-github"
  });
  const twitter = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("i", null, {
    class: "fab fa-twitter"
  });
  const linkedin = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("i", null, {
    class: "fab fa-linkedin "
  }); //links

  const githubLink = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("a", [github], {
    href: "https://github.com/twikista",
    class: `${_classes__WEBPACK_IMPORTED_MODULE_0__["default"].footerIcons}`,
    target: "_blank"
  });
  const twitterLink = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("a", [twitter], {
    href: "https://twitter.com/aaronanama",
    class: `${_classes__WEBPACK_IMPORTED_MODULE_0__["default"].footerIcons}`,
    target: "_blank"
  });
  const linkedinLink = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("a", [linkedin], {
    href: "https://www.linkedin.com/in/aaronanama",
    class: `${_classes__WEBPACK_IMPORTED_MODULE_0__["default"].footerIcons} `,
    target: "_blank"
  }); //footer-social icons wrapper

  const iconsWrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [githubLink, twitterLink, linkedinLink], {
    class: "flex justify-around w-3/5 mb-2"
  }); //copyright info

  const copyRightSymbol = _helper__WEBPACK_IMPORTED_MODULE_1__.special("&copy;2022");
  const copyRight = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("p", [copyRightSymbol, " aaronanama"], {
    class: " font-normal text-base"
  }); //wrapper

  const wrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [iconsWrapper, copyRight], {
    class: `${_classes__WEBPACK_IMPORTED_MODULE_0__["default"].flexColCenter} w-3/5 max-w-[480px]`
  }); //fragment

  const fragment = new DocumentFragment();
  fragment.append(wrapper); //footer element

  const footer = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("footer", [fragment], {
    class: `${_classes__WEBPACK_IMPORTED_MODULE_0__["default"].flexRowCenter} min-h-[50px] bg-gray-800 border-gray-700 w-full p-2 text-slate-300 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] mt-2`
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


const headerSection = () => {
  const fragment = new DocumentFragment();
  /******nav left section*****/

  const logoDeg = _helper__WEBPACK_IMPORTED_MODULE_0__.degreeCharacter("&deg;");
  logoDeg.classList.add("text-pink-400", "text-xl");
  const logo = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", ["weda", logoDeg], {
    class: "app-logo font-barlow font-semibold text-gray-400 text-2xl shadow-sky-500 cursor-pointer"
  });
  const navLeft = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [logo], {
    class: "mb-2 py-[1px] logo-container sm:flex-1 sm:ml-8"
  });
  /******nav right section*********/
  //create search box

  const searchInput = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("input", [], {
    type: "text",
    id: "search-input",
    placeholder: "Enter weather location ",
    class: "bg-transparent  outline-none apperance-none pl-8 py-2 h-full placeholder:text-sm focus:placeholder:text-indigo-200 placeholder:text-gray-300 font-fira",
    autocomplete: "off"
  }); //search icon

  const searchIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("i", [], {
    class: "fas fa-search text-slate-400 hover:text-indigo-300 "
  }); //create search button

  const searchButton = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", [searchIcon], {
    type: "submit",
    id: "search-btn",
    class: "border-l-2 border-l-slate-600 px-3 py-2 min-w-min h-full"
  }); //creat search form

  const form = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("form", [searchInput, searchButton], {
    class: "grid grid-cols-[1fr_auto] justify-center items-center w-[90%] max-w-xs rounded-full bg-gray-700 px-2 focus-within:bg-gray-900 focus-within:border-slate-600 focus-within:border-2 sm:justify-self-end shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px]"
  }); //

  const navRight = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [form], {
    class: "flex justify-center items-center w-full pb-2 sm:flex-3 sm:justify-end "
  });
  /*****nav element */

  const nav = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", [navLeft, navRight], {
    class: "flex flex-col justify-center items-center w-full sm:flex-row sm:justify-between max-w-[960px]"
  });
  fragment.append(nav);
  const header = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("header", [fragment], {
    class: " px-2 py-2 w-full flex justify-center bg-gray-800 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px]"
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
}; //create pecial character in a span


const degreeCharacter = char => {
  const degreeChar = document.createElement("span");
  degreeChar.innerHTML = char;
  return degreeChar;
}; //special character as a string


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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


function onPageLoad() {
  const header = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", ["Get Accurate Weather Details by the Second"], {
    class: "text-3xl sm:text-5xl uppercase font-barlow font-bold text-purple-400  text-center tracking-widest self-start "
  });
  const callToActionBtn = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", ["get started"], {
    class: "call-to-action  w-[120px] px-4 py-2 uppercase text-sm text-pink-400 border-pink-400 font-sanspro font-semibold rounded transition ease-in duration-200 hover:text-slate-400 hover:border-slate-400 border-2 mt-[60px] shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px;]"
  });
  const contentDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [header, callToActionBtn], {
    class: "flex flex-col justify-center items-center h-4/5 font-sanspro mt-[0] sm:justify-center mt-0"
  });
  const section = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("section", [contentDiv], {
    class: "home-section flex justify-center items-start px-4 text-justify h-full"
  });
  return section;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onPageLoad);

/***/ }),

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


function loading(isLoading) {
  const loadingDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", ["Loading..."], {
    class: "text-2xl flex flex-row justify-center items-center"
  });
  const main = document.querySelector("main");

  if (isLoading) {
    main.innerHTML = "";
    main.append(loadingDiv);
  }

  return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);

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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



const mainSection = () => {
  //main element
  const fragment = new DocumentFragment();
  fragment.append((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
  const main = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("main", [fragment], {
    class: "w-[90%] max-w-2xl flex flex-column justify-center items-center mx-auto bg-gray-900 relative"
  });
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
  return locationTime;
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

let weatherData = null;

const tranformData = data => {
  weatherData = [{
    weather: data.weather[0].main,
    weatherdesc: data.weather[0].description,
    temp: data.main.temp,
    maxTemp: data.main.temp_max.toFixed(0),
    minTemp: data.main.temp_min.toFixed(0),
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    wind: data.wind.speed,
    country: data.sys.country,
    city: data.name,
    timeZone: data.timezone,
    time: data.dt,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }];
  console.log(weatherData);
  (0,_weatherCard__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData);
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
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ "./src/loading.js");





const weatherCard = weather => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  weather.forEach(item => {
    const article = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("article", [(0,_weatherCardheader__WEBPACK_IMPORTED_MODULE_2__["default"])(item), (0,_weatherCardContent__WEBPACK_IMPORTED_MODULE_1__["default"])(item)], {
      class: "grid grid-cols-1 grid-rows-2 rounded h-full mt-3 mb-5 px-3"
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
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");



const weatherCardContent = weather => {
  const feelsLikeIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["thermostat"], {
    class: `material-icons-outlined ${_classes__WEBPACK_IMPORTED_MODULE_1__["default"].icons}`
  });
  const feelsLike = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`feels like: ${weather.feelsLike.toFixed(0)}`, _helper__WEBPACK_IMPORTED_MODULE_0__.special("&deg;")], null);
  const feelsLikeDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [feelsLikeIcon, feelsLike], {
    class: _classes__WEBPACK_IMPORTED_MODULE_1__["default"].cardStyles
  }); //humidity

  const humidityIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["water_drop"], {
    class: `material-icons-outlined ${_classes__WEBPACK_IMPORTED_MODULE_1__["default"].icons}`
  });
  const humidity = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`Humidity: ${weather.humidity}`], null);
  const humidityDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [humidityIcon, humidity], {
    class: _classes__WEBPACK_IMPORTED_MODULE_1__["default"].cardStyles
  }); //wind

  const windIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["air"], {
    class: `material-icons-outlined ${_classes__WEBPACK_IMPORTED_MODULE_1__["default"].icons}`
  });
  const wind = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`Wind: ${weather.wind.toFixed(0)} mps`], null);
  const windDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [windIcon, wind], {
    class: _classes__WEBPACK_IMPORTED_MODULE_1__["default"].cardStyles
  }); //pressure

  const pressureIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["science"], {
    class: `material-icons-outlined ${_classes__WEBPACK_IMPORTED_MODULE_1__["default"].icons}`
  });
  const pressure = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [weather.pressure], null);
  const pressureDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [pressureIcon, pressure], {
    class: _classes__WEBPACK_IMPORTED_MODULE_1__["default"].cardStyles
  });
  const fragment = new DocumentFragment();
  fragment.append(humidityDiv, windDiv, pressureDiv, feelsLikeDiv);
  const otherWeatherDetails = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [fragment], {
    class: "card-bottom bg-slate-800 grid grid-cols-2 grid-rows-2 gap-x-3 items-center justify-center px-4 py-2 font-fira text-sm rounded-lg shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] mb-3 "
  });
  return otherWeatherDetails;
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
  locationIcon.classList.add("text-xs", "text-indigo-400");
  const city = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [`${weather.city}, `], null);
  const location = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", [locationIcon, city, weather.country], {
    class: ""
  });
  const localTime = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", [`${(0,_timeAndDate__WEBPACK_IMPORTED_MODULE_2__["default"])(weather.timeZone)}`], null);
  const headerTop = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [location, localTime], {
    class: "header-top w-full flex justify-between items center text-sm text-indigo-200 font-barlow  font-light pt-2"
  });
  const arrow = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["arrow_right"], {
    class: "material-icons-outlined text-pink-500 align-middle "
  }); //weather icon

  const weatherIcon = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("img", [], {
    src: weather.icon,
    alt: "weather-icon",
    class: "self-start -mt-5 w-[110px] h-[110px]"
  }); //weather description

  const weatherdescription = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", [arrow, weather.weatherdesc], {
    class: "gray-400 font-fira font-light text-xs self-start justify-self-start w-[115px]"
  }); //weather icon and description wrapper

  const weatherLeft = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [weatherdescription, weatherIcon], {
    class: "flex flex-col items-center justify-center text-sm pt-3"
  }); //degree special character

  const deg = _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;"); // const celsiusSpan = helper.degreeCharacter("&#8451;");

  const celsiusSpan = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["C"], null); //celsiusSpan.classList.add("text-2xl", "align-top", "inline-block", "pt-2");
  //temperature value

  const temperature = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", [weather.temp.toFixed(0), deg, celsiusSpan], {
    class: "temperature-value text-5xl sm:text-7xl text-purple-400 mb-1"
  }); //maximum and minimum temperature

  const high = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["H:", weather.maxTemp, _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;")], null);
  const low = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["L:", weather.minTemp, _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;")], null);
  const mid = _helper__WEBPACK_IMPORTED_MODULE_1__.degreeCharacter("&mid;");
  mid.classList.add("px-[1px]", "text-base");
  const minMax = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", [high, mid, low], {
    class: "text-sm font-barlow semibold flex items-center justify-center text-indigo-300"
  });
  const tempWrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [temperature, minMax], {
    class: "temp-wrapper w-4/5 flex-auto flex flex-col items-center justify-center"
  }); //header right

  const checkbox = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("input", null, {
    type: "checkbox",
    id: "temp-toggler",
    class: "checkbox hidden"
  }); //label

  const toggleOnIcon = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["toggle_on"], {
    class: "material-icons-outlined text-2xl  hidden toggle-on transition-[display] duration-700 ease-in "
  });
  const toggleOffIcon = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["toggle_off"], {
    class: "material-icons-outlined text-2xl toggle-off transition-[display] duration-700 ease-in"
  });
  const label = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("label", [toggleOffIcon, toggleOnIcon], {
    class: "toggler px-1 flex text-xs text-indigo-300 cursor-pointer",
    for: "temp-toggler"
  });
  const fahrenheitSymbol = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [_helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;F")], null);
  _helper__WEBPACK_IMPORTED_MODULE_1__.addClass(fahrenheitSymbol, ["align-text-center", "fahrenheit", "text-gray-500", "text-sm"]);
  const celsiusSymbol = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [_helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;C")], null);
  _helper__WEBPACK_IMPORTED_MODULE_1__.addClass(celsiusSymbol, ["align-text-center", "celsius", "text-purple-400", "text-sm"]);
  const togglers = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [celsiusSymbol, checkbox, label, fahrenheitSymbol], {
    class: "togglers flex items-center font-akshar font-semibold"
  });
  const togglersWrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [togglers], {
    class: "togglers-wrapper flex items-center self-end mt-auto"
  }); //temperature and minmax wrapper

  const weatherRight = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [tempWrapper, togglersWrapper], {
    class: "weather-right flex flex-col justify-center items-center"
  }); //weather

  const divMid = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [], {
    class: "w-[1px] bg-slate-600 h-[96px] self-center justify-self-end"
  });
  const weatherWrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [weatherLeft, weatherRight], {
    class: "weather-wrappper grid grid-cols-[1fr_1fr] grid-rows-1 gap-x-2 w-full h-full"
  });
  const fragment = new DocumentFragment();
  fragment.append(headerTop, weatherWrapper);
  const header = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("header", [fragment], {
    class: "card-header grid grid-rows-[50px_1fr] grid-cols-1 justify-center items-center w-full bg-slate-800 mb-3 mt-5 pt-2 px-4 rounded-lg shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] font-sanspro"
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.relative {\n  position: relative;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-\\[0\\] {\n  margin-top: 0;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-\\[60px\\] {\n  margin-top: 60px;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.-mt-5 {\n  margin-top: -1.25rem;\n}\n.mt-auto {\n  margin-top: auto;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-\\[90\\%\\] {\n  height: 90%;\n}\n.h-4\\/5 {\n  height: 80%;\n}\n.h-full {\n  height: 100%;\n}\n.h-\\[110px\\] {\n  height: 110px;\n}\n.h-\\[96px\\] {\n  height: 96px;\n}\n.min-h-\\[50px\\] {\n  min-height: 50px;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-full {\n  width: 100%;\n}\n.w-3\\/5 {\n  width: 60%;\n}\n.w-\\[90\\%\\] {\n  width: 90%;\n}\n.w-\\[120px\\] {\n  width: 120px;\n}\n.w-\\[110px\\] {\n  width: 110px;\n}\n.w-\\[115px\\] {\n  width: 115px;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.w-\\[1px\\] {\n  width: 1px;\n}\n.min-w-min {\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n.max-w-\\[480px\\] {\n  max-width: 480px;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.max-w-\\[960px\\] {\n  max-width: 960px;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.flex-auto {\n  flex: 1 1 auto;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.grid-cols-\\[1fr_auto\\] {\n  grid-template-columns: 1fr auto;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-\\[1fr_1fr\\] {\n  grid-template-columns: 1fr 1fr;\n}\n.grid-rows-\\[auto_1fr_auto\\] {\n  grid-template-rows: auto 1fr auto;\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-1 {\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n}\n.grid-rows-\\[50px_1fr\\] {\n  grid-template-rows: 50px 1fr;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.gap-x-3 {\n  -moz-column-gap: 0.75rem;\n       column-gap: 0.75rem;\n}\n.gap-x-2 {\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n}\n.self-start {\n  align-self: flex-start;\n}\n.self-end {\n  align-self: flex-end;\n}\n.self-center {\n  align-self: center;\n}\n.justify-self-start {\n  justify-self: start;\n}\n.justify-self-end {\n  justify-self: end;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.border-\\[1px\\] {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-l-2 {\n  border-left-width: 2px;\n}\n.border-slate-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(148 163 184 / var(--tw-border-opacity));\n}\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n}\n.border-pink-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(244 114 182 / var(--tw-border-opacity));\n}\n.border-l-slate-600 {\n  --tw-border-opacity: 1;\n  border-left-color: rgb(71 85 105 / var(--tw-border-opacity));\n}\n.bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.bg-slate-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n}\n.bg-slate-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(71 85 105 / var(--tw-bg-opacity));\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-\\[1px\\] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-\\[1px\\] {\n  padding-left: 1px;\n  padding-right: 1px;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.pr-\\[1px\\] {\n  padding-right: 1px;\n}\n.pl-8 {\n  padding-left: 2rem;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.pt-3 {\n  padding-top: 0.75rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.align-top {\n  vertical-align: top;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.font-sanspro {\n  font-family: source sans pro, sans-serif;\n}\n.font-barlow {\n  font-family: Barlow, sans-serif;\n}\n.font-fira {\n  font-family: Fira sans, sans-serfif;\n}\n.font-akshar {\n  font-family: Akshar, sans-serif;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-light {\n  font-weight: 300;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.tracking-tighter {\n  letter-spacing: -0.05em;\n}\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n.text-slate-300 {\n  --tw-text-opacity: 1;\n  color: rgb(203 213 225 / var(--tw-text-opacity));\n}\n.text-purple-400 {\n  --tw-text-opacity: 1;\n  color: rgb(192 132 252 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-pink-400 {\n  --tw-text-opacity: 1;\n  color: rgb(244 114 182 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n.text-indigo-400 {\n  --tw-text-opacity: 1;\n  color: rgb(129 140 248 / var(--tw-text-opacity));\n}\n.text-indigo-200 {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.text-pink-500 {\n  --tw-text-opacity: 1;\n  color: rgb(236 72 153 / var(--tw-text-opacity));\n}\n.text-indigo-300 {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\n.shadow-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.12\\)_0px_1px_3px\\2c rgba\\(0\\2c 0\\2c 0\\2c 0\\.24\\)_0px_1px_2px\\] {\n  --tw-shadow: rgba(0,0,0,0.12) 0px 1px 3px,rgba(0,0,0,0.24) 0px 1px 2px;\n  --tw-shadow-colored: 0px 1px 3px var(--tw-shadow-color), 0px 1px 2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-\\[rgba\\(60\\2c 64\\2c 67\\2c 0\\.3\\)_0px_1px_2px_0px\\2c rgba\\(60\\2c 64\\2c 67\\2c 0\\.15\\)_0px_2px_6px_2px\\] {\n  --tw-shadow: rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 2px 6px 2px;\n  --tw-shadow-colored: 0px 1px 2px 0px var(--tw-shadow-color), 0px 2px 6px 2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.16\\)_0px_3px_6px\\2c rgba\\(0\\2c 0\\2c 0\\2c 0\\.23\\)_0px_3px_6px\\] {\n  --tw-shadow: rgba(0,0,0,0.16) 0px 3px 6px,rgba(0,0,0,0.23) 0px 3px 6px;\n  --tw-shadow-colored: 0px 3px 6px var(--tw-shadow-color), 0px 3px 6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sky-500 {\n  --tw-shadow-color: #0ea5e9;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[display\\] {\n  transition-property: display;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-700 {\n  transition-duration: 700ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.placeholder\\:text-sm::-moz-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm:-ms-input-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm::placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-gray-300::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-300:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-300::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.focus-within\\:border-2:focus-within {\n  border-width: 2px;\n}\n.focus-within\\:border-slate-600:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity));\n}\n.focus-within\\:bg-gray-900:focus-within {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.hover\\:scale-125:hover {\n  --tw-scale-x: 1.25;\n  --tw-scale-y: 1.25;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:border-slate-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(148 163 184 / var(--tw-border-opacity));\n}\n.hover\\:text-indigo-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(129 140 248 / var(--tw-text-opacity));\n}\n.hover\\:text-indigo-300:hover {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\n.hover\\:text-slate-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n.focus\\:placeholder\\:text-indigo-200:focus::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.focus\\:placeholder\\:text-indigo-200:focus:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.focus\\:placeholder\\:text-indigo-200:focus::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n@media (min-width: 640px) {\n\n  .sm\\:mb-3 {\n    margin-bottom: 0.75rem;\n  }\n\n  .sm\\:ml-8 {\n    margin-left: 2rem;\n  }\n\n  .sm\\:h-\\[90\\%\\] {\n    height: 90%;\n  }\n\n  .sm\\:flex-1 {\n    flex: 1 1 0%;\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .sm\\:justify-center {\n    justify-content: center;\n  }\n\n  .sm\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .sm\\:justify-self-end {\n    justify-self: end;\n  }\n\n  .sm\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-7xl {\n    font-size: 4.5rem;\n    line-height: 1;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;",null],"sourceRoot":""}]);
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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/footer.js");





const fragment = new DocumentFragment();
fragment.append((0,_header__WEBPACK_IMPORTED_MODULE_2__["default"])(), (0,_main__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_footer__WEBPACK_IMPORTED_MODULE_4__["default"])());
const app = document.querySelector(".app");
app.append(fragment);
app.classList.add("grid", "grid-rows-[auto_1fr_auto]", "min-h-screen", "w-full", "font-sanspro");
document.body.classList.add("bg-gray-900", "text-gray-200", "min-h-screen", "w-full");
(0,_events__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxN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QUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTW5GLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtBQUNBRCxRQUFRLENBQUNyRSxNQUFULENBQWdCd0UsbURBQWEsRUFBN0IsRUFBaUNvQyxpREFBVyxFQUE1QyxFQUFnRG5ELG1EQUFhLEVBQTdEO0FBQ0EsTUFBTXNJLEdBQUcsR0FBR25NLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFaO0FBQ0FrTSxHQUFHLENBQUMvTCxNQUFKLENBQVdxRSxRQUFYO0FBQ0EwSCxHQUFHLENBQUM5SyxTQUFKLENBQWNDLEdBQWQsQ0FDRSxNQURGLEVBRUUsMkJBRkYsRUFHRSxjQUhGLEVBSUUsUUFKRixFQUtFLGNBTEY7QUFRQXRCLFFBQVEsQ0FBQ29NLElBQVQsQ0FBYy9LLFNBQWQsQ0FBd0JDLEdBQXhCLENBQ0UsYUFERixFQUVFLGVBRkYsRUFHRSxjQUhGLEVBSUUsUUFKRjtBQU9BZ0MsbURBQU0sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29udmVydC13ZWF0aGVyLXVuaXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2FkaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdGltZUFuZERhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdHJhbnNvcm0tZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQ2FyZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckNhcmRoZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkU3R5bGVzOlxuICAgIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgcHktNiBiZy1zbGF0ZS05MDAgcm91bmRlZC1sZyB0ZXh0LXNsYXRlLTMwMCBweC0yIGgtWzkwJV1cIixcbiAgaWNvbnM6IFwibWItMlwiLFxuICBmb290ZXJJY29uczpcbiAgICBcInRyYW5zaXRpb24tY29sb3IgZWFzZS1pbiBkdXRhdGlvbi0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tNDAwIGhvdmVyOnNjYWxlLTEyNSB0ZXh0LWxnXCIsXG4gIGZsZXhSb3dDZW50ZXI6IFwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIixcbiAgZmxleENvbENlbnRlcjogXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIiwiaW1wb3J0IHsgdG9nZ2xlciB9IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG4vL2NvbnZlcnQga2VsdmluIHVuaXQgdG8gRmFocmVuaGVpdFxuZnVuY3Rpb24gdG9GYWhyZW5oZWl0KGNlbHNpdXMpIHtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGNlbHNpdXMgKiAxLjggKyAzMjtcbiAgY29uc29sZS5sb2coZmFocmVuaGVpdC50b0ZpeGVkKDApKTtcbiAgcmV0dXJuIGZhaHJlbmhlaXQudG9GaXhlZCgwKTtcbn1cblxuLy9jb252ZXJ0IGtlbHZpbiB1bml0IHRvIENlbHNpdXNcbmZ1bmN0aW9uIHRvQ2Vsc2l1cyhrZWx2aW5Vbml0KSB7XG4gIGNvbnN0IGNlbHNpdXMgPSBrZWx2aW5Vbml0IC0gMjczLjE1O1xuICByZXR1cm4gY2Vsc2l1cy50b0ZpeGVkKDApO1xufVxuXG5jb25zdCBzZXRUZW1wZXJhdHVyZVVuaXQgPSAoaXNUb2dnbGVkLCB3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlLXZhbHVlXCIpO1xuICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IHRlbXAgPSBpc1RvZ2dsZWRcbiAgICA/IHRvRmFocmVuaGVpdCh3ZWF0aGVyWzBdLnRlbXAudG9GaXhlZCgwKSlcbiAgICA6IHdlYXRoZXJbMF0udGVtcC50b0ZpeGVkKDApO1xuXG4gIHRlbXBlcmF0dXJlTGFiZWwuYXBwZW5kKFxuICAgIHRlbXAsXG4gICAgaXNUb2dnbGVkID8gaGVscGVyLnNwZWNpYWwoXCImZGVnO0ZcIikgOiBoZWxwZXIuc3BlY2lhbChcIiZkZWc7Q1wiKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0VGVtcGVyYXR1cmVVbml0O1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFcnJvcihyZXNwb25zZSkge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBnZXQgd2VhdGhlciBkZXRhaWxzXCIpO1xuICB9XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlPbkVycm9yKGVyciwgaXNMb2FkaW5nKSB7XG4gIGNvbnN0IHNhZEZhY2UgPSBoZWxwZXIuc3BlY2lhbChcIiZscGFyOyZndDsmbG93YmFyOyZsdDsmcnBhcjtcIik7XG4gIGNvbnN0IHNhZEZhY2VTcGFuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtzYWRGYWNlXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJ0ZXh0LTR4bCBsZWFkaW5nLW5vcm1hbCB0cmFja2luZy10aWdodGVyIGZvbnQtbWVkaXVtIG1iLTEgc206dGV4dC02eGwgc206bWItM1wiLFxuICB9KTtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBbZXJyLm1lc3NhZ2VdLCB7XG4gICAgY2xhc3M6IFwidGV4dC0yeGwgc206dGV4dC00eGwgZm9udC1tZWRpdW1cIixcbiAgfSk7XG5cbiAgY29uc3QgZGFzaE9uZSA9IGhlbHBlci5kZWdyZWVDaGFyYWN0ZXIoXCImaHlwaGVuO1wiKTtcbiAgZGFzaE9uZS5jbGFzc0xpc3QuYWRkKFwicHItWzFweF1cIik7XG4gIGNvbnN0IGRhc2hUd28gPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJmh5cGhlbjtcIik7XG4gIGRhc2hUd28uY2xhc3NMaXN0LmFkZChcInByLVsxcHhdXCIpO1xuXG4gIGNvbnN0IGZpeE9uZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtkYXNoT25lLCBcImNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvblwiXSxcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IGZpeFR3byA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtkYXNoVHdvLCBcImVuc3VyZSB3ZWF0aGVyIGxvY2F0aW9uIGlzIGNvcnJlY3RseSBzcGVsdFwiXSxcbiAgICBudWxsXG4gICk7XG5cbiAgY29uc3QgZml4U3VnZ2VzdGlvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmaXhPbmUsIGZpeFR3b10sIHtcbiAgICBjbGFzczogXCJib3JkZXItWzFweF0gYm9yZGVyLXNsYXRlLTQwMCByb3VuZGVkLWxnIHB4LTIgcHktMiBtdC01XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGVycm9yV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW3NhZEZhY2VTcGFuLCBlcnJvck1lc3NhZ2UsIGZpeFN1Z2dlc3Rpb25dLFxuICAgIHtcbiAgICAgIGNsYXNzOlxuICAgICAgICBcImVycm9yLXdyYXBwZXIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC00LzUgbXQtWzBdIHNtOmp1c3RpZnktY2VudGVyIHNtOmgtWzkwJV1cIixcbiAgICB9XG4gICk7XG5cbiAgY29uc3Qgb25FcnJvckRpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtlcnJvcldyYXBwZXJdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgZm9udC1zYW5zcHJvIHRleHQtc2xhdGUtMzAwIHRleHQtc20gc206dGV4dC1iYXNlIHctZnVsbCBoLWZ1bGxcIixcbiAgfSk7XG4gIC8vIFwiaG9tZS1zZWN0aW9uIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgcHgtNCB0ZXh0LWp1c3RpZnkgaC1mdWxsXCIsXG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kKG9uRXJyb3JEaXYpO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgY29uc29sZS5sb2coaXNMb2FkaW5nKTtcbiAgcmV0dXJuIG1haW47XG59XG4iLCJpbXBvcnQgc2V0VGVtcGVyYXR1cmVVbml0IGZyb20gXCIuL2NvbnZlcnQtd2VhdGhlci11bml0XCI7XG5pbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG5pbXBvcnQgeyB3ZWF0aGVyRGF0YSB9IGZyb20gXCIuL3RyYW5zb3JtLWRhdGFcIjtcbmltcG9ydCBvblBhZ2VMb2FkIGZyb20gXCIuL2hvbWVcIjtcblxuLy9nZXQgbG9jYXRpb24gZnJvbSB1c2VyIGlucHV0IG9uIGZvcm1cbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gIGNvbnN0IGlucHV0ID0gZm9ybS5lbGVtZW50c1tcInNlYXJjaC1pbnB1dFwiXTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBpbnB1dC52YWx1ZTtcbiAgICBnZXREYXRhKGxvY2F0aW9uKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH0pO1xufVxuXG4vL3RvZ2dsZSBjaGVjayBib3ggdG8gc3dpdGNoIGJldHdlZW4gdGVtcGVyYXR1cmUgc3RhdGVzXG5jb25zdCB0b2dnbGVyID0gKCkgPT4ge1xuICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgaXNUb2dnbGVkID0gdGFyZ2V0LmNoZWNrZWQ7XG4gICAgc2V0VGVtcGVyYXR1cmVVbml0KGlzVG9nZ2xlZCwgd2VhdGhlckRhdGEpO1xuICAgIHRvZ2dsZXJTd2l0Y2goaXNUb2dnbGVkKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiB0b2dnbGVyU3dpdGNoKGlzVG9nZ2xlZCkge1xuICBjb25zdCB0b2dnbGVPbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLW9uXCIpO1xuICBjb25zdCB0b2dnbGVPZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1vZmZcIik7XG4gIGNvbnN0IGNlbHNpdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbHNpdXNcIik7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhaHJlbmhlaXRcIik7XG4gIGlmIChpc1RvZ2dsZWQpIHtcbiAgICAvL3N3aXRjaCB0b2dnbGVyXG4gICAgdG9nZ2xlT24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB0b2dnbGVPZmYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAvL3N3aXRjaCBiZXR3ZWVuIGFjdGl2ZSB3ZWF0aGVyIHVuaXRcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXB1cnBsZS00MDBcIik7XG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QuYWRkKFwidGV4dC1ncmF5LTUwMFwiKTtcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWdyYXktNTAwXCIpO1xuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZChcInRleHQtcHVycGxlLTQwMFwiKTtcbiAgfVxuXG4gIGlmICghaXNUb2dnbGVkKSB7XG4gICAgdG9nZ2xlT24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB0b2dnbGVPZmYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICAgIGNlbHNpdXMuY2xhc3NMaXN0LmFkZChcInRleHQtcHVycGxlLTQwMFwiKTtcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWdyYXktNTAwXCIpO1xuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZChcInRleHQtZ3JheS01MDBcIik7XG4gICAgZmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1wdXJwbGUtNDAwXCIpO1xuICB9XG59XG5cbmNvbnN0IGZvY3VzSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBpbnB1dFwiKTtcbiAgY29uc3QgY2FsbFRvQWN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxsLXRvLWFjdGlvblwiKTtcbiAgY2FsbFRvQWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGZvcm0uZm9jdXMoKTtcbiAgfSk7XG59O1xuXG4vL2hvbWVcblxuY29uc3QgYmFja1RvSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgYXBwTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWxvZ29cIik7XG4gIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGFwcExvZ28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbWFpbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluRWxlbWVudC5hcHBlbmQob25QYWdlTG9hZCgpKTtcbiAgICBmb2N1c0lucHV0KCk7XG4gIH0pO1xufTtcblxuLy9pbml0aWFsaXplIGV2ZW50c1xuY29uc3QgZXZlbnRzID0gKCkgPT4ge1xuICBnZXRMb2NhdGlvbigpO1xuICB0b2dnbGVyKCk7XG4gIGZvY3VzSW5wdXQoKTtcbiAgYmFja1RvSG9tZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzO1xuIiwiaW1wb3J0IHRyYW5mb3JtRGF0YSBmcm9tIFwiLi90cmFuc29ybS1kYXRhXCI7XG5pbXBvcnQgbG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgeyBjaGVja0Vycm9yLCBkaXNwbGF5T25FcnJvciB9IGZyb20gXCIuL2Vycm9yXCI7XG5cbmxldCBpc0xvYWRpbmcgPSB0cnVlO1xuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIHRyeSB7XG4gICAgbG9hZGluZyhpc0xvYWRpbmcpO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9M2NlYjg4NTJiOWI2YTFmZDhhODE5MWFmNzI0MzM5N2YmdW5pdHM9bWV0cmljYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY2hlY2tFcnJvcihyZXNwb25zZSk7XG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB0cmFuZm9ybURhdGEoZGF0YSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRpc3BsYXlPbkVycm9yKGVyciwgaXNMb2FkaW5nKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBmb290ZXJTZWN0aW9uID0gKCkgPT4ge1xuICAvL2ljb25zXG4gIGNvbnN0IGdpdGh1YiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7IGNsYXNzOiBcImZhYiBmYS1naXRodWJcIiB9KTtcbiAgY29uc3QgdHdpdHRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7IGNsYXNzOiBcImZhYiBmYS10d2l0dGVyXCIgfSk7XG4gIGNvbnN0IGxpbmtlZGluID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHtcbiAgICBjbGFzczogXCJmYWIgZmEtbGlua2VkaW4gXCIsXG4gIH0pO1xuICAvL2xpbmtzXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImFcIiwgW2dpdGh1Yl0sIHtcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90d2lraXN0YVwiLFxuICAgIGNsYXNzOiBgJHtzdHlsZXMuZm9vdGVySWNvbnN9YCxcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gIH0pO1xuICBjb25zdCB0d2l0dGVyTGluayA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYVwiLCBbdHdpdHRlcl0sIHtcbiAgICBocmVmOiBcImh0dHBzOi8vdHdpdHRlci5jb20vYWFyb25hbmFtYVwiLFxuICAgIGNsYXNzOiBgJHtzdHlsZXMuZm9vdGVySWNvbnN9YCxcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gIH0pO1xuICBjb25zdCBsaW5rZWRpbkxpbmsgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImFcIiwgW2xpbmtlZGluXSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Fhcm9uYW5hbWFcIixcbiAgICBjbGFzczogYCR7c3R5bGVzLmZvb3Rlckljb25zfSBgLFxuICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgfSk7XG5cbiAgLy9mb290ZXItc29jaWFsIGljb25zIHdyYXBwZXJcbiAgY29uc3QgaWNvbnNXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbZ2l0aHViTGluaywgdHdpdHRlckxpbmssIGxpbmtlZGluTGlua10sXG4gICAgeyBjbGFzczogXCJmbGV4IGp1c3RpZnktYXJvdW5kIHctMy81IG1iLTJcIiB9XG4gICk7XG5cbiAgLy9jb3B5cmlnaHQgaW5mb1xuICBjb25zdCBjb3B5UmlnaHRTeW1ib2wgPSBoZWxwZXIuc3BlY2lhbChcIiZjb3B5OzIwMjJcIik7XG4gIGNvbnN0IGNvcHlSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtjb3B5UmlnaHRTeW1ib2wsIFwiIGFhcm9uYW5hbWFcIl0sXG4gICAge1xuICAgICAgY2xhc3M6IFwiIGZvbnQtbm9ybWFsIHRleHQtYmFzZVwiLFxuICAgIH1cbiAgKTtcblxuICAvL3dyYXBwZXJcbiAgY29uc3Qgd3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtpY29uc1dyYXBwZXIsIGNvcHlSaWdodF0sIHtcbiAgICBjbGFzczogYCR7c3R5bGVzLmZsZXhDb2xDZW50ZXJ9IHctMy81IG1heC13LVs0ODBweF1gLFxuICB9KTtcblxuICAvL2ZyYWdtZW50XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKHdyYXBwZXIpO1xuICAvL2Zvb3RlciBlbGVtZW50XG4gIGNvbnN0IGZvb3RlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczogYCR7c3R5bGVzLmZsZXhSb3dDZW50ZXJ9IG1pbi1oLVs1MHB4XSBiZy1ncmF5LTgwMCBib3JkZXItZ3JheS03MDAgdy1mdWxsIHAtMiB0ZXh0LXNsYXRlLTMwMCBzaGFkb3ctW3JnYmEoMCwwLDAsMC4xMilfMHB4XzFweF8zcHgscmdiYSgwLDAsMCwwLjI0KV8wcHhfMXB4XzJweF0gbXQtMmAsXG4gIH0pO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJTZWN0aW9uO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBoZWFkZXJTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgLyoqKioqKm5hdiBsZWZ0IHNlY3Rpb24qKioqKi9cbiAgY29uc3QgbG9nb0RlZyA9IGhlbHBlci5kZWdyZWVDaGFyYWN0ZXIoXCImZGVnO1wiKTtcbiAgbG9nb0RlZy5jbGFzc0xpc3QuYWRkKFwidGV4dC1waW5rLTQwMFwiLCBcInRleHQteGxcIik7XG4gIGNvbnN0IGxvZ28gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImgyXCIsIFtcIndlZGFcIiwgbG9nb0RlZ10sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiYXBwLWxvZ28gZm9udC1iYXJsb3cgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNDAwIHRleHQtMnhsIHNoYWRvdy1za3ktNTAwIGN1cnNvci1wb2ludGVyXCIsXG4gIH0pO1xuICBjb25zdCBuYXZMZWZ0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2xvZ29dLCB7XG4gICAgY2xhc3M6IFwibWItMiBweS1bMXB4XSBsb2dvLWNvbnRhaW5lciBzbTpmbGV4LTEgc206bWwtOFwiLFxuICB9KTtcblxuICAvKioqKioqbmF2IHJpZ2h0IHNlY3Rpb24qKioqKioqKiovXG5cbiAgLy9jcmVhdGUgc2VhcmNoIGJveFxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgW10sIHtcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBpZDogXCJzZWFyY2gtaW5wdXRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJFbnRlciB3ZWF0aGVyIGxvY2F0aW9uIFwiLFxuICAgIGNsYXNzOlxuICAgICAgXCJiZy10cmFuc3BhcmVudCAgb3V0bGluZS1ub25lIGFwcGVyYW5jZS1ub25lIHBsLTggcHktMiBoLWZ1bGwgcGxhY2Vob2xkZXI6dGV4dC1zbSBmb2N1czpwbGFjZWhvbGRlcjp0ZXh0LWluZGlnby0yMDAgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTMwMCBmb250LWZpcmFcIixcbiAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gIH0pO1xuXG4gIC8vc2VhcmNoIGljb25cbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBbXSwge1xuICAgIGNsYXNzOiBcImZhcyBmYS1zZWFyY2ggdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1pbmRpZ28tMzAwIFwiLFxuICB9KTtcblxuICAvL2NyZWF0ZSBzZWFyY2ggYnV0dG9uXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtzZWFyY2hJY29uXSwge1xuICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgaWQ6IFwic2VhcmNoLWJ0blwiLFxuICAgIGNsYXNzOiBcImJvcmRlci1sLTIgYm9yZGVyLWwtc2xhdGUtNjAwIHB4LTMgcHktMiBtaW4tdy1taW4gaC1mdWxsXCIsXG4gIH0pO1xuXG4gIC8vY3JlYXQgc2VhcmNoIGZvcm1cbiAgY29uc3QgZm9ybSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBbc2VhcmNoSW5wdXQsIHNlYXJjaEJ1dHRvbl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiZ3JpZCBncmlkLWNvbHMtWzFmcl9hdXRvXSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1bOTAlXSBtYXgtdy14cyByb3VuZGVkLWZ1bGwgYmctZ3JheS03MDAgcHgtMiBmb2N1cy13aXRoaW46YmctZ3JheS05MDAgZm9jdXMtd2l0aGluOmJvcmRlci1zbGF0ZS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci0yIHNtOmp1c3RpZnktc2VsZi1lbmQgc2hhZG93LVtyZ2JhKDYwLDY0LDY3LDAuMylfMHB4XzFweF8ycHhfMHB4LHJnYmEoNjAsNjQsNjcsMC4xNSlfMHB4XzJweF82cHhfMnB4XVwiLFxuICB9KTtcblxuICAvL1xuICBjb25zdCBuYXZSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmb3JtXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcGItMiBzbTpmbGV4LTMgc206anVzdGlmeS1lbmQgXCIsXG4gIH0pO1xuXG4gIC8qKioqKm5hdiBlbGVtZW50ICovXG4gIGNvbnN0IG5hdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibmF2XCIsIFtuYXZMZWZ0LCBuYXZSaWdodF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIHNtOmZsZXgtcm93IHNtOmp1c3RpZnktYmV0d2VlbiBtYXgtdy1bOTYwcHhdXCIsXG4gIH0pO1xuXG4gIGZyYWdtZW50LmFwcGVuZChuYXYpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiIHB4LTIgcHktMiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTgwMCBzaGFkb3ctW3JnYmEoMCwwLDAsMC4xMilfMHB4XzFweF8zcHgscmdiYSgwLDAsMCwwLjI0KV8wcHhfMXB4XzJweF1cIixcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTZWN0aW9uO1xuIiwiZnVuY3Rpb24gYWRkQ2xhc3MoZWxlLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMuZm9yRWFjaCgoaSkgPT4gZWxlLmNsYXNzTGlzdC5hZGQoaSkpO1xufVxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgbm9kZSwgYXR0cmlidXRlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChub2RlKSB7XG4gICAgbm9kZS5mb3JFYWNoKChpKSA9PiBlbGVtZW50LmFwcGVuZChpKSk7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZSkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGUpO1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoaSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlW2ldKSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vY3JlYXRlIHBlY2lhbCBjaGFyYWN0ZXIgaW4gYSBzcGFuXG5jb25zdCBkZWdyZWVDaGFyYWN0ZXIgPSAoY2hhcikgPT4ge1xuICBjb25zdCBkZWdyZWVDaGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRlZ3JlZUNoYXIuaW5uZXJIVE1MID0gY2hhcjtcbiAgcmV0dXJuIGRlZ3JlZUNoYXI7XG59O1xuXG4vL3NwZWNpYWwgY2hhcmFjdGVyIGFzIGEgc3RyaW5nXG5jb25zdCBzcGVjaWFsID0gKGNoYXIpID0+IHtcbiAgY29uc3QgY2hhcmFjdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNoYXJhY3Rlci5pbm5lckhUTUwgPSBjaGFyO1xuICBjb25zdCByZWNoYXIgPSBjaGFyYWN0ZXIudGV4dENvbnRlbnQ7XG4gIHJldHVybiByZWNoYXI7XG59O1xuXG5jb25zdCBhZGRJY29uID0gKGtleXdvcmQsIHN0eWxlcykgPT4ge1xuICBjb25zdCBzcGFuID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW2tleXdvcmRdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIixcbiAgfSk7XG4gIGFkZENsYXNzKHNwYW4sIHN0eWxlcyk7XG4gIHJldHVybiBzcGFuO1xufTtcblxuZXhwb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQsIGRlZ3JlZUNoYXJhY3RlciwgYWRkSWNvbiwgc3BlY2lhbCB9O1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG5mdW5jdGlvbiBvblBhZ2VMb2FkKCkge1xuICBjb25zdCBoZWFkZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgyXCIsXG4gICAgW1wiR2V0IEFjY3VyYXRlIFdlYXRoZXIgRGV0YWlscyBieSB0aGUgU2Vjb25kXCJdLFxuICAgIHtcbiAgICAgIGNsYXNzOlxuICAgICAgICBcInRleHQtM3hsIHNtOnRleHQtNXhsIHVwcGVyY2FzZSBmb250LWJhcmxvdyBmb250LWJvbGQgdGV4dC1wdXJwbGUtNDAwICB0ZXh0LWNlbnRlciB0cmFja2luZy13aWRlc3Qgc2VsZi1zdGFydCBcIixcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgY2FsbFRvQWN0aW9uQnRuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiZ2V0IHN0YXJ0ZWRcIl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiY2FsbC10by1hY3Rpb24gIHctWzEyMHB4XSBweC00IHB5LTIgdXBwZXJjYXNlIHRleHQtc20gdGV4dC1waW5rLTQwMCBib3JkZXItcGluay00MDAgZm9udC1zYW5zcHJvIGZvbnQtc2VtaWJvbGQgcm91bmRlZCB0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMjAwIGhvdmVyOnRleHQtc2xhdGUtNDAwIGhvdmVyOmJvcmRlci1zbGF0ZS00MDAgYm9yZGVyLTIgbXQtWzYwcHhdIHNoYWRvdy1bcmdiYSg2MCw2NCw2NywwLjMpXzBweF8xcHhfMnB4XzBweCxyZ2JhKDYwLDY0LDY3LDAuMTUpXzBweF8ycHhfNnB4XzJweDtdXCIsXG4gIH0pO1xuICBjb25zdCBjb250ZW50RGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2hlYWRlciwgY2FsbFRvQWN0aW9uQnRuXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLTQvNSBmb250LXNhbnNwcm8gbXQtWzBdIHNtOmp1c3RpZnktY2VudGVyIG10LTBcIixcbiAgfSk7XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBbY29udGVudERpdl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiaG9tZS1zZWN0aW9uIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgcHgtNCB0ZXh0LWp1c3RpZnkgaC1mdWxsXCIsXG4gIH0pO1xuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb25QYWdlTG9hZDtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuZnVuY3Rpb24gbG9hZGluZyhpc0xvYWRpbmcpIHtcbiAgY29uc3QgbG9hZGluZ0RpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIkxvYWRpbmcuLi5cIl0sIHtcbiAgICBjbGFzczogXCJ0ZXh0LTJ4bCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiLFxuICB9KTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kKGxvYWRpbmdEaXYpO1xuICB9XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRpbmc7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgb25QYWdlTG9hZCBmcm9tIFwiLi9ob21lXCI7XG5cbmNvbnN0IG1haW5TZWN0aW9uID0gKCkgPT4ge1xuICAvL21haW4gZWxlbWVudFxuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWdtZW50LmFwcGVuZChvblBhZ2VMb2FkKCkpO1xuICBjb25zdCBtYWluID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwidy1bOTAlXSBtYXgtdy0yeGwgZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtYXV0byBiZy1ncmF5LTkwMCByZWxhdGl2ZVwiLFxuICB9KTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluU2VjdGlvbjtcbiIsIi8vYXJyYXkgb2YgZGF5cyBvZiB3ZWVrXG5jb25zdCBkYXlzT2ZXZWVrID0gW1xuICB7IGlkOiAwLCBkYXk6IFwiU3VuXCIgfSxcbiAgeyBpZDogMSwgZGF5OiBcIk1vblwiIH0sXG4gIHsgaWQ6IDIsIGRheTogXCJUdWVcIiB9LFxuICB7IGlkOiAzLCBkYXk6IFwiV2VkXCIgfSxcbiAgeyBpZDogNCwgZGF5OiBcIlRodVwiIH0sXG4gIHsgaWQ6IDUsIGRheTogXCJGcmlcIiB9LFxuICB7IGlkOiA2LCBkYXk6IFwiU2F0XCIgfSxcbl07XG5cbi8vZ2V0IGRheSBvZiB3ZWVrXG5mdW5jdGlvbiBkYXlPZldlZWsoZGF0ZSkge1xuICBsZXQgZGF5ID0gbnVsbDtcbiAgZGF5c09mV2Vlay5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKGkuaWQgPT09IGRhdGUpIHtcbiAgICAgIGRheSA9IGkuZGF5O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXk7XG59XG5cbi8vY29udmVydCB0aW1lIHRvIHVzZXIgdGltZSB3aXRoIFVUQyBhbmQgVGltZVpvbmVcbmZ1bmN0aW9uIHVzZXJUaW1lKHRpbWVab25lT2Zmc2V0KSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBsb2NhbFRpbWUgPSBkYXRlLmdldFRpbWUoKTtcbiAgY29uc3QgbG9jYWxUaW1lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDA7XG4gIGNvbnN0IHV0Y1RpbWUgPSBsb2NhbFRpbWUgKyBsb2NhbFRpbWVPZmZzZXQ7XG4gIGNvbnN0IGxvY2F0aW9uT2Zmc2V0ID0gdXRjVGltZSArIDEwMDAgKiB0aW1lWm9uZU9mZnNldDtcbiAgY29uc3QgbG9jYXRpb25UaW1lID0gbmV3IERhdGUobG9jYXRpb25PZmZzZXQpO1xuICBjb25zb2xlLmxvZyhsb2NhdGlvblRpbWUpO1xuICByZXR1cm4gbG9jYXRpb25UaW1lO1xufVxuXG5mdW5jdGlvbiByZW5kZXJVc2VyVGltZSh0aW1lWm9uZU9mZnNldCkge1xuICAvL2RlZmluZSBkYXRlLCBkYXksIGhvdXIgYW5kIG1pbnV0ZVxuICBjb25zdCBkYXRlID0gdXNlclRpbWUodGltZVpvbmVPZmZzZXQpO1xuICBjb25zdCBkYXkgPSBkYXlPZldlZWsoZGF0ZS5nZXREYXkoKSk7XG4gIGNvbnN0IGhvdXJBbmRNaW51dGVzID0gZGF0ZS50b0xvY2FsZVN0cmluZyhbXSwge1xuICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gIH0pO1xuXG4gIC8vZGVmaW5lIGZvcm1hdCB0byBkaXNwbGF5IHRpbWVcbiAgY29uc3QgZGlzbGF5VGltZSA9IGAke2RheX0gJHtob3VyQW5kTWludXRlc31gO1xuICByZXR1cm4gZGlzbGF5VGltZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVXNlclRpbWU7XG4iLCJpbXBvcnQgd2VhdGhlckNhcmQgZnJvbSBcIi4vd2VhdGhlckNhcmRcIjtcblxuZXhwb3J0IGxldCB3ZWF0aGVyRGF0YSA9IG51bGw7XG5cbmNvbnN0IHRyYW5mb3JtRGF0YSA9IChkYXRhKSA9PiB7XG4gIHdlYXRoZXJEYXRhID0gW1xuICAgIHtcbiAgICAgIHdlYXRoZXI6IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgd2VhdGhlcmRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgbWF4VGVtcDogZGF0YS5tYWluLnRlbXBfbWF4LnRvRml4ZWQoMCksXG4gICAgICBtaW5UZW1wOiBkYXRhLm1haW4udGVtcF9taW4udG9GaXhlZCgwKSxcbiAgICAgIGZlZWxzTGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgICAgcHJlc3N1cmU6IGRhdGEubWFpbi5wcmVzc3VyZSxcbiAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXG4gICAgICBjaXR5OiBkYXRhLm5hbWUsXG4gICAgICB0aW1lWm9uZTogZGF0YS50aW1lem9uZSxcbiAgICAgIHRpbWU6IGRhdGEuZHQsXG4gICAgICBpY29uOiBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYCxcbiAgICB9LFxuICBdO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIHdlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5mb3JtRGF0YTtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCB3ZWF0aGVyQ2FyZENvbnRlbnQgZnJvbSBcIi4vd2VhdGhlckNhcmRDb250ZW50XCI7XG5pbXBvcnQgd2VhdGhlckNhcmRIZWFkZXIgZnJvbSBcIi4vd2VhdGhlckNhcmRoZWFkZXJcIjtcbmltcG9ydCBsb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmNvbnN0IHdlYXRoZXJDYXJkID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gIHdlYXRoZXIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGFydGljbGUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiYXJ0aWNsZVwiLFxuICAgICAgW3dlYXRoZXJDYXJkSGVhZGVyKGl0ZW0pLCB3ZWF0aGVyQ2FyZENvbnRlbnQoaXRlbSldLFxuICAgICAge1xuICAgICAgICBjbGFzczogXCJncmlkIGdyaWQtY29scy0xIGdyaWQtcm93cy0yIHJvdW5kZWQgaC1mdWxsIG10LTMgbWItNSBweC0zXCIsXG4gICAgICB9XG4gICAgKTtcbiAgICBtYWluLmFwcGVuZChhcnRpY2xlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZDtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuY29uc3Qgd2VhdGhlckNhcmRDb250ZW50ID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgZmVlbHNMaWtlSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0aGVybW9zdGF0XCJdLCB7XG4gICAgY2xhc3M6IGBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCAke3N0eWxlcy5pY29uc31gLFxuICB9KTtcbiAgY29uc3QgZmVlbHNMaWtlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BmZWVscyBsaWtlOiAke3dlYXRoZXIuZmVlbHNMaWtlLnRvRml4ZWQoMCl9YCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBmZWVsc0xpa2VEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbZmVlbHNMaWtlSWNvbiwgZmVlbHNMaWtlXSwge1xuICAgIGNsYXNzOiBzdHlsZXMuY2FyZFN0eWxlcyxcbiAgfSk7XG5cbiAgLy9odW1pZGl0eVxuICBjb25zdCBodW1pZGl0eUljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wid2F0ZXJfZHJvcFwiXSwge1xuICAgIGNsYXNzOiBgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgJHtzdHlsZXMuaWNvbnN9YCxcbiAgfSk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BIdW1pZGl0eTogJHt3ZWF0aGVyLmh1bWlkaXR5fWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbaHVtaWRpdHlJY29uLCBodW1pZGl0eV0sIHtcbiAgICBjbGFzczogc3R5bGVzLmNhcmRTdHlsZXMsXG4gIH0pO1xuXG4gIC8vd2luZFxuICBjb25zdCB3aW5kSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJhaXJcIl0sIHtcbiAgICBjbGFzczogYG1hdGVyaWFsLWljb25zLW91dGxpbmVkICR7c3R5bGVzLmljb25zfWAsXG4gIH0pO1xuICBjb25zdCB3aW5kID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BXaW5kOiAke3dlYXRoZXIud2luZC50b0ZpeGVkKDApfSBtcHNgXSxcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IHdpbmREaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbd2luZEljb24sIHdpbmRdLCB7XG4gICAgY2xhc3M6IHN0eWxlcy5jYXJkU3R5bGVzLFxuICB9KTtcblxuICAvL3ByZXNzdXJlXG4gIGNvbnN0IHByZXNzdXJlSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJzY2llbmNlXCJdLCB7XG4gICAgY2xhc3M6IGBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCAke3N0eWxlcy5pY29uc31gLFxuICB9KTtcbiAgY29uc3QgcHJlc3N1cmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInBcIiwgW3dlYXRoZXIucHJlc3N1cmVdLCBudWxsKTtcbiAgY29uc3QgcHJlc3N1cmVEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbcHJlc3N1cmVJY29uLCBwcmVzc3VyZV0sIHtcbiAgICBjbGFzczogc3R5bGVzLmNhcmRTdHlsZXMsXG4gIH0pO1xuXG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKGh1bWlkaXR5RGl2LCB3aW5kRGl2LCBwcmVzc3VyZURpdiwgZmVlbHNMaWtlRGl2KTtcbiAgY29uc3Qgb3RoZXJXZWF0aGVyRGV0YWlscyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiY2FyZC1ib3R0b20gYmctc2xhdGUtODAwIGdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTIgZ2FwLXgtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGZvbnQtZmlyYSB0ZXh0LXNtIHJvdW5kZWQtbGcgc2hhZG93LVtyZ2JhKDAsMCwwLDAuMTYpXzBweF8zcHhfNnB4LHJnYmEoMCwwLDAsMC4yMylfMHB4XzNweF82cHhdIG1iLTMgXCIsXG4gIH0pO1xuXG4gIHJldHVybiBvdGhlcldlYXRoZXJEZXRhaWxzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckNhcmRDb250ZW50O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHJlbmRlclVzZXJUaW1lIGZyb20gXCIuL3RpbWVBbmREYXRlXCI7XG5cbmNvbnN0IHdlYXRoZXJDYXJkSGVhZGVyID0gKHdlYXRoZXIpID0+IHtcbiAgLy9oZWFkZXIgbGVmdFxuICBjb25zdCBsb2NhdGlvbkljb24gPSBoZWxwZXIuYWRkSWNvbihcImxvY2F0aW9uX29uXCIsIFtjbGFzc2VzLmljb25zXSk7XG4gIGxvY2F0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwidGV4dC14c1wiLCBcInRleHQtaW5kaWdvLTQwMFwiKTtcbiAgY29uc3QgY2l0eSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbYCR7d2VhdGhlci5jaXR5fSwgYF0sIG51bGwpO1xuICBjb25zdCBsb2NhdGlvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDNcIixcbiAgICBbbG9jYXRpb25JY29uLCBjaXR5LCB3ZWF0aGVyLmNvdW50cnldLFxuICAgIHsgY2xhc3M6IFwiXCIgfVxuICApO1xuICBjb25zdCBsb2NhbFRpbWUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgzXCIsXG4gICAgW2Ake3JlbmRlclVzZXJUaW1lKHdlYXRoZXIudGltZVpvbmUpfWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgaGVhZGVyVG9wID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2xvY2F0aW9uLCBsb2NhbFRpbWVdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImhlYWRlci10b3Agdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zIGNlbnRlciB0ZXh0LXNtIHRleHQtaW5kaWdvLTIwMCBmb250LWJhcmxvdyAgZm9udC1saWdodCBwdC0yXCIsXG4gIH0pO1xuICBjb25zdCBhcnJvdyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJhcnJvd19yaWdodFwiXSwge1xuICAgIGNsYXNzOiBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHRleHQtcGluay01MDAgYWxpZ24tbWlkZGxlIFwiLFxuICB9KTtcblxuICAvL3dlYXRoZXIgaWNvblxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtdLCB7XG4gICAgc3JjOiB3ZWF0aGVyLmljb24sXG4gICAgYWx0OiBcIndlYXRoZXItaWNvblwiLFxuICAgIGNsYXNzOiBcInNlbGYtc3RhcnQgLW10LTUgdy1bMTEwcHhdIGgtWzExMHB4XVwiLFxuICB9KTtcblxuICAvL3dlYXRoZXIgZGVzY3JpcHRpb25cbiAgY29uc3Qgd2VhdGhlcmRlc2NyaXB0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoNVwiLFxuICAgIFthcnJvdywgd2VhdGhlci53ZWF0aGVyZGVzY10sXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwiZ3JheS00MDAgZm9udC1maXJhIGZvbnQtbGlnaHQgdGV4dC14cyBzZWxmLXN0YXJ0IGp1c3RpZnktc2VsZi1zdGFydCB3LVsxMTVweF1cIixcbiAgICB9XG4gICk7XG5cbiAgLy93ZWF0aGVyIGljb24gYW5kIGRlc2NyaXB0aW9uIHdyYXBwZXJcbiAgY29uc3Qgd2VhdGhlckxlZnQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFt3ZWF0aGVyZGVzY3JpcHRpb24sIHdlYXRoZXJJY29uXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIHB0LTNcIixcbiAgICB9XG4gICk7XG4gIC8vZGVncmVlIHNwZWNpYWwgY2hhcmFjdGVyXG4gIGNvbnN0IGRlZyA9IGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIik7XG4gIC8vIGNvbnN0IGNlbHNpdXNTcGFuID0gaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIiYjODQ1MTtcIik7XG4gIGNvbnN0IGNlbHNpdXNTcGFuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcIkNcIl0sIG51bGwpO1xuICAvL2NlbHNpdXNTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTJ4bFwiLCBcImFsaWduLXRvcFwiLCBcImlubGluZS1ibG9ja1wiLCBcInB0LTJcIik7XG4gIC8vdGVtcGVyYXR1cmUgdmFsdWVcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgxXCIsXG4gICAgW3dlYXRoZXIudGVtcC50b0ZpeGVkKDApLCBkZWcsIGNlbHNpdXNTcGFuXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJ0ZW1wZXJhdHVyZS12YWx1ZSB0ZXh0LTV4bCBzbTp0ZXh0LTd4bCB0ZXh0LXB1cnBsZS00MDAgbWItMVwiLFxuICAgIH1cbiAgKTtcblxuICAvL21heGltdW0gYW5kIG1pbmltdW0gdGVtcGVyYXR1cmVcbiAgY29uc3QgaGlnaCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtcIkg6XCIsIHdlYXRoZXIubWF4VGVtcCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBsb3cgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbXCJMOlwiLCB3ZWF0aGVyLm1pblRlbXAsIGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIildLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBtaWQgPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJm1pZDtcIik7XG4gIG1pZC5jbGFzc0xpc3QuYWRkKFwicHgtWzFweF1cIiwgXCJ0ZXh0LWJhc2VcIik7XG5cbiAgY29uc3QgbWluTWF4ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBbaGlnaCwgbWlkLCBsb3ddLCB7XG4gICAgY2xhc3M6XG4gICAgICBcInRleHQtc20gZm9udC1iYXJsb3cgc2VtaWJvbGQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1pbmRpZ28tMzAwXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRlbXBXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW3RlbXBlcmF0dXJlLCBtaW5NYXhdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcInRlbXAtd3JhcHBlciB3LTQvNSBmbGV4LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIixcbiAgfSk7XG5cbiAgLy9oZWFkZXIgcmlnaHRcbiAgY29uc3QgY2hlY2tib3ggPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIG51bGwsIHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgaWQ6IFwidGVtcC10b2dnbGVyXCIsXG4gICAgY2xhc3M6IFwiY2hlY2tib3ggaGlkZGVuXCIsXG4gIH0pO1xuICAvL2xhYmVsXG4gIGNvbnN0IHRvZ2dsZU9uSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0b2dnbGVfb25cIl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC0yeGwgIGhpZGRlbiB0b2dnbGUtb24gdHJhbnNpdGlvbi1bZGlzcGxheV0gZHVyYXRpb24tNzAwIGVhc2UtaW4gXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRvZ2dsZU9mZkljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1widG9nZ2xlX29mZlwiXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB0ZXh0LTJ4bCB0b2dnbGUtb2ZmIHRyYW5zaXRpb24tW2Rpc3BsYXldIGR1cmF0aW9uLTcwMCBlYXNlLWluXCIsXG4gIH0pO1xuICBjb25zdCBsYWJlbCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgW3RvZ2dsZU9mZkljb24sIHRvZ2dsZU9uSWNvbl0sIHtcbiAgICBjbGFzczogXCJ0b2dnbGVyIHB4LTEgZmxleCB0ZXh0LXhzIHRleHQtaW5kaWdvLTMwMCBjdXJzb3ItcG9pbnRlclwiLFxuICAgIGZvcjogXCJ0ZW1wLXRvZ2dsZXJcIixcbiAgfSk7XG5cbiAgY29uc3QgZmFocmVuaGVpdFN5bWJvbCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtoZWxwZXIuc3BlY2lhbChcIiZkZWc7RlwiKV0sXG4gICAgbnVsbFxuICApO1xuICBoZWxwZXIuYWRkQ2xhc3MoZmFocmVuaGVpdFN5bWJvbCwgW1xuICAgIFwiYWxpZ24tdGV4dC1jZW50ZXJcIixcbiAgICBcImZhaHJlbmhlaXRcIixcbiAgICBcInRleHQtZ3JheS01MDBcIixcbiAgICBcInRleHQtc21cIixcbiAgXSk7XG4gIGNvbnN0IGNlbHNpdXNTeW1ib2wgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbaGVscGVyLnNwZWNpYWwoXCImZGVnO0NcIildLFxuICAgIG51bGxcbiAgKTtcbiAgaGVscGVyLmFkZENsYXNzKGNlbHNpdXNTeW1ib2wsIFtcbiAgICBcImFsaWduLXRleHQtY2VudGVyXCIsXG4gICAgXCJjZWxzaXVzXCIsXG4gICAgXCJ0ZXh0LXB1cnBsZS00MDBcIixcbiAgICBcInRleHQtc21cIixcbiAgXSk7XG5cbiAgY29uc3QgdG9nZ2xlcnMgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtjZWxzaXVzU3ltYm9sLCBjaGVja2JveCwgbGFiZWwsIGZhaHJlbmhlaXRTeW1ib2xdLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcInRvZ2dsZXJzIGZsZXggaXRlbXMtY2VudGVyIGZvbnQtYWtzaGFyIGZvbnQtc2VtaWJvbGRcIixcbiAgICB9XG4gICk7XG4gIGNvbnN0IHRvZ2dsZXJzV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFt0b2dnbGVyc10sIHtcbiAgICBjbGFzczogXCJ0b2dnbGVycy13cmFwcGVyIGZsZXggaXRlbXMtY2VudGVyIHNlbGYtZW5kIG10LWF1dG9cIixcbiAgfSk7XG5cbiAgLy90ZW1wZXJhdHVyZSBhbmQgbWlubWF4IHdyYXBwZXJcbiAgY29uc3Qgd2VhdGhlclJpZ2h0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbdGVtcFdyYXBwZXIsIHRvZ2dsZXJzV3JhcHBlcl0sXG4gICAge1xuICAgICAgY2xhc3M6IFwid2VhdGhlci1yaWdodCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiLFxuICAgIH1cbiAgKTtcblxuICAvL3dlYXRoZXJcbiAgY29uc3QgZGl2TWlkID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtdLCB7XG4gICAgY2xhc3M6IFwidy1bMXB4XSBiZy1zbGF0ZS02MDAgaC1bOTZweF0gc2VsZi1jZW50ZXIganVzdGlmeS1zZWxmLWVuZFwiLFxuICB9KTtcblxuICBjb25zdCB3ZWF0aGVyV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW3dlYXRoZXJMZWZ0LCB3ZWF0aGVyUmlnaHRdLFxuICAgIHtcbiAgICAgIGNsYXNzOlxuICAgICAgICBcIndlYXRoZXItd3JhcHBwZXIgZ3JpZCBncmlkLWNvbHMtWzFmcl8xZnJdIGdyaWQtcm93cy0xIGdhcC14LTIgdy1mdWxsIGgtZnVsbFwiLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWdtZW50LmFwcGVuZChoZWFkZXJUb3AsIHdlYXRoZXJXcmFwcGVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBbZnJhZ21lbnRdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImNhcmQtaGVhZGVyIGdyaWQgZ3JpZC1yb3dzLVs1MHB4XzFmcl0gZ3JpZC1jb2xzLTEganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBiZy1zbGF0ZS04MDAgbWItMyBtdC01IHB0LTIgcHgtNCByb3VuZGVkLWxnIHNoYWRvdy1bcmdiYSgwLDAsMCwwLjE2KV8wcHhfM3B4XzZweCxyZ2JhKDAsMCwwLDAuMjMpXzBweF8zcHhfNnB4XSBmb250LXNhbnNwcm9cIixcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZEhlYWRlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjAuMjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm14LWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLm1iLTEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuLm10LTUge1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuLm10LVxcXFxbMFxcXFxdIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5tdC0yIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuLm10LVxcXFxbNjBweFxcXFxdIHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxufVxcbi5tdC0wIHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG59XFxuLm10LTMge1xcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcXG59XFxuLm1iLTUge1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuLm1iLTMge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLi1tdC01IHtcXG4gIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xcbn1cXG4ubXQtYXV0byB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4uaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaC1cXFxcWzkwXFxcXCVcXFxcXSB7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuLmgtNFxcXFwvNSB7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oLVxcXFxbMTEwcHhcXFxcXSB7XFxuICBoZWlnaHQ6IDExMHB4O1xcbn1cXG4uaC1cXFxcWzk2cHhcXFxcXSB7XFxuICBoZWlnaHQ6IDk2cHg7XFxufVxcbi5taW4taC1cXFxcWzUwcHhcXFxcXSB7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG4ubWluLWgtc2NyZWVuIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udy0zXFxcXC81IHtcXG4gIHdpZHRoOiA2MCU7XFxufVxcbi53LVxcXFxbOTBcXFxcJVxcXFxdIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi53LVxcXFxbMTIwcHhcXFxcXSB7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcbi53LVxcXFxbMTEwcHhcXFxcXSB7XFxuICB3aWR0aDogMTEwcHg7XFxufVxcbi53LVxcXFxbMTE1cHhcXFxcXSB7XFxuICB3aWR0aDogMTE1cHg7XFxufVxcbi53LTRcXFxcLzUge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLnctXFxcXFsxcHhcXFxcXSB7XFxuICB3aWR0aDogMXB4O1xcbn1cXG4ubWluLXctbWluIHtcXG4gIG1pbi13aWR0aDogLXdlYmtpdC1taW4tY29udGVudDtcXG4gIG1pbi13aWR0aDogLW1vei1taW4tY29udGVudDtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5tYXgtdy1cXFxcWzQ4MHB4XFxcXF0ge1xcbiAgbWF4LXdpZHRoOiA0ODBweDtcXG59XFxuLm1heC13LXhzIHtcXG4gIG1heC13aWR0aDogMjByZW07XFxufVxcbi5tYXgtdy1cXFxcWzk2MHB4XFxcXF0ge1xcbiAgbWF4LXdpZHRoOiA5NjBweDtcXG59XFxuLm1heC13LTJ4bCB7XFxuICBtYXgtd2lkdGg6IDQycmVtO1xcbn1cXG4uZmxleC1hdXRvIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ3JpZC1jb2xzLVxcXFxbMWZyX2F1dG9cXFxcXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbn1cXG4uZ3JpZC1jb2xzLTEge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1jb2xzLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1jb2xzLVxcXFxbMWZyXzFmclxcXFxdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuLmdyaWQtcm93cy1cXFxcW2F1dG9fMWZyX2F1dG9cXFxcXSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcbi5ncmlkLXJvd3MtMiB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLXJvd3MtMSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLXJvd3MtXFxcXFs1MHB4XzFmclxcXFxdIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxufVxcbi5mbGV4LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLml0ZW1zLXN0YXJ0IHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uaXRlbXMtY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LXN0YXJ0IHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmp1c3RpZnktYXJvdW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZ2FwLXgtMyB7XFxuICAtbW96LWNvbHVtbi1nYXA6IDAuNzVyZW07XFxuICAgICAgIGNvbHVtbi1nYXA6IDAuNzVyZW07XFxufVxcbi5nYXAteC0yIHtcXG4gIC1tb3otY29sdW1uLWdhcDogMC41cmVtO1xcbiAgICAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxufVxcbi5zZWxmLXN0YXJ0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcbi5zZWxmLWVuZCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuLnNlbGYtY2VudGVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktc2VsZi1zdGFydCB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG4uanVzdGlmeS1zZWxmLWVuZCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuLnJvdW5kZWQtbGcge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG4ucm91bmRlZC1mdWxsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG59XFxuLnJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuLmJvcmRlci1cXFxcWzFweFxcXFxdIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4uYm9yZGVyLTIge1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItbC0yIHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItc2xhdGUtNDAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItZ3JheS03MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDU1IDY1IDgxIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1waW5rLTQwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ0IDExNCAxODIgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLWwtc2xhdGUtNjAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcxIDg1IDEwNSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5iZy1zbGF0ZS05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1IDIzIDQyIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JheS04MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctdHJhbnNwYXJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5iZy1ncmF5LTcwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUgNjUgODEgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTkwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcgMjQgMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1zbGF0ZS04MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwIDQxIDU5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctc2xhdGUtNjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSA4NSAxMDUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5wLTIge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4ucHktNiB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG59XFxuLnB4LTIge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ucHgtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG4ucHktXFxcXFsxcHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogMXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDFweDtcXG59XFxuLnB4LTMge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcXG59XFxuLnB4LVxcXFxbMXB4XFxcXF0ge1xcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XFxufVxcbi5weC0xIHtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5wci1cXFxcWzFweFxcXFxdIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcXG59XFxuLnBsLTgge1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG4ucGItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ucHQtMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4ucHQtMyB7XFxuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG59XFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRleHQtanVzdGlmeSB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG4uYWxpZ24tdG9wIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5hbGlnbi1taWRkbGUge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmZvbnQtc2Fuc3BybyB7XFxuICBmb250LWZhbWlseTogc291cmNlIHNhbnMgcHJvLCBzYW5zLXNlcmlmO1xcbn1cXG4uZm9udC1iYXJsb3cge1xcbiAgZm9udC1mYW1pbHk6IEJhcmxvdywgc2Fucy1zZXJpZjtcXG59XFxuLmZvbnQtZmlyYSB7XFxuICBmb250LWZhbWlseTogRmlyYSBzYW5zLCBzYW5zLXNlcmZpZjtcXG59XFxuLmZvbnQtYWtzaGFyIHtcXG4gIGZvbnQtZmFtaWx5OiBBa3NoYXIsIHNhbnMtc2VyaWY7XFxufVxcbi50ZXh0LWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuLnRleHQtNHhsIHtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxufVxcbi50ZXh0LTJ4bCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG4udGV4dC1zbSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi50ZXh0LWJhc2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuLnRleHQteGwge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi50ZXh0LTN4bCB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcbi50ZXh0LXhzIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4udGV4dC01eGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5mb250LW1lZGl1bSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uZm9udC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmZvbnQtc2VtaWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZm9udC1saWdodCB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4udXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5sZWFkaW5nLW5vcm1hbCB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4udHJhY2tpbmctdGlnaHRlciB7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcXG59XFxuLnRyYWNraW5nLXdpZGVzdCB7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxufVxcbi50ZXh0LXNsYXRlLTMwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcHVycGxlLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTkyIDEzMiAyNTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEwNyAxMTQgMTI4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXBpbmstNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyNDQgMTE0IDE4MiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTU2IDE2MyAxNzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtc2xhdGUtNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTIwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjI5IDIzMSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtaW5kaWdvLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTI5IDE0MCAyNDggLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtaW5kaWdvLTIwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTk5IDIxMCAyNTQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcGluay01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIzNiA3MiAxNTMgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtaW5kaWdvLTMwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTY1IDE4MCAyNTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnNoYWRvdy1cXFxcW3JnYmFcXFxcKDBcXFxcMmMgMFxcXFwyYyAwXFxcXDJjIDBcXFxcLjEyXFxcXClfMHB4XzFweF8zcHhcXFxcMmMgcmdiYVxcXFwoMFxcXFwyYyAwXFxcXDJjIDBcXFxcMmMgMFxcXFwuMjRcXFxcKV8wcHhfMXB4XzJweFxcXFxdIHtcXG4gIC0tdHctc2hhZG93OiByZ2JhKDAsMCwwLDAuMTIpIDBweCAxcHggM3B4LHJnYmEoMCwwLDAsMC4yNCkgMHB4IDFweCAycHg7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwcHggMXB4IDNweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwcHggMXB4IDJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLnNoYWRvdy1cXFxcW3JnYmFcXFxcKDYwXFxcXDJjIDY0XFxcXDJjIDY3XFxcXDJjIDBcXFxcLjNcXFxcKV8wcHhfMXB4XzJweF8wcHhcXFxcMmMgcmdiYVxcXFwoNjBcXFxcMmMgNjRcXFxcMmMgNjdcXFxcMmMgMFxcXFwuMTVcXFxcKV8wcHhfMnB4XzZweF8ycHhcXFxcXSB7XFxuICAtLXR3LXNoYWRvdzogcmdiYSg2MCw2NCw2NywwLjMpIDBweCAxcHggMnB4IDBweCxyZ2JhKDYwLDY0LDY3LDAuMTUpIDBweCAycHggNnB4IDJweDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDBweCAxcHggMnB4IDBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwcHggMnB4IDZweCAycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctXFxcXFtyZ2JhXFxcXCgwXFxcXDJjIDBcXFxcMmMgMFxcXFwyYyAwXFxcXC4xNlxcXFwpXzBweF8zcHhfNnB4XFxcXDJjIHJnYmFcXFxcKDBcXFxcMmMgMFxcXFwyYyAwXFxcXDJjIDBcXFxcLjIzXFxcXClfMHB4XzNweF82cHhcXFxcXSB7XFxuICAtLXR3LXNoYWRvdzogcmdiYSgwLDAsMCwwLjE2KSAwcHggM3B4IDZweCxyZ2JhKDAsMCwwLDAuMjMpIDBweCAzcHggNnB4O1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMHB4IDNweCA2cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMHB4IDNweCA2cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctc2t5LTUwMCB7XFxuICAtLXR3LXNoYWRvdy1jb2xvcjogIzBlYTVlOTtcXG4gIC0tdHctc2hhZG93OiB2YXIoLS10dy1zaGFkb3ctY29sb3JlZCk7XFxufVxcbi5vdXRsaW5lLW5vbmUge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuLnRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3IsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlciwgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3IsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuLnRyYW5zaXRpb24tXFxcXFtkaXNwbGF5XFxcXF0ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogZGlzcGxheTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcbi5kdXJhdGlvbi0yMDAge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxufVxcbi5kdXJhdGlvbi03MDAge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNzAwbXM7XFxufVxcbi5lYXNlLWluIHtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcXG59XFxuLnBsYWNlaG9sZGVyXFxcXDp0ZXh0LXNtOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnBsYWNlaG9sZGVyXFxcXDp0ZXh0LXNtOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1zbTo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtZ3JheS0zMDA6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1ncmF5LTMwMDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1ncmF5LTMwMDo6cGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1cy13aXRoaW5cXFxcOmJvcmRlci0yOmZvY3VzLXdpdGhpbiB7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuLmZvY3VzLXdpdGhpblxcXFw6Ym9yZGVyLXNsYXRlLTYwMDpmb2N1cy13aXRoaW4ge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDcxIDg1IDEwNSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5mb2N1cy13aXRoaW5cXFxcOmJnLWdyYXktOTAwOmZvY3VzLXdpdGhpbiB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcgMjQgMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6c2NhbGUtMTI1OmhvdmVyIHtcXG4gIC0tdHctc2NhbGUteDogMS4yNTtcXG4gIC0tdHctc2NhbGUteTogMS4yNTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXG4uaG92ZXJcXFxcOmJvcmRlci1zbGF0ZS00MDA6aG92ZXIge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDp0ZXh0LWluZGlnby00MDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEyOSAxNDAgMjQ4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6dGV4dC1pbmRpZ28tMzAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNjUgMTgwIDI1MiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtc2xhdGUtNDAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWluZGlnby0yMDA6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtaW5kaWdvLTIwMDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtaW5kaWdvLTIwMDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLnNtXFxcXDptYi0zIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6bWwtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpoLVxcXFxbOTBcXFxcJVxcXFxdIHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICB9XFxuXFxuICAuc21cXFxcOmZsZXgtMSB7XFxuICAgIGZsZXg6IDEgMSAwJTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6ZmxleC1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLnNtXFxcXDpqdXN0aWZ5LWVuZCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuc21cXFxcOmp1c3RpZnktY2VudGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc21cXFxcOmp1c3RpZnktYmV0d2VlbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6anVzdGlmeS1zZWxmLWVuZCB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LTZ4bCB7XFxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtNHhsIHtcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMi41cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LWJhc2Uge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtNXhsIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC03eGwge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw0TkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjO0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7Ozs7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7RUFBZCxZQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7RUFBQSxtQkFBYztFQUFkLG1CQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsZUFBYztFQUFkLGVBQWM7RUFBZCxhQUFjO0VBQWQsYUFBYztFQUFkLGtCQUFjO0VBQWQsc0NBQWM7RUFBZCxlQUFjO0VBQWQsb0JBQWM7RUFBZCxzQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCxrQkFBYztFQUFkLDJCQUFjO0VBQWQsNEJBQWM7RUFBZCxzQ0FBYztFQUFkLGtDQUFjO0VBQWQsMkJBQWM7RUFBZCxzQkFBYztFQUFkLDhCQUFjO0VBQWQsWUFBYztFQUFkLGtCQUFjO0VBQWQsZ0JBQWM7RUFBZCxpQkFBYztFQUFkLGtCQUFjO0VBQWQsY0FBYztFQUFkLGdCQUFjO0VBQWQsYUFBYztFQUFkLG1CQUFjO0VBQWQscUJBQWM7RUFBZCwyQkFBYztFQUFkLHlCQUFjO0VBQWQsMEJBQWM7RUFBZCwyQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCx5QkFBYztFQUFkO0FBQWM7QUFFZDtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSw4QkFBbUI7RUFBbkIsMkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSx3QkFBbUI7T0FBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7T0FBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGdCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNFQUFtQjtFQUFuQiwyRkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtRkFBbUI7RUFBbkIsbUdBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0VBQW1CO0VBQW5CLDJGQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDBCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDhCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHdLQUFtQjtFQUFuQix3SkFBbUI7RUFBbkIsZ05BQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDRCQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFGbkI7RUFBQSxvQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLG9CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsb0JDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQTtDQ0FBO0FEQUE7RUFBQSx1QkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsbUJDQUE7RURBQSxtQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHVCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBOztFQUFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUEsbUJDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsbUJDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsZ0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsZ0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsa0JDQUE7SURBQTtHQ0FBO0NBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCBoZWFkZXJTZWN0aW9uIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IG1haW5TZWN0aW9uIGZyb20gXCIuL21haW5cIjtcbmltcG9ydCBmb290ZXJTZWN0aW9uIGZyb20gXCIuL2Zvb3RlclwiO1xuXG5jb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5mcmFnbWVudC5hcHBlbmQoaGVhZGVyU2VjdGlvbigpLCBtYWluU2VjdGlvbigpLCBmb290ZXJTZWN0aW9uKCkpO1xuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIik7XG5hcHAuYXBwZW5kKGZyYWdtZW50KTtcbmFwcC5jbGFzc0xpc3QuYWRkKFxuICBcImdyaWRcIixcbiAgXCJncmlkLXJvd3MtW2F1dG9fMWZyX2F1dG9dXCIsXG4gIFwibWluLWgtc2NyZWVuXCIsXG4gIFwidy1mdWxsXCIsXG4gIFwiZm9udC1zYW5zcHJvXCJcbik7XG5cbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcbiAgXCJiZy1ncmF5LTkwMFwiLFxuICBcInRleHQtZ3JheS0yMDBcIixcbiAgXCJtaW4taC1zY3JlZW5cIixcbiAgXCJ3LWZ1bGxcIlxuKTtcblxuZXZlbnRzKCk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic3R5bGVzIiwiY2FyZFN0eWxlcyIsImljb25zIiwiZm9vdGVySWNvbnMiLCJmbGV4Um93Q2VudGVyIiwiZmxleENvbENlbnRlciIsInRvZ2dsZXIiLCJoZWxwZXIiLCJ0b0ZhaHJlbmhlaXQiLCJjZWxzaXVzIiwiZmFocmVuaGVpdCIsImNvbnNvbGUiLCJsb2ciLCJ0b0ZpeGVkIiwidG9DZWxzaXVzIiwia2VsdmluVW5pdCIsInNldFRlbXBlcmF0dXJlVW5pdCIsImlzVG9nZ2xlZCIsIndlYXRoZXIiLCJ0ZW1wZXJhdHVyZUxhYmVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwidGVtcCIsImFwcGVuZCIsInNwZWNpYWwiLCJjaGVja0Vycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsImRpc3BsYXlPbkVycm9yIiwiZXJyIiwiaXNMb2FkaW5nIiwic2FkRmFjZSIsInNhZEZhY2VTcGFuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImRhc2hPbmUiLCJkZWdyZWVDaGFyYWN0ZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXNoVHdvIiwiZml4T25lIiwiZml4VHdvIiwiZml4U3VnZ2VzdGlvbiIsImVycm9yV3JhcHBlciIsIm9uRXJyb3JEaXYiLCJtYWluIiwiZ2V0RGF0YSIsIndlYXRoZXJEYXRhIiwib25QYWdlTG9hZCIsImdldExvY2F0aW9uIiwiZm9ybSIsImlucHV0IiwiZWxlbWVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9jYXRpb24iLCJ2YWx1ZSIsIm1haW5FbGVtZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsInRvZ2dsZXJTd2l0Y2giLCJ0b2dnbGVPbiIsInRvZ2dsZU9mZiIsInJlbW92ZSIsImZvY3VzSW5wdXQiLCJjYWxsVG9BY3Rpb25CdG4iLCJmb2N1cyIsImJhY2tUb0hvbWUiLCJhcHBMb2dvIiwiZXZlbnRzIiwidHJhbmZvcm1EYXRhIiwibG9hZGluZyIsImNpdHkiLCJ1cmwiLCJmZXRjaCIsImpzb24iLCJmb290ZXJTZWN0aW9uIiwiZ2l0aHViIiwidHdpdHRlciIsImxpbmtlZGluIiwiZ2l0aHViTGluayIsImhyZWYiLCJ0d2l0dGVyTGluayIsImxpbmtlZGluTGluayIsImljb25zV3JhcHBlciIsImNvcHlSaWdodFN5bWJvbCIsImNvcHlSaWdodCIsIndyYXBwZXIiLCJmcmFnbWVudCIsIkRvY3VtZW50RnJhZ21lbnQiLCJmb290ZXIiLCJoZWFkZXJTZWN0aW9uIiwibG9nb0RlZyIsImxvZ28iLCJuYXZMZWZ0Iiwic2VhcmNoSW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvY29tcGxldGUiLCJzZWFyY2hJY29uIiwic2VhcmNoQnV0dG9uIiwibmF2UmlnaHQiLCJuYXYiLCJoZWFkZXIiLCJhZGRDbGFzcyIsImVsZSIsImNsYXNzZXMiLCJmb3JFYWNoIiwidGFnIiwibm9kZSIsImF0dHJpYnV0ZSIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwiT2JqZWN0Iiwia2V5cyIsInNldEF0dHJpYnV0ZSIsImNoYXIiLCJkZWdyZWVDaGFyIiwiY2hhcmFjdGVyIiwicmVjaGFyIiwidGV4dENvbnRlbnQiLCJhZGRJY29uIiwia2V5d29yZCIsInNwYW4iLCJjb250ZW50RGl2Iiwic2VjdGlvbiIsImxvYWRpbmdEaXYiLCJtYWluU2VjdGlvbiIsImRheXNPZldlZWsiLCJkYXkiLCJkYXlPZldlZWsiLCJkYXRlIiwidXNlclRpbWUiLCJ0aW1lWm9uZU9mZnNldCIsIkRhdGUiLCJsb2NhbFRpbWUiLCJnZXRUaW1lIiwibG9jYWxUaW1lT2Zmc2V0IiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ1dGNUaW1lIiwibG9jYXRpb25PZmZzZXQiLCJsb2NhdGlvblRpbWUiLCJyZW5kZXJVc2VyVGltZSIsImdldERheSIsImhvdXJBbmRNaW51dGVzIiwidG9Mb2NhbGVTdHJpbmciLCJob3VyIiwibWludXRlIiwiZGlzbGF5VGltZSIsIndlYXRoZXJDYXJkIiwid2VhdGhlcmRlc2MiLCJkZXNjcmlwdGlvbiIsIm1heFRlbXAiLCJ0ZW1wX21heCIsIm1pblRlbXAiLCJ0ZW1wX21pbiIsImZlZWxzTGlrZSIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsInByZXNzdXJlIiwid2luZCIsInNwZWVkIiwiY291bnRyeSIsInN5cyIsIm5hbWUiLCJ0aW1lWm9uZSIsInRpbWV6b25lIiwidGltZSIsImR0IiwiaWNvbiIsIndlYXRoZXJDYXJkQ29udGVudCIsIndlYXRoZXJDYXJkSGVhZGVyIiwiYXJ0aWNsZSIsImZlZWxzTGlrZUljb24iLCJmZWVsc0xpa2VEaXYiLCJodW1pZGl0eUljb24iLCJodW1pZGl0eURpdiIsIndpbmRJY29uIiwid2luZERpdiIsInByZXNzdXJlSWNvbiIsInByZXNzdXJlRGl2Iiwib3RoZXJXZWF0aGVyRGV0YWlscyIsImxvY2F0aW9uSWNvbiIsImhlYWRlclRvcCIsImFycm93Iiwid2VhdGhlckljb24iLCJzcmMiLCJhbHQiLCJ3ZWF0aGVyZGVzY3JpcHRpb24iLCJ3ZWF0aGVyTGVmdCIsImRlZyIsImNlbHNpdXNTcGFuIiwidGVtcGVyYXR1cmUiLCJoaWdoIiwibG93IiwibWlkIiwibWluTWF4IiwidGVtcFdyYXBwZXIiLCJjaGVja2JveCIsInRvZ2dsZU9uSWNvbiIsInRvZ2dsZU9mZkljb24iLCJsYWJlbCIsImZvciIsImZhaHJlbmhlaXRTeW1ib2wiLCJjZWxzaXVzU3ltYm9sIiwidG9nZ2xlcnMiLCJ0b2dnbGVyc1dyYXBwZXIiLCJ3ZWF0aGVyUmlnaHQiLCJkaXZNaWQiLCJ3ZWF0aGVyV3JhcHBlciIsImFwcCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9