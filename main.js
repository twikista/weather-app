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

/***/ "./src/choose-location.js":
/*!********************************!*\
  !*** ./src/choose-location.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


function defaultLoactionForm() {
  const formTitle = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", ["Set default weather location"], {
    class: "text-lg font-bold sm:text-2xl text-gray-300 bg-purple-700 text-center py-2"
  });
  const infoIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("i", [], {
    class: "fas fa-info border-[1px] border-indigo-400 rounded-full text-indigo-400"
  });
  const formInfo = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", ["set default weather location for which current weather details will be displayed on app load"], {
    class: "text-xs text-indigo-400 py-4"
  });
  const formHeader = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [formTitle, formInfo], {
    class: "form-header"
  });
  const locationInput = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("input", [], {
    type: "text",
    placeholder: "Enter default weather location",
    autocomplete: "off"
  });
  const saveBtn = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", ["save"], {
    type: "submit",
    class: "submit-btn rounded-sm border-[1px] outline-none py-1 px-2 m-2 min-w-[80px]"
  });
  const cancelBtn = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", ["cancel"], {
    type: "submit",
    class: "cancel-btn rounded-sm  border-[1px] outline-none py-1 px-2 m-2 min-w-[80px]"
  });
  const formBtns = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [saveBtn, cancelBtn], {
    class: "form-btns"
  });
  const formBody = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [locationInput, formBtns], null);
  const wrapper = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [formHeader, formBody], {
    class: " "
  });
  const form = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("form", [wrapper], {
    class: "default-location-form bg-gray-800 border-[] relative bottom-[100px] rounded-md overflow-hidden shadow-[rgba(0,0,0,0.3)_0px_19px _38px,rgba(0,0,0,0.22)_0px_15px_12px] w-[90%] max-w-[460px] min-w-[240px]"
  });
  const overlay = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [form], {
    class: "overlay fixed inset-0 z-10 bg-[rgba(0,0,0,0.5)] flex justify-center items-center pt-[20px] px-4 min-w-[270px]"
  });
  return overlay;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultLoactionForm);

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
    class: "error-wrapper flex flex-col justify-top items-center h-full pt-[120px] sm:justify-center sm:pt-0"
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
    const API_KEY = "3ceb8852b9b6a1fd8a8191af7243397f";
    (0,_loading__WEBPACK_IMPORTED_MODULE_1__["default"])(isLoading);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
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
    type: "search",
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
/* harmony import */ var _choose_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-location */ "./src/choose-location.js");



function onPageLoad() {
  const header = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", ["Get Accurate Weather Details by the Second"], {
    class: "text-3xl sm:text-5xl uppercase font-barlow font-bold text-purple-400  text-center tracking-widest self-start "
  });
  const callToActionBtn = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", ["get started"], {
    class: "call-to-action  w-[120px] px-4 py-2 uppercase text-sm text-pink-400 border-pink-400 font-sanspro font-semibold rounded transition ease-in duration-200 hover:text-slate-400 hover:border-slate-400 border-2 mt-[60px] shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px;]"
  });
  const contentDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [header, callToActionBtn], {
    class: "flex flex-col justify-top items-center h-full font-sanspro pt-[100px] sm:justify-center sm:pt-0"
  });
  const section = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("section", [contentDiv], {
    class: "home-section flex justify-center items-start px-4 text-justify h-full"
  });
  setTimeout(() => {
    section.append((0,_choose_location__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }, 2000);
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
  const pressure = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`pressure: ${weather.pressure}`], null);
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.fixed {\n  position: fixed;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.bottom-\\[100px\\] {\n  bottom: 100px;\n}\n.z-10 {\n  z-index: 10;\n}\n.m-2 {\n  margin: 0.5rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-\\[60px\\] {\n  margin-top: 60px;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.-mt-5 {\n  margin-top: -1.25rem;\n}\n.mt-auto {\n  margin-top: auto;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-\\[90\\%\\] {\n  height: 90%;\n}\n.h-full {\n  height: 100%;\n}\n.h-\\[110px\\] {\n  height: 110px;\n}\n.h-\\[96px\\] {\n  height: 96px;\n}\n.min-h-\\[50px\\] {\n  min-height: 50px;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-\\[90\\%\\] {\n  width: 90%;\n}\n.w-full {\n  width: 100%;\n}\n.w-3\\/5 {\n  width: 60%;\n}\n.w-\\[120px\\] {\n  width: 120px;\n}\n.w-\\[110px\\] {\n  width: 110px;\n}\n.w-\\[115px\\] {\n  width: 115px;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.w-\\[1px\\] {\n  width: 1px;\n}\n.min-w-\\[80px\\] {\n  min-width: 80px;\n}\n.min-w-\\[240px\\] {\n  min-width: 240px;\n}\n.min-w-\\[270px\\] {\n  min-width: 270px;\n}\n.min-w-min {\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n.max-w-\\[460px\\] {\n  max-width: 460px;\n}\n.max-w-\\[480px\\] {\n  max-width: 480px;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.max-w-\\[960px\\] {\n  max-width: 960px;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.flex-auto {\n  flex: 1 1 auto;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.grid-cols-\\[1fr_auto\\] {\n  grid-template-columns: 1fr auto;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-\\[1fr_1fr\\] {\n  grid-template-columns: 1fr 1fr;\n}\n.grid-rows-\\[auto_1fr_auto\\] {\n  grid-template-rows: auto 1fr auto;\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-1 {\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n}\n.grid-rows-\\[50px_1fr\\] {\n  grid-template-rows: 50px 1fr;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.gap-x-3 {\n  -moz-column-gap: 0.75rem;\n       column-gap: 0.75rem;\n}\n.gap-x-2 {\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n}\n.self-start {\n  align-self: flex-start;\n}\n.self-end {\n  align-self: flex-end;\n}\n.self-center {\n  align-self: center;\n}\n.justify-self-start {\n  justify-self: start;\n}\n.justify-self-end {\n  justify-self: end;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.border-\\[1px\\] {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-l-2 {\n  border-left-width: 2px;\n}\n.border-indigo-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(129 140 248 / var(--tw-border-opacity));\n}\n.border-slate-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(148 163 184 / var(--tw-border-opacity));\n}\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n}\n.border-pink-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(244 114 182 / var(--tw-border-opacity));\n}\n.border-l-slate-600 {\n  --tw-border-opacity: 1;\n  border-left-color: rgb(71 85 105 / var(--tw-border-opacity));\n}\n.bg-purple-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(126 34 206 / var(--tw-bg-opacity));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n.bg-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.5\\)\\] {\n  background-color: rgba(0,0,0,0.5);\n}\n.bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.bg-slate-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n}\n.bg-slate-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(71 85 105 / var(--tw-bg-opacity));\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.py-\\[1px\\] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-\\[1px\\] {\n  padding-left: 1px;\n  padding-right: 1px;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.pt-\\[20px\\] {\n  padding-top: 20px;\n}\n.pr-\\[1px\\] {\n  padding-right: 1px;\n}\n.pt-\\[120px\\] {\n  padding-top: 120px;\n}\n.pl-8 {\n  padding-left: 2rem;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.pt-\\[100px\\] {\n  padding-top: 100px;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.pt-3 {\n  padding-top: 0.75rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.align-top {\n  vertical-align: top;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.font-sanspro {\n  font-family: source sans pro, sans-serif;\n}\n.font-barlow {\n  font-family: Barlow, sans-serif;\n}\n.font-fira {\n  font-family: Fira sans, sans-serfif;\n}\n.font-akshar {\n  font-family: Akshar, sans-serif;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-light {\n  font-weight: 300;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.tracking-tighter {\n  letter-spacing: -0.05em;\n}\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.text-indigo-400 {\n  --tw-text-opacity: 1;\n  color: rgb(129 140 248 / var(--tw-text-opacity));\n}\n.text-slate-300 {\n  --tw-text-opacity: 1;\n  color: rgb(203 213 225 / var(--tw-text-opacity));\n}\n.text-purple-400 {\n  --tw-text-opacity: 1;\n  color: rgb(192 132 252 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-pink-400 {\n  --tw-text-opacity: 1;\n  color: rgb(244 114 182 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n.text-indigo-200 {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.text-pink-500 {\n  --tw-text-opacity: 1;\n  color: rgb(236 72 153 / var(--tw-text-opacity));\n}\n.text-indigo-300 {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\n.shadow-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.12\\)_0px_1px_3px\\2c rgba\\(0\\2c 0\\2c 0\\2c 0\\.24\\)_0px_1px_2px\\] {\n  --tw-shadow: rgba(0,0,0,0.12) 0px 1px 3px,rgba(0,0,0,0.24) 0px 1px 2px;\n  --tw-shadow-colored: 0px 1px 3px var(--tw-shadow-color), 0px 1px 2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-\\[rgba\\(60\\2c 64\\2c 67\\2c 0\\.3\\)_0px_1px_2px_0px\\2c rgba\\(60\\2c 64\\2c 67\\2c 0\\.15\\)_0px_2px_6px_2px\\] {\n  --tw-shadow: rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 2px 6px 2px;\n  --tw-shadow-colored: 0px 1px 2px 0px var(--tw-shadow-color), 0px 2px 6px 2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.16\\)_0px_3px_6px\\2c rgba\\(0\\2c 0\\2c 0\\2c 0\\.23\\)_0px_3px_6px\\] {\n  --tw-shadow: rgba(0,0,0,0.16) 0px 3px 6px,rgba(0,0,0,0.23) 0px 3px 6px;\n  --tw-shadow-colored: 0px 3px 6px var(--tw-shadow-color), 0px 3px 6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sky-500 {\n  --tw-shadow-color: #0ea5e9;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[display\\] {\n  transition-property: display;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-700 {\n  transition-duration: 700ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.placeholder\\:text-sm::-moz-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm:-ms-input-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm::placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-gray-300::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-300:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-300::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.focus-within\\:border-2:focus-within {\n  border-width: 2px;\n}\n.focus-within\\:border-slate-600:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity));\n}\n.focus-within\\:bg-gray-900:focus-within {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.hover\\:scale-125:hover {\n  --tw-scale-x: 1.25;\n  --tw-scale-y: 1.25;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:border-slate-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(148 163 184 / var(--tw-border-opacity));\n}\n.hover\\:text-indigo-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(129 140 248 / var(--tw-text-opacity));\n}\n.hover\\:text-indigo-300:hover {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\n.hover\\:text-slate-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n.focus\\:placeholder\\:text-indigo-200:focus::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.focus\\:placeholder\\:text-indigo-200:focus:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.focus\\:placeholder\\:text-indigo-200:focus::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n@media (min-width: 640px) {\n\n  .sm\\:mb-3 {\n    margin-bottom: 0.75rem;\n  }\n\n  .sm\\:ml-8 {\n    margin-left: 2rem;\n  }\n\n  .sm\\:flex-1 {\n    flex: 1 1 0%;\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .sm\\:justify-center {\n    justify-content: center;\n  }\n\n  .sm\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .sm\\:justify-self-end {\n    justify-self: end;\n  }\n\n  .sm\\:pt-0 {\n    padding-top: 0px;\n  }\n\n  .sm\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .sm\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-7xl {\n    font-size: 4.5rem;\n    line-height: 1;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css","<no source>"],"names":[],"mappings":"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DAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAFnB;EAAA,oBCAA;EDAA;CCAA;ADAA;EAAA,oBCAA;EDAA;CCAA;ADAA;EAAA,oBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA;CCAA;ADAA;EAAA,uBCAA;EDAA;CCAA;ADAA;EAAA,mBCAA;EDAA;CCAA;ADAA;EAAA,mBCAA;EDAA,mBCAA;EDAA;CCAA;ADAA;EAAA,uBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,kBCAA;IDAA;GCAA;;EDAA;IAAA,mBCAA;IDAA;GCAA;;EDAA;IAAA,mBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,kBCAA;IDAA;GCAA;CAAA","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;",null],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLHNCQUFWLEVBQWtDO0VBQ2pELElBQUlDLElBQUksR0FBRyxFQUFYLENBRGlELENBQ2xDOztFQUVmQSxJQUFJLENBQUNDLFFBQUwsR0FBZ0IsU0FBU0EsUUFBVCxHQUFvQjtJQUNsQyxPQUFPLEtBQUtDLEdBQUwsQ0FBUyxVQUFVQyxJQUFWLEVBQWdCO01BQzlCLElBQUlDLE9BQU8sR0FBRyxFQUFkO01BQ0EsSUFBSUMsU0FBUyxHQUFHLE9BQU9GLElBQUksQ0FBQyxDQUFELENBQVgsS0FBbUIsV0FBbkM7O01BRUEsSUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBUixFQUFhO1FBQ1hDLE9BQU8sSUFBSSxjQUFjRSxNQUFkLENBQXFCSCxJQUFJLENBQUMsQ0FBRCxDQUF6QixFQUE4QixLQUE5QixDQUFYO01BQ0Q7O01BRUQsSUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBUixFQUFhO1FBQ1hDLE9BQU8sSUFBSSxVQUFVRSxNQUFWLENBQWlCSCxJQUFJLENBQUMsQ0FBRCxDQUFyQixFQUEwQixJQUExQixDQUFYO01BQ0Q7O01BRUQsSUFBSUUsU0FBSixFQUFlO1FBQ2JELE9BQU8sSUFBSSxTQUFTRSxNQUFULENBQWdCSCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFJLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUIsSUFBSUQsTUFBSixDQUFXSCxJQUFJLENBQUMsQ0FBRCxDQUFmLENBQXJCLEdBQTJDLEVBQTNELEVBQStELElBQS9ELENBQVg7TUFDRDs7TUFFREMsT0FBTyxJQUFJTCxzQkFBc0IsQ0FBQ0ksSUFBRCxDQUFqQzs7TUFFQSxJQUFJRSxTQUFKLEVBQWU7UUFDYkQsT0FBTyxJQUFJLEdBQVg7TUFDRDs7TUFFRCxJQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFSLEVBQWE7UUFDWEMsT0FBTyxJQUFJLEdBQVg7TUFDRDs7TUFFRCxJQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFSLEVBQWE7UUFDWEMsT0FBTyxJQUFJLEdBQVg7TUFDRDs7TUFFRCxPQUFPQSxPQUFQO0lBQ0QsQ0EvQk0sRUErQkpJLElBL0JJLENBK0JDLEVBL0JELENBQVA7RUFnQ0QsQ0FqQ0QsQ0FIaUQsQ0FvQzlDOzs7RUFHSFIsSUFBSSxDQUFDUyxDQUFMLEdBQVMsU0FBU0EsQ0FBVCxDQUFXQyxPQUFYLEVBQW9CQyxLQUFwQixFQUEyQkMsTUFBM0IsRUFBbUNDLFFBQW5DLEVBQTZDQyxLQUE3QyxFQUFvRDtJQUMzRCxJQUFJLE9BQU9KLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7TUFDL0JBLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBRCxFQUFPQSxPQUFQLEVBQWdCSyxTQUFoQixDQUFELENBQVY7SUFDRDs7SUFFRCxJQUFJQyxzQkFBc0IsR0FBRyxFQUE3Qjs7SUFFQSxJQUFJSixNQUFKLEVBQVk7TUFDVixLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1YsTUFBekIsRUFBaUNVLENBQUMsRUFBbEMsRUFBc0M7UUFDcEMsSUFBSUMsRUFBRSxHQUFHLEtBQUtELENBQUwsRUFBUSxDQUFSLENBQVQ7O1FBRUEsSUFBSUMsRUFBRSxJQUFJLElBQVYsRUFBZ0I7VUFDZEYsc0JBQXNCLENBQUNFLEVBQUQsQ0FBdEIsR0FBNkIsSUFBN0I7UUFDRDtNQUNGO0lBQ0Y7O0lBRUQsS0FBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHVCxPQUFPLENBQUNILE1BQTlCLEVBQXNDWSxFQUFFLEVBQXhDLEVBQTRDO01BQzFDLElBQUloQixJQUFJLEdBQUcsR0FBR0csTUFBSCxDQUFVSSxPQUFPLENBQUNTLEVBQUQsQ0FBakIsQ0FBWDs7TUFFQSxJQUFJUCxNQUFNLElBQUlJLHNCQUFzQixDQUFDYixJQUFJLENBQUMsQ0FBRCxDQUFMLENBQXBDLEVBQStDO1FBQzdDO01BQ0Q7O01BRUQsSUFBSSxPQUFPVyxLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO1FBQ2hDLElBQUksT0FBT1gsSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixXQUF2QixFQUFvQztVQUNsQ0EsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVVyxLQUFWO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xYLElBQUksQ0FBQyxDQUFELENBQUosR0FBVSxTQUFTRyxNQUFULENBQWdCSCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFJLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUIsSUFBSUQsTUFBSixDQUFXSCxJQUFJLENBQUMsQ0FBRCxDQUFmLENBQXJCLEdBQTJDLEVBQTNELEVBQStELElBQS9ELEVBQXFFRyxNQUFyRSxDQUE0RUgsSUFBSSxDQUFDLENBQUQsQ0FBaEYsRUFBcUYsR0FBckYsQ0FBVjtVQUNBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVXLEtBQVY7UUFDRDtNQUNGOztNQUVELElBQUlILEtBQUosRUFBVztRQUNULElBQUksQ0FBQ1IsSUFBSSxDQUFDLENBQUQsQ0FBVCxFQUFjO1VBQ1pBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVVEsS0FBVjtRQUNELENBRkQsTUFFTztVQUNMUixJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsVUFBVUcsTUFBVixDQUFpQkgsSUFBSSxDQUFDLENBQUQsQ0FBckIsRUFBMEIsSUFBMUIsRUFBZ0NHLE1BQWhDLENBQXVDSCxJQUFJLENBQUMsQ0FBRCxDQUEzQyxFQUFnRCxHQUFoRCxDQUFWO1VBQ0FBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVVEsS0FBVjtRQUNEO01BQ0Y7O01BRUQsSUFBSUUsUUFBSixFQUFjO1FBQ1osSUFBSSxDQUFDVixJQUFJLENBQUMsQ0FBRCxDQUFULEVBQWM7VUFDWkEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLEdBQUdHLE1BQUgsQ0FBVU8sUUFBVixDQUFWO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xWLElBQUksQ0FBQyxDQUFELENBQUosR0FBVSxjQUFjRyxNQUFkLENBQXFCSCxJQUFJLENBQUMsQ0FBRCxDQUF6QixFQUE4QixLQUE5QixFQUFxQ0csTUFBckMsQ0FBNENILElBQUksQ0FBQyxDQUFELENBQWhELEVBQXFELEdBQXJELENBQVY7VUFDQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVVSxRQUFWO1FBQ0Q7TUFDRjs7TUFFRGIsSUFBSSxDQUFDb0IsSUFBTCxDQUFVakIsSUFBVjtJQUNEO0VBQ0YsQ0FyREQ7O0VBdURBLE9BQU9ILElBQVA7QUFDRCxDQS9GRDs7Ozs7Ozs7OztBQ05hOztBQUViSCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUssSUFBVixFQUFnQjtFQUMvQixJQUFJQyxPQUFPLEdBQUdELElBQUksQ0FBQyxDQUFELENBQWxCO0VBQ0EsSUFBSWtCLFVBQVUsR0FBR2xCLElBQUksQ0FBQyxDQUFELENBQXJCOztFQUVBLElBQUksQ0FBQ2tCLFVBQUwsRUFBaUI7SUFDZixPQUFPakIsT0FBUDtFQUNEOztFQUVELElBQUksT0FBT2tCLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7SUFDOUIsSUFBSUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLFFBQVEsQ0FBQ0Msa0JBQWtCLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixVQUFmLENBQUQsQ0FBbkIsQ0FBVCxDQUFqQjtJQUNBLElBQUlPLElBQUksR0FBRywrREFBK0R0QixNQUEvRCxDQUFzRWlCLE1BQXRFLENBQVg7SUFDQSxJQUFJTSxhQUFhLEdBQUcsT0FBT3ZCLE1BQVAsQ0FBY3NCLElBQWQsRUFBb0IsS0FBcEIsQ0FBcEI7SUFDQSxJQUFJRSxVQUFVLEdBQUdULFVBQVUsQ0FBQ1UsT0FBWCxDQUFtQjdCLEdBQW5CLENBQXVCLFVBQVU4QixNQUFWLEVBQWtCO01BQ3hELE9BQU8saUJBQWlCMUIsTUFBakIsQ0FBd0JlLFVBQVUsQ0FBQ1ksVUFBWCxJQUF5QixFQUFqRCxFQUFxRDNCLE1BQXJELENBQTREMEIsTUFBNUQsRUFBb0UsS0FBcEUsQ0FBUDtJQUNELENBRmdCLENBQWpCO0lBR0EsT0FBTyxDQUFDNUIsT0FBRCxFQUFVRSxNQUFWLENBQWlCd0IsVUFBakIsRUFBNkJ4QixNQUE3QixDQUFvQyxDQUFDdUIsYUFBRCxDQUFwQyxFQUFxRHJCLElBQXJELENBQTBELElBQTFELENBQVA7RUFDRDs7RUFFRCxPQUFPLENBQUNKLE9BQUQsRUFBVUksSUFBVixDQUFlLElBQWYsQ0FBUDtBQUNELENBbkJEOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQSxTQUFTMkIsbUJBQVQsR0FBK0I7RUFDN0IsTUFBTUMsU0FBUyxHQUFHRixrREFBQSxDQUNoQixJQURnQixFQUVoQixDQUFDLDhCQUFELENBRmdCLEVBR2hCO0lBQ0VJLEtBQUssRUFDSDtFQUZKLENBSGdCLENBQWxCO0VBU0EsTUFBTUMsUUFBUSxHQUFHTCxrREFBQSxDQUFxQixHQUFyQixFQUEwQixFQUExQixFQUE4QjtJQUM3Q0ksS0FBSyxFQUNIO0VBRjJDLENBQTlCLENBQWpCO0VBSUEsTUFBTUUsUUFBUSxHQUFHTixrREFBQSxDQUNmLEdBRGUsRUFFZixDQUNFLDhGQURGLENBRmUsRUFLZjtJQUFFSSxLQUFLLEVBQUU7RUFBVCxDQUxlLENBQWpCO0VBUUEsTUFBTUcsVUFBVSxHQUFHUCxrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDRSxTQUFELEVBQVlJLFFBQVosQ0FBNUIsRUFBbUQ7SUFDcEVGLEtBQUssRUFBRTtFQUQ2RCxDQUFuRCxDQUFuQjtFQUlBLE1BQU1JLGFBQWEsR0FBR1Isa0RBQUEsQ0FBcUIsT0FBckIsRUFBOEIsRUFBOUIsRUFBa0M7SUFDdERTLElBQUksRUFBRSxNQURnRDtJQUV0REMsV0FBVyxFQUFFLGdDQUZ5QztJQUd0REMsWUFBWSxFQUFFO0VBSHdDLENBQWxDLENBQXRCO0VBTUEsTUFBTUMsT0FBTyxHQUFHWixrREFBQSxDQUFxQixRQUFyQixFQUErQixDQUFDLE1BQUQsQ0FBL0IsRUFBeUM7SUFDdkRTLElBQUksRUFBRSxRQURpRDtJQUV2REwsS0FBSyxFQUNIO0VBSHFELENBQXpDLENBQWhCO0VBTUEsTUFBTVMsU0FBUyxHQUFHYixrREFBQSxDQUFxQixRQUFyQixFQUErQixDQUFDLFFBQUQsQ0FBL0IsRUFBMkM7SUFDM0RTLElBQUksRUFBRSxRQURxRDtJQUUzREwsS0FBSyxFQUNIO0VBSHlELENBQTNDLENBQWxCO0VBTUEsTUFBTVUsUUFBUSxHQUFHZCxrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDWSxPQUFELEVBQVVDLFNBQVYsQ0FBNUIsRUFBa0Q7SUFDakVULEtBQUssRUFBRTtFQUQwRCxDQUFsRCxDQUFqQjtFQUlBLE1BQU1XLFFBQVEsR0FBR2Ysa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQ1EsYUFBRCxFQUFnQk0sUUFBaEIsQ0FBNUIsRUFBdUQsSUFBdkQsQ0FBakI7RUFDQSxNQUFNRSxPQUFPLEdBQUdoQixrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDTyxVQUFELEVBQWFRLFFBQWIsQ0FBNUIsRUFBb0Q7SUFDbEVYLEtBQUssRUFBRTtFQUQyRCxDQUFwRCxDQUFoQjtFQUdBLE1BQU1hLElBQUksR0FBR2pCLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUNnQixPQUFELENBQTdCLEVBQXdDO0lBQ25EWixLQUFLLEVBQ0g7RUFGaUQsQ0FBeEMsQ0FBYjtFQUtBLE1BQU1jLE9BQU8sR0FBR2xCLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUNpQixJQUFELENBQTVCLEVBQW9DO0lBQ2xEYixLQUFLLEVBQ0g7RUFGZ0QsQ0FBcEMsQ0FBaEI7RUFJQSxPQUFPYyxPQUFQO0FBQ0Q7O0FBRUQsaUVBQWVqQixtQkFBZjs7Ozs7Ozs7Ozs7Ozs7QUNsRUEsTUFBTWtCLE1BQU0sR0FBRztFQUNiQyxVQUFVLEVBQ1IsZ0hBRlc7RUFHYkMsS0FBSyxFQUFFLE1BSE07RUFJYkMsV0FBVyxFQUNULHFGQUxXO0VBTWJDLGFBQWEsRUFBRSwyQ0FORjtFQU9iQyxhQUFhLEVBQUU7QUFQRixDQUFmO0FBVUEsaUVBQWVMLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtDQUdBOztBQUNBLFNBQVNPLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCO0VBQzdCLE1BQU1DLFVBQVUsR0FBR0QsT0FBTyxHQUFHLEdBQVYsR0FBZ0IsRUFBbkM7RUFDQUUsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVUsQ0FBQ0csT0FBWCxDQUFtQixDQUFuQixDQUFaO0VBQ0EsT0FBT0gsVUFBVSxDQUFDRyxPQUFYLENBQW1CLENBQW5CLENBQVA7QUFDRCxFQUVEOzs7QUFDQSxTQUFTQyxTQUFULENBQW1CQyxVQUFuQixFQUErQjtFQUM3QixNQUFNTixPQUFPLEdBQUdNLFVBQVUsR0FBRyxNQUE3QjtFQUNBLE9BQU9OLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQixDQUFoQixDQUFQO0FBQ0Q7O0FBRUQsTUFBTUcsa0JBQWtCLEdBQUcsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLEtBQXdCO0VBQ2pELE1BQU1DLGdCQUFnQixHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXpCO0VBQ0FGLGdCQUFnQixDQUFDRyxTQUFqQixHQUE2QixFQUE3QjtFQUNBLE1BQU1DLElBQUksR0FBR04sU0FBUyxHQUNsQlQsWUFBWSxDQUFDVSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLElBQVgsQ0FBZ0JWLE9BQWhCLENBQXdCLENBQXhCLENBQUQsQ0FETSxHQUVsQkssT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxJQUFYLENBQWdCVixPQUFoQixDQUF3QixDQUF4QixDQUZKO0VBSUFNLGdCQUFnQixDQUFDSyxNQUFqQixDQUNFRCxJQURGLEVBRUVOLFNBQVMsR0FBR25DLDRDQUFBLENBQWUsUUFBZixDQUFILEdBQThCQSw0Q0FBQSxDQUFlLFFBQWYsQ0FGekM7QUFJRCxDQVhEOztBQWFBLGlFQUFla0Msa0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFFTyxTQUFTVSxVQUFULENBQW9CQyxRQUFwQixFQUE4QjtFQUNuQyxJQUFJQSxRQUFRLENBQUNDLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7SUFDM0IsTUFBTSxJQUFJQyxLQUFKLENBQVUsMkJBQVYsQ0FBTjtFQUNEOztFQUNELE9BQU9GLFFBQVA7QUFDRDtBQUVNLFNBQVNHLGNBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCQyxTQUE3QixFQUF3QztFQUM3QyxNQUFNQyxPQUFPLEdBQUduRCw0Q0FBQSxDQUFlLDhCQUFmLENBQWhCO0VBQ0EsTUFBTW9ELFdBQVcsR0FBR3BELGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUNtRCxPQUFELENBQTdCLEVBQXdDO0lBQzFEL0MsS0FBSyxFQUNIO0VBRndELENBQXhDLENBQXBCO0VBSUEsTUFBTWlELFlBQVksR0FBR3JELGtEQUFBLENBQXFCLElBQXJCLEVBQTJCLENBQUNpRCxHQUFHLENBQUNLLE9BQUwsQ0FBM0IsRUFBMEM7SUFDN0RsRCxLQUFLLEVBQUU7RUFEc0QsQ0FBMUMsQ0FBckI7RUFJQSxNQUFNbUQsT0FBTyxHQUFHdkQsb0RBQUEsQ0FBdUIsVUFBdkIsQ0FBaEI7RUFDQXVELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBdEI7RUFDQSxNQUFNQyxPQUFPLEdBQUczRCxvREFBQSxDQUF1QixVQUF2QixDQUFoQjtFQUNBMkQsT0FBTyxDQUFDRixTQUFSLENBQWtCQyxHQUFsQixDQUFzQixVQUF0QjtFQUVBLE1BQU1FLE1BQU0sR0FBRzVELGtEQUFBLENBQ2IsR0FEYSxFQUViLENBQUN1RCxPQUFELEVBQVUsZ0NBQVYsQ0FGYSxFQUdiLElBSGEsQ0FBZjtFQUtBLE1BQU1NLE1BQU0sR0FBRzdELGtEQUFBLENBQ2IsR0FEYSxFQUViLENBQUMyRCxPQUFELEVBQVUsNENBQVYsQ0FGYSxFQUdiLElBSGEsQ0FBZjtFQU1BLE1BQU1HLGFBQWEsR0FBRzlELGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUM0RCxNQUFELEVBQVNDLE1BQVQsQ0FBNUIsRUFBOEM7SUFDbEV6RCxLQUFLLEVBQUU7RUFEMkQsQ0FBOUMsQ0FBdEI7RUFJQSxNQUFNMkQsWUFBWSxHQUFHL0Qsa0RBQUEsQ0FDbkIsS0FEbUIsRUFFbkIsQ0FBQ29ELFdBQUQsRUFBY0MsWUFBZCxFQUE0QlMsYUFBNUIsQ0FGbUIsRUFHbkI7SUFDRTFELEtBQUssRUFDSDtFQUZKLENBSG1CLENBQXJCO0VBU0EsTUFBTTRELFVBQVUsR0FBR2hFLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUMrRCxZQUFELENBQTVCLEVBQTRDO0lBQzdEM0QsS0FBSyxFQUNIO0VBRjJELENBQTVDLENBQW5CLENBdkM2QyxDQTJDN0M7O0VBRUEsTUFBTTZELElBQUksR0FBRzNCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0VBQ0EwQixJQUFJLENBQUN6QixTQUFMLEdBQWlCLEVBQWpCO0VBQ0F5QixJQUFJLENBQUN2QixNQUFMLENBQVlzQixVQUFaO0VBQ0FkLFNBQVMsR0FBRyxLQUFaO0VBQ0FyQixPQUFPLENBQUNDLEdBQVIsQ0FBWW9CLFNBQVo7RUFDQSxPQUFPZSxJQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVERDtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxTQUFTSSxXQUFULEdBQXVCO0VBQ3JCLE1BQU1wRCxJQUFJLEdBQUdxQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtFQUNBLE1BQU0rQixLQUFLLEdBQUdyRCxJQUFJLENBQUNzRCxRQUFMLENBQWMsY0FBZCxDQUFkO0VBQ0EsTUFBTU4sSUFBSSxHQUFHM0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7RUFDQXRCLElBQUksQ0FBQ3VELGdCQUFMLENBQXNCLFFBQXRCLEVBQWlDQyxDQUFELElBQU87SUFDckNBLENBQUMsQ0FBQ0MsY0FBRjtJQUNBLE1BQU1DLFFBQVEsR0FBR0wsS0FBSyxDQUFDTSxLQUF2QjtJQUNBVix1REFBTyxDQUFDUyxRQUFELENBQVA7SUFDQUwsS0FBSyxDQUFDTSxLQUFOLEdBQWMsRUFBZDtFQUNELENBTEQ7QUFNRCxFQUVEOzs7QUFDQSxNQUFNbkQsT0FBTyxHQUFHLE1BQU07RUFDcEIsTUFBTW9ELFdBQVcsR0FBR3ZDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFwQjtFQUNBc0MsV0FBVyxDQUFDTCxnQkFBWixDQUE2QixRQUE3QixFQUF3Q0MsQ0FBRCxJQUFPO0lBQzVDLE1BQU1LLE1BQU0sR0FBR0wsQ0FBQyxDQUFDSyxNQUFqQjtJQUNBLE1BQU0zQyxTQUFTLEdBQUcyQyxNQUFNLENBQUNDLE9BQXpCO0lBQ0E3QyxpRUFBa0IsQ0FBQ0MsU0FBRCxFQUFZZ0MsdURBQVosQ0FBbEI7SUFDQWEsYUFBYSxDQUFDN0MsU0FBRCxDQUFiO0VBQ0QsQ0FMRDtBQU1ELENBUkQ7O0FBVUEsU0FBUzZDLGFBQVQsQ0FBdUI3QyxTQUF2QixFQUFrQztFQUNoQyxNQUFNOEMsUUFBUSxHQUFHM0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWpCO0VBQ0EsTUFBTTJDLFNBQVMsR0FBRzVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFsQjtFQUNBLE1BQU1aLE9BQU8sR0FBR1csUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0VBQ0EsTUFBTVgsVUFBVSxHQUFHVSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7O0VBQ0EsSUFBSUosU0FBSixFQUFlO0lBQ2I7SUFDQThDLFFBQVEsQ0FBQ3hCLFNBQVQsQ0FBbUIwQixNQUFuQixDQUEwQixRQUExQjtJQUNBRCxTQUFTLENBQUN6QixTQUFWLENBQW9CQyxHQUFwQixDQUF3QixRQUF4QixFQUhhLENBSWI7O0lBQ0EvQixPQUFPLENBQUM4QixTQUFSLENBQWtCMEIsTUFBbEIsQ0FBeUIsaUJBQXpCO0lBQ0F4RCxPQUFPLENBQUM4QixTQUFSLENBQWtCQyxHQUFsQixDQUFzQixlQUF0QjtJQUNBOUIsVUFBVSxDQUFDNkIsU0FBWCxDQUFxQjBCLE1BQXJCLENBQTRCLGVBQTVCO0lBQ0F2RCxVQUFVLENBQUM2QixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixpQkFBekI7RUFDRDs7RUFFRCxJQUFJLENBQUN2QixTQUFMLEVBQWdCO0lBQ2Q4QyxRQUFRLENBQUN4QixTQUFULENBQW1CQyxHQUFuQixDQUF1QixRQUF2QjtJQUNBd0IsU0FBUyxDQUFDekIsU0FBVixDQUFvQjBCLE1BQXBCLENBQTJCLFFBQTNCO0lBRUF4RCxPQUFPLENBQUM4QixTQUFSLENBQWtCQyxHQUFsQixDQUFzQixpQkFBdEI7SUFDQS9CLE9BQU8sQ0FBQzhCLFNBQVIsQ0FBa0IwQixNQUFsQixDQUF5QixlQUF6QjtJQUNBdkQsVUFBVSxDQUFDNkIsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsZUFBekI7SUFDQTlCLFVBQVUsQ0FBQzZCLFNBQVgsQ0FBcUIwQixNQUFyQixDQUE0QixpQkFBNUI7RUFDRDtBQUNGOztBQUVELE1BQU1DLFVBQVUsR0FBRyxNQUFNO0VBQ3ZCLE1BQU1uRSxJQUFJLEdBQUdxQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBYjtFQUNBLE1BQU04QyxlQUFlLEdBQUcvQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXhCO0VBQ0E4QyxlQUFlLENBQUNiLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEyQ0MsQ0FBRCxJQUFPO0lBQy9DeEQsSUFBSSxDQUFDcUUsS0FBTDtFQUNELENBRkQ7QUFHRCxDQU5ELEVBUUE7OztBQUVBLE1BQU1DLFVBQVUsR0FBRyxNQUFNO0VBQ3ZCLE1BQU1DLE9BQU8sR0FBR2xELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtFQUNBLE1BQU1zQyxXQUFXLEdBQUd2QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBcEI7RUFDQWlELE9BQU8sQ0FBQ2hCLGdCQUFSLENBQXlCLE9BQXpCLEVBQW1DQyxDQUFELElBQU87SUFDdkNJLFdBQVcsQ0FBQ3JDLFNBQVosR0FBd0IsRUFBeEI7SUFDQXFDLFdBQVcsQ0FBQ25DLE1BQVosQ0FBbUIwQixpREFBVSxFQUE3QjtJQUNBZ0IsVUFBVTtFQUNYLENBSkQ7QUFLRCxDQVJELEVBVUE7OztBQUNBLE1BQU1LLE1BQU0sR0FBRyxNQUFNO0VBQ25CcEIsV0FBVztFQUNYNUMsT0FBTztFQUNQMkQsVUFBVTtFQUNWRyxVQUFVO0FBQ1gsQ0FMRDs7QUFPQSxpRUFBZUUsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBRUEsSUFBSXZDLFNBQVMsR0FBRyxJQUFoQjs7QUFDQSxNQUFNZ0IsT0FBTyxHQUFHLE1BQU8wQixJQUFQLElBQWdCO0VBQzlCLElBQUk7SUFDRixNQUFNQyxPQUFPLEdBQUcsa0NBQWhCO0lBQ0FGLG9EQUFPLENBQUN6QyxTQUFELENBQVA7SUFDQSxNQUFNNEMsR0FBRyxHQUFJLHFEQUFvREYsSUFBSyxVQUFTQyxPQUFRLGVBQXZGO0lBQ0EsTUFBTWhELFFBQVEsR0FBRyxNQUFNa0QsS0FBSyxDQUFDRCxHQUFELENBQTVCO0lBQ0FsRCxrREFBVSxDQUFDQyxRQUFELENBQVY7SUFDQUssU0FBUyxHQUFHLEtBQVo7SUFDQSxNQUFNeEQsSUFBSSxHQUFHLE1BQU1tRCxRQUFRLENBQUNtRCxJQUFULEVBQW5CO0lBQ0FOLDBEQUFZLENBQUNoRyxJQUFELENBQVo7SUFDQW1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcEMsSUFBWjtJQUNBLE9BQU9BLElBQVA7RUFDRCxDQVhELENBV0UsT0FBT3VELEdBQVAsRUFBWTtJQUNaRCxzREFBYyxDQUFDQyxHQUFELEVBQU1DLFNBQU4sQ0FBZDtFQUNEO0FBQ0YsQ0FmRDs7QUFpQkEsaUVBQWVnQixPQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7O0FBRUEsTUFBTStCLGFBQWEsR0FBRyxNQUFNO0VBQzFCO0VBQ0EsTUFBTUMsTUFBTSxHQUFHbEcsa0RBQUEsQ0FBcUIsR0FBckIsRUFBMEIsSUFBMUIsRUFBZ0M7SUFBRUksS0FBSyxFQUFFO0VBQVQsQ0FBaEMsQ0FBZjtFQUNBLE1BQU0rRixPQUFPLEdBQUduRyxrREFBQSxDQUFxQixHQUFyQixFQUEwQixJQUExQixFQUFnQztJQUFFSSxLQUFLLEVBQUU7RUFBVCxDQUFoQyxDQUFoQjtFQUNBLE1BQU1nRyxRQUFRLEdBQUdwRyxrREFBQSxDQUFxQixHQUFyQixFQUEwQixJQUExQixFQUFnQztJQUMvQ0ksS0FBSyxFQUFFO0VBRHdDLENBQWhDLENBQWpCLENBSjBCLENBTzFCOztFQUNBLE1BQU1pRyxVQUFVLEdBQUdyRyxrREFBQSxDQUFxQixHQUFyQixFQUEwQixDQUFDa0csTUFBRCxDQUExQixFQUFvQztJQUNyREksSUFBSSxFQUFFLDZCQUQrQztJQUVyRGxHLEtBQUssRUFBRyxHQUFFZSw0REFBbUIsRUFGd0I7SUFHckQyRCxNQUFNLEVBQUU7RUFINkMsQ0FBcEMsQ0FBbkI7RUFLQSxNQUFNeUIsV0FBVyxHQUFHdkcsa0RBQUEsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBQ21HLE9BQUQsQ0FBMUIsRUFBcUM7SUFDdkRHLElBQUksRUFBRSxnQ0FEaUQ7SUFFdkRsRyxLQUFLLEVBQUcsR0FBRWUsNERBQW1CLEVBRjBCO0lBR3ZEMkQsTUFBTSxFQUFFO0VBSCtDLENBQXJDLENBQXBCO0VBS0EsTUFBTTBCLFlBQVksR0FBR3hHLGtEQUFBLENBQXFCLEdBQXJCLEVBQTBCLENBQUNvRyxRQUFELENBQTFCLEVBQXNDO0lBQ3pERSxJQUFJLEVBQUUsd0NBRG1EO0lBRXpEbEcsS0FBSyxFQUFHLEdBQUVlLDREQUFtQixHQUY0QjtJQUd6RDJELE1BQU0sRUFBRTtFQUhpRCxDQUF0QyxDQUFyQixDQWxCMEIsQ0F3QjFCOztFQUNBLE1BQU0yQixZQUFZLEdBQUd6RyxrREFBQSxDQUNuQixLQURtQixFQUVuQixDQUFDcUcsVUFBRCxFQUFhRSxXQUFiLEVBQTBCQyxZQUExQixDQUZtQixFQUduQjtJQUFFcEcsS0FBSyxFQUFFO0VBQVQsQ0FIbUIsQ0FBckIsQ0F6QjBCLENBK0IxQjs7RUFDQSxNQUFNc0csZUFBZSxHQUFHMUcsNENBQUEsQ0FBZSxZQUFmLENBQXhCO0VBQ0EsTUFBTTJHLFNBQVMsR0FBRzNHLGtEQUFBLENBQ2hCLEdBRGdCLEVBRWhCLENBQUMwRyxlQUFELEVBQWtCLGFBQWxCLENBRmdCLEVBR2hCO0lBQ0V0RyxLQUFLLEVBQUU7RUFEVCxDQUhnQixDQUFsQixDQWpDMEIsQ0F5QzFCOztFQUNBLE1BQU1ZLE9BQU8sR0FBR2hCLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUN5RyxZQUFELEVBQWVFLFNBQWYsQ0FBNUIsRUFBdUQ7SUFDckV2RyxLQUFLLEVBQUcsR0FBRWUsOERBQXFCO0VBRHNDLENBQXZELENBQWhCLENBMUMwQixDQThDMUI7O0VBQ0EsTUFBTXlGLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtFQUNBRCxRQUFRLENBQUNsRSxNQUFULENBQWdCMUIsT0FBaEIsRUFoRDBCLENBaUQxQjs7RUFDQSxNQUFNOEYsTUFBTSxHQUFHOUcsa0RBQUEsQ0FBcUIsUUFBckIsRUFBK0IsQ0FBQzRHLFFBQUQsQ0FBL0IsRUFBMkM7SUFDeER4RyxLQUFLLEVBQUcsR0FBRWUsOERBQXFCO0VBRHlCLENBQTNDLENBQWY7RUFJQSxPQUFPMkYsTUFBUDtBQUNELENBdkREOztBQXlEQSxpRUFBZWIsYUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDNURBOztBQUVBLE1BQU1jLGFBQWEsR0FBRyxNQUFNO0VBQzFCLE1BQU1ILFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtFQUVBOztFQUNBLE1BQU1HLE9BQU8sR0FBR2hILG9EQUFBLENBQXVCLE9BQXZCLENBQWhCO0VBQ0FnSCxPQUFPLENBQUN2RCxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixlQUF0QixFQUF1QyxTQUF2QztFQUNBLE1BQU11RCxJQUFJLEdBQUdqSCxrREFBQSxDQUFxQixJQUFyQixFQUEyQixDQUFDLE1BQUQsRUFBU2dILE9BQVQsQ0FBM0IsRUFBOEM7SUFDekQ1RyxLQUFLLEVBQ0g7RUFGdUQsQ0FBOUMsQ0FBYjtFQUlBLE1BQU04RyxPQUFPLEdBQUdsSCxrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDaUgsSUFBRCxDQUE1QixFQUFvQztJQUNsRDdHLEtBQUssRUFBRTtFQUQyQyxDQUFwQyxDQUFoQjtFQUlBO0VBRUE7O0VBQ0EsTUFBTStHLFdBQVcsR0FBR25ILGtEQUFBLENBQXFCLE9BQXJCLEVBQThCLEVBQTlCLEVBQWtDO0lBQ3BEUyxJQUFJLEVBQUUsUUFEOEM7SUFFcER6QixFQUFFLEVBQUUsY0FGZ0Q7SUFHcEQwQixXQUFXLEVBQUUseUJBSHVDO0lBSXBETixLQUFLLEVBQ0gsd0pBTGtEO0lBTXBETyxZQUFZLEVBQUU7RUFOc0MsQ0FBbEMsQ0FBcEIsQ0FqQjBCLENBMEIxQjs7RUFDQSxNQUFNeUcsVUFBVSxHQUFHcEgsa0RBQUEsQ0FBcUIsR0FBckIsRUFBMEIsRUFBMUIsRUFBOEI7SUFDL0NJLEtBQUssRUFBRTtFQUR3QyxDQUE5QixDQUFuQixDQTNCMEIsQ0ErQjFCOztFQUNBLE1BQU1pSCxZQUFZLEdBQUdySCxrREFBQSxDQUFxQixRQUFyQixFQUErQixDQUFDb0gsVUFBRCxDQUEvQixFQUE2QztJQUNoRTNHLElBQUksRUFBRSxRQUQwRDtJQUVoRXpCLEVBQUUsRUFBRSxZQUY0RDtJQUdoRW9CLEtBQUssRUFBRTtFQUh5RCxDQUE3QyxDQUFyQixDQWhDMEIsQ0FzQzFCOztFQUNBLE1BQU1hLElBQUksR0FBR2pCLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUNtSCxXQUFELEVBQWNFLFlBQWQsQ0FBN0IsRUFBMEQ7SUFDckVqSCxLQUFLLEVBQ0g7RUFGbUUsQ0FBMUQsQ0FBYixDQXZDMEIsQ0E0QzFCOztFQUNBLE1BQU1rSCxRQUFRLEdBQUd0SCxrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDaUIsSUFBRCxDQUE1QixFQUFvQztJQUNuRGIsS0FBSyxFQUNIO0VBRmlELENBQXBDLENBQWpCO0VBS0E7O0VBQ0EsTUFBTW1ILEdBQUcsR0FBR3ZILGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUNrSCxPQUFELEVBQVVJLFFBQVYsQ0FBNUIsRUFBaUQ7SUFDM0RsSCxLQUFLLEVBQ0g7RUFGeUQsQ0FBakQsQ0FBWjtFQUtBd0csUUFBUSxDQUFDbEUsTUFBVCxDQUFnQjZFLEdBQWhCO0VBRUEsTUFBTUMsTUFBTSxHQUFHeEgsa0RBQUEsQ0FBcUIsUUFBckIsRUFBK0IsQ0FBQzRHLFFBQUQsQ0FBL0IsRUFBMkM7SUFDeER4RyxLQUFLLEVBQ0g7RUFGc0QsQ0FBM0MsQ0FBZjtFQUlBLE9BQU9vSCxNQUFQO0FBQ0QsQ0EvREQ7O0FBaUVBLGlFQUFlVCxhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsU0FBU1UsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUJDLE9BQXZCLEVBQWdDO0VBQzlCQSxPQUFPLENBQUNDLE9BQVIsQ0FBaUJySixDQUFELElBQU9tSixHQUFHLENBQUNqRSxTQUFKLENBQWNDLEdBQWQsQ0FBa0JuRixDQUFsQixDQUF2QjtBQUNEOztBQUVELE1BQU00QixhQUFhLEdBQUcsQ0FBQzBILEdBQUQsRUFBTUMsSUFBTixFQUFZQyxTQUFaLEtBQTBCO0VBQzlDLE1BQU1DLE9BQU8sR0FBRzFGLFFBQVEsQ0FBQ25DLGFBQVQsQ0FBdUIwSCxHQUF2QixDQUFoQjs7RUFDQSxJQUFJQyxJQUFKLEVBQVU7SUFDUkEsSUFBSSxDQUFDRixPQUFMLENBQWNySixDQUFELElBQU95SixPQUFPLENBQUN0RixNQUFSLENBQWVuRSxDQUFmLENBQXBCO0VBQ0Q7O0VBQ0QsSUFBSXdKLFNBQUosRUFBZTtJQUNiLE1BQU1FLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLFNBQVosQ0FBbkI7SUFDQUUsVUFBVSxDQUFDTCxPQUFYLENBQW9CckosQ0FBRCxJQUFPeUosT0FBTyxDQUFDSSxZQUFSLENBQXFCN0osQ0FBckIsRUFBd0J3SixTQUFTLENBQUN4SixDQUFELENBQWpDLENBQTFCO0VBQ0Q7O0VBRUQsT0FBT3lKLE9BQVA7QUFDRCxDQVhELEVBYUE7OztBQUNBLE1BQU14RSxlQUFlLEdBQUk2RSxJQUFELElBQVU7RUFDaEMsTUFBTUMsVUFBVSxHQUFHaEcsUUFBUSxDQUFDbkMsYUFBVCxDQUF1QixNQUF2QixDQUFuQjtFQUNBbUksVUFBVSxDQUFDOUYsU0FBWCxHQUF1QjZGLElBQXZCO0VBQ0EsT0FBT0MsVUFBUDtBQUNELENBSkQsRUFNQTs7O0FBQ0EsTUFBTTNGLE9BQU8sR0FBSTBGLElBQUQsSUFBVTtFQUN4QixNQUFNRSxTQUFTLEdBQUdqRyxRQUFRLENBQUNuQyxhQUFULENBQXVCLE1BQXZCLENBQWxCO0VBQ0FvSSxTQUFTLENBQUMvRixTQUFWLEdBQXNCNkYsSUFBdEI7RUFDQSxNQUFNRyxNQUFNLEdBQUdELFNBQVMsQ0FBQ0UsV0FBekI7RUFDQSxPQUFPRCxNQUFQO0FBQ0QsQ0FMRDs7QUFPQSxNQUFNRSxPQUFPLEdBQUcsQ0FBQ0MsT0FBRCxFQUFVeEgsTUFBVixLQUFxQjtFQUNuQyxNQUFNeUgsSUFBSSxHQUFHekksYUFBYSxDQUFDLE1BQUQsRUFBUyxDQUFDd0ksT0FBRCxDQUFULEVBQW9CO0lBQzVDdkksS0FBSyxFQUFFO0VBRHFDLENBQXBCLENBQTFCO0VBR0FxSCxRQUFRLENBQUNtQixJQUFELEVBQU96SCxNQUFQLENBQVI7RUFDQSxPQUFPeUgsSUFBUDtBQUNELENBTkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOztBQUVBLFNBQVN4RSxVQUFULEdBQXNCO0VBQ3BCLE1BQU1vRCxNQUFNLEdBQUd4SCxrREFBQSxDQUNiLElBRGEsRUFFYixDQUFDLDRDQUFELENBRmEsRUFHYjtJQUNFSSxLQUFLLEVBQ0g7RUFGSixDQUhhLENBQWY7RUFTQSxNQUFNaUYsZUFBZSxHQUFHckYsa0RBQUEsQ0FBcUIsUUFBckIsRUFBK0IsQ0FBQyxhQUFELENBQS9CLEVBQWdEO0lBQ3RFSSxLQUFLLEVBQ0g7RUFGb0UsQ0FBaEQsQ0FBeEI7RUFJQSxNQUFNeUksVUFBVSxHQUFHN0ksa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQ3dILE1BQUQsRUFBU25DLGVBQVQsQ0FBNUIsRUFBdUQ7SUFDeEVqRixLQUFLLEVBQ0g7RUFGc0UsQ0FBdkQsQ0FBbkI7RUFLQSxNQUFNMEksT0FBTyxHQUFHOUksa0RBQUEsQ0FBcUIsU0FBckIsRUFBZ0MsQ0FBQzZJLFVBQUQsQ0FBaEMsRUFBOEM7SUFDNUR6SSxLQUFLLEVBQ0g7RUFGMEQsQ0FBOUMsQ0FBaEI7RUFLQTJJLFVBQVUsQ0FBQyxNQUFNO0lBQ2ZELE9BQU8sQ0FBQ3BHLE1BQVIsQ0FBZXpDLDREQUFtQixFQUFsQztFQUNELENBRlMsRUFFUCxJQUZPLENBQVY7RUFHQSxPQUFPNkksT0FBUDtBQUNEOztBQUVELGlFQUFlMUUsVUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDakNBOztBQUVBLFNBQVN1QixPQUFULENBQWlCekMsU0FBakIsRUFBNEI7RUFDMUIsTUFBTThGLFVBQVUsR0FBR2hKLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUMsWUFBRCxDQUE1QixFQUE0QztJQUM3REksS0FBSyxFQUFFO0VBRHNELENBQTVDLENBQW5CO0VBR0EsTUFBTTZELElBQUksR0FBRzNCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztFQUNBLElBQUlXLFNBQUosRUFBZTtJQUNiZSxJQUFJLENBQUN6QixTQUFMLEdBQWlCLEVBQWpCO0lBQ0F5QixJQUFJLENBQUN2QixNQUFMLENBQVlzRyxVQUFaO0VBQ0Q7O0VBRUQsT0FBTy9FLElBQVA7QUFDRDs7QUFFRCxpRUFBZTBCLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBLE1BQU1zRCxXQUFXLEdBQUcsTUFBTTtFQUN4QjtFQUNBLE1BQU1yQyxRQUFRLEdBQUcsSUFBSUMsZ0JBQUosRUFBakI7RUFDQUQsUUFBUSxDQUFDbEUsTUFBVCxDQUFnQjBCLGlEQUFVLEVBQTFCO0VBQ0EsTUFBTUgsSUFBSSxHQUFHakUsa0RBQUEsQ0FBcUIsTUFBckIsRUFBNkIsQ0FBQzRHLFFBQUQsQ0FBN0IsRUFBeUM7SUFDcER4RyxLQUFLLEVBQ0g7RUFGa0QsQ0FBekMsQ0FBYjtFQUlBLE9BQU82RCxJQUFQO0FBQ0QsQ0FURDs7QUFXQSxpRUFBZWdGLFdBQWY7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQSxNQUFNQyxVQUFVLEdBQUcsQ0FDakI7RUFBRWxLLEVBQUUsRUFBRSxDQUFOO0VBQVNtSyxHQUFHLEVBQUU7QUFBZCxDQURpQixFQUVqQjtFQUFFbkssRUFBRSxFQUFFLENBQU47RUFBU21LLEdBQUcsRUFBRTtBQUFkLENBRmlCLEVBR2pCO0VBQUVuSyxFQUFFLEVBQUUsQ0FBTjtFQUFTbUssR0FBRyxFQUFFO0FBQWQsQ0FIaUIsRUFJakI7RUFBRW5LLEVBQUUsRUFBRSxDQUFOO0VBQVNtSyxHQUFHLEVBQUU7QUFBZCxDQUppQixFQUtqQjtFQUFFbkssRUFBRSxFQUFFLENBQU47RUFBU21LLEdBQUcsRUFBRTtBQUFkLENBTGlCLEVBTWpCO0VBQUVuSyxFQUFFLEVBQUUsQ0FBTjtFQUFTbUssR0FBRyxFQUFFO0FBQWQsQ0FOaUIsRUFPakI7RUFBRW5LLEVBQUUsRUFBRSxDQUFOO0VBQVNtSyxHQUFHLEVBQUU7QUFBZCxDQVBpQixDQUFuQixFQVVBOztBQUNBLFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0VBQ3ZCLElBQUlGLEdBQUcsR0FBRyxJQUFWO0VBQ0FELFVBQVUsQ0FBQ3RCLE9BQVgsQ0FBb0JySixDQUFELElBQU87SUFDeEIsSUFBSUEsQ0FBQyxDQUFDUyxFQUFGLEtBQVNxSyxJQUFiLEVBQW1CO01BQ2pCRixHQUFHLEdBQUc1SyxDQUFDLENBQUM0SyxHQUFSO0lBQ0Q7RUFDRixDQUpEO0VBS0EsT0FBT0EsR0FBUDtBQUNELEVBRUQ7OztBQUNBLFNBQVNHLFFBQVQsQ0FBa0JDLGNBQWxCLEVBQWtDO0VBQ2hDLE1BQU1GLElBQUksR0FBRyxJQUFJRyxJQUFKLEVBQWI7RUFDQSxNQUFNQyxTQUFTLEdBQUdKLElBQUksQ0FBQ0ssT0FBTCxFQUFsQjtFQUNBLE1BQU1DLGVBQWUsR0FBR04sSUFBSSxDQUFDTyxpQkFBTCxLQUEyQixLQUFuRDtFQUNBLE1BQU1DLE9BQU8sR0FBR0osU0FBUyxHQUFHRSxlQUE1QjtFQUNBLE1BQU1HLGNBQWMsR0FBR0QsT0FBTyxHQUFHLE9BQU9OLGNBQXhDO0VBQ0EsTUFBTVEsWUFBWSxHQUFHLElBQUlQLElBQUosQ0FBU00sY0FBVCxDQUFyQjtFQUNBakksT0FBTyxDQUFDQyxHQUFSLENBQVlpSSxZQUFaO0VBQ0EsT0FBT0EsWUFBUDtBQUNEOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JULGNBQXhCLEVBQXdDO0VBQ3RDO0VBQ0EsTUFBTUYsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQUQsQ0FBckI7RUFDQSxNQUFNSixHQUFHLEdBQUdDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDWSxNQUFMLEVBQUQsQ0FBckI7RUFDQSxNQUFNQyxjQUFjLEdBQUdiLElBQUksQ0FBQ2MsY0FBTCxDQUFvQixFQUFwQixFQUF3QjtJQUM3Q0MsSUFBSSxFQUFFLFNBRHVDO0lBRTdDQyxNQUFNLEVBQUU7RUFGcUMsQ0FBeEIsQ0FBdkIsQ0FKc0MsQ0FTdEM7O0VBQ0EsTUFBTUMsVUFBVSxHQUFJLEdBQUVuQixHQUFJLElBQUdlLGNBQWUsRUFBNUM7RUFDQSxPQUFPSSxVQUFQO0FBQ0Q7O0FBRUQsaUVBQWVOLGNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFFTyxJQUFJN0YsV0FBVyxHQUFHLElBQWxCOztBQUVQLE1BQU11QixZQUFZLEdBQUloRyxJQUFELElBQVU7RUFDN0J5RSxXQUFXLEdBQUcsQ0FDWjtJQUNFL0IsT0FBTyxFQUFFMUMsSUFBSSxDQUFDMEMsT0FBTCxDQUFhLENBQWIsRUFBZ0I2QixJQUQzQjtJQUVFdUcsV0FBVyxFQUFFOUssSUFBSSxDQUFDMEMsT0FBTCxDQUFhLENBQWIsRUFBZ0JxSSxXQUYvQjtJQUdFaEksSUFBSSxFQUFFL0MsSUFBSSxDQUFDdUUsSUFBTCxDQUFVeEIsSUFIbEI7SUFJRWlJLE9BQU8sRUFBRWhMLElBQUksQ0FBQ3VFLElBQUwsQ0FBVTBHLFFBQVYsQ0FBbUI1SSxPQUFuQixDQUEyQixDQUEzQixDQUpYO0lBS0U2SSxPQUFPLEVBQUVsTCxJQUFJLENBQUN1RSxJQUFMLENBQVU0RyxRQUFWLENBQW1COUksT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FMWDtJQU1FK0ksU0FBUyxFQUFFcEwsSUFBSSxDQUFDdUUsSUFBTCxDQUFVOEcsVUFOdkI7SUFPRUMsUUFBUSxFQUFFdEwsSUFBSSxDQUFDdUUsSUFBTCxDQUFVK0csUUFQdEI7SUFRRUMsUUFBUSxFQUFFdkwsSUFBSSxDQUFDdUUsSUFBTCxDQUFVZ0gsUUFSdEI7SUFTRUMsSUFBSSxFQUFFeEwsSUFBSSxDQUFDd0wsSUFBTCxDQUFVQyxLQVRsQjtJQVVFQyxPQUFPLEVBQUUxTCxJQUFJLENBQUMyTCxHQUFMLENBQVNELE9BVnBCO0lBV0V4RixJQUFJLEVBQUVsRyxJQUFJLENBQUM0TCxJQVhiO0lBWUVDLFFBQVEsRUFBRTdMLElBQUksQ0FBQzhMLFFBWmpCO0lBYUVDLElBQUksRUFBRS9MLElBQUksQ0FBQ2dNLEVBYmI7SUFjRUMsSUFBSSxFQUFHLG9DQUFtQ2pNLElBQUksQ0FBQzBDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCdUosSUFBSztFQWRqRSxDQURZLENBQWQ7RUFrQkE5SixPQUFPLENBQUNDLEdBQVIsQ0FBWXFDLFdBQVo7RUFDQW9HLHdEQUFXLENBQUNwRyxXQUFELENBQVg7QUFDRCxDQXJCRDs7QUF1QkEsaUVBQWV1QixZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTTZFLFdBQVcsR0FBSW5JLE9BQUQsSUFBYTtFQUMvQixNQUFNNkIsSUFBSSxHQUFHM0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7RUFDQTBCLElBQUksQ0FBQ3pCLFNBQUwsR0FBaUIsRUFBakI7RUFDQUosT0FBTyxDQUFDd0YsT0FBUixDQUFpQjNKLElBQUQsSUFBVTtJQUN4QixNQUFNNk4sT0FBTyxHQUFHOUwsa0RBQUEsQ0FDZCxTQURjLEVBRWQsQ0FBQzZMLDhEQUFpQixDQUFDNU4sSUFBRCxDQUFsQixFQUEwQjJOLCtEQUFrQixDQUFDM04sSUFBRCxDQUE1QyxDQUZjLEVBR2Q7TUFDRW1DLEtBQUssRUFBRTtJQURULENBSGMsQ0FBaEI7SUFPQTZELElBQUksQ0FBQ3ZCLE1BQUwsQ0FBWW9KLE9BQVo7RUFDRCxDQVREO0FBVUQsQ0FiRDs7QUFlQSxpRUFBZXZCLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTs7QUFDQSxNQUFNcUIsa0JBQWtCLEdBQUl4SixPQUFELElBQWE7RUFDdEMsTUFBTTJKLGFBQWEsR0FBRy9MLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMsWUFBRCxDQUE3QixFQUE2QztJQUNqRUksS0FBSyxFQUFHLDJCQUEwQmUsc0RBQWE7RUFEa0IsQ0FBN0MsQ0FBdEI7RUFHQSxNQUFNMkosU0FBUyxHQUFHOUssa0RBQUEsQ0FDaEIsR0FEZ0IsRUFFaEIsQ0FBRSxlQUFjb0MsT0FBTyxDQUFDMEksU0FBUixDQUFrQi9JLE9BQWxCLENBQTBCLENBQTFCLENBQTZCLEVBQTdDLEVBQWdEL0IsNENBQUEsQ0FBZSxPQUFmLENBQWhELENBRmdCLEVBR2hCLElBSGdCLENBQWxCO0VBS0EsTUFBTWdNLFlBQVksR0FBR2hNLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUMrTCxhQUFELEVBQWdCakIsU0FBaEIsQ0FBNUIsRUFBd0Q7SUFDM0UxSyxLQUFLLEVBQUVlLDJEQUFpQkM7RUFEbUQsQ0FBeEQsQ0FBckIsQ0FUc0MsQ0FhdEM7O0VBQ0EsTUFBTTZLLFlBQVksR0FBR2pNLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMsWUFBRCxDQUE3QixFQUE2QztJQUNoRUksS0FBSyxFQUFHLDJCQUEwQmUsc0RBQWE7RUFEaUIsQ0FBN0MsQ0FBckI7RUFHQSxNQUFNNkosUUFBUSxHQUFHaEwsa0RBQUEsQ0FDZixHQURlLEVBRWYsQ0FBRSxhQUFZb0MsT0FBTyxDQUFDNEksUUFBUyxFQUEvQixDQUZlLEVBR2YsSUFIZSxDQUFqQjtFQUtBLE1BQU1rQixXQUFXLEdBQUdsTSxrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDaU0sWUFBRCxFQUFlakIsUUFBZixDQUE1QixFQUFzRDtJQUN4RTVLLEtBQUssRUFBRWUsMkRBQWlCQztFQURnRCxDQUF0RCxDQUFwQixDQXRCc0MsQ0EwQnRDOztFQUNBLE1BQU0rSyxRQUFRLEdBQUduTSxrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDLEtBQUQsQ0FBN0IsRUFBc0M7SUFDckRJLEtBQUssRUFBRywyQkFBMEJlLHNEQUFhO0VBRE0sQ0FBdEMsQ0FBakI7RUFHQSxNQUFNK0osSUFBSSxHQUFHbEwsa0RBQUEsQ0FDWCxHQURXLEVBRVgsQ0FBRSxTQUFRb0MsT0FBTyxDQUFDOEksSUFBUixDQUFhbkosT0FBYixDQUFxQixDQUFyQixDQUF3QixNQUFsQyxDQUZXLEVBR1gsSUFIVyxDQUFiO0VBS0EsTUFBTXFLLE9BQU8sR0FBR3BNLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUNtTSxRQUFELEVBQVdqQixJQUFYLENBQTVCLEVBQThDO0lBQzVEOUssS0FBSyxFQUFFZSwyREFBaUJDO0VBRG9DLENBQTlDLENBQWhCLENBbkNzQyxDQXVDdEM7O0VBQ0EsTUFBTWlMLFlBQVksR0FBR3JNLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMsU0FBRCxDQUE3QixFQUEwQztJQUM3REksS0FBSyxFQUFHLDJCQUEwQmUsc0RBQWE7RUFEYyxDQUExQyxDQUFyQjtFQUdBLE1BQU04SixRQUFRLEdBQUdqTCxrREFBQSxDQUNmLEdBRGUsRUFFZixDQUFFLGFBQVlvQyxPQUFPLENBQUM2SSxRQUFTLEVBQS9CLENBRmUsRUFHZixJQUhlLENBQWpCO0VBS0EsTUFBTXFCLFdBQVcsR0FBR3RNLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUNxTSxZQUFELEVBQWVwQixRQUFmLENBQTVCLEVBQXNEO0lBQ3hFN0ssS0FBSyxFQUFFZSwyREFBaUJDO0VBRGdELENBQXRELENBQXBCO0VBSUEsTUFBTXdGLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtFQUNBRCxRQUFRLENBQUNsRSxNQUFULENBQWdCd0osV0FBaEIsRUFBNkJFLE9BQTdCLEVBQXNDRSxXQUF0QyxFQUFtRE4sWUFBbkQ7RUFDQSxNQUFNTyxtQkFBbUIsR0FBR3ZNLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUM0RyxRQUFELENBQTVCLEVBQXdDO0lBQ2xFeEcsS0FBSyxFQUNIO0VBRmdFLENBQXhDLENBQTVCO0VBS0EsT0FBT21NLG1CQUFQO0FBQ0QsQ0E1REQ7O0FBOERBLGlFQUFlWCxrQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1DLGlCQUFpQixHQUFJekosT0FBRCxJQUFhO0VBQ3JDO0VBQ0EsTUFBTW9LLFlBQVksR0FBR3hNLDRDQUFBLENBQWUsYUFBZixFQUE4QixDQUFDMkgsc0RBQUQsQ0FBOUIsQ0FBckI7RUFDQTZFLFlBQVksQ0FBQy9JLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFNBQTNCLEVBQXNDLGlCQUF0QztFQUNBLE1BQU1rQyxJQUFJLEdBQUc1RixrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFFLEdBQUVvQyxPQUFPLENBQUN3RCxJQUFLLElBQWpCLENBQTdCLEVBQW9ELElBQXBELENBQWI7RUFDQSxNQUFNakIsUUFBUSxHQUFHM0Usa0RBQUEsQ0FDZixJQURlLEVBRWYsQ0FBQ3dNLFlBQUQsRUFBZTVHLElBQWYsRUFBcUJ4RCxPQUFPLENBQUNnSixPQUE3QixDQUZlLEVBR2Y7SUFBRWhMLEtBQUssRUFBRTtFQUFULENBSGUsQ0FBakI7RUFLQSxNQUFNcUosU0FBUyxHQUFHekosa0RBQUEsQ0FDaEIsSUFEZ0IsRUFFaEIsQ0FBRSxHQUFFZ0ssd0RBQWMsQ0FBQzVILE9BQU8sQ0FBQ21KLFFBQVQsQ0FBbUIsRUFBckMsQ0FGZ0IsRUFHaEIsSUFIZ0IsQ0FBbEI7RUFLQSxNQUFNa0IsU0FBUyxHQUFHek0sa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQzJFLFFBQUQsRUFBVzhFLFNBQVgsQ0FBNUIsRUFBbUQ7SUFDbkVySixLQUFLLEVBQ0g7RUFGaUUsQ0FBbkQsQ0FBbEI7RUFJQSxNQUFNc00sS0FBSyxHQUFHMU0sa0RBQUEsQ0FBcUIsTUFBckIsRUFBNkIsQ0FBQyxhQUFELENBQTdCLEVBQThDO0lBQzFESSxLQUFLLEVBQUU7RUFEbUQsQ0FBOUMsQ0FBZCxDQW5CcUMsQ0F1QnJDOztFQUNBLE1BQU11TSxXQUFXLEdBQUczTSxrREFBQSxDQUFxQixLQUFyQixFQUE0QixFQUE1QixFQUFnQztJQUNsRDRNLEdBQUcsRUFBRXhLLE9BQU8sQ0FBQ3VKLElBRHFDO0lBRWxEa0IsR0FBRyxFQUFFLGNBRjZDO0lBR2xEek0sS0FBSyxFQUFFO0VBSDJDLENBQWhDLENBQXBCLENBeEJxQyxDQThCckM7O0VBQ0EsTUFBTTBNLGtCQUFrQixHQUFHOU0sa0RBQUEsQ0FDekIsSUFEeUIsRUFFekIsQ0FBQzBNLEtBQUQsRUFBUXRLLE9BQU8sQ0FBQ29JLFdBQWhCLENBRnlCLEVBR3pCO0lBQ0VwSyxLQUFLLEVBQ0g7RUFGSixDQUh5QixDQUEzQixDQS9CcUMsQ0F3Q3JDOztFQUNBLE1BQU0yTSxXQUFXLEdBQUcvTSxrREFBQSxDQUNsQixLQURrQixFQUVsQixDQUFDOE0sa0JBQUQsRUFBcUJILFdBQXJCLENBRmtCLEVBR2xCO0lBQ0V2TSxLQUFLLEVBQUU7RUFEVCxDQUhrQixDQUFwQixDQXpDcUMsQ0FnRHJDOztFQUNBLE1BQU00TSxHQUFHLEdBQUdoTiw0Q0FBQSxDQUFlLE9BQWYsQ0FBWixDQWpEcUMsQ0FrRHJDOztFQUNBLE1BQU1pTixXQUFXLEdBQUdqTixrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDLEdBQUQsQ0FBN0IsRUFBb0MsSUFBcEMsQ0FBcEIsQ0FuRHFDLENBb0RyQztFQUNBOztFQUNBLE1BQU1rTixXQUFXLEdBQUdsTixrREFBQSxDQUNsQixJQURrQixFQUVsQixDQUFDb0MsT0FBTyxDQUFDSyxJQUFSLENBQWFWLE9BQWIsQ0FBcUIsQ0FBckIsQ0FBRCxFQUEwQmlMLEdBQTFCLEVBQStCQyxXQUEvQixDQUZrQixFQUdsQjtJQUNFN00sS0FBSyxFQUFFO0VBRFQsQ0FIa0IsQ0FBcEIsQ0F0RHFDLENBOERyQzs7RUFDQSxNQUFNK00sSUFBSSxHQUFHbk4sa0RBQUEsQ0FDWCxNQURXLEVBRVgsQ0FBQyxJQUFELEVBQU9vQyxPQUFPLENBQUNzSSxPQUFmLEVBQXdCMUssNENBQUEsQ0FBZSxPQUFmLENBQXhCLENBRlcsRUFHWCxJQUhXLENBQWI7RUFLQSxNQUFNb04sR0FBRyxHQUFHcE4sa0RBQUEsQ0FDVixNQURVLEVBRVYsQ0FBQyxJQUFELEVBQU9vQyxPQUFPLENBQUN3SSxPQUFmLEVBQXdCNUssNENBQUEsQ0FBZSxPQUFmLENBQXhCLENBRlUsRUFHVixJQUhVLENBQVo7RUFNQSxNQUFNcU4sR0FBRyxHQUFHck4sb0RBQUEsQ0FBdUIsT0FBdkIsQ0FBWjtFQUNBcU4sR0FBRyxDQUFDNUosU0FBSixDQUFjQyxHQUFkLENBQWtCLFVBQWxCLEVBQThCLFdBQTlCO0VBRUEsTUFBTTRKLE1BQU0sR0FBR3ROLGtEQUFBLENBQXFCLElBQXJCLEVBQTJCLENBQUNtTixJQUFELEVBQU9FLEdBQVAsRUFBWUQsR0FBWixDQUEzQixFQUE2QztJQUMxRGhOLEtBQUssRUFDSDtFQUZ3RCxDQUE3QyxDQUFmO0VBS0EsTUFBTW1OLFdBQVcsR0FBR3ZOLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUNrTixXQUFELEVBQWNJLE1BQWQsQ0FBNUIsRUFBbUQ7SUFDckVsTixLQUFLLEVBQ0g7RUFGbUUsQ0FBbkQsQ0FBcEIsQ0FsRnFDLENBdUZyQzs7RUFDQSxNQUFNb04sUUFBUSxHQUFHeE4sa0RBQUEsQ0FBcUIsT0FBckIsRUFBOEIsSUFBOUIsRUFBb0M7SUFDbkRTLElBQUksRUFBRSxVQUQ2QztJQUVuRHpCLEVBQUUsRUFBRSxjQUYrQztJQUduRG9CLEtBQUssRUFBRTtFQUg0QyxDQUFwQyxDQUFqQixDQXhGcUMsQ0E2RnJDOztFQUNBLE1BQU1xTixZQUFZLEdBQUd6TixrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDLFdBQUQsQ0FBN0IsRUFBNEM7SUFDL0RJLEtBQUssRUFDSDtFQUY2RCxDQUE1QyxDQUFyQjtFQUtBLE1BQU1zTixhQUFhLEdBQUcxTixrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDLFlBQUQsQ0FBN0IsRUFBNkM7SUFDakVJLEtBQUssRUFDSDtFQUYrRCxDQUE3QyxDQUF0QjtFQUlBLE1BQU11TixLQUFLLEdBQUczTixrREFBQSxDQUFxQixPQUFyQixFQUE4QixDQUFDME4sYUFBRCxFQUFnQkQsWUFBaEIsQ0FBOUIsRUFBNkQ7SUFDekVyTixLQUFLLEVBQUUsMERBRGtFO0lBRXpFd04sR0FBRyxFQUFFO0VBRm9FLENBQTdELENBQWQ7RUFLQSxNQUFNQyxnQkFBZ0IsR0FBRzdOLGtEQUFBLENBQ3ZCLE1BRHVCLEVBRXZCLENBQUNBLDRDQUFBLENBQWUsUUFBZixDQUFELENBRnVCLEVBR3ZCLElBSHVCLENBQXpCO0VBS0FBLDZDQUFBLENBQWdCNk4sZ0JBQWhCLEVBQWtDLENBQ2hDLG1CQURnQyxFQUVoQyxZQUZnQyxFQUdoQyxlQUhnQyxFQUloQyxTQUpnQyxDQUFsQztFQU1BLE1BQU1DLGFBQWEsR0FBRzlOLGtEQUFBLENBQ3BCLE1BRG9CLEVBRXBCLENBQUNBLDRDQUFBLENBQWUsUUFBZixDQUFELENBRm9CLEVBR3BCLElBSG9CLENBQXRCO0VBS0FBLDZDQUFBLENBQWdCOE4sYUFBaEIsRUFBK0IsQ0FDN0IsbUJBRDZCLEVBRTdCLFNBRjZCLEVBRzdCLGlCQUg2QixFQUk3QixTQUo2QixDQUEvQjtFQU9BLE1BQU1DLFFBQVEsR0FBRy9OLGtEQUFBLENBQ2YsS0FEZSxFQUVmLENBQUM4TixhQUFELEVBQWdCTixRQUFoQixFQUEwQkcsS0FBMUIsRUFBaUNFLGdCQUFqQyxDQUZlLEVBR2Y7SUFDRXpOLEtBQUssRUFBRTtFQURULENBSGUsQ0FBakI7RUFPQSxNQUFNNE4sZUFBZSxHQUFHaE8sa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQytOLFFBQUQsQ0FBNUIsRUFBd0M7SUFDOUQzTixLQUFLLEVBQUU7RUFEdUQsQ0FBeEMsQ0FBeEIsQ0ExSXFDLENBOElyQzs7RUFDQSxNQUFNNk4sWUFBWSxHQUFHak8sa0RBQUEsQ0FDbkIsS0FEbUIsRUFFbkIsQ0FBQ3VOLFdBQUQsRUFBY1MsZUFBZCxDQUZtQixFQUduQjtJQUNFNU4sS0FBSyxFQUFFO0VBRFQsQ0FIbUIsQ0FBckIsQ0EvSXFDLENBdUpyQzs7RUFDQSxNQUFNOE4sTUFBTSxHQUFHbE8sa0RBQUEsQ0FBcUIsTUFBckIsRUFBNkIsRUFBN0IsRUFBaUM7SUFDOUNJLEtBQUssRUFBRTtFQUR1QyxDQUFqQyxDQUFmO0VBSUEsTUFBTStOLGNBQWMsR0FBR25PLGtEQUFBLENBQ3JCLEtBRHFCLEVBRXJCLENBQUMrTSxXQUFELEVBQWNrQixZQUFkLENBRnFCLEVBR3JCO0lBQ0U3TixLQUFLLEVBQ0g7RUFGSixDQUhxQixDQUF2QjtFQVNBLE1BQU13RyxRQUFRLEdBQUcsSUFBSUMsZ0JBQUosRUFBakI7RUFDQUQsUUFBUSxDQUFDbEUsTUFBVCxDQUFnQitKLFNBQWhCLEVBQTJCMEIsY0FBM0I7RUFFQSxNQUFNM0csTUFBTSxHQUFHeEgsa0RBQUEsQ0FBcUIsUUFBckIsRUFBK0IsQ0FBQzRHLFFBQUQsQ0FBL0IsRUFBMkM7SUFDeER4RyxLQUFLLEVBQ0g7RUFGc0QsQ0FBM0MsQ0FBZjtFQUlBLE9BQU9vSCxNQUFQO0FBQ0QsQ0E3S0Q7O0FBK0tBLGlFQUFlcUUsaUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25MQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsMlhBQTJYLDRCQUE0Qiw0QkFBNEIsZ0NBQWdDLGtDQUFrQyxVQUFVLHdCQUF3QixxQkFBcUIsR0FBRyxxUEFBcVAsc0JBQXNCLDJDQUEyQyw2QkFBNkIsMEJBQTBCLG9CQUFvQix1UEFBdVAsVUFBVSxnS0FBZ0ssZUFBZSxpQ0FBaUMsVUFBVSwyTkFBMk4sZUFBZSwyQkFBMkIsa0NBQWtDLFVBQVUsaUdBQWlHLDhDQUE4Qyw4Q0FBOEMsR0FBRyxrR0FBa0csdUJBQXVCLHlCQUF5QixHQUFHLGlGQUFpRixtQkFBbUIsNkJBQTZCLEdBQUcsMkVBQTJFLHdCQUF3QixHQUFHLDBKQUEwSix5SEFBeUgsMkJBQTJCLFVBQVUsaUVBQWlFLG1CQUFtQixHQUFHLDJHQUEyRyxtQkFBbUIsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsR0FBRyxTQUFTLG9CQUFvQixHQUFHLFNBQVMsZ0JBQWdCLEdBQUcsZ2JBQWdiLG9CQUFvQixrQ0FBa0Msc0NBQXNDLFVBQVUsa01BQWtNLDBCQUEwQiw0QkFBNEIsaUNBQWlDLDJCQUEyQixzQkFBc0IsdUJBQXVCLFVBQVUsOEZBQThGLHlCQUF5QixHQUFHLG1MQUFtTCxnQ0FBZ0MsMENBQTBDLG1DQUFtQyxVQUFVLCtGQUErRixrQkFBa0IsR0FBRywrTUFBK00scUJBQXFCLEdBQUcsbUZBQW1GLDZCQUE2QixHQUFHLGlKQUFpSixpQkFBaUIsR0FBRyw2SEFBNkgsbUNBQW1DLGlDQUFpQyxVQUFVLG9HQUFvRyw2QkFBNkIsR0FBRyxxS0FBcUssZ0NBQWdDLDBCQUEwQixVQUFVLHNFQUFzRSx1QkFBdUIsR0FBRyw0SkFBNEosY0FBYyxHQUFHLGNBQWMsY0FBYyxlQUFlLEdBQUcsWUFBWSxlQUFlLEdBQUcsb0JBQW9CLHFCQUFxQixjQUFjLGVBQWUsR0FBRyw2RUFBNkUscUJBQXFCLEdBQUcsa1FBQWtRLGdCQUFnQiwyQkFBMkIsVUFBVSxpRUFBaUUsZ0JBQWdCLDJCQUEyQixVQUFVLGdEQUFnRCxnQkFBZ0IsMkJBQTJCLFVBQVUsK0VBQStFLG9CQUFvQixHQUFHLGlGQUFpRixvQkFBb0IsR0FBRyxtYkFBbWIsb0JBQW9CLG1DQUFtQyxVQUFVLHdLQUF3SyxvQkFBb0IsaUJBQWlCLEdBQUcsd0ZBQXdGLGtCQUFrQixHQUFHLDBCQUEwQix3QkFBd0Isd0JBQXdCLG1CQUFtQixtQkFBbUIsbUJBQW1CLG9CQUFvQixvQkFBb0Isa0JBQWtCLGtCQUFrQix1QkFBdUIsMkNBQTJDLG9CQUFvQix5QkFBeUIsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsdUJBQXVCLGdDQUFnQyxpQ0FBaUMsMkNBQTJDLHVDQUF1QyxnQ0FBZ0MsMkJBQTJCLG1DQUFtQyxpQkFBaUIsdUJBQXVCLHFCQUFxQixzQkFBc0IsdUJBQXVCLG1CQUFtQixxQkFBcUIsa0JBQWtCLHdCQUF3QiwwQkFBMEIsZ0NBQWdDLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLDRCQUE0Qiw2QkFBNkIsOEJBQThCLDJCQUEyQixHQUFHLFVBQVUsb0JBQW9CLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxZQUFZLGFBQWEsZUFBZSxnQkFBZ0IsY0FBYyxHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxTQUFTLGdCQUFnQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsWUFBWSxzQkFBc0IsdUJBQXVCLEdBQUcsU0FBUywwQkFBMEIsR0FBRyxTQUFTLDJCQUEyQixHQUFHLFNBQVMsd0JBQXdCLEdBQUcsU0FBUyx1QkFBdUIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsU0FBUyx3QkFBd0IsR0FBRyxTQUFTLDJCQUEyQixHQUFHLFNBQVMsMkJBQTJCLEdBQUcsVUFBVSx5QkFBeUIsR0FBRyxZQUFZLHFCQUFxQixHQUFHLGlCQUFpQiwwQkFBMEIsR0FBRyxTQUFTLGtCQUFrQixHQUFHLFNBQVMsa0JBQWtCLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxrQkFBa0IsZ0JBQWdCLEdBQUcsV0FBVyxpQkFBaUIsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLHFCQUFxQixxQkFBcUIsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsa0JBQWtCLGVBQWUsR0FBRyxXQUFXLGdCQUFnQixHQUFHLFlBQVksZUFBZSxHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLFlBQVksZUFBZSxHQUFHLGdCQUFnQixlQUFlLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLHNCQUFzQixxQkFBcUIsR0FBRyxzQkFBc0IscUJBQXFCLEdBQUcsY0FBYyxtQ0FBbUMsZ0NBQWdDLDJCQUEyQixHQUFHLHNCQUFzQixxQkFBcUIsR0FBRyxzQkFBc0IscUJBQXFCLEdBQUcsYUFBYSxxQkFBcUIsR0FBRyxzQkFBc0IscUJBQXFCLEdBQUcsY0FBYyxxQkFBcUIsR0FBRyxjQUFjLG1CQUFtQixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyw2QkFBNkIsb0NBQW9DLEdBQUcsZ0JBQWdCLHFEQUFxRCxHQUFHLGdCQUFnQixxREFBcUQsR0FBRyw0QkFBNEIsbUNBQW1DLEdBQUcsa0NBQWtDLHNDQUFzQyxHQUFHLGdCQUFnQixrREFBa0QsR0FBRyxnQkFBZ0Isa0RBQWtELEdBQUcsNkJBQTZCLGlDQUFpQyxHQUFHLGFBQWEsd0JBQXdCLEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxnQkFBZ0IsNEJBQTRCLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLGtCQUFrQixnQ0FBZ0MsR0FBRyxtQkFBbUIsNEJBQTRCLEdBQUcsb0JBQW9CLG1DQUFtQyxHQUFHLG1CQUFtQixrQ0FBa0MsR0FBRyxZQUFZLDZCQUE2Qiw2QkFBNkIsR0FBRyxZQUFZLDRCQUE0Qiw0QkFBNEIsR0FBRyxlQUFlLDJCQUEyQixHQUFHLGFBQWEseUJBQXlCLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxxQkFBcUIsc0JBQXNCLEdBQUcsb0JBQW9CLHFCQUFxQixHQUFHLGlCQUFpQiwwQkFBMEIsR0FBRyxlQUFlLDRCQUE0QixHQUFHLGVBQWUsNEJBQTRCLEdBQUcsZUFBZSwwQkFBMEIsR0FBRyxZQUFZLDJCQUEyQixHQUFHLHFCQUFxQixzQkFBc0IsR0FBRyxhQUFhLHNCQUFzQixHQUFHLGVBQWUsMkJBQTJCLEdBQUcsc0JBQXNCLDJCQUEyQiw4REFBOEQsR0FBRyxxQkFBcUIsMkJBQTJCLDhEQUE4RCxHQUFHLG9CQUFvQiwyQkFBMkIsMkRBQTJELEdBQUcsb0JBQW9CLDJCQUEyQiw4REFBOEQsR0FBRyx1QkFBdUIsMkJBQTJCLGlFQUFpRSxHQUFHLGtCQUFrQix1QkFBdUIsNkRBQTZELEdBQUcsZ0JBQWdCLHVCQUF1QiwyREFBMkQsR0FBRywrQ0FBK0Msc0NBQXNDLEdBQUcsaUJBQWlCLHVCQUF1QiwyREFBMkQsR0FBRyxtQkFBbUIsa0NBQWtDLEdBQUcsZ0JBQWdCLHVCQUF1QiwyREFBMkQsR0FBRyxnQkFBZ0IsdUJBQXVCLDJEQUEyRCxHQUFHLGlCQUFpQix1QkFBdUIsMkRBQTJELEdBQUcsaUJBQWlCLHVCQUF1Qiw0REFBNEQsR0FBRyxRQUFRLG9CQUFvQixHQUFHLFNBQVMsd0JBQXdCLDJCQUEyQixHQUFHLFNBQVMsc0JBQXNCLHlCQUF5QixHQUFHLFNBQVMseUJBQXlCLDRCQUE0QixHQUFHLFNBQVMseUJBQXlCLDBCQUEwQixHQUFHLFNBQVMsdUJBQXVCLHdCQUF3QixHQUFHLFNBQVMsd0JBQXdCLDJCQUEyQixHQUFHLGlCQUFpQixxQkFBcUIsd0JBQXdCLEdBQUcsU0FBUywwQkFBMEIsMkJBQTJCLEdBQUcsaUJBQWlCLHNCQUFzQix1QkFBdUIsR0FBRyxTQUFTLDBCQUEwQiwyQkFBMkIsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLG1CQUFtQix1QkFBdUIsR0FBRyxTQUFTLHVCQUF1QixHQUFHLFNBQVMsMkJBQTJCLEdBQUcsbUJBQW1CLHVCQUF1QixHQUFHLFNBQVMsd0JBQXdCLEdBQUcsU0FBUyx5QkFBeUIsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLGNBQWMsd0JBQXdCLEdBQUcsaUJBQWlCLDJCQUEyQixHQUFHLGlCQUFpQiw2Q0FBNkMsR0FBRyxnQkFBZ0Isb0NBQW9DLEdBQUcsY0FBYyx3Q0FBd0MsR0FBRyxnQkFBZ0Isb0NBQW9DLEdBQUcsWUFBWSx3QkFBd0IseUJBQXlCLEdBQUcsWUFBWSx1QkFBdUIsc0JBQXNCLEdBQUcsYUFBYSx1QkFBdUIsd0JBQXdCLEdBQUcsYUFBYSxzQkFBc0Isc0JBQXNCLEdBQUcsWUFBWSx3QkFBd0IseUJBQXlCLEdBQUcsY0FBYyxvQkFBb0Isd0JBQXdCLEdBQUcsWUFBWSx1QkFBdUIseUJBQXlCLEdBQUcsYUFBYSx3QkFBd0IseUJBQXlCLEdBQUcsYUFBYSxvQkFBb0IsbUJBQW1CLEdBQUcsY0FBYyxxQkFBcUIsR0FBRyxnQkFBZ0IscUJBQXFCLEdBQUcsZ0JBQWdCLHFCQUFxQixHQUFHLGtCQUFrQixxQkFBcUIsR0FBRyxlQUFlLHFCQUFxQixHQUFHLGNBQWMsOEJBQThCLEdBQUcsbUJBQW1CLHFCQUFxQixHQUFHLHFCQUFxQiw0QkFBNEIsR0FBRyxvQkFBb0IsMEJBQTBCLEdBQUcsa0JBQWtCLHlCQUF5QixxREFBcUQsR0FBRyxvQkFBb0IseUJBQXlCLHFEQUFxRCxHQUFHLG1CQUFtQix5QkFBeUIscURBQXFELEdBQUcsb0JBQW9CLHlCQUF5QixxREFBcUQsR0FBRyxrQkFBa0IseUJBQXlCLHFEQUFxRCxHQUFHLGtCQUFrQix5QkFBeUIscURBQXFELEdBQUcsa0JBQWtCLHlCQUF5QixxREFBcUQsR0FBRyxtQkFBbUIseUJBQXlCLHFEQUFxRCxHQUFHLGtCQUFrQix5QkFBeUIscURBQXFELEdBQUcsb0JBQW9CLHlCQUF5QixxREFBcUQsR0FBRyxrQkFBa0IseUJBQXlCLG9EQUFvRCxHQUFHLG9CQUFvQix5QkFBeUIscURBQXFELEdBQUcsbUhBQW1ILDJFQUEyRSxnR0FBZ0csNEdBQTRHLEdBQUcsZ0lBQWdJLHdGQUF3Rix3R0FBd0csNEdBQTRHLEdBQUcsbUhBQW1ILDJFQUEyRSxnR0FBZ0csNEdBQTRHLEdBQUcsbUJBQW1CLCtCQUErQiwwQ0FBMEMsR0FBRyxpQkFBaUIsbUNBQW1DLHdCQUF3QixHQUFHLGVBQWUsNktBQTZLLDZKQUE2SixxTkFBcU4sNkRBQTZELCtCQUErQixHQUFHLDZCQUE2QixpQ0FBaUMsNkRBQTZELCtCQUErQixHQUFHLGlCQUFpQiwrQkFBK0IsR0FBRyxpQkFBaUIsK0JBQStCLEdBQUcsWUFBWSwyREFBMkQsR0FBRyw0Q0FBNEMsd0JBQXdCLHlCQUF5QixHQUFHLGdEQUFnRCx3QkFBd0IseUJBQXlCLEdBQUcsdUNBQXVDLHdCQUF3Qix5QkFBeUIsR0FBRyxrREFBa0QseUJBQXlCLHFEQUFxRCxHQUFHLHNEQUFzRCx5QkFBeUIscURBQXFELEdBQUcsNkNBQTZDLHlCQUF5QixxREFBcUQsR0FBRyx5Q0FBeUMsc0JBQXNCLEdBQUcsaURBQWlELDJCQUEyQiw0REFBNEQsR0FBRyw0Q0FBNEMsdUJBQXVCLDJEQUEyRCxHQUFHLDRCQUE0Qix1QkFBdUIsdUJBQXVCLG9NQUFvTSxHQUFHLG1DQUFtQywyQkFBMkIsOERBQThELEdBQUcsa0NBQWtDLHlCQUF5QixxREFBcUQsR0FBRyxrQ0FBa0MseUJBQXlCLHFEQUFxRCxHQUFHLGlDQUFpQyx5QkFBeUIscURBQXFELEdBQUcsa0VBQWtFLHlCQUF5QixxREFBcUQsR0FBRyxzRUFBc0UseUJBQXlCLHFEQUFxRCxHQUFHLDZEQUE2RCx5QkFBeUIscURBQXFELEdBQUcsNkJBQTZCLGtCQUFrQiw2QkFBNkIsS0FBSyxrQkFBa0Isd0JBQXdCLEtBQUssb0JBQW9CLG1CQUFtQixLQUFLLHNCQUFzQiwwQkFBMEIsS0FBSyx5QkFBeUIsZ0NBQWdDLEtBQUssNEJBQTRCLDhCQUE4QixLQUFLLDZCQUE2QixxQ0FBcUMsS0FBSyw4QkFBOEIsd0JBQXdCLEtBQUssa0JBQWtCLHVCQUF1QixLQUFLLHNCQUFzQix3QkFBd0Isd0JBQXdCLEtBQUssc0JBQXNCLHlCQUF5QixxQkFBcUIsS0FBSyxzQkFBc0IseUJBQXlCLDBCQUEwQixLQUFLLHVCQUF1QixzQkFBc0IsMEJBQTBCLEtBQUssc0JBQXNCLHNCQUFzQixxQkFBcUIsS0FBSyxzQkFBc0Isd0JBQXdCLHFCQUFxQixLQUFLLEdBQUcsT0FBTywrRkFBK0YsWUFBWSxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLG9CQUFvQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVks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RUFBakI7QUFDQUQsUUFBUSxDQUFDbEUsTUFBVCxDQUFnQnFFLG1EQUFhLEVBQTdCLEVBQWlDa0MsaURBQVcsRUFBNUMsRUFBZ0RoRCxtREFBYSxFQUE3RDtBQUNBLE1BQU1tSSxHQUFHLEdBQUc5TCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBNkwsR0FBRyxDQUFDMUwsTUFBSixDQUFXa0UsUUFBWDtBQUNBd0gsR0FBRyxDQUFDM0ssU0FBSixDQUFjQyxHQUFkLENBQ0UsTUFERixFQUVFLDJCQUZGLEVBR0UsY0FIRixFQUlFLFFBSkYsRUFLRSxjQUxGO0FBUUFwQixRQUFRLENBQUMrTCxJQUFULENBQWM1SyxTQUFkLENBQXdCQyxHQUF4QixDQUNFLGFBREYsRUFFRSxlQUZGLEVBR0UsY0FIRixFQUlFLFFBSkY7QUFPQStCLG1EQUFNLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jaG9vc2UtbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb252ZXJ0LXdlYXRoZXItdW5pdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9lcnJvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90aW1lQW5kRGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90cmFuc29ybS1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJDYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQ2FyZGhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FjdGlvbkZvcm0oKSB7XG4gIGNvbnN0IGZvcm1UaXRsZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDNcIixcbiAgICBbXCJTZXQgZGVmYXVsdCB3ZWF0aGVyIGxvY2F0aW9uXCJdLFxuICAgIHtcbiAgICAgIGNsYXNzOlxuICAgICAgICBcInRleHQtbGcgZm9udC1ib2xkIHNtOnRleHQtMnhsIHRleHQtZ3JheS0zMDAgYmctcHVycGxlLTcwMCB0ZXh0LWNlbnRlciBweS0yXCIsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IGluZm9JY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImZhcyBmYS1pbmZvIGJvcmRlci1bMXB4XSBib3JkZXItaW5kaWdvLTQwMCByb3VuZGVkLWZ1bGwgdGV4dC1pbmRpZ28tNDAwXCIsXG4gIH0pO1xuICBjb25zdCBmb3JtSW5mbyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtcbiAgICAgIFwic2V0IGRlZmF1bHQgd2VhdGhlciBsb2NhdGlvbiBmb3Igd2hpY2ggY3VycmVudCB3ZWF0aGVyIGRldGFpbHMgd2lsbCBiZSBkaXNwbGF5ZWQgb24gYXBwIGxvYWRcIixcbiAgICBdLFxuICAgIHsgY2xhc3M6IFwidGV4dC14cyB0ZXh0LWluZGlnby00MDAgcHktNFwiIH1cbiAgKTtcblxuICBjb25zdCBmb3JtSGVhZGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2Zvcm1UaXRsZSwgZm9ybUluZm9dLCB7XG4gICAgY2xhc3M6IFwiZm9ybS1oZWFkZXJcIixcbiAgfSk7XG5cbiAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgW10sIHtcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBkZWZhdWx0IHdlYXRoZXIgbG9jYXRpb25cIixcbiAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHNhdmVCdG4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJzYXZlXCJdLCB7XG4gICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICBjbGFzczpcbiAgICAgIFwic3VibWl0LWJ0biByb3VuZGVkLXNtIGJvcmRlci1bMXB4XSBvdXRsaW5lLW5vbmUgcHktMSBweC0yIG0tMiBtaW4tdy1bODBweF1cIixcbiAgfSk7XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiY2FuY2VsXCJdLCB7XG4gICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICBjbGFzczpcbiAgICAgIFwiY2FuY2VsLWJ0biByb3VuZGVkLXNtICBib3JkZXItWzFweF0gb3V0bGluZS1ub25lIHB5LTEgcHgtMiBtLTIgbWluLXctWzgwcHhdXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1CdG5zID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW3NhdmVCdG4sIGNhbmNlbEJ0bl0sIHtcbiAgICBjbGFzczogXCJmb3JtLWJ0bnNcIixcbiAgfSk7XG5cbiAgY29uc3QgZm9ybUJvZHkgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbbG9jYXRpb25JbnB1dCwgZm9ybUJ0bnNdLCBudWxsKTtcbiAgY29uc3Qgd3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmb3JtSGVhZGVyLCBmb3JtQm9keV0sIHtcbiAgICBjbGFzczogXCIgXCIsXG4gIH0pO1xuICBjb25zdCBmb3JtID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFt3cmFwcGVyXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJkZWZhdWx0LWxvY2F0aW9uLWZvcm0gYmctZ3JheS04MDAgYm9yZGVyLVtdIHJlbGF0aXZlIGJvdHRvbS1bMTAwcHhdIHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1bcmdiYSgwLDAsMCwwLjMpXzBweF8xOXB4IF8zOHB4LHJnYmEoMCwwLDAsMC4yMilfMHB4XzE1cHhfMTJweF0gdy1bOTAlXSBtYXgtdy1bNDYwcHhdIG1pbi13LVsyNDBweF1cIixcbiAgfSk7XG5cbiAgY29uc3Qgb3ZlcmxheSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmb3JtXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJvdmVybGF5IGZpeGVkIGluc2V0LTAgei0xMCBiZy1bcmdiYSgwLDAsMCwwLjUpXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwdC1bMjBweF0gcHgtNCBtaW4tdy1bMjcwcHhdXCIsXG4gIH0pO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvYWN0aW9uRm9ybTtcbiIsImNvbnN0IHN0eWxlcyA9IHtcbiAgY2FyZFN0eWxlczpcbiAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIHB5LTYgYmctc2xhdGUtOTAwIHJvdW5kZWQtbGcgdGV4dC1zbGF0ZS0zMDAgcHgtMiBoLVs5MCVdXCIsXG4gIGljb25zOiBcIm1iLTJcIixcbiAgZm9vdGVySWNvbnM6XG4gICAgXCJ0cmFuc2l0aW9uLWNvbG9yIGVhc2UtaW4gZHV0YXRpb24tMzAwIGhvdmVyOnRleHQtaW5kaWdvLTQwMCBob3ZlcjpzY2FsZS0xMjUgdGV4dC1sZ1wiLFxuICBmbGV4Um93Q2VudGVyOiBcImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIsXG4gIGZsZXhDb2xDZW50ZXI6IFwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbiIsImltcG9ydCB7IHRvZ2dsZXIgfSBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuLy9jb252ZXJ0IGtlbHZpbiB1bml0IHRvIEZhaHJlbmhlaXRcbmZ1bmN0aW9uIHRvRmFocmVuaGVpdChjZWxzaXVzKSB7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBjZWxzaXVzICogMS44ICsgMzI7XG4gIGNvbnNvbGUubG9nKGZhaHJlbmhlaXQudG9GaXhlZCgwKSk7XG4gIHJldHVybiBmYWhyZW5oZWl0LnRvRml4ZWQoMCk7XG59XG5cbi8vY29udmVydCBrZWx2aW4gdW5pdCB0byBDZWxzaXVzXG5mdW5jdGlvbiB0b0NlbHNpdXMoa2VsdmluVW5pdCkge1xuICBjb25zdCBjZWxzaXVzID0ga2VsdmluVW5pdCAtIDI3My4xNTtcbiAgcmV0dXJuIGNlbHNpdXMudG9GaXhlZCgwKTtcbn1cblxuY29uc3Qgc2V0VGVtcGVyYXR1cmVVbml0ID0gKGlzVG9nZ2xlZCwgd2VhdGhlcikgPT4ge1xuICBjb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZS12YWx1ZVwiKTtcbiAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCB0ZW1wID0gaXNUb2dnbGVkXG4gICAgPyB0b0ZhaHJlbmhlaXQod2VhdGhlclswXS50ZW1wLnRvRml4ZWQoMCkpXG4gICAgOiB3ZWF0aGVyWzBdLnRlbXAudG9GaXhlZCgwKTtcblxuICB0ZW1wZXJhdHVyZUxhYmVsLmFwcGVuZChcbiAgICB0ZW1wLFxuICAgIGlzVG9nZ2xlZCA/IGhlbHBlci5zcGVjaWFsKFwiJmRlZztGXCIpIDogaGVscGVyLnNwZWNpYWwoXCImZGVnO0NcIilcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFRlbXBlcmF0dXJlVW5pdDtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRXJyb3IocmVzcG9uc2UpIHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdlYXRoZXIgZGV0YWlsc1wiKTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5T25FcnJvcihlcnIsIGlzTG9hZGluZykge1xuICBjb25zdCBzYWRGYWNlID0gaGVscGVyLnNwZWNpYWwoXCImbHBhcjsmZ3Q7Jmxvd2JhcjsmbHQ7JnJwYXI7XCIpO1xuICBjb25zdCBzYWRGYWNlU3BhbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbc2FkRmFjZV0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwidGV4dC00eGwgbGVhZGluZy1ub3JtYWwgdHJhY2tpbmctdGlnaHRlciBmb250LW1lZGl1bSBtYi0xIHNtOnRleHQtNnhsIHNtOm1iLTNcIixcbiAgfSk7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaDJcIiwgW2Vyci5tZXNzYWdlXSwge1xuICAgIGNsYXNzOiBcInRleHQtMnhsIHNtOnRleHQtNHhsIGZvbnQtbWVkaXVtXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGRhc2hPbmUgPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJmh5cGhlbjtcIik7XG4gIGRhc2hPbmUuY2xhc3NMaXN0LmFkZChcInByLVsxcHhdXCIpO1xuICBjb25zdCBkYXNoVHdvID0gaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIiZoeXBoZW47XCIpO1xuICBkYXNoVHdvLmNsYXNzTGlzdC5hZGQoXCJwci1bMXB4XVwiKTtcblxuICBjb25zdCBmaXhPbmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbZGFzaE9uZSwgXCJjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb25cIl0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBmaXhUd28gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbZGFzaFR3bywgXCJlbnN1cmUgd2VhdGhlciBsb2NhdGlvbiBpcyBjb3JyZWN0bHkgc3BlbHRcIl0sXG4gICAgbnVsbFxuICApO1xuXG4gIGNvbnN0IGZpeFN1Z2dlc3Rpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbZml4T25lLCBmaXhUd29dLCB7XG4gICAgY2xhc3M6IFwiYm9yZGVyLVsxcHhdIGJvcmRlci1zbGF0ZS00MDAgcm91bmRlZC1sZyBweC0yIHB5LTIgbXQtNVwiLFxuICB9KTtcblxuICBjb25zdCBlcnJvcldyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtzYWRGYWNlU3BhbiwgZXJyb3JNZXNzYWdlLCBmaXhTdWdnZXN0aW9uXSxcbiAgICB7XG4gICAgICBjbGFzczpcbiAgICAgICAgXCJlcnJvci13cmFwcGVyIGZsZXggZmxleC1jb2wganVzdGlmeS10b3AgaXRlbXMtY2VudGVyIGgtZnVsbCBwdC1bMTIwcHhdIHNtOmp1c3RpZnktY2VudGVyIHNtOnB0LTBcIixcbiAgICB9XG4gICk7XG5cbiAgY29uc3Qgb25FcnJvckRpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtlcnJvcldyYXBwZXJdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgZm9udC1zYW5zcHJvIHRleHQtc2xhdGUtMzAwIHRleHQtc20gc206dGV4dC1iYXNlIHctZnVsbCBoLWZ1bGxcIixcbiAgfSk7XG4gIC8vIFwiaG9tZS1zZWN0aW9uIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgcHgtNCB0ZXh0LWp1c3RpZnkgaC1mdWxsXCIsXG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kKG9uRXJyb3JEaXYpO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgY29uc29sZS5sb2coaXNMb2FkaW5nKTtcbiAgcmV0dXJuIG1haW47XG59XG4iLCJpbXBvcnQgc2V0VGVtcGVyYXR1cmVVbml0IGZyb20gXCIuL2NvbnZlcnQtd2VhdGhlci11bml0XCI7XG5pbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG5pbXBvcnQgeyB3ZWF0aGVyRGF0YSB9IGZyb20gXCIuL3RyYW5zb3JtLWRhdGFcIjtcbmltcG9ydCBvblBhZ2VMb2FkIGZyb20gXCIuL2hvbWVcIjtcblxuLy9nZXQgbG9jYXRpb24gZnJvbSB1c2VyIGlucHV0IG9uIGZvcm1cbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gIGNvbnN0IGlucHV0ID0gZm9ybS5lbGVtZW50c1tcInNlYXJjaC1pbnB1dFwiXTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBpbnB1dC52YWx1ZTtcbiAgICBnZXREYXRhKGxvY2F0aW9uKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH0pO1xufVxuXG4vL3RvZ2dsZSBjaGVjayBib3ggdG8gc3dpdGNoIGJldHdlZW4gdGVtcGVyYXR1cmUgc3RhdGVzXG5jb25zdCB0b2dnbGVyID0gKCkgPT4ge1xuICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgaXNUb2dnbGVkID0gdGFyZ2V0LmNoZWNrZWQ7XG4gICAgc2V0VGVtcGVyYXR1cmVVbml0KGlzVG9nZ2xlZCwgd2VhdGhlckRhdGEpO1xuICAgIHRvZ2dsZXJTd2l0Y2goaXNUb2dnbGVkKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiB0b2dnbGVyU3dpdGNoKGlzVG9nZ2xlZCkge1xuICBjb25zdCB0b2dnbGVPbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLW9uXCIpO1xuICBjb25zdCB0b2dnbGVPZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1vZmZcIik7XG4gIGNvbnN0IGNlbHNpdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbHNpdXNcIik7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhaHJlbmhlaXRcIik7XG4gIGlmIChpc1RvZ2dsZWQpIHtcbiAgICAvL3N3aXRjaCB0b2dnbGVyXG4gICAgdG9nZ2xlT24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB0b2dnbGVPZmYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAvL3N3aXRjaCBiZXR3ZWVuIGFjdGl2ZSB3ZWF0aGVyIHVuaXRcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXB1cnBsZS00MDBcIik7XG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QuYWRkKFwidGV4dC1ncmF5LTUwMFwiKTtcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWdyYXktNTAwXCIpO1xuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZChcInRleHQtcHVycGxlLTQwMFwiKTtcbiAgfVxuXG4gIGlmICghaXNUb2dnbGVkKSB7XG4gICAgdG9nZ2xlT24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB0b2dnbGVPZmYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICAgIGNlbHNpdXMuY2xhc3NMaXN0LmFkZChcInRleHQtcHVycGxlLTQwMFwiKTtcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWdyYXktNTAwXCIpO1xuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZChcInRleHQtZ3JheS01MDBcIik7XG4gICAgZmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1wdXJwbGUtNDAwXCIpO1xuICB9XG59XG5cbmNvbnN0IGZvY3VzSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBpbnB1dFwiKTtcbiAgY29uc3QgY2FsbFRvQWN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxsLXRvLWFjdGlvblwiKTtcbiAgY2FsbFRvQWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGZvcm0uZm9jdXMoKTtcbiAgfSk7XG59O1xuXG4vL2hvbWVcblxuY29uc3QgYmFja1RvSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgYXBwTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWxvZ29cIik7XG4gIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGFwcExvZ28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbWFpbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluRWxlbWVudC5hcHBlbmQob25QYWdlTG9hZCgpKTtcbiAgICBmb2N1c0lucHV0KCk7XG4gIH0pO1xufTtcblxuLy9pbml0aWFsaXplIGV2ZW50c1xuY29uc3QgZXZlbnRzID0gKCkgPT4ge1xuICBnZXRMb2NhdGlvbigpO1xuICB0b2dnbGVyKCk7XG4gIGZvY3VzSW5wdXQoKTtcbiAgYmFja1RvSG9tZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzO1xuIiwiaW1wb3J0IHRyYW5mb3JtRGF0YSBmcm9tIFwiLi90cmFuc29ybS1kYXRhXCI7XG5pbXBvcnQgbG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgeyBjaGVja0Vycm9yLCBkaXNwbGF5T25FcnJvciB9IGZyb20gXCIuL2Vycm9yXCI7XG5cbmxldCBpc0xvYWRpbmcgPSB0cnVlO1xuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgQVBJX0tFWSA9IFwiM2NlYjg4NTJiOWI2YTFmZDhhODE5MWFmNzI0MzM5N2ZcIjtcbiAgICBsb2FkaW5nKGlzTG9hZGluZyk7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2A7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNoZWNrRXJyb3IocmVzcG9uc2UpO1xuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgdHJhbmZvcm1EYXRhKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkaXNwbGF5T25FcnJvcihlcnIsIGlzTG9hZGluZyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY29uc3QgZm9vdGVyU2VjdGlvbiA9ICgpID0+IHtcbiAgLy9pY29uc1xuICBjb25zdCBnaXRodWIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgbnVsbCwgeyBjbGFzczogXCJmYWIgZmEtZ2l0aHViXCIgfSk7XG4gIGNvbnN0IHR3aXR0ZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgbnVsbCwgeyBjbGFzczogXCJmYWIgZmEtdHdpdHRlclwiIH0pO1xuICBjb25zdCBsaW5rZWRpbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7XG4gICAgY2xhc3M6IFwiZmFiIGZhLWxpbmtlZGluIFwiLFxuICB9KTtcbiAgLy9saW5rc1xuICBjb25zdCBnaXRodWJMaW5rID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFtnaXRodWJdLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vdHdpa2lzdGFcIixcbiAgICBjbGFzczogYCR7c3R5bGVzLmZvb3Rlckljb25zfWAsXG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICB9KTtcbiAgY29uc3QgdHdpdHRlckxpbmsgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImFcIiwgW3R3aXR0ZXJdLCB7XG4gICAgaHJlZjogXCJodHRwczovL3R3aXR0ZXIuY29tL2Fhcm9uYW5hbWFcIixcbiAgICBjbGFzczogYCR7c3R5bGVzLmZvb3Rlckljb25zfWAsXG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICB9KTtcbiAgY29uc3QgbGlua2VkaW5MaW5rID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFtsaW5rZWRpbl0sIHtcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hYXJvbmFuYW1hXCIsXG4gICAgY2xhc3M6IGAke3N0eWxlcy5mb290ZXJJY29uc30gYCxcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gIH0pO1xuXG4gIC8vZm9vdGVyLXNvY2lhbCBpY29ucyB3cmFwcGVyXG4gIGNvbnN0IGljb25zV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW2dpdGh1YkxpbmssIHR3aXR0ZXJMaW5rLCBsaW5rZWRpbkxpbmtdLFxuICAgIHsgY2xhc3M6IFwiZmxleCBqdXN0aWZ5LWFyb3VuZCB3LTMvNSBtYi0yXCIgfVxuICApO1xuXG4gIC8vY29weXJpZ2h0IGluZm9cbiAgY29uc3QgY29weVJpZ2h0U3ltYm9sID0gaGVscGVyLnNwZWNpYWwoXCImY29weTsyMDIyXCIpO1xuICBjb25zdCBjb3B5UmlnaHQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbY29weVJpZ2h0U3ltYm9sLCBcIiBhYXJvbmFuYW1hXCJdLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcIiBmb250LW5vcm1hbCB0ZXh0LWJhc2VcIixcbiAgICB9XG4gICk7XG5cbiAgLy93cmFwcGVyXG4gIGNvbnN0IHdyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbaWNvbnNXcmFwcGVyLCBjb3B5UmlnaHRdLCB7XG4gICAgY2xhc3M6IGAke3N0eWxlcy5mbGV4Q29sQ2VudGVyfSB3LTMvNSBtYXgtdy1bNDgwcHhdYCxcbiAgfSk7XG5cbiAgLy9mcmFnbWVudFxuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWdtZW50LmFwcGVuZCh3cmFwcGVyKTtcbiAgLy9mb290ZXIgZWxlbWVudFxuICBjb25zdCBmb290ZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImZvb3RlclwiLCBbZnJhZ21lbnRdLCB7XG4gICAgY2xhc3M6IGAke3N0eWxlcy5mbGV4Um93Q2VudGVyfSBtaW4taC1bNTBweF0gYmctZ3JheS04MDAgYm9yZGVyLWdyYXktNzAwIHctZnVsbCBwLTIgdGV4dC1zbGF0ZS0zMDAgc2hhZG93LVtyZ2JhKDAsMCwwLDAuMTIpXzBweF8xcHhfM3B4LHJnYmEoMCwwLDAsMC4yNClfMHB4XzFweF8ycHhdIG10LTJgLFxuICB9KTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyU2VjdGlvbjtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY29uc3QgaGVhZGVyU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIC8qKioqKipuYXYgbGVmdCBzZWN0aW9uKioqKiovXG4gIGNvbnN0IGxvZ29EZWcgPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJmRlZztcIik7XG4gIGxvZ29EZWcuY2xhc3NMaXN0LmFkZChcInRleHQtcGluay00MDBcIiwgXCJ0ZXh0LXhsXCIpO1xuICBjb25zdCBsb2dvID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBbXCJ3ZWRhXCIsIGxvZ29EZWddLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImFwcC1sb2dvIGZvbnQtYmFybG93IGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMCB0ZXh0LTJ4bCBzaGFkb3ctc2t5LTUwMCBjdXJzb3ItcG9pbnRlclwiLFxuICB9KTtcbiAgY29uc3QgbmF2TGVmdCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtsb2dvXSwge1xuICAgIGNsYXNzOiBcIm1iLTIgcHktWzFweF0gbG9nby1jb250YWluZXIgc206ZmxleC0xIHNtOm1sLThcIixcbiAgfSk7XG5cbiAgLyoqKioqKm5hdiByaWdodCBzZWN0aW9uKioqKioqKioqL1xuXG4gIC8vY3JlYXRlIHNlYXJjaCBib3hcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFtdLCB7XG4gICAgdHlwZTogXCJzZWFyY2hcIixcbiAgICBpZDogXCJzZWFyY2gtaW5wdXRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJFbnRlciB3ZWF0aGVyIGxvY2F0aW9uIFwiLFxuICAgIGNsYXNzOlxuICAgICAgXCJiZy10cmFuc3BhcmVudCAgb3V0bGluZS1ub25lIGFwcGVyYW5jZS1ub25lIHBsLTggcHktMiBoLWZ1bGwgcGxhY2Vob2xkZXI6dGV4dC1zbSBmb2N1czpwbGFjZWhvbGRlcjp0ZXh0LWluZGlnby0yMDAgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTMwMCBmb250LWZpcmFcIixcbiAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gIH0pO1xuXG4gIC8vc2VhcmNoIGljb25cbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBbXSwge1xuICAgIGNsYXNzOiBcImZhcyBmYS1zZWFyY2ggdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1pbmRpZ28tMzAwIFwiLFxuICB9KTtcblxuICAvL2NyZWF0ZSBzZWFyY2ggYnV0dG9uXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtzZWFyY2hJY29uXSwge1xuICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgaWQ6IFwic2VhcmNoLWJ0blwiLFxuICAgIGNsYXNzOiBcImJvcmRlci1sLTIgYm9yZGVyLWwtc2xhdGUtNjAwIHB4LTMgcHktMiBtaW4tdy1taW4gaC1mdWxsXCIsXG4gIH0pO1xuXG4gIC8vY3JlYXQgc2VhcmNoIGZvcm1cbiAgY29uc3QgZm9ybSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBbc2VhcmNoSW5wdXQsIHNlYXJjaEJ1dHRvbl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiZ3JpZCBncmlkLWNvbHMtWzFmcl9hdXRvXSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1bOTAlXSBtYXgtdy14cyByb3VuZGVkLWZ1bGwgYmctZ3JheS03MDAgcHgtMiBmb2N1cy13aXRoaW46YmctZ3JheS05MDAgZm9jdXMtd2l0aGluOmJvcmRlci1zbGF0ZS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci0yIHNtOmp1c3RpZnktc2VsZi1lbmQgc2hhZG93LVtyZ2JhKDYwLDY0LDY3LDAuMylfMHB4XzFweF8ycHhfMHB4LHJnYmEoNjAsNjQsNjcsMC4xNSlfMHB4XzJweF82cHhfMnB4XVwiLFxuICB9KTtcblxuICAvL1xuICBjb25zdCBuYXZSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmb3JtXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcGItMiBzbTpmbGV4LTMgc206anVzdGlmeS1lbmQgXCIsXG4gIH0pO1xuXG4gIC8qKioqKm5hdiBlbGVtZW50ICovXG4gIGNvbnN0IG5hdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibmF2XCIsIFtuYXZMZWZ0LCBuYXZSaWdodF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIHNtOmZsZXgtcm93IHNtOmp1c3RpZnktYmV0d2VlbiBtYXgtdy1bOTYwcHhdXCIsXG4gIH0pO1xuXG4gIGZyYWdtZW50LmFwcGVuZChuYXYpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiIHB4LTIgcHktMiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTgwMCBzaGFkb3ctW3JnYmEoMCwwLDAsMC4xMilfMHB4XzFweF8zcHgscmdiYSgwLDAsMCwwLjI0KV8wcHhfMXB4XzJweF1cIixcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTZWN0aW9uO1xuIiwiZnVuY3Rpb24gYWRkQ2xhc3MoZWxlLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMuZm9yRWFjaCgoaSkgPT4gZWxlLmNsYXNzTGlzdC5hZGQoaSkpO1xufVxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgbm9kZSwgYXR0cmlidXRlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChub2RlKSB7XG4gICAgbm9kZS5mb3JFYWNoKChpKSA9PiBlbGVtZW50LmFwcGVuZChpKSk7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZSkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGUpO1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoaSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlW2ldKSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vY3JlYXRlIHBlY2lhbCBjaGFyYWN0ZXIgaW4gYSBzcGFuXG5jb25zdCBkZWdyZWVDaGFyYWN0ZXIgPSAoY2hhcikgPT4ge1xuICBjb25zdCBkZWdyZWVDaGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRlZ3JlZUNoYXIuaW5uZXJIVE1MID0gY2hhcjtcbiAgcmV0dXJuIGRlZ3JlZUNoYXI7XG59O1xuXG4vL3NwZWNpYWwgY2hhcmFjdGVyIGFzIGEgc3RyaW5nXG5jb25zdCBzcGVjaWFsID0gKGNoYXIpID0+IHtcbiAgY29uc3QgY2hhcmFjdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNoYXJhY3Rlci5pbm5lckhUTUwgPSBjaGFyO1xuICBjb25zdCByZWNoYXIgPSBjaGFyYWN0ZXIudGV4dENvbnRlbnQ7XG4gIHJldHVybiByZWNoYXI7XG59O1xuXG5jb25zdCBhZGRJY29uID0gKGtleXdvcmQsIHN0eWxlcykgPT4ge1xuICBjb25zdCBzcGFuID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW2tleXdvcmRdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIixcbiAgfSk7XG4gIGFkZENsYXNzKHNwYW4sIHN0eWxlcyk7XG4gIHJldHVybiBzcGFuO1xufTtcblxuZXhwb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQsIGRlZ3JlZUNoYXJhY3RlciwgYWRkSWNvbiwgc3BlY2lhbCB9O1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IGRlZmF1bHRMb2FjdGlvbkZvcm0gZnJvbSBcIi4vY2hvb3NlLWxvY2F0aW9uXCI7XG5cbmZ1bmN0aW9uIG9uUGFnZUxvYWQoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDJcIixcbiAgICBbXCJHZXQgQWNjdXJhdGUgV2VhdGhlciBEZXRhaWxzIGJ5IHRoZSBTZWNvbmRcIl0sXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwidGV4dC0zeGwgc206dGV4dC01eGwgdXBwZXJjYXNlIGZvbnQtYmFybG93IGZvbnQtYm9sZCB0ZXh0LXB1cnBsZS00MDAgIHRleHQtY2VudGVyIHRyYWNraW5nLXdpZGVzdCBzZWxmLXN0YXJ0IFwiLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBjYWxsVG9BY3Rpb25CdG4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJnZXQgc3RhcnRlZFwiXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJjYWxsLXRvLWFjdGlvbiAgdy1bMTIwcHhdIHB4LTQgcHktMiB1cHBlcmNhc2UgdGV4dC1zbSB0ZXh0LXBpbmstNDAwIGJvcmRlci1waW5rLTQwMCBmb250LXNhbnNwcm8gZm9udC1zZW1pYm9sZCByb3VuZGVkIHRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0yMDAgaG92ZXI6dGV4dC1zbGF0ZS00MDAgaG92ZXI6Ym9yZGVyLXNsYXRlLTQwMCBib3JkZXItMiBtdC1bNjBweF0gc2hhZG93LVtyZ2JhKDYwLDY0LDY3LDAuMylfMHB4XzFweF8ycHhfMHB4LHJnYmEoNjAsNjQsNjcsMC4xNSlfMHB4XzJweF82cHhfMnB4O11cIixcbiAgfSk7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbaGVhZGVyLCBjYWxsVG9BY3Rpb25CdG5dLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImZsZXggZmxleC1jb2wganVzdGlmeS10b3AgaXRlbXMtY2VudGVyIGgtZnVsbCBmb250LXNhbnNwcm8gcHQtWzEwMHB4XSBzbTpqdXN0aWZ5LWNlbnRlciBzbTpwdC0wXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgW2NvbnRlbnREaXZdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImhvbWUtc2VjdGlvbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHB4LTQgdGV4dC1qdXN0aWZ5IGgtZnVsbFwiLFxuICB9KTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZWN0aW9uLmFwcGVuZChkZWZhdWx0TG9hY3Rpb25Gb3JtKCkpO1xuICB9LCAyMDAwKTtcbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uUGFnZUxvYWQ7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmZ1bmN0aW9uIGxvYWRpbmcoaXNMb2FkaW5nKSB7XG4gIGNvbnN0IGxvYWRpbmdEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJMb2FkaW5nLi4uXCJdLCB7XG4gICAgY2xhc3M6IFwidGV4dC0yeGwgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIixcbiAgfSk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZChsb2FkaW5nRGl2KTtcbiAgfVxuXG4gIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IG9uUGFnZUxvYWQgZnJvbSBcIi4vaG9tZVwiO1xuXG5jb25zdCBtYWluU2VjdGlvbiA9ICgpID0+IHtcbiAgLy9tYWluIGVsZW1lbnRcbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmQob25QYWdlTG9hZCgpKTtcbiAgY29uc3QgbWFpbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibWFpblwiLCBbZnJhZ21lbnRdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcInctWzkwJV0gbWF4LXctMnhsIGZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LWF1dG8gYmctZ3JheS05MDAgcmVsYXRpdmVcIixcbiAgfSk7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpblNlY3Rpb247XG4iLCIvL2FycmF5IG9mIGRheXMgb2Ygd2Vla1xuY29uc3QgZGF5c09mV2VlayA9IFtcbiAgeyBpZDogMCwgZGF5OiBcIlN1blwiIH0sXG4gIHsgaWQ6IDEsIGRheTogXCJNb25cIiB9LFxuICB7IGlkOiAyLCBkYXk6IFwiVHVlXCIgfSxcbiAgeyBpZDogMywgZGF5OiBcIldlZFwiIH0sXG4gIHsgaWQ6IDQsIGRheTogXCJUaHVcIiB9LFxuICB7IGlkOiA1LCBkYXk6IFwiRnJpXCIgfSxcbiAgeyBpZDogNiwgZGF5OiBcIlNhdFwiIH0sXG5dO1xuXG4vL2dldCBkYXkgb2Ygd2Vla1xuZnVuY3Rpb24gZGF5T2ZXZWVrKGRhdGUpIHtcbiAgbGV0IGRheSA9IG51bGw7XG4gIGRheXNPZldlZWsuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmIChpLmlkID09PSBkYXRlKSB7XG4gICAgICBkYXkgPSBpLmRheTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGF5O1xufVxuXG4vL2NvbnZlcnQgdGltZSB0byB1c2VyIHRpbWUgd2l0aCBVVEMgYW5kIFRpbWVab25lXG5mdW5jdGlvbiB1c2VyVGltZSh0aW1lWm9uZU9mZnNldCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbG9jYWxUaW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IGxvY2FsVGltZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICBjb25zdCB1dGNUaW1lID0gbG9jYWxUaW1lICsgbG9jYWxUaW1lT2Zmc2V0O1xuICBjb25zdCBsb2NhdGlvbk9mZnNldCA9IHV0Y1RpbWUgKyAxMDAwICogdGltZVpvbmVPZmZzZXQ7XG4gIGNvbnN0IGxvY2F0aW9uVGltZSA9IG5ldyBEYXRlKGxvY2F0aW9uT2Zmc2V0KTtcbiAgY29uc29sZS5sb2cobG9jYXRpb25UaW1lKTtcbiAgcmV0dXJuIGxvY2F0aW9uVGltZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVXNlclRpbWUodGltZVpvbmVPZmZzZXQpIHtcbiAgLy9kZWZpbmUgZGF0ZSwgZGF5LCBob3VyIGFuZCBtaW51dGVcbiAgY29uc3QgZGF0ZSA9IHVzZXJUaW1lKHRpbWVab25lT2Zmc2V0KTtcbiAgY29uc3QgZGF5ID0gZGF5T2ZXZWVrKGRhdGUuZ2V0RGF5KCkpO1xuICBjb25zdCBob3VyQW5kTWludXRlcyA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoW10sIHtcbiAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICB9KTtcblxuICAvL2RlZmluZSBmb3JtYXQgdG8gZGlzcGxheSB0aW1lXG4gIGNvbnN0IGRpc2xheVRpbWUgPSBgJHtkYXl9ICR7aG91ckFuZE1pbnV0ZXN9YDtcbiAgcmV0dXJuIGRpc2xheVRpbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclVzZXJUaW1lO1xuIiwiaW1wb3J0IHdlYXRoZXJDYXJkIGZyb20gXCIuL3dlYXRoZXJDYXJkXCI7XG5cbmV4cG9ydCBsZXQgd2VhdGhlckRhdGEgPSBudWxsO1xuXG5jb25zdCB0cmFuZm9ybURhdGEgPSAoZGF0YSkgPT4ge1xuICB3ZWF0aGVyRGF0YSA9IFtcbiAgICB7XG4gICAgICB3ZWF0aGVyOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICAgIHdlYXRoZXJkZXNjOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICB0ZW1wOiBkYXRhLm1haW4udGVtcCxcbiAgICAgIG1heFRlbXA6IGRhdGEubWFpbi50ZW1wX21heC50b0ZpeGVkKDApLFxuICAgICAgbWluVGVtcDogZGF0YS5tYWluLnRlbXBfbWluLnRvRml4ZWQoMCksXG4gICAgICBmZWVsc0xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgIHByZXNzdXJlOiBkYXRhLm1haW4ucHJlc3N1cmUsXG4gICAgICB3aW5kOiBkYXRhLndpbmQuc3BlZWQsXG4gICAgICBjb3VudHJ5OiBkYXRhLnN5cy5jb3VudHJ5LFxuICAgICAgY2l0eTogZGF0YS5uYW1lLFxuICAgICAgdGltZVpvbmU6IGRhdGEudGltZXpvbmUsXG4gICAgICB0aW1lOiBkYXRhLmR0LFxuICAgICAgaWNvbjogYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2AsXG4gICAgfSxcbiAgXTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICB3ZWF0aGVyQ2FyZCh3ZWF0aGVyRGF0YSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuZm9ybURhdGE7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgd2VhdGhlckNhcmRDb250ZW50IGZyb20gXCIuL3dlYXRoZXJDYXJkQ29udGVudFwiO1xuaW1wb3J0IHdlYXRoZXJDYXJkSGVhZGVyIGZyb20gXCIuL3dlYXRoZXJDYXJkaGVhZGVyXCI7XG5pbXBvcnQgbG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5jb25zdCB3ZWF0aGVyQ2FyZCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICB3ZWF0aGVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBhcnRpY2xlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImFydGljbGVcIixcbiAgICAgIFt3ZWF0aGVyQ2FyZEhlYWRlcihpdGVtKSwgd2VhdGhlckNhcmRDb250ZW50KGl0ZW0pXSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6IFwiZ3JpZCBncmlkLWNvbHMtMSBncmlkLXJvd3MtMiByb3VuZGVkIGgtZnVsbCBtdC0zIG1iLTUgcHgtM1wiLFxuICAgICAgfVxuICAgICk7XG4gICAgbWFpbi5hcHBlbmQoYXJ0aWNsZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckNhcmQ7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NsYXNzZXNcIjtcbmNvbnN0IHdlYXRoZXJDYXJkQ29udGVudCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGZlZWxzTGlrZUljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1widGhlcm1vc3RhdFwiXSwge1xuICAgIGNsYXNzOiBgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgJHtzdHlsZXMuaWNvbnN9YCxcbiAgfSk7XG4gIGNvbnN0IGZlZWxzTGlrZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtgZmVlbHMgbGlrZTogJHt3ZWF0aGVyLmZlZWxzTGlrZS50b0ZpeGVkKDApfWAsIGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIildLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgZmVlbHNMaWtlRGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2ZlZWxzTGlrZUljb24sIGZlZWxzTGlrZV0sIHtcbiAgICBjbGFzczogc3R5bGVzLmNhcmRTdHlsZXMsXG4gIH0pO1xuXG4gIC8vaHVtaWRpdHlcbiAgY29uc3QgaHVtaWRpdHlJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcIndhdGVyX2Ryb3BcIl0sIHtcbiAgICBjbGFzczogYG1hdGVyaWFsLWljb25zLW91dGxpbmVkICR7c3R5bGVzLmljb25zfWAsXG4gIH0pO1xuICBjb25zdCBodW1pZGl0eSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtgSHVtaWRpdHk6ICR7d2VhdGhlci5odW1pZGl0eX1gXSxcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2h1bWlkaXR5SWNvbiwgaHVtaWRpdHldLCB7XG4gICAgY2xhc3M6IHN0eWxlcy5jYXJkU3R5bGVzLFxuICB9KTtcblxuICAvL3dpbmRcbiAgY29uc3Qgd2luZEljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wiYWlyXCJdLCB7XG4gICAgY2xhc3M6IGBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCAke3N0eWxlcy5pY29uc31gLFxuICB9KTtcbiAgY29uc3Qgd2luZCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtgV2luZDogJHt3ZWF0aGVyLndpbmQudG9GaXhlZCgwKX0gbXBzYF0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCB3aW5kRGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW3dpbmRJY29uLCB3aW5kXSwge1xuICAgIGNsYXNzOiBzdHlsZXMuY2FyZFN0eWxlcyxcbiAgfSk7XG5cbiAgLy9wcmVzc3VyZVxuICBjb25zdCBwcmVzc3VyZUljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wic2NpZW5jZVwiXSwge1xuICAgIGNsYXNzOiBgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgJHtzdHlsZXMuaWNvbnN9YCxcbiAgfSk7XG4gIGNvbnN0IHByZXNzdXJlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BwcmVzc3VyZTogJHt3ZWF0aGVyLnByZXNzdXJlfWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgcHJlc3N1cmVEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbcHJlc3N1cmVJY29uLCBwcmVzc3VyZV0sIHtcbiAgICBjbGFzczogc3R5bGVzLmNhcmRTdHlsZXMsXG4gIH0pO1xuXG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKGh1bWlkaXR5RGl2LCB3aW5kRGl2LCBwcmVzc3VyZURpdiwgZmVlbHNMaWtlRGl2KTtcbiAgY29uc3Qgb3RoZXJXZWF0aGVyRGV0YWlscyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiY2FyZC1ib3R0b20gYmctc2xhdGUtODAwIGdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTIgZ2FwLXgtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGZvbnQtZmlyYSB0ZXh0LXNtIHJvdW5kZWQtbGcgc2hhZG93LVtyZ2JhKDAsMCwwLDAuMTYpXzBweF8zcHhfNnB4LHJnYmEoMCwwLDAsMC4yMylfMHB4XzNweF82cHhdIG1iLTMgXCIsXG4gIH0pO1xuXG4gIHJldHVybiBvdGhlcldlYXRoZXJEZXRhaWxzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckNhcmRDb250ZW50O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHJlbmRlclVzZXJUaW1lIGZyb20gXCIuL3RpbWVBbmREYXRlXCI7XG5cbmNvbnN0IHdlYXRoZXJDYXJkSGVhZGVyID0gKHdlYXRoZXIpID0+IHtcbiAgLy9oZWFkZXIgbGVmdFxuICBjb25zdCBsb2NhdGlvbkljb24gPSBoZWxwZXIuYWRkSWNvbihcImxvY2F0aW9uX29uXCIsIFtjbGFzc2VzLmljb25zXSk7XG4gIGxvY2F0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwidGV4dC14c1wiLCBcInRleHQtaW5kaWdvLTQwMFwiKTtcbiAgY29uc3QgY2l0eSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbYCR7d2VhdGhlci5jaXR5fSwgYF0sIG51bGwpO1xuICBjb25zdCBsb2NhdGlvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDNcIixcbiAgICBbbG9jYXRpb25JY29uLCBjaXR5LCB3ZWF0aGVyLmNvdW50cnldLFxuICAgIHsgY2xhc3M6IFwiXCIgfVxuICApO1xuICBjb25zdCBsb2NhbFRpbWUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgzXCIsXG4gICAgW2Ake3JlbmRlclVzZXJUaW1lKHdlYXRoZXIudGltZVpvbmUpfWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgaGVhZGVyVG9wID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2xvY2F0aW9uLCBsb2NhbFRpbWVdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImhlYWRlci10b3Agdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zIGNlbnRlciB0ZXh0LXNtIHRleHQtaW5kaWdvLTIwMCBmb250LWJhcmxvdyAgZm9udC1saWdodCBwdC0yXCIsXG4gIH0pO1xuICBjb25zdCBhcnJvdyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJhcnJvd19yaWdodFwiXSwge1xuICAgIGNsYXNzOiBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHRleHQtcGluay01MDAgYWxpZ24tbWlkZGxlIFwiLFxuICB9KTtcblxuICAvL3dlYXRoZXIgaWNvblxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtdLCB7XG4gICAgc3JjOiB3ZWF0aGVyLmljb24sXG4gICAgYWx0OiBcIndlYXRoZXItaWNvblwiLFxuICAgIGNsYXNzOiBcInNlbGYtc3RhcnQgLW10LTUgdy1bMTEwcHhdIGgtWzExMHB4XVwiLFxuICB9KTtcblxuICAvL3dlYXRoZXIgZGVzY3JpcHRpb25cbiAgY29uc3Qgd2VhdGhlcmRlc2NyaXB0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoNVwiLFxuICAgIFthcnJvdywgd2VhdGhlci53ZWF0aGVyZGVzY10sXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwiZ3JheS00MDAgZm9udC1maXJhIGZvbnQtbGlnaHQgdGV4dC14cyBzZWxmLXN0YXJ0IGp1c3RpZnktc2VsZi1zdGFydCB3LVsxMTVweF1cIixcbiAgICB9XG4gICk7XG5cbiAgLy93ZWF0aGVyIGljb24gYW5kIGRlc2NyaXB0aW9uIHdyYXBwZXJcbiAgY29uc3Qgd2VhdGhlckxlZnQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFt3ZWF0aGVyZGVzY3JpcHRpb24sIHdlYXRoZXJJY29uXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIHB0LTNcIixcbiAgICB9XG4gICk7XG4gIC8vZGVncmVlIHNwZWNpYWwgY2hhcmFjdGVyXG4gIGNvbnN0IGRlZyA9IGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIik7XG4gIC8vIGNvbnN0IGNlbHNpdXNTcGFuID0gaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIiYjODQ1MTtcIik7XG4gIGNvbnN0IGNlbHNpdXNTcGFuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcIkNcIl0sIG51bGwpO1xuICAvL2NlbHNpdXNTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTJ4bFwiLCBcImFsaWduLXRvcFwiLCBcImlubGluZS1ibG9ja1wiLCBcInB0LTJcIik7XG4gIC8vdGVtcGVyYXR1cmUgdmFsdWVcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgxXCIsXG4gICAgW3dlYXRoZXIudGVtcC50b0ZpeGVkKDApLCBkZWcsIGNlbHNpdXNTcGFuXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJ0ZW1wZXJhdHVyZS12YWx1ZSB0ZXh0LTV4bCBzbTp0ZXh0LTd4bCB0ZXh0LXB1cnBsZS00MDAgbWItMVwiLFxuICAgIH1cbiAgKTtcblxuICAvL21heGltdW0gYW5kIG1pbmltdW0gdGVtcGVyYXR1cmVcbiAgY29uc3QgaGlnaCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtcIkg6XCIsIHdlYXRoZXIubWF4VGVtcCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBsb3cgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbXCJMOlwiLCB3ZWF0aGVyLm1pblRlbXAsIGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIildLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBtaWQgPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJm1pZDtcIik7XG4gIG1pZC5jbGFzc0xpc3QuYWRkKFwicHgtWzFweF1cIiwgXCJ0ZXh0LWJhc2VcIik7XG5cbiAgY29uc3QgbWluTWF4ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBbaGlnaCwgbWlkLCBsb3ddLCB7XG4gICAgY2xhc3M6XG4gICAgICBcInRleHQtc20gZm9udC1iYXJsb3cgc2VtaWJvbGQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1pbmRpZ28tMzAwXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRlbXBXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW3RlbXBlcmF0dXJlLCBtaW5NYXhdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcInRlbXAtd3JhcHBlciB3LTQvNSBmbGV4LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIixcbiAgfSk7XG5cbiAgLy9oZWFkZXIgcmlnaHRcbiAgY29uc3QgY2hlY2tib3ggPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIG51bGwsIHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgaWQ6IFwidGVtcC10b2dnbGVyXCIsXG4gICAgY2xhc3M6IFwiY2hlY2tib3ggaGlkZGVuXCIsXG4gIH0pO1xuICAvL2xhYmVsXG4gIGNvbnN0IHRvZ2dsZU9uSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0b2dnbGVfb25cIl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC0yeGwgIGhpZGRlbiB0b2dnbGUtb24gdHJhbnNpdGlvbi1bZGlzcGxheV0gZHVyYXRpb24tNzAwIGVhc2UtaW4gXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRvZ2dsZU9mZkljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1widG9nZ2xlX29mZlwiXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB0ZXh0LTJ4bCB0b2dnbGUtb2ZmIHRyYW5zaXRpb24tW2Rpc3BsYXldIGR1cmF0aW9uLTcwMCBlYXNlLWluXCIsXG4gIH0pO1xuICBjb25zdCBsYWJlbCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgW3RvZ2dsZU9mZkljb24sIHRvZ2dsZU9uSWNvbl0sIHtcbiAgICBjbGFzczogXCJ0b2dnbGVyIHB4LTEgZmxleCB0ZXh0LXhzIHRleHQtaW5kaWdvLTMwMCBjdXJzb3ItcG9pbnRlclwiLFxuICAgIGZvcjogXCJ0ZW1wLXRvZ2dsZXJcIixcbiAgfSk7XG5cbiAgY29uc3QgZmFocmVuaGVpdFN5bWJvbCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtoZWxwZXIuc3BlY2lhbChcIiZkZWc7RlwiKV0sXG4gICAgbnVsbFxuICApO1xuICBoZWxwZXIuYWRkQ2xhc3MoZmFocmVuaGVpdFN5bWJvbCwgW1xuICAgIFwiYWxpZ24tdGV4dC1jZW50ZXJcIixcbiAgICBcImZhaHJlbmhlaXRcIixcbiAgICBcInRleHQtZ3JheS01MDBcIixcbiAgICBcInRleHQtc21cIixcbiAgXSk7XG4gIGNvbnN0IGNlbHNpdXNTeW1ib2wgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbaGVscGVyLnNwZWNpYWwoXCImZGVnO0NcIildLFxuICAgIG51bGxcbiAgKTtcbiAgaGVscGVyLmFkZENsYXNzKGNlbHNpdXNTeW1ib2wsIFtcbiAgICBcImFsaWduLXRleHQtY2VudGVyXCIsXG4gICAgXCJjZWxzaXVzXCIsXG4gICAgXCJ0ZXh0LXB1cnBsZS00MDBcIixcbiAgICBcInRleHQtc21cIixcbiAgXSk7XG5cbiAgY29uc3QgdG9nZ2xlcnMgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtjZWxzaXVzU3ltYm9sLCBjaGVja2JveCwgbGFiZWwsIGZhaHJlbmhlaXRTeW1ib2xdLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcInRvZ2dsZXJzIGZsZXggaXRlbXMtY2VudGVyIGZvbnQtYWtzaGFyIGZvbnQtc2VtaWJvbGRcIixcbiAgICB9XG4gICk7XG4gIGNvbnN0IHRvZ2dsZXJzV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFt0b2dnbGVyc10sIHtcbiAgICBjbGFzczogXCJ0b2dnbGVycy13cmFwcGVyIGZsZXggaXRlbXMtY2VudGVyIHNlbGYtZW5kIG10LWF1dG9cIixcbiAgfSk7XG5cbiAgLy90ZW1wZXJhdHVyZSBhbmQgbWlubWF4IHdyYXBwZXJcbiAgY29uc3Qgd2VhdGhlclJpZ2h0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbdGVtcFdyYXBwZXIsIHRvZ2dsZXJzV3JhcHBlcl0sXG4gICAge1xuICAgICAgY2xhc3M6IFwid2VhdGhlci1yaWdodCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiLFxuICAgIH1cbiAgKTtcblxuICAvL3dlYXRoZXJcbiAgY29uc3QgZGl2TWlkID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtdLCB7XG4gICAgY2xhc3M6IFwidy1bMXB4XSBiZy1zbGF0ZS02MDAgaC1bOTZweF0gc2VsZi1jZW50ZXIganVzdGlmeS1zZWxmLWVuZFwiLFxuICB9KTtcblxuICBjb25zdCB3ZWF0aGVyV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW3dlYXRoZXJMZWZ0LCB3ZWF0aGVyUmlnaHRdLFxuICAgIHtcbiAgICAgIGNsYXNzOlxuICAgICAgICBcIndlYXRoZXItd3JhcHBwZXIgZ3JpZCBncmlkLWNvbHMtWzFmcl8xZnJdIGdyaWQtcm93cy0xIGdhcC14LTIgdy1mdWxsIGgtZnVsbFwiLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWdtZW50LmFwcGVuZChoZWFkZXJUb3AsIHdlYXRoZXJXcmFwcGVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBbZnJhZ21lbnRdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImNhcmQtaGVhZGVyIGdyaWQgZ3JpZC1yb3dzLVs1MHB4XzFmcl0gZ3JpZC1jb2xzLTEganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBiZy1zbGF0ZS04MDAgbWItMyBtdC01IHB0LTIgcHgtNCByb3VuZGVkLWxnIHNoYWRvdy1bcmdiYSgwLDAsMCwwLjE2KV8wcHhfM3B4XzZweCxyZ2JhKDAsMCwwLDAuMjMpXzBweF8zcHhfNnB4XSBmb250LXNhbnNwcm9cIixcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZEhlYWRlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjAuMjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLmZpeGVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmluc2V0LTAge1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxufVxcbi5ib3R0b20tXFxcXFsxMDBweFxcXFxdIHtcXG4gIGJvdHRvbTogMTAwcHg7XFxufVxcbi56LTEwIHtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4ubS0yIHtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG4ubXgtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLm1iLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ubWItMSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4ubXQtNSB7XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG4ubXQtMiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcbi5tdC1cXFxcWzYwcHhcXFxcXSB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG4ubXQtMyB7XFxuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xcbn1cXG4ubWItNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4ubWItMyB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4uLW10LTUge1xcbiAgbWFyZ2luLXRvcDogLTEuMjVyZW07XFxufVxcbi5tdC1hdXRvIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oLVxcXFxbOTBcXFxcJVxcXFxdIHtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG4uaC1mdWxsIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmgtXFxcXFsxMTBweFxcXFxdIHtcXG4gIGhlaWdodDogMTEwcHg7XFxufVxcbi5oLVxcXFxbOTZweFxcXFxdIHtcXG4gIGhlaWdodDogOTZweDtcXG59XFxuLm1pbi1oLVxcXFxbNTBweFxcXFxdIHtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcbi5taW4taC1zY3JlZW4ge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi53LVxcXFxbOTBcXFxcJVxcXFxdIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi53LTNcXFxcLzUge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuLnctXFxcXFsxMjBweFxcXFxdIHtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuLnctXFxcXFsxMTBweFxcXFxdIHtcXG4gIHdpZHRoOiAxMTBweDtcXG59XFxuLnctXFxcXFsxMTVweFxcXFxdIHtcXG4gIHdpZHRoOiAxMTVweDtcXG59XFxuLnctNFxcXFwvNSB7XFxuICB3aWR0aDogODAlO1xcbn1cXG4udy1cXFxcWzFweFxcXFxdIHtcXG4gIHdpZHRoOiAxcHg7XFxufVxcbi5taW4tdy1cXFxcWzgwcHhcXFxcXSB7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxufVxcbi5taW4tdy1cXFxcWzI0MHB4XFxcXF0ge1xcbiAgbWluLXdpZHRoOiAyNDBweDtcXG59XFxuLm1pbi13LVxcXFxbMjcwcHhcXFxcXSB7XFxuICBtaW4td2lkdGg6IDI3MHB4O1xcbn1cXG4ubWluLXctbWluIHtcXG4gIG1pbi13aWR0aDogLXdlYmtpdC1taW4tY29udGVudDtcXG4gIG1pbi13aWR0aDogLW1vei1taW4tY29udGVudDtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5tYXgtdy1cXFxcWzQ2MHB4XFxcXF0ge1xcbiAgbWF4LXdpZHRoOiA0NjBweDtcXG59XFxuLm1heC13LVxcXFxbNDgwcHhcXFxcXSB7XFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcbn1cXG4ubWF4LXcteHMge1xcbiAgbWF4LXdpZHRoOiAyMHJlbTtcXG59XFxuLm1heC13LVxcXFxbOTYwcHhcXFxcXSB7XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbn1cXG4ubWF4LXctMnhsIHtcXG4gIG1heC13aWR0aDogNDJyZW07XFxufVxcbi5mbGV4LWF1dG8ge1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcbi5jdXJzb3ItcG9pbnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ncmlkLWNvbHMtXFxcXFsxZnJfYXV0b1xcXFxdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxufVxcbi5ncmlkLWNvbHMtMSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLWNvbHMtMiB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLWNvbHMtXFxcXFsxZnJfMWZyXFxcXF0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG4uZ3JpZC1yb3dzLVxcXFxbYXV0b18xZnJfYXV0b1xcXFxdIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG59XFxuLmdyaWQtcm93cy0yIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWQtcm93cy0xIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWQtcm93cy1cXFxcWzUwcHhfMWZyXFxcXF0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG59XFxuLmZsZXgtcm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaXRlbXMtc3RhcnQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktc3RhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uanVzdGlmeS1hcm91bmQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5nYXAteC0zIHtcXG4gIC1tb3otY29sdW1uLWdhcDogMC43NXJlbTtcXG4gICAgICAgY29sdW1uLWdhcDogMC43NXJlbTtcXG59XFxuLmdhcC14LTIge1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAwLjVyZW07XFxuICAgICAgIGNvbHVtbi1nYXA6IDAuNXJlbTtcXG59XFxuLnNlbGYtc3RhcnQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuLnNlbGYtZW5kIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG4uc2VsZi1jZW50ZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1zZWxmLXN0YXJ0IHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcbi5qdXN0aWZ5LXNlbGYtZW5kIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4ub3ZlcmZsb3ctaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5yb3VuZGVkLWZ1bGwge1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbn1cXG4ucm91bmRlZC1zbSB7XFxuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcXG59XFxuLnJvdW5kZWQtbWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxufVxcbi5yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLnJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuLmJvcmRlci1cXFxcWzFweFxcXFxdIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4uYm9yZGVyLTIge1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItbC0yIHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItaW5kaWdvLTQwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTI5IDE0MCAyNDggLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLXNsYXRlLTQwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTQ4IDE2MyAxODQgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLWdyYXktNzAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYig1NSA2NSA4MSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItcGluay00MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI0NCAxMTQgMTgyIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1sLXNsYXRlLTYwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MSA4NSAxMDUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYmctcHVycGxlLTcwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2IDM0IDIwNiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyYXktODAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSA0MSA1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLVxcXFxbcmdiYVxcXFwoMFxcXFwyYyAwXFxcXDJjIDBcXFxcMmMgMFxcXFwuNVxcXFwpXFxcXF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG4uYmctc2xhdGUtOTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSAyMyA0MiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYmctZ3JheS03MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1IDY1IDgxIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JheS05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3IDI0IDM5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctc2xhdGUtODAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCA0MSA1OSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXNsYXRlLTYwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEgODUgMTA1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5weS00IHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5weS0xIHtcXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XFxufVxcbi5weC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG4ucHgtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG4ucHktNiB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG59XFxuLnB5LVxcXFxbMXB4XFxcXF0ge1xcbiAgcGFkZGluZy10b3A6IDFweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcbi5weC0zIHtcXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxufVxcbi5weC1cXFxcWzFweFxcXFxdIHtcXG4gIHBhZGRpbmctbGVmdDogMXB4O1xcbiAgcGFkZGluZy1yaWdodDogMXB4O1xcbn1cXG4ucHgtMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4ucHQtXFxcXFsyMHB4XFxcXF0ge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcbi5wci1cXFxcWzFweFxcXFxdIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcXG59XFxuLnB0LVxcXFxbMTIwcHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxufVxcbi5wbC04IHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuLnBiLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLnB0LVxcXFxbMTAwcHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxufVxcbi5wdC0yIHtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcbi5wdC0zIHtcXG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcbn1cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGV4dC1qdXN0aWZ5IHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi5hbGlnbi10b3Age1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmFsaWduLW1pZGRsZSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uZm9udC1zYW5zcHJvIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2Ugc2FucyBwcm8sIHNhbnMtc2VyaWY7XFxufVxcbi5mb250LWJhcmxvdyB7XFxuICBmb250LWZhbWlseTogQmFybG93LCBzYW5zLXNlcmlmO1xcbn1cXG4uZm9udC1maXJhIHtcXG4gIGZvbnQtZmFtaWx5OiBGaXJhIHNhbnMsIHNhbnMtc2VyZmlmO1xcbn1cXG4uZm9udC1ha3NoYXIge1xcbiAgZm9udC1mYW1pbHk6IEFrc2hhciwgc2Fucy1zZXJpZjtcXG59XFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC14cyB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuLnRleHQtNHhsIHtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxufVxcbi50ZXh0LTJ4bCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG4udGV4dC1zbSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi50ZXh0LWJhc2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuLnRleHQteGwge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi50ZXh0LTN4bCB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcbi50ZXh0LTV4bCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZm9udC1tZWRpdW0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmZvbnQtbm9ybWFsIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mb250LXNlbWlib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5mb250LWxpZ2h0IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi51cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmxlYWRpbmctbm9ybWFsIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi50cmFja2luZy10aWdodGVyIHtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNWVtO1xcbn1cXG4udHJhY2tpbmctd2lkZXN0IHtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG59XFxuLnRleHQtZ3JheS0zMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWluZGlnby00MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEyOSAxNDAgMjQ4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXNsYXRlLTMwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcHVycGxlLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTkyIDEzMiAyNTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEwNyAxMTQgMTI4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXBpbmstNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyNDQgMTE0IDE4MiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTU2IDE2MyAxNzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtc2xhdGUtNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTIwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjI5IDIzMSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtaW5kaWdvLTIwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTk5IDIxMCAyNTQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcGluay01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIzNiA3MiAxNTMgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtaW5kaWdvLTMwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTY1IDE4MCAyNTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnNoYWRvdy1cXFxcW3JnYmFcXFxcKDBcXFxcMmMgMFxcXFwyYyAwXFxcXDJjIDBcXFxcLjEyXFxcXClfMHB4XzFweF8zcHhcXFxcMmMgcmdiYVxcXFwoMFxcXFwyYyAwXFxcXDJjIDBcXFxcMmMgMFxcXFwuMjRcXFxcKV8wcHhfMXB4XzJweFxcXFxdIHtcXG4gIC0tdHctc2hhZG93OiByZ2JhKDAsMCwwLDAuMTIpIDBweCAxcHggM3B4LHJnYmEoMCwwLDAsMC4yNCkgMHB4IDFweCAycHg7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwcHggMXB4IDNweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwcHggMXB4IDJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLnNoYWRvdy1cXFxcW3JnYmFcXFxcKDYwXFxcXDJjIDY0XFxcXDJjIDY3XFxcXDJjIDBcXFxcLjNcXFxcKV8wcHhfMXB4XzJweF8wcHhcXFxcMmMgcmdiYVxcXFwoNjBcXFxcMmMgNjRcXFxcMmMgNjdcXFxcMmMgMFxcXFwuMTVcXFxcKV8wcHhfMnB4XzZweF8ycHhcXFxcXSB7XFxuICAtLXR3LXNoYWRvdzogcmdiYSg2MCw2NCw2NywwLjMpIDBweCAxcHggMnB4IDBweCxyZ2JhKDYwLDY0LDY3LDAuMTUpIDBweCAycHggNnB4IDJweDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDBweCAxcHggMnB4IDBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwcHggMnB4IDZweCAycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctXFxcXFtyZ2JhXFxcXCgwXFxcXDJjIDBcXFxcMmMgMFxcXFwyYyAwXFxcXC4xNlxcXFwpXzBweF8zcHhfNnB4XFxcXDJjIHJnYmFcXFxcKDBcXFxcMmMgMFxcXFwyYyAwXFxcXDJjIDBcXFxcLjIzXFxcXClfMHB4XzNweF82cHhcXFxcXSB7XFxuICAtLXR3LXNoYWRvdzogcmdiYSgwLDAsMCwwLjE2KSAwcHggM3B4IDZweCxyZ2JhKDAsMCwwLDAuMjMpIDBweCAzcHggNnB4O1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMHB4IDNweCA2cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMHB4IDNweCA2cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctc2t5LTUwMCB7XFxuICAtLXR3LXNoYWRvdy1jb2xvcjogIzBlYTVlOTtcXG4gIC0tdHctc2hhZG93OiB2YXIoLS10dy1zaGFkb3ctY29sb3JlZCk7XFxufVxcbi5vdXRsaW5lLW5vbmUge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuLnRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3IsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlciwgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3IsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuLnRyYW5zaXRpb24tXFxcXFtkaXNwbGF5XFxcXF0ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogZGlzcGxheTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcbi5kdXJhdGlvbi0yMDAge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxufVxcbi5kdXJhdGlvbi03MDAge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNzAwbXM7XFxufVxcbi5lYXNlLWluIHtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcXG59XFxuLnBsYWNlaG9sZGVyXFxcXDp0ZXh0LXNtOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnBsYWNlaG9sZGVyXFxcXDp0ZXh0LXNtOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1zbTo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtZ3JheS0zMDA6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1ncmF5LTMwMDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1ncmF5LTMwMDo6cGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1cy13aXRoaW5cXFxcOmJvcmRlci0yOmZvY3VzLXdpdGhpbiB7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuLmZvY3VzLXdpdGhpblxcXFw6Ym9yZGVyLXNsYXRlLTYwMDpmb2N1cy13aXRoaW4ge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDcxIDg1IDEwNSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5mb2N1cy13aXRoaW5cXFxcOmJnLWdyYXktOTAwOmZvY3VzLXdpdGhpbiB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcgMjQgMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6c2NhbGUtMTI1OmhvdmVyIHtcXG4gIC0tdHctc2NhbGUteDogMS4yNTtcXG4gIC0tdHctc2NhbGUteTogMS4yNTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXG4uaG92ZXJcXFxcOmJvcmRlci1zbGF0ZS00MDA6aG92ZXIge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDp0ZXh0LWluZGlnby00MDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEyOSAxNDAgMjQ4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6dGV4dC1pbmRpZ28tMzAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNjUgMTgwIDI1MiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtc2xhdGUtNDAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWluZGlnby0yMDA6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtaW5kaWdvLTIwMDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtaW5kaWdvLTIwMDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLnNtXFxcXDptYi0zIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6bWwtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpmbGV4LTEge1xcbiAgICBmbGV4OiAxIDEgMCU7XFxuICB9XFxuXFxuICAuc21cXFxcOmZsZXgtcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5zbVxcXFw6anVzdGlmeS1lbmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpqdXN0aWZ5LWNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpqdXN0aWZ5LWJldHdlZW4ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuc21cXFxcOmp1c3RpZnktc2VsZi1lbmQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6cHQtMCB7XFxuICAgIHBhZGRpbmctdG9wOiAwcHg7XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtMnhsIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LTZ4bCB7XFxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtNHhsIHtcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMi41cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LWJhc2Uge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtNXhsIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC03eGwge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw0TkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjO0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7Ozs7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7RUFBZCxZQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7RUFBQSxtQkFBYztFQUFkLG1CQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsZUFBYztFQUFkLGVBQWM7RUFBZCxhQUFjO0VBQWQsYUFBYztFQUFkLGtCQUFjO0VBQWQsc0NBQWM7RUFBZCxlQUFjO0VBQWQsb0JBQWM7RUFBZCxzQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCxrQkFBYztFQUFkLDJCQUFjO0VBQWQsNEJBQWM7RUFBZCxzQ0FBYztFQUFkLGtDQUFjO0VBQWQsMkJBQWM7RUFBZCxzQkFBYztFQUFkLDhCQUFjO0VBQWQsWUFBYztFQUFkLGtCQUFjO0VBQWQsZ0JBQWM7RUFBZCxpQkFBYztFQUFkLGtCQUFjO0VBQWQsY0FBYztFQUFkLGdCQUFjO0VBQWQsYUFBYztFQUFkLG1CQUFjO0VBQWQscUJBQWM7RUFBZCwyQkFBYztFQUFkLHlCQUFjO0VBQWQsMEJBQWM7RUFBZCwyQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCx5QkFBYztFQUFkO0FBQWM7QUFFZDtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxRQUFtQjtFQUFuQixVQUFtQjtFQUFuQixXQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsOEJBQW1CO0VBQW5CLDJCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSx3QkFBbUI7T0FBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7T0FBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZ0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGVBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0VBQW1CO0VBQW5CLDJGQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1GQUFtQjtFQUFuQixtR0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzRUFBbUI7RUFBbkIsMkZBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsMEJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsOEJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsd0tBQW1CO0VBQW5CLHdKQUFtQjtFQUFuQixnTkFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsNEJBQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUZuQjtFQUFBLG9CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsb0JDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxvQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBO0NDQUE7QURBQTtFQUFBLHVCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsbUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxtQkNBQTtFREFBLG1CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsdUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7O0VBQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQSxrQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxtQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxtQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxrQkNBQTtJREFBO0dDQUE7Q0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1wiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IGhlYWRlclNlY3Rpb24gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgbWFpblNlY3Rpb24gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IGZvb3RlclNlY3Rpb24gZnJvbSBcIi4vZm9vdGVyXCI7XG5cbmNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbmZyYWdtZW50LmFwcGVuZChoZWFkZXJTZWN0aW9uKCksIG1haW5TZWN0aW9uKCksIGZvb3RlclNlY3Rpb24oKSk7XG5jb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcFwiKTtcbmFwcC5hcHBlbmQoZnJhZ21lbnQpO1xuYXBwLmNsYXNzTGlzdC5hZGQoXG4gIFwiZ3JpZFwiLFxuICBcImdyaWQtcm93cy1bYXV0b18xZnJfYXV0b11cIixcbiAgXCJtaW4taC1zY3JlZW5cIixcbiAgXCJ3LWZ1bGxcIixcbiAgXCJmb250LXNhbnNwcm9cIlxuKTtcblxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFxuICBcImJnLWdyYXktOTAwXCIsXG4gIFwidGV4dC1ncmF5LTIwMFwiLFxuICBcIm1pbi1oLXNjcmVlblwiLFxuICBcInctZnVsbFwiXG4pO1xuXG5ldmVudHMoKTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJoZWxwZXIiLCJkZWZhdWx0TG9hY3Rpb25Gb3JtIiwiZm9ybVRpdGxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzIiwiaW5mb0ljb24iLCJmb3JtSW5mbyIsImZvcm1IZWFkZXIiLCJsb2NhdGlvbklucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b2NvbXBsZXRlIiwic2F2ZUJ0biIsImNhbmNlbEJ0biIsImZvcm1CdG5zIiwiZm9ybUJvZHkiLCJ3cmFwcGVyIiwiZm9ybSIsIm92ZXJsYXkiLCJzdHlsZXMiLCJjYXJkU3R5bGVzIiwiaWNvbnMiLCJmb290ZXJJY29ucyIsImZsZXhSb3dDZW50ZXIiLCJmbGV4Q29sQ2VudGVyIiwidG9nZ2xlciIsInRvRmFocmVuaGVpdCIsImNlbHNpdXMiLCJmYWhyZW5oZWl0IiwiY29uc29sZSIsImxvZyIsInRvRml4ZWQiLCJ0b0NlbHNpdXMiLCJrZWx2aW5Vbml0Iiwic2V0VGVtcGVyYXR1cmVVbml0IiwiaXNUb2dnbGVkIiwid2VhdGhlciIsInRlbXBlcmF0dXJlTGFiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJ0ZW1wIiwiYXBwZW5kIiwic3BlY2lhbCIsImNoZWNrRXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwiZGlzcGxheU9uRXJyb3IiLCJlcnIiLCJpc0xvYWRpbmciLCJzYWRGYWNlIiwic2FkRmFjZVNwYW4iLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiZGFzaE9uZSIsImRlZ3JlZUNoYXJhY3RlciIsImNsYXNzTGlzdCIsImFkZCIsImRhc2hUd28iLCJmaXhPbmUiLCJmaXhUd28iLCJmaXhTdWdnZXN0aW9uIiwiZXJyb3JXcmFwcGVyIiwib25FcnJvckRpdiIsIm1haW4iLCJnZXREYXRhIiwid2VhdGhlckRhdGEiLCJvblBhZ2VMb2FkIiwiZ2V0TG9jYXRpb24iLCJpbnB1dCIsImVsZW1lbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwidmFsdWUiLCJtYWluRWxlbWVudCIsInRhcmdldCIsImNoZWNrZWQiLCJ0b2dnbGVyU3dpdGNoIiwidG9nZ2xlT24iLCJ0b2dnbGVPZmYiLCJyZW1vdmUiLCJmb2N1c0lucHV0IiwiY2FsbFRvQWN0aW9uQnRuIiwiZm9jdXMiLCJiYWNrVG9Ib21lIiwiYXBwTG9nbyIsImV2ZW50cyIsInRyYW5mb3JtRGF0YSIsImxvYWRpbmciLCJjaXR5IiwiQVBJX0tFWSIsInVybCIsImZldGNoIiwianNvbiIsImZvb3RlclNlY3Rpb24iLCJnaXRodWIiLCJ0d2l0dGVyIiwibGlua2VkaW4iLCJnaXRodWJMaW5rIiwiaHJlZiIsInR3aXR0ZXJMaW5rIiwibGlua2VkaW5MaW5rIiwiaWNvbnNXcmFwcGVyIiwiY29weVJpZ2h0U3ltYm9sIiwiY29weVJpZ2h0IiwiZnJhZ21lbnQiLCJEb2N1bWVudEZyYWdtZW50IiwiZm9vdGVyIiwiaGVhZGVyU2VjdGlvbiIsImxvZ29EZWciLCJsb2dvIiwibmF2TGVmdCIsInNlYXJjaElucHV0Iiwic2VhcmNoSWNvbiIsInNlYXJjaEJ1dHRvbiIsIm5hdlJpZ2h0IiwibmF2IiwiaGVhZGVyIiwiYWRkQ2xhc3MiLCJlbGUiLCJjbGFzc2VzIiwiZm9yRWFjaCIsInRhZyIsIm5vZGUiLCJhdHRyaWJ1dGUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJzZXRBdHRyaWJ1dGUiLCJjaGFyIiwiZGVncmVlQ2hhciIsImNoYXJhY3RlciIsInJlY2hhciIsInRleHRDb250ZW50IiwiYWRkSWNvbiIsImtleXdvcmQiLCJzcGFuIiwiY29udGVudERpdiIsInNlY3Rpb24iLCJzZXRUaW1lb3V0IiwibG9hZGluZ0RpdiIsIm1haW5TZWN0aW9uIiwiZGF5c09mV2VlayIsImRheSIsImRheU9mV2VlayIsImRhdGUiLCJ1c2VyVGltZSIsInRpbWVab25lT2Zmc2V0IiwiRGF0ZSIsImxvY2FsVGltZSIsImdldFRpbWUiLCJsb2NhbFRpbWVPZmZzZXQiLCJnZXRUaW1lem9uZU9mZnNldCIsInV0Y1RpbWUiLCJsb2NhdGlvbk9mZnNldCIsImxvY2F0aW9uVGltZSIsInJlbmRlclVzZXJUaW1lIiwiZ2V0RGF5IiwiaG91ckFuZE1pbnV0ZXMiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJkaXNsYXlUaW1lIiwid2VhdGhlckNhcmQiLCJ3ZWF0aGVyZGVzYyIsImRlc2NyaXB0aW9uIiwibWF4VGVtcCIsInRlbXBfbWF4IiwibWluVGVtcCIsInRlbXBfbWluIiwiZmVlbHNMaWtlIiwiZmVlbHNfbGlrZSIsImh1bWlkaXR5IiwicHJlc3N1cmUiLCJ3aW5kIiwic3BlZWQiLCJjb3VudHJ5Iiwic3lzIiwibmFtZSIsInRpbWVab25lIiwidGltZXpvbmUiLCJ0aW1lIiwiZHQiLCJpY29uIiwid2VhdGhlckNhcmRDb250ZW50Iiwid2VhdGhlckNhcmRIZWFkZXIiLCJhcnRpY2xlIiwiZmVlbHNMaWtlSWNvbiIsImZlZWxzTGlrZURpdiIsImh1bWlkaXR5SWNvbiIsImh1bWlkaXR5RGl2Iiwid2luZEljb24iLCJ3aW5kRGl2IiwicHJlc3N1cmVJY29uIiwicHJlc3N1cmVEaXYiLCJvdGhlcldlYXRoZXJEZXRhaWxzIiwibG9jYXRpb25JY29uIiwiaGVhZGVyVG9wIiwiYXJyb3ciLCJ3ZWF0aGVySWNvbiIsInNyYyIsImFsdCIsIndlYXRoZXJkZXNjcmlwdGlvbiIsIndlYXRoZXJMZWZ0IiwiZGVnIiwiY2Vsc2l1c1NwYW4iLCJ0ZW1wZXJhdHVyZSIsImhpZ2giLCJsb3ciLCJtaWQiLCJtaW5NYXgiLCJ0ZW1wV3JhcHBlciIsImNoZWNrYm94IiwidG9nZ2xlT25JY29uIiwidG9nZ2xlT2ZmSWNvbiIsImxhYmVsIiwiZm9yIiwiZmFocmVuaGVpdFN5bWJvbCIsImNlbHNpdXNTeW1ib2wiLCJ0b2dnbGVycyIsInRvZ2dsZXJzV3JhcHBlciIsIndlYXRoZXJSaWdodCIsImRpdk1pZCIsIndlYXRoZXJXcmFwcGVyIiwiYXBwIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=