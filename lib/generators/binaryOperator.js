"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(_ref) {
  var value = _ref.value;
  return "".concat(value.map(function (item) {
    var Generator = require('./generator')["default"];
    return Generator(item);
  }).join(''));
};
exports["default"] = _default;