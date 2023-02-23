"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _parsimmon = _interopRequireDefault(require("parsimmon"));
var _object = _interopRequireDefault(require("./collections/object"));
var _primitive = _interopRequireDefault(require("./primitive"));
var _inputProp = _interopRequireDefault(require("./inputProp"));
var _list = _interopRequireDefault(require("./collections/list"));
var _variable = _interopRequireDefault(require("./variable"));
var _lambda = _interopRequireDefault(require("./lambda"));
var _parentheses = _interopRequireDefault(require("./parentheses"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = _parsimmon["default"].alt(_parentheses["default"], _list["default"], _object["default"], _lambda["default"], _inputProp["default"], _variable["default"], _primitive["default"]);
exports["default"] = _default;