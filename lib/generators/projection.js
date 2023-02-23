"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(Generator) {
  return function (_ref) {
    var value = _ref.value;
    return "_.projection(".concat(Generator(value.left), ", ").concat(Generator(value.right), ", ").concat(value.optional ? 'true' : 'false', ")");
  };
};
exports["default"] = _default;