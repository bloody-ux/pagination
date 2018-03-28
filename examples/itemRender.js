webpackJsonp([11],{

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"rc-pagination/assets/index.less\"");
throw new Error("Cannot find module \"rc-pagination\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);





var itemRender = function itemRender(current, type, element) {
  if (type === 'page') {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'a',
      { href: '#' + current },
      current
    );
  }
  return element;
};

var textItemRender = function textItemRender(current, type, element) {
  if (type === 'prev') {
    return 'Prev';
  }
  if (type === 'next') {
    return 'Next';
  }
  return element;
};

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_pagination___default.a, { total: 100, itemRender: itemRender }),
  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_pagination___default.a, { total: 100, itemRender: textItemRender })
), document.getElementById('__react-content'));

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(173);


/***/ })

},[195]);
//# sourceMappingURL=itemRender.js.map