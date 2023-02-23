"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(Generator) {
  return function (_ref) {
    var value = _ref.value;
    return value.right ? "_.".concat(value.left.value, "(").concat(Generator(value.right), ")(input)") : "_.".concat(value.left.value, "(input)");
  };
};
exports["default"] = _default;