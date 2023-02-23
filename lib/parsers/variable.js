"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
var _identifier = _interopRequireDefault(require("./identifier"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = _parsimmon["default"].string('$').then(_identifier["default"].atMost(1)).map(function (value) {
  return {
    name: 'variable',
    value: value && value.length ? "$".concat(value[0].value) : '$'
  };
}).desc('variable');
exports["default"] = _default;