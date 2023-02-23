"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = _parsimmon["default"].lazy(function () {
  var ProgramParser = require('./program')["default"];
  return _parsimmon["default"].seq(_parsimmon["default"].string('('), ProgramParser, _parsimmon["default"].string(')')).map(function (value) {
    return {
      name: 'parentheses',
      value: value[1]
    };
  }).desc('parentheses');
});
exports["default"] = _default;