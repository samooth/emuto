"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _primitive = _interopRequireDefault(require("./primitive"));
var _tuple = _interopRequireDefault(require("./tuple"));
var _inputProp = _interopRequireDefault(require("./inputProp"));
var _valueProp = _interopRequireDefault(require("./valueProp"));
var _list = _interopRequireDefault(require("./list"));
var _parentheses = _interopRequireDefault(require("./parentheses"));
var _object = _interopRequireDefault(require("./object"));
var _projection = _interopRequireDefault(require("./projection"));
var _objectProjection = _interopRequireDefault(require("./objectProjection"));
var _pipe = _interopRequireDefault(require("./pipe"));
var _functionCall = _interopRequireDefault(require("./functionCall"));
var _binaryOperator = _interopRequireDefault(require("./binaryOperator"));
var _unaryOperator = _interopRequireDefault(require("./unaryOperator"));
var _ternary = _interopRequireDefault(require("./ternary"));
var _assignment = _interopRequireDefault(require("./assignment"));
var _lambda = _interopRequireDefault(require("./lambda"));
var _variable = _interopRequireDefault(require("./variable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Generator = function Generator(node) {
  switch (node.name) {
    case 'primitive':
      return (0, _primitive["default"])(node);
    case 'variable':
      return (0, _variable["default"])(node);
    case 'tuple':
      return (0, _tuple["default"])(node);
    case 'inputProp':
      return (0, _inputProp["default"])(node);
    case 'list':
      return (0, _list["default"])(node);
    case 'pipe':
      return (0, _pipe["default"])(node);
    case 'valueProp':
      return (0, _valueProp["default"])(Generator)(node);
    case 'object':
      return (0, _object["default"])(node);
    case 'parentheses':
      return (0, _parentheses["default"])(node);
    case 'projection':
      return (0, _projection["default"])(Generator)(node);
    case 'objectProjection':
      return (0, _objectProjection["default"])(Generator)(node);
    case 'functionCall':
      return (0, _functionCall["default"])(Generator)(node);
    case 'lambda':
      return (0, _lambda["default"])(node);
    case 'binaryOperation':
      return (0, _binaryOperator["default"])(node);
    case 'unaryOperation':
      return (0, _unaryOperator["default"])(node);
    case 'assignment':
      return (0, _assignment["default"])(Generator)(node);
    case 'ternary':
      return (0, _ternary["default"])(node);
    default:
      throw new Error("Unknown node name '".concat(node.name, "'"));
  }
};
var _default = Generator;
exports["default"] = _default;