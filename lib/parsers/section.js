"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
var _functionCall = _interopRequireDefault(require("./functionCall"));
var _mapFunctionCall = _interopRequireDefault(require("./mapFunctionCall"));
var _math = _interopRequireDefault(require("./math/math"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = _parsimmon["default"].alt(_math["default"], _functionCall["default"], _mapFunctionCall["default"]);
exports["default"] = _default;