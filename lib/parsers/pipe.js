"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PipeParser = _parsimmon["default"].lazy(function () {
  var TernaryParser = require('./ternary')["default"];
  return TernaryParser.sepBy1(_parsimmon["default"].regexp(/\s*\|\s*/)).map(function (value) {
    return value.slice(1).reduce(function (a, b) {
      return {
        name: 'pipe',
        value: {
          left: a,
          right: b
        }
      };
    }, value[0]);
  });
});
var _default = PipeParser;
exports["default"] = _default;