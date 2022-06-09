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
    class: "text-lg font-bold sm:text-2xl text-gray-300 bg-purple-600 text-center py-2"
  });
  const formHeader = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [formTitle], {
    class: "form-header mb-[40px]"
  });
  const locationInput = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("input", [], {
    type: "text",
    id: "default-location-input",
    placeholder: "Enter default weather location ",
    autocomplete: "off",
    class: "transition-all ease-in bg-transparent outline-none appearnace-none border-[2px] border-gray-500 focus:border-purple-500  placeholder:text-sm sm:placeholder:text-base focus:placeholder:font-semibold focus:placeholder:text-xs sm:focus:placeholder:text-base  sm:focus:placeholder:font-semibold hover:border-purple-400  duration-200 mb-5 w-4/5 rounded-md py-1 sm:py-2 pl-2 "
  });
  const saveBtn = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", ["save"], {
    type: "submit",
    class: "submit-btn transition ease-in py-[3px] text-gray-400 rounded-md border-[2px] border-gray-500  outline-none  text-sm sm:text-base px-2 min-w-[60px] sm:min-w-[80px] font-semibold hover:border-purple-500 hover:text-purple-400 duration-200"
  });
  const cancelBtn = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", ["cancel"], {
    id: "cancel-btn",
    class: "cancel-btn close-modal transition ease-in py-[3px] text-gray-400 rounded-md border-[2px] border-gray-500  outline-none  text-sm sm:text-base px-2 min-w-[60px] sm:min-w-[80px] font-semibold hover:border-purple-500 hover:text-purple-400 duration-200"
  });
  const formBtns = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [saveBtn, cancelBtn], {
    class: "form-btns flex gap-[20px] mt-3"
  });
  const formBody = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [locationInput, formBtns], {
    class: "flex flex-col justify-center items-center my-5"
  });
  const infoIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("i", [], {
    class: "fas fa-info-circle text-slate-400 text-base mr-1 rounded-full"
  });
  const formInfo = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [infoIcon, "current weather details will be displayed for default location on app load"], {
    class: "text-xs min-w-[242px] sm:text-sm text-gray-300  text-center px-2"
  });
  const formFooter = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [formInfo], {
    class: "flex justify-center pb-2 "
  });
  const wrapper = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [formHeader, formBody, formFooter], {
    class: "form-content-wrapper"
  });
  const form = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("form", [wrapper], {
    class: "default-location-form bg-gray-800 border-[] relative bottom-[100px] rounded-md overflow-hidden shadow-[rgba(0,0,0,0.3)_0px_19px _38px,rgba(0,0,0,0.22)_0px_15px_12px] w-[90%] max-w-[480px] min-w-[260px] animate-reveal"
  });
  const overlay = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [form], {
    class: "overlay close-modal fixed inset-0 z-10 bg-[rgba(0,0,0,0.5)] flex justify-center items-center  px-4 min-w-[270px] "
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
/* harmony import */ var _location_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location-store */ "./src/location-store.js");




 //get location from user input on form

function getLocation() {
  const form = document.querySelector(".location");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const location = input.value;
    (0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__["default"])(location);
    input.value = "";
  });
}

function defaultLocation() {
  const form = document.querySelector(".default-location-form");

  if (form) {
    const input = form.elements["default-location-input"];
    form.addEventListener("submit", e => {
      e.preventDefault();
      const location = input.value;
      _location_store__WEBPACK_IMPORTED_MODULE_4__["default"].setLocation(location);
      console.log(location);
      (0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__["default"])(location);
      input.value = "";
    });
  }
}

function cancelDefaultLocation() {
  //const form = document.querySelector(".default-location-form");
  const overlay = document.querySelector(".overlay");

  if (overlay) {
    overlay.addEventListener("click", e => {
      const target = e.target;

      if (target.classList.contains("close-modal")) {
        overlay.remove();
      }

      _location_store__WEBPACK_IMPORTED_MODULE_4__["default"].setLocation("canceled");
    });
  }
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
  cancelDefaultLocation();
  defaultLocation();
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
    class: "location grid grid-cols-[1fr_auto] justify-center items-center w-[90%] max-w-xs rounded-full bg-gray-700 px-2 focus-within:bg-gray-900 focus-within:border-slate-600 focus-within:border-2 sm:justify-self-end shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px]"
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
/* harmony import */ var _location_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-store */ "./src/location-store.js");
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeout */ "./src/timeout.js");





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
  console.log(_location_store__WEBPACK_IMPORTED_MODULE_2__["default"].location());

  if (_location_store__WEBPACK_IMPORTED_MODULE_2__["default"].location() === null) {
    section.append((0,_choose_location__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  console.log(!_location_store__WEBPACK_IMPORTED_MODULE_2__["default"].location());
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

/***/ "./src/location-store.js":
/*!*******************************!*\
  !*** ./src/location-store.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const store = (() => {
  const locationKey = "defaultLocation";
  let defaultLocation = getLocationFromStorage();

  function getLocationFromStorage() {
    const retrievedLocation = localStorage.getItem(locationKey) || null;
    return retrievedLocation;
  }

  function setLocationToStorage() {
    localStorage.setItem(locationKey, defaultLocation);
  }

  const setLocation = location => {
    defaultLocation = location;
    setLocationToStorage();
    console.log(defaultLocation);
  };

  const location = () => {
    return defaultLocation;
  };

  return {
    setLocation,
    location
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

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

/***/ "./src/timeout.js":
/*!************************!*\
  !*** ./src/timeout.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _choose_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-location */ "./src/choose-location.js");


const setTimeOut = (section, callback) => {
  const id = setTimeout(() => {
    section.append((0,_choose_location__WEBPACK_IMPORTED_MODULE_0__["default"])());
    callback(id);
  }, 2000);
  console.log(id);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTimeOut);

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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.fixed {\n  position: fixed;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.bottom-\\[100px\\] {\n  bottom: 100px;\n}\n.z-10 {\n  z-index: 10;\n}\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-\\[40px\\] {\n  margin-bottom: 40px;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-\\[60px\\] {\n  margin-top: 60px;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.-mt-5 {\n  margin-top: -1.25rem;\n}\n.mt-auto {\n  margin-top: auto;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-\\[90\\%\\] {\n  height: 90%;\n}\n.h-full {\n  height: 100%;\n}\n.h-\\[110px\\] {\n  height: 110px;\n}\n.h-\\[96px\\] {\n  height: 96px;\n}\n.min-h-\\[50px\\] {\n  min-height: 50px;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.w-\\[90\\%\\] {\n  width: 90%;\n}\n.w-full {\n  width: 100%;\n}\n.w-3\\/5 {\n  width: 60%;\n}\n.w-\\[120px\\] {\n  width: 120px;\n}\n.w-\\[110px\\] {\n  width: 110px;\n}\n.w-\\[115px\\] {\n  width: 115px;\n}\n.w-\\[1px\\] {\n  width: 1px;\n}\n.min-w-\\[60px\\] {\n  min-width: 60px;\n}\n.min-w-\\[242px\\] {\n  min-width: 242px;\n}\n.min-w-\\[260px\\] {\n  min-width: 260px;\n}\n.min-w-\\[270px\\] {\n  min-width: 270px;\n}\n.min-w-min {\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n.max-w-\\[480px\\] {\n  max-width: 480px;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.max-w-\\[960px\\] {\n  max-width: 960px;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.flex-auto {\n  flex: 1 1 auto;\n}\n@-webkit-keyframes reveal {\n\n  from {\n    top: -900px;\n  }\n\n  to {\n    top: 0px;\n  }\n}\n@keyframes reveal {\n\n  from {\n    top: -900px;\n  }\n\n  to {\n    top: 0px;\n  }\n}\n.animate-reveal {\n  -webkit-animation: reveal 1s linear forwards;\n          animation: reveal 1s linear forwards;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.grid-cols-\\[1fr_auto\\] {\n  grid-template-columns: 1fr auto;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-\\[1fr_1fr\\] {\n  grid-template-columns: 1fr 1fr;\n}\n.grid-rows-\\[auto_1fr_auto\\] {\n  grid-template-rows: auto 1fr auto;\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-1 {\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n}\n.grid-rows-\\[50px_1fr\\] {\n  grid-template-rows: 50px 1fr;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.gap-\\[20px\\] {\n  gap: 20px;\n}\n.gap-x-3 {\n  -moz-column-gap: 0.75rem;\n       column-gap: 0.75rem;\n}\n.gap-x-2 {\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n}\n.self-start {\n  align-self: flex-start;\n}\n.self-end {\n  align-self: flex-end;\n}\n.self-center {\n  align-self: center;\n}\n.justify-self-start {\n  justify-self: start;\n}\n.justify-self-end {\n  justify-self: end;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.border-\\[2px\\] {\n  border-width: 2px;\n}\n.border-\\[1px\\] {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-l-2 {\n  border-left-width: 2px;\n}\n.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\n.border-slate-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(148 163 184 / var(--tw-border-opacity));\n}\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n}\n.border-pink-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(244 114 182 / var(--tw-border-opacity));\n}\n.border-l-slate-600 {\n  --tw-border-opacity: 1;\n  border-left-color: rgb(71 85 105 / var(--tw-border-opacity));\n}\n.bg-purple-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(147 51 234 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n.bg-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.5\\)\\] {\n  background-color: rgba(0,0,0,0.5);\n}\n.bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n}\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.bg-slate-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n}\n.bg-slate-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(71 85 105 / var(--tw-bg-opacity));\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-\\[3px\\] {\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.py-\\[1px\\] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-\\[1px\\] {\n  padding-left: 1px;\n  padding-right: 1px;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.pl-2 {\n  padding-left: 0.5rem;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.pr-\\[1px\\] {\n  padding-right: 1px;\n}\n.pt-\\[120px\\] {\n  padding-top: 120px;\n}\n.pl-8 {\n  padding-left: 2rem;\n}\n.pt-\\[100px\\] {\n  padding-top: 100px;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.pt-3 {\n  padding-top: 0.75rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.align-top {\n  vertical-align: top;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.font-sanspro {\n  font-family: source sans pro, sans-serif;\n}\n.font-barlow {\n  font-family: Barlow, sans-serif;\n}\n.font-fira {\n  font-family: Fira sans, sans-serfif;\n}\n.font-akshar {\n  font-family: Akshar, sans-serif;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-light {\n  font-weight: 300;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.tracking-tighter {\n  letter-spacing: -0.05em;\n}\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n.text-slate-300 {\n  --tw-text-opacity: 1;\n  color: rgb(203 213 225 / var(--tw-text-opacity));\n}\n.text-purple-400 {\n  --tw-text-opacity: 1;\n  color: rgb(192 132 252 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-pink-400 {\n  --tw-text-opacity: 1;\n  color: rgb(244 114 182 / var(--tw-text-opacity));\n}\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n.text-indigo-400 {\n  --tw-text-opacity: 1;\n  color: rgb(129 140 248 / var(--tw-text-opacity));\n}\n.text-indigo-200 {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.text-pink-500 {\n  --tw-text-opacity: 1;\n  color: rgb(236 72 153 / var(--tw-text-opacity));\n}\n.text-indigo-300 {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\n.shadow-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.12\\)_0px_1px_3px\\2c rgba\\(0\\2c 0\\2c 0\\2c 0\\.24\\)_0px_1px_2px\\] {\n  --tw-shadow: rgba(0,0,0,0.12) 0px 1px 3px,rgba(0,0,0,0.24) 0px 1px 2px;\n  --tw-shadow-colored: 0px 1px 3px var(--tw-shadow-color), 0px 1px 2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-\\[rgba\\(60\\2c 64\\2c 67\\2c 0\\.3\\)_0px_1px_2px_0px\\2c rgba\\(60\\2c 64\\2c 67\\2c 0\\.15\\)_0px_2px_6px_2px\\] {\n  --tw-shadow: rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 2px 6px 2px;\n  --tw-shadow-colored: 0px 1px 2px 0px var(--tw-shadow-color), 0px 2px 6px 2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.16\\)_0px_3px_6px\\2c rgba\\(0\\2c 0\\2c 0\\2c 0\\.23\\)_0px_3px_6px\\] {\n  --tw-shadow: rgba(0,0,0,0.16) 0px 3px 6px,rgba(0,0,0,0.23) 0px 3px 6px;\n  --tw-shadow-colored: 0px 3px 6px var(--tw-shadow-color), 0px 3px 6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sky-500 {\n  --tw-shadow-color: #0ea5e9;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[display\\] {\n  transition-property: display;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-700 {\n  transition-duration: 700ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.placeholder\\:text-sm::-moz-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm:-ms-input-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm::placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-gray-300::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-300:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-300::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.focus-within\\:border-2:focus-within {\n  border-width: 2px;\n}\n.focus-within\\:border-slate-600:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity));\n}\n.focus-within\\:bg-gray-900:focus-within {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.hover\\:scale-125:hover {\n  --tw-scale-x: 1.25;\n  --tw-scale-y: 1.25;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:border-purple-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(192 132 252 / var(--tw-border-opacity));\n}\n.hover\\:border-purple-500:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(168 85 247 / var(--tw-border-opacity));\n}\n.hover\\:border-slate-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(148 163 184 / var(--tw-border-opacity));\n}\n.hover\\:text-purple-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(192 132 252 / var(--tw-text-opacity));\n}\n.hover\\:text-indigo-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(129 140 248 / var(--tw-text-opacity));\n}\n.hover\\:text-indigo-300:hover {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\n.hover\\:text-slate-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n.focus\\:border-purple-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(168 85 247 / var(--tw-border-opacity));\n}\n.focus\\:placeholder\\:text-xs:focus::-moz-placeholder {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.focus\\:placeholder\\:text-xs:focus:-ms-input-placeholder {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.focus\\:placeholder\\:text-xs:focus::placeholder {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.focus\\:placeholder\\:font-semibold:focus::-moz-placeholder {\n  font-weight: 600;\n}\n.focus\\:placeholder\\:font-semibold:focus:-ms-input-placeholder {\n  font-weight: 600;\n}\n.focus\\:placeholder\\:font-semibold:focus::placeholder {\n  font-weight: 600;\n}\n.focus\\:placeholder\\:text-indigo-200:focus::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.focus\\:placeholder\\:text-indigo-200:focus:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.focus\\:placeholder\\:text-indigo-200:focus::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n@media (min-width: 640px) {\n\n  .sm\\:mb-3 {\n    margin-bottom: 0.75rem;\n  }\n\n  .sm\\:ml-8 {\n    margin-left: 2rem;\n  }\n\n  .sm\\:min-w-\\[80px\\] {\n    min-width: 80px;\n  }\n\n  .sm\\:flex-1 {\n    flex: 1 1 0%;\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .sm\\:justify-center {\n    justify-content: center;\n  }\n\n  .sm\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .sm\\:justify-self-end {\n    justify-self: end;\n  }\n\n  .sm\\:py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n\n  .sm\\:pt-0 {\n    padding-top: 0px;\n  }\n\n  .sm\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n\n  .sm\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .sm\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-7xl {\n    font-size: 4.5rem;\n    line-height: 1;\n  }\n\n  .sm\\:placeholder\\:text-base::-moz-placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:placeholder\\:text-base:-ms-input-placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:placeholder\\:text-base::placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:focus\\:placeholder\\:text-base:focus::-moz-placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:focus\\:placeholder\\:text-base:focus:-ms-input-placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:focus\\:placeholder\\:text-base:focus::placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:focus\\:placeholder\\:font-semibold:focus::-moz-placeholder {\n    font-weight: 600;\n  }\n\n  .sm\\:focus\\:placeholder\\:font-semibold:focus:-ms-input-placeholder {\n    font-weight: 600;\n  }\n\n  .sm\\:focus\\:placeholder\\:font-semibold:focus::placeholder {\n    font-weight: 600;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css","<no source>"],"names":[],"mappings":"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sEAAmB;EAAnB,2FAAmB;EAAnB;AAAmB;AAAnB;EAAA,0BAAmB;EAAnB;AAAmB;AAAnB;EAAA,8BAAmB;EAAnB;AAAmB;AAAnB;EAAA,wBAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,wKAAmB;EAAnB,wJAAmB;EAAnB,gNAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,4BAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAFnB;EAAA,oBCAA;EDAA;CCAA;ADAA;EAAA,oBCAA;EDAA;CCAA;ADAA;EAAA,oBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA;CCAA;ADAA;EAAA,uBCAA;EDAA;CCAA;ADAA;EAAA,mBCAA;EDAA;CCAA;ADAA;EAAA,mBCAA;EDAA,mBCAA;EDAA;CCAA;ADAA;EAAA,uBCAA;EDAA;CCAA;ADAA;EAAA,uBCAA;EDAA;CCAA;ADAA;EAAA,uBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,uBCAA;EDAA;CCAA;ADAA;EAAA,mBCAA;EDAA;CCAA;ADAA;EAAA,mBCAA;EDAA;CCAA;ADAA;EAAA,mBCAA;EDAA;CCAA;ADAA;EAAA;CCAA;ADAA;EAAA;CCAA;ADAA;EAAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,oBCAA;IDAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,kBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,oBCAA;IDAA;GCAA;;EDAA;IAAA,mBCAA;IDAA;GCAA;;EDAA;IAAA,mBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,kBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;CAAA","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;",null],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLHdDQUF3Qyx1QkFBdUIsc0JBQXNCLHdCQUF3QjtBQUN4bmhDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZDLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQThJO0FBQzlJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsOEhBQU87Ozs7QUFJd0Y7QUFDaEgsT0FBTyxpRUFBZSw4SEFBTyxJQUFJLHFJQUFjLEdBQUcscUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNMUYsUUFBUSxHQUFHLElBQUlDLGdCQUFKLEVBQWpCO0FBQ0FELFFBQVEsQ0FBQ3ZFLE1BQVQsQ0FBZ0IwRSxtREFBYSxFQUE3QixFQUFpQ3lDLGlEQUFXLEVBQTVDLEVBQWdEdkQsbURBQWEsRUFBN0Q7QUFDQSxNQUFNNEksR0FBRyxHQUFHNU0sUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQVo7QUFDQTJNLEdBQUcsQ0FBQ3hNLE1BQUosQ0FBV3VFLFFBQVg7QUFDQWlJLEdBQUcsQ0FBQ3pMLFNBQUosQ0FBY0MsR0FBZCxDQUNFLE1BREYsRUFFRSwyQkFGRixFQUdFLGNBSEYsRUFJRSxRQUpGLEVBS0UsY0FMRjtBQVFBcEIsUUFBUSxDQUFDNk0sSUFBVCxDQUFjMUwsU0FBZCxDQUF3QkMsR0FBeEIsQ0FDRSxhQURGLEVBRUUsZUFGRixFQUdFLGNBSEYsRUFJRSxRQUpGO0FBT0FvQyxtREFBTSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2hvb3NlLWxvY2F0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29udmVydC13ZWF0aGVyLXVuaXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2FkaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2F0aW9uLXN0b3JlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdGltZUFuZERhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdGltZW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90cmFuc29ybS1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJDYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQ2FyZGhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FjdGlvbkZvcm0oKSB7XG4gIGNvbnN0IGZvcm1UaXRsZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDNcIixcbiAgICBbXCJTZXQgZGVmYXVsdCB3ZWF0aGVyIGxvY2F0aW9uXCJdLFxuICAgIHtcbiAgICAgIGNsYXNzOlxuICAgICAgICBcInRleHQtbGcgZm9udC1ib2xkIHNtOnRleHQtMnhsIHRleHQtZ3JheS0zMDAgYmctcHVycGxlLTYwMCB0ZXh0LWNlbnRlciBweS0yXCIsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IGZvcm1IZWFkZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbZm9ybVRpdGxlXSwge1xuICAgIGNsYXNzOiBcImZvcm0taGVhZGVyIG1iLVs0MHB4XVwiLFxuICB9KTtcblxuICBjb25zdCBsb2NhdGlvbklucHV0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXSwge1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIGlkOiBcImRlZmF1bHQtbG9jYXRpb24taW5wdXRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBkZWZhdWx0IHdlYXRoZXIgbG9jYXRpb24gXCIsXG4gICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgIGNsYXNzOlxuICAgICAgXCJ0cmFuc2l0aW9uLWFsbCBlYXNlLWluIGJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSBhcHBlYXJuYWNlLW5vbmUgYm9yZGVyLVsycHhdIGJvcmRlci1ncmF5LTUwMCBmb2N1czpib3JkZXItcHVycGxlLTUwMCAgcGxhY2Vob2xkZXI6dGV4dC1zbSBzbTpwbGFjZWhvbGRlcjp0ZXh0LWJhc2UgZm9jdXM6cGxhY2Vob2xkZXI6Zm9udC1zZW1pYm9sZCBmb2N1czpwbGFjZWhvbGRlcjp0ZXh0LXhzIHNtOmZvY3VzOnBsYWNlaG9sZGVyOnRleHQtYmFzZSAgc206Zm9jdXM6cGxhY2Vob2xkZXI6Zm9udC1zZW1pYm9sZCBob3Zlcjpib3JkZXItcHVycGxlLTQwMCAgZHVyYXRpb24tMjAwIG1iLTUgdy00LzUgcm91bmRlZC1tZCBweS0xIHNtOnB5LTIgcGwtMiBcIixcbiAgfSk7XG5cbiAgY29uc3Qgc2F2ZUJ0biA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcInNhdmVcIl0sIHtcbiAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgIGNsYXNzOlxuICAgICAgXCJzdWJtaXQtYnRuIHRyYW5zaXRpb24gZWFzZS1pbiBweS1bM3B4XSB0ZXh0LWdyYXktNDAwIHJvdW5kZWQtbWQgYm9yZGVyLVsycHhdIGJvcmRlci1ncmF5LTUwMCAgb3V0bGluZS1ub25lICB0ZXh0LXNtIHNtOnRleHQtYmFzZSBweC0yIG1pbi13LVs2MHB4XSBzbTptaW4tdy1bODBweF0gZm9udC1zZW1pYm9sZCBob3Zlcjpib3JkZXItcHVycGxlLTUwMCBob3Zlcjp0ZXh0LXB1cnBsZS00MDAgZHVyYXRpb24tMjAwXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImNhbmNlbFwiXSwge1xuICAgIGlkOiBcImNhbmNlbC1idG5cIixcbiAgICBjbGFzczpcbiAgICAgIFwiY2FuY2VsLWJ0biBjbG9zZS1tb2RhbCB0cmFuc2l0aW9uIGVhc2UtaW4gcHktWzNweF0gdGV4dC1ncmF5LTQwMCByb3VuZGVkLW1kIGJvcmRlci1bMnB4XSBib3JkZXItZ3JheS01MDAgIG91dGxpbmUtbm9uZSAgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgcHgtMiBtaW4tdy1bNjBweF0gc206bWluLXctWzgwcHhdIGZvbnQtc2VtaWJvbGQgaG92ZXI6Ym9yZGVyLXB1cnBsZS01MDAgaG92ZXI6dGV4dC1wdXJwbGUtNDAwIGR1cmF0aW9uLTIwMFwiLFxuICB9KTtcblxuICBjb25zdCBmb3JtQnRucyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtzYXZlQnRuLCBjYW5jZWxCdG5dLCB7XG4gICAgY2xhc3M6IFwiZm9ybS1idG5zIGZsZXggZ2FwLVsyMHB4XSBtdC0zXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1Cb2R5ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2xvY2F0aW9uSW5wdXQsIGZvcm1CdG5zXSwge1xuICAgIGNsYXNzOiBcImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG15LTVcIixcbiAgfSk7XG5cbiAgY29uc3QgaW5mb0ljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgW10sIHtcbiAgICBjbGFzczogXCJmYXMgZmEtaW5mby1jaXJjbGUgdGV4dC1zbGF0ZS00MDAgdGV4dC1iYXNlIG1yLTEgcm91bmRlZC1mdWxsXCIsXG4gIH0pO1xuICBjb25zdCBmb3JtSW5mbyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtcbiAgICAgIGluZm9JY29uLFxuICAgICAgXCJjdXJyZW50IHdlYXRoZXIgZGV0YWlscyB3aWxsIGJlIGRpc3BsYXllZCBmb3IgZGVmYXVsdCBsb2NhdGlvbiBvbiBhcHAgbG9hZFwiLFxuICAgIF0sXG4gICAge1xuICAgICAgY2xhc3M6IFwidGV4dC14cyBtaW4tdy1bMjQycHhdIHNtOnRleHQtc20gdGV4dC1ncmF5LTMwMCAgdGV4dC1jZW50ZXIgcHgtMlwiLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBmb3JtRm9vdGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2Zvcm1JbmZvXSwge1xuICAgIGNsYXNzOiBcImZsZXgganVzdGlmeS1jZW50ZXIgcGItMiBcIixcbiAgfSk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW2Zvcm1IZWFkZXIsIGZvcm1Cb2R5LCBmb3JtRm9vdGVyXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJmb3JtLWNvbnRlbnQtd3JhcHBlclwiLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgZm9ybSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBbd3JhcHBlcl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiZGVmYXVsdC1sb2NhdGlvbi1mb3JtIGJnLWdyYXktODAwIGJvcmRlci1bXSByZWxhdGl2ZSBib3R0b20tWzEwMHB4XSByb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctW3JnYmEoMCwwLDAsMC4zKV8wcHhfMTlweCBfMzhweCxyZ2JhKDAsMCwwLDAuMjIpXzBweF8xNXB4XzEycHhdIHctWzkwJV0gbWF4LXctWzQ4MHB4XSBtaW4tdy1bMjYwcHhdIGFuaW1hdGUtcmV2ZWFsXCIsXG4gIH0pO1xuXG4gIGNvbnN0IG92ZXJsYXkgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbZm9ybV0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwib3ZlcmxheSBjbG9zZS1tb2RhbCBmaXhlZCBpbnNldC0wIHotMTAgYmctW3JnYmEoMCwwLDAsMC41KV0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIHB4LTQgbWluLXctWzI3MHB4XSBcIixcbiAgfSk7XG4gIHJldHVybiBvdmVybGF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9hY3Rpb25Gb3JtO1xuIiwiY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkU3R5bGVzOlxuICAgIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgcHktNiBiZy1zbGF0ZS05MDAgcm91bmRlZC1sZyB0ZXh0LXNsYXRlLTMwMCBweC0yIGgtWzkwJV1cIixcbiAgaWNvbnM6IFwibWItMlwiLFxuICBmb290ZXJJY29uczpcbiAgICBcInRyYW5zaXRpb24tY29sb3IgZWFzZS1pbiBkdXRhdGlvbi0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tNDAwIGhvdmVyOnNjYWxlLTEyNSB0ZXh0LWxnXCIsXG4gIGZsZXhSb3dDZW50ZXI6IFwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIixcbiAgZmxleENvbENlbnRlcjogXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIiwiaW1wb3J0IHsgdG9nZ2xlciB9IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG4vL2NvbnZlcnQga2VsdmluIHVuaXQgdG8gRmFocmVuaGVpdFxuZnVuY3Rpb24gdG9GYWhyZW5oZWl0KGNlbHNpdXMpIHtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGNlbHNpdXMgKiAxLjggKyAzMjtcbiAgY29uc29sZS5sb2coZmFocmVuaGVpdC50b0ZpeGVkKDApKTtcbiAgcmV0dXJuIGZhaHJlbmhlaXQudG9GaXhlZCgwKTtcbn1cblxuLy9jb252ZXJ0IGtlbHZpbiB1bml0IHRvIENlbHNpdXNcbmZ1bmN0aW9uIHRvQ2Vsc2l1cyhrZWx2aW5Vbml0KSB7XG4gIGNvbnN0IGNlbHNpdXMgPSBrZWx2aW5Vbml0IC0gMjczLjE1O1xuICByZXR1cm4gY2Vsc2l1cy50b0ZpeGVkKDApO1xufVxuXG5jb25zdCBzZXRUZW1wZXJhdHVyZVVuaXQgPSAoaXNUb2dnbGVkLCB3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlLXZhbHVlXCIpO1xuICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IHRlbXAgPSBpc1RvZ2dsZWRcbiAgICA/IHRvRmFocmVuaGVpdCh3ZWF0aGVyWzBdLnRlbXAudG9GaXhlZCgwKSlcbiAgICA6IHdlYXRoZXJbMF0udGVtcC50b0ZpeGVkKDApO1xuXG4gIHRlbXBlcmF0dXJlTGFiZWwuYXBwZW5kKFxuICAgIHRlbXAsXG4gICAgaXNUb2dnbGVkID8gaGVscGVyLnNwZWNpYWwoXCImZGVnO0ZcIikgOiBoZWxwZXIuc3BlY2lhbChcIiZkZWc7Q1wiKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0VGVtcGVyYXR1cmVVbml0O1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFcnJvcihyZXNwb25zZSkge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBnZXQgd2VhdGhlciBkZXRhaWxzXCIpO1xuICB9XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlPbkVycm9yKGVyciwgaXNMb2FkaW5nKSB7XG4gIGNvbnN0IHNhZEZhY2UgPSBoZWxwZXIuc3BlY2lhbChcIiZscGFyOyZndDsmbG93YmFyOyZsdDsmcnBhcjtcIik7XG4gIGNvbnN0IHNhZEZhY2VTcGFuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtzYWRGYWNlXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJ0ZXh0LTR4bCBsZWFkaW5nLW5vcm1hbCB0cmFja2luZy10aWdodGVyIGZvbnQtbWVkaXVtIG1iLTEgc206dGV4dC02eGwgc206bWItM1wiLFxuICB9KTtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBbZXJyLm1lc3NhZ2VdLCB7XG4gICAgY2xhc3M6IFwidGV4dC0yeGwgc206dGV4dC00eGwgZm9udC1tZWRpdW1cIixcbiAgfSk7XG5cbiAgY29uc3QgZGFzaE9uZSA9IGhlbHBlci5kZWdyZWVDaGFyYWN0ZXIoXCImaHlwaGVuO1wiKTtcbiAgZGFzaE9uZS5jbGFzc0xpc3QuYWRkKFwicHItWzFweF1cIik7XG4gIGNvbnN0IGRhc2hUd28gPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJmh5cGhlbjtcIik7XG4gIGRhc2hUd28uY2xhc3NMaXN0LmFkZChcInByLVsxcHhdXCIpO1xuXG4gIGNvbnN0IGZpeE9uZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtkYXNoT25lLCBcImNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvblwiXSxcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IGZpeFR3byA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtkYXNoVHdvLCBcImVuc3VyZSB3ZWF0aGVyIGxvY2F0aW9uIGlzIGNvcnJlY3RseSBzcGVsdFwiXSxcbiAgICBudWxsXG4gICk7XG5cbiAgY29uc3QgZml4U3VnZ2VzdGlvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmaXhPbmUsIGZpeFR3b10sIHtcbiAgICBjbGFzczogXCJib3JkZXItWzFweF0gYm9yZGVyLXNsYXRlLTQwMCByb3VuZGVkLWxnIHB4LTIgcHktMiBtdC01XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGVycm9yV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW3NhZEZhY2VTcGFuLCBlcnJvck1lc3NhZ2UsIGZpeFN1Z2dlc3Rpb25dLFxuICAgIHtcbiAgICAgIGNsYXNzOlxuICAgICAgICBcImVycm9yLXdyYXBwZXIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXRvcCBpdGVtcy1jZW50ZXIgaC1mdWxsIHB0LVsxMjBweF0gc206anVzdGlmeS1jZW50ZXIgc206cHQtMFwiLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBvbkVycm9yRGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2Vycm9yV3JhcHBlcl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBmb250LXNhbnNwcm8gdGV4dC1zbGF0ZS0zMDAgdGV4dC1zbSBzbTp0ZXh0LWJhc2Ugdy1mdWxsIGgtZnVsbFwiLFxuICB9KTtcbiAgLy8gXCJob21lLXNlY3Rpb24gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBweC00IHRleHQtanVzdGlmeSBoLWZ1bGxcIixcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgbWFpbi5hcHBlbmQob25FcnJvckRpdik7XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBjb25zb2xlLmxvZyhpc0xvYWRpbmcpO1xuICByZXR1cm4gbWFpbjtcbn1cbiIsImltcG9ydCBzZXRUZW1wZXJhdHVyZVVuaXQgZnJvbSBcIi4vY29udmVydC13ZWF0aGVyLXVuaXRcIjtcbmltcG9ydCBnZXREYXRhIGZyb20gXCIuL2ZldGNoLWRhdGFcIjtcbmltcG9ydCB7IHdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vdHJhbnNvcm0tZGF0YVwiO1xuaW1wb3J0IG9uUGFnZUxvYWQgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL2xvY2F0aW9uLXN0b3JlXCI7XG5cbi8vZ2V0IGxvY2F0aW9uIGZyb20gdXNlciBpbnB1dCBvbiBmb3JtXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGlucHV0LnZhbHVlO1xuICAgIGdldERhdGEobG9jYXRpb24pO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2NhdGlvbigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmYXVsdC1sb2NhdGlvbi1mb3JtXCIpO1xuICBpZiAoZm9ybSkge1xuICAgIGNvbnN0IGlucHV0ID0gZm9ybS5lbGVtZW50c1tcImRlZmF1bHQtbG9jYXRpb24taW5wdXRcIl07XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IGlucHV0LnZhbHVlO1xuICAgICAgc3RvcmUuc2V0TG9jYXRpb24obG9jYXRpb24pO1xuICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuICAgICAgZ2V0RGF0YShsb2NhdGlvbik7XG4gICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsRGVmYXVsdExvY2F0aW9uKCkge1xuICAvL2NvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZmF1bHQtbG9jYXRpb24tZm9ybVwiKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlLW1vZGFsXCIpKSB7XG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBzdG9yZS5zZXRMb2NhdGlvbihcImNhbmNlbGVkXCIpO1xuICAgIH0pO1xuICB9XG59XG5cbi8vdG9nZ2xlIGNoZWNrIGJveCB0byBzd2l0Y2ggYmV0d2VlbiB0ZW1wZXJhdHVyZSBzdGF0ZXNcbmNvbnN0IHRvZ2dsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBjb25zdCBpc1RvZ2dsZWQgPSB0YXJnZXQuY2hlY2tlZDtcbiAgICBzZXRUZW1wZXJhdHVyZVVuaXQoaXNUb2dnbGVkLCB3ZWF0aGVyRGF0YSk7XG4gICAgdG9nZ2xlclN3aXRjaChpc1RvZ2dsZWQpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHRvZ2dsZXJTd2l0Y2goaXNUb2dnbGVkKSB7XG4gIGNvbnN0IHRvZ2dsZU9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtb25cIik7XG4gIGNvbnN0IHRvZ2dsZU9mZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLW9mZlwiKTtcbiAgY29uc3QgY2Vsc2l1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Vsc2l1c1wiKTtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmFocmVuaGVpdFwiKTtcbiAgaWYgKGlzVG9nZ2xlZCkge1xuICAgIC8vc3dpdGNoIHRvZ2dsZXJcbiAgICB0b2dnbGVPbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIHRvZ2dsZU9mZi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIC8vc3dpdGNoIGJldHdlZW4gYWN0aXZlIHdlYXRoZXIgdW5pdFxuICAgIGNlbHNpdXMuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtcHVycGxlLTQwMFwiKTtcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWdyYXktNTAwXCIpO1xuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZ3JheS01MDBcIik7XG4gICAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwidGV4dC1wdXJwbGUtNDAwXCIpO1xuICB9XG5cbiAgaWYgKCFpc1RvZ2dsZWQpIHtcbiAgICB0b2dnbGVPbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHRvZ2dsZU9mZi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QuYWRkKFwidGV4dC1wdXJwbGUtNDAwXCIpO1xuICAgIGNlbHNpdXMuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZ3JheS01MDBcIik7XG4gICAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwidGV4dC1ncmF5LTUwMFwiKTtcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXB1cnBsZS00MDBcIik7XG4gIH1cbn1cblxuY29uc3QgZm9jdXNJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0XCIpO1xuICBjb25zdCBjYWxsVG9BY3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbGwtdG8tYWN0aW9uXCIpO1xuICBjYWxsVG9BY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZm9ybS5mb2N1cygpO1xuICB9KTtcbn07XG5cbi8vaG9tZVxuXG5jb25zdCBiYWNrVG9Ib21lID0gKCkgPT4ge1xuICBjb25zdCBhcHBMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtbG9nb1wiKTtcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgYXBwTG9nby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBtYWluRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW5FbGVtZW50LmFwcGVuZChvblBhZ2VMb2FkKCkpO1xuICAgIGZvY3VzSW5wdXQoKTtcbiAgfSk7XG59O1xuXG4vL2luaXRpYWxpemUgZXZlbnRzXG5jb25zdCBldmVudHMgPSAoKSA9PiB7XG4gIGdldExvY2F0aW9uKCk7XG4gIGNhbmNlbERlZmF1bHRMb2NhdGlvbigpO1xuICBkZWZhdWx0TG9jYXRpb24oKTtcbiAgdG9nZ2xlcigpO1xuICBmb2N1c0lucHV0KCk7XG4gIGJhY2tUb0hvbWUoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcbiIsImltcG9ydCB0cmFuZm9ybURhdGEgZnJvbSBcIi4vdHJhbnNvcm0tZGF0YVwiO1xuaW1wb3J0IGxvYWRpbmcgZnJvbSBcIi4vbG9hZGluZ1wiO1xuaW1wb3J0IHsgY2hlY2tFcnJvciwgZGlzcGxheU9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvclwiO1xuXG5sZXQgaXNMb2FkaW5nID0gdHJ1ZTtcbmNvbnN0IGdldERhdGEgPSBhc3luYyAoY2l0eSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IEFQSV9LRVkgPSBcIjNjZWI4ODUyYjliNmExZmQ4YTgxOTFhZjcyNDMzOTdmXCI7XG4gICAgbG9hZGluZyhpc0xvYWRpbmcpO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjaGVja0Vycm9yKHJlc3BvbnNlKTtcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHRyYW5mb3JtRGF0YShkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGlzcGxheU9uRXJyb3IoZXJyLCBpc0xvYWRpbmcpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IGZvb3RlclNlY3Rpb24gPSAoKSA9PiB7XG4gIC8vaWNvbnNcbiAgY29uc3QgZ2l0aHViID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHsgY2xhc3M6IFwiZmFiIGZhLWdpdGh1YlwiIH0pO1xuICBjb25zdCB0d2l0dGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHsgY2xhc3M6IFwiZmFiIGZhLXR3aXR0ZXJcIiB9KTtcbiAgY29uc3QgbGlua2VkaW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgbnVsbCwge1xuICAgIGNsYXNzOiBcImZhYiBmYS1saW5rZWRpbiBcIixcbiAgfSk7XG4gIC8vbGlua3NcbiAgY29uc3QgZ2l0aHViTGluayA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYVwiLCBbZ2l0aHViXSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3R3aWtpc3RhXCIsXG4gICAgY2xhc3M6IGAke3N0eWxlcy5mb290ZXJJY29uc31gLFxuICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgfSk7XG4gIGNvbnN0IHR3aXR0ZXJMaW5rID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFt0d2l0dGVyXSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9hYXJvbmFuYW1hXCIsXG4gICAgY2xhc3M6IGAke3N0eWxlcy5mb290ZXJJY29uc31gLFxuICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgfSk7XG4gIGNvbnN0IGxpbmtlZGluTGluayA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYVwiLCBbbGlua2VkaW5dLCB7XG4gICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWFyb25hbmFtYVwiLFxuICAgIGNsYXNzOiBgJHtzdHlsZXMuZm9vdGVySWNvbnN9IGAsXG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICB9KTtcblxuICAvL2Zvb3Rlci1zb2NpYWwgaWNvbnMgd3JhcHBlclxuICBjb25zdCBpY29uc1dyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtnaXRodWJMaW5rLCB0d2l0dGVyTGluaywgbGlua2VkaW5MaW5rXSxcbiAgICB7IGNsYXNzOiBcImZsZXgganVzdGlmeS1hcm91bmQgdy0zLzUgbWItMlwiIH1cbiAgKTtcblxuICAvL2NvcHlyaWdodCBpbmZvXG4gIGNvbnN0IGNvcHlSaWdodFN5bWJvbCA9IGhlbHBlci5zcGVjaWFsKFwiJmNvcHk7MjAyMlwiKTtcbiAgY29uc3QgY29weVJpZ2h0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2NvcHlSaWdodFN5bWJvbCwgXCIgYWFyb25hbmFtYVwiXSxcbiAgICB7XG4gICAgICBjbGFzczogXCIgZm9udC1ub3JtYWwgdGV4dC1iYXNlXCIsXG4gICAgfVxuICApO1xuXG4gIC8vd3JhcHBlclxuICBjb25zdCB3cmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2ljb25zV3JhcHBlciwgY29weVJpZ2h0XSwge1xuICAgIGNsYXNzOiBgJHtzdHlsZXMuZmxleENvbENlbnRlcn0gdy0zLzUgbWF4LXctWzQ4MHB4XWAsXG4gIH0pO1xuXG4gIC8vZnJhZ21lbnRcbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmQod3JhcHBlcik7XG4gIC8vZm9vdGVyIGVsZW1lbnRcbiAgY29uc3QgZm9vdGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgW2ZyYWdtZW50XSwge1xuICAgIGNsYXNzOiBgJHtzdHlsZXMuZmxleFJvd0NlbnRlcn0gbWluLWgtWzUwcHhdIGJnLWdyYXktODAwIGJvcmRlci1ncmF5LTcwMCB3LWZ1bGwgcC0yIHRleHQtc2xhdGUtMzAwIHNoYWRvdy1bcmdiYSgwLDAsMCwwLjEyKV8wcHhfMXB4XzNweCxyZ2JhKDAsMCwwLDAuMjQpXzBweF8xcHhfMnB4XSBtdC0yYCxcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlclNlY3Rpb247XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IGhlYWRlclNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcblxuICAvKioqKioqbmF2IGxlZnQgc2VjdGlvbioqKioqL1xuICBjb25zdCBsb2dvRGVnID0gaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIiZkZWc7XCIpO1xuICBsb2dvRGVnLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXBpbmstNDAwXCIsIFwidGV4dC14bFwiKTtcbiAgY29uc3QgbG9nbyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaDJcIiwgW1wid2VkYVwiLCBsb2dvRGVnXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJhcHAtbG9nbyBmb250LWJhcmxvdyBmb250LXNlbWlib2xkIHRleHQtZ3JheS00MDAgdGV4dC0yeGwgc2hhZG93LXNreS01MDAgY3Vyc29yLXBvaW50ZXJcIixcbiAgfSk7XG4gIGNvbnN0IG5hdkxlZnQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbbG9nb10sIHtcbiAgICBjbGFzczogXCJtYi0yIHB5LVsxcHhdIGxvZ28tY29udGFpbmVyIHNtOmZsZXgtMSBzbTptbC04XCIsXG4gIH0pO1xuXG4gIC8qKioqKipuYXYgcmlnaHQgc2VjdGlvbioqKioqKioqKi9cblxuICAvL2NyZWF0ZSBzZWFyY2ggYm94XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXSwge1xuICAgIHR5cGU6IFwic2VhcmNoXCIsXG4gICAgaWQ6IFwic2VhcmNoLWlucHV0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgd2VhdGhlciBsb2NhdGlvbiBcIixcbiAgICBjbGFzczpcbiAgICAgIFwiYmctdHJhbnNwYXJlbnQgIG91dGxpbmUtbm9uZSBhcHBlcmFuY2Utbm9uZSBwbC04IHB5LTIgaC1mdWxsIHBsYWNlaG9sZGVyOnRleHQtc20gZm9jdXM6cGxhY2Vob2xkZXI6dGV4dC1pbmRpZ28tMjAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS0zMDAgZm9udC1maXJhXCIsXG4gICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICB9KTtcblxuICAvL3NlYXJjaCBpY29uXG4gIGNvbnN0IHNlYXJjaEljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgW10sIHtcbiAgICBjbGFzczogXCJmYXMgZmEtc2VhcmNoIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtaW5kaWdvLTMwMCBcIixcbiAgfSk7XG5cbiAgLy9jcmVhdGUgc2VhcmNoIGJ1dHRvblxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbc2VhcmNoSWNvbl0sIHtcbiAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgIGlkOiBcInNlYXJjaC1idG5cIixcbiAgICBjbGFzczogXCJib3JkZXItbC0yIGJvcmRlci1sLXNsYXRlLTYwMCBweC0zIHB5LTIgbWluLXctbWluIGgtZnVsbFwiLFxuICB9KTtcblxuICAvL2NyZWF0IHNlYXJjaCBmb3JtXG4gIGNvbnN0IGZvcm0gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgW3NlYXJjaElucHV0LCBzZWFyY2hCdXR0b25dLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImxvY2F0aW9uIGdyaWQgZ3JpZC1jb2xzLVsxZnJfYXV0b10ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctWzkwJV0gbWF4LXcteHMgcm91bmRlZC1mdWxsIGJnLWdyYXktNzAwIHB4LTIgZm9jdXMtd2l0aGluOmJnLWdyYXktOTAwIGZvY3VzLXdpdGhpbjpib3JkZXItc2xhdGUtNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItMiBzbTpqdXN0aWZ5LXNlbGYtZW5kIHNoYWRvdy1bcmdiYSg2MCw2NCw2NywwLjMpXzBweF8xcHhfMnB4XzBweCxyZ2JhKDYwLDY0LDY3LDAuMTUpXzBweF8ycHhfNnB4XzJweF1cIixcbiAgfSk7XG5cbiAgLy9cbiAgY29uc3QgbmF2UmlnaHQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbZm9ybV0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIHBiLTIgc206ZmxleC0zIHNtOmp1c3RpZnktZW5kIFwiLFxuICB9KTtcblxuICAvKioqKipuYXYgZWxlbWVudCAqL1xuICBjb25zdCBuYXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcIm5hdlwiLCBbbmF2TGVmdCwgbmF2UmlnaHRdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBzbTpmbGV4LXJvdyBzbTpqdXN0aWZ5LWJldHdlZW4gbWF4LXctWzk2MHB4XVwiLFxuICB9KTtcblxuICBmcmFnbWVudC5hcHBlbmQobmF2KTtcblxuICBjb25zdCBoZWFkZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBbZnJhZ21lbnRdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcIiBweC0yIHB5LTIgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgYmctZ3JheS04MDAgc2hhZG93LVtyZ2JhKDAsMCwwLDAuMTIpXzBweF8xcHhfM3B4LHJnYmEoMCwwLDAsMC4yNClfMHB4XzFweF8ycHhdXCIsXG4gIH0pO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyU2VjdGlvbjtcbiIsImZ1bmN0aW9uIGFkZENsYXNzKGVsZSwgY2xhc3Nlcykge1xuICBjbGFzc2VzLmZvckVhY2goKGkpID0+IGVsZS5jbGFzc0xpc3QuYWRkKGkpKTtcbn1cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIG5vZGUsIGF0dHJpYnV0ZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAobm9kZSkge1xuICAgIG5vZGUuZm9yRWFjaCgoaSkgPT4gZWxlbWVudC5hcHBlbmQoaSkpO1xuICB9XG4gIGlmIChhdHRyaWJ1dGUpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlKTtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGkpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKGksIGF0dHJpYnV0ZVtpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vL2NyZWF0ZSBwZWNpYWwgY2hhcmFjdGVyIGluIGEgc3BhblxuY29uc3QgZGVncmVlQ2hhcmFjdGVyID0gKGNoYXIpID0+IHtcbiAgY29uc3QgZGVncmVlQ2hhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkZWdyZWVDaGFyLmlubmVySFRNTCA9IGNoYXI7XG4gIHJldHVybiBkZWdyZWVDaGFyO1xufTtcblxuLy9zcGVjaWFsIGNoYXJhY3RlciBhcyBhIHN0cmluZ1xuY29uc3Qgc3BlY2lhbCA9IChjaGFyKSA9PiB7XG4gIGNvbnN0IGNoYXJhY3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjaGFyYWN0ZXIuaW5uZXJIVE1MID0gY2hhcjtcbiAgY29uc3QgcmVjaGFyID0gY2hhcmFjdGVyLnRleHRDb250ZW50O1xuICByZXR1cm4gcmVjaGFyO1xufTtcblxuY29uc3QgYWRkSWNvbiA9IChrZXl3b3JkLCBzdHlsZXMpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtrZXl3b3JkXSwge1xuICAgIGNsYXNzOiBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsXG4gIH0pO1xuICBhZGRDbGFzcyhzcGFuLCBzdHlsZXMpO1xuICByZXR1cm4gc3Bhbjtcbn07XG5cbmV4cG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50LCBkZWdyZWVDaGFyYWN0ZXIsIGFkZEljb24sIHNwZWNpYWwgfTtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBkZWZhdWx0TG9hY3Rpb25Gb3JtIGZyb20gXCIuL2Nob29zZS1sb2NhdGlvblwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL2xvY2F0aW9uLXN0b3JlXCI7XG5pbXBvcnQgc2V0VGltZU91dCBmcm9tIFwiLi90aW1lb3V0XCI7XG5cbmZ1bmN0aW9uIG9uUGFnZUxvYWQoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDJcIixcbiAgICBbXCJHZXQgQWNjdXJhdGUgV2VhdGhlciBEZXRhaWxzIGJ5IHRoZSBTZWNvbmRcIl0sXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwidGV4dC0zeGwgc206dGV4dC01eGwgdXBwZXJjYXNlIGZvbnQtYmFybG93IGZvbnQtYm9sZCB0ZXh0LXB1cnBsZS00MDAgIHRleHQtY2VudGVyIHRyYWNraW5nLXdpZGVzdCBzZWxmLXN0YXJ0IFwiLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBjYWxsVG9BY3Rpb25CdG4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJnZXQgc3RhcnRlZFwiXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJjYWxsLXRvLWFjdGlvbiAgdy1bMTIwcHhdIHB4LTQgcHktMiB1cHBlcmNhc2UgdGV4dC1zbSB0ZXh0LXBpbmstNDAwIGJvcmRlci1waW5rLTQwMCBmb250LXNhbnNwcm8gZm9udC1zZW1pYm9sZCByb3VuZGVkIHRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0yMDAgaG92ZXI6dGV4dC1zbGF0ZS00MDAgaG92ZXI6Ym9yZGVyLXNsYXRlLTQwMCBib3JkZXItMiBtdC1bNjBweF0gc2hhZG93LVtyZ2JhKDYwLDY0LDY3LDAuMylfMHB4XzFweF8ycHhfMHB4LHJnYmEoNjAsNjQsNjcsMC4xNSlfMHB4XzJweF82cHhfMnB4O11cIixcbiAgfSk7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbaGVhZGVyLCBjYWxsVG9BY3Rpb25CdG5dLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImZsZXggZmxleC1jb2wganVzdGlmeS10b3AgaXRlbXMtY2VudGVyIGgtZnVsbCBmb250LXNhbnNwcm8gcHQtWzEwMHB4XSBzbTpqdXN0aWZ5LWNlbnRlciBzbTpwdC0wXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgW2NvbnRlbnREaXZdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImhvbWUtc2VjdGlvbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHB4LTQgdGV4dC1qdXN0aWZ5IGgtZnVsbFwiLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhzdG9yZS5sb2NhdGlvbigpKTtcblxuICBpZiAoc3RvcmUubG9jYXRpb24oKSA9PT0gbnVsbCkge1xuICAgIHNlY3Rpb24uYXBwZW5kKGRlZmF1bHRMb2FjdGlvbkZvcm0oKSk7XG4gIH1cblxuICBjb25zb2xlLmxvZyghc3RvcmUubG9jYXRpb24oKSk7XG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvblBhZ2VMb2FkO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG5mdW5jdGlvbiBsb2FkaW5nKGlzTG9hZGluZykge1xuICBjb25zdCBsb2FkaW5nRGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiTG9hZGluZy4uLlwiXSwge1xuICAgIGNsYXNzOiBcInRleHQtMnhsIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIsXG4gIH0pO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmQobG9hZGluZ0Rpdik7XG4gIH1cblxuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZztcbiIsImNvbnN0IHN0b3JlID0gKCgpID0+IHtcbiAgY29uc3QgbG9jYXRpb25LZXkgPSBcImRlZmF1bHRMb2NhdGlvblwiO1xuICBsZXQgZGVmYXVsdExvY2F0aW9uID0gZ2V0TG9jYXRpb25Gcm9tU3RvcmFnZSgpO1xuXG4gIGZ1bmN0aW9uIGdldExvY2F0aW9uRnJvbVN0b3JhZ2UoKSB7XG4gICAgY29uc3QgcmV0cmlldmVkTG9jYXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhdGlvbktleSkgfHwgbnVsbDtcbiAgICByZXR1cm4gcmV0cmlldmVkTG9jYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMb2NhdGlvblRvU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhdGlvbktleSwgZGVmYXVsdExvY2F0aW9uKTtcbiAgfVxuXG4gIGNvbnN0IHNldExvY2F0aW9uID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgZGVmYXVsdExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgc2V0TG9jYXRpb25Ub1N0b3JhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhkZWZhdWx0TG9jYXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZWZhdWx0TG9jYXRpb247XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0TG9jYXRpb24sIGxvY2F0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBvblBhZ2VMb2FkIGZyb20gXCIuL2hvbWVcIjtcblxuY29uc3QgbWFpblNlY3Rpb24gPSAoKSA9PiB7XG4gIC8vbWFpbiBlbGVtZW50XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKG9uUGFnZUxvYWQoKSk7XG4gIGNvbnN0IG1haW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcIm1haW5cIiwgW2ZyYWdtZW50XSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJ3LVs5MCVdIG1heC13LTJ4bCBmbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC1hdXRvIGJnLWdyYXktOTAwIHJlbGF0aXZlXCIsXG4gIH0pO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5TZWN0aW9uO1xuIiwiLy9hcnJheSBvZiBkYXlzIG9mIHdlZWtcbmNvbnN0IGRheXNPZldlZWsgPSBbXG4gIHsgaWQ6IDAsIGRheTogXCJTdW5cIiB9LFxuICB7IGlkOiAxLCBkYXk6IFwiTW9uXCIgfSxcbiAgeyBpZDogMiwgZGF5OiBcIlR1ZVwiIH0sXG4gIHsgaWQ6IDMsIGRheTogXCJXZWRcIiB9LFxuICB7IGlkOiA0LCBkYXk6IFwiVGh1XCIgfSxcbiAgeyBpZDogNSwgZGF5OiBcIkZyaVwiIH0sXG4gIHsgaWQ6IDYsIGRheTogXCJTYXRcIiB9LFxuXTtcblxuLy9nZXQgZGF5IG9mIHdlZWtcbmZ1bmN0aW9uIGRheU9mV2VlayhkYXRlKSB7XG4gIGxldCBkYXkgPSBudWxsO1xuICBkYXlzT2ZXZWVrLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoaS5pZCA9PT0gZGF0ZSkge1xuICAgICAgZGF5ID0gaS5kYXk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRheTtcbn1cblxuLy9jb252ZXJ0IHRpbWUgdG8gdXNlciB0aW1lIHdpdGggVVRDIGFuZCBUaW1lWm9uZVxuZnVuY3Rpb24gdXNlclRpbWUodGltZVpvbmVPZmZzZXQpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGxvY2FsVGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuICBjb25zdCBsb2NhbFRpbWVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcbiAgY29uc3QgdXRjVGltZSA9IGxvY2FsVGltZSArIGxvY2FsVGltZU9mZnNldDtcbiAgY29uc3QgbG9jYXRpb25PZmZzZXQgPSB1dGNUaW1lICsgMTAwMCAqIHRpbWVab25lT2Zmc2V0O1xuICBjb25zdCBsb2NhdGlvblRpbWUgPSBuZXcgRGF0ZShsb2NhdGlvbk9mZnNldCk7XG4gIGNvbnNvbGUubG9nKGxvY2F0aW9uVGltZSk7XG4gIHJldHVybiBsb2NhdGlvblRpbWU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclVzZXJUaW1lKHRpbWVab25lT2Zmc2V0KSB7XG4gIC8vZGVmaW5lIGRhdGUsIGRheSwgaG91ciBhbmQgbWludXRlXG4gIGNvbnN0IGRhdGUgPSB1c2VyVGltZSh0aW1lWm9uZU9mZnNldCk7XG4gIGNvbnN0IGRheSA9IGRheU9mV2VlayhkYXRlLmdldERheSgpKTtcbiAgY29uc3QgaG91ckFuZE1pbnV0ZXMgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFtdLCB7XG4gICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgfSk7XG5cbiAgLy9kZWZpbmUgZm9ybWF0IHRvIGRpc3BsYXkgdGltZVxuICBjb25zdCBkaXNsYXlUaW1lID0gYCR7ZGF5fSAke2hvdXJBbmRNaW51dGVzfWA7XG4gIHJldHVybiBkaXNsYXlUaW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJVc2VyVGltZTtcbiIsImltcG9ydCBkZWZhdWx0TG9hY3Rpb25Gb3JtIGZyb20gXCIuL2Nob29zZS1sb2NhdGlvblwiO1xuXG5jb25zdCBzZXRUaW1lT3V0ID0gKHNlY3Rpb24sIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2VjdGlvbi5hcHBlbmQoZGVmYXVsdExvYWN0aW9uRm9ybSgpKTtcbiAgICBjYWxsYmFjayhpZCk7XG4gIH0sIDIwMDApO1xuICBjb25zb2xlLmxvZyhpZCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXRUaW1lT3V0O1xuIiwiaW1wb3J0IHdlYXRoZXJDYXJkIGZyb20gXCIuL3dlYXRoZXJDYXJkXCI7XG5cbmV4cG9ydCBsZXQgd2VhdGhlckRhdGEgPSBudWxsO1xuXG5jb25zdCB0cmFuZm9ybURhdGEgPSAoZGF0YSkgPT4ge1xuICB3ZWF0aGVyRGF0YSA9IFtcbiAgICB7XG4gICAgICB3ZWF0aGVyOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICAgIHdlYXRoZXJkZXNjOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICB0ZW1wOiBkYXRhLm1haW4udGVtcCxcbiAgICAgIG1heFRlbXA6IGRhdGEubWFpbi50ZW1wX21heC50b0ZpeGVkKDApLFxuICAgICAgbWluVGVtcDogZGF0YS5tYWluLnRlbXBfbWluLnRvRml4ZWQoMCksXG4gICAgICBmZWVsc0xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgIHByZXNzdXJlOiBkYXRhLm1haW4ucHJlc3N1cmUsXG4gICAgICB3aW5kOiBkYXRhLndpbmQuc3BlZWQsXG4gICAgICBjb3VudHJ5OiBkYXRhLnN5cy5jb3VudHJ5LFxuICAgICAgY2l0eTogZGF0YS5uYW1lLFxuICAgICAgdGltZVpvbmU6IGRhdGEudGltZXpvbmUsXG4gICAgICB0aW1lOiBkYXRhLmR0LFxuICAgICAgaWNvbjogYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2AsXG4gICAgfSxcbiAgXTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICB3ZWF0aGVyQ2FyZCh3ZWF0aGVyRGF0YSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuZm9ybURhdGE7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgd2VhdGhlckNhcmRDb250ZW50IGZyb20gXCIuL3dlYXRoZXJDYXJkQ29udGVudFwiO1xuaW1wb3J0IHdlYXRoZXJDYXJkSGVhZGVyIGZyb20gXCIuL3dlYXRoZXJDYXJkaGVhZGVyXCI7XG5pbXBvcnQgbG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5jb25zdCB3ZWF0aGVyQ2FyZCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICB3ZWF0aGVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBhcnRpY2xlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImFydGljbGVcIixcbiAgICAgIFt3ZWF0aGVyQ2FyZEhlYWRlcihpdGVtKSwgd2VhdGhlckNhcmRDb250ZW50KGl0ZW0pXSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6IFwiZ3JpZCBncmlkLWNvbHMtMSBncmlkLXJvd3MtMiByb3VuZGVkIGgtZnVsbCBtdC0zIG1iLTUgcHgtM1wiLFxuICAgICAgfVxuICAgICk7XG4gICAgbWFpbi5hcHBlbmQoYXJ0aWNsZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckNhcmQ7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NsYXNzZXNcIjtcbmNvbnN0IHdlYXRoZXJDYXJkQ29udGVudCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGZlZWxzTGlrZUljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1widGhlcm1vc3RhdFwiXSwge1xuICAgIGNsYXNzOiBgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgJHtzdHlsZXMuaWNvbnN9YCxcbiAgfSk7XG4gIGNvbnN0IGZlZWxzTGlrZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtgZmVlbHMgbGlrZTogJHt3ZWF0aGVyLmZlZWxzTGlrZS50b0ZpeGVkKDApfWAsIGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIildLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgZmVlbHNMaWtlRGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2ZlZWxzTGlrZUljb24sIGZlZWxzTGlrZV0sIHtcbiAgICBjbGFzczogc3R5bGVzLmNhcmRTdHlsZXMsXG4gIH0pO1xuXG4gIC8vaHVtaWRpdHlcbiAgY29uc3QgaHVtaWRpdHlJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcIndhdGVyX2Ryb3BcIl0sIHtcbiAgICBjbGFzczogYG1hdGVyaWFsLWljb25zLW91dGxpbmVkICR7c3R5bGVzLmljb25zfWAsXG4gIH0pO1xuICBjb25zdCBodW1pZGl0eSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtgSHVtaWRpdHk6ICR7d2VhdGhlci5odW1pZGl0eX1gXSxcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2h1bWlkaXR5SWNvbiwgaHVtaWRpdHldLCB7XG4gICAgY2xhc3M6IHN0eWxlcy5jYXJkU3R5bGVzLFxuICB9KTtcblxuICAvL3dpbmRcbiAgY29uc3Qgd2luZEljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wiYWlyXCJdLCB7XG4gICAgY2xhc3M6IGBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCAke3N0eWxlcy5pY29uc31gLFxuICB9KTtcbiAgY29uc3Qgd2luZCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtgV2luZDogJHt3ZWF0aGVyLndpbmQudG9GaXhlZCgwKX0gbXBzYF0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCB3aW5kRGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW3dpbmRJY29uLCB3aW5kXSwge1xuICAgIGNsYXNzOiBzdHlsZXMuY2FyZFN0eWxlcyxcbiAgfSk7XG5cbiAgLy9wcmVzc3VyZVxuICBjb25zdCBwcmVzc3VyZUljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wic2NpZW5jZVwiXSwge1xuICAgIGNsYXNzOiBgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgJHtzdHlsZXMuaWNvbnN9YCxcbiAgfSk7XG4gIGNvbnN0IHByZXNzdXJlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BwcmVzc3VyZTogJHt3ZWF0aGVyLnByZXNzdXJlfWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgcHJlc3N1cmVEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbcHJlc3N1cmVJY29uLCBwcmVzc3VyZV0sIHtcbiAgICBjbGFzczogc3R5bGVzLmNhcmRTdHlsZXMsXG4gIH0pO1xuXG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKGh1bWlkaXR5RGl2LCB3aW5kRGl2LCBwcmVzc3VyZURpdiwgZmVlbHNMaWtlRGl2KTtcbiAgY29uc3Qgb3RoZXJXZWF0aGVyRGV0YWlscyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiY2FyZC1ib3R0b20gYmctc2xhdGUtODAwIGdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTIgZ2FwLXgtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGZvbnQtZmlyYSB0ZXh0LXNtIHJvdW5kZWQtbGcgc2hhZG93LVtyZ2JhKDAsMCwwLDAuMTYpXzBweF8zcHhfNnB4LHJnYmEoMCwwLDAsMC4yMylfMHB4XzNweF82cHhdIG1iLTMgXCIsXG4gIH0pO1xuXG4gIHJldHVybiBvdGhlcldlYXRoZXJEZXRhaWxzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckNhcmRDb250ZW50O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHJlbmRlclVzZXJUaW1lIGZyb20gXCIuL3RpbWVBbmREYXRlXCI7XG5cbmNvbnN0IHdlYXRoZXJDYXJkSGVhZGVyID0gKHdlYXRoZXIpID0+IHtcbiAgLy9oZWFkZXIgbGVmdFxuICBjb25zdCBsb2NhdGlvbkljb24gPSBoZWxwZXIuYWRkSWNvbihcImxvY2F0aW9uX29uXCIsIFtjbGFzc2VzLmljb25zXSk7XG4gIGxvY2F0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwidGV4dC14c1wiLCBcInRleHQtaW5kaWdvLTQwMFwiKTtcbiAgY29uc3QgY2l0eSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbYCR7d2VhdGhlci5jaXR5fSwgYF0sIG51bGwpO1xuICBjb25zdCBsb2NhdGlvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDNcIixcbiAgICBbbG9jYXRpb25JY29uLCBjaXR5LCB3ZWF0aGVyLmNvdW50cnldLFxuICAgIHsgY2xhc3M6IFwiXCIgfVxuICApO1xuICBjb25zdCBsb2NhbFRpbWUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgzXCIsXG4gICAgW2Ake3JlbmRlclVzZXJUaW1lKHdlYXRoZXIudGltZVpvbmUpfWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgaGVhZGVyVG9wID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2xvY2F0aW9uLCBsb2NhbFRpbWVdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImhlYWRlci10b3Agdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zIGNlbnRlciB0ZXh0LXNtIHRleHQtaW5kaWdvLTIwMCBmb250LWJhcmxvdyAgZm9udC1saWdodCBwdC0yXCIsXG4gIH0pO1xuICBjb25zdCBhcnJvdyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJhcnJvd19yaWdodFwiXSwge1xuICAgIGNsYXNzOiBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHRleHQtcGluay01MDAgYWxpZ24tbWlkZGxlIFwiLFxuICB9KTtcblxuICAvL3dlYXRoZXIgaWNvblxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtdLCB7XG4gICAgc3JjOiB3ZWF0aGVyLmljb24sXG4gICAgYWx0OiBcIndlYXRoZXItaWNvblwiLFxuICAgIGNsYXNzOiBcInNlbGYtc3RhcnQgLW10LTUgdy1bMTEwcHhdIGgtWzExMHB4XVwiLFxuICB9KTtcblxuICAvL3dlYXRoZXIgZGVzY3JpcHRpb25cbiAgY29uc3Qgd2VhdGhlcmRlc2NyaXB0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoNVwiLFxuICAgIFthcnJvdywgd2VhdGhlci53ZWF0aGVyZGVzY10sXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwiZ3JheS00MDAgZm9udC1maXJhIGZvbnQtbGlnaHQgdGV4dC14cyBzZWxmLXN0YXJ0IGp1c3RpZnktc2VsZi1zdGFydCB3LVsxMTVweF1cIixcbiAgICB9XG4gICk7XG5cbiAgLy93ZWF0aGVyIGljb24gYW5kIGRlc2NyaXB0aW9uIHdyYXBwZXJcbiAgY29uc3Qgd2VhdGhlckxlZnQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFt3ZWF0aGVyZGVzY3JpcHRpb24sIHdlYXRoZXJJY29uXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIHB0LTNcIixcbiAgICB9XG4gICk7XG4gIC8vZGVncmVlIHNwZWNpYWwgY2hhcmFjdGVyXG4gIGNvbnN0IGRlZyA9IGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIik7XG4gIC8vIGNvbnN0IGNlbHNpdXNTcGFuID0gaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIiYjODQ1MTtcIik7XG4gIGNvbnN0IGNlbHNpdXNTcGFuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcIkNcIl0sIG51bGwpO1xuICAvL2NlbHNpdXNTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTJ4bFwiLCBcImFsaWduLXRvcFwiLCBcImlubGluZS1ibG9ja1wiLCBcInB0LTJcIik7XG4gIC8vdGVtcGVyYXR1cmUgdmFsdWVcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgxXCIsXG4gICAgW3dlYXRoZXIudGVtcC50b0ZpeGVkKDApLCBkZWcsIGNlbHNpdXNTcGFuXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJ0ZW1wZXJhdHVyZS12YWx1ZSB0ZXh0LTV4bCBzbTp0ZXh0LTd4bCB0ZXh0LXB1cnBsZS00MDAgbWItMVwiLFxuICAgIH1cbiAgKTtcblxuICAvL21heGltdW0gYW5kIG1pbmltdW0gdGVtcGVyYXR1cmVcbiAgY29uc3QgaGlnaCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtcIkg6XCIsIHdlYXRoZXIubWF4VGVtcCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBsb3cgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbXCJMOlwiLCB3ZWF0aGVyLm1pblRlbXAsIGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIildLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBtaWQgPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJm1pZDtcIik7XG4gIG1pZC5jbGFzc0xpc3QuYWRkKFwicHgtWzFweF1cIiwgXCJ0ZXh0LWJhc2VcIik7XG5cbiAgY29uc3QgbWluTWF4ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBbaGlnaCwgbWlkLCBsb3ddLCB7XG4gICAgY2xhc3M6XG4gICAgICBcInRleHQtc20gZm9udC1iYXJsb3cgc2VtaWJvbGQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1pbmRpZ28tMzAwXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRlbXBXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW3RlbXBlcmF0dXJlLCBtaW5NYXhdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcInRlbXAtd3JhcHBlciB3LTQvNSBmbGV4LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIixcbiAgfSk7XG5cbiAgLy9oZWFkZXIgcmlnaHRcbiAgY29uc3QgY2hlY2tib3ggPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIG51bGwsIHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgaWQ6IFwidGVtcC10b2dnbGVyXCIsXG4gICAgY2xhc3M6IFwiY2hlY2tib3ggaGlkZGVuXCIsXG4gIH0pO1xuICAvL2xhYmVsXG4gIGNvbnN0IHRvZ2dsZU9uSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0b2dnbGVfb25cIl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC0yeGwgIGhpZGRlbiB0b2dnbGUtb24gdHJhbnNpdGlvbi1bZGlzcGxheV0gZHVyYXRpb24tNzAwIGVhc2UtaW4gXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRvZ2dsZU9mZkljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1widG9nZ2xlX29mZlwiXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB0ZXh0LTJ4bCB0b2dnbGUtb2ZmIHRyYW5zaXRpb24tW2Rpc3BsYXldIGR1cmF0aW9uLTcwMCBlYXNlLWluXCIsXG4gIH0pO1xuICBjb25zdCBsYWJlbCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgW3RvZ2dsZU9mZkljb24sIHRvZ2dsZU9uSWNvbl0sIHtcbiAgICBjbGFzczogXCJ0b2dnbGVyIHB4LTEgZmxleCB0ZXh0LXhzIHRleHQtaW5kaWdvLTMwMCBjdXJzb3ItcG9pbnRlclwiLFxuICAgIGZvcjogXCJ0ZW1wLXRvZ2dsZXJcIixcbiAgfSk7XG5cbiAgY29uc3QgZmFocmVuaGVpdFN5bWJvbCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtoZWxwZXIuc3BlY2lhbChcIiZkZWc7RlwiKV0sXG4gICAgbnVsbFxuICApO1xuICBoZWxwZXIuYWRkQ2xhc3MoZmFocmVuaGVpdFN5bWJvbCwgW1xuICAgIFwiYWxpZ24tdGV4dC1jZW50ZXJcIixcbiAgICBcImZhaHJlbmhlaXRcIixcbiAgICBcInRleHQtZ3JheS01MDBcIixcbiAgICBcInRleHQtc21cIixcbiAgXSk7XG4gIGNvbnN0IGNlbHNpdXNTeW1ib2wgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbaGVscGVyLnNwZWNpYWwoXCImZGVnO0NcIildLFxuICAgIG51bGxcbiAgKTtcbiAgaGVscGVyLmFkZENsYXNzKGNlbHNpdXNTeW1ib2wsIFtcbiAgICBcImFsaWduLXRleHQtY2VudGVyXCIsXG4gICAgXCJjZWxzaXVzXCIsXG4gICAgXCJ0ZXh0LXB1cnBsZS00MDBcIixcbiAgICBcInRleHQtc21cIixcbiAgXSk7XG5cbiAgY29uc3QgdG9nZ2xlcnMgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtjZWxzaXVzU3ltYm9sLCBjaGVja2JveCwgbGFiZWwsIGZhaHJlbmhlaXRTeW1ib2xdLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcInRvZ2dsZXJzIGZsZXggaXRlbXMtY2VudGVyIGZvbnQtYWtzaGFyIGZvbnQtc2VtaWJvbGRcIixcbiAgICB9XG4gICk7XG4gIGNvbnN0IHRvZ2dsZXJzV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFt0b2dnbGVyc10sIHtcbiAgICBjbGFzczogXCJ0b2dnbGVycy13cmFwcGVyIGZsZXggaXRlbXMtY2VudGVyIHNlbGYtZW5kIG10LWF1dG9cIixcbiAgfSk7XG5cbiAgLy90ZW1wZXJhdHVyZSBhbmQgbWlubWF4IHdyYXBwZXJcbiAgY29uc3Qgd2VhdGhlclJpZ2h0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbdGVtcFdyYXBwZXIsIHRvZ2dsZXJzV3JhcHBlcl0sXG4gICAge1xuICAgICAgY2xhc3M6IFwid2VhdGhlci1yaWdodCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiLFxuICAgIH1cbiAgKTtcblxuICAvL3dlYXRoZXJcbiAgY29uc3QgZGl2TWlkID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtdLCB7XG4gICAgY2xhc3M6IFwidy1bMXB4XSBiZy1zbGF0ZS02MDAgaC1bOTZweF0gc2VsZi1jZW50ZXIganVzdGlmeS1zZWxmLWVuZFwiLFxuICB9KTtcblxuICBjb25zdCB3ZWF0aGVyV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW3dlYXRoZXJMZWZ0LCB3ZWF0aGVyUmlnaHRdLFxuICAgIHtcbiAgICAgIGNsYXNzOlxuICAgICAgICBcIndlYXRoZXItd3JhcHBwZXIgZ3JpZCBncmlkLWNvbHMtWzFmcl8xZnJdIGdyaWQtcm93cy0xIGdhcC14LTIgdy1mdWxsIGgtZnVsbFwiLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWdtZW50LmFwcGVuZChoZWFkZXJUb3AsIHdlYXRoZXJXcmFwcGVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBbZnJhZ21lbnRdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImNhcmQtaGVhZGVyIGdyaWQgZ3JpZC1yb3dzLVs1MHB4XzFmcl0gZ3JpZC1jb2xzLTEganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBiZy1zbGF0ZS04MDAgbWItMyBtdC01IHB0LTIgcHgtNCByb3VuZGVkLWxnIHNoYWRvdy1bcmdiYSgwLDAsMCwwLjE2KV8wcHhfM3B4XzZweCxyZ2JhKDAsMCwwLDAuMjMpXzBweF8zcHhfNnB4XSBmb250LXNhbnNwcm9cIixcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZEhlYWRlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjAuMjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLmZpeGVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmluc2V0LTAge1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxufVxcbi5ib3R0b20tXFxcXFsxMDBweFxcXFxdIHtcXG4gIGJvdHRvbTogMTAwcHg7XFxufVxcbi56LTEwIHtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4ubXktNSB7XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuLm14LWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5tYi1cXFxcWzQwcHhcXFxcXSB7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4ubWItNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4ubXQtMyB7XFxuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xcbn1cXG4ubXItMSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLm1iLTEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuLm10LTUge1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuLm10LTIge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4ubXQtXFxcXFs2MHB4XFxcXF0ge1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuLm1iLTMge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLi1tdC01IHtcXG4gIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xcbn1cXG4ubXQtYXV0byB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4uaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaC1cXFxcWzkwXFxcXCVcXFxcXSB7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oLVxcXFxbMTEwcHhcXFxcXSB7XFxuICBoZWlnaHQ6IDExMHB4O1xcbn1cXG4uaC1cXFxcWzk2cHhcXFxcXSB7XFxuICBoZWlnaHQ6IDk2cHg7XFxufVxcbi5taW4taC1cXFxcWzUwcHhcXFxcXSB7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG4ubWluLWgtc2NyZWVuIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4udy00XFxcXC81IHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi53LVxcXFxbOTBcXFxcJVxcXFxdIHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi53LTNcXFxcLzUge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuLnctXFxcXFsxMjBweFxcXFxdIHtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuLnctXFxcXFsxMTBweFxcXFxdIHtcXG4gIHdpZHRoOiAxMTBweDtcXG59XFxuLnctXFxcXFsxMTVweFxcXFxdIHtcXG4gIHdpZHRoOiAxMTVweDtcXG59XFxuLnctXFxcXFsxcHhcXFxcXSB7XFxuICB3aWR0aDogMXB4O1xcbn1cXG4ubWluLXctXFxcXFs2MHB4XFxcXF0ge1xcbiAgbWluLXdpZHRoOiA2MHB4O1xcbn1cXG4ubWluLXctXFxcXFsyNDJweFxcXFxdIHtcXG4gIG1pbi13aWR0aDogMjQycHg7XFxufVxcbi5taW4tdy1cXFxcWzI2MHB4XFxcXF0ge1xcbiAgbWluLXdpZHRoOiAyNjBweDtcXG59XFxuLm1pbi13LVxcXFxbMjcwcHhcXFxcXSB7XFxuICBtaW4td2lkdGg6IDI3MHB4O1xcbn1cXG4ubWluLXctbWluIHtcXG4gIG1pbi13aWR0aDogLXdlYmtpdC1taW4tY29udGVudDtcXG4gIG1pbi13aWR0aDogLW1vei1taW4tY29udGVudDtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5tYXgtdy1cXFxcWzQ4MHB4XFxcXF0ge1xcbiAgbWF4LXdpZHRoOiA0ODBweDtcXG59XFxuLm1heC13LXhzIHtcXG4gIG1heC13aWR0aDogMjByZW07XFxufVxcbi5tYXgtdy1cXFxcWzk2MHB4XFxcXF0ge1xcbiAgbWF4LXdpZHRoOiA5NjBweDtcXG59XFxuLm1heC13LTJ4bCB7XFxuICBtYXgtd2lkdGg6IDQycmVtO1xcbn1cXG4uZmxleC1hdXRvIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmV2ZWFsIHtcXG5cXG4gIGZyb20ge1xcbiAgICB0b3A6IC05MDBweDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdG9wOiAwcHg7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcmV2ZWFsIHtcXG5cXG4gIGZyb20ge1xcbiAgICB0b3A6IC05MDBweDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdG9wOiAwcHg7XFxuICB9XFxufVxcbi5hbmltYXRlLXJldmVhbCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcmV2ZWFsIDFzIGxpbmVhciBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiByZXZlYWwgMXMgbGluZWFyIGZvcndhcmRzO1xcbn1cXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ3JpZC1jb2xzLVxcXFxbMWZyX2F1dG9cXFxcXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbn1cXG4uZ3JpZC1jb2xzLTEge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1jb2xzLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1jb2xzLVxcXFxbMWZyXzFmclxcXFxdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuLmdyaWQtcm93cy1cXFxcW2F1dG9fMWZyX2F1dG9cXFxcXSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcbi5ncmlkLXJvd3MtMiB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLXJvd3MtMSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLXJvd3MtXFxcXFs1MHB4XzFmclxcXFxdIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxufVxcbi5mbGV4LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLml0ZW1zLXN0YXJ0IHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uaXRlbXMtY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LXN0YXJ0IHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmp1c3RpZnktYXJvdW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZ2FwLVxcXFxbMjBweFxcXFxdIHtcXG4gIGdhcDogMjBweDtcXG59XFxuLmdhcC14LTMge1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAwLjc1cmVtO1xcbiAgICAgICBjb2x1bW4tZ2FwOiAwLjc1cmVtO1xcbn1cXG4uZ2FwLXgtMiB7XFxuICAtbW96LWNvbHVtbi1nYXA6IDAuNXJlbTtcXG4gICAgICAgY29sdW1uLWdhcDogMC41cmVtO1xcbn1cXG4uc2VsZi1zdGFydCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG4uc2VsZi1lbmQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcbi5zZWxmLWNlbnRlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LXNlbGYtc3RhcnQge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuLmp1c3RpZnktc2VsZi1lbmQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbi5vdmVyZmxvdy1oaWRkZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnJvdW5kZWQtbWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxufVxcbi5yb3VuZGVkLWZ1bGwge1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbn1cXG4ucm91bmRlZC1sZyB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcbi5yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcbi5ib3JkZXItXFxcXFsycHhcXFxcXSB7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuLmJvcmRlci1cXFxcWzFweFxcXFxdIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4uYm9yZGVyLTIge1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItbC0yIHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItZ3JheS01MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDEwNyAxMTQgMTI4IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1zbGF0ZS00MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1ncmF5LTcwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNTUgNjUgODEgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLXBpbmstNDAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyNDQgMTE0IDE4MiAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItbC1zbGF0ZS02MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzEgODUgMTA1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJnLXB1cnBsZS02MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NyA1MSAyMzQgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy10cmFuc3BhcmVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmJnLWdyYXktODAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSA0MSA1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLVxcXFxbcmdiYVxcXFwoMFxcXFwyYyAwXFxcXDJjIDBcXFxcMmMgMFxcXFwuNVxcXFwpXFxcXF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG4uYmctc2xhdGUtOTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSAyMyA0MiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyYXktNzAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSA2NSA4MSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyYXktOTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNyAyNCAzOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXNsYXRlLTgwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAgNDEgNTkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1zbGF0ZS02MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxIDg1IDEwNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLnAtMiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ucHktMSB7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4ucHktXFxcXFszcHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XFxuLnB4LTIge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5weC00IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcbi5weS02IHtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbn1cXG4ucHktXFxcXFsxcHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogMXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDFweDtcXG59XFxuLnB4LTMge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcXG59XFxuLnB4LVxcXFxbMXB4XFxcXF0ge1xcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XFxufVxcbi5weC0xIHtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5wbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG4ucGItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ucHItXFxcXFsxcHhcXFxcXSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XFxufVxcbi5wdC1cXFxcWzEyMHB4XFxcXF0ge1xcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xcbn1cXG4ucGwtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcbi5wdC1cXFxcWzEwMHB4XFxcXF0ge1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbn1cXG4ucHQtMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4ucHQtMyB7XFxuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG59XFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRleHQtanVzdGlmeSB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG4uYWxpZ24tdG9wIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5hbGlnbi1taWRkbGUge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmZvbnQtc2Fuc3BybyB7XFxuICBmb250LWZhbWlseTogc291cmNlIHNhbnMgcHJvLCBzYW5zLXNlcmlmO1xcbn1cXG4uZm9udC1iYXJsb3cge1xcbiAgZm9udC1mYW1pbHk6IEJhcmxvdywgc2Fucy1zZXJpZjtcXG59XFxuLmZvbnQtZmlyYSB7XFxuICBmb250LWZhbWlseTogRmlyYSBzYW5zLCBzYW5zLXNlcmZpZjtcXG59XFxuLmZvbnQtYWtzaGFyIHtcXG4gIGZvbnQtZmFtaWx5OiBBa3NoYXIsIHNhbnMtc2VyaWY7XFxufVxcbi50ZXh0LWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4udGV4dC1iYXNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcbi50ZXh0LXhzIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4udGV4dC00eGwge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXG59XFxuLnRleHQtMnhsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcbi50ZXh0LXhsIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC0zeGwge1xcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG4udGV4dC01eGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmZvbnQtc2VtaWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZvbnQtbWVkaXVtIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5mb250LW5vcm1hbCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZm9udC1saWdodCB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4udXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5sZWFkaW5nLW5vcm1hbCB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4udHJhY2tpbmctdGlnaHRlciB7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcXG59XFxuLnRyYWNraW5nLXdpZGVzdCB7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxufVxcbi50ZXh0LWdyYXktMzAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMDkgMjEzIDIxOSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTU2IDE2MyAxNzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtc2xhdGUtNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1zbGF0ZS0zMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIwMyAyMTMgMjI1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXB1cnBsZS00MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5MiAxMzIgMjUyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWdyYXktNTAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxMDcgMTE0IDEyOCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1waW5rLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjQ0IDExNCAxODIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS0yMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIyOSAyMzEgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWluZGlnby00MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEyOSAxNDAgMjQ4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWluZGlnby0yMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXBpbmstNTAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMzYgNzIgMTUzIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWluZGlnby0zMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE2NSAxODAgMjUyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5zaGFkb3ctXFxcXFtyZ2JhXFxcXCgwXFxcXDJjIDBcXFxcMmMgMFxcXFwyYyAwXFxcXC4xMlxcXFwpXzBweF8xcHhfM3B4XFxcXDJjIHJnYmFcXFxcKDBcXFxcMmMgMFxcXFwyYyAwXFxcXDJjIDBcXFxcLjI0XFxcXClfMHB4XzFweF8ycHhcXFxcXSB7XFxuICAtLXR3LXNoYWRvdzogcmdiYSgwLDAsMCwwLjEyKSAwcHggMXB4IDNweCxyZ2JhKDAsMCwwLDAuMjQpIDBweCAxcHggMnB4O1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMHB4IDFweCAzcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMHB4IDFweCAycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctXFxcXFtyZ2JhXFxcXCg2MFxcXFwyYyA2NFxcXFwyYyA2N1xcXFwyYyAwXFxcXC4zXFxcXClfMHB4XzFweF8ycHhfMHB4XFxcXDJjIHJnYmFcXFxcKDYwXFxcXDJjIDY0XFxcXDJjIDY3XFxcXDJjIDBcXFxcLjE1XFxcXClfMHB4XzJweF82cHhfMnB4XFxcXF0ge1xcbiAgLS10dy1zaGFkb3c6IHJnYmEoNjAsNjQsNjcsMC4zKSAwcHggMXB4IDJweCAwcHgscmdiYSg2MCw2NCw2NywwLjE1KSAwcHggMnB4IDZweCAycHg7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwcHggMXB4IDJweCAwcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMHB4IDJweCA2cHggMnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uc2hhZG93LVxcXFxbcmdiYVxcXFwoMFxcXFwyYyAwXFxcXDJjIDBcXFxcMmMgMFxcXFwuMTZcXFxcKV8wcHhfM3B4XzZweFxcXFwyYyByZ2JhXFxcXCgwXFxcXDJjIDBcXFxcMmMgMFxcXFwyYyAwXFxcXC4yM1xcXFwpXzBweF8zcHhfNnB4XFxcXF0ge1xcbiAgLS10dy1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xNikgMHB4IDNweCA2cHgscmdiYSgwLDAsMCwwLjIzKSAwcHggM3B4IDZweDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDBweCAzcHggNnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDBweCAzcHggNnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uc2hhZG93LXNreS01MDAge1xcbiAgLS10dy1zaGFkb3ctY29sb3I6ICMwZWE1ZTk7XFxuICAtLXR3LXNoYWRvdzogdmFyKC0tdHctc2hhZG93LWNvbG9yZWQpO1xcbn1cXG4ub3V0bGluZS1ub25lIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcbi50cmFuc2l0aW9uLWFsbCB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG4udHJhbnNpdGlvbiB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyLCAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG4udHJhbnNpdGlvbi1cXFxcW2Rpc3BsYXlcXFxcXSB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBkaXNwbGF5O1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuLmR1cmF0aW9uLTIwMCB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG59XFxuLmR1cmF0aW9uLTcwMCB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3MDBtcztcXG59XFxuLmVhc2UtaW4ge1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtc206Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtc206LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnBsYWNlaG9sZGVyXFxcXDp0ZXh0LXNtOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1ncmF5LTMwMDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjA5IDIxMyAyMTkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWdyYXktMzAwOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjA5IDIxMyAyMTkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWdyYXktMzAwOjpwbGFjZWhvbGRlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjA5IDIxMyAyMTkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmZvY3VzLXdpdGhpblxcXFw6Ym9yZGVyLTI6Zm9jdXMtd2l0aGluIHtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbn1cXG4uZm9jdXMtd2l0aGluXFxcXDpib3JkZXItc2xhdGUtNjAwOmZvY3VzLXdpdGhpbiB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNzEgODUgMTA1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmZvY3VzLXdpdGhpblxcXFw6YmctZ3JheS05MDA6Zm9jdXMtd2l0aGluIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNyAyNCAzOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDpzY2FsZS0xMjU6aG92ZXIge1xcbiAgLS10dy1zY2FsZS14OiAxLjI1O1xcbiAgLS10dy1zY2FsZS15OiAxLjI1O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcbi5ob3ZlclxcXFw6Ym9yZGVyLXB1cnBsZS00MDA6aG92ZXIge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE5MiAxMzIgMjUyIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDpib3JkZXItcHVycGxlLTUwMDpob3ZlciB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTY4IDg1IDI0NyAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6Ym9yZGVyLXNsYXRlLTQwMDpob3ZlciB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTQ4IDE2MyAxODQgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtcHVycGxlLTQwMDpob3ZlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTkyIDEzMiAyNTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDp0ZXh0LWluZGlnby00MDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEyOSAxNDAgMjQ4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6dGV4dC1pbmRpZ28tMzAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNjUgMTgwIDI1MiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtc2xhdGUtNDAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXNcXFxcOmJvcmRlci1wdXJwbGUtNTAwOmZvY3VzIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigxNjggODUgMjQ3IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC14czpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuLmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC14czpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQteHM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4uZm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDpmb250LXNlbWlib2xkOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOmZvbnQtc2VtaWJvbGQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOmZvbnQtc2VtaWJvbGQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtaW5kaWdvLTIwMDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTk5IDIxMCAyNTQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC1pbmRpZ28tMjAwOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTk5IDIxMCAyNTQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC1pbmRpZ28tMjAwOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTk5IDIxMCAyNTQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuICAuc21cXFxcOm1iLTMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDptbC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOm1pbi13LVxcXFxbODBweFxcXFxdIHtcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgfVxcblxcbiAgLnNtXFxcXDpmbGV4LTEge1xcbiAgICBmbGV4OiAxIDEgMCU7XFxuICB9XFxuXFxuICAuc21cXFxcOmZsZXgtcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5zbVxcXFw6anVzdGlmeS1lbmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpqdXN0aWZ5LWNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpqdXN0aWZ5LWJldHdlZW4ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuc21cXFxcOmp1c3RpZnktc2VsZi1lbmQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6cHktMiB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOnB0LTAge1xcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LTJ4bCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC1iYXNlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LXNtIHtcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtNnhsIHtcXG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC00eGwge1xcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtNXhsIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC03eGwge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxuXFxuICAuc21cXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWJhc2U6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWJhc2U6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC1iYXNlOjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6Zm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWJhc2U6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC1iYXNlOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6Zm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWJhc2U6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpmb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOmZvbnQtc2VtaWJvbGQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpmb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOmZvbnQtc2VtaWJvbGQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6Zm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDpmb250LXNlbWlib2xkOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw0TkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjO0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7Ozs7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7RUFBZCxZQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7RUFBQSxtQkFBYztFQUFkLG1CQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsZUFBYztFQUFkLGVBQWM7RUFBZCxhQUFjO0VBQWQsYUFBYztFQUFkLGtCQUFjO0VBQWQsc0NBQWM7RUFBZCxlQUFjO0VBQWQsb0JBQWM7RUFBZCxzQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCxrQkFBYztFQUFkLDJCQUFjO0VBQWQsNEJBQWM7RUFBZCxzQ0FBYztFQUFkLGtDQUFjO0VBQWQsMkJBQWM7RUFBZCxzQkFBYztFQUFkLDhCQUFjO0VBQWQsWUFBYztFQUFkLGtCQUFjO0VBQWQsZ0JBQWM7RUFBZCxpQkFBYztFQUFkLGtCQUFjO0VBQWQsY0FBYztFQUFkLGdCQUFjO0VBQWQsYUFBYztFQUFkLG1CQUFjO0VBQWQscUJBQWM7RUFBZCwyQkFBYztFQUFkLHlCQUFjO0VBQWQsMEJBQWM7RUFBZCwyQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCx5QkFBYztFQUFkO0FBQWM7QUFFZDtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxRQUFtQjtFQUFuQixVQUFtQjtFQUFuQixXQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLDhCQUFtQjtFQUFuQiwyQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5COztFQUFBO0lBQUE7RUFBbUI7O0VBQW5CO0lBQUE7RUFBbUI7QUFBQTtBQUFuQjs7RUFBQTtJQUFBO0VBQW1COztFQUFuQjtJQUFBO0VBQW1CO0FBQUE7QUFBbkI7RUFBQSw0Q0FBbUI7VUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSx3QkFBbUI7T0FBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7T0FBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZ0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZ0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGVBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0VBQW1CO0VBQW5CLDJGQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1GQUFtQjtFQUFuQixtR0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzRUFBbUI7RUFBbkIsMkZBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsMEJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsOEJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsd0JBQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHdLQUFtQjtFQUFuQix3SkFBbUI7RUFBbkIsZ05BQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDRCQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFGbkI7RUFBQSxvQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLG9CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsb0JDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQTtDQ0FBO0FEQUE7RUFBQSx1QkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsbUJDQUE7RURBQSxtQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHVCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsdUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSx1QkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsdUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxtQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsbUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQTtDQ0FBO0FEQUE7RUFBQTtDQ0FBO0FEQUE7RUFBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7O0VBQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQSxvQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUEsa0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsZ0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsb0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsbUJDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsbUJDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsZ0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsa0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsZ0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsZ0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsZ0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsZ0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsZ0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUEsZ0JDQUE7SURBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBO0NBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCBoZWFkZXJTZWN0aW9uIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IG1haW5TZWN0aW9uIGZyb20gXCIuL21haW5cIjtcbmltcG9ydCBmb290ZXJTZWN0aW9uIGZyb20gXCIuL2Zvb3RlclwiO1xuXG5jb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5mcmFnbWVudC5hcHBlbmQoaGVhZGVyU2VjdGlvbigpLCBtYWluU2VjdGlvbigpLCBmb290ZXJTZWN0aW9uKCkpO1xuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIik7XG5hcHAuYXBwZW5kKGZyYWdtZW50KTtcbmFwcC5jbGFzc0xpc3QuYWRkKFxuICBcImdyaWRcIixcbiAgXCJncmlkLXJvd3MtW2F1dG9fMWZyX2F1dG9dXCIsXG4gIFwibWluLWgtc2NyZWVuXCIsXG4gIFwidy1mdWxsXCIsXG4gIFwiZm9udC1zYW5zcHJvXCJcbik7XG5cbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcbiAgXCJiZy1ncmF5LTkwMFwiLFxuICBcInRleHQtZ3JheS0yMDBcIixcbiAgXCJtaW4taC1zY3JlZW5cIixcbiAgXCJ3LWZ1bGxcIlxuKTtcblxuZXZlbnRzKCk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiaGVscGVyIiwiZGVmYXVsdExvYWN0aW9uRm9ybSIsImZvcm1UaXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzcyIsImZvcm1IZWFkZXIiLCJsb2NhdGlvbklucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b2NvbXBsZXRlIiwic2F2ZUJ0biIsImNhbmNlbEJ0biIsImZvcm1CdG5zIiwiZm9ybUJvZHkiLCJpbmZvSWNvbiIsImZvcm1JbmZvIiwiZm9ybUZvb3RlciIsIndyYXBwZXIiLCJmb3JtIiwib3ZlcmxheSIsInN0eWxlcyIsImNhcmRTdHlsZXMiLCJpY29ucyIsImZvb3Rlckljb25zIiwiZmxleFJvd0NlbnRlciIsImZsZXhDb2xDZW50ZXIiLCJ0b2dnbGVyIiwidG9GYWhyZW5oZWl0IiwiY2Vsc2l1cyIsImZhaHJlbmhlaXQiLCJjb25zb2xlIiwibG9nIiwidG9GaXhlZCIsInRvQ2Vsc2l1cyIsImtlbHZpblVuaXQiLCJzZXRUZW1wZXJhdHVyZVVuaXQiLCJpc1RvZ2dsZWQiLCJ3ZWF0aGVyIiwidGVtcGVyYXR1cmVMYWJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInRlbXAiLCJhcHBlbmQiLCJzcGVjaWFsIiwiY2hlY2tFcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJkaXNwbGF5T25FcnJvciIsImVyciIsImlzTG9hZGluZyIsInNhZEZhY2UiLCJzYWRGYWNlU3BhbiIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJkYXNoT25lIiwiZGVncmVlQ2hhcmFjdGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGFzaFR3byIsImZpeE9uZSIsImZpeFR3byIsImZpeFN1Z2dlc3Rpb24iLCJlcnJvcldyYXBwZXIiLCJvbkVycm9yRGl2IiwibWFpbiIsImdldERhdGEiLCJ3ZWF0aGVyRGF0YSIsIm9uUGFnZUxvYWQiLCJzdG9yZSIsImdldExvY2F0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwiaW5wdXQiLCJ2YWx1ZSIsImRlZmF1bHRMb2NhdGlvbiIsImVsZW1lbnRzIiwic2V0TG9jYXRpb24iLCJjYW5jZWxEZWZhdWx0TG9jYXRpb24iLCJ0YXJnZXQiLCJjb250YWlucyIsInJlbW92ZSIsIm1haW5FbGVtZW50IiwiY2hlY2tlZCIsInRvZ2dsZXJTd2l0Y2giLCJ0b2dnbGVPbiIsInRvZ2dsZU9mZiIsImZvY3VzSW5wdXQiLCJjYWxsVG9BY3Rpb25CdG4iLCJmb2N1cyIsImJhY2tUb0hvbWUiLCJhcHBMb2dvIiwiZXZlbnRzIiwidHJhbmZvcm1EYXRhIiwibG9hZGluZyIsImNpdHkiLCJBUElfS0VZIiwidXJsIiwiZmV0Y2giLCJqc29uIiwiZm9vdGVyU2VjdGlvbiIsImdpdGh1YiIsInR3aXR0ZXIiLCJsaW5rZWRpbiIsImdpdGh1YkxpbmsiLCJocmVmIiwidHdpdHRlckxpbmsiLCJsaW5rZWRpbkxpbmsiLCJpY29uc1dyYXBwZXIiLCJjb3B5UmlnaHRTeW1ib2wiLCJjb3B5UmlnaHQiLCJmcmFnbWVudCIsIkRvY3VtZW50RnJhZ21lbnQiLCJmb290ZXIiLCJoZWFkZXJTZWN0aW9uIiwibG9nb0RlZyIsImxvZ28iLCJuYXZMZWZ0Iiwic2VhcmNoSW5wdXQiLCJzZWFyY2hJY29uIiwic2VhcmNoQnV0dG9uIiwibmF2UmlnaHQiLCJuYXYiLCJoZWFkZXIiLCJhZGRDbGFzcyIsImVsZSIsImNsYXNzZXMiLCJmb3JFYWNoIiwidGFnIiwibm9kZSIsImF0dHJpYnV0ZSIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwiT2JqZWN0Iiwia2V5cyIsInNldEF0dHJpYnV0ZSIsImNoYXIiLCJkZWdyZWVDaGFyIiwiY2hhcmFjdGVyIiwicmVjaGFyIiwidGV4dENvbnRlbnQiLCJhZGRJY29uIiwia2V5d29yZCIsInNwYW4iLCJzZXRUaW1lT3V0IiwiY29udGVudERpdiIsInNlY3Rpb24iLCJsb2FkaW5nRGl2IiwibG9jYXRpb25LZXkiLCJnZXRMb2NhdGlvbkZyb21TdG9yYWdlIiwicmV0cmlldmVkTG9jYXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0TG9jYXRpb25Ub1N0b3JhZ2UiLCJzZXRJdGVtIiwibWFpblNlY3Rpb24iLCJkYXlzT2ZXZWVrIiwiZGF5IiwiZGF5T2ZXZWVrIiwiZGF0ZSIsInVzZXJUaW1lIiwidGltZVpvbmVPZmZzZXQiLCJEYXRlIiwibG9jYWxUaW1lIiwiZ2V0VGltZSIsImxvY2FsVGltZU9mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwidXRjVGltZSIsImxvY2F0aW9uT2Zmc2V0IiwibG9jYXRpb25UaW1lIiwicmVuZGVyVXNlclRpbWUiLCJnZXREYXkiLCJob3VyQW5kTWludXRlcyIsInRvTG9jYWxlU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsImRpc2xheVRpbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJ3ZWF0aGVyQ2FyZCIsIndlYXRoZXJkZXNjIiwiZGVzY3JpcHRpb24iLCJtYXhUZW1wIiwidGVtcF9tYXgiLCJtaW5UZW1wIiwidGVtcF9taW4iLCJmZWVsc0xpa2UiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJwcmVzc3VyZSIsIndpbmQiLCJzcGVlZCIsImNvdW50cnkiLCJzeXMiLCJuYW1lIiwidGltZVpvbmUiLCJ0aW1lem9uZSIsInRpbWUiLCJkdCIsImljb24iLCJ3ZWF0aGVyQ2FyZENvbnRlbnQiLCJ3ZWF0aGVyQ2FyZEhlYWRlciIsImFydGljbGUiLCJmZWVsc0xpa2VJY29uIiwiZmVlbHNMaWtlRGl2IiwiaHVtaWRpdHlJY29uIiwiaHVtaWRpdHlEaXYiLCJ3aW5kSWNvbiIsIndpbmREaXYiLCJwcmVzc3VyZUljb24iLCJwcmVzc3VyZURpdiIsIm90aGVyV2VhdGhlckRldGFpbHMiLCJsb2NhdGlvbkljb24iLCJoZWFkZXJUb3AiLCJhcnJvdyIsIndlYXRoZXJJY29uIiwic3JjIiwiYWx0Iiwid2VhdGhlcmRlc2NyaXB0aW9uIiwid2VhdGhlckxlZnQiLCJkZWciLCJjZWxzaXVzU3BhbiIsInRlbXBlcmF0dXJlIiwiaGlnaCIsImxvdyIsIm1pZCIsIm1pbk1heCIsInRlbXBXcmFwcGVyIiwiY2hlY2tib3giLCJ0b2dnbGVPbkljb24iLCJ0b2dnbGVPZmZJY29uIiwibGFiZWwiLCJmb3IiLCJmYWhyZW5oZWl0U3ltYm9sIiwiY2Vsc2l1c1N5bWJvbCIsInRvZ2dsZXJzIiwidG9nZ2xlcnNXcmFwcGVyIiwid2VhdGhlclJpZ2h0IiwiZGl2TWlkIiwid2VhdGhlcldyYXBwZXIiLCJhcHAiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==