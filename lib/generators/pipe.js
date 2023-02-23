"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(_ref) {
  var value = _ref.value;
  var Generator = require('./generator')["default"];
  var compiledLeft = Generator(value.left);
  var compiledRight = Generator(value.right);
  return "(function (input) {return ".concat(compiledRight, "})(").concat(compiledLeft, ")");
};
exports["default"] = _default;