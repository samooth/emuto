"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parser = _interopRequireDefault(require("./parsers/parser"));
var _generator = _interopRequireDefault(require("./generators/generator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = function _default(input) {
  var _parse = (0, _parser["default"])(input),
    value = _parse.value;
  return "(function(_) { return (function(input) { return ".concat((0, _generator["default"])(value), "})})");
};
exports["default"] = _default;