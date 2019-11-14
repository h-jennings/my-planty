webpackHotUpdate("static/development/pages/[username].js",{

/***/ "./utils/dateUtils.js":
/*!****************************!*\
  !*** ./utils/dateUtils.js ***!
  \****************************/
/*! exports provided: getCurrentMonth, getCurrentDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentMonth", function() { return getCurrentMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDate", function() { return getCurrentDate; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function getCurrentMonth() {
  var momentInstance = new moment__WEBPACK_IMPORTED_MODULE_0___default.a();
  var shortMonth = momentInstance.format('MMM');
  return shortMonth;
}
function getCurrentDate() {
  var momentInstance = new moment__WEBPACK_IMPORTED_MODULE_0___default.a();
  var date = momentInstance.format('DD');
  return date;
}

/***/ })

})
//# sourceMappingURL=[username].js.b0b82b6556954731bf20.hot-update.js.map