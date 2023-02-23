"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = _parsimmon["default"].regexp(/[a-zA-Z][0-9a-zA-Z_$]*/i).chain(function (identifier) {
  var exceptions = ['null', 'false', 'true', 'if', 'each'];
  if (exceptions.indexOf(identifier) < 0) {
    return _parsimmon["default"].of(identifier);
  } else {
    return _parsimmon["default"].fail("identifier but got keyword ".concat(identifier));
  }
}).map(function (value) {
  return {
    name: 'identifier',
    value: value
  };
}).desc('identifier');
exports["default"] = _default;