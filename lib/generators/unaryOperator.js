"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(_ref) {
  var value = _ref.value;
  var Generator = require('./generator')["default"];
  return "(".concat(value.operator.value, "(").concat(Generator(value.operand), "))");
};
exports["default"] = _default;