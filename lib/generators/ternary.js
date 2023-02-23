"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(_ref) {
  var value = _ref.value;
  var Generator = require('./generator')["default"];
  return "((".concat(Generator(value.middle), ") ? (").concat(Generator(value.left), ") : (").concat(Generator(value.right), "))");
};
exports["default"] = _default;