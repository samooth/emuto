"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
var _crap = _interopRequireDefault(require("../crap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BinaryOperatorParser = function BinaryOperatorParser(OperandParser, OperatorParser, description) {
  return _parsimmon["default"].lazy(function () {
    var OperatorParser_ = OperatorParser.node('primitive');
    return _parsimmon["default"].seq(OperandParser, _parsimmon["default"].seq(_crap["default"].then(OperatorParser_), _crap["default"].then(OperandParser)).many()).map(function (value) {
      return value[1].length > 0 ? {
        name: 'binaryOperation',
        value: value[1].reduce(function (a, b) {
          return a.concat(b);
        }, [value[0]])
      } : value[0];
    }).desc(description);
  });
};
var _default = BinaryOperatorParser;
exports["default"] = _default;