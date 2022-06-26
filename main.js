/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

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

"use strict";


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

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceStrict/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceStrict/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceStrict)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");






var MILLISECONDS_IN_MINUTE = 1000 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;
/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsStrict` to `formatDistanceStrict`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(2015, 0, 2),
 *     new Date(2014, 6, 2)
 *   ) //=> '6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(2014, 6, 2),
 *     new Date(2015, 0, 2)
 *   ) //=> '6 months'
 *   ```
 *
 * - `partialMethod` option is renamed to `roundingMethod`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { partialMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { roundingMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *   ```
 *
 * - If `roundingMethod` is not specified, it now defaults to `round` instead of `floor`.
 *
 * - `unit` option now accepts one of the strings:
 *   'second', 'minute', 'hour', 'day', 'month' or 'year' instead of 's', 'm', 'h', 'd', 'M' or 'Y'
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { unit: 'm' }
 *   )
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { unit: 'minute' }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'
 * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

function formatDistanceStrict(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  }

  var roundingMethod = options.roundingMethod == null ? 'round' : String(options.roundingMethod);
  var roundingMethodFn;

  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor;
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil;
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round;
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  }

  var milliseconds = dateRight.getTime() - dateLeft.getTime();
  var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateLeft); // Use DST-normalized difference in minutes for years, months and days;
  // use regular difference in minutes for hours, minutes and seconds.

  var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
  var unit;

  if (options.unit == null) {
    if (minutes < 1) {
      unit = 'second';
    } else if (minutes < 60) {
      unit = 'minute';
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour';
    } else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {
      unit = 'day';
    } else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {
      unit = 'month';
    } else {
      unit = 'year';
    }
  } else {
    unit = String(options.unit);
  } // 0 up to 60 seconds


  if (unit === 'second') {
    var seconds = roundingMethodFn(milliseconds / 1000);
    return locale.formatDistance('xSeconds', seconds, localizeOptions); // 1 up to 60 mins
  } else if (unit === 'minute') {
    var roundedMinutes = roundingMethodFn(minutes);
    return locale.formatDistance('xMinutes', roundedMinutes, localizeOptions); // 1 up to 24 hours
  } else if (unit === 'hour') {
    var hours = roundingMethodFn(minutes / 60);
    return locale.formatDistance('xHours', hours, localizeOptions); // 1 up to 30 days
  } else if (unit === 'day') {
    var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 up to 12 months
  } else if (unit === 'month') {
    var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
    return months === 12 && options.unit !== 'month' ? locale.formatDistance('xYears', 1, localizeOptions) : locale.formatDistance('xMonths', months, localizeOptions); // 1 year up to max Date
  } else if (unit === 'year') {
    var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
    return locale.formatDistance('xYears', years, localizeOptions);
  }

  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNowStrict)
/* harmony export */ });
/* harmony import */ var _formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistanceStrict/index.js */ "./node_modules/date-fns/esm/formatDistanceStrict/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNowStrict
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNowStrict(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNowStrict(
 *   new Date(2015, 0, 1, 0, 0, 15)
 * )
 * //=> '20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in 1 year'
 *
 * @example
 * // If today is 28 January 2015,
 * // what is the distance to 1 January 2015, in months, rounded up??
 * var result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNowStrict(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */

function formatDistanceToNowStrict(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}; // TODO: Remove String()

    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
//  Unique Hexatridecimal ID Generator
// ================================================
//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '';
var address = '';

if (false) { var i, networkInterfaces, mac, os; } //  Exports
// ================================================


module.exports = module.exports["default"] = function (prefix, suffix) {
  return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : '');
};

module.exports.process = function (prefix, suffix) {
  return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : '');
};

module.exports.time = function (prefix, suffix) {
  return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : '');
}; //  Helpers
// ================================================


function now() {
  var time = Date.now();
  var last = now.last || time;
  return now.last = time > last ? time : last + 1;
}

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ "./src/classes.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ "./src/helper.js");



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

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/helper.js");
/* harmony import */ var _data_favorites_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/favorites-data */ "./src/data/favorites-data.js");



const headerSection = () => {
  const fragment = new DocumentFragment();
  /******nav left section*****/

  const sunnyIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["wb_sunny"], {
    class: "material-icons-outlined text-pink-400 text-lg"
  });
  const logo = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", ["weda", sunnyIcon], {
    class: "app-logo font-barlow font-semibold text-gray-400 text-2xl shadow-sky-500 cursor-pointer flex"
  });
  const navLeft = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [logo], {
    class: "mb-2 py-[1px] logo-container pr-[10px]"
  });
  /******nav right section*********/

  /*
  nav-menu
  */

  const homeButton = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", ["home"], {
    class: "inline-block home-btn uppercase font-semibold text-gray-300 border-0 hover:text-indigo-300 focus:text-indigo-300 focus:border-b-2 focus:border-solid focus:border-indigo-300 py-1 sm:py-0 transiton duration-200 ease-in-out"
  });
  const favSpan = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", [`${_data_favorites_data__WEBPACK_IMPORTED_MODULE_1__["default"].favoritesData().length}`], {
    class: "favorite-count font-light rounded-full bg-indigo-400 h-[18px] w-[18px] bottom-[-10] flex justify-center item-center text-[10px] ml-[2px]"
  });
  const favoriteButton = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", ["favorite"], {
    class: "favorite-btn uppercase font-semibold text-gray-300 border-0 hover:text-indigo-300 focus:text-indigo-300 focus:border-b-2 focus:border-solid focus:border-indigo-300 py-1 sm:py-0 transiton duration-200 ease-in-out "
  });
  const favWrapper = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", [favoriteButton, favSpan], {
    class: "flex items-center"
  });
  const settingsButton = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", ["settings"], {
    class: "settings-btn uppercase font-semibold text-gray-300 border-0 hover:text-indigo-300 focus:text-indigo-300 focus:border-b-2 focus:border-solid focus:border-indigo-300 py-1 sm:py-0 transiton duration-200 ease-in-out"
  });
  const navMenu = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [homeButton, favWrapper, settingsButton], {
    class: "flex w-full justify-around items-end flex-1 max-w-[320px] text-xs sm:text-sm gap-x-3 "
  });
  /*
  search box
  */
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
    class: "location grid grid-cols-[1fr_auto] justify-center items-center w-[90%] min-w-[280px] max-w-xs rounded-full bg-gray-700 px-2 focus-within:bg-gray-900 focus-within:border-slate-600 focus-within:border-2 sm:justify-self-end shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px sm:flex-1]"
  }); //

  const navRight = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [navMenu, form], {
    class: "flex flex-col-reverse sm:flex-row justify-center items-center w-full sm:pb-2 sm:flex-2 sm:justify-end gap-y-1 sm:gap-x-4"
  });
  /*****nav element */

  const nav = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", [navLeft, navRight], {
    class: "nav flex flex-col justify-center items-center w-[90%] max-w-[1200px] sm:flex-row sm:justify-between gap-x-5 "
  });
  fragment.append(nav);
  const header = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("header", [fragment], {
    class: " px-2 sm:py-2 w-full flex justify-center bg-gray-800 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px]"
  });
  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerSection);

/***/ }),

/***/ "./src/components/home-components/configured-homepage.js":
/*!***************************************************************!*\
  !*** ./src/components/home-components/configured-homepage.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherCard_component_weatherCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weatherCard-component/weatherCard */ "./src/components/weatherCard-component/weatherCard.js");
/* harmony import */ var _states_home_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../states/home-state */ "./src/states/home-state.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper */ "./src/helper.js");




const configuredHomepage = weatherData => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const section = _helper__WEBPACK_IMPORTED_MODULE_2__.createElement("section", [(0,_weatherCard_component_weatherCard__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData)], {
    class: "default-index"
  }); // renderHomeState.setIsRenderingHome(true);

  main.append(section);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configuredHomepage);

/***/ }),

/***/ "./src/components/home-components/initial-homepage.js":
/*!************************************************************!*\
  !*** ./src/components/home-components/initial-homepage.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper */ "./src/helper.js");
/* harmony import */ var _set_default_location_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-default-location-form */ "./src/components/home-components/set-default-location-form.js");
/* harmony import */ var _data_default_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/default-location */ "./src/data/default-location.js");




function initialHomepage() {
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

  if (_data_default_location__WEBPACK_IMPORTED_MODULE_2__["default"].savedLocation() === null) {
    section.append((0,_set_default_location_form__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  return section;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialHomepage);

/***/ }),

/***/ "./src/components/home-components/render-searched-location.js":
/*!********************************************************************!*\
  !*** ./src/components/home-components/render-searched-location.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherCard_component_weatherCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weatherCard-component/weatherCard */ "./src/components/weatherCard-component/weatherCard.js");
 // import renderState from "./renderState";

function renderSearchedLocation(weather) {
  const main = document.querySelector("main");
  main.innerHTML = ""; // renderState.setIsRenderingDefault(false);

  main.append((0,_weatherCard_component_weatherCard__WEBPACK_IMPORTED_MODULE_0__["default"])(weather));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSearchedLocation);

/***/ }),

/***/ "./src/components/home-components/set-default-location-form.js":
/*!*********************************************************************!*\
  !*** ./src/components/home-components/set-default-location-form.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper */ "./src/helper.js");


function setDefaultLoactionForm() {
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
    class: "default-location-form bg-gray-800 border-[] relative bottom-[] rounded-md overflow-hidden shadow-[rgba(0,0,0,0.3)_0px_19px _38px,rgba(0,0,0,0.22)_0px_15px_12px] w-[90%] max-w-[480px] min-w-[260px] animate-reveal self-start"
  });
  const overlay = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [form], {
    class: "overlay close-modal fixed inset-0  z-10 bg-[rgba(0,0,0,0.5)] flex justify-center items-center px-4 min-w-[270px] pt-[120px]"
  });
  return overlay;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setDefaultLoactionForm);

/***/ }),

/***/ "./src/components/main-components/renderFavorites.js":
/*!***********************************************************!*\
  !*** ./src/components/main-components/renderFavorites.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper */ "./src/helper.js");
/* harmony import */ var _weatherCard_component_weatherCardTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weatherCard-component/weatherCardTop */ "./src/components/weatherCard-component/weatherCardTop.js");
/* harmony import */ var _data_favorites_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/favorites-data */ "./src/data/favorites-data.js");




function renderFavorite() {
  const main = document.querySelector("main");
  const favoritesArray = _data_favorites_data__WEBPACK_IMPORTED_MODULE_2__["default"].favoritesData();
  let fragment = new DocumentFragment();
  favoritesArray.forEach(favorite => {
    // const article = helper.createElement(
    //   "article",
    //   [weatherCardHeader(favorite)],
    //   {}
    // );
    const weathercard = (0,_weatherCard_component_weatherCardTop__WEBPACK_IMPORTED_MODULE_1__["default"])(favorite);
    fragment.append(weathercard);
  });
  const section = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("section", [fragment], {
    class: "flex flex-col"
  }); // console.log(fragment);

  main.innerHTML = "";
  main.append(section);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFavorite);

/***/ }),

/***/ "./src/components/main-components/renderHome.js":
/*!******************************************************!*\
  !*** ./src/components/main-components/renderHome.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_components_initial_homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home-components/initial-homepage.js */ "./src/components/home-components/initial-homepage.js");
/* harmony import */ var _home_components_configured_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home-components/configured-homepage */ "./src/components/home-components/configured-homepage.js");
/* harmony import */ var _data_default_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/default-location */ "./src/data/default-location.js");
/* harmony import */ var _data_default_location_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/default-location-data.js */ "./src/data/default-location-data.js");





const renderHome = () => {
  const fragment = new DocumentFragment();
  _data_default_location__WEBPACK_IMPORTED_MODULE_2__["default"].savedLocation() === null ? fragment.append((0,_home_components_initial_homepage_js__WEBPACK_IMPORTED_MODULE_0__["default"])()) : fragment.append((0,_home_components_configured_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])(_data_default_location_data_js__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLocationData()));
  return fragment;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/helper.js");


const main = () => {
  /*
  main element
  */
  const main = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("main", [], {
    class: "w-[90%] max-w-2xl flex flex-column justify-center items-center mx-auto bg-gray-900 relative"
  });
  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

/***/ }),

/***/ "./src/components/weatherCard-component/cardHeaderBottom.js":
/*!******************************************************************!*\
  !*** ./src/components/weatherCard-component/cardHeaderBottom.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper */ "./src/helper.js");
/* harmony import */ var _states_home_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../states/home-state */ "./src/states/home-state.js");
/* harmony import */ var _states_favorite_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../states/favorite-state */ "./src/states/favorite-state.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");





const cardHeaderBottom = (data, id) => {
  const timeSinceLastUpdate = data => {
    const refreshIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["refresh"], {
      class: " refresh-icon material-icons-outlined  text-pink-500 cursor-pointer hover:scale-110 hover:font-bold transiton-[scale] duration-200 ease-in"
    });
    const timeStamp = new Date(data).getTime();
    const lastWeatherUpdateTime = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", [`Updated: ${(0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(timeStamp)} ago`], {
      class: "update-time text-slate-400  text-[10px] sm:text-xs"
    });
    const timeSinceLastUpdateDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [lastWeatherUpdateTime, refreshIcon], {
      class: "flex"
    });
    return timeSinceLastUpdateDiv;
  };

  const addToFavorite = () => {
    /*add to favorite*/
    const favoriteIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["favorite"], {
      class: "material-icons-outlined text-pink-500 cursor-pointer text-sm pr-[3px]"
    });
    const addToFavoriteBTn = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("button", [favoriteIcon, "add to favorite"], {
      class: "favorite-btn flex items-cente text-sm"
    });
    const addToFavoriteDiv = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [addToFavoriteBTn], {
      class: "add-favorite flex items-center "
    });
    return addToFavoriteDiv;
  };

  const removeFromFavorite = () => {
    const removeIcon = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", ["remove_circle"], {
      class: "material-icons-outlined"
    });
    const removeFromFavoriteBtn = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("span", [removeIcon, "remove"], {
      id: `${id}`,
      data,
      class: "remove-favorite flex items-center"
    });
    return removeFromFavoriteBtn;
  };

  const headerBottomLeftFragment = new DocumentFragment();
  _states_home_state__WEBPACK_IMPORTED_MODULE_1__["default"].renderingHome() ? headerBottomLeftFragment.append(timeSinceLastUpdate(data)) : headerBottomLeftFragment.append(addToFavorite());
  const headerBottomLeft = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [headerBottomLeftFragment], null);
  const headerBottomRight = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", [removeFromFavorite()]); //

  const headerBottom = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _states_favorite_state__WEBPACK_IMPORTED_MODULE_2__["default"].renderingFavorite() ? [headerBottomLeft, headerBottomRight] : [headerBottomLeft], {
    class: `bottom-div`
  }); //

  console.log(_states_home_state__WEBPACK_IMPORTED_MODULE_1__["default"].renderingHome(), _states_favorite_state__WEBPACK_IMPORTED_MODULE_2__["default"].renderingFavorite());
  return headerBottom;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardHeaderBottom);

/***/ }),

/***/ "./src/components/weatherCard-component/render-weather-unit.js":
/*!*********************************************************************!*\
  !*** ./src/components/weatherCard-component/render-weather-unit.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function togglerSwitch(isToggled, target) {
  //const toggleOn = document.querySelector(".toggle-on");
  // const toggleOff = document.querySelector(".toggle-off");
  const toggleOff = target.nextElementSibling.children[0];
  const toggleOn = target.nextElementSibling.children[1];
  const celsius = target.previousElementSibling;
  const fahrenheit = target.nextElementSibling.nextElementSibling;
  console.log(fahrenheit);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglerSwitch);

/***/ }),

/***/ "./src/components/weatherCard-component/weatherCard.js":
/*!*************************************************************!*\
  !*** ./src/components/weatherCard-component/weatherCard.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper */ "./src/helper.js");
/* harmony import */ var _weatherCardBottom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherCardBottom */ "./src/components/weatherCard-component/weatherCardBottom.js");
/* harmony import */ var _weatherCardTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherCardTop */ "./src/components/weatherCard-component/weatherCardTop.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../loading */ "./src/loading.js");





const weatherCard = weather => {
  const fragment = new DocumentFragment();
  weather.forEach(item => {
    const article = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("section", [(0,_weatherCardTop__WEBPACK_IMPORTED_MODULE_2__["default"])(item), (0,_weatherCardBottom__WEBPACK_IMPORTED_MODULE_1__["default"])(item)], {
      class: "weather-card grid grid-cols-1 grid-rows-2 rounded h-full mt-3 mb-5 px-3"
    });
    fragment.append(article);
  });
  return fragment;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherCard);

/***/ }),

/***/ "./src/components/weatherCard-component/weatherCardBottom.js":
/*!*******************************************************************!*\
  !*** ./src/components/weatherCard-component/weatherCardBottom.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper */ "./src/helper.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes */ "./src/classes.js");



const weatherCardBottom = weather => {
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
  const humidity = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("p", [`Humidity: ${weather.humidity}%`], null);
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
  const otherWeatherDetails = _helper__WEBPACK_IMPORTED_MODULE_0__.createElement("article", [fragment], {
    class: "card-bottom bg-slate-800 grid grid-cols-2 grid-rows-2 gap-x-3 items-center justify-center px-4 py-2 font-fira text-sm rounded-lg shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] mb-3 "
  });
  return otherWeatherDetails;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherCardBottom);

/***/ }),

/***/ "./src/components/weatherCard-component/weatherCardTop.js":
/*!****************************************************************!*\
  !*** ./src/components/weatherCard-component/weatherCardTop.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes */ "./src/classes.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper */ "./src/helper.js");
/* harmony import */ var _timeAndDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../timeAndDate */ "./src/timeAndDate.js");
/* harmony import */ var _states_home_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../states/home-state */ "./src/states/home-state.js");
/* harmony import */ var _cardHeaderBottom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardHeaderBottom */ "./src/components/weatherCard-component/cardHeaderBottom.js");






const weatherCardTop = weather => {
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

  const deg = _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;");
  const celsiusSpan = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["C"], null); //temperature value

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
  const checkbox = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("input", null, {
    type: "checkbox",
    id: `${weather.id}`,
    class: "checkbox hidden"
  });
  /*try*/

  const toggleOnIcon = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["toggle_on"], {
    class: "material-icons-outlined text-2xl  hidden toggle-on transition-[display] duration-700 ease-in "
  });
  const toggleOffIcon = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", ["toggle_off"], {
    class: "material-icons-outlined text-2xl toggle-off transition-[display] duration-700 ease-in"
  });
  const label = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("label", [toggleOffIcon, toggleOnIcon], {
    class: "toggler px-1 flex text-xs text-indigo-300 cursor-pointer",
    for: `${weather.id}`
  });
  const fahrenheitSymbol = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [_helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;F")], null);
  _helper__WEBPACK_IMPORTED_MODULE_1__.addClass(fahrenheitSymbol, ["align-text-center", "fahrenheit", "text-gray-500", "text-sm"]);
  const celsiusSymbol = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("span", [_helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;C")], null);
  _helper__WEBPACK_IMPORTED_MODULE_1__.addClass(celsiusSymbol, ["align-text-center", "celsius", "text-purple-400", "text-sm"]);
  const togglers = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [celsiusSymbol, checkbox, label, fahrenheitSymbol], {
    class: "togglers flex items-center font-akshar font-semibold"
  });
  const togglersWrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [togglers], {
    class: "togglers-wrapper flex items-center self-center"
  });
  /*end of try*/

  const tempWrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [temperature, minMax, togglersWrapper], {
    class: "temp-wrapper w-4/5 flex-auto flex flex-col items-center justify-center"
  }); //temperature and minmax wrapper

  const weatherRight = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [tempWrapper], {
    class: "weather-right flex flex-col justify-center items-center"
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
  const usedClass = _states_home_state__WEBPACK_IMPORTED_MODULE_3__["default"].renderingHome() ? classOne : classTwo;
  /*
  const headerBottom = helper.createElement("div", [headerBottomFragment], {
    class: `${classOne}`,
  });
  */

  const weatherWrapper = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("div", [weatherLeft, weatherRight], {
    class: "weather-wrappper grid grid-cols-[1fr_1fr] grid-rows-1 gap-x-2 w-full h-full"
  });
  const fragment = new DocumentFragment();
  fragment.append(headerTop, weatherWrapper, (0,_cardHeaderBottom__WEBPACK_IMPORTED_MODULE_4__["default"])(weather.time, weather.id));
  const defaultClass = "card-header grid grid-rows-[50px_1fr_50px] grid-cols-1 justify-center items-center w-full bg-slate-800 mb-3 mt-5 pt-2 px-4 rounded-lg shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] font-sanspro";
  const header = _helper__WEBPACK_IMPORTED_MODULE_1__.createElement("article", [fragment], {
    class: `${defaultClass}`,
    id: `weather-card-${weather.id}`
  });
  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherCardTop);

/***/ }),

/***/ "./src/data/data-controller.js":
/*!*************************************!*\
  !*** ./src/data/data-controller.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _states_home_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/home-state */ "./src/states/home-state.js");
/* harmony import */ var _states_favorite_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states/favorite-state */ "./src/states/favorite-state.js");
/* harmony import */ var _favorites_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorites-data */ "./src/data/favorites-data.js");
/* harmony import */ var _default_location_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-location-data */ "./src/data/default-location-data.js");





function dataController(weatherData) {
  const homeViewData = _states_home_state__WEBPACK_IMPORTED_MODULE_0__["default"].renderingHome() ? _default_location_data__WEBPACK_IMPORTED_MODULE_3__["default"].defaultLocationData() : weatherData;
  weatherData = _states_favorite_state__WEBPACK_IMPORTED_MODULE_1__["default"].renderingFavorite() ? _favorites_data__WEBPACK_IMPORTED_MODULE_2__["default"].favoritesData() : homeViewData;
  console.log(weatherData);
  return weatherData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataController);

/***/ }),

/***/ "./src/data/default-location-data.js":
/*!*******************************************!*\
  !*** ./src/data/default-location-data.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const defaultDataStore = (() => {
  const locationKey = "defaultLocationWeatherData";
  let defaultLocationWeatherData = getDataFromStorage();
  let isDefaultRequest = null;

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
  };

  const clearDefaultData = () => {
    defaultLocationWeatherData = null;
    setDataToStorage();
  };

  const defaultRequestState = () => {
    isDefaultRequest = defaultLocationWeatherData === null ? true : false;
    return isDefaultRequest;
  };

  const defaultLocationData = () => {
    return defaultLocationWeatherData;
  };

  return {
    setData,
    defaultLocationData,
    clearDefaultData,
    defaultRequestState
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultDataStore);

/***/ }),

/***/ "./src/data/default-location.js":
/*!**************************************!*\
  !*** ./src/data/default-location.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const defaultLocation = (() => {
  const locationKey = "defaultLocation";
  let location = getLocationFromStorage();

  function getLocationFromStorage() {
    const retrievedLocation = localStorage.getItem(locationKey) || null;
    console.log(retrievedLocation);
    return retrievedLocation;
  }

  function setLocationToStorage() {
    localStorage.setItem(locationKey, location);
  }

  const setLocation = selectedLocation => {
    if (location !== null) {
      return;
    }

    location = selectedLocation;
    setLocationToStorage();
    console.log(location);
  };

  const savedLocation = () => {
    return location;
  };

  return {
    setLocation,
    savedLocation
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultLocation);

/***/ }),

/***/ "./src/data/favorites-data.js":
/*!************************************!*\
  !*** ./src/data/favorites-data.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const favorites = (() => {
  const favoriteKey = "favorite";
  let favoriteLocations = getFavoritesFromStorage();

  function getFavoritesFromStorage() {
    const retrievedFavorites = JSON.parse(localStorage.getItem(favoriteKey)) || [];
    console.log(retrievedFavorites);
    return retrievedFavorites;
  }

  function setFavoritesToStorage() {
    localStorage.setItem(favoriteKey, JSON.stringify(favoriteLocations));
  }

  const addFavorite = favorite => {
    const [obj] = favorite;
    console.log(favorite);
    console.log(obj);
    favoriteLocations = [...favoriteLocations, obj];
    setFavoritesToStorage();
    console.log(favoriteLocations);
  };

  const deleteFavorite = id => {
    const newFavorites = favoriteLocations.filter(favorite => favorite.id !== id);
    favoriteLocations = newFavorites;
    setFavoritesToStorage();
  };
  /*
  const clearDefaultData = () => {
    favoriteLocations = [];
    setDataToStorage();
  };
  */


  const updateFavorites = newFavorites => {
    const updatedArray = favoriteLocations.map(favorite => favorite.city === newFavorites.city ? favorite = { ...newFavorites
    } : favorite);
    favoriteLocations = updatedArray;
    console.log("i updated");
    console.log(favoriteLocations);
  };
  /*
  const defaultRequestState = () => {
    isDefaultRequest = defaultLocationWeatherData === null ? true : false;
    return isDefaultRequest;
  };
  */


  const favoritesData = () => {
    return favoriteLocations;
  };

  return {
    addFavorite,
    deleteFavorite,
    favoritesData,
    updateFavorites // defaultRequestState,

  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (favorites);

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  });
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.append(onErrorDiv);
  isLoading = false;
  console.log(isLoading);
  console.log(err);
  return main;
}

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toggle_weather_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-weather-unit */ "./src/toggle-weather-unit.js");
/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data */ "./src/fetch-data.js");
/* harmony import */ var _transorm_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transorm-data */ "./src/transorm-data.js");
/* harmony import */ var _data_default_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/default-location */ "./src/data/default-location.js");
/* harmony import */ var _components_weatherCard_component_render_weather_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/weatherCard-component/render-weather-unit */ "./src/components/weatherCard-component/render-weather-unit.js");
/* harmony import */ var _data_default_location_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/default-location-data */ "./src/data/default-location-data.js");
/* harmony import */ var _states_home_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states/home-state */ "./src/states/home-state.js");
/* harmony import */ var _data_favorites_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/favorites-data */ "./src/data/favorites-data.js");
/* harmony import */ var _states_favorite_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./states/favorite-state */ "./src/states/favorite-state.js");
/* harmony import */ var _components_main_components_renderFavorites__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main-components/renderFavorites */ "./src/components/main-components/renderFavorites.js");
/* harmony import */ var _data_data_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/data-controller */ "./src/data/data-controller.js");
/* harmony import */ var _components_main_components_renderHome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main-components/renderHome */ "./src/components/main-components/renderHome.js");
/* harmony import */ var _states_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./states/state */ "./src/states/state.js");












 //get location from user input on form

function setCurrentLocation() {
  const form = document.querySelector(".location");
  const input = form.elements["search-input"];
  form.addEventListener("submit", e => {
    e.preventDefault();
    const location = input.value;
    _states_state__WEBPACK_IMPORTED_MODULE_12__["default"].searchOutput(); // renderHomeState.setIsRenderingHome(false);
    // renderFavoriteState.setIsRenderingFavorite(false);

    _states_state__WEBPACK_IMPORTED_MODULE_12__["default"].searchOutput();
    (0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__["default"])(location);
    input.value = "";
  });
}

function setDefaultLocation() {
  const form = document.querySelector(".default-location-form");

  if (form) {
    const input = form.elements["default-location-input"];
    form.addEventListener("submit", e => {
      e.preventDefault();
      const location = input.value;
      _states_home_state__WEBPACK_IMPORTED_MODULE_6__["default"].setIsRenderingDefault(true);
      (0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__["default"])(location);
      input.value = "";
    });
  }
}

function closeDefaultLocationModal() {
  const overlay = document.querySelector(".overlay");

  if (overlay) {
    overlay.addEventListener("click", e => {
      const target = e.target;

      if (target.classList.contains("close-modal")) {
        overlay.remove();
      }
    });
  }
} //update default location weather data


const updateDefaultLocationWeatherData = () => {
  const main = document.querySelector("main");
  main.addEventListener("click", e => {
    const target = e.target;

    if (!target.classList.contains("refresh-icon")) {
      return;
    }

    const location = _data_default_location__WEBPACK_IMPORTED_MODULE_3__["default"].savedLocation();

    if (_states_state__WEBPACK_IMPORTED_MODULE_12__["default"].isTruthy()) {
      let location = null;
      const favoritesArray = _data_favorites_data__WEBPACK_IMPORTED_MODULE_7__["default"].favoritesData();
      const id = target.closest(".bottom-div").parentElement.id.split("-")[2];
      favoritesArray.forEach(i => {
        if (i.id === id) location = i.city;
      });
      console.log(location);
      (0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__["default"])(location);
      return;
    } // renderState.setIsRenderingDefault(true);


    (0,_fetch_data__WEBPACK_IMPORTED_MODULE_1__["default"])(location);
  });
}; //toggle check box to switch between temperature states


const toggler = () => {
  const mainElement = document.querySelector("main");
  mainElement.addEventListener("change", e => {
    const target = e.target;

    if (!target.classList.contains("checkbox")) {
      return;
    }

    const h1 = target.parentElement.parentElement.parentElement.firstElementChild;
    console.log(target);
    console.log(h1);
    const id = target.id;
    console.log(id);
    const isToggled = target.checked;
    const data = (0,_data_data_controller__WEBPACK_IMPORTED_MODULE_10__["default"])(_transorm_data__WEBPACK_IMPORTED_MODULE_2__.weatherData);
    console.log(data);
    let index = null;
    data.forEach((item, i) => {
      if (item.id === id) {
        console.log(i);
        index = i;
      }

      return index;
    });
    (0,_toggle_weather_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(isToggled, data[index], h1);
    (0,_components_weatherCard_component_render_weather_unit__WEBPACK_IMPORTED_MODULE_4__["default"])(isToggled, target);
  });
};

const focusInput = () => {
  const form = document.querySelector(".location input");
  const callToActionBtn = document.querySelector(".call-to-action");

  if (callToActionBtn) {
    callToActionBtn.addEventListener("click", e => {
      form.focus();
    });
  }
}; //home


const backToHome = () => {
  const navElement = document.querySelector(".nav");
  const mainElement = document.querySelector("main");
  navElement.addEventListener("click", e => {
    const target = e.target;

    if (target.classList.contains("app-logo") || target.classList.contains("home-btn")) {
      // renderFavoriteState.setIsRenderingFavorite(false);
      _states_state__WEBPACK_IMPORTED_MODULE_12__["default"].home();
      console.log(_states_favorite_state__WEBPACK_IMPORTED_MODULE_8__["default"].renderingFavorite());
      console.log(_states_home_state__WEBPACK_IMPORTED_MODULE_6__["default"].renderingHome()); // mainElement.innerHTML = "";

      (0,_components_main_components_renderHome__WEBPACK_IMPORTED_MODULE_11__["default"])();
      events();
    }
  });
};

const addToFavorite = () => {
  const main = document.querySelector("main");
  const favoriteCount = document.querySelector(".favorite-count");
  main.addEventListener("click", e => {
    const target = e.target;

    if (!target.classList.contains("favorite-btn")) {
      return;
    }

    _data_favorites_data__WEBPACK_IMPORTED_MODULE_7__["default"].addFavorite(_transorm_data__WEBPACK_IMPORTED_MODULE_2__.weatherData);
    favoriteCount.textContent = `${_data_favorites_data__WEBPACK_IMPORTED_MODULE_7__["default"].favoritesData().length}`; //move to helper funtions
  });
};

const deletefavorite = () => {
  const main = document.querySelector("main");
  const favoriteCount = document.querySelector(".favorite-count");
  main.addEventListener("click", e => {
    const target = e.target;

    if (!target.classList.contains("remove-favorite")) {
      return;
    }

    const id = target.id;
    console.log(id);
    _data_favorites_data__WEBPACK_IMPORTED_MODULE_7__["default"].deleteFavorite(id);
    favoriteCount.textContent = `${_data_favorites_data__WEBPACK_IMPORTED_MODULE_7__["default"].favoritesData().length}`;
    (0,_components_main_components_renderFavorites__WEBPACK_IMPORTED_MODULE_9__["default"])();
  });
};

const fav = () => {
  const favBtn = document.querySelector(".favorite-btn");
  favBtn.addEventListener("click", e => {
    _states_state__WEBPACK_IMPORTED_MODULE_12__["default"].favorites();
    (0,_components_main_components_renderFavorites__WEBPACK_IMPORTED_MODULE_9__["default"])();
  });
}; //initialize events


const events = () => {
  setCurrentLocation();
  setDefaultLocation();
  closeDefaultLocationModal();
  updateDefaultLocationWeatherData();
  toggler();
  focusInput();
  backToHome();
  addToFavorite();
  deletefavorite();
  fav();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

/***/ }),

/***/ "./src/fetch-data.js":
/*!***************************!*\
  !*** ./src/fetch-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transorm_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transorm-data */ "./src/transorm-data.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading */ "./src/loading.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./src/error.js");



let isLoading = true;

const getData = async city => {
  console.log(city);

  try {
    const API_KEY = "3ceb8852b9b6a1fd8a8191af7243397f";
    (0,_loading__WEBPACK_IMPORTED_MODULE_1__["default"])(isLoading);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    (0,_error__WEBPACK_IMPORTED_MODULE_2__.checkError)(response);
    isLoading = false;
    const data = await response.json();
    (0,_transorm_data__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    console.log(data); // return data;
  } catch (err) {
    (0,_error__WEBPACK_IMPORTED_MODULE_2__.displayOnError)(err, isLoading);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/others.js":
/*!***********************!*\
  !*** ./src/others.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_default_location_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/default-location-data */ "./src/data/default-location-data.js");
/* harmony import */ var _states_home_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/home-state */ "./src/states/home-state.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");




function autoUpdateTime() {
  const updateTime = document.querySelector(".update-time");
  const weather = _data_default_location_data__WEBPACK_IMPORTED_MODULE_0__["default"].defaultLocationData();
  const timeSnap = new Date(weather[0].time).getTime();

  if (updateTime) {
    updateTime.textContent = `updated: ${(0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(timeSnap)} ago`;
  }

  console.log(updateTime.textContent);
}

function setTimeOut() {
  const timer = 300000;
  setInterval(() => {
    autoUpdateTime();
  }, timer);
}

function initialize() {
  setTimeOut();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);

/***/ }),

/***/ "./src/routing/page-load-routes.js":
/*!*****************************************!*\
  !*** ./src/routing/page-load-routes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_main_components_renderHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/main-components/renderHome */ "./src/components/main-components/renderHome.js");
/* harmony import */ var _components_main_components_renderFavorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main-components/renderFavorites */ "./src/components/main-components/renderFavorites.js");




const initialPageLoad = () => {
  const url = window.location.pathname;
  console.log(url);
  if (url === "/dist/index.html") (0,_components_main_components_renderHome__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);

/***/ }),

/***/ "./src/states/favorite-state.js":
/*!**************************************!*\
  !*** ./src/states/favorite-state.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderFavoriteState = (() => {
  let isRenderingFavorite = false;

  const setIsRenderingFavorite = newState => {
    isRenderingFavorite = newState;
    return isRenderingFavorite;
  };

  const renderingFavorite = () => {
    return isRenderingFavorite;
  };

  console.log(isRenderingFavorite);
  return {
    setIsRenderingFavorite,
    renderingFavorite
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFavoriteState);

/***/ }),

/***/ "./src/states/home-state.js":
/*!**********************************!*\
  !*** ./src/states/home-state.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderHomeState = (() => {
  let isRenderingHome = true;

  const setIsRenderingHome = newState => {
    isRenderingHome = newState;
    return isRenderingHome;
  };

  const renderingHome = () => {
    return isRenderingHome;
  };

  return {
    setIsRenderingHome,
    renderingHome
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomeState);

/***/ }),

/***/ "./src/states/state.js":
/*!*****************************!*\
  !*** ./src/states/state.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _favorite_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-state */ "./src/states/favorite-state.js");
/* harmony import */ var _home_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-state */ "./src/states/home-state.js");



const renderingState = (() => {
  const home = () => {
    _favorite_state__WEBPACK_IMPORTED_MODULE_0__["default"].setIsRenderingFavorite(false);
    _home_state__WEBPACK_IMPORTED_MODULE_1__["default"].setIsRenderingHome(true);
  };

  const favorites = () => {
    _favorite_state__WEBPACK_IMPORTED_MODULE_0__["default"].setIsRenderingFavorite(true);
    _home_state__WEBPACK_IMPORTED_MODULE_1__["default"].setIsRenderingHome(true);
  };

  const searchOutput = () => {
    _favorite_state__WEBPACK_IMPORTED_MODULE_0__["default"].setIsRenderingFavorite(false);
    _home_state__WEBPACK_IMPORTED_MODULE_1__["default"].setIsRenderingHome(false);
  };

  const isTruthy = () => {
    let state = _home_state__WEBPACK_IMPORTED_MODULE_1__["default"].renderingHome() && _favorite_state__WEBPACK_IMPORTED_MODULE_0__["default"].renderingFavorite() ? true : false;
    return state;
  };

  return {
    home,
    favorites,
    searchOutput,
    isTruthy
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderingState);

/***/ }),

/***/ "./src/timeAndDate.js":
/*!****************************!*\
  !*** ./src/timeAndDate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "userTime": () => (/* binding */ userTime)
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

/***/ "./src/toggle-weather-unit.js":
/*!************************************!*\
  !*** ./src/toggle-weather-unit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

const setTemperatureUnit = (isToggled, weather, target) => {
  //const temperatureLabel = document.querySelector(".temperature-value");
  // temperatureLabel.innerHTML = "";
  if (target) {
    target.innerHTML = "";
    const temp = isToggled ? toFahrenheit(weather.temp.toFixed(0)) : weather.temp.toFixed(0);
    target.append(temp, isToggled ? _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;F") : _helper__WEBPACK_IMPORTED_MODULE_1__.special("&deg;C"));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTemperatureUnit);

/***/ }),

/***/ "./src/transorm-data.js":
/*!******************************!*\
  !*** ./src/transorm-data.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "weatherData": () => (/* binding */ weatherData)
/* harmony export */ });
/* harmony import */ var _data_favorites_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/favorites-data */ "./src/data/favorites-data.js");
/* harmony import */ var _data_default_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/default-location */ "./src/data/default-location.js");
/* harmony import */ var _data_default_location_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/default-location-data */ "./src/data/default-location-data.js");
/* harmony import */ var _components_home_components_render_searched_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-components/render-searched-location */ "./src/components/home-components/render-searched-location.js");
/* harmony import */ var _states_home_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states/home-state */ "./src/states/home-state.js");
/* harmony import */ var _timeAndDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeAndDate */ "./src/timeAndDate.js");
/* harmony import */ var _states_favorite_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states/favorite-state */ "./src/states/favorite-state.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_main_components_renderFavorites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main-components/renderFavorites */ "./src/components/main-components/renderFavorites.js");
/* harmony import */ var _components_home_components_configured_homepage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-components/configured-homepage */ "./src/components/home-components/configured-homepage.js");
// import weatherCard from "./weatherCard";










let weatherData = null; //import { isDefault } from "./events";

const tranformData = data => {
  weatherData = [{
    id: uniqid__WEBPACK_IMPORTED_MODULE_7___default().process(),
    weather: data.weather[0].main,
    weatherdesc: data.weather[0].description,
    temp: data.main.temp,
    maxTemp: Math.round(data.main.temp_max.toFixed(1)),
    minTemp: Math.round(data.main.temp_min.toFixed(1)),
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    wind: data.wind.speed,
    country: data.sys.country,
    city: data.name,
    timeZone: data.timezone,
    time: (0,_timeAndDate__WEBPACK_IMPORTED_MODULE_5__.userTime)(data.timezone),
    //time: data.dt,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }];
  console.log("hang");

  if (_states_home_state__WEBPACK_IMPORTED_MODULE_4__["default"].renderingHome() && _states_favorite_state__WEBPACK_IMPORTED_MODULE_6__["default"].renderingFavorite()) {
    console.log(weatherData);
    _data_favorites_data__WEBPACK_IMPORTED_MODULE_0__["default"].updateFavorites(weatherData);
    console.log("bla!");
    (0,_components_main_components_renderFavorites__WEBPACK_IMPORTED_MODULE_8__["default"])(_data_favorites_data__WEBPACK_IMPORTED_MODULE_0__["default"].favoritesData());
    return;
  }

  console.log(weatherData); // console.log(renderState.currentState() && !favoriteState);

  if (_states_home_state__WEBPACK_IMPORTED_MODULE_4__["default"].renderingHome() && !_states_favorite_state__WEBPACK_IMPORTED_MODULE_6__["default"].renderingFavorite()) {
    _data_default_location_data__WEBPACK_IMPORTED_MODULE_2__["default"].setData(weatherData);
    _data_default_location__WEBPACK_IMPORTED_MODULE_1__["default"].setLocation(weatherData[0].city);
    console.log("i ran");
    (0,_components_home_components_configured_homepage__WEBPACK_IMPORTED_MODULE_9__["default"])(_data_default_location_data__WEBPACK_IMPORTED_MODULE_2__["default"].defaultLocationData());
    return;
  }

  console.log(_data_default_location_data__WEBPACK_IMPORTED_MODULE_2__["default"].defaultRequestState());
  (0,_components_home_components_render_searched_location__WEBPACK_IMPORTED_MODULE_3__["default"])(weatherData);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tranformData);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.fixed {\n  position: fixed;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.bottom-\\[-10\\] {\n  bottom: -10;\n}\n.bottom-\\[\\] {\n  bottom: ;\n}\n.z-10 {\n  z-index: 10;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.ml-\\[2px\\] {\n  margin-left: 2px;\n}\n.mt-\\[60px\\] {\n  margin-top: 60px;\n}\n.mb-\\[40px\\] {\n  margin-bottom: 40px;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.-mt-5 {\n  margin-top: -1.25rem;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-\\[90\\%\\] {\n  height: 90%;\n}\n.h-full {\n  height: 100%;\n}\n.h-\\[18px\\] {\n  height: 18px;\n}\n.h-\\[110px\\] {\n  height: 110px;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.min-h-\\[50px\\] {\n  min-height: 50px;\n}\n.w-full {\n  width: 100%;\n}\n.w-3\\/5 {\n  width: 60%;\n}\n.w-\\[18px\\] {\n  width: 18px;\n}\n.w-\\[90\\%\\] {\n  width: 90%;\n}\n.w-\\[120px\\] {\n  width: 120px;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.w-\\[110px\\] {\n  width: 110px;\n}\n.w-\\[115px\\] {\n  width: 115px;\n}\n.min-w-min {\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n.min-w-\\[280px\\] {\n  min-width: 280px;\n}\n.min-w-\\[60px\\] {\n  min-width: 60px;\n}\n.min-w-\\[242px\\] {\n  min-width: 242px;\n}\n.min-w-\\[260px\\] {\n  min-width: 260px;\n}\n.min-w-\\[270px\\] {\n  min-width: 270px;\n}\n.max-w-\\[480px\\] {\n  max-width: 480px;\n}\n.max-w-\\[320px\\] {\n  max-width: 320px;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.max-w-\\[1200px\\] {\n  max-width: 1200px;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-auto {\n  flex: 1 1 auto;\n}\n@-webkit-keyframes reveal {\n\n  from {\n    top: -900px;\n  }\n\n  to {\n    top: 0px;\n  }\n}\n@keyframes reveal {\n\n  from {\n    top: -900px;\n  }\n\n  to {\n    top: 0px;\n  }\n}\n.animate-reveal {\n  -webkit-animation: reveal 1s linear forwards;\n          animation: reveal 1s linear forwards;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.grid-cols-\\[1fr_auto\\] {\n  grid-template-columns: 1fr auto;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-\\[1fr_1fr\\] {\n  grid-template-columns: 1fr 1fr;\n}\n.grid-rows-\\[auto_1fr_auto\\] {\n  grid-template-rows: auto 1fr auto;\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-1 {\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n}\n.grid-rows-\\[50px_1fr_50px\\] {\n  grid-template-rows: 50px 1fr 50px;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.gap-\\[20px\\] {\n  gap: 20px;\n}\n.gap-x-3 {\n  -moz-column-gap: 0.75rem;\n       column-gap: 0.75rem;\n}\n.gap-y-1 {\n  row-gap: 0.25rem;\n}\n.gap-x-5 {\n  -moz-column-gap: 1.25rem;\n       column-gap: 1.25rem;\n}\n.gap-x-2 {\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n}\n.self-start {\n  align-self: flex-start;\n}\n.self-center {\n  align-self: center;\n}\n.justify-self-start {\n  justify-self: start;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.border-\\[1px\\] {\n  border-width: 1px;\n}\n.border-0 {\n  border-width: 0px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-\\[2px\\] {\n  border-width: 2px;\n}\n.border-l-2 {\n  border-left-width: 2px;\n}\n.border-slate-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(148 163 184 / var(--tw-border-opacity));\n}\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n}\n.border-pink-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(244 114 182 / var(--tw-border-opacity));\n}\n.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\n.border-l-slate-600 {\n  --tw-border-opacity: 1;\n  border-left-color: rgb(71 85 105 / var(--tw-border-opacity));\n}\n.bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n.bg-indigo-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(129 140 248 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.bg-purple-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(147 51 234 / var(--tw-bg-opacity));\n}\n.bg-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.5\\)\\] {\n  background-color: rgba(0,0,0,0.5);\n}\n.bg-slate-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-\\[1px\\] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-\\[3px\\] {\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n.px-\\[1px\\] {\n  padding-left: 1px;\n  padding-right: 1px;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.pr-\\[1px\\] {\n  padding-right: 1px;\n}\n.pt-\\[120px\\] {\n  padding-top: 120px;\n}\n.pr-\\[10px\\] {\n  padding-right: 10px;\n}\n.pl-8 {\n  padding-left: 2rem;\n}\n.pt-\\[100px\\] {\n  padding-top: 100px;\n}\n.pl-2 {\n  padding-left: 0.5rem;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.pr-\\[3px\\] {\n  padding-right: 3px;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.pt-3 {\n  padding-top: 0.75rem;\n}\n.pr-1 {\n  padding-right: 0.25rem;\n}\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.font-sanspro {\n  font-family: source sans pro, sans-serif;\n}\n.font-barlow {\n  font-family: Barlow, sans-serif;\n}\n.font-fira {\n  font-family: Fira sans, sans-serfif;\n}\n.font-akshar {\n  font-family: Akshar, sans-serif;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-\\[10px\\] {\n  font-size: 10px;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-bold {\n  font-weight: 700;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.tracking-tighter {\n  letter-spacing: -0.05em;\n}\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n.text-slate-300 {\n  --tw-text-opacity: 1;\n  color: rgb(203 213 225 / var(--tw-text-opacity));\n}\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n.text-pink-400 {\n  --tw-text-opacity: 1;\n  color: rgb(244 114 182 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n.text-purple-400 {\n  --tw-text-opacity: 1;\n  color: rgb(192 132 252 / var(--tw-text-opacity));\n}\n.text-pink-500 {\n  --tw-text-opacity: 1;\n  color: rgb(236 72 153 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-indigo-400 {\n  --tw-text-opacity: 1;\n  color: rgb(129 140 248 / var(--tw-text-opacity));\n}\n.text-indigo-200 {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.text-indigo-300 {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\n.shadow-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.12\\)_0px_1px_3px\\2c rgba\\(0\\2c 0\\2c 0\\2c 0\\.24\\)_0px_1px_2px\\] {\n  --tw-shadow: rgba(0,0,0,0.12) 0px 1px 3px,rgba(0,0,0,0.24) 0px 1px 2px;\n  --tw-shadow-colored: 0px 1px 3px var(--tw-shadow-color), 0px 1px 2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.16\\)_0px_3px_6px\\2c rgba\\(0\\2c 0\\2c 0\\2c 0\\.23\\)_0px_3px_6px\\] {\n  --tw-shadow: rgba(0,0,0,0.16) 0px 3px 6px,rgba(0,0,0,0.23) 0px 3px 6px;\n  --tw-shadow-colored: 0px 3px 6px var(--tw-shadow-color), 0px 3px 6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sky-500 {\n  --tw-shadow-color: #0ea5e9;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[display\\] {\n  transition-property: display;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-700 {\n  transition-duration: 700ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.placeholder\\:text-sm::-moz-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm:-ms-input-placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-sm::placeholder {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.placeholder\\:text-gray-300::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-300:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.placeholder\\:text-gray-300::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.focus-within\\:border-2:focus-within {\n  border-width: 2px;\n}\n.focus-within\\:border-slate-600:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity));\n}\n.focus-within\\:bg-gray-900:focus-within {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.hover\\:scale-125:hover {\n  --tw-scale-x: 1.25;\n  --tw-scale-y: 1.25;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:scale-110:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:border-slate-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(148 163 184 / var(--tw-border-opacity));\n}\n.hover\\:border-purple-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(192 132 252 / var(--tw-border-opacity));\n}\n.hover\\:border-purple-500:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(168 85 247 / var(--tw-border-opacity));\n}\n.hover\\:font-bold:hover {\n  font-weight: 700;\n}\n.hover\\:text-indigo-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(129 140 248 / var(--tw-text-opacity));\n}\n.hover\\:text-indigo-300:hover {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\n.hover\\:text-slate-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n.hover\\:text-purple-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(192 132 252 / var(--tw-text-opacity));\n}\n.focus\\:border-b-2:focus {\n  border-bottom-width: 2px;\n}\n.focus\\:border-solid:focus {\n  border-style: solid;\n}\n.focus\\:border-indigo-300:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(165 180 252 / var(--tw-border-opacity));\n}\n.focus\\:border-purple-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(168 85 247 / var(--tw-border-opacity));\n}\n.focus\\:text-indigo-300:focus {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\n.focus\\:placeholder\\:text-xs:focus::-moz-placeholder {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.focus\\:placeholder\\:text-xs:focus:-ms-input-placeholder {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.focus\\:placeholder\\:text-xs:focus::placeholder {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.focus\\:placeholder\\:font-semibold:focus::-moz-placeholder {\n  font-weight: 600;\n}\n.focus\\:placeholder\\:font-semibold:focus:-ms-input-placeholder {\n  font-weight: 600;\n}\n.focus\\:placeholder\\:font-semibold:focus::placeholder {\n  font-weight: 600;\n}\n.focus\\:placeholder\\:text-indigo-200:focus::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.focus\\:placeholder\\:text-indigo-200:focus:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.focus\\:placeholder\\:text-indigo-200:focus::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n@media (min-width: 640px) {\n\n  .sm\\:mb-3 {\n    margin-bottom: 0.75rem;\n  }\n\n  .sm\\:min-w-\\[80px\\] {\n    min-width: 80px;\n  }\n\n  .sm\\:flex-1 {\n    flex: 1 1 0%;\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .sm\\:justify-center {\n    justify-content: center;\n  }\n\n  .sm\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .sm\\:gap-x-4 {\n    -moz-column-gap: 1rem;\n         column-gap: 1rem;\n  }\n\n  .sm\\:justify-self-end {\n    justify-self: end;\n  }\n\n  .sm\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n\n  .sm\\:py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n\n  .sm\\:pt-0 {\n    padding-top: 0px;\n  }\n\n  .sm\\:pb-2 {\n    padding-bottom: 0.5rem;\n  }\n\n  .sm\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n\n  .sm\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .sm\\:text-xs {\n    font-size: 0.75rem;\n    line-height: 1rem;\n  }\n\n  .sm\\:text-7xl {\n    font-size: 4.5rem;\n    line-height: 1;\n  }\n\n  .sm\\:placeholder\\:text-base::-moz-placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:placeholder\\:text-base:-ms-input-placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:placeholder\\:text-base::placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:focus\\:placeholder\\:text-base:focus::-moz-placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:focus\\:placeholder\\:text-base:focus:-ms-input-placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:focus\\:placeholder\\:text-base:focus::placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:focus\\:placeholder\\:font-semibold:focus::-moz-placeholder {\n    font-weight: 600;\n  }\n\n  .sm\\:focus\\:placeholder\\:font-semibold:focus:-ms-input-placeholder {\n    font-weight: 600;\n  }\n\n  .sm\\:focus\\:placeholder\\:font-semibold:focus::placeholder {\n    font-weight: 600;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css","<no source>"],"names":[],"mappings":"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A;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,sBCAA;SDAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,iBCAA;IDAA;GCAA;;EDAA;IAAA,oBCAA;IDAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,mBCAA;IDAA;GCAA;;EDAA;IAAA,mBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,oBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,kBCAA;IDAA;GCAA;;EDAA;IAAA,mBCAA;IDAA;GCAA;;EDAA;IAAA,kBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;CAAA","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _others__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./others */ "./src/others.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");
/* harmony import */ var _routing_page_load_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing/page-load-routes */ "./src/routing/page-load-routes.js");








function app() {
  const fragment = new DocumentFragment();
  fragment.append((0,_components_header__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_components_main__WEBPACK_IMPORTED_MODULE_4__["default"])(), (0,_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"])());
  const app = document.querySelector(".app");
  app.append(fragment);
  app.classList.add("grid", "grid-rows-[auto_1fr_auto]", "min-h-screen", "w-full", "font-sanspro");
  document.body.classList.add("bg-gray-900", "text-gray-200", "min-h-screen", "w-full");
}

app();
(0,_events__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_others__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_routing_page_load_routes__WEBPACK_IMPORTED_MODULE_6__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixvQkFBb0IscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUss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cUVBQWU7QUFDZixpRUFBZXFDLEdBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Fzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2VTdHJpY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvaG9tZS1jb21wb25lbnRzL2NvbmZpZ3VyZWQtaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvaW5pdGlhbC1ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2hvbWUtY29tcG9uZW50cy9yZW5kZXItc2VhcmNoZWQtbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvc2V0LWRlZmF1bHQtbG9jYXRpb24tZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL21haW4tY29tcG9uZW50cy9yZW5kZXJGYXZvcml0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9tYWluLWNvbXBvbmVudHMvcmVuZGVySG9tZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyQ2FyZC1jb21wb25lbnQvY2FyZEhlYWRlckJvdHRvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXJDYXJkLWNvbXBvbmVudC9yZW5kZXItd2VhdGhlci11bml0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlckNhcmQtY29tcG9uZW50L3dlYXRoZXJDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlckNhcmQtY29tcG9uZW50L3dlYXRoZXJDYXJkQm90dG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlckNhcmQtY29tcG9uZW50L3dlYXRoZXJDYXJkVG9wLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEvZGF0YS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEvZGVmYXVsdC1sb2NhdGlvbi1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEvZGVmYXVsdC1sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhL2Zhdm9yaXRlcy1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Vycm9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2FkaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL290aGVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yb3V0aW5nL3BhZ2UtbG9hZC1yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3RhdGVzL2Zhdm9yaXRlLXN0YXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0YXRlcy9ob21lLXN0YXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0YXRlcy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90aW1lQW5kRGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90b2dnbGUtd2VhdGhlci11bml0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RyYW5zb3JtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgZGlydHlPYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZGlydHlPYmplY3QgPSBkaXJ0eU9iamVjdCB8fCB7fTtcblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkaXJ0eU9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGlydHlPYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IGRpcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3QoZGlydHlPYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgZGlydHlPYmplY3QpO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDEwMDAgKiA2MDtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDYwICogMjQ7XG52YXIgTUlOVVRFU19JTl9NT05USCA9IE1JTlVURVNfSU5fREFZICogMzA7XG52YXIgTUlOVVRFU19JTl9ZRUFSID0gTUlOVVRFU19JTl9EQVkgKiAzNjU7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlU3RyaWN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLCB1c2luZyBzdHJpY3QgdW5pdHMuXG4gKiBUaGlzIGlzIGxpa2UgYGZvcm1hdERpc3RhbmNlYCwgYnV0IGRvZXMgbm90IHVzZSBoZWxwZXJzIGxpa2UgJ2FsbW9zdCcsICdvdmVyJyxcbiAqICdsZXNzIHRoYW4nIGFuZCB0aGUgbGlrZS5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiA1OSBzZWNzICAgICAgICAgIHwgWzAuLjU5XSBzZWNvbmRzICAgICB8XG4gKiB8IDEgLi4uIDU5IG1pbnMgICAgICAgICAgfCBbMS4uNTldIG1pbnV0ZXMgICAgIHxcbiAqIHwgMSAuLi4gMjMgaHJzICAgICAgICAgICB8IFsxLi4yM10gaG91cnMgICAgICAgfFxuICogfCAxIC4uLiAyOSBkYXlzICAgICAgICAgIHwgWzEuLjI5XSBkYXlzICAgICAgICB8XG4gKiB8IDEgLi4uIDExIG1vbnRocyAgICAgICAgfCBbMS4uMTFdIG1vbnRocyAgICAgIHxcbiAqIHwgMSAuLi4gTiB5ZWFycyAgICAgICAgICB8IFsxLi5OXSAgeWVhcnMgICAgICAgfFxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgZnJvbSBgZGlzdGFuY2VJbldvcmRzU3RyaWN0YCB0byBgZm9ybWF0RGlzdGFuY2VTdHJpY3RgXG4gKiAgIHRvIG1ha2UgaXRzIG5hbWUgY29uc2lzdGVudCB3aXRoIGBmb3JtYXRgIGFuZCBgZm9ybWF0UmVsYXRpdmVgLlxuICpcbiAqIC0gVGhlIG9yZGVyIG9mIGFyZ3VtZW50cyBpcyBzd2FwcGVkIHRvIG1ha2UgdGhlIGZ1bmN0aW9uXG4gKiAgIGNvbnNpc3RlbnQgd2l0aCBgZGlmZmVyZW5jZUluLi4uYCBmdW5jdGlvbnMuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3Jkc1N0cmljdChcbiAqICAgICBuZXcgRGF0ZSgyMDE1LCAwLCAyKSxcbiAqICAgICBuZXcgRGF0ZSgyMDE0LCA2LCAyKVxuICogICApIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZm9ybWF0RGlzdGFuY2VTdHJpY3QoXG4gKiAgICAgbmV3IERhdGUoMjAxNCwgNiwgMiksXG4gKiAgICAgbmV3IERhdGUoMjAxNSwgMCwgMilcbiAqICAgKSAvLz0+ICc2IG1vbnRocydcbiAqICAgYGBgXG4gKlxuICogLSBgcGFydGlhbE1ldGhvZGAgb3B0aW9uIGlzIHJlbmFtZWQgdG8gYHJvdW5kaW5nTWV0aG9kYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZGlzdGFuY2VJbldvcmRzU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMzLCAxKSxcbiAqICAgICB7IHBhcnRpYWxNZXRob2Q6ICdjZWlsJyB9XG4gKiAgICkgLy89PiAnMiBtaW51dGVzJ1xuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZm9ybWF0RGlzdGFuY2VTdHJpY3QoXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMzLCAxKSxcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIHsgcm91bmRpbmdNZXRob2Q6ICdjZWlsJyB9XG4gKiAgICkgLy89PiAnMiBtaW51dGVzJ1xuICogICBgYGBcbiAqXG4gKiAtIElmIGByb3VuZGluZ01ldGhvZGAgaXMgbm90IHNwZWNpZmllZCwgaXQgbm93IGRlZmF1bHRzIHRvIGByb3VuZGAgaW5zdGVhZCBvZiBgZmxvb3JgLlxuICpcbiAqIC0gYHVuaXRgIG9wdGlvbiBub3cgYWNjZXB0cyBvbmUgb2YgdGhlIHN0cmluZ3M6XG4gKiAgICdzZWNvbmQnLCAnbWludXRlJywgJ2hvdXInLCAnZGF5JywgJ21vbnRoJyBvciAneWVhcicgaW5zdGVhZCBvZiAncycsICdtJywgJ2gnLCAnZCcsICdNJyBvciAnWSdcbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZGlzdGFuY2VJbldvcmRzU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMzLCAxKSxcbiAqICAgICB7IHVuaXQ6ICdtJyB9XG4gKiAgIClcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMywgMSksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICB7IHVuaXQ6ICdtaW51dGUnIH1cbiAqICAgKVxuICogICBgYGBcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7J3NlY29uZCd8J21pbnV0ZSd8J2hvdXInfCdkYXknfCdtb250aCd8J3llYXInfSBbb3B0aW9ucy51bml0XSAtIGlmIHNwZWNpZmllZCwgd2lsbCBmb3JjZSBhIHVuaXRcbiAqIEBwYXJhbSB7J2Zsb29yJ3wnY2VpbCd8J3JvdW5kJ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3JvdW5kJ10gLSB3aGljaCB3YXkgdG8gcm91bmQgcGFydGlhbCB1bml0c1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5yb3VuZGluZ01ldGhvZGAgbXVzdCBiZSAnZmxvb3InLCAnY2VpbCcgb3IgJ3JvdW5kJ1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMudW5pdGAgbXVzdCBiZSAnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICdtb250aCcgb3IgJ3llYXInXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDIpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApXG4gKiApXG4gKiAvLz0+ICcxNSBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICcxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgaW4gbWludXRlcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICB1bml0OiAnbWludXRlJ1xuICogfSlcbiAqIC8vPT4gJzUyNTYwMCBtaW51dGVzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE1XG4gKiAvLyB0byAyOCBKYW51YXJ5IDIwMTUsIGluIG1vbnRocywgcm91bmRlZCB1cD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTUsIDAsIDI4KSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgdW5pdDogJ21vbnRoJyxcbiAqICAgcm91bmRpbmdNZXRob2Q6ICdjZWlsJ1xuICogfSlcbiAqIC8vPT4gJzEgbW9udGgnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZVN0cmljdChkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZS5mb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGNsb25lT2JqZWN0KG9wdGlvbnMpO1xuICBsb2NhbGl6ZU9wdGlvbnMuYWRkU3VmZml4ID0gQm9vbGVhbihvcHRpb25zLmFkZFN1ZmZpeCk7XG4gIGxvY2FsaXplT3B0aW9ucy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuXG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG5cbiAgdmFyIHJvdW5kaW5nTWV0aG9kID0gb3B0aW9ucy5yb3VuZGluZ01ldGhvZCA9PSBudWxsID8gJ3JvdW5kJyA6IFN0cmluZyhvcHRpb25zLnJvdW5kaW5nTWV0aG9kKTtcbiAgdmFyIHJvdW5kaW5nTWV0aG9kRm47XG5cbiAgaWYgKHJvdW5kaW5nTWV0aG9kID09PSAnZmxvb3InKSB7XG4gICAgcm91bmRpbmdNZXRob2RGbiA9IE1hdGguZmxvb3I7XG4gIH0gZWxzZSBpZiAocm91bmRpbmdNZXRob2QgPT09ICdjZWlsJykge1xuICAgIHJvdW5kaW5nTWV0aG9kRm4gPSBNYXRoLmNlaWw7XG4gIH0gZWxzZSBpZiAocm91bmRpbmdNZXRob2QgPT09ICdyb3VuZCcpIHtcbiAgICByb3VuZGluZ01ldGhvZEZuID0gTWF0aC5yb3VuZDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInJvdW5kaW5nTWV0aG9kIG11c3QgYmUgJ2Zsb29yJywgJ2NlaWwnIG9yICdyb3VuZCdcIik7XG4gIH1cblxuICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZVJpZ2h0LmdldFRpbWUoKSAtIGRhdGVMZWZ0LmdldFRpbWUoKTtcbiAgdmFyIG1pbnV0ZXMgPSBtaWxsaXNlY29uZHMgLyBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFO1xuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KTsgLy8gVXNlIERTVC1ub3JtYWxpemVkIGRpZmZlcmVuY2UgaW4gbWludXRlcyBmb3IgeWVhcnMsIG1vbnRocyBhbmQgZGF5cztcbiAgLy8gdXNlIHJlZ3VsYXIgZGlmZmVyZW5jZSBpbiBtaW51dGVzIGZvciBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcy5cblxuICB2YXIgZHN0Tm9ybWFsaXplZE1pbnV0ZXMgPSAobWlsbGlzZWNvbmRzIC0gdGltZXpvbmVPZmZzZXQpIC8gTUlMTElTRUNPTkRTX0lOX01JTlVURTtcbiAgdmFyIHVuaXQ7XG5cbiAgaWYgKG9wdGlvbnMudW5pdCA9PSBudWxsKSB7XG4gICAgaWYgKG1pbnV0ZXMgPCAxKSB7XG4gICAgICB1bml0ID0gJ3NlY29uZCc7XG4gICAgfSBlbHNlIGlmIChtaW51dGVzIDwgNjApIHtcbiAgICAgIHVuaXQgPSAnbWludXRlJztcbiAgICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgICAgdW5pdCA9ICdob3VyJztcbiAgICB9IGVsc2UgaWYgKGRzdE5vcm1hbGl6ZWRNaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgICAgdW5pdCA9ICdkYXknO1xuICAgIH0gZWxzZSBpZiAoZHN0Tm9ybWFsaXplZE1pbnV0ZXMgPCBNSU5VVEVTX0lOX1lFQVIpIHtcbiAgICAgIHVuaXQgPSAnbW9udGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gJ3llYXInO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB1bml0ID0gU3RyaW5nKG9wdGlvbnMudW5pdCk7XG4gIH0gLy8gMCB1cCB0byA2MCBzZWNvbmRzXG5cblxuICBpZiAodW5pdCA9PT0gJ3NlY29uZCcpIHtcbiAgICB2YXIgc2Vjb25kcyA9IHJvdW5kaW5nTWV0aG9kRm4obWlsbGlzZWNvbmRzIC8gMTAwMCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneFNlY29uZHMnLCBzZWNvbmRzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHVwIHRvIDYwIG1pbnNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnbWludXRlJykge1xuICAgIHZhciByb3VuZGVkTWludXRlcyA9IHJvdW5kaW5nTWV0aG9kRm4obWludXRlcyk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCByb3VuZGVkTWludXRlcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB1cCB0byAyNCBob3Vyc1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdob3VyJykge1xuICAgIHZhciBob3VycyA9IHJvdW5kaW5nTWV0aG9kRm4obWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4SG91cnMnLCBob3VycywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2RheScpIHtcbiAgICB2YXIgZGF5cyA9IHJvdW5kaW5nTWV0aG9kRm4oZHN0Tm9ybWFsaXplZE1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHVwIHRvIDEyIG1vbnRoc1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtb250aCcpIHtcbiAgICB2YXIgbW9udGhzID0gcm91bmRpbmdNZXRob2RGbihkc3ROb3JtYWxpemVkTWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBtb250aHMgPT09IDEyICYmIG9wdGlvbnMudW5pdCAhPT0gJ21vbnRoJyA/IGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneFllYXJzJywgMSwgbG9jYWxpemVPcHRpb25zKSA6IGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3llYXInKSB7XG4gICAgdmFyIHllYXJzID0gcm91bmRpbmdNZXRob2RGbihkc3ROb3JtYWxpemVkTWludXRlcyAvIE1JTlVURVNfSU5fWUVBUik7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInVuaXQgbXVzdCBiZSAnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICdtb250aCcgb3IgJ3llYXInXCIpO1xufSIsImltcG9ydCBmb3JtYXREaXN0YW5jZVN0cmljdCBmcm9tIFwiLi4vZm9ybWF0RGlzdGFuY2VTdHJpY3QvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlIGFuZCBub3cgaW4gd29yZHMuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3JkcywgdXNpbmcgc3RyaWN0IHVuaXRzLlxuICogVGhpcyBpcyBsaWtlIGBmb3JtYXREaXN0YW5jZWAsIGJ1dCBkb2VzIG5vdCB1c2UgaGVscGVycyBsaWtlICdhbG1vc3QnLCAnb3ZlcicsXG4gKiAnbGVzcyB0aGFuJyBhbmQgdGhlIGxpa2UuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gNTkgc2VjcyAgICAgICAgICB8IFswLi41OV0gc2Vjb25kcyAgICAgfFxuICogfCAxIC4uLiA1OSBtaW5zICAgICAgICAgIHwgWzEuLjU5XSBtaW51dGVzICAgICB8XG4gKiB8IDEgLi4uIDIzIGhycyAgICAgICAgICAgfCBbMS4uMjNdIGhvdXJzICAgICAgIHxcbiAqIHwgMSAuLi4gMjkgZGF5cyAgICAgICAgICB8IFsxLi4yOV0gZGF5cyAgICAgICAgfFxuICogfCAxIC4uLiAxMSBtb250aHMgICAgICAgIHwgWzEuLjExXSBtb250aHMgICAgICB8XG4gKiB8IDEgLi4uIE4geWVhcnMgICAgICAgICAgfCBbMS4uTl0gIHllYXJzICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHsnc2Vjb25kJ3wnbWludXRlJ3wnaG91cid8J2RheSd8J21vbnRoJ3wneWVhcid9IFtvcHRpb25zLnVuaXRdIC0gaWYgc3BlY2lmaWVkLCB3aWxsIGZvcmNlIGEgdW5pdFxuICogQHBhcmFtIHsnZmxvb3InfCdjZWlsJ3wncm91bmQnfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ncm91bmQnXSAtIHdoaWNoIHdheSB0byByb3VuZCBwYXJ0aWFsIHVuaXRzXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LCB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAyIEp1bHkgMjAxND9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyKVxuICogKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIG5vdyBpcyAxIEphbnVhcnkgMjAxNSAwMDowMDowMCxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1LCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSlcbiAqIClcbiAqIC8vPT4gJzIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTYsIHdpdGggYSBzdWZmaXg/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChcbiAqICAgbmV3IERhdGUoMjAxNiwgMCwgMSksXG4gKiAgIHthZGRTdWZmaXg6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdpbiAxIHllYXInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI4IEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE1LCBpbiBtb250aHMsIHJvdW5kZWQgdXA/P1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QobmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgdW5pdDogJ21vbnRoJyxcbiAqICAgcm91bmRpbmdNZXRob2Q6ICdjZWlsJ1xuICogfSlcbiAqIC8vPT4gJzEgbW9udGgnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBBdWd1c3QgMjAxNiBpbiBFc3BlcmFudG8/XG4gKiB2YXIgZW9Mb2NhbGUgPSByZXF1aXJlKCdkYXRlLWZucy9sb2NhbGUvZW8nKVxuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDcsIDEpLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJzEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gZm9ybWF0RGlzdGFuY2VTdHJpY3QoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBkaXJ0eU9wdGlvbnMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgSGFsw6FzeiDDgWTDoW0gPGFkYW1AYWltZm9ybS5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBvcyA9IHJlcXVpcmUoJ29zJyk7IFxuICAgIGlmKG9zLm5ldHdvcmtJbnRlcmZhY2VzKSB2YXIgbmV0d29ya0ludGVyZmFjZXMgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgbG9vcDpcbiAgICAgICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldICE9PSB1bmRlZmluZWQgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbiAgICB9XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCJjb25zdCBzdHlsZXMgPSB7XG4gIGNhcmRTdHlsZXM6XG4gICAgXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBweS02IGJnLXNsYXRlLTkwMCByb3VuZGVkLWxnIHRleHQtc2xhdGUtMzAwIHB4LTIgaC1bOTAlXVwiLFxuICBpY29uczogXCJtYi0yXCIsXG4gIGZvb3Rlckljb25zOlxuICAgIFwidHJhbnNpdGlvbi1jb2xvciBlYXNlLWluIGR1dGF0aW9uLTMwMCBob3Zlcjp0ZXh0LWluZGlnby00MDAgaG92ZXI6c2NhbGUtMTI1IHRleHQtbGdcIixcbiAgZmxleFJvd0NlbnRlcjogXCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiLFxuICBmbGV4Q29sQ2VudGVyOiBcImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9jbGFzc2VzXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4uL2hlbHBlclwiO1xuXG5jb25zdCBmb290ZXJTZWN0aW9uID0gKCkgPT4ge1xuICAvL2ljb25zXG4gIGNvbnN0IGdpdGh1YiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7IGNsYXNzOiBcImZhYiBmYS1naXRodWJcIiB9KTtcbiAgY29uc3QgdHdpdHRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB7IGNsYXNzOiBcImZhYiBmYS10d2l0dGVyXCIgfSk7XG4gIGNvbnN0IGxpbmtlZGluID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwsIHtcbiAgICBjbGFzczogXCJmYWIgZmEtbGlua2VkaW4gXCIsXG4gIH0pO1xuICAvL2xpbmtzXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImFcIiwgW2dpdGh1Yl0sIHtcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90d2lraXN0YVwiLFxuICAgIGNsYXNzOiBgJHtzdHlsZXMuZm9vdGVySWNvbnN9YCxcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gIH0pO1xuICBjb25zdCB0d2l0dGVyTGluayA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYVwiLCBbdHdpdHRlcl0sIHtcbiAgICBocmVmOiBcImh0dHBzOi8vdHdpdHRlci5jb20vYWFyb25hbmFtYVwiLFxuICAgIGNsYXNzOiBgJHtzdHlsZXMuZm9vdGVySWNvbnN9YCxcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gIH0pO1xuICBjb25zdCBsaW5rZWRpbkxpbmsgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImFcIiwgW2xpbmtlZGluXSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Fhcm9uYW5hbWFcIixcbiAgICBjbGFzczogYCR7c3R5bGVzLmZvb3Rlckljb25zfSBgLFxuICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgfSk7XG5cbiAgLy9mb290ZXItc29jaWFsIGljb25zIHdyYXBwZXJcbiAgY29uc3QgaWNvbnNXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbZ2l0aHViTGluaywgdHdpdHRlckxpbmssIGxpbmtlZGluTGlua10sXG4gICAgeyBjbGFzczogXCJmbGV4IGp1c3RpZnktYXJvdW5kIHctMy81IG1iLTJcIiB9XG4gICk7XG5cbiAgLy9jb3B5cmlnaHQgaW5mb1xuICBjb25zdCBjb3B5UmlnaHRTeW1ib2wgPSBoZWxwZXIuc3BlY2lhbChcIiZjb3B5OzIwMjJcIik7XG4gIGNvbnN0IGNvcHlSaWdodCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtjb3B5UmlnaHRTeW1ib2wsIFwiIGFhcm9uYW5hbWFcIl0sXG4gICAge1xuICAgICAgY2xhc3M6IFwiIGZvbnQtbm9ybWFsIHRleHQtYmFzZVwiLFxuICAgIH1cbiAgKTtcblxuICAvL3dyYXBwZXJcbiAgY29uc3Qgd3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtpY29uc1dyYXBwZXIsIGNvcHlSaWdodF0sIHtcbiAgICBjbGFzczogYCR7c3R5bGVzLmZsZXhDb2xDZW50ZXJ9IHctMy81IG1heC13LVs0ODBweF1gLFxuICB9KTtcblxuICAvL2ZyYWdtZW50XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKHdyYXBwZXIpO1xuICAvL2Zvb3RlciBlbGVtZW50XG4gIGNvbnN0IGZvb3RlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczogYCR7c3R5bGVzLmZsZXhSb3dDZW50ZXJ9IG1pbi1oLVs1MHB4XSBiZy1ncmF5LTgwMCBib3JkZXItZ3JheS03MDAgdy1mdWxsIHAtMiB0ZXh0LXNsYXRlLTMwMCBzaGFkb3ctW3JnYmEoMCwwLDAsMC4xMilfMHB4XzFweF8zcHgscmdiYSgwLDAsMCwwLjI0KV8wcHhfMXB4XzJweF0gbXQtMmAsXG4gIH0pO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJTZWN0aW9uO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuLi9oZWxwZXJcIjtcbmltcG9ydCBmYXZvcml0ZXMgZnJvbSBcIi4uL2RhdGEvZmF2b3JpdGVzLWRhdGFcIjtcblxuY29uc3QgaGVhZGVyU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIC8qKioqKipuYXYgbGVmdCBzZWN0aW9uKioqKiovXG4gIGNvbnN0IHN1bm55SWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ3Yl9zdW5ueVwiXSwge1xuICAgIGNsYXNzOiBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHRleHQtcGluay00MDAgdGV4dC1sZ1wiLFxuICB9KTtcbiAgY29uc3QgbG9nbyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaDJcIiwgW1wid2VkYVwiLCBzdW5ueUljb25dLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImFwcC1sb2dvIGZvbnQtYmFybG93IGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMCB0ZXh0LTJ4bCBzaGFkb3ctc2t5LTUwMCBjdXJzb3ItcG9pbnRlciBmbGV4XCIsXG4gIH0pO1xuICBjb25zdCBuYXZMZWZ0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2xvZ29dLCB7XG4gICAgY2xhc3M6IFwibWItMiBweS1bMXB4XSBsb2dvLWNvbnRhaW5lciBwci1bMTBweF1cIixcbiAgfSk7XG5cbiAgLyoqKioqKm5hdiByaWdodCBzZWN0aW9uKioqKioqKioqL1xuXG4gIC8qXG4gIG5hdi1tZW51XG4gICovXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJob21lXCJdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImlubGluZS1ibG9jayBob21lLWJ0biB1cHBlcmNhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktMzAwIGJvcmRlci0wIGhvdmVyOnRleHQtaW5kaWdvLTMwMCBmb2N1czp0ZXh0LWluZGlnby0zMDAgZm9jdXM6Ym9yZGVyLWItMiBmb2N1czpib3JkZXItc29saWQgZm9jdXM6Ym9yZGVyLWluZGlnby0zMDAgcHktMSBzbTpweS0wIHRyYW5zaXRvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIixcbiAgfSk7XG5cbiAgY29uc3QgZmF2U3BhbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtgJHtmYXZvcml0ZXMuZmF2b3JpdGVzRGF0YSgpLmxlbmd0aH1gXSxcbiAgICB7XG4gICAgICBjbGFzczpcbiAgICAgICAgXCJmYXZvcml0ZS1jb3VudCBmb250LWxpZ2h0IHJvdW5kZWQtZnVsbCBiZy1pbmRpZ28tNDAwIGgtWzE4cHhdIHctWzE4cHhdIGJvdHRvbS1bLTEwXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW0tY2VudGVyIHRleHQtWzEwcHhdIG1sLVsycHhdXCIsXG4gICAgfVxuICApO1xuICBjb25zdCBmYXZvcml0ZUJ1dHRvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImZhdm9yaXRlXCJdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImZhdm9yaXRlLWJ0biB1cHBlcmNhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktMzAwIGJvcmRlci0wIGhvdmVyOnRleHQtaW5kaWdvLTMwMCBmb2N1czp0ZXh0LWluZGlnby0zMDAgZm9jdXM6Ym9yZGVyLWItMiBmb2N1czpib3JkZXItc29saWQgZm9jdXM6Ym9yZGVyLWluZGlnby0zMDAgcHktMSBzbTpweS0wIHRyYW5zaXRvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgXCIsXG4gIH0pO1xuICBjb25zdCBmYXZXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtmYXZvcml0ZUJ1dHRvbiwgZmF2U3Bhbl0sIHtcbiAgICBjbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlclwiLFxuICB9KTtcbiAgY29uc3Qgc2V0dGluZ3NCdXR0b24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJzZXR0aW5nc1wiXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJzZXR0aW5ncy1idG4gdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTMwMCBib3JkZXItMCBob3Zlcjp0ZXh0LWluZGlnby0zMDAgZm9jdXM6dGV4dC1pbmRpZ28tMzAwIGZvY3VzOmJvcmRlci1iLTIgZm9jdXM6Ym9yZGVyLXNvbGlkIGZvY3VzOmJvcmRlci1pbmRpZ28tMzAwIHB5LTEgc206cHktMCB0cmFuc2l0b24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCIsXG4gIH0pO1xuICBjb25zdCBuYXZNZW51ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbaG9tZUJ1dHRvbiwgZmF2V3JhcHBlciwgc2V0dGluZ3NCdXR0b25dLFxuICAgIHtcbiAgICAgIGNsYXNzOlxuICAgICAgICBcImZsZXggdy1mdWxsIGp1c3RpZnktYXJvdW5kIGl0ZW1zLWVuZCBmbGV4LTEgbWF4LXctWzMyMHB4XSB0ZXh0LXhzIHNtOnRleHQtc20gZ2FwLXgtMyBcIixcbiAgICB9XG4gICk7XG5cbiAgLypcbiAgc2VhcmNoIGJveFxuICAqL1xuICAvL2NyZWF0ZSBzZWFyY2ggYm94XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXSwge1xuICAgIHR5cGU6IFwic2VhcmNoXCIsXG4gICAgaWQ6IFwic2VhcmNoLWlucHV0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgd2VhdGhlciBsb2NhdGlvbiBcIixcbiAgICBjbGFzczpcbiAgICAgIFwiYmctdHJhbnNwYXJlbnQgIG91dGxpbmUtbm9uZSBhcHBlcmFuY2Utbm9uZSBwbC04IHB5LTIgaC1mdWxsIHBsYWNlaG9sZGVyOnRleHQtc20gZm9jdXM6cGxhY2Vob2xkZXI6dGV4dC1pbmRpZ28tMjAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS0zMDAgZm9udC1maXJhXCIsXG4gICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICB9KTtcblxuICAvL3NlYXJjaCBpY29uXG4gIGNvbnN0IHNlYXJjaEljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlcIiwgW10sIHtcbiAgICBjbGFzczogXCJmYXMgZmEtc2VhcmNoIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtaW5kaWdvLTMwMCBcIixcbiAgfSk7XG5cbiAgLy9jcmVhdGUgc2VhcmNoIGJ1dHRvblxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbc2VhcmNoSWNvbl0sIHtcbiAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgIGlkOiBcInNlYXJjaC1idG5cIixcbiAgICBjbGFzczogXCJib3JkZXItbC0yIGJvcmRlci1sLXNsYXRlLTYwMCBweC0zIHB5LTIgbWluLXctbWluIGgtZnVsbFwiLFxuICB9KTtcblxuICAvL2NyZWF0IHNlYXJjaCBmb3JtXG4gIGNvbnN0IGZvcm0gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgW3NlYXJjaElucHV0LCBzZWFyY2hCdXR0b25dLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImxvY2F0aW9uIGdyaWQgZ3JpZC1jb2xzLVsxZnJfYXV0b10ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctWzkwJV0gbWluLXctWzI4MHB4XSBtYXgtdy14cyByb3VuZGVkLWZ1bGwgYmctZ3JheS03MDAgcHgtMiBmb2N1cy13aXRoaW46YmctZ3JheS05MDAgZm9jdXMtd2l0aGluOmJvcmRlci1zbGF0ZS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci0yIHNtOmp1c3RpZnktc2VsZi1lbmQgc2hhZG93LVtyZ2JhKDYwLDY0LDY3LDAuMylfMHB4XzFweF8ycHhfMHB4LHJnYmEoNjAsNjQsNjcsMC4xNSlfMHB4XzJweF82cHhfMnB4IHNtOmZsZXgtMV1cIixcbiAgfSk7XG5cbiAgLy9cbiAgY29uc3QgbmF2UmlnaHQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbbmF2TWVudSwgZm9ybV0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIHNtOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgc206cGItMiBzbTpmbGV4LTIgc206anVzdGlmeS1lbmQgZ2FwLXktMSBzbTpnYXAteC00XCIsXG4gIH0pO1xuXG4gIC8qKioqKm5hdiBlbGVtZW50ICovXG4gIGNvbnN0IG5hdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibmF2XCIsIFtuYXZMZWZ0LCBuYXZSaWdodF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwibmF2IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctWzkwJV0gbWF4LXctWzEyMDBweF0gc206ZmxleC1yb3cgc206anVzdGlmeS1iZXR3ZWVuIGdhcC14LTUgXCIsXG4gIH0pO1xuXG4gIGZyYWdtZW50LmFwcGVuZChuYXYpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtmcmFnbWVudF0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiIHB4LTIgc206cHktMiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTgwMCBzaGFkb3ctW3JnYmEoMCwwLDAsMC4xMilfMHB4XzFweF8zcHgscmdiYSgwLDAsMCwwLjI0KV8wcHhfMXB4XzJweF1cIixcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTZWN0aW9uO1xuIiwiaW1wb3J0IHdlYXRoZXJDYXJkIGZyb20gXCIuLi93ZWF0aGVyQ2FyZC1jb21wb25lbnQvd2VhdGhlckNhcmRcIjtcbmltcG9ydCByZW5kZXJIb21lU3RhdGUgZnJvbSBcIi4uLy4uL3N0YXRlcy9ob21lLXN0YXRlXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4uLy4uL2hlbHBlclwiO1xuXG5jb25zdCBjb25maWd1cmVkSG9tZXBhZ2UgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IHNlY3Rpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgW3dlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKV0sIHtcbiAgICBjbGFzczogXCJkZWZhdWx0LWluZGV4XCIsXG4gIH0pO1xuICAvLyByZW5kZXJIb21lU3RhdGUuc2V0SXNSZW5kZXJpbmdIb21lKHRydWUpO1xuICBtYWluLmFwcGVuZChzZWN0aW9uKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZWRIb21lcGFnZTtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi4vLi4vaGVscGVyXCI7XG5pbXBvcnQgc2V0RGVmYXVsdExvYWN0aW9uRm9ybSBmcm9tIFwiLi9zZXQtZGVmYXVsdC1sb2NhdGlvbi1mb3JtXCI7XG5pbXBvcnQgZGVmYXVsdExvY2F0aW9uIGZyb20gXCIuLi8uLi9kYXRhL2RlZmF1bHQtbG9jYXRpb25cIjtcblxuZnVuY3Rpb24gaW5pdGlhbEhvbWVwYWdlKCkge1xuICBjb25zdCBoZWFkZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgyXCIsXG4gICAgW1wiR2V0IEFjY3VyYXRlIFdlYXRoZXIgRGV0YWlscyBieSB0aGUgU2Vjb25kXCJdLFxuICAgIHtcbiAgICAgIGNsYXNzOlxuICAgICAgICBcInRleHQtM3hsIHNtOnRleHQtNXhsIHVwcGVyY2FzZSBmb250LWJhcmxvdyBmb250LWJvbGQgdGV4dC1wdXJwbGUtNDAwICB0ZXh0LWNlbnRlciB0cmFja2luZy13aWRlc3Qgc2VsZi1zdGFydCBcIixcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgY2FsbFRvQWN0aW9uQnRuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiZ2V0IHN0YXJ0ZWRcIl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiY2FsbC10by1hY3Rpb24gIHctWzEyMHB4XSBweC00IHB5LTIgdXBwZXJjYXNlIHRleHQtc20gdGV4dC1waW5rLTQwMCBib3JkZXItcGluay00MDAgZm9udC1zYW5zcHJvIGZvbnQtc2VtaWJvbGQgcm91bmRlZCB0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMjAwIGhvdmVyOnRleHQtc2xhdGUtNDAwIGhvdmVyOmJvcmRlci1zbGF0ZS00MDAgYm9yZGVyLTIgbXQtWzYwcHhdIHNoYWRvdy1bcmdiYSg2MCw2NCw2NywwLjMpXzBweF8xcHhfMnB4XzBweCxyZ2JhKDYwLDY0LDY3LDAuMTUpXzBweF8ycHhfNnB4XzJweDtdXCIsXG4gIH0pO1xuICBjb25zdCBjb250ZW50RGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2hlYWRlciwgY2FsbFRvQWN0aW9uQnRuXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktdG9wIGl0ZW1zLWNlbnRlciBoLWZ1bGwgZm9udC1zYW5zcHJvIHB0LVsxMDBweF0gc206anVzdGlmeS1jZW50ZXIgc206cHQtMFwiLFxuICB9KTtcblxuICBjb25zdCBzZWN0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtjb250ZW50RGl2XSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJob21lLXNlY3Rpb24gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBweC00IHRleHQtanVzdGlmeSBoLWZ1bGxcIixcbiAgfSk7XG5cbiAgaWYgKGRlZmF1bHRMb2NhdGlvbi5zYXZlZExvY2F0aW9uKCkgPT09IG51bGwpIHtcbiAgICBzZWN0aW9uLmFwcGVuZChzZXREZWZhdWx0TG9hY3Rpb25Gb3JtKCkpO1xuICB9XG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsSG9tZXBhZ2U7XG4iLCJpbXBvcnQgd2VhdGhlckNhcmQgZnJvbSBcIi4uL3dlYXRoZXJDYXJkLWNvbXBvbmVudC93ZWF0aGVyQ2FyZFwiO1xuLy8gaW1wb3J0IHJlbmRlclN0YXRlIGZyb20gXCIuL3JlbmRlclN0YXRlXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclNlYXJjaGVkTG9jYXRpb24od2VhdGhlcikge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgLy8gcmVuZGVyU3RhdGUuc2V0SXNSZW5kZXJpbmdEZWZhdWx0KGZhbHNlKTtcbiAgbWFpbi5hcHBlbmQod2VhdGhlckNhcmQod2VhdGhlcikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTZWFyY2hlZExvY2F0aW9uO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuLi8uLi9oZWxwZXJcIjtcblxuZnVuY3Rpb24gc2V0RGVmYXVsdExvYWN0aW9uRm9ybSgpIHtcbiAgY29uc3QgZm9ybVRpdGxlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoM1wiLFxuICAgIFtcIlNldCBkZWZhdWx0IHdlYXRoZXIgbG9jYXRpb25cIl0sXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwidGV4dC1sZyBmb250LWJvbGQgc206dGV4dC0yeGwgdGV4dC1ncmF5LTMwMCBiZy1wdXJwbGUtNjAwIHRleHQtY2VudGVyIHB5LTJcIixcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgZm9ybUhlYWRlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmb3JtVGl0bGVdLCB7XG4gICAgY2xhc3M6IFwiZm9ybS1oZWFkZXIgbWItWzQwcHhdXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFtdLCB7XG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgaWQ6IFwiZGVmYXVsdC1sb2NhdGlvbi1pbnB1dFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIGRlZmF1bHQgd2VhdGhlciBsb2NhdGlvbiBcIixcbiAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgY2xhc3M6XG4gICAgICBcInRyYW5zaXRpb24tYWxsIGVhc2UtaW4gYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIGFwcGVhcm5hY2Utbm9uZSBib3JkZXItWzJweF0gYm9yZGVyLWdyYXktNTAwIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwICBwbGFjZWhvbGRlcjp0ZXh0LXNtIHNtOnBsYWNlaG9sZGVyOnRleHQtYmFzZSBmb2N1czpwbGFjZWhvbGRlcjpmb250LXNlbWlib2xkIGZvY3VzOnBsYWNlaG9sZGVyOnRleHQteHMgc206Zm9jdXM6cGxhY2Vob2xkZXI6dGV4dC1iYXNlICBzbTpmb2N1czpwbGFjZWhvbGRlcjpmb250LXNlbWlib2xkIGhvdmVyOmJvcmRlci1wdXJwbGUtNDAwICBkdXJhdGlvbi0yMDAgbWItNSB3LTQvNSByb3VuZGVkLW1kIHB5LTEgc206cHktMiBwbC0yIFwiLFxuICB9KTtcblxuICBjb25zdCBzYXZlQnRuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wic2F2ZVwiXSwge1xuICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgY2xhc3M6XG4gICAgICBcInN1Ym1pdC1idG4gdHJhbnNpdGlvbiBlYXNlLWluIHB5LVszcHhdIHRleHQtZ3JheS00MDAgcm91bmRlZC1tZCBib3JkZXItWzJweF0gYm9yZGVyLWdyYXktNTAwICBvdXRsaW5lLW5vbmUgIHRleHQtc20gc206dGV4dC1iYXNlIHB4LTIgbWluLXctWzYwcHhdIHNtOm1pbi13LVs4MHB4XSBmb250LXNlbWlib2xkIGhvdmVyOmJvcmRlci1wdXJwbGUtNTAwIGhvdmVyOnRleHQtcHVycGxlLTQwMCBkdXJhdGlvbi0yMDBcIixcbiAgfSk7XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiY2xvc2VcIl0sIHtcbiAgICBpZDogXCJjYW5jZWwtYnRuXCIsXG4gICAgY2xhc3M6XG4gICAgICBcImNhbmNlbC1idG4gY2xvc2UtbW9kYWwgdHJhbnNpdGlvbiBlYXNlLWluIHB5LVszcHhdIHRleHQtZ3JheS00MDAgcm91bmRlZC1tZCBib3JkZXItWzJweF0gYm9yZGVyLWdyYXktNTAwICBvdXRsaW5lLW5vbmUgIHRleHQtc20gc206dGV4dC1iYXNlIHB4LTIgbWluLXctWzYwcHhdIHNtOm1pbi13LVs4MHB4XSBmb250LXNlbWlib2xkIGhvdmVyOmJvcmRlci1wdXJwbGUtNTAwIGhvdmVyOnRleHQtcHVycGxlLTQwMCBkdXJhdGlvbi0yMDBcIixcbiAgfSk7XG5cbiAgY29uc3QgZm9ybUJ0bnMgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbc2F2ZUJ0biwgY2FuY2VsQnRuXSwge1xuICAgIGNsYXNzOiBcImZvcm0tYnRucyBmbGV4IGdhcC1bMjBweF0gbXQtM1wiLFxuICB9KTtcblxuICBjb25zdCBmb3JtQm9keSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtsb2NhdGlvbklucHV0LCBmb3JtQnRuc10sIHtcbiAgICBjbGFzczogXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteS01XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGluZm9JY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtdLCB7XG4gICAgY2xhc3M6IFwiZmFzIGZhLWluZm8tY2lyY2xlIHRleHQtc2xhdGUtNDAwIHRleHQtYmFzZSBtci0xIHJvdW5kZWQtZnVsbFwiLFxuICB9KTtcbiAgY29uc3QgZm9ybUluZm8gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInBcIixcbiAgICBbXG4gICAgICBpbmZvSWNvbixcbiAgICAgIFwiY3VycmVudCB3ZWF0aGVyIGRldGFpbHMgd2lsbCBiZSBkaXNwbGF5ZWQgZm9yIGRlZmF1bHQgbG9jYXRpb24gb24gYXBwIGxvYWRcIixcbiAgICBdLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcInRleHQteHMgbWluLXctWzI0MnB4XSBzbTp0ZXh0LXNtIHRleHQtZ3JheS0zMDAgIHRleHQtY2VudGVyIHB4LTJcIixcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgZm9ybUZvb3RlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtmb3JtSW5mb10sIHtcbiAgICBjbGFzczogXCJmbGV4IGp1c3RpZnktY2VudGVyIHBiLTIgXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtmb3JtSGVhZGVyLCBmb3JtQm9keSwgZm9ybUZvb3Rlcl0sXG4gICAge1xuICAgICAgY2xhc3M6IFwiZm9ybS1jb250ZW50LXdyYXBwZXJcIixcbiAgICB9XG4gICk7XG4gIGNvbnN0IGZvcm0gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgW3dyYXBwZXJdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImRlZmF1bHQtbG9jYXRpb24tZm9ybSBiZy1ncmF5LTgwMCBib3JkZXItW10gcmVsYXRpdmUgYm90dG9tLVtdIHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1bcmdiYSgwLDAsMCwwLjMpXzBweF8xOXB4IF8zOHB4LHJnYmEoMCwwLDAsMC4yMilfMHB4XzE1cHhfMTJweF0gdy1bOTAlXSBtYXgtdy1bNDgwcHhdIG1pbi13LVsyNjBweF0gYW5pbWF0ZS1yZXZlYWwgc2VsZi1zdGFydFwiLFxuICB9KTtcblxuICBjb25zdCBvdmVybGF5ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2Zvcm1dLCB7XG4gICAgY2xhc3M6XG4gICAgICBcIm92ZXJsYXkgY2xvc2UtbW9kYWwgZml4ZWQgaW5zZXQtMCAgei0xMCBiZy1bcmdiYSgwLDAsMCwwLjUpXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC00IG1pbi13LVsyNzBweF0gcHQtWzEyMHB4XVwiLFxuICB9KTtcbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldERlZmF1bHRMb2FjdGlvbkZvcm07XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4uLy4uL2hlbHBlclwiO1xuaW1wb3J0IHdlYXRoZXJDYXJkVG9wIGZyb20gXCIuLi93ZWF0aGVyQ2FyZC1jb21wb25lbnQvd2VhdGhlckNhcmRUb3BcIjtcbmltcG9ydCBmYXZvcml0ZXMgZnJvbSBcIi4uLy4uL2RhdGEvZmF2b3JpdGVzLWRhdGFcIjtcblxuZnVuY3Rpb24gcmVuZGVyRmF2b3JpdGUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgZmF2b3JpdGVzQXJyYXkgPSBmYXZvcml0ZXMuZmF2b3JpdGVzRGF0YSgpO1xuICBsZXQgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmYXZvcml0ZXNBcnJheS5mb3JFYWNoKChmYXZvcml0ZSkgPT4ge1xuICAgIC8vIGNvbnN0IGFydGljbGUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAvLyAgIFwiYXJ0aWNsZVwiLFxuICAgIC8vICAgW3dlYXRoZXJDYXJkSGVhZGVyKGZhdm9yaXRlKV0sXG4gICAgLy8gICB7fVxuICAgIC8vICk7XG4gICAgY29uc3Qgd2VhdGhlcmNhcmQgPSB3ZWF0aGVyQ2FyZFRvcChmYXZvcml0ZSk7XG4gICAgZnJhZ21lbnQuYXBwZW5kKHdlYXRoZXJjYXJkKTtcbiAgfSk7XG4gIGNvbnN0IHNlY3Rpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgW2ZyYWdtZW50XSwge1xuICAgIGNsYXNzOiBcImZsZXggZmxleC1jb2xcIixcbiAgfSk7XG4gIC8vIGNvbnNvbGUubG9nKGZyYWdtZW50KTtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICBtYWluLmFwcGVuZChzZWN0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRmF2b3JpdGU7XG4iLCJpbXBvcnQgaW5pdGlhbEhvbWVwYWdlIGZyb20gXCIuLi9ob21lLWNvbXBvbmVudHMvaW5pdGlhbC1ob21lcGFnZS5qc1wiO1xuaW1wb3J0IGNvbmZpZ3VyZWRIb21lcGFnZSBmcm9tIFwiLi4vaG9tZS1jb21wb25lbnRzL2NvbmZpZ3VyZWQtaG9tZXBhZ2VcIjtcbmltcG9ydCBkZWZhdWx0TG9jYXRpb24gZnJvbSBcIi4uLy4uL2RhdGEvZGVmYXVsdC1sb2NhdGlvblwiO1xuaW1wb3J0IGRlZmF1bHREYXRhU3RvcmUgZnJvbSBcIi4uLy4uL2RhdGEvZGVmYXVsdC1sb2NhdGlvbi1kYXRhLmpzXCI7XG5cbmNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZGVmYXVsdExvY2F0aW9uLnNhdmVkTG9jYXRpb24oKSA9PT0gbnVsbFxuICAgID8gZnJhZ21lbnQuYXBwZW5kKGluaXRpYWxIb21lcGFnZSgpKVxuICAgIDogZnJhZ21lbnQuYXBwZW5kKFxuICAgICAgICBjb25maWd1cmVkSG9tZXBhZ2UoZGVmYXVsdERhdGFTdG9yZS5kZWZhdWx0TG9jYXRpb25EYXRhKCkpXG4gICAgICApO1xuICByZXR1cm4gZnJhZ21lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuLi9oZWxwZXJcIjtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgLypcbiAgbWFpbiBlbGVtZW50XG4gICovXG4gIGNvbnN0IG1haW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcIm1haW5cIiwgW10sIHtcbiAgICBjbGFzczpcbiAgICAgIFwidy1bOTAlXSBtYXgtdy0yeGwgZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtYXV0byBiZy1ncmF5LTkwMCByZWxhdGl2ZVwiLFxuICB9KTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuLi8uLi9oZWxwZXJcIjtcbmltcG9ydCByZW5kZXJIb21lU3RhdGUgZnJvbSBcIi4uLy4uL3N0YXRlcy9ob21lLXN0YXRlXCI7XG5pbXBvcnQgcmVuZGVyRmF2b3JpdGVTdGF0ZSBmcm9tIFwiLi4vLi4vc3RhdGVzL2Zhdm9yaXRlLXN0YXRlXCI7XG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IGNhcmRIZWFkZXJCb3R0b20gPSAoZGF0YSwgaWQpID0+IHtcbiAgY29uc3QgdGltZVNpbmNlTGFzdFVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgcmVmcmVzaEljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wicmVmcmVzaFwiXSwge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwiIHJlZnJlc2gtaWNvbiBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCAgdGV4dC1waW5rLTUwMCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMTAgaG92ZXI6Zm9udC1ib2xkIHRyYW5zaXRvbi1bc2NhbGVdIGR1cmF0aW9uLTIwMCBlYXNlLWluXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCB0aW1lU3RhbXAgPSBuZXcgRGF0ZShkYXRhKS5nZXRUaW1lKCk7XG5cbiAgICBjb25zdCBsYXN0V2VhdGhlclVwZGF0ZVRpbWUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3BhblwiLFxuICAgICAgW2BVcGRhdGVkOiAke2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QodGltZVN0YW1wKX0gYWdvYF0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiBcInVwZGF0ZS10aW1lIHRleHQtc2xhdGUtNDAwICB0ZXh0LVsxMHB4XSBzbTp0ZXh0LXhzXCIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IHRpbWVTaW5jZUxhc3RVcGRhdGVEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBbbGFzdFdlYXRoZXJVcGRhdGVUaW1lLCByZWZyZXNoSWNvbl0sXG4gICAgICB7IGNsYXNzOiBcImZsZXhcIiB9XG4gICAgKTtcblxuICAgIHJldHVybiB0aW1lU2luY2VMYXN0VXBkYXRlRGl2O1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvRmF2b3JpdGUgPSAoKSA9PiB7XG4gICAgLyphZGQgdG8gZmF2b3JpdGUqL1xuICAgIGNvbnN0IGZhdm9yaXRlSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJmYXZvcml0ZVwiXSwge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC1waW5rLTUwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LXNtIHByLVszcHhdXCIsXG4gICAgfSk7XG4gICAgY29uc3QgYWRkVG9GYXZvcml0ZUJUbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFtmYXZvcml0ZUljb24sIFwiYWRkIHRvIGZhdm9yaXRlXCJdLFxuICAgICAgeyBjbGFzczogXCJmYXZvcml0ZS1idG4gZmxleCBpdGVtcy1jZW50ZSB0ZXh0LXNtXCIgfVxuICAgICk7XG4gICAgY29uc3QgYWRkVG9GYXZvcml0ZURpdiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFthZGRUb0Zhdm9yaXRlQlRuXSwge1xuICAgICAgY2xhc3M6IFwiYWRkLWZhdm9yaXRlIGZsZXggaXRlbXMtY2VudGVyIFwiLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFkZFRvRmF2b3JpdGVEaXY7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlRnJvbUZhdm9yaXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZUljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wicmVtb3ZlX2NpcmNsZVwiXSwge1xuICAgICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIixcbiAgICB9KTtcbiAgICBjb25zdCByZW1vdmVGcm9tRmF2b3JpdGVCdG4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3BhblwiLFxuICAgICAgW3JlbW92ZUljb24sIFwicmVtb3ZlXCJdLFxuICAgICAgeyBpZDogYCR7aWR9YCwgZGF0YSwgY2xhc3M6IFwicmVtb3ZlLWZhdm9yaXRlIGZsZXggaXRlbXMtY2VudGVyXCIgfVxuICAgICk7XG4gICAgcmV0dXJuIHJlbW92ZUZyb21GYXZvcml0ZUJ0bjtcbiAgfTtcblxuICBjb25zdCBoZWFkZXJCb3R0b21MZWZ0RnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIHJlbmRlckhvbWVTdGF0ZS5yZW5kZXJpbmdIb21lKClcbiAgICA/IGhlYWRlckJvdHRvbUxlZnRGcmFnbWVudC5hcHBlbmQodGltZVNpbmNlTGFzdFVwZGF0ZShkYXRhKSlcbiAgICA6IGhlYWRlckJvdHRvbUxlZnRGcmFnbWVudC5hcHBlbmQoYWRkVG9GYXZvcml0ZSgpKTtcblxuICBjb25zdCBoZWFkZXJCb3R0b21MZWZ0ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbaGVhZGVyQm90dG9tTGVmdEZyYWdtZW50XSxcbiAgICBudWxsXG4gICk7XG5cbiAgY29uc3QgaGVhZGVyQm90dG9tUmlnaHQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbcmVtb3ZlRnJvbUZhdm9yaXRlKCldKTtcblxuICAvL1xuXG4gIGNvbnN0IGhlYWRlckJvdHRvbSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgcmVuZGVyRmF2b3JpdGVTdGF0ZS5yZW5kZXJpbmdGYXZvcml0ZSgpXG4gICAgICA/IFtoZWFkZXJCb3R0b21MZWZ0LCBoZWFkZXJCb3R0b21SaWdodF1cbiAgICAgIDogW2hlYWRlckJvdHRvbUxlZnRdLFxuICAgIHtcbiAgICAgIGNsYXNzOiBgYm90dG9tLWRpdmAsXG4gICAgfVxuICApO1xuICAvL1xuICBjb25zb2xlLmxvZyhcbiAgICByZW5kZXJIb21lU3RhdGUucmVuZGVyaW5nSG9tZSgpLFxuICAgIHJlbmRlckZhdm9yaXRlU3RhdGUucmVuZGVyaW5nRmF2b3JpdGUoKVxuICApO1xuICByZXR1cm4gaGVhZGVyQm90dG9tO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZEhlYWRlckJvdHRvbTtcbiIsImZ1bmN0aW9uIHRvZ2dsZXJTd2l0Y2goaXNUb2dnbGVkLCB0YXJnZXQpIHtcbiAgLy9jb25zdCB0b2dnbGVPbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLW9uXCIpO1xuICAvLyBjb25zdCB0b2dnbGVPZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1vZmZcIik7XG5cbiAgY29uc3QgdG9nZ2xlT2ZmID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlblswXTtcbiAgY29uc3QgdG9nZ2xlT24gPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuWzFdO1xuICBjb25zdCBjZWxzaXVzID0gdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcblxuICBjb25zb2xlLmxvZyhmYWhyZW5oZWl0KTtcbiAgaWYgKGlzVG9nZ2xlZCkge1xuICAgIC8vc3dpdGNoIHRvZ2dsZXJcbiAgICB0b2dnbGVPbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIHRvZ2dsZU9mZi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIC8vc3dpdGNoIGJldHdlZW4gYWN0aXZlIHdlYXRoZXIgdW5pdFxuICAgIGNlbHNpdXMuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtcHVycGxlLTQwMFwiKTtcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWdyYXktNTAwXCIpO1xuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZ3JheS01MDBcIik7XG4gICAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwidGV4dC1wdXJwbGUtNDAwXCIpO1xuICB9XG5cbiAgaWYgKCFpc1RvZ2dsZWQpIHtcbiAgICB0b2dnbGVPbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHRvZ2dsZU9mZi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QuYWRkKFwidGV4dC1wdXJwbGUtNDAwXCIpO1xuICAgIGNlbHNpdXMuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZ3JheS01MDBcIik7XG4gICAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwidGV4dC1ncmF5LTUwMFwiKTtcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXB1cnBsZS00MDBcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlclN3aXRjaDtcbiIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tIFwiLi4vLi4vaGVscGVyXCI7XG5pbXBvcnQgd2VhdGhlckNhcmRCb3R0b20gZnJvbSBcIi4vd2VhdGhlckNhcmRCb3R0b21cIjtcbmltcG9ydCB3ZWF0aGVyQ2FyZFRvcCBmcm9tIFwiLi93ZWF0aGVyQ2FyZFRvcFwiO1xuXG5pbXBvcnQgbG9hZGluZyBmcm9tIFwiLi4vLi4vbG9hZGluZ1wiO1xuY29uc3Qgd2VhdGhlckNhcmQgPSAod2VhdGhlcikgPT4ge1xuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIHdlYXRoZXIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGFydGljbGUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic2VjdGlvblwiLFxuICAgICAgW3dlYXRoZXJDYXJkVG9wKGl0ZW0pLCB3ZWF0aGVyQ2FyZEJvdHRvbShpdGVtKV0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzOlxuICAgICAgICAgIFwid2VhdGhlci1jYXJkIGdyaWQgZ3JpZC1jb2xzLTEgZ3JpZC1yb3dzLTIgcm91bmRlZCBoLWZ1bGwgbXQtMyBtYi01IHB4LTNcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGZyYWdtZW50LmFwcGVuZChhcnRpY2xlKTtcbiAgfSk7XG4gIHJldHVybiBmcmFnbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJDYXJkO1xuIiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuLi8uLi9oZWxwZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL2NsYXNzZXNcIjtcbmNvbnN0IHdlYXRoZXJDYXJkQm90dG9tID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgZmVlbHNMaWtlSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0aGVybW9zdGF0XCJdLCB7XG4gICAgY2xhc3M6IGBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCAke3N0eWxlcy5pY29uc31gLFxuICB9KTtcbiAgY29uc3QgZmVlbHNMaWtlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BmZWVscyBsaWtlOiAke3dlYXRoZXIuZmVlbHNMaWtlLnRvRml4ZWQoMCl9YCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBmZWVsc0xpa2VEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbZmVlbHNMaWtlSWNvbiwgZmVlbHNMaWtlXSwge1xuICAgIGNsYXNzOiBzdHlsZXMuY2FyZFN0eWxlcyxcbiAgfSk7XG5cbiAgLy9odW1pZGl0eVxuICBjb25zdCBodW1pZGl0eUljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wid2F0ZXJfZHJvcFwiXSwge1xuICAgIGNsYXNzOiBgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgJHtzdHlsZXMuaWNvbnN9YCxcbiAgfSk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BIdW1pZGl0eTogJHt3ZWF0aGVyLmh1bWlkaXR5fSVgXSxcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2h1bWlkaXR5SWNvbiwgaHVtaWRpdHldLCB7XG4gICAgY2xhc3M6IHN0eWxlcy5jYXJkU3R5bGVzLFxuICB9KTtcblxuICAvL3dpbmRcbiAgY29uc3Qgd2luZEljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wiYWlyXCJdLCB7XG4gICAgY2xhc3M6IGBtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCAke3N0eWxlcy5pY29uc31gLFxuICB9KTtcbiAgY29uc3Qgd2luZCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIFtgV2luZDogJHt3ZWF0aGVyLndpbmQudG9GaXhlZCgwKX0gbXBzYF0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCB3aW5kRGl2ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW3dpbmRJY29uLCB3aW5kXSwge1xuICAgIGNsYXNzOiBzdHlsZXMuY2FyZFN0eWxlcyxcbiAgfSk7XG5cbiAgLy9wcmVzc3VyZVxuICBjb25zdCBwcmVzc3VyZUljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wic2NpZW5jZVwiXSwge1xuICAgIGNsYXNzOiBgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgJHtzdHlsZXMuaWNvbnN9YCxcbiAgfSk7XG4gIGNvbnN0IHByZXNzdXJlID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2BwcmVzc3VyZTogJHt3ZWF0aGVyLnByZXNzdXJlfWBdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgcHJlc3N1cmVEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbcHJlc3N1cmVJY29uLCBwcmVzc3VyZV0sIHtcbiAgICBjbGFzczogc3R5bGVzLmNhcmRTdHlsZXMsXG4gIH0pO1xuXG4gIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kKGh1bWlkaXR5RGl2LCB3aW5kRGl2LCBwcmVzc3VyZURpdiwgZmVlbHNMaWtlRGl2KTtcbiAgY29uc3Qgb3RoZXJXZWF0aGVyRGV0YWlscyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiLCBbZnJhZ21lbnRdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcImNhcmQtYm90dG9tIGJnLXNsYXRlLTgwMCBncmlkIGdyaWQtY29scy0yIGdyaWQtcm93cy0yIGdhcC14LTMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgcHktMiBmb250LWZpcmEgdGV4dC1zbSByb3VuZGVkLWxnIHNoYWRvdy1bcmdiYSgwLDAsMCwwLjE2KV8wcHhfM3B4XzZweCxyZ2JhKDAsMCwwLDAuMjMpXzBweF8zcHhfNnB4XSBtYi0zIFwiLFxuICB9KTtcblxuICByZXR1cm4gb3RoZXJXZWF0aGVyRGV0YWlscztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJDYXJkQm90dG9tO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vY2xhc3Nlc1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuLi8uLi9oZWxwZXJcIjtcbmltcG9ydCByZW5kZXJVc2VyVGltZSBmcm9tIFwiLi4vLi4vdGltZUFuZERhdGVcIjtcbmltcG9ydCByZW5kZXJIb21lU3RhdGUgZnJvbSBcIi4uLy4uL3N0YXRlcy9ob21lLXN0YXRlXCI7XG5pbXBvcnQgY2FyZEhlYWRlckJvdHRvbSBmcm9tIFwiLi9jYXJkSGVhZGVyQm90dG9tXCI7XG5cbmNvbnN0IHdlYXRoZXJDYXJkVG9wID0gKHdlYXRoZXIpID0+IHtcbiAgLy9oZWFkZXIgbGVmdFxuICBjb25zdCBsb2NhdGlvbkljb24gPSBoZWxwZXIuYWRkSWNvbihcImxvY2F0aW9uX29uXCIsIFtzdHlsZXMuaWNvbnNdKTtcbiAgbG9jYXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXhzXCIsIFwidGV4dC1pbmRpZ28tNDAwXCIpO1xuICBjb25zdCBjaXR5ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtgJHt3ZWF0aGVyLmNpdHl9LCBgXSwgbnVsbCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJoM1wiLFxuICAgIFtsb2NhdGlvbkljb24sIGNpdHksIHdlYXRoZXIuY291bnRyeV0sXG4gICAgeyBjbGFzczogXCJcIiB9XG4gICk7XG4gIGNvbnN0IGxvY2FsVGltZSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiaDNcIixcbiAgICBbYCR7cmVuZGVyVXNlclRpbWUod2VhdGhlci50aW1lWm9uZSl9YF0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBoZWFkZXJUb3AgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbbG9jYXRpb24sIGxvY2FsVGltZV0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwiaGVhZGVyLXRvcCB3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMgY2VudGVyIHRleHQtc20gdGV4dC1pbmRpZ28tMjAwIGZvbnQtYmFybG93ICBmb250LWxpZ2h0IHB0LTJcIixcbiAgfSk7XG4gIGNvbnN0IGFycm93ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcImFycm93X3JpZ2h0XCJdLCB7XG4gICAgY2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC1waW5rLTUwMCBhbGlnbi1taWRkbGUgXCIsXG4gIH0pO1xuXG4gIC8vd2VhdGhlciBpY29uXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW10sIHtcbiAgICBzcmM6IHdlYXRoZXIuaWNvbixcbiAgICBhbHQ6IFwid2VhdGhlci1pY29uXCIsXG4gICAgY2xhc3M6IFwic2VsZi1zdGFydCAtbXQtNSB3LVsxMTBweF0gaC1bMTEwcHhdXCIsXG4gIH0pO1xuXG4gIC8vd2VhdGhlciBkZXNjcmlwdGlvblxuICBjb25zdCB3ZWF0aGVyZGVzY3JpcHRpb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImg1XCIsXG4gICAgW2Fycm93LCB3ZWF0aGVyLndlYXRoZXJkZXNjXSxcbiAgICB7XG4gICAgICBjbGFzczpcbiAgICAgICAgXCJncmF5LTQwMCBmb250LWZpcmEgZm9udC1saWdodCB0ZXh0LXhzIHNlbGYtc3RhcnQganVzdGlmeS1zZWxmLXN0YXJ0IHctWzExNXB4XVwiLFxuICAgIH1cbiAgKTtcblxuICAvL3dlYXRoZXIgaWNvbiBhbmQgZGVzY3JpcHRpb24gd3JhcHBlclxuICBjb25zdCB3ZWF0aGVyTGVmdCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW3dlYXRoZXJkZXNjcmlwdGlvbiwgd2VhdGhlckljb25dLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc20gcHQtM1wiLFxuICAgIH1cbiAgKTtcbiAgLy9kZWdyZWUgc3BlY2lhbCBjaGFyYWN0ZXJcbiAgY29uc3QgZGVnID0gaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKTtcbiAgY29uc3QgY2Vsc2l1c1NwYW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wiQ1wiXSwgbnVsbCk7XG4gIC8vdGVtcGVyYXR1cmUgdmFsdWVcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImgxXCIsXG4gICAgW3dlYXRoZXIudGVtcC50b0ZpeGVkKDApLCBkZWcsIGNlbHNpdXNTcGFuXSxcbiAgICB7XG4gICAgICBjbGFzczogXCJ0ZW1wZXJhdHVyZS12YWx1ZSB0ZXh0LTV4bCBzbTp0ZXh0LTd4bCB0ZXh0LXB1cnBsZS00MDAgbWItMVwiLFxuICAgIH1cbiAgKTtcblxuICAvL21heGltdW0gYW5kIG1pbmltdW0gdGVtcGVyYXR1cmVcbiAgY29uc3QgaGlnaCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtcIkg6XCIsIHdlYXRoZXIubWF4VGVtcCwgaGVscGVyLnNwZWNpYWwoXCImZGVnO1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBjb25zdCBsb3cgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcInNwYW5cIixcbiAgICBbXCJMOlwiLCB3ZWF0aGVyLm1pblRlbXAsIGhlbHBlci5zcGVjaWFsKFwiJmRlZztcIildLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBtaWQgPSBoZWxwZXIuZGVncmVlQ2hhcmFjdGVyKFwiJm1pZDtcIik7XG4gIG1pZC5jbGFzc0xpc3QuYWRkKFwicHgtWzFweF1cIiwgXCJ0ZXh0LWJhc2VcIik7XG5cbiAgY29uc3QgbWluTWF4ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBbaGlnaCwgbWlkLCBsb3ddLCB7XG4gICAgY2xhc3M6XG4gICAgICBcInRleHQtc20gZm9udC1iYXJsb3cgc2VtaWJvbGQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1pbmRpZ28tMzAwXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGNoZWNrYm94ID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBudWxsLCB7XG4gICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgIGlkOiBgJHt3ZWF0aGVyLmlkfWAsXG4gICAgY2xhc3M6IFwiY2hlY2tib3ggaGlkZGVuXCIsXG4gIH0pO1xuICAvKnRyeSovXG4gIGNvbnN0IHRvZ2dsZU9uSWNvbiA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0b2dnbGVfb25cIl0sIHtcbiAgICBjbGFzczpcbiAgICAgIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgdGV4dC0yeGwgIGhpZGRlbiB0b2dnbGUtb24gdHJhbnNpdGlvbi1bZGlzcGxheV0gZHVyYXRpb24tNzAwIGVhc2UtaW4gXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRvZ2dsZU9mZkljb24gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1widG9nZ2xlX29mZlwiXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB0ZXh0LTJ4bCB0b2dnbGUtb2ZmIHRyYW5zaXRpb24tW2Rpc3BsYXldIGR1cmF0aW9uLTcwMCBlYXNlLWluXCIsXG4gIH0pO1xuICBjb25zdCBsYWJlbCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgW3RvZ2dsZU9mZkljb24sIHRvZ2dsZU9uSWNvbl0sIHtcbiAgICBjbGFzczogXCJ0b2dnbGVyIHB4LTEgZmxleCB0ZXh0LXhzIHRleHQtaW5kaWdvLTMwMCBjdXJzb3ItcG9pbnRlclwiLFxuICAgIGZvcjogYCR7d2VhdGhlci5pZH1gLFxuICB9KTtcblxuICBjb25zdCBmYWhyZW5oZWl0U3ltYm9sID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJzcGFuXCIsXG4gICAgW2hlbHBlci5zcGVjaWFsKFwiJmRlZztGXCIpXSxcbiAgICBudWxsXG4gICk7XG4gIGhlbHBlci5hZGRDbGFzcyhmYWhyZW5oZWl0U3ltYm9sLCBbXG4gICAgXCJhbGlnbi10ZXh0LWNlbnRlclwiLFxuICAgIFwiZmFocmVuaGVpdFwiLFxuICAgIFwidGV4dC1ncmF5LTUwMFwiLFxuICAgIFwidGV4dC1zbVwiLFxuICBdKTtcbiAgY29uc3QgY2Vsc2l1c1N5bWJvbCA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwic3BhblwiLFxuICAgIFtoZWxwZXIuc3BlY2lhbChcIiZkZWc7Q1wiKV0sXG4gICAgbnVsbFxuICApO1xuICBoZWxwZXIuYWRkQ2xhc3MoY2Vsc2l1c1N5bWJvbCwgW1xuICAgIFwiYWxpZ24tdGV4dC1jZW50ZXJcIixcbiAgICBcImNlbHNpdXNcIixcbiAgICBcInRleHQtcHVycGxlLTQwMFwiLFxuICAgIFwidGV4dC1zbVwiLFxuICBdKTtcblxuICBjb25zdCB0b2dnbGVycyA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW2NlbHNpdXNTeW1ib2wsIGNoZWNrYm94LCBsYWJlbCwgZmFocmVuaGVpdFN5bWJvbF0sXG4gICAge1xuICAgICAgY2xhc3M6IFwidG9nZ2xlcnMgZmxleCBpdGVtcy1jZW50ZXIgZm9udC1ha3NoYXIgZm9udC1zZW1pYm9sZFwiLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgdG9nZ2xlcnNXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW3RvZ2dsZXJzXSwge1xuICAgIGNsYXNzOiBcInRvZ2dsZXJzLXdyYXBwZXIgZmxleCBpdGVtcy1jZW50ZXIgc2VsZi1jZW50ZXJcIixcbiAgfSk7XG5cbiAgLyplbmQgb2YgdHJ5Ki9cblxuICBjb25zdCB0ZW1wV3JhcHBlciA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW3RlbXBlcmF0dXJlLCBtaW5NYXgsIHRvZ2dsZXJzV3JhcHBlcl0sXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwidGVtcC13cmFwcGVyIHctNC81IGZsZXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiLFxuICAgIH1cbiAgKTtcblxuICAvL3RlbXBlcmF0dXJlIGFuZCBtaW5tYXggd3JhcHBlclxuICBjb25zdCB3ZWF0aGVyUmlnaHQgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbdGVtcFdyYXBwZXJdLCB7XG4gICAgY2xhc3M6IFwid2VhdGhlci1yaWdodCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiLFxuICB9KTtcblxuICAvKlxuICBjb25zdCBoZWFkZXJCb3R0b21GcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIHJlbmRlclN0YXRlLmN1cnJlbnRTdGF0ZSgpXG4gICAgPyBoZWFkZXJCb3R0b21GcmFnbWVudC5hcHBlbmQoXG4gICAgICAgIGNhcmRIZWFkZXJCb3R0b20udGltZVNpbmNlTGFzdFVwZGF0ZSh3ZWF0aGVyLnRpbWUpXG4gICAgICApXG4gICAgOiBoZWFkZXJCb3R0b21GcmFnbWVudC5hcHBlbmQoY2FyZEhlYWRlckJvdHRvbS5hZGRUb0Zhdm9yaXRlKCkpO1xuICAgICovXG5cbiAgLypcbiAgc2V0IHVwIGNsYXNzIHRvIGNvbmR0aW9uYWxseSBhcHBseSB0byBoZWFkZXJCb3R0b20gZWxlbWVudFxuICAqL1xuXG4gIGNvbnN0IGNsYXNzT25lID0gXCJ0ZXh0LXNtIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiO1xuICBjb25zdCBjbGFzc1R3byA9IFwidGV4dC1zbSBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBwci0xIHBiLTFcIjtcbiAgY29uc3QgdXNlZENsYXNzID0gcmVuZGVySG9tZVN0YXRlLnJlbmRlcmluZ0hvbWUoKSA/IGNsYXNzT25lIDogY2xhc3NUd287XG4gIC8qXG4gIGNvbnN0IGhlYWRlckJvdHRvbSA9IGhlbHBlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtoZWFkZXJCb3R0b21GcmFnbWVudF0sIHtcbiAgICBjbGFzczogYCR7Y2xhc3NPbmV9YCxcbiAgfSk7XG4gICovXG5cbiAgY29uc3Qgd2VhdGhlcldyYXBwZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFt3ZWF0aGVyTGVmdCwgd2VhdGhlclJpZ2h0XSxcbiAgICB7XG4gICAgICBjbGFzczpcbiAgICAgICAgXCJ3ZWF0aGVyLXdyYXBwcGVyIGdyaWQgZ3JpZC1jb2xzLVsxZnJfMWZyXSBncmlkLXJvd3MtMSBnYXAteC0yIHctZnVsbCBoLWZ1bGxcIixcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICBmcmFnbWVudC5hcHBlbmQoXG4gICAgaGVhZGVyVG9wLFxuICAgIHdlYXRoZXJXcmFwcGVyLFxuICAgIGNhcmRIZWFkZXJCb3R0b20od2VhdGhlci50aW1lLCB3ZWF0aGVyLmlkKVxuICApO1xuXG4gIGNvbnN0IGRlZmF1bHRDbGFzcyA9XG4gICAgXCJjYXJkLWhlYWRlciBncmlkIGdyaWQtcm93cy1bNTBweF8xZnJfNTBweF0gZ3JpZC1jb2xzLTEganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBiZy1zbGF0ZS04MDAgbWItMyBtdC01IHB0LTIgcHgtNCByb3VuZGVkLWxnIHNoYWRvdy1bcmdiYSgwLDAsMCwwLjE2KV8wcHhfM3B4XzZweCxyZ2JhKDAsMCwwLDAuMjMpXzBweF8zcHhfNnB4XSBmb250LXNhbnNwcm9cIjtcblxuICBjb25zdCBoZWFkZXIgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImFydGljbGVcIiwgW2ZyYWdtZW50XSwge1xuICAgIGNsYXNzOiBgJHtkZWZhdWx0Q2xhc3N9YCxcbiAgICBpZDogYHdlYXRoZXItY2FyZC0ke3dlYXRoZXIuaWR9YCxcbiAgfSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQ2FyZFRvcDtcbiIsImltcG9ydCByZW5kZXJIb21lU3RhdGUgZnJvbSBcIi4uL3N0YXRlcy9ob21lLXN0YXRlXCI7XG5pbXBvcnQgcmVuZGVyRmF2b3JpdGVTdGF0ZSBmcm9tIFwiLi4vc3RhdGVzL2Zhdm9yaXRlLXN0YXRlXCI7XG5pbXBvcnQgZmF2b3JpdGVzIGZyb20gXCIuL2Zhdm9yaXRlcy1kYXRhXCI7XG5pbXBvcnQgZGVmYXVsdERhdGFTdG9yZSBmcm9tIFwiLi9kZWZhdWx0LWxvY2F0aW9uLWRhdGFcIjtcblxuZnVuY3Rpb24gZGF0YUNvbnRyb2xsZXIod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgaG9tZVZpZXdEYXRhID0gcmVuZGVySG9tZVN0YXRlLnJlbmRlcmluZ0hvbWUoKVxuICAgID8gZGVmYXVsdERhdGFTdG9yZS5kZWZhdWx0TG9jYXRpb25EYXRhKClcbiAgICA6IHdlYXRoZXJEYXRhO1xuICB3ZWF0aGVyRGF0YSA9IHJlbmRlckZhdm9yaXRlU3RhdGUucmVuZGVyaW5nRmF2b3JpdGUoKVxuICAgID8gZmF2b3JpdGVzLmZhdm9yaXRlc0RhdGEoKVxuICAgIDogaG9tZVZpZXdEYXRhO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGF0YUNvbnRyb2xsZXI7XG4iLCJjb25zdCBkZWZhdWx0RGF0YVN0b3JlID0gKCgpID0+IHtcbiAgY29uc3QgbG9jYXRpb25LZXkgPSBcImRlZmF1bHRMb2NhdGlvbldlYXRoZXJEYXRhXCI7XG4gIGxldCBkZWZhdWx0TG9jYXRpb25XZWF0aGVyRGF0YSA9IGdldERhdGFGcm9tU3RvcmFnZSgpO1xuICBsZXQgaXNEZWZhdWx0UmVxdWVzdCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YUZyb21TdG9yYWdlKCkge1xuICAgIGNvbnN0IHJldHJpZXZlZFdlYXRoZXJEYXRhID1cbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYXRpb25LZXkpKSB8fCBudWxsO1xuICAgIHJldHVybiByZXRyaWV2ZWRXZWF0aGVyRGF0YTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERhdGFUb1N0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICBsb2NhdGlvbktleSxcbiAgICAgIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRMb2NhdGlvbldlYXRoZXJEYXRhKVxuICAgICk7XG4gIH1cblxuICBjb25zdCBzZXREYXRhID0gKGRhdGEpID0+IHtcbiAgICBkZWZhdWx0TG9jYXRpb25XZWF0aGVyRGF0YSA9IGRhdGE7XG4gICAgc2V0RGF0YVRvU3RvcmFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRGVmYXVsdERhdGEgPSAoKSA9PiB7XG4gICAgZGVmYXVsdExvY2F0aW9uV2VhdGhlckRhdGEgPSBudWxsO1xuICAgIHNldERhdGFUb1N0b3JhZ2UoKTtcbiAgfTtcblxuICBjb25zdCBkZWZhdWx0UmVxdWVzdFN0YXRlID0gKCkgPT4ge1xuICAgIGlzRGVmYXVsdFJlcXVlc3QgPSBkZWZhdWx0TG9jYXRpb25XZWF0aGVyRGF0YSA9PT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcbiAgICByZXR1cm4gaXNEZWZhdWx0UmVxdWVzdDtcbiAgfTtcblxuICBjb25zdCBkZWZhdWx0TG9jYXRpb25EYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiBkZWZhdWx0TG9jYXRpb25XZWF0aGVyRGF0YTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldERhdGEsXG4gICAgZGVmYXVsdExvY2F0aW9uRGF0YSxcbiAgICBjbGVhckRlZmF1bHREYXRhLFxuICAgIGRlZmF1bHRSZXF1ZXN0U3RhdGUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0RGF0YVN0b3JlO1xuIiwiY29uc3QgZGVmYXVsdExvY2F0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgbG9jYXRpb25LZXkgPSBcImRlZmF1bHRMb2NhdGlvblwiO1xuICBsZXQgbG9jYXRpb24gPSBnZXRMb2NhdGlvbkZyb21TdG9yYWdlKCk7XG5cbiAgZnVuY3Rpb24gZ2V0TG9jYXRpb25Gcm9tU3RvcmFnZSgpIHtcbiAgICBjb25zdCByZXRyaWV2ZWRMb2NhdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2F0aW9uS2V5KSB8fCBudWxsO1xuICAgIGNvbnNvbGUubG9nKHJldHJpZXZlZExvY2F0aW9uKTtcbiAgICByZXR1cm4gcmV0cmlldmVkTG9jYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMb2NhdGlvblRvU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhdGlvbktleSwgbG9jYXRpb24pO1xuICB9XG5cbiAgY29uc3Qgc2V0TG9jYXRpb24gPSAoc2VsZWN0ZWRMb2NhdGlvbikgPT4ge1xuICAgIGlmIChsb2NhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2NhdGlvbiA9IHNlbGVjdGVkTG9jYXRpb247XG4gICAgc2V0TG9jYXRpb25Ub1N0b3JhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZWRMb2NhdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0TG9jYXRpb24sIHNhdmVkTG9jYXRpb24gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhdGlvbjtcbiIsImNvbnN0IGZhdm9yaXRlcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGZhdm9yaXRlS2V5ID0gXCJmYXZvcml0ZVwiO1xuICBsZXQgZmF2b3JpdGVMb2NhdGlvbnMgPSBnZXRGYXZvcml0ZXNGcm9tU3RvcmFnZSgpO1xuXG4gIGZ1bmN0aW9uIGdldEZhdm9yaXRlc0Zyb21TdG9yYWdlKCkge1xuICAgIGNvbnN0IHJldHJpZXZlZEZhdm9yaXRlcyA9XG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGZhdm9yaXRlS2V5KSkgfHwgW107XG4gICAgY29uc29sZS5sb2cocmV0cmlldmVkRmF2b3JpdGVzKTtcbiAgICByZXR1cm4gcmV0cmlldmVkRmF2b3JpdGVzO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0RmF2b3JpdGVzVG9TdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGZhdm9yaXRlS2V5LCBKU09OLnN0cmluZ2lmeShmYXZvcml0ZUxvY2F0aW9ucykpO1xuICB9XG5cbiAgY29uc3QgYWRkRmF2b3JpdGUgPSAoZmF2b3JpdGUpID0+IHtcbiAgICBjb25zdCBbb2JqXSA9IGZhdm9yaXRlO1xuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlKTtcbiAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgIGZhdm9yaXRlTG9jYXRpb25zID0gWy4uLmZhdm9yaXRlTG9jYXRpb25zLCBvYmpdO1xuICAgIHNldEZhdm9yaXRlc1RvU3RvcmFnZSgpO1xuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlTG9jYXRpb25zKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVGYXZvcml0ZSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IG5ld0Zhdm9yaXRlcyA9IGZhdm9yaXRlTG9jYXRpb25zLmZpbHRlcihcbiAgICAgIChmYXZvcml0ZSkgPT4gZmF2b3JpdGUuaWQgIT09IGlkXG4gICAgKTtcbiAgICBmYXZvcml0ZUxvY2F0aW9ucyA9IG5ld0Zhdm9yaXRlcztcbiAgICBzZXRGYXZvcml0ZXNUb1N0b3JhZ2UoKTtcbiAgfTtcblxuICAvKlxuICBjb25zdCBjbGVhckRlZmF1bHREYXRhID0gKCkgPT4ge1xuICAgIGZhdm9yaXRlTG9jYXRpb25zID0gW107XG4gICAgc2V0RGF0YVRvU3RvcmFnZSgpO1xuICB9O1xuICAqL1xuXG4gIGNvbnN0IHVwZGF0ZUZhdm9yaXRlcyA9IChuZXdGYXZvcml0ZXMpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkQXJyYXkgPSBmYXZvcml0ZUxvY2F0aW9ucy5tYXAoKGZhdm9yaXRlKSA9PlxuICAgICAgZmF2b3JpdGUuY2l0eSA9PT0gbmV3RmF2b3JpdGVzLmNpdHlcbiAgICAgICAgPyAoZmF2b3JpdGUgPSB7IC4uLm5ld0Zhdm9yaXRlcyB9KVxuICAgICAgICA6IGZhdm9yaXRlXG4gICAgKTtcbiAgICBmYXZvcml0ZUxvY2F0aW9ucyA9IHVwZGF0ZWRBcnJheTtcbiAgICBjb25zb2xlLmxvZyhcImkgdXBkYXRlZFwiKTtcbiAgICBjb25zb2xlLmxvZyhmYXZvcml0ZUxvY2F0aW9ucyk7XG4gIH07XG4gIC8qXG4gIGNvbnN0IGRlZmF1bHRSZXF1ZXN0U3RhdGUgPSAoKSA9PiB7XG4gICAgaXNEZWZhdWx0UmVxdWVzdCA9IGRlZmF1bHRMb2NhdGlvbldlYXRoZXJEYXRhID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHJldHVybiBpc0RlZmF1bHRSZXF1ZXN0O1xuICB9O1xuKi9cblxuICBjb25zdCBmYXZvcml0ZXNEYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiBmYXZvcml0ZUxvY2F0aW9ucztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZEZhdm9yaXRlLFxuICAgIGRlbGV0ZUZhdm9yaXRlLFxuICAgIGZhdm9yaXRlc0RhdGEsXG4gICAgdXBkYXRlRmF2b3JpdGVzLFxuICAgIC8vIGRlZmF1bHRSZXF1ZXN0U3RhdGUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmYXZvcml0ZXM7XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Vycm9yKHJlc3BvbnNlKSB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGdldCB3ZWF0aGVyIGRldGFpbHNcIik7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU9uRXJyb3IoZXJyLCBpc0xvYWRpbmcpIHtcbiAgY29uc3Qgc2FkRmFjZSA9IGhlbHBlci5zcGVjaWFsKFwiJmxwYXI7Jmd0OyZsb3diYXI7Jmx0OyZycGFyO1wiKTtcbiAgY29uc3Qgc2FkRmFjZVNwYW4gPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW3NhZEZhY2VdLCB7XG4gICAgY2xhc3M6XG4gICAgICBcInRleHQtNHhsIGxlYWRpbmctbm9ybWFsIHRyYWNraW5nLXRpZ2h0ZXIgZm9udC1tZWRpdW0gbWItMSBzbTp0ZXh0LTZ4bCBzbTptYi0zXCIsXG4gIH0pO1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImgyXCIsIFtlcnIubWVzc2FnZV0sIHtcbiAgICBjbGFzczogXCJ0ZXh0LTJ4bCBzbTp0ZXh0LTR4bCBmb250LW1lZGl1bVwiLFxuICB9KTtcblxuICBjb25zdCBkYXNoT25lID0gaGVscGVyLmRlZ3JlZUNoYXJhY3RlcihcIiZoeXBoZW47XCIpO1xuICBkYXNoT25lLmNsYXNzTGlzdC5hZGQoXCJwci1bMXB4XVwiKTtcbiAgY29uc3QgZGFzaFR3byA9IGhlbHBlci5kZWdyZWVDaGFyYWN0ZXIoXCImaHlwaGVuO1wiKTtcbiAgZGFzaFR3by5jbGFzc0xpc3QuYWRkKFwicHItWzFweF1cIik7XG5cbiAgY29uc3QgZml4T25lID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2Rhc2hPbmUsIFwiY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uXCJdLFxuICAgIG51bGxcbiAgKTtcbiAgY29uc3QgZml4VHdvID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgW2Rhc2hUd28sIFwiZW5zdXJlIHdlYXRoZXIgbG9jYXRpb24gaXMgY29ycmVjdGx5IHNwZWx0XCJdLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBmaXhTdWdnZXN0aW9uID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW2ZpeE9uZSwgZml4VHdvXSwge1xuICAgIGNsYXNzOiBcImJvcmRlci1bMXB4XSBib3JkZXItc2xhdGUtNDAwIHJvdW5kZWQtbGcgcHgtMiBweS0yIG10LTVcIixcbiAgfSk7XG5cbiAgY29uc3QgZXJyb3JXcmFwcGVyID0gaGVscGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBbc2FkRmFjZVNwYW4sIGVycm9yTWVzc2FnZSwgZml4U3VnZ2VzdGlvbl0sXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwiZXJyb3Itd3JhcHBlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktdG9wIGl0ZW1zLWNlbnRlciBoLWZ1bGwgcHQtWzEyMHB4XSBzbTpqdXN0aWZ5LWNlbnRlciBzbTpwdC0wXCIsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IG9uRXJyb3JEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbZXJyb3JXcmFwcGVyXSwge1xuICAgIGNsYXNzOlxuICAgICAgXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IGZvbnQtc2Fuc3BybyB0ZXh0LXNsYXRlLTMwMCB0ZXh0LXNtIHNtOnRleHQtYmFzZSB3LWZ1bGwgaC1mdWxsXCIsXG4gIH0pO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICBtYWluLmFwcGVuZChvbkVycm9yRGl2KTtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIGNvbnNvbGUubG9nKGlzTG9hZGluZyk7XG4gIGNvbnNvbGUubG9nKGVycik7XG4gIHJldHVybiBtYWluO1xufVxuIiwiaW1wb3J0IHNldFRlbXBlcmF0dXJlVW5pdCBmcm9tIFwiLi90b2dnbGUtd2VhdGhlci11bml0XCI7XG5pbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi9mZXRjaC1kYXRhXCI7XG5pbXBvcnQgeyB3ZWF0aGVyRGF0YSB9IGZyb20gXCIuL3RyYW5zb3JtLWRhdGFcIjtcbmltcG9ydCBkZWZhdWx0TG9jYXRpb24gZnJvbSBcIi4vZGF0YS9kZWZhdWx0LWxvY2F0aW9uXCI7XG5pbXBvcnQgdG9nZ2xlclN3aXRjaCBmcm9tIFwiLi9jb21wb25lbnRzL3dlYXRoZXJDYXJkLWNvbXBvbmVudC9yZW5kZXItd2VhdGhlci11bml0XCI7XG5pbXBvcnQgZGVmYXVsdERhdGFTdG9yZSBmcm9tIFwiLi9kYXRhL2RlZmF1bHQtbG9jYXRpb24tZGF0YVwiO1xuaW1wb3J0IHJlbmRlckhvbWVTdGF0ZSBmcm9tIFwiLi9zdGF0ZXMvaG9tZS1zdGF0ZVwiO1xuaW1wb3J0IGZhdm9yaXRlcyBmcm9tIFwiLi9kYXRhL2Zhdm9yaXRlcy1kYXRhXCI7XG5pbXBvcnQgcmVuZGVyRmF2b3JpdGVTdGF0ZSBmcm9tIFwiLi9zdGF0ZXMvZmF2b3JpdGUtc3RhdGVcIjtcbmltcG9ydCByZW5kZXJGYXZvcml0ZSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4tY29tcG9uZW50cy9yZW5kZXJGYXZvcml0ZXNcIjtcbmltcG9ydCBkYXRhQ29udHJvbGxlciBmcm9tIFwiLi9kYXRhL2RhdGEtY29udHJvbGxlclwiO1xuaW1wb3J0IHJlbmRlckhvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLWNvbXBvbmVudHMvcmVuZGVySG9tZVwiO1xuaW1wb3J0IHJlbmRlcmluZ1N0YXRlIGZyb20gXCIuL3N0YXRlcy9zdGF0ZVwiO1xuXG4vL2dldCBsb2NhdGlvbiBmcm9tIHVzZXIgaW5wdXQgb24gZm9ybVxuZnVuY3Rpb24gc2V0Q3VycmVudExvY2F0aW9uKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbiAgY29uc3QgaW5wdXQgPSBmb3JtLmVsZW1lbnRzW1wic2VhcmNoLWlucHV0XCJdO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBpbnB1dC52YWx1ZTtcbiAgICByZW5kZXJpbmdTdGF0ZS5zZWFyY2hPdXRwdXQoKTtcbiAgICAvLyByZW5kZXJIb21lU3RhdGUuc2V0SXNSZW5kZXJpbmdIb21lKGZhbHNlKTtcbiAgICAvLyByZW5kZXJGYXZvcml0ZVN0YXRlLnNldElzUmVuZGVyaW5nRmF2b3JpdGUoZmFsc2UpO1xuICAgIHJlbmRlcmluZ1N0YXRlLnNlYXJjaE91dHB1dCgpO1xuICAgIGdldERhdGEobG9jYXRpb24pO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRMb2NhdGlvbigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmYXVsdC1sb2NhdGlvbi1mb3JtXCIpO1xuICBpZiAoZm9ybSkge1xuICAgIGNvbnN0IGlucHV0ID0gZm9ybS5lbGVtZW50c1tcImRlZmF1bHQtbG9jYXRpb24taW5wdXRcIl07XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IGlucHV0LnZhbHVlO1xuICAgICAgcmVuZGVySG9tZVN0YXRlLnNldElzUmVuZGVyaW5nRGVmYXVsdCh0cnVlKTtcbiAgICAgIGdldERhdGEobG9jYXRpb24pO1xuICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlRGVmYXVsdExvY2F0aW9uTW9kYWwoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZS1tb2RhbFwiKSkge1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8vdXBkYXRlIGRlZmF1bHQgbG9jYXRpb24gd2VhdGhlciBkYXRhXG5jb25zdCB1cGRhdGVEZWZhdWx0TG9jYXRpb25XZWF0aGVyRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlZnJlc2gtaWNvblwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRlZmF1bHRMb2NhdGlvbi5zYXZlZExvY2F0aW9uKCk7XG4gICAgaWYgKHJlbmRlcmluZ1N0YXRlLmlzVHJ1dGh5KCkpIHtcbiAgICAgIGxldCBsb2NhdGlvbiA9IG51bGw7XG4gICAgICBjb25zdCBmYXZvcml0ZXNBcnJheSA9IGZhdm9yaXRlcy5mYXZvcml0ZXNEYXRhKCk7XG4gICAgICBjb25zdCBpZCA9IHRhcmdldC5jbG9zZXN0KFwiLmJvdHRvbS1kaXZcIikucGFyZW50RWxlbWVudC5pZC5zcGxpdChcIi1cIilbMl07XG4gICAgICBmYXZvcml0ZXNBcnJheS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgIGlmIChpLmlkID09PSBpZCkgbG9jYXRpb24gPSBpLmNpdHk7XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuICAgICAgZ2V0RGF0YShsb2NhdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHJlbmRlclN0YXRlLnNldElzUmVuZGVyaW5nRGVmYXVsdCh0cnVlKTtcblxuICAgIGdldERhdGEobG9jYXRpb24pO1xuICB9KTtcbn07XG5cbi8vdG9nZ2xlIGNoZWNrIGJveCB0byBzd2l0Y2ggYmV0d2VlbiB0ZW1wZXJhdHVyZSBzdGF0ZXNcbmNvbnN0IHRvZ2dsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cbiAgbWFpbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrYm94XCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGgxID1cbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgIGNvbnNvbGUubG9nKGgxKTtcbiAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgY29uc3QgaXNUb2dnbGVkID0gdGFyZ2V0LmNoZWNrZWQ7XG4gICAgY29uc3QgZGF0YSA9IGRhdGFDb250cm9sbGVyKHdlYXRoZXJEYXRhKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgaW5kZXggPSBudWxsO1xuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgICBpbmRleCA9IGk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSk7XG5cbiAgICBzZXRUZW1wZXJhdHVyZVVuaXQoaXNUb2dnbGVkLCBkYXRhW2luZGV4XSwgaDEpO1xuICAgIHRvZ2dsZXJTd2l0Y2goaXNUb2dnbGVkLCB0YXJnZXQpO1xuICB9KTtcbn07XG5cbmNvbnN0IGZvY3VzSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uIGlucHV0XCIpO1xuICBjb25zdCBjYWxsVG9BY3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbGwtdG8tYWN0aW9uXCIpO1xuICBpZiAoY2FsbFRvQWN0aW9uQnRuKSB7XG4gICAgY2FsbFRvQWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZm9ybS5mb2N1cygpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vL2hvbWVcbmNvbnN0IGJhY2tUb0hvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbmF2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXBwLWxvZ29cIikgfHxcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJob21lLWJ0blwiKVxuICAgICkge1xuICAgICAgLy8gcmVuZGVyRmF2b3JpdGVTdGF0ZS5zZXRJc1JlbmRlcmluZ0Zhdm9yaXRlKGZhbHNlKTtcbiAgICAgIHJlbmRlcmluZ1N0YXRlLmhvbWUoKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlbmRlckZhdm9yaXRlU3RhdGUucmVuZGVyaW5nRmF2b3JpdGUoKSk7XG4gICAgICBjb25zb2xlLmxvZyhyZW5kZXJIb21lU3RhdGUucmVuZGVyaW5nSG9tZSgpKTtcbiAgICAgIC8vIG1haW5FbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICByZW5kZXJIb21lKCk7XG4gICAgICBldmVudHMoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWRkVG9GYXZvcml0ZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBjb25zdCBmYXZvcml0ZUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZS1jb3VudFwiKTtcbiAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXZvcml0ZS1idG5cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmF2b3JpdGVzLmFkZEZhdm9yaXRlKHdlYXRoZXJEYXRhKTtcbiAgICBmYXZvcml0ZUNvdW50LnRleHRDb250ZW50ID0gYCR7ZmF2b3JpdGVzLmZhdm9yaXRlc0RhdGEoKS5sZW5ndGh9YDsgLy9tb3ZlIHRvIGhlbHBlciBmdW50aW9uc1xuICB9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZWZhdm9yaXRlID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGNvbnN0IGZhdm9yaXRlQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlLWNvdW50XCIpO1xuICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlbW92ZS1mYXZvcml0ZVwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgZmF2b3JpdGVzLmRlbGV0ZUZhdm9yaXRlKGlkKTtcbiAgICBmYXZvcml0ZUNvdW50LnRleHRDb250ZW50ID0gYCR7ZmF2b3JpdGVzLmZhdm9yaXRlc0RhdGEoKS5sZW5ndGh9YDtcbiAgICByZW5kZXJGYXZvcml0ZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGZhdiA9ICgpID0+IHtcbiAgY29uc3QgZmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZS1idG5cIik7XG4gIGZhdkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICByZW5kZXJpbmdTdGF0ZS5mYXZvcml0ZXMoKTtcbiAgICByZW5kZXJGYXZvcml0ZSgpO1xuICB9KTtcbn07XG5cbi8vaW5pdGlhbGl6ZSBldmVudHNcbmNvbnN0IGV2ZW50cyA9ICgpID0+IHtcbiAgc2V0Q3VycmVudExvY2F0aW9uKCk7XG4gIHNldERlZmF1bHRMb2NhdGlvbigpO1xuICBjbG9zZURlZmF1bHRMb2NhdGlvbk1vZGFsKCk7XG4gIHVwZGF0ZURlZmF1bHRMb2NhdGlvbldlYXRoZXJEYXRhKCk7XG4gIHRvZ2dsZXIoKTtcbiAgZm9jdXNJbnB1dCgpO1xuICBiYWNrVG9Ib21lKCk7XG4gIGFkZFRvRmF2b3JpdGUoKTtcbiAgZGVsZXRlZmF2b3JpdGUoKTtcbiAgZmF2KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG4iLCJpbXBvcnQgdHJhbmZvcm1EYXRhIGZyb20gXCIuL3RyYW5zb3JtLWRhdGFcIjtcbmltcG9ydCBsb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcbmltcG9ydCB7IGNoZWNrRXJyb3IsIGRpc3BsYXlPbkVycm9yIH0gZnJvbSBcIi4vZXJyb3JcIjtcblxubGV0IGlzTG9hZGluZyA9IHRydWU7XG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgY29uc29sZS5sb2coY2l0eSk7XG4gIHRyeSB7XG4gICAgY29uc3QgQVBJX0tFWSA9IFwiM2NlYjg4NTJiOWI2YTFmZDhhODE5MWFmNzI0MzM5N2ZcIjtcbiAgICBsb2FkaW5nKGlzTG9hZGluZyk7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2A7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNoZWNrRXJyb3IocmVzcG9uc2UpO1xuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgdHJhbmZvcm1EYXRhKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkaXNwbGF5T25FcnJvcihlcnIsIGlzTG9hZGluZyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7XG4iLCJmdW5jdGlvbiBhZGRDbGFzcyhlbGUsIGNsYXNzZXMpIHtcbiAgY2xhc3Nlcy5mb3JFYWNoKChpKSA9PiBlbGUuY2xhc3NMaXN0LmFkZChpKSk7XG59XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnLCBub2RlLCBhdHRyaWJ1dGUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgaWYgKG5vZGUpIHtcbiAgICBub2RlLmZvckVhY2goKGkpID0+IGVsZW1lbnQuYXBwZW5kKGkpKTtcbiAgfVxuICBpZiAoYXR0cmlidXRlKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZSk7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChpKSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShpLCBhdHRyaWJ1dGVbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLy9jcmVhdGUgcGVjaWFsIGNoYXJhY3RlciBpbiBhIHNwYW5cbmNvbnN0IGRlZ3JlZUNoYXJhY3RlciA9IChjaGFyKSA9PiB7XG4gIGNvbnN0IGRlZ3JlZUNoYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGVncmVlQ2hhci5pbm5lckhUTUwgPSBjaGFyO1xuICByZXR1cm4gZGVncmVlQ2hhcjtcbn07XG5cbi8vc3BlY2lhbCBjaGFyYWN0ZXIgYXMgYSBzdHJpbmdcbmNvbnN0IHNwZWNpYWwgPSAoY2hhcikgPT4ge1xuICBjb25zdCBjaGFyYWN0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2hhcmFjdGVyLmlubmVySFRNTCA9IGNoYXI7XG4gIGNvbnN0IHJlY2hhciA9IGNoYXJhY3Rlci50ZXh0Q29udGVudDtcbiAgcmV0dXJuIHJlY2hhcjtcbn07XG5cbmNvbnN0IGFkZEljb24gPSAoa2V5d29yZCwgc3R5bGVzKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBba2V5d29yZF0sIHtcbiAgICBjbGFzczogXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLFxuICB9KTtcbiAgYWRkQ2xhc3Moc3Bhbiwgc3R5bGVzKTtcbiAgcmV0dXJuIHNwYW47XG59O1xuXG5leHBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCwgZGVncmVlQ2hhcmFjdGVyLCBhZGRJY29uLCBzcGVjaWFsIH07XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5cbmZ1bmN0aW9uIGxvYWRpbmcoaXNMb2FkaW5nKSB7XG4gIGNvbnN0IGxvYWRpbmdEaXYgPSBoZWxwZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJMb2FkaW5nLi4uXCJdLCB7XG4gICAgY2xhc3M6IFwidGV4dC0yeGwgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIixcbiAgfSk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZChsb2FkaW5nRGl2KTtcbiAgfVxuXG4gIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nO1xuIiwiaW1wb3J0IGRlZmF1bHREYXRhU3RvcmUgZnJvbSBcIi4vZGF0YS9kZWZhdWx0LWxvY2F0aW9uLWRhdGFcIjtcbmltcG9ydCByZW5kZXJIb21lU3RhdGUgZnJvbSBcIi4vc3RhdGVzL2hvbWUtc3RhdGVcIjtcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QsIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmZ1bmN0aW9uIGF1dG9VcGRhdGVUaW1lKCkge1xuICBjb25zdCB1cGRhdGVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGRhdGUtdGltZVwiKTtcbiAgY29uc3Qgd2VhdGhlciA9IGRlZmF1bHREYXRhU3RvcmUuZGVmYXVsdExvY2F0aW9uRGF0YSgpO1xuICBjb25zdCB0aW1lU25hcCA9IG5ldyBEYXRlKHdlYXRoZXJbMF0udGltZSkuZ2V0VGltZSgpO1xuICBpZiAodXBkYXRlVGltZSkge1xuICAgIHVwZGF0ZVRpbWUudGV4dENvbnRlbnQgPSBgdXBkYXRlZDogJHtmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KFxuICAgICAgdGltZVNuYXBcbiAgICApfSBhZ29gO1xuICB9XG4gIGNvbnNvbGUubG9nKHVwZGF0ZVRpbWUudGV4dENvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBzZXRUaW1lT3V0KCkge1xuICBjb25zdCB0aW1lciA9IDMwMDAwMDtcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGF1dG9VcGRhdGVUaW1lKCk7XG4gIH0sIHRpbWVyKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgc2V0VGltZU91dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplO1xuIiwiaW1wb3J0IHsgZGUgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbXBvcnQgcmVuZGVySG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWluLWNvbXBvbmVudHMvcmVuZGVySG9tZVwiO1xuaW1wb3J0IHJlbmRlckZhdm9yaXRlIGZyb20gXCIuLi9jb21wb25lbnRzL21haW4tY29tcG9uZW50cy9yZW5kZXJGYXZvcml0ZXNcIjtcblxuY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKCkgPT4ge1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIGNvbnNvbGUubG9nKHVybCk7XG4gIGlmICh1cmwgPT09IFwiL2Rpc3QvaW5kZXguaHRtbFwiKSByZW5kZXJIb21lKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsUGFnZUxvYWQ7XG4iLCJjb25zdCByZW5kZXJGYXZvcml0ZVN0YXRlID0gKCgpID0+IHtcbiAgbGV0IGlzUmVuZGVyaW5nRmF2b3JpdGUgPSBmYWxzZTtcblxuICBjb25zdCBzZXRJc1JlbmRlcmluZ0Zhdm9yaXRlID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgaXNSZW5kZXJpbmdGYXZvcml0ZSA9IG5ld1N0YXRlO1xuICAgIHJldHVybiBpc1JlbmRlcmluZ0Zhdm9yaXRlO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlcmluZ0Zhdm9yaXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBpc1JlbmRlcmluZ0Zhdm9yaXRlO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKGlzUmVuZGVyaW5nRmF2b3JpdGUpO1xuXG4gIHJldHVybiB7IHNldElzUmVuZGVyaW5nRmF2b3JpdGUsIHJlbmRlcmluZ0Zhdm9yaXRlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJGYXZvcml0ZVN0YXRlO1xuIiwiY29uc3QgcmVuZGVySG9tZVN0YXRlID0gKCgpID0+IHtcbiAgbGV0IGlzUmVuZGVyaW5nSG9tZSA9IHRydWU7XG5cbiAgY29uc3Qgc2V0SXNSZW5kZXJpbmdIb21lID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgaXNSZW5kZXJpbmdIb21lID0gbmV3U3RhdGU7XG4gICAgcmV0dXJuIGlzUmVuZGVyaW5nSG9tZTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJpbmdIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiBpc1JlbmRlcmluZ0hvbWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0SXNSZW5kZXJpbmdIb21lLCByZW5kZXJpbmdIb21lIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lU3RhdGU7XG4iLCJpbXBvcnQgcmVuZGVyRmF2b3JpdGVTdGF0ZSBmcm9tIFwiLi9mYXZvcml0ZS1zdGF0ZVwiO1xuaW1wb3J0IHJlbmRlckhvbWVTdGF0ZSBmcm9tIFwiLi9ob21lLXN0YXRlXCI7XG5cbmNvbnN0IHJlbmRlcmluZ1N0YXRlID0gKCgpID0+IHtcbiAgY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICByZW5kZXJGYXZvcml0ZVN0YXRlLnNldElzUmVuZGVyaW5nRmF2b3JpdGUoZmFsc2UpO1xuICAgIHJlbmRlckhvbWVTdGF0ZS5zZXRJc1JlbmRlcmluZ0hvbWUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgZmF2b3JpdGVzID0gKCkgPT4ge1xuICAgIHJlbmRlckZhdm9yaXRlU3RhdGUuc2V0SXNSZW5kZXJpbmdGYXZvcml0ZSh0cnVlKTtcbiAgICByZW5kZXJIb21lU3RhdGUuc2V0SXNSZW5kZXJpbmdIb21lKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaE91dHB1dCA9ICgpID0+IHtcbiAgICByZW5kZXJGYXZvcml0ZVN0YXRlLnNldElzUmVuZGVyaW5nRmF2b3JpdGUoZmFsc2UpO1xuICAgIHJlbmRlckhvbWVTdGF0ZS5zZXRJc1JlbmRlcmluZ0hvbWUoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGlzVHJ1dGh5ID0gKCkgPT4ge1xuICAgIGxldCBzdGF0ZSA9XG4gICAgICByZW5kZXJIb21lU3RhdGUucmVuZGVyaW5nSG9tZSgpICYmIHJlbmRlckZhdm9yaXRlU3RhdGUucmVuZGVyaW5nRmF2b3JpdGUoKVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBmYWxzZTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgcmV0dXJuIHsgaG9tZSwgZmF2b3JpdGVzLCBzZWFyY2hPdXRwdXQsIGlzVHJ1dGh5IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJpbmdTdGF0ZTtcbiIsIi8vYXJyYXkgb2YgZGF5cyBvZiB3ZWVrXG5jb25zdCBkYXlzT2ZXZWVrID0gW1xuICB7IGlkOiAwLCBkYXk6IFwiU3VuXCIgfSxcbiAgeyBpZDogMSwgZGF5OiBcIk1vblwiIH0sXG4gIHsgaWQ6IDIsIGRheTogXCJUdWVcIiB9LFxuICB7IGlkOiAzLCBkYXk6IFwiV2VkXCIgfSxcbiAgeyBpZDogNCwgZGF5OiBcIlRodVwiIH0sXG4gIHsgaWQ6IDUsIGRheTogXCJGcmlcIiB9LFxuICB7IGlkOiA2LCBkYXk6IFwiU2F0XCIgfSxcbl07XG5cbi8vZ2V0IGRheSBvZiB3ZWVrXG5mdW5jdGlvbiBkYXlPZldlZWsoZGF0ZSkge1xuICBsZXQgZGF5ID0gbnVsbDtcbiAgZGF5c09mV2Vlay5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKGkuaWQgPT09IGRhdGUpIHtcbiAgICAgIGRheSA9IGkuZGF5O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXk7XG59XG5cbi8vY29udmVydCB0aW1lIHRvIHVzZXIgdGltZSB3aXRoIFVUQyBhbmQgVGltZVpvbmVcbmV4cG9ydCBmdW5jdGlvbiB1c2VyVGltZSh0aW1lWm9uZU9mZnNldCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbG9jYWxUaW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IGxvY2FsVGltZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICBjb25zdCB1dGNUaW1lID0gbG9jYWxUaW1lICsgbG9jYWxUaW1lT2Zmc2V0O1xuICBjb25zdCBsb2NhdGlvbk9mZnNldCA9IHV0Y1RpbWUgKyAxMDAwICogdGltZVpvbmVPZmZzZXQ7XG4gIGNvbnN0IGxvY2F0aW9uVGltZSA9IG5ldyBEYXRlKGxvY2F0aW9uT2Zmc2V0KTtcbiAgY29uc29sZS5sb2cobG9jYXRpb25UaW1lKTtcbiAgcmV0dXJuIGxvY2F0aW9uVGltZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVXNlclRpbWUodGltZVpvbmVPZmZzZXQpIHtcbiAgLy9kZWZpbmUgZGF0ZSwgZGF5LCBob3VyIGFuZCBtaW51dGVcbiAgY29uc3QgZGF0ZSA9IHVzZXJUaW1lKHRpbWVab25lT2Zmc2V0KTtcbiAgY29uc3QgZGF5ID0gZGF5T2ZXZWVrKGRhdGUuZ2V0RGF5KCkpO1xuICBjb25zdCBob3VyQW5kTWludXRlcyA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoW10sIHtcbiAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICB9KTtcblxuICAvL2RlZmluZSBmb3JtYXQgdG8gZGlzcGxheSB0aW1lXG4gIGNvbnN0IGRpc2xheVRpbWUgPSBgJHtkYXl9ICR7aG91ckFuZE1pbnV0ZXN9YDtcbiAgcmV0dXJuIGRpc2xheVRpbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclVzZXJUaW1lO1xuIiwiaW1wb3J0IHsgdG9nZ2xlciB9IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuXG4vL2NvbnZlcnQga2VsdmluIHVuaXQgdG8gRmFocmVuaGVpdFxuZnVuY3Rpb24gdG9GYWhyZW5oZWl0KGNlbHNpdXMpIHtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGNlbHNpdXMgKiAxLjggKyAzMjtcbiAgY29uc29sZS5sb2coZmFocmVuaGVpdC50b0ZpeGVkKDApKTtcbiAgcmV0dXJuIGZhaHJlbmhlaXQudG9GaXhlZCgwKTtcbn1cblxuLy9jb252ZXJ0IGtlbHZpbiB1bml0IHRvIENlbHNpdXNcbmZ1bmN0aW9uIHRvQ2Vsc2l1cyhrZWx2aW5Vbml0KSB7XG4gIGNvbnN0IGNlbHNpdXMgPSBrZWx2aW5Vbml0IC0gMjczLjE1O1xuICByZXR1cm4gY2Vsc2l1cy50b0ZpeGVkKDApO1xufVxuXG5jb25zdCBzZXRUZW1wZXJhdHVyZVVuaXQgPSAoaXNUb2dnbGVkLCB3ZWF0aGVyLCB0YXJnZXQpID0+IHtcbiAgLy9jb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZS12YWx1ZVwiKTtcbiAgLy8gdGVtcGVyYXR1cmVMYWJlbC5pbm5lckhUTUwgPSBcIlwiO1xuICBpZiAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgdGVtcCA9IGlzVG9nZ2xlZFxuICAgICAgPyB0b0ZhaHJlbmhlaXQod2VhdGhlci50ZW1wLnRvRml4ZWQoMCkpXG4gICAgICA6IHdlYXRoZXIudGVtcC50b0ZpeGVkKDApO1xuXG4gICAgdGFyZ2V0LmFwcGVuZChcbiAgICAgIHRlbXAsXG4gICAgICBpc1RvZ2dsZWQgPyBoZWxwZXIuc3BlY2lhbChcIiZkZWc7RlwiKSA6IGhlbHBlci5zcGVjaWFsKFwiJmRlZztDXCIpXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0VGVtcGVyYXR1cmVVbml0O1xuIiwiLy8gaW1wb3J0IHdlYXRoZXJDYXJkIGZyb20gXCIuL3dlYXRoZXJDYXJkXCI7XG5pbXBvcnQgZmF2b3JpdGVzIGZyb20gXCIuL2RhdGEvZmF2b3JpdGVzLWRhdGFcIjtcbmltcG9ydCBkZWZhdWx0TG9jYXRpb24gZnJvbSBcIi4vZGF0YS9kZWZhdWx0LWxvY2F0aW9uXCI7XG5pbXBvcnQgZGVmYXVsdERhdGFTdG9yZSBmcm9tIFwiLi9kYXRhL2RlZmF1bHQtbG9jYXRpb24tZGF0YVwiO1xuaW1wb3J0IHJlbmRlclNlYXJjaGVkTG9jYXRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvcmVuZGVyLXNlYXJjaGVkLWxvY2F0aW9uXCI7XG5pbXBvcnQgcmVuZGVySG9tZVN0YXRlIGZyb20gXCIuL3N0YXRlcy9ob21lLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VyVGltZSB9IGZyb20gXCIuL3RpbWVBbmREYXRlXCI7XG5pbXBvcnQgcmVuZGVyRmF2b3JpdGVTdGF0ZSBmcm9tIFwiLi9zdGF0ZXMvZmF2b3JpdGUtc3RhdGVcIjtcbmltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xuaW1wb3J0IHJlbmRlckZhdm9yaXRlIGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzL3JlbmRlckZhdm9yaXRlc1wiO1xuaW1wb3J0IGNvbmZpZ3VyZWRIb21lcGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUtY29tcG9uZW50cy9jb25maWd1cmVkLWhvbWVwYWdlXCI7XG5cbmV4cG9ydCBsZXQgd2VhdGhlckRhdGEgPSBudWxsO1xuXG4vL2ltcG9ydCB7IGlzRGVmYXVsdCB9IGZyb20gXCIuL2V2ZW50c1wiO1xuXG5jb25zdCB0cmFuZm9ybURhdGEgPSAoZGF0YSkgPT4ge1xuICB3ZWF0aGVyRGF0YSA9IFtcbiAgICB7XG4gICAgICBpZDogdW5pcWlkLnByb2Nlc3MoKSxcbiAgICAgIHdlYXRoZXI6IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgd2VhdGhlcmRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgbWF4VGVtcDogTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9tYXgudG9GaXhlZCgxKSksXG4gICAgICBtaW5UZW1wOiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21pbi50b0ZpeGVkKDEpKSxcbiAgICAgIGZlZWxzTGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgICAgcHJlc3N1cmU6IGRhdGEubWFpbi5wcmVzc3VyZSxcbiAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXG4gICAgICBjaXR5OiBkYXRhLm5hbWUsXG4gICAgICB0aW1lWm9uZTogZGF0YS50aW1lem9uZSxcbiAgICAgIHRpbWU6IHVzZXJUaW1lKGRhdGEudGltZXpvbmUpLFxuICAgICAgLy90aW1lOiBkYXRhLmR0LFxuICAgICAgaWNvbjogYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2AsXG4gICAgfSxcbiAgXTtcblxuICBjb25zb2xlLmxvZyhcImhhbmdcIik7XG5cbiAgaWYgKFxuICAgIHJlbmRlckhvbWVTdGF0ZS5yZW5kZXJpbmdIb21lKCkgJiZcbiAgICByZW5kZXJGYXZvcml0ZVN0YXRlLnJlbmRlcmluZ0Zhdm9yaXRlKClcbiAgKSB7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIGZhdm9yaXRlcy51cGRhdGVGYXZvcml0ZXMod2VhdGhlckRhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwiYmxhIVwiKTtcbiAgICByZW5kZXJGYXZvcml0ZShmYXZvcml0ZXMuZmF2b3JpdGVzRGF0YSgpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIC8vIGNvbnNvbGUubG9nKHJlbmRlclN0YXRlLmN1cnJlbnRTdGF0ZSgpICYmICFmYXZvcml0ZVN0YXRlKTtcbiAgaWYgKFxuICAgIHJlbmRlckhvbWVTdGF0ZS5yZW5kZXJpbmdIb21lKCkgJiZcbiAgICAhcmVuZGVyRmF2b3JpdGVTdGF0ZS5yZW5kZXJpbmdGYXZvcml0ZSgpXG4gICkge1xuICAgIGRlZmF1bHREYXRhU3RvcmUuc2V0RGF0YSh3ZWF0aGVyRGF0YSk7XG4gICAgZGVmYXVsdExvY2F0aW9uLnNldExvY2F0aW9uKHdlYXRoZXJEYXRhWzBdLmNpdHkpO1xuICAgIGNvbnNvbGUubG9nKFwiaSByYW5cIik7XG4gICAgY29uZmlndXJlZEhvbWVwYWdlKGRlZmF1bHREYXRhU3RvcmUuZGVmYXVsdExvY2F0aW9uRGF0YSgpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zb2xlLmxvZyhkZWZhdWx0RGF0YVN0b3JlLmRlZmF1bHRSZXF1ZXN0U3RhdGUoKSk7XG4gIHJlbmRlclNlYXJjaGVkTG9jYXRpb24od2VhdGhlckRhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbmZvcm1EYXRhO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMC4yNCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIC1vLXRhYi1zaXplOiA0O1xcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbkVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG4uZml4ZWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4ucmVsYXRpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaW5zZXQtMCB7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBib3R0b206IDBweDtcXG4gIGxlZnQ6IDBweDtcXG59XFxuLmJvdHRvbS1cXFxcWy0xMFxcXFxdIHtcXG4gIGJvdHRvbTogLTEwO1xcbn1cXG4uYm90dG9tLVxcXFxbXFxcXF0ge1xcbiAgYm90dG9tOiA7XFxufVxcbi56LTEwIHtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4ubXgtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLm15LTUge1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxufVxcbi5tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLm1iLTEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuLm10LTUge1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuLm10LTIge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4ubWwtXFxcXFsycHhcXFxcXSB7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbn1cXG4ubXQtXFxcXFs2MHB4XFxcXF0ge1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuLm1iLVxcXFxbNDBweFxcXFxdIHtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi5tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxufVxcbi5tdC0zIHtcXG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XFxufVxcbi5tci0xIHtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuLm1iLTMge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLi1tdC01IHtcXG4gIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xcbn1cXG4uaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaC1cXFxcWzkwXFxcXCVcXFxcXSB7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oLVxcXFxbMThweFxcXFxdIHtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLmgtXFxcXFsxMTBweFxcXFxdIHtcXG4gIGhlaWdodDogMTEwcHg7XFxufVxcbi5taW4taC1zY3JlZW4ge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi5taW4taC1cXFxcWzUwcHhcXFxcXSB7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udy0zXFxcXC81IHtcXG4gIHdpZHRoOiA2MCU7XFxufVxcbi53LVxcXFxbMThweFxcXFxdIHtcXG4gIHdpZHRoOiAxOHB4O1xcbn1cXG4udy1cXFxcWzkwXFxcXCVcXFxcXSB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG4udy1cXFxcWzEyMHB4XFxcXF0ge1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG4udy00XFxcXC81IHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi53LVxcXFxbMTEwcHhcXFxcXSB7XFxuICB3aWR0aDogMTEwcHg7XFxufVxcbi53LVxcXFxbMTE1cHhcXFxcXSB7XFxuICB3aWR0aDogMTE1cHg7XFxufVxcbi5taW4tdy1taW4ge1xcbiAgbWluLXdpZHRoOiAtd2Via2l0LW1pbi1jb250ZW50O1xcbiAgbWluLXdpZHRoOiAtbW96LW1pbi1jb250ZW50O1xcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuLm1pbi13LVxcXFxbMjgwcHhcXFxcXSB7XFxuICBtaW4td2lkdGg6IDI4MHB4O1xcbn1cXG4ubWluLXctXFxcXFs2MHB4XFxcXF0ge1xcbiAgbWluLXdpZHRoOiA2MHB4O1xcbn1cXG4ubWluLXctXFxcXFsyNDJweFxcXFxdIHtcXG4gIG1pbi13aWR0aDogMjQycHg7XFxufVxcbi5taW4tdy1cXFxcWzI2MHB4XFxcXF0ge1xcbiAgbWluLXdpZHRoOiAyNjBweDtcXG59XFxuLm1pbi13LVxcXFxbMjcwcHhcXFxcXSB7XFxuICBtaW4td2lkdGg6IDI3MHB4O1xcbn1cXG4ubWF4LXctXFxcXFs0ODBweFxcXFxdIHtcXG4gIG1heC13aWR0aDogNDgwcHg7XFxufVxcbi5tYXgtdy1cXFxcWzMyMHB4XFxcXF0ge1xcbiAgbWF4LXdpZHRoOiAzMjBweDtcXG59XFxuLm1heC13LXhzIHtcXG4gIG1heC13aWR0aDogMjByZW07XFxufVxcbi5tYXgtdy1cXFxcWzEyMDBweFxcXFxdIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG4ubWF4LXctMnhsIHtcXG4gIG1heC13aWR0aDogNDJyZW07XFxufVxcbi5mbGV4LTEge1xcbiAgZmxleDogMSAxIDAlO1xcbn1cXG4uZmxleC1hdXRvIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmV2ZWFsIHtcXG5cXG4gIGZyb20ge1xcbiAgICB0b3A6IC05MDBweDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdG9wOiAwcHg7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcmV2ZWFsIHtcXG5cXG4gIGZyb20ge1xcbiAgICB0b3A6IC05MDBweDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdG9wOiAwcHg7XFxuICB9XFxufVxcbi5hbmltYXRlLXJldmVhbCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcmV2ZWFsIDFzIGxpbmVhciBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiByZXZlYWwgMXMgbGluZWFyIGZvcndhcmRzO1xcbn1cXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ3JpZC1jb2xzLVxcXFxbMWZyX2F1dG9cXFxcXSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbn1cXG4uZ3JpZC1jb2xzLTEge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1jb2xzLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC1jb2xzLVxcXFxbMWZyXzFmclxcXFxdIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuLmdyaWQtcm93cy1cXFxcW2F1dG9fMWZyX2F1dG9cXFxcXSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcbi5ncmlkLXJvd3MtMiB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLXJvd3MtMSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLXJvd3MtXFxcXFs1MHB4XzFmcl81MHB4XFxcXF0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmciA1MHB4O1xcbn1cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mbGV4LWNvbC1yZXZlcnNlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuLml0ZW1zLXN0YXJ0IHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uaXRlbXMtZW5kIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5qdXN0aWZ5LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uanVzdGlmeS1hcm91bmQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5nYXAtXFxcXFsyMHB4XFxcXF0ge1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uZ2FwLXgtMyB7XFxuICAtbW96LWNvbHVtbi1nYXA6IDAuNzVyZW07XFxuICAgICAgIGNvbHVtbi1nYXA6IDAuNzVyZW07XFxufVxcbi5nYXAteS0xIHtcXG4gIHJvdy1nYXA6IDAuMjVyZW07XFxufVxcbi5nYXAteC01IHtcXG4gIC1tb3otY29sdW1uLWdhcDogMS4yNXJlbTtcXG4gICAgICAgY29sdW1uLWdhcDogMS4yNXJlbTtcXG59XFxuLmdhcC14LTIge1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAwLjVyZW07XFxuICAgICAgIGNvbHVtbi1nYXA6IDAuNXJlbTtcXG59XFxuLnNlbGYtc3RhcnQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuLnNlbGYtY2VudGVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktc2VsZi1zdGFydCB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG4ub3ZlcmZsb3ctaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLnJvdW5kZWQtZnVsbCB7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxufVxcbi5yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcbi5yb3VuZGVkLW1kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbn1cXG4uYm9yZGVyLVxcXFxbMXB4XFxcXF0ge1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5ib3JkZXItMCB7XFxuICBib3JkZXItd2lkdGg6IDBweDtcXG59XFxuLmJvcmRlci0yIHtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbn1cXG4uYm9yZGVyLVxcXFxbMnB4XFxcXF0ge1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItbC0yIHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItc2xhdGUtNDAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItZ3JheS03MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDU1IDY1IDgxIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1waW5rLTQwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ0IDExNCAxODIgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLWdyYXktNTAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigxMDcgMTE0IDEyOCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ib3JkZXItbC1zbGF0ZS02MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzEgODUgMTA1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJnLXNsYXRlLTkwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUgMjMgNDIgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTkwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcgMjQgMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTgwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEgNDEgNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1pbmRpZ28tNDAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjkgMTQwIDI0OCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYmctZ3JheS03MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1IDY1IDgxIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctcHVycGxlLTYwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3IDUxIDIzNCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLVxcXFxbcmdiYVxcXFwoMFxcXFwyYyAwXFxcXDJjIDBcXFxcMmMgMFxcXFwuNVxcXFwpXFxcXF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG4uYmctc2xhdGUtODAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCA0MSA1OSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLnAtMiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5weS02IHtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbn1cXG4ucHgtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5weS1cXFxcWzFweFxcXFxdIHtcXG4gIHBhZGRpbmctdG9wOiAxcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbn1cXG4ucHktMSB7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4ucHgtMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG4ucHgtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG4ucHktXFxcXFszcHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XFxuLnB4LVxcXFxbMXB4XFxcXF0ge1xcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XFxufVxcbi5weC0xIHtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5wci1cXFxcWzFweFxcXFxdIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcXG59XFxuLnB0LVxcXFxbMTIwcHhcXFxcXSB7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxufVxcbi5wci1cXFxcWzEwcHhcXFxcXSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4ucGwtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcbi5wdC1cXFxcWzEwMHB4XFxcXF0ge1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbn1cXG4ucGwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuLnBiLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLnByLVxcXFxbM3B4XFxcXF0ge1xcbiAgcGFkZGluZy1yaWdodDogM3B4O1xcbn1cXG4ucHQtMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4ucHQtMyB7XFxuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG59XFxuLnByLTEge1xcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcXG59XFxuLnBiLTEge1xcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XFxufVxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50ZXh0LWp1c3RpZnkge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuLmFsaWduLW1pZGRsZSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uZm9udC1zYW5zcHJvIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2Ugc2FucyBwcm8sIHNhbnMtc2VyaWY7XFxufVxcbi5mb250LWJhcmxvdyB7XFxuICBmb250LWZhbWlseTogQmFybG93LCBzYW5zLXNlcmlmO1xcbn1cXG4uZm9udC1maXJhIHtcXG4gIGZvbnQtZmFtaWx5OiBGaXJhIHNhbnMsIHNhbnMtc2VyZmlmO1xcbn1cXG4uZm9udC1ha3NoYXIge1xcbiAgZm9udC1mYW1pbHk6IEFrc2hhciwgc2Fucy1zZXJpZjtcXG59XFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC00eGwge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXG59XFxuLnRleHQtMnhsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcbi50ZXh0LXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnRleHQtYmFzZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG4udGV4dC1cXFxcWzEwcHhcXFxcXSB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcbi50ZXh0LXhzIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4udGV4dC0zeGwge1xcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG4udGV4dC01eGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5mb250LW1lZGl1bSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uZm9udC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmZvbnQtc2VtaWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZvbnQtbGlnaHQge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4udXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5sZWFkaW5nLW5vcm1hbCB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4udHJhY2tpbmctdGlnaHRlciB7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcXG59XFxuLnRyYWNraW5nLXdpZGVzdCB7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxufVxcbi50ZXh0LXNsYXRlLTMwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS0yMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIyOSAyMzEgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXBpbmstNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyNDQgMTE0IDE4MiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTU2IDE2MyAxNzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS0zMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXNsYXRlLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTQ4IDE2MyAxODQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcHVycGxlLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTkyIDEzMiAyNTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtcGluay01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIzNiA3MiAxNTMgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtZ3JheS01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEwNyAxMTQgMTI4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWluZGlnby00MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEyOSAxNDAgMjQ4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWluZGlnby0yMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWluZGlnby0zMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE2NSAxODAgMjUyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5zaGFkb3ctXFxcXFtyZ2JhXFxcXCgwXFxcXDJjIDBcXFxcMmMgMFxcXFwyYyAwXFxcXC4xMlxcXFwpXzBweF8xcHhfM3B4XFxcXDJjIHJnYmFcXFxcKDBcXFxcMmMgMFxcXFwyYyAwXFxcXDJjIDBcXFxcLjI0XFxcXClfMHB4XzFweF8ycHhcXFxcXSB7XFxuICAtLXR3LXNoYWRvdzogcmdiYSgwLDAsMCwwLjEyKSAwcHggMXB4IDNweCxyZ2JhKDAsMCwwLDAuMjQpIDBweCAxcHggMnB4O1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMHB4IDFweCAzcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMHB4IDFweCAycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctXFxcXFtyZ2JhXFxcXCgwXFxcXDJjIDBcXFxcMmMgMFxcXFwyYyAwXFxcXC4xNlxcXFwpXzBweF8zcHhfNnB4XFxcXDJjIHJnYmFcXFxcKDBcXFxcMmMgMFxcXFwyYyAwXFxcXDJjIDBcXFxcLjIzXFxcXClfMHB4XzNweF82cHhcXFxcXSB7XFxuICAtLXR3LXNoYWRvdzogcmdiYSgwLDAsMCwwLjE2KSAwcHggM3B4IDZweCxyZ2JhKDAsMCwwLDAuMjMpIDBweCAzcHggNnB4O1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMHB4IDNweCA2cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMHB4IDNweCA2cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctc2t5LTUwMCB7XFxuICAtLXR3LXNoYWRvdy1jb2xvcjogIzBlYTVlOTtcXG4gIC0tdHctc2hhZG93OiB2YXIoLS10dy1zaGFkb3ctY29sb3JlZCk7XFxufVxcbi5vdXRsaW5lLW5vbmUge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuLmZpbHRlciB7XFxuICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxufVxcbi50cmFuc2l0aW9uIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXIsIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcbi50cmFuc2l0aW9uLWFsbCB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG4udHJhbnNpdGlvbi1cXFxcW2Rpc3BsYXlcXFxcXSB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBkaXNwbGF5O1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuLmR1cmF0aW9uLTIwMCB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG59XFxuLmR1cmF0aW9uLTcwMCB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3MDBtcztcXG59XFxuLmVhc2UtaW4ge1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO1xcbn1cXG4uZWFzZS1pbi1vdXQge1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1zbTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi5wbGFjZWhvbGRlclxcXFw6dGV4dC1zbTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtc206OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWdyYXktMzAwOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMDkgMjEzIDIxOSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtZ3JheS0zMDA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMDkgMjEzIDIxOSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4ucGxhY2Vob2xkZXJcXFxcOnRleHQtZ3JheS0zMDA6OnBsYWNlaG9sZGVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMDkgMjEzIDIxOSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXMtd2l0aGluXFxcXDpib3JkZXItMjpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcbi5mb2N1cy13aXRoaW5cXFxcOmJvcmRlci1zbGF0ZS02MDA6Zm9jdXMtd2l0aGluIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYig3MSA4NSAxMDUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXMtd2l0aGluXFxcXDpiZy1ncmF5LTkwMDpmb2N1cy13aXRoaW4ge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3IDI0IDM5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnNjYWxlLTEyNTpob3ZlciB7XFxuICAtLXR3LXNjYWxlLXg6IDEuMjU7XFxuICAtLXR3LXNjYWxlLXk6IDEuMjU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxuLmhvdmVyXFxcXDpzY2FsZS0xMTA6aG92ZXIge1xcbiAgLS10dy1zY2FsZS14OiAxLjE7XFxuICAtLXR3LXNjYWxlLXk6IDEuMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXG4uaG92ZXJcXFxcOmJvcmRlci1zbGF0ZS00MDA6aG92ZXIge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDpib3JkZXItcHVycGxlLTQwMDpob3ZlciB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTkyIDEzMiAyNTIgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOmJvcmRlci1wdXJwbGUtNTAwOmhvdmVyIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigxNjggODUgMjQ3IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDpmb250LWJvbGQ6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmhvdmVyXFxcXDp0ZXh0LWluZGlnby00MDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEyOSAxNDAgMjQ4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6dGV4dC1pbmRpZ28tMzAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNjUgMTgwIDI1MiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtc2xhdGUtNDAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtcHVycGxlLTQwMDpob3ZlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTkyIDEzMiAyNTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmZvY3VzXFxcXDpib3JkZXItYi0yOmZvY3VzIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG59XFxuLmZvY3VzXFxcXDpib3JkZXItc29saWQ6Zm9jdXMge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLmZvY3VzXFxcXDpib3JkZXItaW5kaWdvLTMwMDpmb2N1cyB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTY1IDE4MCAyNTIgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXNcXFxcOmJvcmRlci1wdXJwbGUtNTAwOmZvY3VzIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigxNjggODUgMjQ3IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmZvY3VzXFxcXDp0ZXh0LWluZGlnby0zMDA6Zm9jdXMge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE2NSAxODAgMjUyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQteHM6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQteHM6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4uZm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LXhzOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuLmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6Zm9udC1zZW1pYm9sZDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDpmb250LXNlbWlib2xkOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDpmb250LXNlbWlib2xkOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDp0ZXh0LWluZGlnby0yMDA6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtaW5kaWdvLTIwMDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtaW5kaWdvLTIwMDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE5OSAyMTAgMjU0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLnNtXFxcXDptYi0zIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6bWluLXctXFxcXFs4MHB4XFxcXF0ge1xcbiAgICBtaW4td2lkdGg6IDgwcHg7XFxuICB9XFxuXFxuICAuc21cXFxcOmZsZXgtMSB7XFxuICAgIGZsZXg6IDEgMSAwJTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6ZmxleC1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLnNtXFxcXDpqdXN0aWZ5LWVuZCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB9XFxuXFxuICAuc21cXFxcOmp1c3RpZnktY2VudGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc21cXFxcOmp1c3RpZnktYmV0d2VlbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6Z2FwLXgtNCB7XFxuICAgIC1tb3otY29sdW1uLWdhcDogMXJlbTtcXG4gICAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpqdXN0aWZ5LXNlbGYtZW5kIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICB9XFxuXFxuICAuc21cXFxcOnB5LTAge1xcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbiAgfVxcblxcbiAgLnNtXFxcXDpweS0yIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6cHQtMCB7XFxuICAgIHBhZGRpbmctdG9wOiAwcHg7XFxuICB9XFxuXFxuICAuc21cXFxcOnBiLTIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LTZ4bCB7XFxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtNHhsIHtcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMi41cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LWJhc2Uge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtc20ge1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC01eGwge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcblxcbiAgLnNtXFxcXDp0ZXh0LTJ4bCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC14cyB7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtN3hsIHtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC1iYXNlOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC1iYXNlOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtYmFzZTo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC1iYXNlOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgfVxcblxcbiAgLnNtXFxcXDpmb2N1c1xcXFw6cGxhY2Vob2xkZXJcXFxcOnRleHQtYmFzZTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxuXFxuICAuc21cXFxcOmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6dGV4dC1iYXNlOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6Zm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDpmb250LXNlbWlib2xkOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6Zm9jdXNcXFxcOnBsYWNlaG9sZGVyXFxcXDpmb250LXNlbWlib2xkOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuICAuc21cXFxcOmZvY3VzXFxcXDpwbGFjZWhvbGRlclxcXFw6Zm9udC1zZW1pYm9sZDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsNE5BQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkO0VBQUEsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQsYUFBYztFQUFkLGFBQWM7RUFBZCxrQkFBYztFQUFkLHNDQUFjO0VBQWQsZUFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQsa0JBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsc0NBQWM7RUFBZCxrQ0FBYztFQUFkLDJCQUFjO0VBQWQsc0JBQWM7RUFBZCw4QkFBYztFQUFkLFlBQWM7RUFBZCxrQkFBYztFQUFkLGdCQUFjO0VBQWQsaUJBQWM7RUFBZCxrQkFBYztFQUFkLGNBQWM7RUFBZCxnQkFBYztFQUFkLGFBQWM7RUFBZCxtQkFBYztFQUFkLHFCQUFjO0VBQWQsMkJBQWM7RUFBZCx5QkFBYztFQUFkLDBCQUFjO0VBQWQsMkJBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQseUJBQWM7RUFBZDtBQUFjO0FBRWQ7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsUUFBbUI7RUFBbkIsVUFBbUI7RUFBbkIsV0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSw4QkFBbUI7RUFBbkIsMkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5COztFQUFBO0lBQUE7RUFBbUI7O0VBQW5CO0lBQUE7RUFBbUI7QUFBQTtBQUFuQjs7RUFBQTtJQUFBO0VBQW1COztFQUFuQjtJQUFBO0VBQW1CO0FBQUE7QUFBbkI7RUFBQSw0Q0FBbUI7VUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSx3QkFBbUI7T0FBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHdCQUFtQjtPQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtPQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZ0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZ0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzRUFBbUI7RUFBbkIsMkZBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0VBQW1CO0VBQW5CLDJGQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDBCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDhCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsd0tBQW1CO0VBQW5CLHdKQUFtQjtFQUFuQixnTkFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsd0JBQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDRCQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUZuQjtFQUFBLG9CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsb0JDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxvQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBO0NDQUE7QURBQTtFQUFBLHVCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsbUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxtQkNBQTtFREFBLG1CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsa0JDQUE7RURBQSxrQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHVCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsdUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSx1QkNBQTtFREFBO0NDQUE7QURBQTtFQUFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUE7Q0NBQTtBREFBO0VBQUE7Q0NBQTtBREFBO0VBQUEsdUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSx1QkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsbUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxtQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUE7Q0NBQTtBREFBO0VBQUE7Q0NBQTtBREFBO0VBQUE7Q0NBQTtBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTtBREFBOztFQUFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBLHNCQ0FBO1NEQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQSxpQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxvQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBLG1CQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLG1CQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLGdCQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLG9CQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLGdCQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLGtCQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLG1CQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLGtCQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLGdCQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLGdCQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLGdCQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLGdCQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLGdCQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLGdCQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTtDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tIFwiLi9vdGhlcnNcIjtcbmltcG9ydCBoZWFkZXJTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgbWFpblNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9tYWluXCI7XG5pbXBvcnQgZm9vdGVyU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tIFwiLi9yb3V0aW5nL3BhZ2UtbG9hZC1yb3V0ZXNcIjtcblxuZnVuY3Rpb24gYXBwKCkge1xuICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZyYWdtZW50LmFwcGVuZChoZWFkZXJTZWN0aW9uKCksIG1haW5TZWN0aW9uKCksIGZvb3RlclNlY3Rpb24oKSk7XG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwXCIpO1xuICBhcHAuYXBwZW5kKGZyYWdtZW50KTtcbiAgYXBwLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJncmlkXCIsXG4gICAgXCJncmlkLXJvd3MtW2F1dG9fMWZyX2F1dG9dXCIsXG4gICAgXCJtaW4taC1zY3JlZW5cIixcbiAgICBcInctZnVsbFwiLFxuICAgIFwiZm9udC1zYW5zcHJvXCJcbiAgKTtcblxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXG4gICAgXCJiZy1ncmF5LTkwMFwiLFxuICAgIFwidGV4dC1ncmF5LTIwMFwiLFxuICAgIFwibWluLWgtc2NyZWVuXCIsXG4gICAgXCJ3LWZ1bGxcIlxuICApO1xufVxuXG5hcHAoKTtcbmV2ZW50cygpO1xuaW5pdGlhbGl6ZSgpO1xuaW5pdGlhbFBhZ2VMb2FkKCk7XG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiYXNzaWduIiwidGFyZ2V0IiwiZGlydHlPYmplY3QiLCJUeXBlRXJyb3IiLCJwcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNsb25lT2JqZWN0IiwiZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyIsImRhdGUiLCJ1dGNEYXRlIiwiRGF0ZSIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInNldFVUQ0Z1bGxZZWFyIiwiZ2V0VGltZSIsInJlcXVpcmVkQXJncyIsInJlcXVpcmVkIiwiYXJncyIsInRvRGF0ZSIsImNvbXBhcmVBc2MiLCJkaXJ0eURhdGVMZWZ0IiwiZGlydHlEYXRlUmlnaHQiLCJhcmd1bWVudHMiLCJkYXRlTGVmdCIsImRhdGVSaWdodCIsImRpZmYiLCJkZWZhdWx0TG9jYWxlIiwiTUlMTElTRUNPTkRTX0lOX01JTlVURSIsIk1JTlVURVNfSU5fREFZIiwiTUlOVVRFU19JTl9NT05USCIsIk1JTlVURVNfSU5fWUVBUiIsImZvcm1hdERpc3RhbmNlU3RyaWN0IiwiZGlydHlEYXRlIiwiZGlydHlCYXNlRGF0ZSIsIm9wdGlvbnMiLCJsb2NhbGUiLCJmb3JtYXREaXN0YW5jZSIsIlJhbmdlRXJyb3IiLCJjb21wYXJpc29uIiwiaXNOYU4iLCJsb2NhbGl6ZU9wdGlvbnMiLCJhZGRTdWZmaXgiLCJCb29sZWFuIiwicm91bmRpbmdNZXRob2QiLCJTdHJpbmciLCJyb3VuZGluZ01ldGhvZEZuIiwiTWF0aCIsImZsb29yIiwiY2VpbCIsInJvdW5kIiwibWlsbGlzZWNvbmRzIiwibWludXRlcyIsInRpbWV6b25lT2Zmc2V0IiwiZHN0Tm9ybWFsaXplZE1pbnV0ZXMiLCJ1bml0Iiwic2Vjb25kcyIsInJvdW5kZWRNaW51dGVzIiwiaG91cnMiLCJkYXlzIiwibW9udGhzIiwieWVhcnMiLCJmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IiwiZGlydHlPcHRpb25zIiwibm93IiwiYnVpbGRGb3JtYXRMb25nRm4iLCJ3aWR0aCIsImRlZmF1bHRXaWR0aCIsImZvcm1hdCIsImZvcm1hdHMiLCJidWlsZExvY2FsaXplRm4iLCJkaXJ0eUluZGV4IiwiY29udGV4dCIsInZhbHVlc0FycmF5IiwiZm9ybWF0dGluZ1ZhbHVlcyIsImRlZmF1bHRGb3JtYXR0aW5nV2lkdGgiLCJfZGVmYXVsdFdpZHRoIiwiX3dpZHRoIiwidmFsdWVzIiwiaW5kZXgiLCJhcmd1bWVudENhbGxiYWNrIiwiYnVpbGRNYXRjaEZuIiwic3RyaW5nIiwibWF0Y2hQYXR0ZXJuIiwibWF0Y2hQYXR0ZXJucyIsImRlZmF1bHRNYXRjaFdpZHRoIiwibWF0Y2hSZXN1bHQiLCJtYXRjaCIsIm1hdGNoZWRTdHJpbmciLCJwYXJzZVBhdHRlcm5zIiwiZGVmYXVsdFBhcnNlV2lkdGgiLCJrZXkiLCJBcnJheSIsImlzQXJyYXkiLCJmaW5kSW5kZXgiLCJwYXR0ZXJuIiwidGVzdCIsImZpbmRLZXkiLCJ2YWx1ZSIsInZhbHVlQ2FsbGJhY2siLCJyZXN0Iiwic2xpY2UiLCJvYmplY3QiLCJwcmVkaWNhdGUiLCJhcnJheSIsImJ1aWxkTWF0Y2hQYXR0ZXJuRm4iLCJwYXJzZVJlc3VsdCIsInBhcnNlUGF0dGVybiIsImZvcm1hdERpc3RhbmNlTG9jYWxlIiwibGVzc1RoYW5YU2Vjb25kcyIsIm9uZSIsIm90aGVyIiwieFNlY29uZHMiLCJoYWxmQU1pbnV0ZSIsImxlc3NUaGFuWE1pbnV0ZXMiLCJ4TWludXRlcyIsImFib3V0WEhvdXJzIiwieEhvdXJzIiwieERheXMiLCJhYm91dFhXZWVrcyIsInhXZWVrcyIsImFib3V0WE1vbnRocyIsInhNb250aHMiLCJhYm91dFhZZWFycyIsInhZZWFycyIsIm92ZXJYWWVhcnMiLCJhbG1vc3RYWWVhcnMiLCJ0b2tlbiIsImNvdW50IiwicmVzdWx0IiwidG9rZW5WYWx1ZSIsInJlcGxhY2UiLCJkYXRlRm9ybWF0cyIsImZ1bGwiLCJsb25nIiwibWVkaXVtIiwic2hvcnQiLCJ0aW1lRm9ybWF0cyIsImRhdGVUaW1lRm9ybWF0cyIsImZvcm1hdExvbmciLCJ0aW1lIiwiZGF0ZVRpbWUiLCJmb3JtYXRSZWxhdGl2ZUxvY2FsZSIsImxhc3RXZWVrIiwieWVzdGVyZGF5IiwidG9kYXkiLCJ0b21vcnJvdyIsIm5leHRXZWVrIiwiZm9ybWF0UmVsYXRpdmUiLCJfZGF0ZSIsIl9iYXNlRGF0ZSIsIl9vcHRpb25zIiwiZXJhVmFsdWVzIiwibmFycm93IiwiYWJicmV2aWF0ZWQiLCJ3aWRlIiwicXVhcnRlclZhbHVlcyIsIm1vbnRoVmFsdWVzIiwiZGF5VmFsdWVzIiwiZGF5UGVyaW9kVmFsdWVzIiwiYW0iLCJwbSIsIm1pZG5pZ2h0Iiwibm9vbiIsIm1vcm5pbmciLCJhZnRlcm5vb24iLCJldmVuaW5nIiwibmlnaHQiLCJmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzIiwib3JkaW5hbE51bWJlciIsImRpcnR5TnVtYmVyIiwibnVtYmVyIiwiTnVtYmVyIiwicmVtMTAwIiwibG9jYWxpemUiLCJlcmEiLCJxdWFydGVyIiwibW9udGgiLCJkYXkiLCJkYXlQZXJpb2QiLCJtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuIiwicGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiIsIm1hdGNoRXJhUGF0dGVybnMiLCJwYXJzZUVyYVBhdHRlcm5zIiwiYW55IiwibWF0Y2hRdWFydGVyUGF0dGVybnMiLCJwYXJzZVF1YXJ0ZXJQYXR0ZXJucyIsIm1hdGNoTW9udGhQYXR0ZXJucyIsInBhcnNlTW9udGhQYXR0ZXJucyIsIm1hdGNoRGF5UGF0dGVybnMiLCJwYXJzZURheVBhdHRlcm5zIiwibWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyIsInBhcnNlRGF5UGVyaW9kUGF0dGVybnMiLCJwYXJzZUludCIsImNvZGUiLCJ3ZWVrU3RhcnRzT24iLCJmaXJzdFdlZWtDb250YWluc0RhdGUiLCJhcmd1bWVudCIsImFyZ1N0ciIsImNvbnNvbGUiLCJ3YXJuIiwiRXJyb3IiLCJzdGFjayIsIk5hTiIsInBpZCIsInByb2Nlc3MiLCJhZGRyZXNzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsInJlcXVpcmUiLCJtYWMiLCJvcyIsIm5ldHdvcmtJbnRlcmZhY2VzIiwibG9vcCIsImludGVyZmFjZV9rZXkiLCJuZXR3b3JrSW50ZXJmYWNlIiwiZGVmYXVsdCIsInByZWZpeCIsInN1ZmZpeCIsImxhc3QiLCJzdHlsZXMiLCJjYXJkU3R5bGVzIiwiaWNvbnMiLCJmb290ZXJJY29ucyIsImZsZXhSb3dDZW50ZXIiLCJmbGV4Q29sQ2VudGVyIiwiaGVscGVyIiwiZm9vdGVyU2VjdGlvbiIsImdpdGh1YiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzcyIsInR3aXR0ZXIiLCJsaW5rZWRpbiIsImdpdGh1YkxpbmsiLCJocmVmIiwidHdpdHRlckxpbmsiLCJsaW5rZWRpbkxpbmsiLCJpY29uc1dyYXBwZXIiLCJjb3B5UmlnaHRTeW1ib2wiLCJzcGVjaWFsIiwiY29weVJpZ2h0Iiwid3JhcHBlciIsImZyYWdtZW50IiwiRG9jdW1lbnRGcmFnbWVudCIsImFwcGVuZCIsImZvb3RlciIsImZhdm9yaXRlcyIsImhlYWRlclNlY3Rpb24iLCJzdW5ueUljb24iLCJsb2dvIiwibmF2TGVmdCIsImhvbWVCdXR0b24iLCJmYXZTcGFuIiwiZmF2b3JpdGVzRGF0YSIsImZhdm9yaXRlQnV0dG9uIiwiZmF2V3JhcHBlciIsInNldHRpbmdzQnV0dG9uIiwibmF2TWVudSIsInNlYXJjaElucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b2NvbXBsZXRlIiwic2VhcmNoSWNvbiIsInNlYXJjaEJ1dHRvbiIsImZvcm0iLCJuYXZSaWdodCIsIm5hdiIsImhlYWRlciIsIndlYXRoZXJDYXJkIiwicmVuZGVySG9tZVN0YXRlIiwiY29uZmlndXJlZEhvbWVwYWdlIiwid2VhdGhlckRhdGEiLCJtYWluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwic2VjdGlvbiIsInNldERlZmF1bHRMb2FjdGlvbkZvcm0iLCJkZWZhdWx0TG9jYXRpb24iLCJpbml0aWFsSG9tZXBhZ2UiLCJjYWxsVG9BY3Rpb25CdG4iLCJjb250ZW50RGl2Iiwic2F2ZWRMb2NhdGlvbiIsInJlbmRlclNlYXJjaGVkTG9jYXRpb24iLCJ3ZWF0aGVyIiwiZm9ybVRpdGxlIiwiZm9ybUhlYWRlciIsImxvY2F0aW9uSW5wdXQiLCJzYXZlQnRuIiwiY2FuY2VsQnRuIiwiZm9ybUJ0bnMiLCJmb3JtQm9keSIsImluZm9JY29uIiwiZm9ybUluZm8iLCJmb3JtRm9vdGVyIiwib3ZlcmxheSIsIndlYXRoZXJDYXJkVG9wIiwicmVuZGVyRmF2b3JpdGUiLCJmYXZvcml0ZXNBcnJheSIsImZvckVhY2giLCJmYXZvcml0ZSIsIndlYXRoZXJjYXJkIiwiZGVmYXVsdERhdGFTdG9yZSIsInJlbmRlckhvbWUiLCJkZWZhdWx0TG9jYXRpb25EYXRhIiwicmVuZGVyRmF2b3JpdGVTdGF0ZSIsImNhcmRIZWFkZXJCb3R0b20iLCJ0aW1lU2luY2VMYXN0VXBkYXRlIiwicmVmcmVzaEljb24iLCJ0aW1lU3RhbXAiLCJsYXN0V2VhdGhlclVwZGF0ZVRpbWUiLCJ0aW1lU2luY2VMYXN0VXBkYXRlRGl2IiwiYWRkVG9GYXZvcml0ZSIsImZhdm9yaXRlSWNvbiIsImFkZFRvRmF2b3JpdGVCVG4iLCJhZGRUb0Zhdm9yaXRlRGl2IiwicmVtb3ZlRnJvbUZhdm9yaXRlIiwicmVtb3ZlSWNvbiIsInJlbW92ZUZyb21GYXZvcml0ZUJ0biIsImhlYWRlckJvdHRvbUxlZnRGcmFnbWVudCIsInJlbmRlcmluZ0hvbWUiLCJoZWFkZXJCb3R0b21MZWZ0IiwiaGVhZGVyQm90dG9tUmlnaHQiLCJoZWFkZXJCb3R0b20iLCJyZW5kZXJpbmdGYXZvcml0ZSIsImxvZyIsInRvZ2dsZXJTd2l0Y2giLCJpc1RvZ2dsZWQiLCJ0b2dnbGVPZmYiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjaGlsZHJlbiIsInRvZ2dsZU9uIiwiY2Vsc2l1cyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJmYWhyZW5oZWl0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid2VhdGhlckNhcmRCb3R0b20iLCJsb2FkaW5nIiwiYXJ0aWNsZSIsImZlZWxzTGlrZUljb24iLCJmZWVsc0xpa2UiLCJ0b0ZpeGVkIiwiZmVlbHNMaWtlRGl2IiwiaHVtaWRpdHlJY29uIiwiaHVtaWRpdHkiLCJodW1pZGl0eURpdiIsIndpbmRJY29uIiwid2luZCIsIndpbmREaXYiLCJwcmVzc3VyZUljb24iLCJwcmVzc3VyZSIsInByZXNzdXJlRGl2Iiwib3RoZXJXZWF0aGVyRGV0YWlscyIsInJlbmRlclVzZXJUaW1lIiwibG9jYXRpb25JY29uIiwiYWRkSWNvbiIsImNpdHkiLCJsb2NhdGlvbiIsImNvdW50cnkiLCJsb2NhbFRpbWUiLCJ0aW1lWm9uZSIsImhlYWRlclRvcCIsImFycm93Iiwid2VhdGhlckljb24iLCJzcmMiLCJpY29uIiwiYWx0Iiwid2VhdGhlcmRlc2NyaXB0aW9uIiwid2VhdGhlcmRlc2MiLCJ3ZWF0aGVyTGVmdCIsImRlZyIsImNlbHNpdXNTcGFuIiwidGVtcGVyYXR1cmUiLCJ0ZW1wIiwiaGlnaCIsIm1heFRlbXAiLCJsb3ciLCJtaW5UZW1wIiwibWlkIiwiZGVncmVlQ2hhcmFjdGVyIiwibWluTWF4IiwiY2hlY2tib3giLCJ0b2dnbGVPbkljb24iLCJ0b2dnbGVPZmZJY29uIiwibGFiZWwiLCJmb3IiLCJmYWhyZW5oZWl0U3ltYm9sIiwiYWRkQ2xhc3MiLCJjZWxzaXVzU3ltYm9sIiwidG9nZ2xlcnMiLCJ0b2dnbGVyc1dyYXBwZXIiLCJ0ZW1wV3JhcHBlciIsIndlYXRoZXJSaWdodCIsImNsYXNzT25lIiwiY2xhc3NUd28iLCJ1c2VkQ2xhc3MiLCJ3ZWF0aGVyV3JhcHBlciIsImRlZmF1bHRDbGFzcyIsImRhdGFDb250cm9sbGVyIiwiaG9tZVZpZXdEYXRhIiwibG9jYXRpb25LZXkiLCJkZWZhdWx0TG9jYXRpb25XZWF0aGVyRGF0YSIsImdldERhdGFGcm9tU3RvcmFnZSIsImlzRGVmYXVsdFJlcXVlc3QiLCJyZXRyaWV2ZWRXZWF0aGVyRGF0YSIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldERhdGFUb1N0b3JhZ2UiLCJzZXRJdGVtIiwic2V0RGF0YSIsImNsZWFyRGVmYXVsdERhdGEiLCJkZWZhdWx0UmVxdWVzdFN0YXRlIiwiZ2V0TG9jYXRpb25Gcm9tU3RvcmFnZSIsInJldHJpZXZlZExvY2F0aW9uIiwic2V0TG9jYXRpb25Ub1N0b3JhZ2UiLCJzZXRMb2NhdGlvbiIsInNlbGVjdGVkTG9jYXRpb24iLCJmYXZvcml0ZUtleSIsImZhdm9yaXRlTG9jYXRpb25zIiwiZ2V0RmF2b3JpdGVzRnJvbVN0b3JhZ2UiLCJyZXRyaWV2ZWRGYXZvcml0ZXMiLCJzZXRGYXZvcml0ZXNUb1N0b3JhZ2UiLCJhZGRGYXZvcml0ZSIsIm9iaiIsImRlbGV0ZUZhdm9yaXRlIiwibmV3RmF2b3JpdGVzIiwiZmlsdGVyIiwidXBkYXRlRmF2b3JpdGVzIiwidXBkYXRlZEFycmF5IiwiY2hlY2tFcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGlzcGxheU9uRXJyb3IiLCJlcnIiLCJpc0xvYWRpbmciLCJzYWRGYWNlIiwic2FkRmFjZVNwYW4iLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiZGFzaE9uZSIsImRhc2hUd28iLCJmaXhPbmUiLCJmaXhUd28iLCJmaXhTdWdnZXN0aW9uIiwiZXJyb3JXcmFwcGVyIiwib25FcnJvckRpdiIsInNldFRlbXBlcmF0dXJlVW5pdCIsImdldERhdGEiLCJyZW5kZXJpbmdTdGF0ZSIsInNldEN1cnJlbnRMb2NhdGlvbiIsImlucHV0IiwiZWxlbWVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoT3V0cHV0Iiwic2V0RGVmYXVsdExvY2F0aW9uIiwic2V0SXNSZW5kZXJpbmdEZWZhdWx0IiwiY2xvc2VEZWZhdWx0TG9jYXRpb25Nb2RhbCIsImNvbnRhaW5zIiwidXBkYXRlRGVmYXVsdExvY2F0aW9uV2VhdGhlckRhdGEiLCJpc1RydXRoeSIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50Iiwic3BsaXQiLCJ0b2dnbGVyIiwibWFpbkVsZW1lbnQiLCJoMSIsImZpcnN0RWxlbWVudENoaWxkIiwiY2hlY2tlZCIsImZvY3VzSW5wdXQiLCJmb2N1cyIsImJhY2tUb0hvbWUiLCJuYXZFbGVtZW50IiwiaG9tZSIsImV2ZW50cyIsImZhdm9yaXRlQ291bnQiLCJ0ZXh0Q29udGVudCIsImRlbGV0ZWZhdm9yaXRlIiwiZmF2IiwiZmF2QnRuIiwidHJhbmZvcm1EYXRhIiwiQVBJX0tFWSIsInVybCIsImZldGNoIiwianNvbiIsImVsZSIsImNsYXNzZXMiLCJ0YWciLCJub2RlIiwiYXR0cmlidXRlIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJrZXlzIiwic2V0QXR0cmlidXRlIiwiY2hhciIsImRlZ3JlZUNoYXIiLCJjaGFyYWN0ZXIiLCJyZWNoYXIiLCJrZXl3b3JkIiwic3BhbiIsImxvYWRpbmdEaXYiLCJwYXJzZUlTTyIsImF1dG9VcGRhdGVUaW1lIiwidXBkYXRlVGltZSIsInRpbWVTbmFwIiwic2V0VGltZU91dCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJpbml0aWFsaXplIiwiZGUiLCJpbml0aWFsUGFnZUxvYWQiLCJ3aW5kb3ciLCJwYXRobmFtZSIsImlzUmVuZGVyaW5nRmF2b3JpdGUiLCJzZXRJc1JlbmRlcmluZ0Zhdm9yaXRlIiwibmV3U3RhdGUiLCJpc1JlbmRlcmluZ0hvbWUiLCJzZXRJc1JlbmRlcmluZ0hvbWUiLCJzdGF0ZSIsImRheXNPZldlZWsiLCJkYXlPZldlZWsiLCJ1c2VyVGltZSIsInRpbWVab25lT2Zmc2V0IiwibG9jYWxUaW1lT2Zmc2V0IiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ1dGNUaW1lIiwibG9jYXRpb25PZmZzZXQiLCJsb2NhdGlvblRpbWUiLCJnZXREYXkiLCJob3VyQW5kTWludXRlcyIsInRvTG9jYWxlU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsImRpc2xheVRpbWUiLCJ0b0ZhaHJlbmhlaXQiLCJ0b0NlbHNpdXMiLCJrZWx2aW5Vbml0IiwidW5pcWlkIiwiZGVzY3JpcHRpb24iLCJ0ZW1wX21heCIsInRlbXBfbWluIiwiZmVlbHNfbGlrZSIsInNwZWVkIiwic3lzIiwibmFtZSIsInRpbWV6b25lIiwibWFpblNlY3Rpb24iLCJhcHAiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==