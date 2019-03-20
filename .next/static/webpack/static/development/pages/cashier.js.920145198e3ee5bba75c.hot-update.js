webpackHotUpdate("static/development/pages/cashier.js",{

/***/ "./services/Util.js":
/*!**************************!*\
  !*** ./services/Util.js ***!
  \**************************/
/*! exports provided: dateFormatToThai, dateOnlyFormatToThai, getDateOnly, mapStatus, mapLevelName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormatToThai", function() { return dateFormatToThai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateOnlyFormatToThai", function() { return dateOnlyFormatToThai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateOnly", function() { return getDateOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStatus", function() { return mapStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapLevelName", function() { return mapLevelName; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

var dateFormatToThai = function dateFormatToThai(dateIn) {
  var RE_DATE = /(?<y>[0-9]{4})\-(?<m>[0-9]{2})\-(?<d>[0-9]{2})(T)*(?<time>[0-9\:]*)/g;
  var matchObj = RE_DATE.exec(dateIn); //console.log('matchObj->', matchObj)

  return matchObj !== undefined && matchObj !== null ? "".concat(matchObj.groups.d, "/").concat(matchObj.groups.m, "/").concat(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(matchObj.groups.y, 10) + 543, " ").concat(matchObj.groups.time) : "";
};
var dateOnlyFormatToThai = function dateOnlyFormatToThai(dateIn) {
  var RE_DATE = /(?<y>[0-9]{4})\-(?<m>[0-9]{2})\-(?<d>[0-9]{2})(T)*(?<time>[0-9\:]*)/g;
  var matchObj = RE_DATE.exec(dateIn); //console.log('matchObj->', matchObj)

  return matchObj !== undefined && matchObj !== null ? "".concat(matchObj.groups.d, "/").concat(matchObj.groups.m, "/").concat(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(matchObj.groups.y, 10) + 543) : "";
};
var getDateOnly = function getDateOnly(dateTime) {
  var RE_DATE = /(?<y>[0-9]{4})\-(?<m>[0-9]{2})\-(?<d>[0-9]{2})(T)*(?<time>[0-9\:]*)/g;
  var matchObj = RE_DATE.exec(dateTime); //console.log('matchObj->', matchObj)

  return matchObj !== undefined && matchObj !== null ? "".concat(matchObj.groups.y, "-").concat(matchObj.groups.m, "-").concat(matchObj.groups.d) : dateTime;
};
var mapStatus = function mapStatus(val) {
  var txt = "";

  switch (val) {
    case 1:
      txt = "ขออนุมัติ";
      break;

    case 2:
      txt = "อนุมัติแล้ว";
      break;

    case 3:
      txt = "ไม่อนุมัติ";
      break;

    case 4:
      txt = "ยกเลิก";
      break;

    case 5:
      txt = "สําเร็จแล้ว";
      break;

    default:
      break;
  }

  return txt;
};
var mapLevelName = function mapLevelName(status) {
  var txt = "";

  switch (status) {
    case 1:
      txt = "Junior";
      break;

    case 2:
      txt = "Senior";
      break;

    case 3:
      txt = "Manager";
      break;

    default:
      break;
  }

  return txt;
};

/***/ })

})
//# sourceMappingURL=cashier.js.920145198e3ee5bba75c.hot-update.js.map