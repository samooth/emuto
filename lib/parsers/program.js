"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
var _pipe = _interopRequireDefault(require("./pipe"));
var _assignment = _interopRequireDefault(require("./assignment"));
var _crap = _interopRequireDefault(require("./crap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = _parsimmon["default"].alt(_assignment["default"], _pipe["default"]).trim(_crap["default"]).map(function (value) {
  return value;
});
exports["default"] = _default;