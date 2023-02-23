"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(_ref) {
  var value = _ref.value;
  return "(function(".concat(value.variable, ") {").concat(value.variable === 'input' ? '' : "_ = _.__assign__('".concat(value.variable, "', ").concat(value.variable, ", _); "), "return ").concat(function () {
    var Generator = require('./generator')["default"];
    return Generator(value.definition);
  }(), "})");
};
exports["default"] = _default;