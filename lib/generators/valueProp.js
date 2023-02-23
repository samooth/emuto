"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(Generator) {
  return function (_ref) {
    var value = _ref.value;
    return value.optional ? "_.__opt__(".concat(Generator(value.left), ", function(x) {return x").concat(value.right, "})") : "".concat(Generator(value.left)).concat(value.right);
  };
};
exports["default"] = _default;