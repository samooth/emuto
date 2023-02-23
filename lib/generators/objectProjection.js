"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(Generator) {
  return function (_ref) {
    var value = _ref.value;
    return "_.__objectProjection__(".concat(Generator(value.left), ", ").concat(JSON.stringify(value.right), ", ").concat(value.optional ? 'true' : 'false', ", _)");
  };
};
exports["default"] = _default;