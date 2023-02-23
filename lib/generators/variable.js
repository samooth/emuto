"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(_ref) {
  var value = _ref.value;
  return value === '$' ? 'input' : "_.get('".concat(value.slice(1), "')");
};
exports["default"] = _default;