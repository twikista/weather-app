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
  const cancelBtn = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", ["close"], {
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

/***/ "./src/default-render.js":
/*!*******************************!*\
  !*** ./src/default-render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-data */ "./src/fetch-data.js");
/* harmony import */ var _location_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-store */ "./src/location-store.js");
/* harmony import */ var _weatherCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherCard */ "./src/weatherCard.js");
/* harmony import */ var _location_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location-data-store */ "./src/location-data-store.js");





const defaulPageRender = () => {
  const defaultLocationData = _location_data_store__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLocationData();
  const fragment = new DocumentFragment();
  fragment.append((0,_weatherCard__WEBPACK_IMPORTED_MODULE_2__["default"])(defaultLocationData));
  return fragment;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaulPageRender);

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isDefault": () => (/* binding */ isDefault)
/* harmony export */ });
/* harmony import */ var _convert_weather_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert-weather-unit */ "./src/convert-weather-unit.js");
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data */ "./src/fetch-data.js");
/* harmony import */ var _transorm_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transorm-data */ "./src/transorm-data.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _location_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location-store */ "./src/location-store.js");





let isDefault = false; //get location from user input on form

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
      isDefault = true;
      console.log(isDefault);
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
      } // store.setLocation("canceled");

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
/* harmony import */ var _initial_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-render */ "./src/initial-render.js");
/* harmony import */ var _default_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-render */ "./src/default-render.js");
/* harmony import */ var _location_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-store */ "./src/location-store.js");




function onPageLoad() {
  return _location_store__WEBPACK_IMPORTED_MODULE_2__["default"].location() === null ? (0,_initial_render__WEBPACK_IMPORTED_MODULE_0__["default"])() : (0,_default_render__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onPageLoad);

/***/ }),

/***/ "./src/initial-render.js":
/*!*******************************!*\
  !*** ./src/initial-render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _choose_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-location */ "./src/choose-location.js");
/* harmony import */ var _location_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-store */ "./src/location-store.js");
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeout */ "./src/timeout.js");





function initialPageRender() {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageRender);

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

/***/ "./src/location-data-store.js":
/*!************************************!*\
  !*** ./src/location-data-store.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const defaultDataStore = (() => {
  const locationKey = "defaultLocationWeatherData";
  let defaultLocationWeatherData = getDataFromStorage();

  function getDataFromStorage() {
    const retrievedWeatherData = JSON.parse(localStorage.getItem(locationKey)) || null;
    return retrievedWeatherData;
  }

  function setDataToStorage() {
    localStorage.setItem(locationKey, JSON.stringify(defaultLocationWeatherData));
  }

  const setData = data => {
    defaultLocationWeatherData = data;
    setDataToStorage();
    console.log(defaultLocationWeatherData);
  };

  const defaultLocationData = () => {
    return defaultLocationWeatherData;
  };

  return {
    setData,
    defaultLocationData
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultDataStore);

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
/* harmony import */ var _location_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-data-store */ "./src/location-data-store.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.js");


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
  console.log(_events__WEBPACK_IMPORTED_MODULE_2__.isDefault);

  if (_events__WEBPACK_IMPORTED_MODULE_2__.isDefault) {
    _location_data_store__WEBPACK_IMPORTED_MODULE_1__["default"].setData(weatherData);
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLHNCQUFWLEVBQWtDO0VBQ2pELElBQUlDLElBQUksR0FBRyxFQUFYLENBRGlELENBQ2xDOztFQUVmQSxJQUFJLENBQUNDLFFBQUwsR0FBZ0IsU0FBU0EsUUFBVCxHQUFvQjtJQUNsQyxPQUFPLEtBQUtDLEdBQUwsQ0FBUyxVQUFVQyxJQUFWLEVBQWdCO01BQzlCLElBQUlDLE9BQU8sR0FBRyxFQUFkO01BQ0EsSUFBSUMsU0FBUyxHQUFHLE9BQU9GLElBQUksQ0FBQyxDQUFELENBQVgsS0FBbUIsV0FBbkM7O01BRUEsSUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBUixFQUFhO1FBQ1hDLE9BQU8sSUFBSSxjQUFjRSxNQUFkLENBQXFCSCxJQUFJLENBQUMsQ0FBRCxDQUF6QixFQUE4QixLQUE5QixDQUFYO01BQ0Q7O01BRUQsSUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBUixFQUFhO1FBQ1hDLE9BQU8sSUFBSSxVQUFVRSxNQUFWLENBQWlCSCxJQUFJLENBQUMsQ0FBRCxDQUFyQixFQUEwQixJQUExQixDQUFYO01BQ0Q7O01BRUQsSUFBSUUsU0FBSixFQUFlO1FBQ2JELE9BQU8sSUFBSSxTQUFTRSxNQUFULENBQWdCSCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFJLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUIsSUFBSUQsTUFBSixDQUFXSCxJQUFJLENBQUMsQ0FBRCxDQUFmLENBQXJCLEdBQTJDLEVBQTNELEVBQStELElBQS9ELENBQVg7TUFDRDs7TUFFREMsT0FBTyxJQUFJTCxzQkFBc0IsQ0FBQ0ksSUFBRCxDQUFqQzs7TUFFQSxJQUFJRSxTQUFKLEVBQWU7UUFDYkQsT0FBTyxJQUFJLEdBQVg7TUFDRDs7TUFFRCxJQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFSLEVBQWE7UUFDWEMsT0FBTyxJQUFJLEdBQVg7TUFDRDs7TUFFRCxJQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFSLEVBQWE7UUFDWEMsT0FBTyxJQUFJLEdBQVg7TUFDRDs7TUFFRCxPQUFPQSxPQUFQO0lBQ0QsQ0EvQk0sRUErQkpJLElBL0JJLENBK0JDLEVBL0JELENBQVA7RUFnQ0QsQ0FqQ0QsQ0FIaUQsQ0FvQzlDOzs7RUFHSFIsSUFBSSxDQUFDUyxDQUFMLEdBQVMsU0FBU0EsQ0FBVCxDQUFXQyxPQUFYLEVBQW9CQyxLQUFwQixFQUEyQkMsTUFBM0IsRUFBbUNDLFFBQW5DLEVBQTZDQyxLQUE3QyxFQUFvRDtJQUMzRCxJQUFJLE9BQU9KLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7TUFDL0JBLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBRCxFQUFPQSxPQUFQLEVBQWdCSyxTQUFoQixDQUFELENBQVY7SUFDRDs7SUFFRCxJQUFJQyxzQkFBc0IsR0FBRyxFQUE3Qjs7SUFFQSxJQUFJSixNQUFKLEVBQVk7TUFDVixLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1YsTUFBekIsRUFBaUNVLENBQUMsRUFBbEMsRUFBc0M7UUFDcEMsSUFBSUMsRUFBRSxHQUFHLEtBQUtELENBQUwsRUFBUSxDQUFSLENBQVQ7O1FBRUEsSUFBSUMsRUFBRSxJQUFJLElBQVYsRUFBZ0I7VUFDZEYsc0JBQXNCLENBQUNFLEVBQUQsQ0FBdEIsR0FBNkIsSUFBN0I7UUFDRDtNQUNGO0lBQ0Y7O0lBRUQsS0FBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHVCxPQUFPLENBQUNILE1BQTlCLEVBQXNDWSxFQUFFLEVBQXhDLEVBQTRDO01BQzFDLElBQUloQixJQUFJLEdBQUcsR0FBR0csTUFBSCxDQUFVSSxPQUFPLENBQUNTLEVBQUQsQ0FBakIsQ0FBWDs7TUFFQSxJQUFJUCxNQUFNLElBQUlJLHNCQUFzQixDQUFDYixJQUFJLENBQUMsQ0FBRCxDQUFMLENBQXBDLEVBQStDO1FBQzdDO01BQ0Q7O01BRUQsSUFBSSxPQUFPVyxLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO1FBQ2hDLElBQUksT0FBT1gsSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixXQUF2QixFQUFvQztVQUNsQ0EsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVVyxLQUFWO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xYLElBQUksQ0FBQyxDQUFELENBQUosR0FBVSxTQUFTRyxNQUFULENBQWdCSCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFJLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUIsSUFBSUQsTUFBSixDQUFXSCxJQUFJLENBQUMsQ0FBRCxDQUFmLENBQXJCLEdBQTJDLEVBQTNELEVBQStELElBQS9ELEVBQXFFRyxNQUFyRSxDQUE0RUgsSUFBSSxDQUFDLENBQUQsQ0FBaEYsRUFBcUYsR0FBckYsQ0FBVjtVQUNBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVXLEtBQVY7UUFDRDtNQUNGOztNQUVELElBQUlILEtBQUosRUFBVztRQUNULElBQUksQ0FBQ1IsSUFBSSxDQUFDLENBQUQsQ0FBVCxFQUFjO1VBQ1pBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVVEsS0FBVjtRQUNELENBRkQsTUFFTztVQUNMUixJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsVUFBVUcsTUFBVixDQUFpQkgsSUFBSSxDQUFDLENBQUQsQ0FBckIsRUFBMEIsSUFBMUIsRUFBZ0NHLE1BQWhDLENBQXVDSCxJQUFJLENBQUMsQ0FBRCxDQUEzQyxFQUFnRCxHQUFoRCxDQUFWO1VBQ0FBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVVEsS0FBVjtRQUNEO01BQ0Y7O01BRUQsSUFBSUUsUUFBSixFQUFjO1FBQ1osSUFBSSxDQUFDVixJQUFJLENBQUMsQ0FBRCxDQUFULEVBQWM7VUFDWkEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLEdBQUdHLE1BQUgsQ0FBVU8sUUFBVixDQUFWO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xWLElBQUksQ0FBQyxDQUFELENBQUosR0FBVSxjQUFjRyxNQUFkLENBQXFCSCxJQUFJLENBQUMsQ0FBRCxDQUF6QixFQUE4QixLQUE5QixFQUFxQ0csTUFBckMsQ0FBNENILElBQUksQ0FBQyxDQUFELENBQWhELEVBQXFELEdBQXJELENBQVY7VUFDQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVVSxRQUFWO1FBQ0Q7TUFDRjs7TUFFRGIsSUFBSSxDQUFDb0IsSUFBTCxDQUFVakIsSUFBVjtJQUNEO0VBQ0YsQ0FyREQ7O0VBdURBLE9BQU9ILElBQVA7QUFDRCxDQS9GRDs7Ozs7Ozs7OztBQ05hOztBQUViSCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUssSUFBVixFQUFnQjtFQUMvQixJQUFJQyxPQUFPLEdBQUdELElBQUksQ0FBQyxDQUFELENBQWxCO0VBQ0EsSUFBSWtCLFVBQVUsR0FBR2xCLElBQUksQ0FBQyxDQUFELENBQXJCOztFQUVBLElBQUksQ0FBQ2tCLFVBQUwsRUFBaUI7SUFDZixPQUFPakIsT0FBUDtFQUNEOztFQUVELElBQUksT0FBT2tCLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7SUFDOUIsSUFBSUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLFFBQVEsQ0FBQ0Msa0JBQWtCLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixVQUFmLENBQUQsQ0FBbkIsQ0FBVCxDQUFqQjtJQUNBLElBQUlPLElBQUksR0FBRywrREFBK0R0QixNQUEvRCxDQUFzRWlCLE1BQXRFLENBQVg7SUFDQSxJQUFJTSxhQUFhLEdBQUcsT0FBT3ZCLE1BQVAsQ0FBY3NCLElBQWQsRUFBb0IsS0FBcEIsQ0FBcEI7SUFDQSxJQUFJRSxVQUFVLEdBQUdULFVBQVUsQ0FBQ1UsT0FBWCxDQUFtQjdCLEdBQW5CLENBQXVCLFVBQVU4QixNQUFWLEVBQWtCO01BQ3hELE9BQU8saUJBQWlCMUIsTUFBakIsQ0FBd0JlLFVBQVUsQ0FBQ1ksVUFBWCxJQUF5QixFQUFqRCxFQUFxRDNCLE1BQXJELENBQTREMEIsTUFBNUQsRUFBb0UsS0FBcEUsQ0FBUDtJQUNELENBRmdCLENBQWpCO0lBR0EsT0FBTyxDQUFDNUIsT0FBRCxFQUFVRSxNQUFWLENBQWlCd0IsVUFBakIsRUFBNkJ4QixNQUE3QixDQUFvQyxDQUFDdUIsYUFBRCxDQUFwQyxFQUFxRHJCLElBQXJELENBQTBELElBQTFELENBQVA7RUFDRDs7RUFFRCxPQUFPLENBQUNKLE9BQUQsRUFBVUksSUFBVixDQUFlLElBQWYsQ0FBUDtBQUNELENBbkJEOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQSxTQUFTMkIsbUJBQVQsR0FBK0I7RUFDN0IsTUFBTUMsU0FBUyxHQUFHRixrREFBQSxDQUNoQixJQURnQixFQUVoQixDQUFDLDhCQUFELENBRmdCLEVBR2hCO0lBQ0VJLEtBQUssRUFDSDtFQUZKLENBSGdCLENBQWxCO0VBU0EsTUFBTUMsVUFBVSxHQUFHTCxrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDRSxTQUFELENBQTVCLEVBQXlDO0lBQzFERSxLQUFLLEVBQUU7RUFEbUQsQ0FBekMsQ0FBbkI7RUFJQSxNQUFNRSxhQUFhLEdBQUdOLGtEQUFBLENBQXFCLE9BQXJCLEVBQThCLEVBQTlCLEVBQWtDO0lBQ3RETyxJQUFJLEVBQUUsTUFEZ0Q7SUFFdER2QixFQUFFLEVBQUUsd0JBRmtEO0lBR3REd0IsV0FBVyxFQUFFLGlDQUh5QztJQUl0REMsWUFBWSxFQUFFLEtBSndDO0lBS3RETCxLQUFLLEVBQ0g7RUFOb0QsQ0FBbEMsQ0FBdEI7RUFTQSxNQUFNTSxPQUFPLEdBQUdWLGtEQUFBLENBQXFCLFFBQXJCLEVBQStCLENBQUMsTUFBRCxDQUEvQixFQUF5QztJQUN2RE8sSUFBSSxFQUFFLFFBRGlEO0lBRXZESCxLQUFLLEVBQ0g7RUFIcUQsQ0FBekMsQ0FBaEI7RUFNQSxNQUFNTyxTQUFTLEdBQUdYLGtEQUFBLENBQXFCLFFBQXJCLEVBQStCLENBQUMsT0FBRCxDQUEvQixFQUEwQztJQUMxRGhCLEVBQUUsRUFBRSxZQURzRDtJQUUxRG9CLEtBQUssRUFDSDtFQUh3RCxDQUExQyxDQUFsQjtFQU1BLE1BQU1RLFFBQVEsR0FBR1osa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQ1UsT0FBRCxFQUFVQyxTQUFWLENBQTVCLEVBQWtEO0lBQ2pFUCxLQUFLLEVBQUU7RUFEMEQsQ0FBbEQsQ0FBakI7RUFJQSxNQUFNUyxRQUFRLEdBQUdiLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUNNLGFBQUQsRUFBZ0JNLFFBQWhCLENBQTVCLEVBQXVEO0lBQ3RFUixLQUFLLEVBQUU7RUFEK0QsQ0FBdkQsQ0FBakI7RUFJQSxNQUFNVSxRQUFRLEdBQUdkLGtEQUFBLENBQXFCLEdBQXJCLEVBQTBCLEVBQTFCLEVBQThCO0lBQzdDSSxLQUFLLEVBQUU7RUFEc0MsQ0FBOUIsQ0FBakI7RUFHQSxNQUFNVyxRQUFRLEdBQUdmLGtEQUFBLENBQ2YsR0FEZSxFQUVmLENBQ0VjLFFBREYsRUFFRSw0RUFGRixDQUZlLEVBTWY7SUFDRVYsS0FBSyxFQUFFO0VBRFQsQ0FOZSxDQUFqQjtFQVdBLE1BQU1ZLFVBQVUsR0FBR2hCLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUNlLFFBQUQsQ0FBNUIsRUFBd0M7SUFDekRYLEtBQUssRUFBRTtFQURrRCxDQUF4QyxDQUFuQjtFQUlBLE1BQU1hLE9BQU8sR0FBR2pCLGtEQUFBLENBQ2QsS0FEYyxFQUVkLENBQUNLLFVBQUQsRUFBYVEsUUFBYixFQUF1QkcsVUFBdkIsQ0FGYyxFQUdkO0lBQ0VaLEtBQUssRUFBRTtFQURULENBSGMsQ0FBaEI7RUFPQSxNQUFNYyxJQUFJLEdBQUdsQixrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDaUIsT0FBRCxDQUE3QixFQUF3QztJQUNuRGIsS0FBSyxFQUNIO0VBRmlELENBQXhDLENBQWI7RUFLQSxNQUFNZSxPQUFPLEdBQUduQixrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDa0IsSUFBRCxDQUE1QixFQUFvQztJQUNsRGQsS0FBSyxFQUNIO0VBRmdELENBQXBDLENBQWhCO0VBSUEsT0FBT2UsT0FBUDtBQUNEOztBQUVELGlFQUFlbEIsbUJBQWY7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLE1BQU1tQixNQUFNLEdBQUc7RUFDYkMsVUFBVSxFQUNSLGdIQUZXO0VBR2JDLEtBQUssRUFBRSxNQUhNO0VBSWJDLFdBQVcsRUFDVCxxRkFMVztFQU1iQyxhQUFhLEVBQUUsMkNBTkY7RUFPYkMsYUFBYSxFQUFFO0FBUEYsQ0FBZjtBQVVBLGlFQUFlTCxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7Q0FHQTs7QUFDQSxTQUFTTyxZQUFULENBQXNCQyxPQUF0QixFQUErQjtFQUM3QixNQUFNQyxVQUFVLEdBQUdELE9BQU8sR0FBRyxHQUFWLEdBQWdCLEVBQW5DO0VBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFVLENBQUNHLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBWjtFQUNBLE9BQU9ILFVBQVUsQ0FBQ0csT0FBWCxDQUFtQixDQUFuQixDQUFQO0FBQ0QsRUFFRDs7O0FBQ0EsU0FBU0MsU0FBVCxDQUFtQkMsVUFBbkIsRUFBK0I7RUFDN0IsTUFBTU4sT0FBTyxHQUFHTSxVQUFVLEdBQUcsTUFBN0I7RUFDQSxPQUFPTixPQUFPLENBQUNJLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBUDtBQUNEOztBQUVELE1BQU1HLGtCQUFrQixHQUFHLENBQUNDLFNBQUQsRUFBWUMsT0FBWixLQUF3QjtFQUNqRCxNQUFNQyxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtFQUNBRixnQkFBZ0IsQ0FBQ0csU0FBakIsR0FBNkIsRUFBN0I7RUFDQSxNQUFNQyxJQUFJLEdBQUdOLFNBQVMsR0FDbEJULFlBQVksQ0FBQ1UsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxJQUFYLENBQWdCVixPQUFoQixDQUF3QixDQUF4QixDQUFELENBRE0sR0FFbEJLLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ssSUFBWCxDQUFnQlYsT0FBaEIsQ0FBd0IsQ0FBeEIsQ0FGSjtFQUlBTSxnQkFBZ0IsQ0FBQ0ssTUFBakIsQ0FDRUQsSUFERixFQUVFTixTQUFTLEdBQUdwQyw0Q0FBQSxDQUFlLFFBQWYsQ0FBSCxHQUE4QkEsNENBQUEsQ0FBZSxRQUFmLENBRnpDO0FBSUQsQ0FYRDs7QUFhQSxpRUFBZW1DLGtCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWMsZ0JBQWdCLEdBQUcsTUFBTTtFQUM3QixNQUFNQyxtQkFBbUIsR0FBR0YsZ0ZBQUEsRUFBNUI7RUFDQSxNQUFNRyxRQUFRLEdBQUcsSUFBSUMsZ0JBQUosRUFBakI7RUFDQUQsUUFBUSxDQUFDUixNQUFULENBQWdCSSx3REFBVyxDQUFDRyxtQkFBRCxDQUEzQjtFQUVBLE9BQU9DLFFBQVA7QUFDRCxDQU5EOztBQVFBLGlFQUFlRixnQkFBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBRU8sU0FBU0ksVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEI7RUFDbkMsSUFBSUEsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0lBQzNCLE1BQU0sSUFBSUMsS0FBSixDQUFVLDJCQUFWLENBQU47RUFDRDs7RUFDRCxPQUFPRixRQUFQO0FBQ0Q7QUFFTSxTQUFTRyxjQUFULENBQXdCQyxHQUF4QixFQUE2QkMsU0FBN0IsRUFBd0M7RUFDN0MsTUFBTUMsT0FBTyxHQUFHNUQsNENBQUEsQ0FBZSw4QkFBZixDQUFoQjtFQUNBLE1BQU02RCxXQUFXLEdBQUc3RCxrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDNEQsT0FBRCxDQUE3QixFQUF3QztJQUMxRHhELEtBQUssRUFDSDtFQUZ3RCxDQUF4QyxDQUFwQjtFQUlBLE1BQU0wRCxZQUFZLEdBQUc5RCxrREFBQSxDQUFxQixJQUFyQixFQUEyQixDQUFDMEQsR0FBRyxDQUFDSyxPQUFMLENBQTNCLEVBQTBDO0lBQzdEM0QsS0FBSyxFQUFFO0VBRHNELENBQTFDLENBQXJCO0VBSUEsTUFBTTRELE9BQU8sR0FBR2hFLG9EQUFBLENBQXVCLFVBQXZCLENBQWhCO0VBQ0FnRSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQXRCO0VBQ0EsTUFBTUMsT0FBTyxHQUFHcEUsb0RBQUEsQ0FBdUIsVUFBdkIsQ0FBaEI7RUFDQW9FLE9BQU8sQ0FBQ0YsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBdEI7RUFFQSxNQUFNRSxNQUFNLEdBQUdyRSxrREFBQSxDQUNiLEdBRGEsRUFFYixDQUFDZ0UsT0FBRCxFQUFVLGdDQUFWLENBRmEsRUFHYixJQUhhLENBQWY7RUFLQSxNQUFNTSxNQUFNLEdBQUd0RSxrREFBQSxDQUNiLEdBRGEsRUFFYixDQUFDb0UsT0FBRCxFQUFVLDRDQUFWLENBRmEsRUFHYixJQUhhLENBQWY7RUFNQSxNQUFNRyxhQUFhLEdBQUd2RSxrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDcUUsTUFBRCxFQUFTQyxNQUFULENBQTVCLEVBQThDO0lBQ2xFbEUsS0FBSyxFQUFFO0VBRDJELENBQTlDLENBQXRCO0VBSUEsTUFBTW9FLFlBQVksR0FBR3hFLGtEQUFBLENBQ25CLEtBRG1CLEVBRW5CLENBQUM2RCxXQUFELEVBQWNDLFlBQWQsRUFBNEJTLGFBQTVCLENBRm1CLEVBR25CO0lBQ0VuRSxLQUFLLEVBQ0g7RUFGSixDQUhtQixDQUFyQjtFQVNBLE1BQU1xRSxVQUFVLEdBQUd6RSxrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDd0UsWUFBRCxDQUE1QixFQUE0QztJQUM3RHBFLEtBQUssRUFDSDtFQUYyRCxDQUE1QyxDQUFuQixDQXZDNkMsQ0EyQzdDOztFQUVBLE1BQU1zRSxJQUFJLEdBQUduQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtFQUNBa0MsSUFBSSxDQUFDakMsU0FBTCxHQUFpQixFQUFqQjtFQUNBaUMsSUFBSSxDQUFDL0IsTUFBTCxDQUFZOEIsVUFBWjtFQUNBZCxTQUFTLEdBQUcsS0FBWjtFQUNBN0IsT0FBTyxDQUFDQyxHQUFSLENBQVk0QixTQUFaO0VBQ0EsT0FBT2UsSUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBSUksU0FBUyxHQUFHLEtBQWhCLEVBRVA7O0FBQ0EsU0FBU0MsV0FBVCxHQUF1QjtFQUNyQixNQUFNN0QsSUFBSSxHQUFHcUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWI7RUFDQXRCLElBQUksQ0FBQzhELGdCQUFMLENBQXNCLFFBQXRCLEVBQWlDQyxDQUFELElBQU87SUFDckNBLENBQUMsQ0FBQ0MsY0FBRjtJQUNBLE1BQU1DLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxLQUF2QjtJQUNBeEMsdURBQU8sQ0FBQ3NDLFFBQUQsQ0FBUDtJQUNBQyxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0VBQ0QsQ0FMRDtBQU1EOztBQUVELFNBQVNDLGVBQVQsR0FBMkI7RUFDekIsTUFBTXBFLElBQUksR0FBR3FCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBYjs7RUFDQSxJQUFJdEIsSUFBSixFQUFVO0lBQ1IsTUFBTWtFLEtBQUssR0FBR2xFLElBQUksQ0FBQ3FFLFFBQUwsQ0FBYyx3QkFBZCxDQUFkO0lBQ0FyRSxJQUFJLENBQUM4RCxnQkFBTCxDQUFzQixRQUF0QixFQUFpQ0MsQ0FBRCxJQUFPO01BQ3JDQSxDQUFDLENBQUNDLGNBQUY7TUFDQSxNQUFNQyxRQUFRLEdBQUdDLEtBQUssQ0FBQ0MsS0FBdkI7TUFDQXZDLG1FQUFBLENBQWtCcUMsUUFBbEI7TUFDQXJELE9BQU8sQ0FBQ0MsR0FBUixDQUFZb0QsUUFBWjtNQUNBdEMsdURBQU8sQ0FBQ3NDLFFBQUQsQ0FBUDtNQUNBTCxTQUFTLEdBQUcsSUFBWjtNQUNBaEQsT0FBTyxDQUFDQyxHQUFSLENBQVkrQyxTQUFaO01BQ0FNLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7SUFDRCxDQVREO0VBVUQ7QUFDRjs7QUFFRCxTQUFTSSxxQkFBVCxHQUFpQztFQUMvQjtFQUNBLE1BQU10RSxPQUFPLEdBQUdvQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7O0VBQ0EsSUFBSXJCLE9BQUosRUFBYTtJQUNYQSxPQUFPLENBQUM2RCxnQkFBUixDQUF5QixPQUF6QixFQUFtQ0MsQ0FBRCxJQUFPO01BQ3ZDLE1BQU1TLE1BQU0sR0FBR1QsQ0FBQyxDQUFDUyxNQUFqQjs7TUFDQSxJQUFJQSxNQUFNLENBQUN4QixTQUFQLENBQWlCeUIsUUFBakIsQ0FBMEIsYUFBMUIsQ0FBSixFQUE4QztRQUM1Q3hFLE9BQU8sQ0FBQ3lFLE1BQVI7TUFDRCxDQUpzQyxDQUt2Qzs7SUFDRCxDQU5EO0VBT0Q7QUFDRixFQUVEOzs7QUFDQSxNQUFNbEUsT0FBTyxHQUFHLE1BQU07RUFDcEIsTUFBTW1FLFdBQVcsR0FBR3RELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFwQjtFQUNBcUQsV0FBVyxDQUFDYixnQkFBWixDQUE2QixRQUE3QixFQUF3Q0MsQ0FBRCxJQUFPO0lBQzVDLE1BQU1TLE1BQU0sR0FBR1QsQ0FBQyxDQUFDUyxNQUFqQjtJQUNBLE1BQU10RCxTQUFTLEdBQUdzRCxNQUFNLENBQUNJLE9BQXpCO0lBQ0EzRCxpRUFBa0IsQ0FBQ0MsU0FBRCxFQUFZd0MsdURBQVosQ0FBbEI7SUFDQW1CLGFBQWEsQ0FBQzNELFNBQUQsQ0FBYjtFQUNELENBTEQ7QUFNRCxDQVJEOztBQVVBLFNBQVMyRCxhQUFULENBQXVCM0QsU0FBdkIsRUFBa0M7RUFDaEMsTUFBTTRELFFBQVEsR0FBR3pELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtFQUNBLE1BQU15RCxTQUFTLEdBQUcxRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7RUFDQSxNQUFNWixPQUFPLEdBQUdXLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtFQUNBLE1BQU1YLFVBQVUsR0FBR1UsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQW5COztFQUNBLElBQUlKLFNBQUosRUFBZTtJQUNiO0lBQ0E0RCxRQUFRLENBQUM5QixTQUFULENBQW1CMEIsTUFBbkIsQ0FBMEIsUUFBMUI7SUFDQUssU0FBUyxDQUFDL0IsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsUUFBeEIsRUFIYSxDQUliOztJQUNBdkMsT0FBTyxDQUFDc0MsU0FBUixDQUFrQjBCLE1BQWxCLENBQXlCLGlCQUF6QjtJQUNBaEUsT0FBTyxDQUFDc0MsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsZUFBdEI7SUFDQXRDLFVBQVUsQ0FBQ3FDLFNBQVgsQ0FBcUIwQixNQUFyQixDQUE0QixlQUE1QjtJQUNBL0QsVUFBVSxDQUFDcUMsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsaUJBQXpCO0VBQ0Q7O0VBRUQsSUFBSSxDQUFDL0IsU0FBTCxFQUFnQjtJQUNkNEQsUUFBUSxDQUFDOUIsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsUUFBdkI7SUFDQThCLFNBQVMsQ0FBQy9CLFNBQVYsQ0FBb0IwQixNQUFwQixDQUEyQixRQUEzQjtJQUVBaEUsT0FBTyxDQUFDc0MsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsaUJBQXRCO0lBQ0F2QyxPQUFPLENBQUNzQyxTQUFSLENBQWtCMEIsTUFBbEIsQ0FBeUIsZUFBekI7SUFDQS9ELFVBQVUsQ0FBQ3FDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLGVBQXpCO0lBQ0F0QyxVQUFVLENBQUNxQyxTQUFYLENBQXFCMEIsTUFBckIsQ0FBNEIsaUJBQTVCO0VBQ0Q7QUFDRjs7QUFFRCxNQUFNTSxVQUFVLEdBQUcsTUFBTTtFQUN2QixNQUFNaEYsSUFBSSxHQUFHcUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWI7RUFDQSxNQUFNMkQsZUFBZSxHQUFHNUQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUF4QjtFQUNBMkQsZUFBZSxDQUFDbkIsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTJDQyxDQUFELElBQU87SUFDL0MvRCxJQUFJLENBQUNrRixLQUFMO0VBQ0QsQ0FGRDtBQUdELENBTkQsRUFRQTs7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLE1BQU07RUFDdkIsTUFBTUMsT0FBTyxHQUFHL0QsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0VBQ0EsTUFBTXFELFdBQVcsR0FBR3RELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFwQjtFQUNBOEQsT0FBTyxDQUFDdEIsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBbUNDLENBQUQsSUFBTztJQUN2Q1ksV0FBVyxDQUFDcEQsU0FBWixHQUF3QixFQUF4QjtJQUNBb0QsV0FBVyxDQUFDbEQsTUFBWixDQUFtQmtDLGlEQUFVLEVBQTdCO0lBQ0FxQixVQUFVO0VBQ1gsQ0FKRDtBQUtELENBUkQsRUFVQTs7O0FBQ0EsTUFBTUssTUFBTSxHQUFHLE1BQU07RUFDbkJ4QixXQUFXO0VBQ1hVLHFCQUFxQjtFQUNyQkgsZUFBZTtFQUNmNUQsT0FBTztFQUNQd0UsVUFBVTtFQUNWRyxVQUFVO0FBQ1gsQ0FQRDs7QUFTQSxpRUFBZUUsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBO0FBRUEsSUFBSTVDLFNBQVMsR0FBRyxJQUFoQjs7QUFDQSxNQUFNZCxPQUFPLEdBQUcsTUFBTzRELElBQVAsSUFBZ0I7RUFDOUIsSUFBSTtJQUNGLE1BQU1DLE9BQU8sR0FBRyxrQ0FBaEI7SUFDQUYsb0RBQU8sQ0FBQzdDLFNBQUQsQ0FBUDtJQUNBLE1BQU1nRCxHQUFHLEdBQUkscURBQW9ERixJQUFLLFVBQVNDLE9BQVEsZUFBdkY7SUFDQSxNQUFNcEQsUUFBUSxHQUFHLE1BQU1zRCxLQUFLLENBQUNELEdBQUQsQ0FBNUI7SUFDQXRELGtEQUFVLENBQUNDLFFBQUQsQ0FBVjtJQUNBSyxTQUFTLEdBQUcsS0FBWjtJQUNBLE1BQU1qRSxJQUFJLEdBQUcsTUFBTTRELFFBQVEsQ0FBQ3VELElBQVQsRUFBbkI7SUFDQWxDLDBEQUFZLENBQUNqRixJQUFELENBQVo7SUFDQW9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZckMsSUFBWjtJQUNBLE9BQU9BLElBQVA7RUFDRCxDQVhELENBV0UsT0FBT2dFLEdBQVAsRUFBWTtJQUNaRCxzREFBYyxDQUFDQyxHQUFELEVBQU1DLFNBQU4sQ0FBZDtFQUNEO0FBQ0YsQ0FmRDs7QUFpQkEsaUVBQWVkLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTs7QUFFQSxNQUFNaUUsYUFBYSxHQUFHLE1BQU07RUFDMUI7RUFDQSxNQUFNQyxNQUFNLEdBQUcvRyxrREFBQSxDQUFxQixHQUFyQixFQUEwQixJQUExQixFQUFnQztJQUFFSSxLQUFLLEVBQUU7RUFBVCxDQUFoQyxDQUFmO0VBQ0EsTUFBTTRHLE9BQU8sR0FBR2hILGtEQUFBLENBQXFCLEdBQXJCLEVBQTBCLElBQTFCLEVBQWdDO0lBQUVJLEtBQUssRUFBRTtFQUFULENBQWhDLENBQWhCO0VBQ0EsTUFBTTZHLFFBQVEsR0FBR2pILGtEQUFBLENBQXFCLEdBQXJCLEVBQTBCLElBQTFCLEVBQWdDO0lBQy9DSSxLQUFLLEVBQUU7RUFEd0MsQ0FBaEMsQ0FBakIsQ0FKMEIsQ0FPMUI7O0VBQ0EsTUFBTThHLFVBQVUsR0FBR2xILGtEQUFBLENBQXFCLEdBQXJCLEVBQTBCLENBQUMrRyxNQUFELENBQTFCLEVBQW9DO0lBQ3JESSxJQUFJLEVBQUUsNkJBRCtDO0lBRXJEL0csS0FBSyxFQUFHLEdBQUVnQiw0REFBbUIsRUFGd0I7SUFHckRzRSxNQUFNLEVBQUU7RUFINkMsQ0FBcEMsQ0FBbkI7RUFLQSxNQUFNMEIsV0FBVyxHQUFHcEgsa0RBQUEsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBQ2dILE9BQUQsQ0FBMUIsRUFBcUM7SUFDdkRHLElBQUksRUFBRSxnQ0FEaUQ7SUFFdkQvRyxLQUFLLEVBQUcsR0FBRWdCLDREQUFtQixFQUYwQjtJQUd2RHNFLE1BQU0sRUFBRTtFQUgrQyxDQUFyQyxDQUFwQjtFQUtBLE1BQU0yQixZQUFZLEdBQUdySCxrREFBQSxDQUFxQixHQUFyQixFQUEwQixDQUFDaUgsUUFBRCxDQUExQixFQUFzQztJQUN6REUsSUFBSSxFQUFFLHdDQURtRDtJQUV6RC9HLEtBQUssRUFBRyxHQUFFZ0IsNERBQW1CLEdBRjRCO0lBR3pEc0UsTUFBTSxFQUFFO0VBSGlELENBQXRDLENBQXJCLENBbEIwQixDQXdCMUI7O0VBQ0EsTUFBTTRCLFlBQVksR0FBR3RILGtEQUFBLENBQ25CLEtBRG1CLEVBRW5CLENBQUNrSCxVQUFELEVBQWFFLFdBQWIsRUFBMEJDLFlBQTFCLENBRm1CLEVBR25CO0lBQUVqSCxLQUFLLEVBQUU7RUFBVCxDQUhtQixDQUFyQixDQXpCMEIsQ0ErQjFCOztFQUNBLE1BQU1tSCxlQUFlLEdBQUd2SCw0Q0FBQSxDQUFlLFlBQWYsQ0FBeEI7RUFDQSxNQUFNd0gsU0FBUyxHQUFHeEgsa0RBQUEsQ0FDaEIsR0FEZ0IsRUFFaEIsQ0FBQ3VILGVBQUQsRUFBa0IsYUFBbEIsQ0FGZ0IsRUFHaEI7SUFDRW5ILEtBQUssRUFBRTtFQURULENBSGdCLENBQWxCLENBakMwQixDQXlDMUI7O0VBQ0EsTUFBTWEsT0FBTyxHQUFHakIsa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQ3NILFlBQUQsRUFBZUUsU0FBZixDQUE1QixFQUF1RDtJQUNyRXBILEtBQUssRUFBRyxHQUFFZ0IsOERBQXFCO0VBRHNDLENBQXZELENBQWhCLENBMUMwQixDQThDMUI7O0VBQ0EsTUFBTStCLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtFQUNBRCxRQUFRLENBQUNSLE1BQVQsQ0FBZ0IxQixPQUFoQixFQWhEMEIsQ0FpRDFCOztFQUNBLE1BQU13RyxNQUFNLEdBQUd6SCxrREFBQSxDQUFxQixRQUFyQixFQUErQixDQUFDbUQsUUFBRCxDQUEvQixFQUEyQztJQUN4RC9DLEtBQUssRUFBRyxHQUFFZ0IsOERBQXFCO0VBRHlCLENBQTNDLENBQWY7RUFJQSxPQUFPcUcsTUFBUDtBQUNELENBdkREOztBQXlEQSxpRUFBZVgsYUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDNURBOztBQUVBLE1BQU1ZLGFBQWEsR0FBRyxNQUFNO0VBQzFCLE1BQU12RSxRQUFRLEdBQUcsSUFBSUMsZ0JBQUosRUFBakI7RUFFQTs7RUFDQSxNQUFNdUUsT0FBTyxHQUFHM0gsb0RBQUEsQ0FBdUIsT0FBdkIsQ0FBaEI7RUFDQTJILE9BQU8sQ0FBQ3pELFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGVBQXRCLEVBQXVDLFNBQXZDO0VBQ0EsTUFBTXlELElBQUksR0FBRzVILGtEQUFBLENBQXFCLElBQXJCLEVBQTJCLENBQUMsTUFBRCxFQUFTMkgsT0FBVCxDQUEzQixFQUE4QztJQUN6RHZILEtBQUssRUFDSDtFQUZ1RCxDQUE5QyxDQUFiO0VBSUEsTUFBTXlILE9BQU8sR0FBRzdILGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUM0SCxJQUFELENBQTVCLEVBQW9DO0lBQ2xEeEgsS0FBSyxFQUFFO0VBRDJDLENBQXBDLENBQWhCO0VBSUE7RUFFQTs7RUFDQSxNQUFNMEgsV0FBVyxHQUFHOUgsa0RBQUEsQ0FBcUIsT0FBckIsRUFBOEIsRUFBOUIsRUFBa0M7SUFDcERPLElBQUksRUFBRSxRQUQ4QztJQUVwRHZCLEVBQUUsRUFBRSxjQUZnRDtJQUdwRHdCLFdBQVcsRUFBRSx5QkFIdUM7SUFJcERKLEtBQUssRUFDSCx3SkFMa0Q7SUFNcERLLFlBQVksRUFBRTtFQU5zQyxDQUFsQyxDQUFwQixDQWpCMEIsQ0EwQjFCOztFQUNBLE1BQU1zSCxVQUFVLEdBQUcvSCxrREFBQSxDQUFxQixHQUFyQixFQUEwQixFQUExQixFQUE4QjtJQUMvQ0ksS0FBSyxFQUFFO0VBRHdDLENBQTlCLENBQW5CLENBM0IwQixDQStCMUI7O0VBQ0EsTUFBTTRILFlBQVksR0FBR2hJLGtEQUFBLENBQXFCLFFBQXJCLEVBQStCLENBQUMrSCxVQUFELENBQS9CLEVBQTZDO0lBQ2hFeEgsSUFBSSxFQUFFLFFBRDBEO0lBRWhFdkIsRUFBRSxFQUFFLFlBRjREO0lBR2hFb0IsS0FBSyxFQUFFO0VBSHlELENBQTdDLENBQXJCLENBaEMwQixDQXNDMUI7O0VBQ0EsTUFBTWMsSUFBSSxHQUFHbEIsa0RBQUEsQ0FBcUIsTUFBckIsRUFBNkIsQ0FBQzhILFdBQUQsRUFBY0UsWUFBZCxDQUE3QixFQUEwRDtJQUNyRTVILEtBQUssRUFDSDtFQUZtRSxDQUExRCxDQUFiLENBdkMwQixDQTRDMUI7O0VBQ0EsTUFBTTZILFFBQVEsR0FBR2pJLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUNrQixJQUFELENBQTVCLEVBQW9DO0lBQ25EZCxLQUFLLEVBQ0g7RUFGaUQsQ0FBcEMsQ0FBakI7RUFLQTs7RUFDQSxNQUFNOEgsR0FBRyxHQUFHbEksa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQzZILE9BQUQsRUFBVUksUUFBVixDQUE1QixFQUFpRDtJQUMzRDdILEtBQUssRUFDSDtFQUZ5RCxDQUFqRCxDQUFaO0VBS0ErQyxRQUFRLENBQUNSLE1BQVQsQ0FBZ0J1RixHQUFoQjtFQUVBLE1BQU1DLE1BQU0sR0FBR25JLGtEQUFBLENBQXFCLFFBQXJCLEVBQStCLENBQUNtRCxRQUFELENBQS9CLEVBQTJDO0lBQ3hEL0MsS0FBSyxFQUNIO0VBRnNELENBQTNDLENBQWY7RUFJQSxPQUFPK0gsTUFBUDtBQUNELENBL0REOztBQWlFQSxpRUFBZVQsYUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLFNBQVNVLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCQyxPQUF2QixFQUFnQztFQUM5QkEsT0FBTyxDQUFDQyxPQUFSLENBQWlCaEssQ0FBRCxJQUFPOEosR0FBRyxDQUFDbkUsU0FBSixDQUFjQyxHQUFkLENBQWtCNUYsQ0FBbEIsQ0FBdkI7QUFDRDs7QUFFRCxNQUFNNEIsYUFBYSxHQUFHLENBQUNxSSxHQUFELEVBQU1DLElBQU4sRUFBWUMsU0FBWixLQUEwQjtFQUM5QyxNQUFNQyxPQUFPLEdBQUdwRyxRQUFRLENBQUNwQyxhQUFULENBQXVCcUksR0FBdkIsQ0FBaEI7O0VBQ0EsSUFBSUMsSUFBSixFQUFVO0lBQ1JBLElBQUksQ0FBQ0YsT0FBTCxDQUFjaEssQ0FBRCxJQUFPb0ssT0FBTyxDQUFDaEcsTUFBUixDQUFlcEUsQ0FBZixDQUFwQjtFQUNEOztFQUNELElBQUltSyxTQUFKLEVBQWU7SUFDYixNQUFNRSxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixTQUFaLENBQW5CO0lBQ0FFLFVBQVUsQ0FBQ0wsT0FBWCxDQUFvQmhLLENBQUQsSUFBT29LLE9BQU8sQ0FBQ0ksWUFBUixDQUFxQnhLLENBQXJCLEVBQXdCbUssU0FBUyxDQUFDbkssQ0FBRCxDQUFqQyxDQUExQjtFQUNEOztFQUVELE9BQU9vSyxPQUFQO0FBQ0QsQ0FYRCxFQWFBOzs7QUFDQSxNQUFNMUUsZUFBZSxHQUFJK0UsSUFBRCxJQUFVO0VBQ2hDLE1BQU1DLFVBQVUsR0FBRzFHLFFBQVEsQ0FBQ3BDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbkI7RUFDQThJLFVBQVUsQ0FBQ3hHLFNBQVgsR0FBdUJ1RyxJQUF2QjtFQUNBLE9BQU9DLFVBQVA7QUFDRCxDQUpELEVBTUE7OztBQUNBLE1BQU1yRyxPQUFPLEdBQUlvRyxJQUFELElBQVU7RUFDeEIsTUFBTUUsU0FBUyxHQUFHM0csUUFBUSxDQUFDcEMsYUFBVCxDQUF1QixNQUF2QixDQUFsQjtFQUNBK0ksU0FBUyxDQUFDekcsU0FBVixHQUFzQnVHLElBQXRCO0VBQ0EsTUFBTUcsTUFBTSxHQUFHRCxTQUFTLENBQUNFLFdBQXpCO0VBQ0EsT0FBT0QsTUFBUDtBQUNELENBTEQ7O0FBT0EsTUFBTUUsT0FBTyxHQUFHLENBQUNDLE9BQUQsRUFBVWxJLE1BQVYsS0FBcUI7RUFDbkMsTUFBTW1JLElBQUksR0FBR3BKLGFBQWEsQ0FBQyxNQUFELEVBQVMsQ0FBQ21KLE9BQUQsQ0FBVCxFQUFvQjtJQUM1Q2xKLEtBQUssRUFBRTtFQURxQyxDQUFwQixDQUExQjtFQUdBZ0ksUUFBUSxDQUFDbUIsSUFBRCxFQUFPbkksTUFBUCxDQUFSO0VBQ0EsT0FBT21JLElBQVA7QUFDRCxDQU5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTMUUsVUFBVCxHQUFzQjtFQUNwQixPQUFPL0IsZ0VBQUEsT0FBcUIsSUFBckIsR0FBNEIwRywyREFBaUIsRUFBN0MsR0FBa0R2RywyREFBZ0IsRUFBekU7QUFDRDs7QUFFRCxpRUFBZTRCLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMyRSxpQkFBVCxHQUE2QjtFQUMzQixNQUFNckIsTUFBTSxHQUFHbkksa0RBQUEsQ0FDYixJQURhLEVBRWIsQ0FBQyw0Q0FBRCxDQUZhLEVBR2I7SUFDRUksS0FBSyxFQUNIO0VBRkosQ0FIYSxDQUFmO0VBU0EsTUFBTStGLGVBQWUsR0FBR25HLGtEQUFBLENBQXFCLFFBQXJCLEVBQStCLENBQUMsYUFBRCxDQUEvQixFQUFnRDtJQUN0RUksS0FBSyxFQUNIO0VBRm9FLENBQWhELENBQXhCO0VBSUEsTUFBTXNKLFVBQVUsR0FBRzFKLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUNtSSxNQUFELEVBQVNoQyxlQUFULENBQTVCLEVBQXVEO0lBQ3hFL0YsS0FBSyxFQUNIO0VBRnNFLENBQXZELENBQW5CO0VBS0EsTUFBTXVKLE9BQU8sR0FBRzNKLGtEQUFBLENBQXFCLFNBQXJCLEVBQWdDLENBQUMwSixVQUFELENBQWhDLEVBQThDO0lBQzVEdEosS0FBSyxFQUNIO0VBRjBELENBQTlDLENBQWhCO0VBS0EwQixPQUFPLENBQUNDLEdBQVIsQ0FBWWUsZ0VBQUEsRUFBWjs7RUFFQSxJQUFJQSxnRUFBQSxPQUFxQixJQUF6QixFQUErQjtJQUM3QjZHLE9BQU8sQ0FBQ2hILE1BQVIsQ0FBZTFDLDREQUFtQixFQUFsQztFQUNEOztFQUVENkIsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBQ2UsZ0VBQUEsRUFBYjtFQUNBLE9BQU82RyxPQUFQO0FBQ0Q7O0FBRUQsaUVBQWVILGlCQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7O0FBRUEsU0FBU2hELE9BQVQsQ0FBaUI3QyxTQUFqQixFQUE0QjtFQUMxQixNQUFNaUcsVUFBVSxHQUFHNUosa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQyxZQUFELENBQTVCLEVBQTRDO0lBQzdESSxLQUFLLEVBQUU7RUFEc0QsQ0FBNUMsQ0FBbkI7RUFHQSxNQUFNc0UsSUFBSSxHQUFHbkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7O0VBQ0EsSUFBSW1CLFNBQUosRUFBZTtJQUNiZSxJQUFJLENBQUNqQyxTQUFMLEdBQWlCLEVBQWpCO0lBQ0FpQyxJQUFJLENBQUMvQixNQUFMLENBQVlpSCxVQUFaO0VBQ0Q7O0VBRUQsT0FBT2xGLElBQVA7QUFDRDs7QUFFRCxpRUFBZThCLE9BQWY7Ozs7Ozs7Ozs7Ozs7O0FDZkEsTUFBTXhELGdCQUFnQixHQUFHLENBQUMsTUFBTTtFQUM5QixNQUFNNkcsV0FBVyxHQUFHLDRCQUFwQjtFQUNBLElBQUlDLDBCQUEwQixHQUFHQyxrQkFBa0IsRUFBbkQ7O0VBRUEsU0FBU0Esa0JBQVQsR0FBOEI7SUFDNUIsTUFBTUMsb0JBQW9CLEdBQ3hCeEssSUFBSSxDQUFDeUssS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJOLFdBQXJCLENBQVgsS0FBaUQsSUFEbkQ7SUFFQSxPQUFPRyxvQkFBUDtFQUNEOztFQUVELFNBQVNJLGdCQUFULEdBQTRCO0lBQzFCRixZQUFZLENBQUNHLE9BQWIsQ0FDRVIsV0FERixFQUVFckssSUFBSSxDQUFDQyxTQUFMLENBQWVxSywwQkFBZixDQUZGO0VBSUQ7O0VBRUQsTUFBTVEsT0FBTyxHQUFJNUssSUFBRCxJQUFVO0lBQ3hCb0ssMEJBQTBCLEdBQUdwSyxJQUE3QjtJQUNBMEssZ0JBQWdCO0lBQ2hCdEksT0FBTyxDQUFDQyxHQUFSLENBQVkrSCwwQkFBWjtFQUNELENBSkQ7O0VBTUEsTUFBTTVHLG1CQUFtQixHQUFHLE1BQU07SUFDaEMsT0FBTzRHLDBCQUFQO0VBQ0QsQ0FGRDs7RUFJQSxPQUFPO0lBQUVRLE9BQUY7SUFBV3BIO0VBQVgsQ0FBUDtBQUNELENBNUJ3QixHQUF6Qjs7QUE4QkEsaUVBQWVGLGdCQUFmOzs7Ozs7Ozs7Ozs7OztBQzlCQSxNQUFNRixLQUFLLEdBQUcsQ0FBQyxNQUFNO0VBQ25CLE1BQU0rRyxXQUFXLEdBQUcsaUJBQXBCO0VBQ0EsSUFBSXZFLGVBQWUsR0FBR2lGLHNCQUFzQixFQUE1Qzs7RUFFQSxTQUFTQSxzQkFBVCxHQUFrQztJQUNoQyxNQUFNQyxpQkFBaUIsR0FBR04sWUFBWSxDQUFDQyxPQUFiLENBQXFCTixXQUFyQixLQUFxQyxJQUEvRDtJQUNBLE9BQU9XLGlCQUFQO0VBQ0Q7O0VBRUQsU0FBU0Msb0JBQVQsR0FBZ0M7SUFDOUJQLFlBQVksQ0FBQ0csT0FBYixDQUFxQlIsV0FBckIsRUFBa0N2RSxlQUFsQztFQUNEOztFQUVELE1BQU1FLFdBQVcsR0FBSUwsUUFBRCxJQUFjO0lBQ2hDRyxlQUFlLEdBQUdILFFBQWxCO0lBQ0FzRixvQkFBb0I7SUFDcEIzSSxPQUFPLENBQUNDLEdBQVIsQ0FBWXVELGVBQVo7RUFDRCxDQUpEOztFQU1BLE1BQU1ILFFBQVEsR0FBRyxNQUFNO0lBQ3JCLE9BQU9HLGVBQVA7RUFDRCxDQUZEOztFQUlBLE9BQU87SUFBRUUsV0FBRjtJQUFlTDtFQUFmLENBQVA7QUFDRCxDQXhCYSxHQUFkOztBQTBCQSxpRUFBZXJDLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTs7QUFFQSxNQUFNNEgsV0FBVyxHQUFHLE1BQU07RUFDeEI7RUFDQSxNQUFNdkgsUUFBUSxHQUFHLElBQUlDLGdCQUFKLEVBQWpCO0VBQ0FELFFBQVEsQ0FBQ1IsTUFBVCxDQUFnQmtDLGlEQUFVLEVBQTFCO0VBQ0EsTUFBTUgsSUFBSSxHQUFHMUUsa0RBQUEsQ0FBcUIsTUFBckIsRUFBNkIsQ0FBQ21ELFFBQUQsQ0FBN0IsRUFBeUM7SUFDcEQvQyxLQUFLLEVBQ0g7RUFGa0QsQ0FBekMsQ0FBYjtFQUlBLE9BQU9zRSxJQUFQO0FBQ0QsQ0FURDs7QUFXQSxpRUFBZWdHLFdBQWY7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQSxNQUFNQyxVQUFVLEdBQUcsQ0FDakI7RUFBRTNMLEVBQUUsRUFBRSxDQUFOO0VBQVM0TCxHQUFHLEVBQUU7QUFBZCxDQURpQixFQUVqQjtFQUFFNUwsRUFBRSxFQUFFLENBQU47RUFBUzRMLEdBQUcsRUFBRTtBQUFkLENBRmlCLEVBR2pCO0VBQUU1TCxFQUFFLEVBQUUsQ0FBTjtFQUFTNEwsR0FBRyxFQUFFO0FBQWQsQ0FIaUIsRUFJakI7RUFBRTVMLEVBQUUsRUFBRSxDQUFOO0VBQVM0TCxHQUFHLEVBQUU7QUFBZCxDQUppQixFQUtqQjtFQUFFNUwsRUFBRSxFQUFFLENBQU47RUFBUzRMLEdBQUcsRUFBRTtBQUFkLENBTGlCLEVBTWpCO0VBQUU1TCxFQUFFLEVBQUUsQ0FBTjtFQUFTNEwsR0FBRyxFQUFFO0FBQWQsQ0FOaUIsRUFPakI7RUFBRTVMLEVBQUUsRUFBRSxDQUFOO0VBQVM0TCxHQUFHLEVBQUU7QUFBZCxDQVBpQixDQUFuQixFQVVBOztBQUNBLFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0VBQ3ZCLElBQUlGLEdBQUcsR0FBRyxJQUFWO0VBQ0FELFVBQVUsQ0FBQ3BDLE9BQVgsQ0FBb0JoSyxDQUFELElBQU87SUFDeEIsSUFBSUEsQ0FBQyxDQUFDUyxFQUFGLEtBQVM4TCxJQUFiLEVBQW1CO01BQ2pCRixHQUFHLEdBQUdyTSxDQUFDLENBQUNxTSxHQUFSO0lBQ0Q7RUFDRixDQUpEO0VBS0EsT0FBT0EsR0FBUDtBQUNELEVBRUQ7OztBQUNBLFNBQVNHLFFBQVQsQ0FBa0JDLGNBQWxCLEVBQWtDO0VBQ2hDLE1BQU1GLElBQUksR0FBRyxJQUFJRyxJQUFKLEVBQWI7RUFDQSxNQUFNQyxTQUFTLEdBQUdKLElBQUksQ0FBQ0ssT0FBTCxFQUFsQjtFQUNBLE1BQU1DLGVBQWUsR0FBR04sSUFBSSxDQUFDTyxpQkFBTCxLQUEyQixLQUFuRDtFQUNBLE1BQU1DLE9BQU8sR0FBR0osU0FBUyxHQUFHRSxlQUE1QjtFQUNBLE1BQU1HLGNBQWMsR0FBR0QsT0FBTyxHQUFHLE9BQU9OLGNBQXhDO0VBQ0EsTUFBTVEsWUFBWSxHQUFHLElBQUlQLElBQUosQ0FBU00sY0FBVCxDQUFyQjtFQUNBekosT0FBTyxDQUFDQyxHQUFSLENBQVl5SixZQUFaO0VBQ0EsT0FBT0EsWUFBUDtBQUNEOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JULGNBQXhCLEVBQXdDO0VBQ3RDO0VBQ0EsTUFBTUYsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQUQsQ0FBckI7RUFDQSxNQUFNSixHQUFHLEdBQUdDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDWSxNQUFMLEVBQUQsQ0FBckI7RUFDQSxNQUFNQyxjQUFjLEdBQUdiLElBQUksQ0FBQ2MsY0FBTCxDQUFvQixFQUFwQixFQUF3QjtJQUM3Q0MsSUFBSSxFQUFFLFNBRHVDO0lBRTdDQyxNQUFNLEVBQUU7RUFGcUMsQ0FBeEIsQ0FBdkIsQ0FKc0MsQ0FTdEM7O0VBQ0EsTUFBTUMsVUFBVSxHQUFJLEdBQUVuQixHQUFJLElBQUdlLGNBQWUsRUFBNUM7RUFDQSxPQUFPSSxVQUFQO0FBQ0Q7O0FBRUQsaUVBQWVOLGNBQWY7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTs7QUFFQSxNQUFNaEMsVUFBVSxHQUFHLENBQUNFLE9BQUQsRUFBVXFDLFFBQVYsS0FBdUI7RUFDeEMsTUFBTWhOLEVBQUUsR0FBR2lOLFVBQVUsQ0FBQyxNQUFNO0lBQzFCdEMsT0FBTyxDQUFDaEgsTUFBUixDQUFlMUMsNERBQW1CLEVBQWxDO0lBQ0ErTCxRQUFRLENBQUNoTixFQUFELENBQVI7RUFDRCxDQUhvQixFQUdsQixJQUhrQixDQUFyQjtFQUlBOEMsT0FBTyxDQUFDQyxHQUFSLENBQVkvQyxFQUFaO0FBQ0QsQ0FORDs7QUFRQSxpRUFBZXlLLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFFTyxJQUFJN0UsV0FBVyxHQUFHLElBQWxCO0FBRVA7O0FBRUEsTUFBTUQsWUFBWSxHQUFJakYsSUFBRCxJQUFVO0VBQzdCa0YsV0FBVyxHQUFHLENBQ1o7SUFDRXZDLE9BQU8sRUFBRTNDLElBQUksQ0FBQzJDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCcUMsSUFEM0I7SUFFRXdILFdBQVcsRUFBRXhNLElBQUksQ0FBQzJDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCOEosV0FGL0I7SUFHRXpKLElBQUksRUFBRWhELElBQUksQ0FBQ2dGLElBQUwsQ0FBVWhDLElBSGxCO0lBSUUwSixPQUFPLEVBQUUxTSxJQUFJLENBQUNnRixJQUFMLENBQVUySCxRQUFWLENBQW1CckssT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FKWDtJQUtFc0ssT0FBTyxFQUFFNU0sSUFBSSxDQUFDZ0YsSUFBTCxDQUFVNkgsUUFBVixDQUFtQnZLLE9BQW5CLENBQTJCLENBQTNCLENBTFg7SUFNRXdLLFNBQVMsRUFBRTlNLElBQUksQ0FBQ2dGLElBQUwsQ0FBVStILFVBTnZCO0lBT0VDLFFBQVEsRUFBRWhOLElBQUksQ0FBQ2dGLElBQUwsQ0FBVWdJLFFBUHRCO0lBUUVDLFFBQVEsRUFBRWpOLElBQUksQ0FBQ2dGLElBQUwsQ0FBVWlJLFFBUnRCO0lBU0VDLElBQUksRUFBRWxOLElBQUksQ0FBQ2tOLElBQUwsQ0FBVUMsS0FUbEI7SUFVRUMsT0FBTyxFQUFFcE4sSUFBSSxDQUFDcU4sR0FBTCxDQUFTRCxPQVZwQjtJQVdFckcsSUFBSSxFQUFFL0csSUFBSSxDQUFDc04sSUFYYjtJQVlFQyxRQUFRLEVBQUV2TixJQUFJLENBQUN3TixRQVpqQjtJQWFFQyxJQUFJLEVBQUV6TixJQUFJLENBQUMwTixFQWJiO0lBY0VDLElBQUksRUFBRyxvQ0FBbUMzTixJQUFJLENBQUMyQyxPQUFMLENBQWEsQ0FBYixFQUFnQmdMLElBQUs7RUFkakUsQ0FEWSxDQUFkO0VBa0JBdkwsT0FBTyxDQUFDQyxHQUFSLENBQVk2QyxXQUFaO0VBQ0E5QyxPQUFPLENBQUNDLEdBQVIsQ0FBWStDLDhDQUFaOztFQUNBLElBQUlBLDhDQUFKLEVBQWU7SUFDYjlCLG9FQUFBLENBQXlCNEIsV0FBekI7RUFDRDs7RUFDRDdCLHdEQUFXLENBQUM2QixXQUFELENBQVg7QUFDRCxDQXpCRDs7QUEyQkEsaUVBQWVELFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNNUIsV0FBVyxHQUFJVixPQUFELElBQWE7RUFDL0IsTUFBTXFDLElBQUksR0FBR25DLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0VBQ0FrQyxJQUFJLENBQUNqQyxTQUFMLEdBQWlCLEVBQWpCO0VBQ0FKLE9BQU8sQ0FBQ2tHLE9BQVIsQ0FBaUJ0SyxJQUFELElBQVU7SUFDeEIsTUFBTXVQLE9BQU8sR0FBR3hOLGtEQUFBLENBQ2QsU0FEYyxFQUVkLENBQUN1Tiw4REFBaUIsQ0FBQ3RQLElBQUQsQ0FBbEIsRUFBMEJxUCwrREFBa0IsQ0FBQ3JQLElBQUQsQ0FBNUMsQ0FGYyxFQUdkO01BQ0VtQyxLQUFLLEVBQUU7SUFEVCxDQUhjLENBQWhCO0lBT0FzRSxJQUFJLENBQUMvQixNQUFMLENBQVk2SyxPQUFaO0VBQ0QsQ0FURDtBQVVELENBYkQ7O0FBZUEsaUVBQWV6SyxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7O0FBQ0EsTUFBTXVLLGtCQUFrQixHQUFJakwsT0FBRCxJQUFhO0VBQ3RDLE1BQU1vTCxhQUFhLEdBQUd6TixrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDLFlBQUQsQ0FBN0IsRUFBNkM7SUFDakVJLEtBQUssRUFBRywyQkFBMEJnQixzREFBYTtFQURrQixDQUE3QyxDQUF0QjtFQUdBLE1BQU1vTCxTQUFTLEdBQUd4TSxrREFBQSxDQUNoQixHQURnQixFQUVoQixDQUFFLGVBQWNxQyxPQUFPLENBQUNtSyxTQUFSLENBQWtCeEssT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBNkIsRUFBN0MsRUFBZ0RoQyw0Q0FBQSxDQUFlLE9BQWYsQ0FBaEQsQ0FGZ0IsRUFHaEIsSUFIZ0IsQ0FBbEI7RUFLQSxNQUFNME4sWUFBWSxHQUFHMU4sa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQ3lOLGFBQUQsRUFBZ0JqQixTQUFoQixDQUE1QixFQUF3RDtJQUMzRXBNLEtBQUssRUFBRWdCLDJEQUFpQkM7RUFEbUQsQ0FBeEQsQ0FBckIsQ0FUc0MsQ0FhdEM7O0VBQ0EsTUFBTXNNLFlBQVksR0FBRzNOLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMsWUFBRCxDQUE3QixFQUE2QztJQUNoRUksS0FBSyxFQUFHLDJCQUEwQmdCLHNEQUFhO0VBRGlCLENBQTdDLENBQXJCO0VBR0EsTUFBTXNMLFFBQVEsR0FBRzFNLGtEQUFBLENBQ2YsR0FEZSxFQUVmLENBQUUsYUFBWXFDLE9BQU8sQ0FBQ3FLLFFBQVMsRUFBL0IsQ0FGZSxFQUdmLElBSGUsQ0FBakI7RUFLQSxNQUFNa0IsV0FBVyxHQUFHNU4sa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQzJOLFlBQUQsRUFBZWpCLFFBQWYsQ0FBNUIsRUFBc0Q7SUFDeEV0TSxLQUFLLEVBQUVnQiwyREFBaUJDO0VBRGdELENBQXRELENBQXBCLENBdEJzQyxDQTBCdEM7O0VBQ0EsTUFBTXdNLFFBQVEsR0FBRzdOLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMsS0FBRCxDQUE3QixFQUFzQztJQUNyREksS0FBSyxFQUFHLDJCQUEwQmdCLHNEQUFhO0VBRE0sQ0FBdEMsQ0FBakI7RUFHQSxNQUFNd0wsSUFBSSxHQUFHNU0sa0RBQUEsQ0FDWCxHQURXLEVBRVgsQ0FBRSxTQUFRcUMsT0FBTyxDQUFDdUssSUFBUixDQUFhNUssT0FBYixDQUFxQixDQUFyQixDQUF3QixNQUFsQyxDQUZXLEVBR1gsSUFIVyxDQUFiO0VBS0EsTUFBTThMLE9BQU8sR0FBRzlOLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLENBQUM2TixRQUFELEVBQVdqQixJQUFYLENBQTVCLEVBQThDO0lBQzVEeE0sS0FBSyxFQUFFZ0IsMkRBQWlCQztFQURvQyxDQUE5QyxDQUFoQixDQW5Dc0MsQ0F1Q3RDOztFQUNBLE1BQU0wTSxZQUFZLEdBQUcvTixrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDLFNBQUQsQ0FBN0IsRUFBMEM7SUFDN0RJLEtBQUssRUFBRywyQkFBMEJnQixzREFBYTtFQURjLENBQTFDLENBQXJCO0VBR0EsTUFBTXVMLFFBQVEsR0FBRzNNLGtEQUFBLENBQ2YsR0FEZSxFQUVmLENBQUUsYUFBWXFDLE9BQU8sQ0FBQ3NLLFFBQVMsRUFBL0IsQ0FGZSxFQUdmLElBSGUsQ0FBakI7RUFLQSxNQUFNcUIsV0FBVyxHQUFHaE8sa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQytOLFlBQUQsRUFBZXBCLFFBQWYsQ0FBNUIsRUFBc0Q7SUFDeEV2TSxLQUFLLEVBQUVnQiwyREFBaUJDO0VBRGdELENBQXRELENBQXBCO0VBSUEsTUFBTThCLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtFQUNBRCxRQUFRLENBQUNSLE1BQVQsQ0FBZ0JpTCxXQUFoQixFQUE2QkUsT0FBN0IsRUFBc0NFLFdBQXRDLEVBQW1ETixZQUFuRDtFQUNBLE1BQU1PLG1CQUFtQixHQUFHak8sa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQ21ELFFBQUQsQ0FBNUIsRUFBd0M7SUFDbEUvQyxLQUFLLEVBQ0g7RUFGZ0UsQ0FBeEMsQ0FBNUI7RUFLQSxPQUFPNk4sbUJBQVA7QUFDRCxDQTVERDs7QUE4REEsaUVBQWVYLGtCQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUlsTCxPQUFELElBQWE7RUFDckM7RUFDQSxNQUFNNkwsWUFBWSxHQUFHbE8sNENBQUEsQ0FBZSxhQUFmLEVBQThCLENBQUNzSSxzREFBRCxDQUE5QixDQUFyQjtFQUNBNEYsWUFBWSxDQUFDaEssU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsU0FBM0IsRUFBc0MsaUJBQXRDO0VBQ0EsTUFBTXNDLElBQUksR0FBR3pHLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUUsR0FBRXFDLE9BQU8sQ0FBQ29FLElBQUssSUFBakIsQ0FBN0IsRUFBb0QsSUFBcEQsQ0FBYjtFQUNBLE1BQU10QixRQUFRLEdBQUduRixrREFBQSxDQUNmLElBRGUsRUFFZixDQUFDa08sWUFBRCxFQUFlekgsSUFBZixFQUFxQnBFLE9BQU8sQ0FBQ3lLLE9BQTdCLENBRmUsRUFHZjtJQUFFMU0sS0FBSyxFQUFFO0VBQVQsQ0FIZSxDQUFqQjtFQUtBLE1BQU04SyxTQUFTLEdBQUdsTCxrREFBQSxDQUNoQixJQURnQixFQUVoQixDQUFFLEdBQUV5TCx3REFBYyxDQUFDcEosT0FBTyxDQUFDNEssUUFBVCxDQUFtQixFQUFyQyxDQUZnQixFQUdoQixJQUhnQixDQUFsQjtFQUtBLE1BQU1rQixTQUFTLEdBQUduTyxrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDbUYsUUFBRCxFQUFXK0YsU0FBWCxDQUE1QixFQUFtRDtJQUNuRTlLLEtBQUssRUFDSDtFQUZpRSxDQUFuRCxDQUFsQjtFQUlBLE1BQU1nTyxLQUFLLEdBQUdwTyxrREFBQSxDQUFxQixNQUFyQixFQUE2QixDQUFDLGFBQUQsQ0FBN0IsRUFBOEM7SUFDMURJLEtBQUssRUFBRTtFQURtRCxDQUE5QyxDQUFkLENBbkJxQyxDQXVCckM7O0VBQ0EsTUFBTWlPLFdBQVcsR0FBR3JPLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCLEVBQTVCLEVBQWdDO0lBQ2xEc08sR0FBRyxFQUFFak0sT0FBTyxDQUFDZ0wsSUFEcUM7SUFFbERrQixHQUFHLEVBQUUsY0FGNkM7SUFHbERuTyxLQUFLLEVBQUU7RUFIMkMsQ0FBaEMsQ0FBcEIsQ0F4QnFDLENBOEJyQzs7RUFDQSxNQUFNb08sa0JBQWtCLEdBQUd4TyxrREFBQSxDQUN6QixJQUR5QixFQUV6QixDQUFDb08sS0FBRCxFQUFRL0wsT0FBTyxDQUFDNkosV0FBaEIsQ0FGeUIsRUFHekI7SUFDRTlMLEtBQUssRUFDSDtFQUZKLENBSHlCLENBQTNCLENBL0JxQyxDQXdDckM7O0VBQ0EsTUFBTXFPLFdBQVcsR0FBR3pPLGtEQUFBLENBQ2xCLEtBRGtCLEVBRWxCLENBQUN3TyxrQkFBRCxFQUFxQkgsV0FBckIsQ0FGa0IsRUFHbEI7SUFDRWpPLEtBQUssRUFBRTtFQURULENBSGtCLENBQXBCLENBekNxQyxDQWdEckM7O0VBQ0EsTUFBTXNPLEdBQUcsR0FBRzFPLDRDQUFBLENBQWUsT0FBZixDQUFaLENBakRxQyxDQWtEckM7O0VBQ0EsTUFBTTJPLFdBQVcsR0FBRzNPLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMsR0FBRCxDQUE3QixFQUFvQyxJQUFwQyxDQUFwQixDQW5EcUMsQ0FvRHJDO0VBQ0E7O0VBQ0EsTUFBTTRPLFdBQVcsR0FBRzVPLGtEQUFBLENBQ2xCLElBRGtCLEVBRWxCLENBQUNxQyxPQUFPLENBQUNLLElBQVIsQ0FBYVYsT0FBYixDQUFxQixDQUFyQixDQUFELEVBQTBCME0sR0FBMUIsRUFBK0JDLFdBQS9CLENBRmtCLEVBR2xCO0lBQ0V2TyxLQUFLLEVBQUU7RUFEVCxDQUhrQixDQUFwQixDQXREcUMsQ0E4RHJDOztFQUNBLE1BQU15TyxJQUFJLEdBQUc3TyxrREFBQSxDQUNYLE1BRFcsRUFFWCxDQUFDLElBQUQsRUFBT3FDLE9BQU8sQ0FBQytKLE9BQWYsRUFBd0JwTSw0Q0FBQSxDQUFlLE9BQWYsQ0FBeEIsQ0FGVyxFQUdYLElBSFcsQ0FBYjtFQUtBLE1BQU04TyxHQUFHLEdBQUc5TyxrREFBQSxDQUNWLE1BRFUsRUFFVixDQUFDLElBQUQsRUFBT3FDLE9BQU8sQ0FBQ2lLLE9BQWYsRUFBd0J0TSw0Q0FBQSxDQUFlLE9BQWYsQ0FBeEIsQ0FGVSxFQUdWLElBSFUsQ0FBWjtFQU1BLE1BQU0rTyxHQUFHLEdBQUcvTyxvREFBQSxDQUF1QixPQUF2QixDQUFaO0VBQ0ErTyxHQUFHLENBQUM3SyxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsVUFBbEIsRUFBOEIsV0FBOUI7RUFFQSxNQUFNNkssTUFBTSxHQUFHaFAsa0RBQUEsQ0FBcUIsSUFBckIsRUFBMkIsQ0FBQzZPLElBQUQsRUFBT0UsR0FBUCxFQUFZRCxHQUFaLENBQTNCLEVBQTZDO0lBQzFEMU8sS0FBSyxFQUNIO0VBRndELENBQTdDLENBQWY7RUFLQSxNQUFNNk8sV0FBVyxHQUFHalAsa0RBQUEsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQzRPLFdBQUQsRUFBY0ksTUFBZCxDQUE1QixFQUFtRDtJQUNyRTVPLEtBQUssRUFDSDtFQUZtRSxDQUFuRCxDQUFwQixDQWxGcUMsQ0F1RnJDOztFQUNBLE1BQU04TyxRQUFRLEdBQUdsUCxrREFBQSxDQUFxQixPQUFyQixFQUE4QixJQUE5QixFQUFvQztJQUNuRE8sSUFBSSxFQUFFLFVBRDZDO0lBRW5EdkIsRUFBRSxFQUFFLGNBRitDO0lBR25Eb0IsS0FBSyxFQUFFO0VBSDRDLENBQXBDLENBQWpCLENBeEZxQyxDQTZGckM7O0VBQ0EsTUFBTStPLFlBQVksR0FBR25QLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMsV0FBRCxDQUE3QixFQUE0QztJQUMvREksS0FBSyxFQUNIO0VBRjZELENBQTVDLENBQXJCO0VBS0EsTUFBTWdQLGFBQWEsR0FBR3BQLGtEQUFBLENBQXFCLE1BQXJCLEVBQTZCLENBQUMsWUFBRCxDQUE3QixFQUE2QztJQUNqRUksS0FBSyxFQUNIO0VBRitELENBQTdDLENBQXRCO0VBSUEsTUFBTWlQLEtBQUssR0FBR3JQLGtEQUFBLENBQXFCLE9BQXJCLEVBQThCLENBQUNvUCxhQUFELEVBQWdCRCxZQUFoQixDQUE5QixFQUE2RDtJQUN6RS9PLEtBQUssRUFBRSwwREFEa0U7SUFFekVrUCxHQUFHLEVBQUU7RUFGb0UsQ0FBN0QsQ0FBZDtFQUtBLE1BQU1DLGdCQUFnQixHQUFHdlAsa0RBQUEsQ0FDdkIsTUFEdUIsRUFFdkIsQ0FBQ0EsNENBQUEsQ0FBZSxRQUFmLENBQUQsQ0FGdUIsRUFHdkIsSUFIdUIsQ0FBekI7RUFLQUEsNkNBQUEsQ0FBZ0J1UCxnQkFBaEIsRUFBa0MsQ0FDaEMsbUJBRGdDLEVBRWhDLFlBRmdDLEVBR2hDLGVBSGdDLEVBSWhDLFNBSmdDLENBQWxDO0VBTUEsTUFBTUMsYUFBYSxHQUFHeFAsa0RBQUEsQ0FDcEIsTUFEb0IsRUFFcEIsQ0FBQ0EsNENBQUEsQ0FBZSxRQUFmLENBQUQsQ0FGb0IsRUFHcEIsSUFIb0IsQ0FBdEI7RUFLQUEsNkNBQUEsQ0FBZ0J3UCxhQUFoQixFQUErQixDQUM3QixtQkFENkIsRUFFN0IsU0FGNkIsRUFHN0IsaUJBSDZCLEVBSTdCLFNBSjZCLENBQS9CO0VBT0EsTUFBTUMsUUFBUSxHQUFHelAsa0RBQUEsQ0FDZixLQURlLEVBRWYsQ0FBQ3dQLGFBQUQsRUFBZ0JOLFFBQWhCLEVBQTBCRyxLQUExQixFQUFpQ0UsZ0JBQWpDLENBRmUsRUFHZjtJQUNFblAsS0FBSyxFQUFFO0VBRFQsQ0FIZSxDQUFqQjtFQU9BLE1BQU1zUCxlQUFlLEdBQUcxUCxrREFBQSxDQUFxQixLQUFyQixFQUE0QixDQUFDeVAsUUFBRCxDQUE1QixFQUF3QztJQUM5RHJQLEtBQUssRUFBRTtFQUR1RCxDQUF4QyxDQUF4QixDQTFJcUMsQ0E4SXJDOztFQUNBLE1BQU11UCxZQUFZLEdBQUczUCxrREFBQSxDQUNuQixLQURtQixFQUVuQixDQUFDaVAsV0FBRCxFQUFjUyxlQUFkLENBRm1CLEVBR25CO0lBQ0V0UCxLQUFLLEVBQUU7RUFEVCxDQUhtQixDQUFyQixDQS9JcUMsQ0F1SnJDOztFQUNBLE1BQU13UCxNQUFNLEdBQUc1UCxrREFBQSxDQUFxQixNQUFyQixFQUE2QixFQUE3QixFQUFpQztJQUM5Q0ksS0FBSyxFQUFFO0VBRHVDLENBQWpDLENBQWY7RUFJQSxNQUFNeVAsY0FBYyxHQUFHN1Asa0RBQUEsQ0FDckIsS0FEcUIsRUFFckIsQ0FBQ3lPLFdBQUQsRUFBY2tCLFlBQWQsQ0FGcUIsRUFHckI7SUFDRXZQLEtBQUssRUFDSDtFQUZKLENBSHFCLENBQXZCO0VBU0EsTUFBTStDLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtFQUNBRCxRQUFRLENBQUNSLE1BQVQsQ0FBZ0J3TCxTQUFoQixFQUEyQjBCLGNBQTNCO0VBRUEsTUFBTTFILE1BQU0sR0FBR25JLGtEQUFBLENBQXFCLFFBQXJCLEVBQStCLENBQUNtRCxRQUFELENBQS9CLEVBQTJDO0lBQ3hEL0MsS0FBSyxFQUNIO0VBRnNELENBQTNDLENBQWY7RUFJQSxPQUFPK0gsTUFBUDtBQUNELENBN0tEOztBQStLQSxpRUFBZW9GLGlCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTEE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDJYQUEyWCw0QkFBNEIsNEJBQTRCLGdDQUFnQyxrQ0FBa0MsVUFBVSx3QkFBd0IscUJBQXFCLEdBQUcscVBBQXFQLHNCQUFzQiwyQ0FBMkMsNkJBQTZCLDBCQUEwQixvQkFBb0IsdVBBQXVQLFVBQVUsZ0tBQWdLLGVBQWUsaUNBQWlDLFVBQVUsMk5BQTJOLGVBQWUsMkJBQTJCLGtDQUFrQyxVQUFVLGlHQUFpRyw4Q0FBOEMsOENBQThDLEdBQUcsa0dBQWtHLHVCQUF1Qix5QkFBeUIsR0FBRyxpRkFBaUYsbUJBQW1CLDZCQUE2QixHQUFHLDJFQUEyRSx3QkFBd0IsR0FBRywwSkFBMEoseUhBQXlILDJCQUEyQixVQUFVLGlFQUFpRSxtQkFBbUIsR0FBRywyR0FBMkcsbUJBQW1CLG1CQUFtQix1QkFBdUIsNkJBQTZCLEdBQUcsU0FBUyxvQkFBb0IsR0FBRyxTQUFTLGdCQUFnQixHQUFHLGdiQUFnYixvQkFBb0Isa0NBQWtDLHNDQUFzQyxVQUFVLGtNQUFrTSwwQkFBMEIsNEJBQTRCLGlDQUFpQywyQkFBMkIsc0JBQXNCLHVCQUF1QixVQUFVLDhGQUE4Rix5QkFBeUIsR0FBRyxtTEFBbUwsZ0NBQWdDLDBDQUEwQyxtQ0FBbUMsVUFBVSwrRkFBK0Ysa0JBQWtCLEdBQUcsK01BQStNLHFCQUFxQixHQUFHLG1GQUFtRiw2QkFBNkIsR0FBRyxpSkFBaUosaUJBQWlCLEdBQUcsNkhBQTZILG1DQUFtQyxpQ0FBaUMsVUFBVSxvR0FBb0csNkJBQTZCLEdBQUcscUtBQXFLLGdDQUFnQywwQkFBMEIsVUFBVSxzRUFBc0UsdUJBQXVCLEdBQUcsNEpBQTRKLGNBQWMsR0FBRyxjQUFjLGNBQWMsZUFBZSxHQUFHLFlBQVksZUFBZSxHQUFHLG9CQUFvQixxQkFBcUIsY0FBYyxlQUFlLEdBQUcsNkVBQTZFLHFCQUFxQixHQUFHLGtRQUFrUSxnQkFBZ0IsMkJBQTJCLFVBQVUsaUVBQWlFLGdCQUFnQiwyQkFBMkIsVUFBVSxnREFBZ0QsZ0JBQWdCLDJCQUEyQixVQUFVLCtFQUErRSxvQkFBb0IsR0FBRyxpRkFBaUYsb0JBQW9CLEdBQUcsbWJBQW1iLG9CQUFvQixtQ0FBbUMsVUFBVSx3S0FBd0ssb0JBQW9CLGlCQUFpQixHQUFHLHdGQUF3RixrQkFBa0IsR0FBRywwQkFBMEIsd0JBQXdCLHdCQUF3QixtQkFBbUIsbUJBQW1CLG1CQUFtQixvQkFBb0Isb0JBQW9CLGtCQUFrQixrQkFBa0IsdUJBQXVCLDJDQUEyQyxvQkFBb0IseUJBQXlCLDJCQUEyQiw0QkFBNEIsNkJBQTZCLHVCQUF1QixnQ0FBZ0MsaUNBQWlDLDJDQUEyQyx1Q0FBdUMsZ0NBQWdDLDJCQUEyQixtQ0FBbUMsaUJBQWlCLHVCQUF1QixxQkFBcUIsc0JBQXNCLHVCQUF1QixtQkFBbUIscUJBQXFCLGtCQUFrQix3QkFBd0IsMEJBQTBCLGdDQUFnQyw4QkFBOEIsK0JBQStCLGdDQUFnQyw0QkFBNEIsNkJBQTZCLDhCQUE4QiwyQkFBMkIsR0FBRyxVQUFVLG9CQUFvQixHQUFHLGFBQWEsdUJBQXVCLEdBQUcsWUFBWSxhQUFhLGVBQWUsZ0JBQWdCLGNBQWMsR0FBRyx1QkFBdUIsa0JBQWtCLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxTQUFTLHdCQUF3QiwyQkFBMkIsR0FBRyxZQUFZLHNCQUFzQix1QkFBdUIsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcsU0FBUywyQkFBMkIsR0FBRyxTQUFTLHdCQUF3QixHQUFHLFNBQVMsMEJBQTBCLEdBQUcsU0FBUywwQkFBMEIsR0FBRyxTQUFTLDJCQUEyQixHQUFHLFNBQVMsd0JBQXdCLEdBQUcsU0FBUyx1QkFBdUIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsU0FBUywyQkFBMkIsR0FBRyxVQUFVLHlCQUF5QixHQUFHLFlBQVkscUJBQXFCLEdBQUcsaUJBQWlCLDBCQUEwQixHQUFHLFNBQVMsa0JBQWtCLEdBQUcsU0FBUyxrQkFBa0IsR0FBRyxXQUFXLGtCQUFrQixHQUFHLGtCQUFrQixnQkFBZ0IsR0FBRyxXQUFXLGlCQUFpQixHQUFHLGtCQUFrQixrQkFBa0IsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcscUJBQXFCLHFCQUFxQixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyxZQUFZLGVBQWUsR0FBRyxrQkFBa0IsZUFBZSxHQUFHLFdBQVcsZ0JBQWdCLEdBQUcsWUFBWSxlQUFlLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsZ0JBQWdCLGVBQWUsR0FBRyxxQkFBcUIsb0JBQW9CLEdBQUcsc0JBQXNCLHFCQUFxQixHQUFHLHNCQUFzQixxQkFBcUIsR0FBRyxzQkFBc0IscUJBQXFCLEdBQUcsY0FBYyxtQ0FBbUMsZ0NBQWdDLDJCQUEyQixHQUFHLHNCQUFzQixxQkFBcUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLHNCQUFzQixxQkFBcUIsR0FBRyxjQUFjLHFCQUFxQixHQUFHLGNBQWMsbUJBQW1CLEdBQUcsNkJBQTZCLFlBQVksa0JBQWtCLEtBQUssVUFBVSxlQUFlLEtBQUssR0FBRyxxQkFBcUIsWUFBWSxrQkFBa0IsS0FBSyxVQUFVLGVBQWUsS0FBSyxHQUFHLG1CQUFtQixpREFBaUQsaURBQWlELEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLDZCQUE2QixvQ0FBb0MsR0FBRyxnQkFBZ0IscURBQXFELEdBQUcsZ0JBQWdCLHFEQUFxRCxHQUFHLDRCQUE0QixtQ0FBbUMsR0FBRyxrQ0FBa0Msc0NBQXNDLEdBQUcsZ0JBQWdCLGtEQUFrRCxHQUFHLGdCQUFnQixrREFBa0QsR0FBRyw2QkFBNkIsaUNBQWlDLEdBQUcsYUFBYSx3QkFBd0IsR0FBRyxhQUFhLDJCQUEyQixHQUFHLGdCQUFnQiw0QkFBNEIsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHLG1CQUFtQiw0QkFBNEIsR0FBRyxvQkFBb0IsbUNBQW1DLEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLG1CQUFtQixjQUFjLEdBQUcsWUFBWSw2QkFBNkIsNkJBQTZCLEdBQUcsWUFBWSw0QkFBNEIsNEJBQTRCLEdBQUcsZUFBZSwyQkFBMkIsR0FBRyxhQUFhLHlCQUF5QixHQUFHLGdCQUFnQix1QkFBdUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLG9CQUFvQixxQkFBcUIsR0FBRyxlQUFlLDRCQUE0QixHQUFHLGlCQUFpQiwwQkFBMEIsR0FBRyxlQUFlLDBCQUEwQixHQUFHLFlBQVksMkJBQTJCLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLHFCQUFxQixzQkFBc0IsR0FBRyxhQUFhLHNCQUFzQixHQUFHLGVBQWUsMkJBQTJCLEdBQUcsb0JBQW9CLDJCQUEyQiw4REFBOEQsR0FBRyxxQkFBcUIsMkJBQTJCLDhEQUE4RCxHQUFHLG9CQUFvQiwyQkFBMkIsMkRBQTJELEdBQUcsb0JBQW9CLDJCQUEyQiw4REFBOEQsR0FBRyx1QkFBdUIsMkJBQTJCLGlFQUFpRSxHQUFHLGtCQUFrQix1QkFBdUIsNkRBQTZELEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLGdCQUFnQix1QkFBdUIsMkRBQTJELEdBQUcsK0NBQStDLHNDQUFzQyxHQUFHLGlCQUFpQix1QkFBdUIsMkRBQTJELEdBQUcsZ0JBQWdCLHVCQUF1QiwyREFBMkQsR0FBRyxnQkFBZ0IsdUJBQXVCLDJEQUEyRCxHQUFHLGlCQUFpQix1QkFBdUIsMkRBQTJELEdBQUcsaUJBQWlCLHVCQUF1Qiw0REFBNEQsR0FBRyxRQUFRLG9CQUFvQixHQUFHLFNBQVMsd0JBQXdCLDJCQUEyQixHQUFHLFNBQVMseUJBQXlCLDRCQUE0QixHQUFHLGlCQUFpQixxQkFBcUIsd0JBQXdCLEdBQUcsU0FBUyx5QkFBeUIsMEJBQTBCLEdBQUcsU0FBUyx1QkFBdUIsd0JBQXdCLEdBQUcsU0FBUyx3QkFBd0IsMkJBQTJCLEdBQUcsaUJBQWlCLHFCQUFxQix3QkFBd0IsR0FBRyxTQUFTLDBCQUEwQiwyQkFBMkIsR0FBRyxpQkFBaUIsc0JBQXNCLHVCQUF1QixHQUFHLFNBQVMsMEJBQTBCLDJCQUEyQixHQUFHLFNBQVMseUJBQXlCLEdBQUcsU0FBUywyQkFBMkIsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsbUJBQW1CLHVCQUF1QixHQUFHLFNBQVMsdUJBQXVCLEdBQUcsbUJBQW1CLHVCQUF1QixHQUFHLFNBQVMsd0JBQXdCLEdBQUcsU0FBUyx5QkFBeUIsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLGNBQWMsd0JBQXdCLEdBQUcsaUJBQWlCLDJCQUEyQixHQUFHLGlCQUFpQiw2Q0FBNkMsR0FBRyxnQkFBZ0Isb0NBQW9DLEdBQUcsY0FBYyx3Q0FBd0MsR0FBRyxnQkFBZ0Isb0NBQW9DLEdBQUcsWUFBWSx3QkFBd0IseUJBQXlCLEdBQUcsWUFBWSx3QkFBd0IseUJBQXlCLEdBQUcsY0FBYyxvQkFBb0Isd0JBQXdCLEdBQUcsWUFBWSx1QkFBdUIsc0JBQXNCLEdBQUcsYUFBYSx1QkFBdUIsd0JBQXdCLEdBQUcsYUFBYSxzQkFBc0Isc0JBQXNCLEdBQUcsWUFBWSx1QkFBdUIseUJBQXlCLEdBQUcsYUFBYSx3QkFBd0IseUJBQXlCLEdBQUcsYUFBYSxvQkFBb0IsbUJBQW1CLEdBQUcsY0FBYyxxQkFBcUIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsZ0JBQWdCLHFCQUFxQixHQUFHLGdCQUFnQixxQkFBcUIsR0FBRyxlQUFlLHFCQUFxQixHQUFHLGNBQWMsOEJBQThCLEdBQUcsbUJBQW1CLHFCQUFxQixHQUFHLHFCQUFxQiw0QkFBNEIsR0FBRyxvQkFBb0IsMEJBQTBCLEdBQUcsa0JBQWtCLHlCQUF5QixxREFBcUQsR0FBRyxrQkFBa0IseUJBQXlCLHFEQUFxRCxHQUFHLG1CQUFtQix5QkFBeUIscURBQXFELEdBQUcsbUJBQW1CLHlCQUF5QixxREFBcUQsR0FBRyxvQkFBb0IseUJBQXlCLHFEQUFxRCxHQUFHLGtCQUFrQix5QkFBeUIscURBQXFELEdBQUcsa0JBQWtCLHlCQUF5QixxREFBcUQsR0FBRyxrQkFBa0IseUJBQXlCLHFEQUFxRCxHQUFHLG9CQUFvQix5QkFBeUIscURBQXFELEdBQUcsb0JBQW9CLHlCQUF5QixxREFBcUQsR0FBRyxrQkFBa0IseUJBQXlCLG9EQUFvRCxHQUFHLG9CQUFvQix5QkFBeUIscURBQXFELEdBQUcsbUhBQW1ILDJFQUEyRSxnR0FBZ0csNEdBQTRHLEdBQUcsZ0lBQWdJLHdGQUF3Rix3R0FBd0csNEdBQTRHLEdBQUcsbUhBQW1ILDJFQUEyRSxnR0FBZ0csNEdBQTRHLEdBQUcsbUJBQW1CLCtCQUErQiwwQ0FBMEMsR0FBRyxpQkFBaUIsbUNBQW1DLHdCQUF3QixHQUFHLG1CQUFtQiw2QkFBNkIsNkRBQTZELCtCQUErQixHQUFHLGVBQWUsNktBQTZLLDZKQUE2SixxTkFBcU4sNkRBQTZELCtCQUErQixHQUFHLDZCQUE2QixpQ0FBaUMsNkRBQTZELCtCQUErQixHQUFHLGlCQUFpQiwrQkFBK0IsR0FBRyxpQkFBaUIsK0JBQStCLEdBQUcsWUFBWSwyREFBMkQsR0FBRyw0Q0FBNEMsd0JBQXdCLHlCQUF5QixHQUFHLGdEQUFnRCx3QkFBd0IseUJBQXlCLEdBQUcsdUNBQXVDLHdCQUF3Qix5QkFBeUIsR0FBRyxrREFBa0QseUJBQXlCLHFEQUFxRCxHQUFHLHNEQUFzRCx5QkFBeUIscURBQXFELEdBQUcsNkNBQTZDLHlCQUF5QixxREFBcUQsR0FBRyx5Q0FBeUMsc0JBQXNCLEdBQUcsaURBQWlELDJCQUEyQiw0REFBNEQsR0FBRyw0Q0FBNEMsdUJBQXVCLDJEQUEyRCxHQUFHLDRCQUE0Qix1QkFBdUIsdUJBQXVCLG9NQUFvTSxHQUFHLG9DQUFvQywyQkFBMkIsOERBQThELEdBQUcsb0NBQW9DLDJCQUEyQiw2REFBNkQsR0FBRyxtQ0FBbUMsMkJBQTJCLDhEQUE4RCxHQUFHLGtDQUFrQyx5QkFBeUIscURBQXFELEdBQUcsa0NBQWtDLHlCQUF5QixxREFBcUQsR0FBRyxrQ0FBa0MseUJBQXlCLHFEQUFxRCxHQUFHLGlDQUFpQyx5QkFBeUIscURBQXFELEdBQUcsb0NBQW9DLDJCQUEyQiw2REFBNkQsR0FBRywwREFBMEQsdUJBQXVCLHNCQUFzQixHQUFHLDhEQUE4RCx1QkFBdUIsc0JBQXNCLEdBQUcscURBQXFELHVCQUF1QixzQkFBc0IsR0FBRyxnRUFBZ0UscUJBQXFCLEdBQUcsb0VBQW9FLHFCQUFxQixHQUFHLDJEQUEyRCxxQkFBcUIsR0FBRyxrRUFBa0UseUJBQXlCLHFEQUFxRCxHQUFHLHNFQUFzRSx5QkFBeUIscURBQXFELEdBQUcsNkRBQTZELHlCQUF5QixxREFBcUQsR0FBRyw2QkFBNkIsa0JBQWtCLDZCQUE2QixLQUFLLGtCQUFrQix3QkFBd0IsS0FBSyw4QkFBOEIsc0JBQXNCLEtBQUssb0JBQW9CLG1CQUFtQixLQUFLLHNCQUFzQiwwQkFBMEIsS0FBSyx5QkFBeUIsZ0NBQWdDLEtBQUssNEJBQTRCLDhCQUE4QixLQUFLLDZCQUE2QixxQ0FBcUMsS0FBSyw4QkFBOEIsd0JBQXdCLEtBQUssa0JBQWtCLDBCQUEwQiw2QkFBNkIsS0FBSyxrQkFBa0IsdUJBQXVCLEtBQUssc0JBQXNCLHdCQUF3Qix3QkFBd0IsS0FBSyx1QkFBdUIsc0JBQXNCLDBCQUEwQixLQUFLLHFCQUFxQiwwQkFBMEIsMkJBQTJCLEtBQUssc0JBQXNCLHlCQUF5QixxQkFBcUIsS0FBSyxzQkFBc0IseUJBQXlCLDBCQUEwQixLQUFLLHNCQUFzQixzQkFBc0IscUJBQXFCLEtBQUssc0JBQXNCLHdCQUF3QixxQkFBcUIsS0FBSyx1REFBdUQsc0JBQXNCLDBCQUEwQixLQUFLLDJEQUEyRCxzQkFBc0IsMEJBQTBCLEtBQUssa0RBQWtELHNCQUFzQiwwQkFBMEIsS0FBSyxxRUFBcUUsc0JBQXNCLDBCQUEwQixLQUFLLHlFQUF5RSxzQkFBc0IsMEJBQTBCLEtBQUssZ0VBQWdFLHNCQUFzQiwwQkFBMEIsS0FBSyx5RUFBeUUsdUJBQXVCLEtBQUssNkVBQTZFLHVCQUF1QixLQUFLLG9FQUFvRSx1QkFBdUIsS0FBSyxHQUFHLE9BQU8sK0ZBQStGLFlBQVksTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixvQkFBb0IscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyx3Q0FBd0MsdUJBQXVCLHNCQUFzQix3QkFBd0I7QUFDeG5oQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QyxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE4STtBQUM5STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDhIQUFPOzs7O0FBSXdGO0FBQ2hILE9BQU8saUVBQWUsOEhBQU8sSUFBSSxxSUFBYyxHQUFHLHFJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTXBLLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtBQUNBRCxRQUFRLENBQUNSLE1BQVQsQ0FBZ0IrRSxtREFBYSxFQUE3QixFQUFpQ2dELGlEQUFXLEVBQTVDLEVBQWdENUQsbURBQWEsRUFBN0Q7QUFDQSxNQUFNZ0osR0FBRyxHQUFHdk4sUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQVo7QUFDQXNOLEdBQUcsQ0FBQ25OLE1BQUosQ0FBV1EsUUFBWDtBQUNBMk0sR0FBRyxDQUFDNUwsU0FBSixDQUFjQyxHQUFkLENBQ0UsTUFERixFQUVFLDJCQUZGLEVBR0UsY0FIRixFQUlFLFFBSkYsRUFLRSxjQUxGO0FBUUE1QixRQUFRLENBQUN3TixJQUFULENBQWM3TCxTQUFkLENBQXdCQyxHQUF4QixDQUNFLGFBREYsRUFFRSxlQUZGLEVBR0UsY0FIRixFQUlFLFFBSkY7QUFPQW9DLG1EQUFNLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jaG9vc2UtbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb252ZXJ0LXdlYXRoZXItdW5pdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kZWZhdWx0LXJlbmRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9lcnJvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luaXRpYWwtcmVuZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9jYXRpb24tZGF0YS1zdG9yZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2NhdGlvbi1zdG9yZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RpbWVBbmREYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdHJhbnNvcm0tZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQ2FyZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckNhcmRoZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG5mdW5jdGlvbiBkZWZhdWx0TG9hY3Rpb25Gb3JtKCkge1xuICBjb25zdCBmb3JtVGl0bGUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgzXCIsXG4gICAgW1wiU2V0IGRlZmF1bHQgd2VhdGhlciBsb2NhdGlvblwiXSxcbiAgICB7XG4gICAgICBjbGFzczpcbiAgICAgICAgXCJ0ZXh0LWxnIGZvbnQtYm9sZCBzbTp0ZXh0LTJ4bCB0ZXh0LWdyYXktMzAwIGJnLXB1cnBsZS02MDAgdGV4dC1jZW50ZXIgcHktMlwiLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBmb3JtSGVhZGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2Zvcm1UaXRsZV0sIHtcbiAgICBjbGFzczogXCJmb3JtLWhlYWRlciBtYi1bNDBweF1cIixcbiAgfSk7XG5cbiAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgW10sIHtcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBpZDogXCJkZWZhdWx0LWxvY2F0aW9uLWlucHV0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgZGVmYXVsdCB3ZWF0aGVyIGxvY2F0aW9uIFwiLFxuICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICBjbGFzczpcbiAgICAgIFwidHJhbnNpdGlvbi1hbGwgZWFzZS1pbiBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmUgYXBwZWFybmFjZS1ub25lIGJvcmRlci1bMnB4XSBib3JkZXItZ3JheS01MDAgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDAgIHBsYWNlaG9sZGVyOnRleHQtc20gc206cGxhY2Vob2xkZXI6dGV4dC1iYXNlIGZvY3VzOnBsYWNlaG9sZGVyOmZvbnQtc2VtaWJvbGQgZm9jdXM6cGxhY2Vob2xkZXI6dGV4dC14cyBzbTpmb2N1czpwbGFjZWhvbGRlcjp0ZXh0LWJhc2UgIHNtOmZvY3VzOnBsYWNlaG9sZGVyOmZvbnQtc2VtaWJvbGQgaG92ZXI6Ym9yZGVyLXB1cnBsZS00MDAgIGR1cmF0aW9uLTIwMCBtYi01IHctNC81IHJvdW5kZWQtbWQgcHktMSBzbTpweS0yIHBsLTIgXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHNhdmVCdG4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJzYXZlXCJdLCB7XG4gICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICBjbGFzczpcbiAgICAgIFwic3VibWl0LWJ0biB0cmFuc2l0aW9uIGVhc2UtaW4gcHktWzNweF0gdGV4dC1ncmF5LTQwMCByb3VuZGVkLW1kIGJvcmRlci1bMnB4XSBib3JkZXItZ3JheS01MDAgIG91dGxpbmUtbm9uZSAgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgcHgtMiBtaW4tdy1bNjBweF0gc206bWluLXctWzgwcHhdIGZvbnQtc2VtaWJvbGQgaG92ZXI6Ym9yZGVyLXB1cnBsZS01MDAgaG92ZXI6dGV4dC1wdXJwbGUtNDAwIGR1cmF0aW9uLTIwMFwiLFxuICB9KTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJjbG9zZVwiXSwge1xuICAgIGlkOiBcImNhbmNlbC1idG5cIixcbiAgICBjbGFzczpcbiAgICAgIFwiY2FuY2VsLWJ0biBjbG9zZS1tb2RhbCB0cmFuc2l0aW9uIGVhc2UtaW4gcHktWzNweF0gdGV4dC1ncmF5LTQwMCByb3VuZGVkLW1kIGJvcmRlci1bMnB4XSBib3JkZXItZ3JheS01MDAgIG91dGxpbmUtbm9uZSAgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgcHgtMiBtaW4tdy1bNjBweF0gc206bWluLXctWzgwcHhdIGZvbnQtc2VtaWJvbGQgaG92ZXI6Ym9yZGVyLXB1cnBsZS01MDAgaG92ZXI6dGV4dC1wdXJwbGUtNDAwIGR1cmF0aW9uLTIwMFwiLFxuICB9KTtcblxuICBjb25zdCBmb3JtQnRucyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtzYXZlQnRuLCBjYW5jZWxCdG5dLCB7XG4gICAgY2xhc3M6IFwiZm9ybS1idG5zIGZsZXggZ2FwLVsyMHB4XSBtdC0zXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1Cb2R5ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2xvY2F0aW9uSW5wdXQsIGZvcm1CdG5zXSwge1xuICAgIGNsYXNzOiBcImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG15LTVcIixcbiAgfSk7XG5cbiAgY29uc3QgaW5mb0ljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgW10sIHtcbiAgICBjbGFzczogXCJmYXMgZmEtaW5mby1jaXJjbGUgdGV4dC1zbGF0ZS00MDAgdGV4dC1iYXNlIG1yLTEgcm91bmRlZC1mdWxsXCIsXG4gIH0pO1xuICBjb25zdCBmb3JtSW5mbyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtcbiAgICAgIGluZm9JY29uLFxuICAgICAgXCJjdXJyZW50IHdlYXRoZXIgZGV0YWlscyB3aWxsIGJlIGRpc3BsYXllZCBmb3IgZGVmYXVsdCBsb2NhdGlvbiBvbiBhcHAgbG9hZFwiLFxuICAgIF0sXG4gICAge1xuICAgICAgY2xhc3M6IFwidGV4dC14cyBtaW4tdy1bMjQycHhdIHNtOnRleHQtc20gdGV4dC1ncmF5LTMwMCAgdGV4dC1jZW50ZXIgcHgtMlwiLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBmb3JtRm9vdGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2Zvcm1JbmZvXSwge1xuICAgIGNsYXNzOiBcImZsZXgganVzdGlmeS1jZW50ZXIgcGItMiBcIixcbiAgfSk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW2Zvcm1IZWFkZXIsIGZvcm1Cb2R5LCBmb3JtRm9vdGVyXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJmb3JtLWNvbnRlbnQtd3JhcHBlclwiLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgZm9ybSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBbd3JhcHBlcl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiZGVmYXVsdC1sb2NhdGlvbi1mb3JtIGJnLWdyYXktODAwIGJvcmRlci1bXSByZWxhdGl2ZSBib3R0b20tWzEwMHB4XSByb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctW3JnYmEoMCwwLDAsMC4zKV8wcHhfMTlweCBfMzhweCxyZ2JhKDAsMCwwLDAuMjIpXzBweF8xNXB4XzEycHhdIHctWzkwJV0gbWF4LXctWzQ4MHB4XSBtaW4tdy1bMjYwcHhdIGFuaW1hdGUtcmV2ZWFsXCIsXG4gIH0pO1xuXG4gIGNvbnN0IG92ZXJsYXkgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbZm9ybV0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwib3ZlcmxheSBjbG9zZS1tb2RhbCBmaXhlZCBpbnNldC0wIHotMTAgYmctW3JnYmEoMCwwLDAsMC41KV0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIHB4LTQgbWluLXctWzI3MHB4XSBcIixcbiAgfSk7XG4gIHJldHVybiBvdmVybGF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9hY3Rpb25Gb3JtO1xuIiwiY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkU3R5bGVzOlxuICAgIFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgcHktNiBiZy1zbGF0ZS05MDAgcm91bmRlZC1sZyB0ZXh0LXNsYXRlLTMwMCBweC0yIGgtWzkwJV1cIixcbiAgaWNvbnM6IFwibWItMlwiLFxuICBmb290ZXJJY29uczpcbiAgICBcInRyYW5zaXRpb24tY29sb3IgZWFzZS1pbiBkdXRhdGlvbi0zMDAgaG92ZXI6dGV4dC1pbmRpZ28tNDAwIGhvdmVyOnNjYWxlLTEyNSB0ZXh0LWxnXCIsXG4gIGZsZXhSb3dDZW50ZXI6IFwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIixcbiAgZmxleENvbENlbnRlcjogXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIiwiaW1wb3J0IHsgdG9nZ2xlciB9IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG4vL2NvbnZlcnQga2VsdmluIHVuaXQgdG8gRmFocmVuaGVpdFxuZnVuY3Rpb24gdG9GYWhyZW5oZWl0KGNlbHNpdXMpIHtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGNlbHNpdXMgKiAxLjggKyAzMjtcbiAgY29uc29sZS5sb2coZmFocmVuaGVpdC50b0ZpeGVkKDApKTtcbiAgcmV0dXJuIGZhaHJlbmhlaXQudG9GaXhlZCgwKTtcbn1cblxuLy9jb252ZXJ0IGtlbHZpbiB1bml0IHRvIENlbHNpdXNcbmZ1bmN0aW9uIHRvQ2Vsc2l1cyhrZWx2aW5Vbml0KSB7XG4gIGNvbnN0IGNlbHNpdXMgPSBrZWx2aW5Vbml0IC0gMjczLjE1O1xuICByZXR1cm4gY2Vsc2l1cy50b0ZpeGVkKDApO1xufVxuXG5jb25zdCBzZXRUZW1wZXJhdHVyZVVuaXQgPSAoaXNUb2dnbGVkLCB3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlLXZhbHVlXCIpO1xuICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IHRlbXAgPSBpc1RvZ2dsZWRcbiAgICA/IHRvRmFocmVuaGVpdCh3ZWF0aGVyWzBdLnRlbXAudG9GaXhlZCgwKSlcbiAgICA6IHdlYXRoZXJbMF0udGVtcC50b0ZpeGVkKDApO1xuXG4gIHRlbXBlcmF0dXJlTGFiZWwuYXBwZW5kKFxuICAgIHRlbXAsXG4gICAgaXNUb2dnbGVkID8gaGVscGVyLnNwZWNpYWwoXCImZGVnO0ZcIikgOiBoZWxwZXIuc3BlY2lhbChcIiZkZWc7Q1wiKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0VGVtcGVyYXR1cmVVbml0O1xuIiwiaW1wb3J0IGdldERhdGEgZnJvbSBcIi4vZmV0Y2gtZGF0YVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL2xvY2F0aW9uLXN0b3JlXCI7XG5pbXBvcnQgd2VhdGhlckNhcmQgZnJvbSBcIi4vd2VhdGhlckNhcmRcIjtcbmltcG9ydCBkZWZhdWx0RGF0YVN0b3JlIGZyb20gXCIuL2xvY2F0aW9uLWRhdGEtc3RvcmVcIjtcblxuY29uc3QgZGVmYXVsUGFnZVJlbmRlciA9ICgpID0+IHtcbiAgY29uc3QgZGVmYXVsdExvY2F0aW9uRGF0YSA9IGRlZmF1bHREYXRhU3RvcmUuZGVmYXVsdExvY2F0aW9uRGF0YSgpO1xuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWdtZW50LmFwcGVuZCh3ZWF0aGVyQ2FyZChkZWZhdWx0TG9jYXRpb25EYXRhKSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsUGFnZVJlbmRlcjtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRXJyb3IocmVzcG9uc2UpIHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgZ2V0IHdlYXRoZXIgZGV0YWlsc1wiKTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5T25FcnJvcihlcnIsIGlzTG9hZGluZykge1xuICBjb25zdCBzYWRGYWNlID0gaGVscGVyLnNwZWNpYWwoXCImbHBhcjsmZ3Q7Jmxvd2JhcjsmbHQ7JnJwYXI7XCIpO1xuICBjb25zdCBzYWRGYWNlU3BhbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbc2FkRmFjZV0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwidGV4dC00eGwgbGVhZGluZy1ub3JtYWwgdHJhY2tpbmctdGlnaHRlciBmb250LW1lZGl1bSBtYi0xIHNtOnRleHQtNnhsIHNtOm1iLTNcIixcbiAgfSk7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaDJcIiwgW2Vyci5tZXNzYWdlXSwge1xuICAgIGNsYXNzOiBcInRleHQtMnhsIHNtOnRleHQtNHhsIGZvbnQtbWVkaXVtXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGRhc2hPbmUgPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJmh5cGhlbjtcIik7XG4gIGRhc2hPbmUuY2xhc3NMaXN0LmFkZChcInByLVsxcHhdXCIpO1xuICBjb25zdCBkYXNoVHdvID0gaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIiZoeXBoZW47XCIpO1xuICBkYXNoVHdvLmNsYXNzTGlzdC5hZGQoXCJwci1bMXB4XVwiKTtcblxuICBjb25zdCBmaXhPbmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbZGFzaE9uZSwgXCJjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb25cIl0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBmaXhUd28gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbZGFzaFR3bywgXCJlbnN1cmUgd2VhdGhlciBsb2NhdGlvbiBpcyBjb3JyZWN0bHkgc3BlbHRcIl0sXG4gICAgbnVsbFxuICApO1xuXG4gIGNvbnN0IGZpeFN1Z2dlc3Rpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbZml4T25lLCBmaXhUd29dLCB7XG4gICAgY2xhc3M6IFwiYm9yZGVyLVsxcHhdIGJvcmRlci1zbGF0ZS00MDAgcm91bmRlZC1sZyBweC0yIHB5LTIgbXQtNVwiLFxuICB9KTtcblxuICBjb25zdCBlcnJvcldyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtzYWRGYWNlU3BhbiwgZXJyb3JNZXNzYWdlLCBmaXhTdWdnZXN0aW9uXSxcbiAgICB7XG4gICAgICBjbGFzczpcbiAgICAgICAgXCJlcnJvci13cmFwcGVyIGZsZXggZmxleC1jb2wganVzdGlmeS10b3AgaXRlbXMtY2VudGVyIGgtZnVsbCBwdC1bMTIwcHhdIHNtOmp1c3RpZnktY2VudGVyIHNtOnB0LTBcIixcbiAgICB9XG4gICk7XG5cbiAgY29uc3Qgb25FcnJvckRpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtlcnJvcldyYXBwZXJdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgZm9udC1zYW5zcHJvIHRleHQtc2xhdGUtMzAwIHRleHQtc20gc206dGV4dC1iYXNlIHctZnVsbCBoLWZ1bGxcIixcbiAgfSk7XG4gIC8vIFwiaG9tZS1zZWN0aW9uIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgcHgtNCB0ZXh0LWp1c3RpZnkgaC1mdWxsXCIsXG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kKG9uRXJyb3JEaXYpO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgY29uc29sZS5sb2coaXNMb2FkaW5nKTtcbiAgcmV0dXJuIG1haW47XG59XG4iLCJpbXBvcnQgc2V0VGVtcGVyYXR1cmVVbml0IGZyb20gXCIuL2NvbnZlcnQtd2VhdGhlci11bml0XCI7XG5pbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG5pbXBvcnQgdHJhbmZvcm1EYXRhLCB7IHdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vdHJhbnNvcm0tZGF0YVwiO1xuaW1wb3J0IG9uUGFnZUxvYWQgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL2xvY2F0aW9uLXN0b3JlXCI7XG5cbmV4cG9ydCBsZXQgaXNEZWZhdWx0ID0gZmFsc2U7XG5cbi8vZ2V0IGxvY2F0aW9uIGZyb20gdXNlciBpbnB1dCBvbiBmb3JtXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGlucHV0LnZhbHVlO1xuICAgIGdldERhdGEobG9jYXRpb24pO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2NhdGlvbigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmYXVsdC1sb2NhdGlvbi1mb3JtXCIpO1xuICBpZiAoZm9ybSkge1xuICAgIGNvbnN0IGlucHV0ID0gZm9ybS5lbGVtZW50c1tcImRlZmF1bHQtbG9jYXRpb24taW5wdXRcIl07XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IGlucHV0LnZhbHVlO1xuICAgICAgc3RvcmUuc2V0TG9jYXRpb24obG9jYXRpb24pO1xuICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuICAgICAgZ2V0RGF0YShsb2NhdGlvbik7XG4gICAgICBpc0RlZmF1bHQgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coaXNEZWZhdWx0KTtcbiAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxEZWZhdWx0TG9jYXRpb24oKSB7XG4gIC8vY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmYXVsdC1sb2NhdGlvbi1mb3JtXCIpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtbW9kYWxcIikpIHtcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIC8vIHN0b3JlLnNldExvY2F0aW9uKFwiY2FuY2VsZWRcIik7XG4gICAgfSk7XG4gIH1cbn1cblxuLy90b2dnbGUgY2hlY2sgYm94IHRvIHN3aXRjaCBiZXR3ZWVuIHRlbXBlcmF0dXJlIHN0YXRlc1xuY29uc3QgdG9nZ2xlciA9ICgpID0+IHtcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGlzVG9nZ2xlZCA9IHRhcmdldC5jaGVja2VkO1xuICAgIHNldFRlbXBlcmF0dXJlVW5pdChpc1RvZ2dsZWQsIHdlYXRoZXJEYXRhKTtcbiAgICB0b2dnbGVyU3dpdGNoKGlzVG9nZ2xlZCk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gdG9nZ2xlclN3aXRjaChpc1RvZ2dsZWQpIHtcbiAgY29uc3QgdG9nZ2xlT24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1vblwiKTtcbiAgY29uc3QgdG9nZ2xlT2ZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtb2ZmXCIpO1xuICBjb25zdCBjZWxzaXVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZWxzaXVzXCIpO1xuICBjb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYWhyZW5oZWl0XCIpO1xuICBpZiAoaXNUb2dnbGVkKSB7XG4gICAgLy9zd2l0Y2ggdG9nZ2xlclxuICAgIHRvZ2dsZU9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgdG9nZ2xlT2ZmLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgLy9zd2l0Y2ggYmV0d2VlbiBhY3RpdmUgd2VhdGhlciB1bml0XG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1wdXJwbGUtNDAwXCIpO1xuICAgIGNlbHNpdXMuY2xhc3NMaXN0LmFkZChcInRleHQtZ3JheS01MDBcIik7XG4gICAgZmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1ncmF5LTUwMFwiKTtcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXB1cnBsZS00MDBcIik7XG4gIH1cblxuICBpZiAoIWlzVG9nZ2xlZCkge1xuICAgIHRvZ2dsZU9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgdG9nZ2xlT2ZmLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXB1cnBsZS00MDBcIik7XG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1ncmF5LTUwMFwiKTtcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWdyYXktNTAwXCIpO1xuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtcHVycGxlLTQwMFwiKTtcbiAgfVxufVxuXG5jb25zdCBmb2N1c0lucHV0ID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gaW5wdXRcIik7XG4gIGNvbnN0IGNhbGxUb0FjdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsbC10by1hY3Rpb25cIik7XG4gIGNhbGxUb0FjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBmb3JtLmZvY3VzKCk7XG4gIH0pO1xufTtcblxuLy9ob21lXG5cbmNvbnN0IGJhY2tUb0hvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGFwcExvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1sb2dvXCIpO1xuICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBhcHBMb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIG1haW5FbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kKG9uUGFnZUxvYWQoKSk7XG4gICAgZm9jdXNJbnB1dCgpO1xuICB9KTtcbn07XG5cbi8vaW5pdGlhbGl6ZSBldmVudHNcbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgZ2V0TG9jYXRpb24oKTtcbiAgY2FuY2VsRGVmYXVsdExvY2F0aW9uKCk7XG4gIGRlZmF1bHRMb2NhdGlvbigpO1xuICB0b2dnbGVyKCk7XG4gIGZvY3VzSW5wdXQoKTtcbiAgYmFja1RvSG9tZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzO1xuIiwiaW1wb3J0IHRyYW5mb3JtRGF0YSBmcm9tIFwiLi90cmFuc29ybS1kYXRhXCI7XG5pbXBvcnQgbG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgeyBjaGVja0Vycm9yLCBkaXNwbGF5T25FcnJvciB9IGZyb20gXCIuL2Vycm9yXCI7XG5cbmxldCBpc0xvYWRpbmcgPSB0cnVlO1xuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgQVBJX0tFWSA9IFwiM2NlYjg4NTJiOWI2YTFmZDhhODE5MWFmNzI0MzM5N2ZcIjtcbiAgICBsb2FkaW5nKGlzTG9hZGluZyk7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2A7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNoZWNrRXJyb3IocmVzcG9uc2UpO1xuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgdHJhbmZvcm1EYXRhKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkaXNwbGF5T25FcnJvcihlcnIsIGlzTG9hZGluZyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY29uc3QgZm9vdGVyU2VjdGlvbiA9ICgpID0+IHtcbiAgLy9pY29uc1xuICBjb25zdCBnaXRodWIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgbnVsbCwgeyBjbGFzczogXCJmYWIgZmEtZ2l0aHViXCIgfSk7XG4gIGNvbnN0IHR3aXR0ZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgbnVsbCwgeyBjbGFzczogXCJmYWIgZmEtdHdpdHRlclwiIH0pO1xuICBjb25zdCBsaW5rZWRpbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7XG4gICAgY2xhc3M6IFwiZmFiIGZhLWxpbmtlZGluIFwiLFxuICB9KTtcbiAgLy9saW5rc1xuICBjb25zdCBnaXRodWJMaW5rID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFtnaXRodWJdLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vdHdpa2lzdGFcIixcbiAgICBjbGFzczogYCR7c3R5bGVzLmZvb3Rlckljb25zfWAsXG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICB9KTtcbiAgY29uc3QgdHdpdHRlckxpbmsgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImFcIiwgW3R3aXR0ZXJdLCB7XG4gICAgaHJlZjogXCJodHRwczovL3R3aXR0ZXIuY29tL2Fhcm9uYW5hbWFcIixcbiAgICBjbGFzczogYCR7c3R5bGVzLmZvb3Rlckljb25zfWAsXG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICB9KTtcbiAgY29uc3QgbGlua2VkaW5MaW5rID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIFtsaW5rZWRpbl0sIHtcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hYXJvbmFuYW1hXCIsXG4gICAgY2xhc3M6IGAke3N0eWxlcy5mb290ZXJJY29uc30gYCxcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gIH0pO1xuXG4gIC8vZm9vdGVyLXNvY2lhbCBpY29ucyB3cmFwcGVyXG4gIGNvbnN0IGljb25zV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW2dpdGh1YkxpbmssIHR3aXR0ZXJMaW5rLCBsaW5rZWRpbkxpbmtdLFxuICAgIHsgY2xhc3M6IFwiZmxleCBqdXN0aWZ5LWFyb3VuZCB3LTMvNSBtYi0yXCIgfVxuICApO1xuXG4gIC8vY29weXJpZ2h0IGluZm9cbiAgY29uc3QgY29weVJpZ2h0U3ltYm9sID0gaGVscGVyLnNwZWNpYWwoXCImY29weTsyMDIyXCIpO1xuICBjb25zdCBjb3B5UmlnaHQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbY29weVJpZ2h0U3ltYm9sLCBcIiBhYXJvbmFuYW1hXCJdLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcIiBmb250LW5vcm1hbCB0ZXh0LWJhc2VcIixcbiAgICB9XG4gICk7XG5cbiAgLy93cmFwcGVyXG4gIGNvbnN0IHdyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbaWNvbnNXcmFwcGVyLCBjb3B5UmlnaHRdLCB7XG4gICAgY2xhc3M6IGAke3N0eWxlcy5mbGV4Q29sQ2VudGVyfSB3LTMvNSBtYXgtdy1bNDgwcHhdYCxcbiAgfSk7XG5cbiAgLy9mcmFnbWVudFxuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWdtZW50LmFwcGVuZCh3cmFwcGVyKTtcbiAgLy9mb290ZXIgZWxlbWVudFxuICBjb25zdCBmb290ZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImZvb3RlclwiLCBbZnJhZ21lbnRdLCB7XG4gICAgY2xhc3M6IGAke3N0eWxlcy5mbGV4Um93Q2VudGVyfSBtaW4taC1bNTBweF0gYmctZ3JheS04MDAgYm9yZGVyLWdyYXktNzAwIHctZnVsbCBwLTIgdGV4dC1zbGF0ZS0zMDAgc2hhZG93LVtyZ2JhKDAsMCwwLDAuMTIpXzBweF8xcHhfM3B4LHJnYmEoMCwwLDAsMC4yNClfMHB4XzFweF8ycHhdIG10LTJgLFxuICB9KTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyU2VjdGlvbjtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuY29uc3QgaGVhZGVyU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIC8qKioqKipuYXYgbGVmdCBzZWN0aW9uKioqKiovXG4gIGNvbnN0IGxvZ29EZWcgPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJmRlZztcIik7XG4gIGxvZ29EZWcuY2xhc3NMaXN0LmFkZChcInRleHQtcGluay00MDBcIiwgXCJ0ZXh0LXhsXCIpO1xuICBjb25zdCBsb2dvID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBbXCJ3ZWRhXCIsIGxvZ29EZWddLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImFwcC1sb2dvIGZvbnQtYmFybG93IGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMCB0ZXh0LTJ4bCBzaGFkb3ctc2t5LTUwMCBjdXJzb3ItcG9pbnRlclwiLFxuICB9KTtcbiAgY29uc3QgbmF2TGVmdCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtsb2dvXSwge1xuICAgIGNsYXNzOiBcIm1iLTIgcHktWzFweF0gbG9nby1jb250YWluZXIgc206ZmxleC0xIHNtOm1sLThcIixcbiAgfSk7XG5cbiAgLyoqKioqKm5hdiByaWdodCBzZWN0aW9uKioqKioqKioqL1xuXG4gIC8vY3JlYXRlIHNlYXJjaCBib3hcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFtdLCB7XG4gICAgdHlwZTogXCJzZWFyY2hcIixcbiAgICBpZDogXCJzZWFyY2gtaW5wdXRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJFbnRlciB3ZWF0aGVyIGxvY2F0aW9uIFwiLFxuICAgIGNsYXNzOlxuICAgICAgXCJiZy10cmFuc3BhcmVudCAgb3V0bGluZS1ub25lIGFwcGVyYW5jZS1ub25lIHBsLTggcHktMiBoLWZ1bGwgcGxhY2Vob2xkZXI6dGV4dC1zbSBmb2N1czpwbGFjZWhvbGRlcjp0ZXh0LWluZGlnby0yMDAgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTMwMCBmb250LWZpcmFcIixcbiAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gIH0pO1xuXG4gIC8vc2VhcmNoIGljb25cbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBbXSwge1xuICAgIGNsYXNzOiBcImZhcyBmYS1zZWFyY2ggdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1pbmRpZ28tMzAwIFwiLFxuICB9KTtcblxuICAvL2NyZWF0ZSBzZWFyY2ggYnV0dG9uXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtzZWFyY2hJY29uXSwge1xuICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgaWQ6IFwic2VhcmNoLWJ0blwiLFxuICAgIGNsYXNzOiBcImJvcmRlci1sLTIgYm9yZGVyLWwtc2xhdGUtNjAwIHB4LTMgcHktMiBtaW4tdy1taW4gaC1mdWxsXCIsXG4gIH0pO1xuXG4gIC8vY3JlYXQgc2VhcmNoIGZvcm1cbiAgY29uc3QgZm9ybSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBbc2VhcmNoSW5wdXQsIHNlYXJjaEJ1dHRvbl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwibG9jYXRpb24gZ3JpZCBncmlkLWNvbHMtWzFmcl9hdXRvXSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1bOTAlXSBtYXgtdy14cyByb3VuZGVkLWZ1bGwgYmctZ3JheS03MDAgcHgtMiBmb2N1cy13aXRoaW46YmctZ3JheS05MDAgZm9jdXMtd2l0aGluOmJvcmRlci1zbGF0ZS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci0yIHNtOmp1c3RpZnktc2VsZi1lbmQgc2hhZG93LVtyZ2JhKDYwLDY0LDY3LDAuMylfMHB4XzFweF8ycHhfMHB4LHJnYmEoNjAsNjQsNjcsMC4xNSlfMHB4XzJweF82cHhfMnB4XVwiLFxuICB9KTtcblxuICAvL1xuICBjb25zdCBuYXZSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmb3JtXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcGItMiBzbTpmbGV4LTMgc206anVzdGlmeS1lbmQgXCIsXG4gIH0pO1xuXG4gIC8qKioqKm5hdiBlbGVtZW50ICovXG4gIGNvbnN0IG5hdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibmF2XCIsIFtuYXZMZWZ0LCBuYXZSaWdodF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIHNtOmZsZXgtcm93IHNtOmp1c3RpZnktYmV0d2VlbiBtYXgtdy1bOTYwcHhdXCIsXG4gIH0pO1xuXG4gIGZyYWdtZW50LmFwcGVuZChuYXYpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiIHB4LTIgcHktMiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTgwMCBzaGFkb3ctW3JnYmEoMCwwLDAsMC4xMilfMHB4XzFweF8zcHgscmdiYSgwLDAsMCwwLjI0KV8wcHhfMXB4XzJweF1cIixcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTZWN0aW9uO1xuIiwiZnVuY3Rpb24gYWRkQ2xhc3MoZWxlLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMuZm9yRWFjaCgoaSkgPT4gZWxlLmNsYXNzTGlzdC5hZGQoaSkpO1xufVxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgbm9kZSwgYXR0cmlidXRlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChub2RlKSB7XG4gICAgbm9kZS5mb3JFYWNoKChpKSA9PiBlbGVtZW50LmFwcGVuZChpKSk7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZSkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGUpO1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoaSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlW2ldKSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vY3JlYXRlIHBlY2lhbCBjaGFyYWN0ZXIgaW4gYSBzcGFuXG5jb25zdCBkZWdyZWVDaGFyYWN0ZXIgPSAoY2hhcikgPT4ge1xuICBjb25zdCBkZWdyZWVDaGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRlZ3JlZUNoYXIuaW5uZXJIVE1MID0gY2hhcjtcbiAgcmV0dXJuIGRlZ3JlZUNoYXI7XG59O1xuXG4vL3NwZWNpYWwgY2hhcmFjdGVyIGFzIGEgc3RyaW5nXG5jb25zdCBzcGVjaWFsID0gKGNoYXIpID0+IHtcbiAgY29uc3QgY2hhcmFjdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNoYXJhY3Rlci5pbm5lckhUTUwgPSBjaGFyO1xuICBjb25zdCByZWNoYXIgPSBjaGFyYWN0ZXIudGV4dENvbnRlbnQ7XG4gIHJldHVybiByZWNoYXI7XG59O1xuXG5jb25zdCBhZGRJY29uID0gKGtleXdvcmQsIHN0eWxlcykgPT4ge1xuICBjb25zdCBzcGFuID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW2tleXdvcmRdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIixcbiAgfSk7XG4gIGFkZENsYXNzKHNwYW4sIHN0eWxlcyk7XG4gIHJldHVybiBzcGFuO1xufTtcblxuZXhwb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQsIGRlZ3JlZUNoYXJhY3RlciwgYWRkSWNvbiwgc3BlY2lhbCB9O1xuIiwiaW1wb3J0IGluaXRpYWxQYWdlUmVuZGVyIGZyb20gXCIuL2luaXRpYWwtcmVuZGVyXCI7XG5pbXBvcnQgZGVmYXVsUGFnZVJlbmRlciBmcm9tIFwiLi9kZWZhdWx0LXJlbmRlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL2xvY2F0aW9uLXN0b3JlXCI7XG5cbmZ1bmN0aW9uIG9uUGFnZUxvYWQoKSB7XG4gIHJldHVybiBzdG9yZS5sb2NhdGlvbigpID09PSBudWxsID8gaW5pdGlhbFBhZ2VSZW5kZXIoKSA6IGRlZmF1bFBhZ2VSZW5kZXIoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb25QYWdlTG9hZDtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBkZWZhdWx0TG9hY3Rpb25Gb3JtIGZyb20gXCIuL2Nob29zZS1sb2NhdGlvblwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL2xvY2F0aW9uLXN0b3JlXCI7XG5pbXBvcnQgc2V0VGltZU91dCBmcm9tIFwiLi90aW1lb3V0XCI7XG5cbmZ1bmN0aW9uIGluaXRpYWxQYWdlUmVuZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgyXCIsXG4gICAgW1wiR2V0IEFjY3VyYXRlIFdlYXRoZXIgRGV0YWlscyBieSB0aGUgU2Vjb25kXCJdLFxuICAgIHtcbiAgICAgIGNsYXNzOlxuICAgICAgICBcInRleHQtM3hsIHNtOnRleHQtNXhsIHVwcGVyY2FzZSBmb250LWJhcmxvdyBmb250LWJvbGQgdGV4dC1wdXJwbGUtNDAwICB0ZXh0LWNlbnRlciB0cmFja2luZy13aWRlc3Qgc2VsZi1zdGFydCBcIixcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgY2FsbFRvQWN0aW9uQnRuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiZ2V0IHN0YXJ0ZWRcIl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiY2FsbC10by1hY3Rpb24gIHctWzEyMHB4XSBweC00IHB5LTIgdXBwZXJjYXNlIHRleHQtc20gdGV4dC1waW5rLTQwMCBib3JkZXItcGluay00MDAgZm9udC1zYW5zcHJvIGZvbnQtc2VtaWJvbGQgcm91bmRlZCB0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMjAwIGhvdmVyOnRleHQtc2xhdGUtNDAwIGhvdmVyOmJvcmRlci1zbGF0ZS00MDAgYm9yZGVyLTIgbXQtWzYwcHhdIHNoYWRvdy1bcmdiYSg2MCw2NCw2NywwLjMpXzBweF8xcHhfMnB4XzBweCxyZ2JhKDYwLDY0LDY3LDAuMTUpXzBweF8ycHhfNnB4XzJweDtdXCIsXG4gIH0pO1xuICBjb25zdCBjb250ZW50RGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2hlYWRlciwgY2FsbFRvQWN0aW9uQnRuXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktdG9wIGl0ZW1zLWNlbnRlciBoLWZ1bGwgZm9udC1zYW5zcHJvIHB0LVsxMDBweF0gc206anVzdGlmeS1jZW50ZXIgc206cHQtMFwiLFxuICB9KTtcblxuICBjb25zdCBzZWN0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtjb250ZW50RGl2XSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJob21lLXNlY3Rpb24gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBweC00IHRleHQtanVzdGlmeSBoLWZ1bGxcIixcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coc3RvcmUubG9jYXRpb24oKSk7XG5cbiAgaWYgKHN0b3JlLmxvY2F0aW9uKCkgPT09IG51bGwpIHtcbiAgICBzZWN0aW9uLmFwcGVuZChkZWZhdWx0TG9hY3Rpb25Gb3JtKCkpO1xuICB9XG5cbiAgY29uc29sZS5sb2coIXN0b3JlLmxvY2F0aW9uKCkpO1xuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VSZW5kZXI7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmZ1bmN0aW9uIGxvYWRpbmcoaXNMb2FkaW5nKSB7XG4gIGNvbnN0IGxvYWRpbmdEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJMb2FkaW5nLi4uXCJdLCB7XG4gICAgY2xhc3M6IFwidGV4dC0yeGwgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIixcbiAgfSk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZChsb2FkaW5nRGl2KTtcbiAgfVxuXG4gIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nO1xuIiwiY29uc3QgZGVmYXVsdERhdGFTdG9yZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uS2V5ID0gXCJkZWZhdWx0TG9jYXRpb25XZWF0aGVyRGF0YVwiO1xuICBsZXQgZGVmYXVsdExvY2F0aW9uV2VhdGhlckRhdGEgPSBnZXREYXRhRnJvbVN0b3JhZ2UoKTtcblxuICBmdW5jdGlvbiBnZXREYXRhRnJvbVN0b3JhZ2UoKSB7XG4gICAgY29uc3QgcmV0cmlldmVkV2VhdGhlckRhdGEgPVxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhdGlvbktleSkpIHx8IG51bGw7XG4gICAgcmV0dXJuIHJldHJpZXZlZFdlYXRoZXJEYXRhO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0RGF0YVRvU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIGxvY2F0aW9uS2V5LFxuICAgICAgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdExvY2F0aW9uV2VhdGhlckRhdGEpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHNldERhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGRlZmF1bHRMb2NhdGlvbldlYXRoZXJEYXRhID0gZGF0YTtcbiAgICBzZXREYXRhVG9TdG9yYWdlKCk7XG4gICAgY29uc29sZS5sb2coZGVmYXVsdExvY2F0aW9uV2VhdGhlckRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGRlZmF1bHRMb2NhdGlvbkRhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlZmF1bHRMb2NhdGlvbldlYXRoZXJEYXRhO1xuICB9O1xuXG4gIHJldHVybiB7IHNldERhdGEsIGRlZmF1bHRMb2NhdGlvbkRhdGEgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHREYXRhU3RvcmU7XG4iLCJjb25zdCBzdG9yZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uS2V5ID0gXCJkZWZhdWx0TG9jYXRpb25cIjtcbiAgbGV0IGRlZmF1bHRMb2NhdGlvbiA9IGdldExvY2F0aW9uRnJvbVN0b3JhZ2UoKTtcblxuICBmdW5jdGlvbiBnZXRMb2NhdGlvbkZyb21TdG9yYWdlKCkge1xuICAgIGNvbnN0IHJldHJpZXZlZExvY2F0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYXRpb25LZXkpIHx8IG51bGw7XG4gICAgcmV0dXJuIHJldHJpZXZlZExvY2F0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TG9jYXRpb25Ub1N0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYXRpb25LZXksIGRlZmF1bHRMb2NhdGlvbik7XG4gIH1cblxuICBjb25zdCBzZXRMb2NhdGlvbiA9IChsb2NhdGlvbikgPT4ge1xuICAgIGRlZmF1bHRMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHNldExvY2F0aW9uVG9TdG9yYWdlKCk7XG4gICAgY29uc29sZS5sb2coZGVmYXVsdExvY2F0aW9uKTtcbiAgfTtcblxuICBjb25zdCBsb2NhdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZGVmYXVsdExvY2F0aW9uO1xuICB9O1xuXG4gIHJldHVybiB7IHNldExvY2F0aW9uLCBsb2NhdGlvbiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgb25QYWdlTG9hZCBmcm9tIFwiLi9ob21lXCI7XG5cbmNvbnN0IG1haW5TZWN0aW9uID0gKCkgPT4ge1xuICAvL21haW4gZWxlbWVudFxuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWdtZW50LmFwcGVuZChvblBhZ2VMb2FkKCkpO1xuICBjb25zdCBtYWluID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwidy1bOTAlXSBtYXgtdy0yeGwgZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtYXV0byBiZy1ncmF5LTkwMCByZWxhdGl2ZVwiLFxuICB9KTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluU2VjdGlvbjtcbiIsIi8vYXJyYXkgb2YgZGF5cyBvZiB3ZWVrXG5jb25zdCBkYXlzT2ZXZWVrID0gW1xuICB7IGlkOiAwLCBkYXk6IFwiU3VuXCIgfSxcbiAgeyBpZDogMSwgZGF5OiBcIk1vblwiIH0sXG4gIHsgaWQ6IDIsIGRheTogXCJUdWVcIiB9LFxuICB7IGlkOiAzLCBkYXk6IFwiV2VkXCIgfSxcbiAgeyBpZDogNCwgZGF5OiBcIlRodVwiIH0sXG4gIHsgaWQ6IDUsIGRheTogXCJGcmlcIiB9LFxuICB7IGlkOiA2LCBkYXk6IFwiU2F0XCIgfSxcbl07XG5cbi8vZ2V0IGRheSBvZiB3ZWVrXG5mdW5jdGlvbiBkYXlPZldlZWsoZGF0ZSkge1xuICBsZXQgZGF5ID0gbnVsbDtcbiAgZGF5c09mV2Vlay5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKGkuaWQgPT09IGRhdGUpIHtcbiAgICAgIGRheSA9IGkuZGF5O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXk7XG59XG5cbi8vY29udmVydCB0aW1lIHRvIHVzZXIgdGltZSB3aXRoIFVUQyBhbmQgVGltZVpvbmVcbmZ1bmN0aW9uIHVzZXJUaW1lKHRpbWVab25lT2Zmc2V0KSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBsb2NhbFRpbWUgPSBkYXRlLmdldFRpbWUoKTtcbiAgY29uc3QgbG9jYWxUaW1lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDA7XG4gIGNvbnN0IHV0Y1RpbWUgPSBsb2NhbFRpbWUgKyBsb2NhbFRpbWVPZmZzZXQ7XG4gIGNvbnN0IGxvY2F0aW9uT2Zmc2V0ID0gdXRjVGltZSArIDEwMDAgKiB0aW1lWm9uZU9mZnNldDtcbiAgY29uc3QgbG9jYXRpb25UaW1lID0gbmV3IERhdGUobG9jYXRpb25PZmZzZXQpO1xuICBjb25zb2xlLmxvZyhsb2NhdGlvblRpbWUpO1xuICByZXR1cm4gbG9jYXRpb25UaW1lO1xufVxuXG5mdW5jdGlvbiByZW5kZXJVc2VyVGltZSh0aW1lWm9uZU9mZnNldCkge1xuICAvL2RlZmluZSBkYXRlLCBkYXksIGhvdXIgYW5kIG1pbnV0ZVxuICBjb25zdCBkYXRlID0gdXNlclRpbWUodGltZVpvbmVPZmZzZXQpO1xuICBjb25zdCBkYXkgPSBkYXlPZldlZWsoZGF0ZS5nZXREYXkoKSk7XG4gIGNvbnN0IGhvdXJBbmRNaW51dGVzID0gZGF0ZS50b0xvY2FsZVN0cmluZyhbXSwge1xuICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gIH0pO1xuXG4gIC8vZGVmaW5lIGZvcm1hdCB0byBkaXNwbGF5IHRpbWVcbiAgY29uc3QgZGlzbGF5VGltZSA9IGAke2RheX0gJHtob3VyQW5kTWludXRlc31gO1xuICByZXR1cm4gZGlzbGF5VGltZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVXNlclRpbWU7XG4iLCJpbXBvcnQgZGVmYXVsdExvYWN0aW9uRm9ybSBmcm9tIFwiLi9jaG9vc2UtbG9jYXRpb25cIjtcblxuY29uc3Qgc2V0VGltZU91dCA9IChzZWN0aW9uLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNlY3Rpb24uYXBwZW5kKGRlZmF1bHRMb2FjdGlvbkZvcm0oKSk7XG4gICAgY2FsbGJhY2soaWQpO1xuICB9LCAyMDAwKTtcbiAgY29uc29sZS5sb2coaWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0VGltZU91dDtcbiIsImltcG9ydCB3ZWF0aGVyQ2FyZCBmcm9tIFwiLi93ZWF0aGVyQ2FyZFwiO1xuaW1wb3J0IGRlZmF1bHREYXRhU3RvcmUgZnJvbSBcIi4vbG9jYXRpb24tZGF0YS1zdG9yZVwiO1xuXG5leHBvcnQgbGV0IHdlYXRoZXJEYXRhID0gbnVsbDtcblxuaW1wb3J0IHsgaXNEZWZhdWx0IH0gZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmNvbnN0IHRyYW5mb3JtRGF0YSA9IChkYXRhKSA9PiB7XG4gIHdlYXRoZXJEYXRhID0gW1xuICAgIHtcbiAgICAgIHdlYXRoZXI6IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgd2VhdGhlcmRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgbWF4VGVtcDogZGF0YS5tYWluLnRlbXBfbWF4LnRvRml4ZWQoMCksXG4gICAgICBtaW5UZW1wOiBkYXRhLm1haW4udGVtcF9taW4udG9GaXhlZCgwKSxcbiAgICAgIGZlZWxzTGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgICAgcHJlc3N1cmU6IGRhdGEubWFpbi5wcmVzc3VyZSxcbiAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXG4gICAgICBjaXR5OiBkYXRhLm5hbWUsXG4gICAgICB0aW1lWm9uZTogZGF0YS50aW1lem9uZSxcbiAgICAgIHRpbWU6IGRhdGEuZHQsXG4gICAgICBpY29uOiBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYCxcbiAgICB9LFxuICBdO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIGNvbnNvbGUubG9nKGlzRGVmYXVsdCk7XG4gIGlmIChpc0RlZmF1bHQpIHtcbiAgICBkZWZhdWx0RGF0YVN0b3JlLnNldERhdGEod2VhdGhlckRhdGEpO1xuICB9XG4gIHdlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5mb3JtRGF0YTtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCB3ZWF0aGVyQ2FyZENvbnRlbnQgZnJvbSBcIi4vd2VhdGhlckNhcmRDb250ZW50XCI7XG5pbXBvcnQgd2VhdGhlckNhcmRIZWFkZXIgZnJvbSBcIi4vd2VhdGhlckNhcmRoZWFkZXJcIjtcbmltcG9ydCBsb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmNvbnN0IHdlYXRoZXJDYXJkID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gIHdlYXRoZXIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGFydGljbGUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiYXJ0aWNsZVwiLFxuICAgICAgW3dlYXRoZXJDYXJkSGVhZGVyKGl0ZW0pLCB3ZWF0aGVyQ2FyZENvbnRlbnQoaXRlbSldLFxuICAgICAge1xuICAgICAgICBjbGFzczogXCJncmlkIGdyaWQtY29scy0xIGdyaWQtcm93cy0yIHJvdW5kZWQgaC1mdWxsIG10LTMgbWItNSBweC0zXCIsXG4gICAgICB9XG4gICAgKTtcbiAgICBtYWluLmFwcGVuZChhcnRpY2xlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZDtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2xhc3Nlc1wiO1xuY29uc3Qgd2VhdGhlckNhcmRDb250ZW50ID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgZmVlbHNMaWtlSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0aGVybW9zdGF0XCJdLCB7XG4gICAgY2xhc3M6IGBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCAke3N0eWxlcy5pY29uc31gLFxuICB9KTtcbiAgY29uc3QgZmVlbHNMaWtlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BmZWVscyBsaWtlOiAke3dlYXRoZXIuZmVlbHNMaWtlLnRvRml4ZWQoMCl9YCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBmZWVsc0xpa2VEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbZmVlbHNMaWtlSWNvbiwgZmVlbHNMaWtlXSwge1xuICAgIGNsYXNzOiBzdHlsZXMuY2FyZFN0eWxlcyxcbiAgfSk7XG5cbiAgLy9odW1pZGl0eVxuICBjb25zdCBodW1pZGl0eUljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wid2F0ZXJfZHJvcFwiXSwge1xuICAgIGNsYXNzOiBgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgJHtzdHlsZXMuaWNvbnN9YCxcbiAgfSk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BIdW1pZGl0eTogJHt3ZWF0aGVyLmh1bWlkaXR5fWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbaHVtaWRpdHlJY29uLCBodW1pZGl0eV0sIHtcbiAgICBjbGFzczogc3R5bGVzLmNhcmRTdHlsZXMsXG4gIH0pO1xuXG4gIC8vd2luZFxuICBjb25zdCB3aW5kSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJhaXJcIl0sIHtcbiAgICBjbGFzczogYG1hdGVyaWFsLWljb25zLW91dGxpbmVkICR7c3R5bGVzLmljb25zfWAsXG4gIH0pO1xuICBjb25zdCB3aW5kID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BXaW5kOiAke3dlYXRoZXIud2luZC50b0ZpeGVkKDApfSBtcHNgXSxcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IHdpbmREaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbd2luZEljb24sIHdpbmRdLCB7XG4gICAgY2xhc3M6IHN0eWxlcy5jYXJkU3R5bGVzLFxuICB9KTtcblxuICAvL3ByZXNzdXJlXG4gIGNvbnN0IHByZXNzdXJlSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJzY2llbmNlXCJdLCB7XG4gICAgY2xhc3M6IGBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCAke3N0eWxlcy5pY29uc31gLFxuICB9KTtcbiAgY29uc3QgcHJlc3N1cmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbYHByZXNzdXJlOiAke3dlYXRoZXIucHJlc3N1cmV9YF0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBwcmVzc3VyZURpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtwcmVzc3VyZUljb24sIHByZXNzdXJlXSwge1xuICAgIGNsYXNzOiBzdHlsZXMuY2FyZFN0eWxlcyxcbiAgfSk7XG5cbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmQoaHVtaWRpdHlEaXYsIHdpbmREaXYsIHByZXNzdXJlRGl2LCBmZWVsc0xpa2VEaXYpO1xuICBjb25zdCBvdGhlcldlYXRoZXJEZXRhaWxzID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2ZyYWdtZW50XSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJjYXJkLWJvdHRvbSBiZy1zbGF0ZS04MDAgZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMiBnYXAteC0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTIgZm9udC1maXJhIHRleHQtc20gcm91bmRlZC1sZyBzaGFkb3ctW3JnYmEoMCwwLDAsMC4xNilfMHB4XzNweF82cHgscmdiYSgwLDAsMCwwLjIzKV8wcHhfM3B4XzZweF0gbWItMyBcIixcbiAgfSk7XG5cbiAgcmV0dXJuIG90aGVyV2VhdGhlckRldGFpbHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZENvbnRlbnQ7XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgcmVuZGVyVXNlclRpbWUgZnJvbSBcIi4vdGltZUFuZERhdGVcIjtcblxuY29uc3Qgd2VhdGhlckNhcmRIZWFkZXIgPSAod2VhdGhlcikgPT4ge1xuICAvL2hlYWRlciBsZWZ0XG4gIGNvbnN0IGxvY2F0aW9uSWNvbiA9IGhlbHBlci5hZGRJY29uKFwibG9jYXRpb25fb25cIiwgW2NsYXNzZXMuaWNvbnNdKTtcbiAgbG9jYXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhzXCIsIFwidGV4dC1pbmRpZ28tNDAwXCIpO1xuICBjb25zdCBjaXR5ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtgJHt3ZWF0aGVyLmNpdHl9LCBgXSwgbnVsbCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoM1wiLFxuICAgIFtsb2NhdGlvbkljb24sIGNpdHksIHdlYXRoZXIuY291bnRyeV0sXG4gICAgeyBjbGFzczogXCJcIiB9XG4gICk7XG4gIGNvbnN0IGxvY2FsVGltZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDNcIixcbiAgICBbYCR7cmVuZGVyVXNlclRpbWUod2VhdGhlci50aW1lWm9uZSl9YF0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBoZWFkZXJUb3AgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbbG9jYXRpb24sIGxvY2FsVGltZV0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiaGVhZGVyLXRvcCB3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMgY2VudGVyIHRleHQtc20gdGV4dC1pbmRpZ28tMjAwIGZvbnQtYmFybG93ICBmb250LWxpZ2h0IHB0LTJcIixcbiAgfSk7XG4gIGNvbnN0IGFycm93ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcImFycm93X3JpZ2h0XCJdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC1waW5rLTUwMCBhbGlnbi1taWRkbGUgXCIsXG4gIH0pO1xuXG4gIC8vd2VhdGhlciBpY29uXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW10sIHtcbiAgICBzcmM6IHdlYXRoZXIuaWNvbixcbiAgICBhbHQ6IFwid2VhdGhlci1pY29uXCIsXG4gICAgY2xhc3M6IFwic2VsZi1zdGFydCAtbXQtNSB3LVsxMTBweF0gaC1bMTEwcHhdXCIsXG4gIH0pO1xuXG4gIC8vd2VhdGhlciBkZXNjcmlwdGlvblxuICBjb25zdCB3ZWF0aGVyZGVzY3JpcHRpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImg1XCIsXG4gICAgW2Fycm93LCB3ZWF0aGVyLndlYXRoZXJkZXNjXSxcbiAgICB7XG4gICAgICBjbGFzczpcbiAgICAgICAgXCJncmF5LTQwMCBmb250LWZpcmEgZm9udC1saWdodCB0ZXh0LXhzIHNlbGYtc3RhcnQganVzdGlmeS1zZWxmLXN0YXJ0IHctWzExNXB4XVwiLFxuICAgIH1cbiAgKTtcblxuICAvL3dlYXRoZXIgaWNvbiBhbmQgZGVzY3JpcHRpb24gd3JhcHBlclxuICBjb25zdCB3ZWF0aGVyTGVmdCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW3dlYXRoZXJkZXNjcmlwdGlvbiwgd2VhdGhlckljb25dLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc20gcHQtM1wiLFxuICAgIH1cbiAgKTtcbiAgLy9kZWdyZWUgc3BlY2lhbCBjaGFyYWN0ZXJcbiAgY29uc3QgZGVnID0gaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKTtcbiAgLy8gY29uc3QgY2Vsc2l1c1NwYW4gPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJiM4NDUxO1wiKTtcbiAgY29uc3QgY2Vsc2l1c1NwYW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wiQ1wiXSwgbnVsbCk7XG4gIC8vY2Vsc2l1c1NwYW4uY2xhc3NMaXN0LmFkZChcInRleHQtMnhsXCIsIFwiYWxpZ24tdG9wXCIsIFwiaW5saW5lLWJsb2NrXCIsIFwicHQtMlwiKTtcbiAgLy90ZW1wZXJhdHVyZSB2YWx1ZVxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDFcIixcbiAgICBbd2VhdGhlci50ZW1wLnRvRml4ZWQoMCksIGRlZywgY2Vsc2l1c1NwYW5dLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcInRlbXBlcmF0dXJlLXZhbHVlIHRleHQtNXhsIHNtOnRleHQtN3hsIHRleHQtcHVycGxlLTQwMCBtYi0xXCIsXG4gICAgfVxuICApO1xuXG4gIC8vbWF4aW11bSBhbmQgbWluaW11bSB0ZW1wZXJhdHVyZVxuICBjb25zdCBoaWdoID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJzcGFuXCIsXG4gICAgW1wiSDpcIiwgd2VhdGhlci5tYXhUZW1wLCBoZWxwZXIuc3BlY2lhbChcIiZkZWc7XCIpXSxcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IGxvdyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtcIkw6XCIsIHdlYXRoZXIubWluVGVtcCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgbnVsbFxuICApO1xuXG4gIGNvbnN0IG1pZCA9IGhlbHBlci5kZWdyZWVDaGFyYWN0ZXIoXCImbWlkO1wiKTtcbiAgbWlkLmNsYXNzTGlzdC5hZGQoXCJweC1bMXB4XVwiLCBcInRleHQtYmFzZVwiKTtcblxuICBjb25zdCBtaW5NYXggPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImg1XCIsIFtoaWdoLCBtaWQsIGxvd10sIHtcbiAgICBjbGFzczpcbiAgICAgIFwidGV4dC1zbSBmb250LWJhcmxvdyBzZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWluZGlnby0zMDBcIixcbiAgfSk7XG5cbiAgY29uc3QgdGVtcFdyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbdGVtcGVyYXR1cmUsIG1pbk1heF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwidGVtcC13cmFwcGVyIHctNC81IGZsZXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiLFxuICB9KTtcblxuICAvL2hlYWRlciByaWdodFxuICBjb25zdCBjaGVja2JveCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgbnVsbCwge1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICBpZDogXCJ0ZW1wLXRvZ2dsZXJcIixcbiAgICBjbGFzczogXCJjaGVja2JveCBoaWRkZW5cIixcbiAgfSk7XG4gIC8vbGFiZWxcbiAgY29uc3QgdG9nZ2xlT25JY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcInRvZ2dsZV9vblwiXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB0ZXh0LTJ4bCAgaGlkZGVuIHRvZ2dsZS1vbiB0cmFuc2l0aW9uLVtkaXNwbGF5XSBkdXJhdGlvbi03MDAgZWFzZS1pbiBcIixcbiAgfSk7XG5cbiAgY29uc3QgdG9nZ2xlT2ZmSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0b2dnbGVfb2ZmXCJdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHRleHQtMnhsIHRvZ2dsZS1vZmYgdHJhbnNpdGlvbi1bZGlzcGxheV0gZHVyYXRpb24tNzAwIGVhc2UtaW5cIixcbiAgfSk7XG4gIGNvbnN0IGxhYmVsID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBbdG9nZ2xlT2ZmSWNvbiwgdG9nZ2xlT25JY29uXSwge1xuICAgIGNsYXNzOiBcInRvZ2dsZXIgcHgtMSBmbGV4IHRleHQteHMgdGV4dC1pbmRpZ28tMzAwIGN1cnNvci1wb2ludGVyXCIsXG4gICAgZm9yOiBcInRlbXAtdG9nZ2xlclwiLFxuICB9KTtcblxuICBjb25zdCBmYWhyZW5oZWl0U3ltYm9sID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJzcGFuXCIsXG4gICAgW2hlbHBlci5zcGVjaWFsKFwiJmRlZztGXCIpXSxcbiAgICBudWxsXG4gICk7XG4gIGhlbHBlci5hZGRDbGFzcyhmYWhyZW5oZWl0U3ltYm9sLCBbXG4gICAgXCJhbGlnbi10ZXh0LWNlbnRlclwiLFxuICAgIFwiZmFocmVuaGVpdFwiLFxuICAgIFwidGV4dC1ncmF5LTUwMFwiLFxuICAgIFwidGV4dC1zbVwiLFxuICBdKTtcbiAgY29uc3QgY2Vsc2l1c1N5bWJvbCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtoZWxwZXIuc3BlY2lhbChcIiZkZWc7Q1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBoZWxwZXIuYWRkQ2xhc3MoY2Vsc2l1c1N5bWJvbCwgW1xuICAgIFwiYWxpZ24tdGV4dC1jZW50ZXJcIixcbiAgICBcImNlbHNpdXNcIixcbiAgICBcInRleHQtcHVycGxlLTQwMFwiLFxuICAgIFwidGV4dC1zbVwiLFxuICBdKTtcblxuICBjb25zdCB0b2dnbGVycyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW2NlbHNpdXNTeW1ib2wsIGNoZWNrYm94LCBsYWJlbCwgZmFocmVuaGVpdFN5bWJvbF0sXG4gICAge1xuICAgICAgY2xhc3M6IFwidG9nZ2xlcnMgZmxleCBpdGVtcy1jZW50ZXIgZm9udC1ha3NoYXIgZm9udC1zZW1pYm9sZFwiLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgdG9nZ2xlcnNXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW3RvZ2dsZXJzXSwge1xuICAgIGNsYXNzOiBcInRvZ2dsZXJzLXdyYXBwZXIgZmxleCBpdGVtcy1jZW50ZXIgc2VsZi1lbmQgbXQtYXV0b1wiLFxuICB9KTtcblxuICAvL3RlbXBlcmF0dXJlIGFuZCBtaW5tYXggd3JhcHBlclxuICBjb25zdCB3ZWF0aGVyUmlnaHQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFt0ZW1wV3JhcHBlciwgdG9nZ2xlcnNXcmFwcGVyXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJ3ZWF0aGVyLXJpZ2h0IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIsXG4gICAgfVxuICApO1xuXG4gIC8vd2VhdGhlclxuICBjb25zdCBkaXZNaWQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW10sIHtcbiAgICBjbGFzczogXCJ3LVsxcHhdIGJnLXNsYXRlLTYwMCBoLVs5NnB4XSBzZWxmLWNlbnRlciBqdXN0aWZ5LXNlbGYtZW5kXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHdlYXRoZXJXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbd2VhdGhlckxlZnQsIHdlYXRoZXJSaWdodF0sXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwid2VhdGhlci13cmFwcHBlciBncmlkIGdyaWQtY29scy1bMWZyXzFmcl0gZ3JpZC1yb3dzLTEgZ2FwLXgtMiB3LWZ1bGwgaC1mdWxsXCIsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKGhlYWRlclRvcCwgd2VhdGhlcldyYXBwZXIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiY2FyZC1oZWFkZXIgZ3JpZCBncmlkLXJvd3MtWzUwcHhfMWZyXSBncmlkLWNvbHMtMSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGJnLXNsYXRlLTgwMCBtYi0zIG10LTUgcHQtMiBweC00IHJvdW5kZWQtbGcgc2hhZG93LVtyZ2JhKDAsMCwwLDAuMTYpXzBweF8zcHhfNnB4LHJnYmEoMCwwLDAsMC4yMylfMHB4XzNweF82cHhdIGZvbnQtc2Fuc3Byb1wiLFxuICB9KTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJDYXJkSGVhZGVyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMC4yNCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIC1vLXRhYi1zaXplOiA0O1xcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbkVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG4uZml4ZWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4ucmVsYXRpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaW5zZXQtMCB7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBib3R0b206IDBweDtcXG4gIGxlZnQ6IDBweDtcXG59XFxuLmJvdHRvbS1cXFxcWzEwMHB4XFxcXF0ge1xcbiAgYm90dG9tOiAxMDBweDtcXG59XFxuLnotMTAge1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5teS01IHtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4ubXgtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLm1iLVxcXFxbNDBweFxcXFxdIHtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi5tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxufVxcbi5tdC0zIHtcXG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XFxufVxcbi5tci0xIHtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuLm1iLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ubWItMSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4ubXQtNSB7XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG4ubXQtMiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcbi5tdC1cXFxcWzYwcHhcXFxcXSB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG4ubWItMyB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4uLW10LTUge1xcbiAgbWFyZ2luLXRvcDogLTEuMjVyZW07XFxufVxcbi5tdC1hdXRvIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oLVxcXFxbOTBcXFxcJVxcXFxdIHtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG4uaC1mdWxsIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmgtXFxcXFsxMTBweFxcXFxdIHtcXG4gIGhlaWdodDogMTEwcHg7XFxufVxcbi5oLVxcXFxbOTZweFxcXFxdIHtcXG4gIGhlaWdodDogOTZweDtcXG59XFxuLm1pbi1oLVxcXFxbNTBweFxcXFxdIHtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcbi5taW4taC1zY3JlZW4ge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi53LTRcXFxcLzUge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLnctXFxcXFs5MFxcXFwlXFxcXF0ge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnctM1xcXFwvNSB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG4udy1cXFxcWzEyMHB4XFxcXF0ge1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG4udy1cXFxcWzExMHB4XFxcXF0ge1xcbiAgd2lkdGg6IDExMHB4O1xcbn1cXG4udy1cXFxcWzExNXB4XFxcXF0ge1xcbiAgd2lkdGg6IDExNXB4O1xcbn1cXG4udy1cXFxcWzFweFxcXFxdIHtcXG4gIHdpZHRoOiAxcHg7XFxufVxcbi5taW4tdy1cXFxcWzYwcHhcXFxcXSB7XFxuICBtaW4td2lkdGg6IDYwcHg7XFxufVxcbi5taW4tdy1cXFxcWzI0MnB4XFxcXF0ge1xcbiAgbWluLXdpZHRoOiAyNDJweDtcXG59XFxuLm1pbi13LVxcXFxbMjYwcHhcXFxcXSB7XFxuICBtaW4td2lkdGg6IDI2MHB4O1xcbn1cXG4ubWluLXctXFxcXFsyNzBweFxcXFxdIHtcXG4gIG1pbi13aWR0aDogMjcwcHg7XFxufVxcbi5taW4tdy1taW4ge1xcbiAgbWluLXdpZHRoOiAtd2Via2l0LW1pbi1jb250ZW50O1xcbiAgbWluLXdpZHRoOiAtbW96LW1pbi1jb250ZW50O1xcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuLm1heC13LVxcXFxbNDgwcHhcXFxcXSB7XFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcbn1cXG4ubWF4LXcteHMge1xcbiAgbWF4LXdpZHRoOiAyMHJlbTtcXG59XFxuLm1heC13LVxcXFxbOTYwcHhcXFxcXSB7XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbn1cXG4ubWF4LXctMnhsIHtcXG4gIG1heC13aWR0aDogNDJyZW07XFxufVxcbi5mbGV4LWF1dG8ge1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByZXZlYWwge1xcblxcbiAgZnJvbSB7XFxuICAgIHRvcDogLTkwMHB4O1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0b3A6IDBweDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByZXZlYWwge1xcblxcbiAgZnJvbSB7XFxuICAgIHRvcDogLTkwMHB4O1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0b3A6IDBweDtcXG4gIH1cXG59XFxuLmFuaW1hdGUtcmV2ZWFsIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByZXZlYWwgMXMgbGluZWFyIGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb246IHJldmVhbCAxcyBsaW5lYXIgZm9yd2FyZHM7XFxufVxcbi5jdXJzb3ItcG9pbnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ncmlkLWNvbHMtXFxcXFsxZnJfYXV0b1xcXFxdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxufVxcbi5ncmlkLWNvbHMtMSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLWNvbHMtMiB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLWNvbHMtXFxcXFsxZnJfMWZyXFxcXF0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG4uZ3JpZC1yb3dzLVxcXFxbYXV0b18xZnJfYXV0b1xcXFxdIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG59XFxuLmdyaWQtcm93cy0yIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWQtcm93cy0xIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWQtcm93cy1cXFxcWzUwcHhfMWZyXFxcXF0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG59XFxuLmZsZXgtcm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaXRlbXMtc3RhcnQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktc3RhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uanVzdGlmeS1hcm91bmQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5nYXAtXFxcXFsyMHB4XFxcXF0ge1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uZ2FwLXgtMyB7XFxuICAtbW96LWNvbHVtbi1nYXA6IDAuNzVyZW07XFxuICAgICAgIGNvbHVtbi1nYXA6IDAuNzVyZW07XFxufVxcbi5nYXAteC0yIHtcXG4gIC1tb3otY29sdW1uLWdhcDogMC41cmVtO1xcbiAgICAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxufVxcbi5zZWxmLXN0YXJ0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcbi5zZWxmLWVuZCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuLnNlbGYtY2VudGVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktc2VsZi1zdGFydCB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG4uanVzdGlmeS1zZWxmLWVuZCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuLm92ZXJmbG93LWhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucm91bmRlZC1tZCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG59XFxuLnJvdW5kZWQtZnVsbCB7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxufVxcbi5yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLnJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuLmJvcmRlci1cXFxcWzJweFxcXFxdIHtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbn1cXG4uYm9yZGVyLVxcXFxbMXB4XFxcXF0ge1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5ib3JkZXItMiB7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuLmJvcmRlci1sLTIge1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcXG59XFxuLmJvcmRlci1ncmF5LTUwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTA3IDExNCAxMjggLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLXNsYXRlLTQwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTQ4IDE2MyAxODQgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLWdyYXktNzAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYig1NSA2NSA4MSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItcGluay00MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI0NCAxMTQgMTgyIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1sLXNsYXRlLTYwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MSA4NSAxMDUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYmctcHVycGxlLTYwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3IDUxIDIzNCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYmctZ3JheS04MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctXFxcXFtyZ2JhXFxcXCgwXFxcXDJjIDBcXFxcMmMgMFxcXFwyYyAwXFxcXC41XFxcXClcXFxcXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxufVxcbi5iZy1zbGF0ZS05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1IDIzIDQyIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JheS03MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1IDY1IDgxIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JheS05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3IDI0IDM5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctc2xhdGUtODAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCA0MSA1OSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXNsYXRlLTYwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEgODUgMTA1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5weS0xIHtcXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XFxufVxcbi5weS1cXFxcWzNweFxcXFxdIHtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbn1cXG4ucHgtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuLnB4LTQge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLnB5LTYge1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxufVxcbi5weS1cXFxcWzFweFxcXFxdIHtcXG4gIHBhZGRpbmctdG9wOiAxcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbn1cXG4ucHgtMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG4ucHgtXFxcXFsxcHhcXFxcXSB7XFxuICBwYWRkaW5nLWxlZnQ6IDFweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcXG59XFxuLnB4LTEge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcXG59XFxuLnBsLTIge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcbi5wYi0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5wci1cXFxcWzFweFxcXFxdIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcXG59XFxuLnB0LVxcXFxbMTIwcHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxufVxcbi5wbC04IHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuLnB0LVxcXFxbMTAwcHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxufVxcbi5wdC0yIHtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcbi5wdC0zIHtcXG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcbn1cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGV4dC1qdXN0aWZ5IHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi5hbGlnbi10b3Age1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmFsaWduLW1pZGRsZSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uZm9udC1zYW5zcHJvIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2Ugc2FucyBwcm8sIHNhbnMtc2VyaWY7XFxufVxcbi5mb250LWJhcmxvdyB7XFxuICBmb250LWZhbWlseTogQmFybG93LCBzYW5zLXNlcmlmO1xcbn1cXG4uZm9udC1maXJhIHtcXG4gIGZvbnQtZmFtaWx5OiBGaXJhIHNhbnMsIHNhbnMtc2VyZmlmO1xcbn1cXG4uZm9udC1ha3NoYXIge1xcbiAgZm9udC1mYW1pbHk6IEFrc2hhciwgc2Fucy1zZXJpZjtcXG59XFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC1zbSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi50ZXh0LWJhc2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuLnRleHQteHMge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcbi50ZXh0LTR4bCB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG4udGV4dC0yeGwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuLnRleHQteGwge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi50ZXh0LTN4bCB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcbi50ZXh0LTV4bCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZm9udC1zZW1pYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZm9udC1tZWRpdW0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmZvbnQtbm9ybWFsIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mb250LWxpZ2h0IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi51cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmxlYWRpbmctbm9ybWFsIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi50cmFja2luZy10aWdodGVyIHtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNWVtO1xcbn1cXG4udHJhY2tpbmctd2lkZXN0IHtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG59XFxuLnRleHQtZ3JheS0zMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWdyYXktNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNTYgMTYzIDE3NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1zbGF0ZS00MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXNsYXRlLTMwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcHVycGxlLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTkyIDEzMiAyNTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEwNyAxMTQgMTI4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXBpbmstNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyNDQgMTE0IDE4MiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTIwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjI5IDIzMSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtaW5kaWdvLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTI5IDE0MCAyNDggLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtaW5kaWdvLTIwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTk5IDIxMCAyNTQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcGluay01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIzNiA3MiAxNTMgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtaW5kaWdvLTMwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTY1IDE4MCAyNTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnNoYWRvdy1cXFxcW3JnYmFcXFxcKDBcXFxcMmMgMFxcXFwyYyAwXFxcXDJjIDBcXFxcLjEyXFxcXClfMHB4XzFweF8zcHhcXFxcMmMgcmdiYVxcXFwoMFxcXFwyYyAwXFxcXDJjIDBcXFxcMmMgMFxcXFwuMjRcXFxcKV8wcHhfMXB4XzJweFxcXFxdIHtcXG4gIC0tdHctc2hhZG93OiByZ2JhKDAsMCwwLDAuMTIpIDBweCAxcHggM3B4LHJnYmEoMCwwLDAsMC4yNCkgMHB4IDFweCAycHg7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwcHggMXB4IDNweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwcHggMXB4IDJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLnNoYWRvdy1cXFxcW3JnYmFcXFxcKDYwXFxcXDJjIDY0XFxcXDJjIDY3XFxcXDJjIDBcXFxcLjNcXFxcKV8wcHhfMXB4XzJweF8wcHhcXFxcMmMgcmdiYVxcXFwoNjBcXFxcMmMgNjRcXFxcMmMgNjdcXFxcMmMgMFxcXFwuMTVcXFxcKV8wcHhfMnB4XzZweF8ycHhcXFxcXSB7XFxuICAtLXR3LXNoYWRvdzogcmdiYSg2MCw2NCw2NywwLjMpIDBweCAxcHggMnB4IDBweCxyZ2JhKDYwLDY0LDY3LDAuMTUpIDBweCAycHggNnB4IDJweDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDBweCAxcHggMnB4IDBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwcHggMnB4IDZweCAycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctXFxcXFtyZ2JhXFxcXCgwXFxcXDJjIDBcXFxcMmMgMFxcXFwyYyAwXFxcXC4xNlxcXFwpXzBweF8zcHhfNnB4XFxcXDJjIHJnYmFcXFxcKDBcXFxcMmMgMFxcXFwyYyAwXFxcXDJjIDBcXFxcLjIzXFxcXClfMHB4XzNweF82cHhcXFxcXSB7XFxuICAtLXR3LXNoYWRvdzogcmdiYSgwLDAsMCwwLjE2KSAwcHggM3B4IDZweCxyZ2JhKDAsMCwwLDAuMjMpIDBweCAzcHggNnB4O1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMHB4IDNweCA2cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMHB4IDNweCA2cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctc2t5LTUwMCB7XFxuICAtLXR3LXNoYWRvdy1jb2xvcjogIzBlYTVlOTtcXG4gIC0tdHctc2hhZG93OiB2YXIoLS10dy1zaGFkb3ctY29sb3JlZCk7XFxufVxcbi5vdXRsaW5lLW5vbmUge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuLnRyYW5zaXRpb24tYWxsIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcbi50cmFuc2l0aW9uIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXIsIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcbi50cmFuc2l0aW9uLVxcXFxbZGlzcGxheVxcXFxdIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGRpc3BsYXk7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG4uZHVyYXRpb24tMjAwIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbn1cXG4uZHVyYXRpb24tNzAwIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDcwMG1zO1xcbn1cXG4uZWFzZS1pbiB7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1zbTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1zbTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtc206OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWdyYXktMzAwOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMDkgMjEzIDIxOSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtZ3JheS0zMDA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMDkgMjEzIDIxOSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtZ3JheS0zMDA6OnBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMDkgMjEzIDIxOSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXMtd2l0aGluXFxcXDpib3JkZXItMjpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcbi5mb2N1cy13aXRoaW5cXFxcOmJvcmRlci1zbGF0ZS02MDA6Zm9jdXMtd2l0aGluIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYig3MSA4NSAxMDUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXMtd2l0aGluXFxcXDpiZy1ncmF5LTkwMDpmb2N1cy13aXRoaW4ge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3IDI0IDM5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnNjYWxlLTEyNTpob3ZlciB7XFxuICAtLXR3LXNjYWxlLXg6IDEuMjU7XFxuICAtLXR3LXNjYWxlLXk6IDEuMjU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxuLmhvdmVyXFxcXDpib3JkZXItcHVycGxlLTQwMDpob3ZlciB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTkyIDEzMiAyNTIgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOmJvcmRlci1wdXJwbGUtNTAwOmhvdmVyIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigxNjggODUgMjQ3IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDpib3JkZXItc2xhdGUtNDAwOmhvdmVyIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6dGV4dC1wdXJwbGUtNDAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxOTIgMTMyIDI1MiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtaW5kaWdvLTQwMDpob3ZlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTI5IDE0MCAyNDggLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDp0ZXh0LWluZGlnby0zMDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE2NSAxODAgMjUyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6dGV4dC1zbGF0ZS00MDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6Ym9yZGVyLXB1cnBsZS01MDA6Zm9jdXMge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE2OCA4NSAyNDcgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LXhzOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4uZm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LXhzOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuLmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC14czpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOmZvbnQtc2VtaWJvbGQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6Zm9udC1zZW1pYm9sZDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6Zm9udC1zZW1pYm9sZDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC1pbmRpZ28tMjAwOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxOTkgMjEwIDI1NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWluZGlnby0yMDA6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxOTkgMjEwIDI1NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWluZGlnby0yMDA6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxOTkgMjEwIDI1NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG5cXG4gIC5zbVxcXFw6bWItMyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOm1sLTgge1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6bWluLXctXFxcXFs4MHB4XFxcXF0ge1xcbiAgICBtaW4td2lkdGg6IDgwcHg7XFxuICB9XFxuXFxuICAuc21cXFxcOmZsZXgtMSB7XFxuICAgIGZsZXg6IDEgMSAwJTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6ZmxleC1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLnNtXFxcXDpqdXN0aWZ5LWVuZCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuc21cXFxcOmp1c3RpZnktY2VudGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc21cXFxcOmp1c3RpZnktYmV0d2VlbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6anVzdGlmeS1zZWxmLWVuZCB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpweS0yIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6cHQtMCB7XFxuICAgIHBhZGRpbmctdG9wOiAwcHg7XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtMnhsIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LWJhc2Uge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtc20ge1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC02eGwge1xcbiAgICBmb250LXNpemU6IDMuNzVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LTR4bCB7XFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC01eGwge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LTd4bCB7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtYmFzZTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtYmFzZTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWJhc2U6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpmb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtYmFzZTpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6Zm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWJhc2U6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpmb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtYmFzZTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6Zm9udC1zZW1pYm9sZDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuICAuc21cXFxcOmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6Zm9udC1zZW1pYm9sZDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpmb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOmZvbnQtc2VtaWJvbGQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLDROQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHlDQUFjO1VBQWQsaUNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztF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RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsOEJBQW1CO0VBQW5CLDJCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7O0VBQUE7SUFBQTtFQUFtQjs7RUFBbkI7SUFBQTtFQUFtQjtBQUFBO0FBQW5COztFQUFBO0lBQUE7RUFBbUI7O0VBQW5CO0lBQUE7RUFBbUI7QUFBQTtBQUFuQjtFQUFBLDRDQUFtQjtVQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHdCQUFtQjtPQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtPQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxnQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxnQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGVBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzRUFBbUI7RUFBbkIsMkZBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUZBQW1CO0VBQW5CLG1HQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNFQUFtQjtFQUFuQiwyRkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSwwQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw4QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx3QkFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsd0tBQW1CO0VBQW5CLHdKQUFtQjtFQUFuQixnTkFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsNEJBQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUZuQjtFQUFBLG9CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsb0JDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxvQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBO0NDQUE7QURBQTtFQUFBLHVCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsbUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxtQkNBQTtFREFBLG1CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsdUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSx1QkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHVCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSx1QkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsbUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxtQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBO0NDQUE7QURBQTtFQUFBO0NDQUE7QURBQTtFQUFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTs7RUFBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBLG9CQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQSxrQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxvQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxtQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxtQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxrQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7Q0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1wiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IGhlYWRlclNlY3Rpb24gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgbWFpblNlY3Rpb24gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IGZvb3RlclNlY3Rpb24gZnJvbSBcIi4vZm9vdGVyXCI7XG5cbmNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbmZyYWdtZW50LmFwcGVuZChoZWFkZXJTZWN0aW9uKCksIG1haW5TZWN0aW9uKCksIGZvb3RlclNlY3Rpb24oKSk7XG5jb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcFwiKTtcbmFwcC5hcHBlbmQoZnJhZ21lbnQpO1xuYXBwLmNsYXNzTGlzdC5hZGQoXG4gIFwiZ3JpZFwiLFxuICBcImdyaWQtcm93cy1bYXV0b18xZnJfYXV0b11cIixcbiAgXCJtaW4taC1zY3JlZW5cIixcbiAgXCJ3LWZ1bGxcIixcbiAgXCJmb250LXNhbnNwcm9cIlxuKTtcblxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFxuICBcImJnLWdyYXktOTAwXCIsXG4gIFwidGV4dC1ncmF5LTIwMFwiLFxuICBcIm1pbi1oLXNjcmVlblwiLFxuICBcInctZnVsbFwiXG4pO1xuXG5ldmVudHMoKTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJoZWxwZXIiLCJkZWZhdWx0TG9hY3Rpb25Gb3JtIiwiZm9ybVRpdGxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzIiwiZm9ybUhlYWRlciIsImxvY2F0aW9uSW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvY29tcGxldGUiLCJzYXZlQnRuIiwiY2FuY2VsQnRuIiwiZm9ybUJ0bnMiLCJmb3JtQm9keSIsImluZm9JY29uIiwiZm9ybUluZm8iLCJmb3JtRm9vdGVyIiwid3JhcHBlciIsImZvcm0iLCJvdmVybGF5Iiwic3R5bGVzIiwiY2FyZFN0eWxlcyIsImljb25zIiwiZm9vdGVySWNvbnMiLCJmbGV4Um93Q2VudGVyIiwiZmxleENvbENlbnRlciIsInRvZ2dsZXIiLCJ0b0ZhaHJlbmhlaXQiLCJjZWxzaXVzIiwiZmFocmVuaGVpdCIsImNvbnNvbGUiLCJsb2ciLCJ0b0ZpeGVkIiwidG9DZWxzaXVzIiwia2VsdmluVW5pdCIsInNldFRlbXBlcmF0dXJlVW5pdCIsImlzVG9nZ2xlZCIsIndlYXRoZXIiLCJ0ZW1wZXJhdHVyZUxhYmVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwidGVtcCIsImFwcGVuZCIsInNwZWNpYWwiLCJnZXREYXRhIiwic3RvcmUiLCJ3ZWF0aGVyQ2FyZCIsImRlZmF1bHREYXRhU3RvcmUiLCJkZWZhdWxQYWdlUmVuZGVyIiwiZGVmYXVsdExvY2F0aW9uRGF0YSIsImZyYWdtZW50IiwiRG9jdW1lbnRGcmFnbWVudCIsImNoZWNrRXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwiZGlzcGxheU9uRXJyb3IiLCJlcnIiLCJpc0xvYWRpbmciLCJzYWRGYWNlIiwic2FkRmFjZVNwYW4iLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiZGFzaE9uZSIsImRlZ3JlZUNoYXJhY3RlciIsImNsYXNzTGlzdCIsImFkZCIsImRhc2hUd28iLCJmaXhPbmUiLCJmaXhUd28iLCJmaXhTdWdnZXN0aW9uIiwiZXJyb3JXcmFwcGVyIiwib25FcnJvckRpdiIsIm1haW4iLCJ0cmFuZm9ybURhdGEiLCJ3ZWF0aGVyRGF0YSIsIm9uUGFnZUxvYWQiLCJpc0RlZmF1bHQiLCJnZXRMb2NhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImlucHV0IiwidmFsdWUiLCJkZWZhdWx0TG9jYXRpb24iLCJlbGVtZW50cyIsInNldExvY2F0aW9uIiwiY2FuY2VsRGVmYXVsdExvY2F0aW9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJtYWluRWxlbWVudCIsImNoZWNrZWQiLCJ0b2dnbGVyU3dpdGNoIiwidG9nZ2xlT24iLCJ0b2dnbGVPZmYiLCJmb2N1c0lucHV0IiwiY2FsbFRvQWN0aW9uQnRuIiwiZm9jdXMiLCJiYWNrVG9Ib21lIiwiYXBwTG9nbyIsImV2ZW50cyIsImxvYWRpbmciLCJjaXR5IiwiQVBJX0tFWSIsInVybCIsImZldGNoIiwianNvbiIsImZvb3RlclNlY3Rpb24iLCJnaXRodWIiLCJ0d2l0dGVyIiwibGlua2VkaW4iLCJnaXRodWJMaW5rIiwiaHJlZiIsInR3aXR0ZXJMaW5rIiwibGlua2VkaW5MaW5rIiwiaWNvbnNXcmFwcGVyIiwiY29weVJpZ2h0U3ltYm9sIiwiY29weVJpZ2h0IiwiZm9vdGVyIiwiaGVhZGVyU2VjdGlvbiIsImxvZ29EZWciLCJsb2dvIiwibmF2TGVmdCIsInNlYXJjaElucHV0Iiwic2VhcmNoSWNvbiIsInNlYXJjaEJ1dHRvbiIsIm5hdlJpZ2h0IiwibmF2IiwiaGVhZGVyIiwiYWRkQ2xhc3MiLCJlbGUiLCJjbGFzc2VzIiwiZm9yRWFjaCIsInRhZyIsIm5vZGUiLCJhdHRyaWJ1dGUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJzZXRBdHRyaWJ1dGUiLCJjaGFyIiwiZGVncmVlQ2hhciIsImNoYXJhY3RlciIsInJlY2hhciIsInRleHRDb250ZW50IiwiYWRkSWNvbiIsImtleXdvcmQiLCJzcGFuIiwiaW5pdGlhbFBhZ2VSZW5kZXIiLCJzZXRUaW1lT3V0IiwiY29udGVudERpdiIsInNlY3Rpb24iLCJsb2FkaW5nRGl2IiwibG9jYXRpb25LZXkiLCJkZWZhdWx0TG9jYXRpb25XZWF0aGVyRGF0YSIsImdldERhdGFGcm9tU3RvcmFnZSIsInJldHJpZXZlZFdlYXRoZXJEYXRhIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0RGF0YVRvU3RvcmFnZSIsInNldEl0ZW0iLCJzZXREYXRhIiwiZ2V0TG9jYXRpb25Gcm9tU3RvcmFnZSIsInJldHJpZXZlZExvY2F0aW9uIiwic2V0TG9jYXRpb25Ub1N0b3JhZ2UiLCJtYWluU2VjdGlvbiIsImRheXNPZldlZWsiLCJkYXkiLCJkYXlPZldlZWsiLCJkYXRlIiwidXNlclRpbWUiLCJ0aW1lWm9uZU9mZnNldCIsIkRhdGUiLCJsb2NhbFRpbWUiLCJnZXRUaW1lIiwibG9jYWxUaW1lT2Zmc2V0IiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ1dGNUaW1lIiwibG9jYXRpb25PZmZzZXQiLCJsb2NhdGlvblRpbWUiLCJyZW5kZXJVc2VyVGltZSIsImdldERheSIsImhvdXJBbmRNaW51dGVzIiwidG9Mb2NhbGVTdHJpbmciLCJob3VyIiwibWludXRlIiwiZGlzbGF5VGltZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsIndlYXRoZXJkZXNjIiwiZGVzY3JpcHRpb24iLCJtYXhUZW1wIiwidGVtcF9tYXgiLCJtaW5UZW1wIiwidGVtcF9taW4iLCJmZWVsc0xpa2UiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJwcmVzc3VyZSIsIndpbmQiLCJzcGVlZCIsImNvdW50cnkiLCJzeXMiLCJuYW1lIiwidGltZVpvbmUiLCJ0aW1lem9uZSIsInRpbWUiLCJkdCIsImljb24iLCJ3ZWF0aGVyQ2FyZENvbnRlbnQiLCJ3ZWF0aGVyQ2FyZEhlYWRlciIsImFydGljbGUiLCJmZWVsc0xpa2VJY29uIiwiZmVlbHNMaWtlRGl2IiwiaHVtaWRpdHlJY29uIiwiaHVtaWRpdHlEaXYiLCJ3aW5kSWNvbiIsIndpbmREaXYiLCJwcmVzc3VyZUljb24iLCJwcmVzc3VyZURpdiIsIm90aGVyV2VhdGhlckRldGFpbHMiLCJsb2NhdGlvbkljb24iLCJoZWFkZXJUb3AiLCJhcnJvdyIsIndlYXRoZXJJY29uIiwic3JjIiwiYWx0Iiwid2VhdGhlcmRlc2NyaXB0aW9uIiwid2VhdGhlckxlZnQiLCJkZWciLCJjZWxzaXVzU3BhbiIsInRlbXBlcmF0dXJlIiwiaGlnaCIsImxvdyIsIm1pZCIsIm1pbk1heCIsInRlbXBXcmFwcGVyIiwiY2hlY2tib3giLCJ0b2dnbGVPbkljb24iLCJ0b2dnbGVPZmZJY29uIiwibGFiZWwiLCJmb3IiLCJmYWhyZW5oZWl0U3ltYm9sIiwiY2Vsc2l1c1N5bWJvbCIsInRvZ2dsZXJzIiwidG9nZ2xlcnNXcmFwcGVyIiwid2VhdGhlclJpZ2h0IiwiZGl2TWlkIiwid2VhdGhlcldyYXBwZXIiLCJhcHAiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==