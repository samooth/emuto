"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = _parsimmon["default"].regexp(/\.[$A-Z_][0-9A-Z_$]*/i).map(function (value) {
  return {
    name: 'inputProp',
    value: value
  };
}).desc('inputProp');
exports["default"] = _default;